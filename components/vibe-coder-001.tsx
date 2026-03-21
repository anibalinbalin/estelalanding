"use client";

import { useState, useCallback, useEffect, useRef } from "react";

// --- Curated code snippets (5 exactly → 5 × 20% = 100%) ---
const SNIPPETS = [
  `fn deploy() {\n  ship(verified);\n}`,
  `const quality =\n  review(output);\nreturn quality;`,
  `export async\n  function ship()\n{ return ok; }`,
  `let ai = generate();\ncheck(ai.output);\nship(verified);`,
  `await test(code);\nsign(output);\ndeploy(prod);`,
];

const PROMPT_TEXTS = ["reviewing...", "analyzing...", "checking...", "shipping..."];

type ReviewStatus = "reviewing" | "accepted" | "retried";
type ButtonId = "accept" | "retry" | "prompt" | "prev" | "next" | null;

// --- Click sound (Web Audio noise-burst, inline) ---
const SOUND_PROFILES = {
  accept: { freqBase: 2000, freqRange: 800, gain: 0.45 },
  retry:  { freqBase: 3000, freqRange: 1200, gain: 0.4 },
} as const;

function useClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);

  const play = useCallback((type: keyof typeof SOUND_PROFILES) => {
    if (!ctxRef.current) {
      const ctx = new AudioContext();
      ctxRef.current = ctx;
      const len = Math.ceil(0.004 * ctx.sampleRate);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 25);
      bufferRef.current = buf;
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();
    const p = SOUND_PROFILES[type];
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = (p.freqBase + p.freqRange * Math.random()) * (1 + (Math.random() - 0.5) * 0.3);
    filter.Q.value = 8;
    const gain = ctx.createGain();
    gain.gain.value = p.gain;
    filter.connect(gain);
    gain.connect(ctx.destination);
    const src = ctx.createBufferSource();
    src.buffer = bufferRef.current!;
    src.connect(filter);
    src.start();
  }, []);

  useEffect(() => {
    return () => { ctxRef.current?.close(); ctxRef.current = null; };
  }, []);

  return play;
}

