"use client";

import { useRef, useCallback, useEffect } from "react";

// Musical scales in Hz
const SCALES = {
  // Standard guitar tuning (low to high)
  guitar: [82.41, 110.0, 146.83, 196.0, 246.94, 329.63], // E2 A2 D3 G3 B3 E4
  // C major pentatonic (repeating octaves)
  pentatonic: [130.81, 146.83, 164.81, 196.0, 220.0, 261.63, 293.66, 329.63], // C3 D3 E3 G3 A3 C4 D4 E4
  // Harmonic series from A2
  harmonic: [110, 220, 330, 440, 550, 660, 770, 880],
} as const;

export type ScaleType = keyof typeof SCALES | number[];
export type TriggerMode = "pluck" | "drone" | "velocity";
export type OscillatorType = "sine" | "triangle" | "sawtooth" | "square";

interface WaveAudioConfig {
  mode: TriggerMode;
  scale: ScaleType;
  volume: number;
  oscillatorType: OscillatorType;
  enabled: boolean;
}

interface WaveAudioReturn {
  enable: () => void;
  disable: () => void;
  isEnabled: boolean;
  triggerNote: (lineIndex: number, totalLines: number, velocity: number) => void;
  updateDrone: (yPosition: number, height: number, velocity: number) => void;
  stopDrone: () => void;
  setConfig: (config: Partial<WaveAudioConfig>) => void;
  config: WaveAudioConfig;
}

