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
  const activeNotesRef = useRef<Map<number, { osc: OscillatorNode; gain: GainNode }>>(
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
    activeNotesRef.current.forEach(({ osc, gain }) => {
      gain.gain.setTargetAtTime(0, audioContextRef.current!.currentTime, 0.1);
      setTimeout(() => osc.stop(), 200);
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

      // Create oscillator and gain for this note
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = configRef.current.oscillatorType;
      osc.frequency.value = freq;

      // Velocity affects volume
      const velocityMultiplier = configRef.current.mode === "velocity"
        ? Math.min(1, velocity / 50)
        : 1;

      const attackTime = 0.01;
      const decayTime = 0.1;
      const sustainLevel = 0.3 * velocityMultiplier;
      const releaseTime = 1.5;

      const now = ctx.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(velocityMultiplier, now + attackTime);
      gainNode.gain.linearRampToValueAtTime(sustainLevel, now + attackTime + decayTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + releaseTime);

      osc.connect(gainNode);
      gainNode.connect(masterGainRef.current);

      osc.start(now);
      osc.stop(now + releaseTime + 0.1);

      // Track active note
      const noteKey = lineIndex;
      if (activeNotesRef.current.has(noteKey)) {
        const prev = activeNotesRef.current.get(noteKey)!;
        prev.gain.gain.setTargetAtTime(0, now, 0.05);
        setTimeout(() => prev.osc.stop(), 100);
      }
      activeNotesRef.current.set(noteKey, { osc, gain: gainNode });

      // Clean up after note ends
      osc.onended = () => {
        if (activeNotesRef.current.get(noteKey)?.osc === osc) {
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