// --- Main component ---
export function VibeCoder001() {
  const [snippet, setSnippet] = useState(0);
  const [status, setStatus] = useState<ReviewStatus>("reviewing");
  const [progress, setProgress] = useState(0);
  const [pressed, setPressed] = useState<ButtonId>(null);
  const [promptIdx, setPromptIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const pressRef = useRef<ReturnType<typeof setTimeout>>(null);
  const advanceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const playSound = useClickSound();

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    return () => {
      if (pressRef.current) clearTimeout(pressRef.current);
      if (advanceRef.current) clearTimeout(advanceRef.current);
    };
  }, []);

  const flash = useCallback((btn: ButtonId) => {
    if (pressRef.current) clearTimeout(pressRef.current);
    setPressed(btn);
    pressRef.current = setTimeout(() => setPressed(null), 150);
  }, []);

  const nextSnippet = useCallback(() => {
    setSnippet((s) => (s + 1) % SNIPPETS.length);
    setStatus("reviewing");
  }, []);

  const handleAccept = useCallback(() => {
    if (isMobile) return;
    flash("accept");
    playSound("accept");
    setStatus("accepted");
    setProgress((p) => {
      const next = Math.min(p + 20, 100);
      return next;
    });
    if (advanceRef.current) clearTimeout(advanceRef.current);
    advanceRef.current = setTimeout(() => {
      setProgress((p) => (p >= 100 ? 0 : p));
      nextSnippet();
    }, 1000);
  }, [isMobile, flash, playSound, nextSnippet]);

  const handleRetry = useCallback(() => {
    if (isMobile) return;
    flash("retry");
    playSound("retry");
    setStatus("retried");
    if (advanceRef.current) clearTimeout(advanceRef.current);
    advanceRef.current = setTimeout(() => {
      let next: number;
      do { next = Math.floor(Math.random() * SNIPPETS.length); } while (next === snippet && SNIPPETS.length > 1);
      setSnippet(next);
      setStatus("reviewing");
    }, 800);
  }, [isMobile, flash, playSound, snippet]);

  const handlePrompt = useCallback(() => {
    if (isMobile) return;
    flash("prompt");
    setPromptIdx((i) => (i + 1) % PROMPT_TEXTS.length);
  }, [isMobile, flash]);

  const handlePrev = useCallback(() => {
    if (isMobile) return;
    flash("prev");
    setSnippet((s) => (s - 1 + SNIPPETS.length) % SNIPPETS.length);
    setStatus("reviewing");
  }, [isMobile, flash]);

  const handleNext = useCallback(() => {
    if (isMobile) return;
    flash("next");
    setSnippet((s) => (s + 1) % SNIPPETS.length);
    setStatus("reviewing");
  }, [isMobile, flash]);

  if (!mounted) return null;

  const amber = "rgb(245, 185, 68)";
  const bright = "rgb(255, 215, 100)";
  const green = "#4ade80";
  const orange = "#fb923c";

  const statusLine =
    status === "accepted" ? { text: "> merged", color: green } :
    status === "retried"  ? { text: "> retrying...", color: orange } :
    { text: "> _", color: amber };

  // Inner screen = 18 chars (between single-line │ borders)
  const filled = Math.round(progress / 20); // 0-5
  const bar = "=".repeat(filled) + "-".repeat(5 - filled);
  const pct = String(progress).padStart(3);
  const screenLine = status === "accepted" && progress >= 100
    ? "SHIPPED!          "
    : `PROGRESS:${bar}${pct}%`;

  const Btn = ({ id, label, color, onClick, ariaLabel }: {
    id: ButtonId; label: string; color?: string; onClick: () => void; ariaLabel: string;
  }) => {
    const isPressed = pressed === id;
    const activeColor = color || amber;
    return (
      <span
        role={isMobile ? undefined : "button"}
        aria-label={isMobile ? undefined : ariaLabel}
        onClick={onClick}
        onMouseEnter={!isMobile ? (e) => { (e.target as HTMLElement).style.color = bright; } : undefined}
        onMouseLeave={!isMobile ? (e) => { (e.target as HTMLElement).style.color = isPressed ? activeColor : amber; } : undefined}
        style={{
          color: isPressed ? activeColor : amber,
          cursor: isMobile ? "default" : "pointer",
          userSelect: "none",
          transition: "color 100ms ease",
        }}
      >
        {label}
      </span>
    );
  };

  // Outer device width: 24 chars
  // ╔(1) + 22 inner + ╗(1)
  // Screen: ║(1) sp(1) │(1) + 18 content + │(1) sp(1) ║(1) = 24

  return (
    <div
      aria-label={isMobile ? undefined : "Vibe Coder 001 code review simulator"}
      aria-hidden={isMobile ? true : undefined}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "4fr 5fr",
        height: "100%",
        width: "100%",
        fontFamily: "GT_America_Mono, monospace",
        fontFeatureSettings: '"ss06"',
        fontSize: "var(--ascii-xs-font-size)",
        color: amber,
      }}
    >
      {/* LEFT: Terminal pane */}
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.8 }}>
          <pre className="m-0 font-normal" style={{ lineHeight: "initial", letterSpacing: "initial", whiteSpace: "pre" }}>
            <div className="leading-tight">
              {`$ estela review\n\n`}
              {SNIPPETS[snippet]}
              {`\n\n`}
              <span aria-live="polite" style={{ color: statusLine.color }}>{statusLine.text}</span>
              {status === "reviewing" && <span className="animate-pulse">_</span>}
            </div>
          </pre>
        </div>
      )}

      {/* RIGHT: Device pane */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <pre className="m-0 font-normal" style={{ lineHeight: "initial", letterSpacing: "initial", whiteSpace: "pre" }}>
          <div className="leading-tight whitespace-pre">
            {`           ╷\n`}
            {`         ┌─┴─┐\n`}
            {`╔════════╧═══╧═════════╗\n`}
            {`║ ┌──────────────────┐ ║\n`}
            {`║ │ `}<span className="animate-pulse">ESTELA CODE</span>{`      │ ║\n`}
            {`║ │──────────────────│ ║\n`}
            {`║ │`}{pressed === "prompt" ? PROMPT_TEXTS[promptIdx].padEnd(18) : screenLine}{`│ ║\n`}
            {`║ └──────────────────┘ ║\n`}
            {`║                      ║\n`}
            {`║  `}
            <Btn id="accept" label="[ACCEPT]" color={green} onClick={handleAccept} ariaLabel="Accept code" />
            {`  `}
            <Btn id="retry" label="[RETRY]" color={orange} onClick={handleRetry} ariaLabel="Retry code review" />
            {`   ║\n`}
            {`║                 (o)  ║\n`}
            {`║  `}
            <Btn id="prev" label="<" onClick={handlePrev} ariaLabel="Previous snippet" />
            {` `}
            <Btn id="next" label=">" onClick={handleNext} ariaLabel="Next snippet" />
            {`     `}
            <Btn id="prompt" label="[PROMPT]" onClick={handlePrompt} ariaLabel="Cycle prompt" />
            {`    ║\n`}
            {`║══════════════════════║\n`}
            {`║ .:VIBE CODER 001:.   ║\n`}
            {`╚══════════════════════╝`}
          </div>
        </pre>
      </div>
    </div>
  );
}