export function useWaveAudio(
  initialConfig: Partial<WaveAudioConfig> = {}
): WaveAudioReturn {
  const audioContextRef = useRef<AudioContext | null>(null);
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const enabledRef = useRef(false);
  const lastTriggeredLineRef = useRef<number>(-1);
  const activeNotesRef = useRef<Map<number, { oscs: OscillatorNode[]; gains: GainNode[] }>>(
    new Map()
  );

  const configRef = useRef<WaveAudioConfig>({
    mode: "pluck",
    scale: "guitar",
    volume: 0.3,
    oscillatorType: "triangle",
    enabled: false,
    ...initialConfig,
  });

  const getScale = useCallback((): number[] => {
    const scale = configRef.current.scale;
    if (Array.isArray(scale)) return scale;
    return [...SCALES[scale]];
  }, []);

  const getFrequencyForLine = useCallback(
    (lineIndex: number, totalLines: number): number => {
      const scale = getScale();
      // Map line index to scale, wrapping if needed
      const scaleIndex = Math.floor(
        (lineIndex / totalLines) * scale.length
      );
      return scale[Math.min(scaleIndex, scale.length - 1)];
    },
    [getScale]
  );

  const enable = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
      masterGainRef.current = audioContextRef.current.createGain();
      masterGainRef.current.gain.value = configRef.current.volume;
      masterGainRef.current.connect(audioContextRef.current.destination);
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    enabledRef.current = true;
    configRef.current.enabled = true;
  }, []);

  const disable = useCallback(() => {
    enabledRef.current = false;
    configRef.current.enabled = false;
    // Stop any active oscillators
    activeNotesRef.current.forEach(({ oscs, gains }) => {
      gains.forEach((gain) => {
        gain.gain.setTargetAtTime(0, audioContextRef.current!.currentTime, 0.1);
      });
      setTimeout(() => oscs.forEach((osc) => osc.stop()), 200);
    });
    activeNotesRef.current.clear();
    if (droneOscRef.current) {
      droneOscRef.current.stop();
      droneOscRef.current = null;
    }
  }, []);

  const triggerNote = useCallback(
    (lineIndex: number, totalLines: number, velocity: number) => {
      if (!enabledRef.current || !audioContextRef.current || !masterGainRef.current) return;

      // Avoid retriggering same line too quickly
      if (lineIndex === lastTriggeredLineRef.current) return;
      lastTriggeredLineRef.current = lineIndex;

      // Clear trigger after delay to allow re-trigger
      setTimeout(() => {
        if (lastTriggeredLineRef.current === lineIndex) {
          lastTriggeredLineRef.current = -1;
        }
      }, 100);

      const ctx = audioContextRef.current;
      const freq = getFrequencyForLine(lineIndex, totalLines);
      const now = ctx.currentTime;

      // Classical guitar harmonics - nylon strings emphasize fundamental
      const harmonics = [
        { ratio: 1, gain: 1.0 },    // fundamental (strongest)
        { ratio: 2, gain: 0.4 },    // octave
        { ratio: 3, gain: 0.15 },   // 12th (fifth above octave)
        { ratio: 4, gain: 0.08 },   // 2nd octave
      ];

      // Low-pass filter for warmth (nylon string character)
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(3500, now);
      filter.frequency.exponentialRampToValueAtTime(1200, now + 0.5);
      filter.Q.value = 1;

      // Velocity affects volume
      const velocityMultiplier = configRef.current.mode === "velocity"
        ? Math.min(1, velocity / 50)
        : 1;

      // Note envelope for classical guitar
      const noteGain = ctx.createGain();
      const attackTime = 0.005;
      const decayTime = 0.3;
      const sustainLevel = 0.15 * velocityMultiplier;
      const releaseTime = 2.0;

      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(velocityMultiplier, now + attackTime);
      noteGain.gain.exponentialRampToValueAtTime(sustainLevel, now + attackTime + decayTime);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + releaseTime);

      const oscillators: OscillatorNode[] = [];
      const gains: GainNode[] = [];

      // Create oscillator for each harmonic
      harmonics.forEach(({ ratio, gain: harmonicGain }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = "sine"; // Sine waves for cleaner classical guitar tone
        osc.frequency.value = freq * ratio;
        oscGain.gain.value = harmonicGain;

        osc.connect(oscGain);
        oscGain.connect(filter);
        oscillators.push(osc);
        gains.push(oscGain);
      });

      filter.connect(noteGain);
      noteGain.connect(masterGainRef.current);

      // Start all oscillators
      oscillators.forEach((osc) => {
        osc.start(now);
        osc.stop(now + releaseTime + 0.1);
      });

      // Track active note for cleanup
      const noteKey = lineIndex;
      if (activeNotesRef.current.has(noteKey)) {
        const prev = activeNotesRef.current.get(noteKey)!;
        prev.gains.forEach((g) => g.gain.setTargetAtTime(0, now, 0.05));
        setTimeout(() => prev.oscs.forEach((o) => o.stop()), 100);
      }
      activeNotesRef.current.set(noteKey, { oscs: oscillators, gains });

      // Clean up after note ends
      oscillators[0].onended = () => {
        if (activeNotesRef.current.get(noteKey)?.oscs[0] === oscillators[0]) {
          activeNotesRef.current.delete(noteKey);
        }
      };
    },
    [getFrequencyForLine]
  );

  const updateDrone = useCallback(
    (yPosition: number, height: number, velocity: number) => {
      if (!enabledRef.current || !audioContextRef.current || !masterGainRef.current) return;

      const ctx = audioContextRef.current;
      const scale = getScale();

      // Map Y position to frequency range
      const ratio = Math.max(0, Math.min(1, yPosition / height));
      const minFreq = scale[0];
      const maxFreq = scale[scale.length - 1];
      const freq = minFreq + (maxFreq - minFreq) * (1 - ratio); // Invert so top = high

      if (!droneOscRef.current) {
        droneOscRef.current = ctx.createOscillator();
        droneGainRef.current = ctx.createGain();

        droneOscRef.current.type = configRef.current.oscillatorType;
        droneOscRef.current.frequency.value = freq;
        droneGainRef.current.gain.value = 0;

        droneOscRef.current.connect(droneGainRef.current);
        droneGainRef.current.connect(masterGainRef.current);
        droneOscRef.current.start();
      }

      // Smooth frequency transition
      droneOscRef.current.frequency.setTargetAtTime(freq, ctx.currentTime, 0.1);

      // Velocity affects volume in velocity mode
      const targetGain = configRef.current.mode === "velocity"
        ? Math.min(1, velocity / 30) * 0.5
        : 0.4;
      droneGainRef.current!.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.1);
    },
    [getScale]
  );

  const stopDrone = useCallback(() => {
    if (droneGainRef.current && audioContextRef.current) {
      droneGainRef.current.gain.setTargetAtTime(
        0,
        audioContextRef.current.currentTime,
        0.3
      );
    }
  }, []);

  const setConfig = useCallback((newConfig: Partial<WaveAudioConfig>) => {
    configRef.current = { ...configRef.current, ...newConfig };

    // Update master volume if changed
    if (newConfig.volume !== undefined && masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(
        newConfig.volume,
        audioContextRef.current!.currentTime,
        0.1
      );
    }

    // Update drone oscillator type if changed
    if (newConfig.oscillatorType !== undefined && droneOscRef.current) {
      droneOscRef.current.type = newConfig.oscillatorType;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disable();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [disable]);

  return {
    enable,
    disable,
    isEnabled: enabledRef.current,
    triggerNote,
    updateDrone,
    stopDrone,
    setConfig,
    config: configRef.current,
  };
}

export { SCALES };
