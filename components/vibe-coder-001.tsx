"use client";

import { useState, useCallback, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD — Vibe Coder 001
 *
 * Auto-play loop with user interrupt. Each cycle:
 *
 *    0ms   new question types onto device screen
 *  ~800ms  question fully visible, cursor blinks
 * 3000ms   if no user input → auto-accept
 * 3000ms   LED 1 brightens, terminal shows "> merged"
 * 4000ms   next question begins typing
 *
 * User can press [ACCEPT] or [RETRY] during the waiting
 * window to interrupt the auto-cycle.
 *
 * After 5 accepts (100%), screen shows "SHIPPED!" for 2s,
 * then progress resets and cycle restarts.
 * ───────────────────────────────────────────────────────── */

// --- Timing constants (ms) ---
const TIMING = {
  typewriter:     50,    // ms per character typed
  questionPause:  2200,  // ms to wait before auto-accept
  advanceDelay:   1000,  // ms after accept before next question
  retryDelay:     800,   // ms after retry before next question
  shippedDisplay: 2000,  // how long SHIPPED! stays visible
};

// --- Questions paired with code snippets ---
const QUESTIONS = [
  { text: "Deploy to prod?",  code: `fn deploy() {\n  ship(verified);\n}` },
  { text: "Run test suite?",  code: `await test(code);\nsign(output);\ndeploy(prod);` },
  { text: "Ship this build?", code: `export async\n  function ship()\n{ return ok; }` },
  { text: "Merge to main?",   code: `const quality =\n  review(output);\nreturn quality;` },
  { text: "Sign release?",    code: `let ai = generate();\ncheck(ai.output);\nship(verified);` },
];

type ReviewStatus = "typing" | "waiting" | "accepted" | "retried" | "shipped";
type ButtonId = "accept" | "retry" | null;

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
  const [questionIdx, setQuestionIdx] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [status, setStatus] = useState<ReviewStatus>("typing");
  const [progress, setProgress] = useState(0);
  const [pressed, setPressed] = useState<ButtonId>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const pressRef = useRef<ReturnType<typeof setTimeout>>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const playSound = useClickSound();

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const flash = useCallback((btn: ButtonId) => {
    if (pressRef.current) clearTimeout(pressRef.current);
    setPressed(btn);
    pressRef.current = setTimeout(() => setPressed(null), 150);
  }, []);

  // --- Auto-play loop driven by status ---

  // Phase 1: Typewriter effect
  useEffect(() => {
    if (status !== "typing") return;
    const q = QUESTIONS[questionIdx].text;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedChars(i);
      if (i >= q.length) {
        clearInterval(interval);
        setStatus("waiting");
      }
    }, TIMING.typewriter);
    return () => clearInterval(interval);
  }, [status, questionIdx]);

  // Phase 2: Wait for user or auto-accept
  useEffect(() => {
    if (status !== "waiting") return;
    const timer = setTimeout(() => {
      setStatus("accepted");
      setProgress(p => Math.min(p + 20, 100));
    }, TIMING.questionPause);
    return () => clearTimeout(timer);
  }, [status]);

  // Phase 3: After accept → advance or ship
  useEffect(() => {
    if (status !== "accepted") return;
    const timer = setTimeout(() => {
      if (progressRef.current >= 100) {
        setStatus("shipped");
      } else {
        setQuestionIdx(i => (i + 1) % QUESTIONS.length);
        setTypedChars(0);
        setStatus("typing");
      }
    }, TIMING.advanceDelay);
    return () => clearTimeout(timer);
  }, [status]);

  // Phase 3b: After retry → new question
  useEffect(() => {
    if (status !== "retried") return;
    const timer = setTimeout(() => {
      setQuestionIdx(prev => {
        let next: number;
        do { next = Math.floor(Math.random() * QUESTIONS.length); } while (next === prev && QUESTIONS.length > 1);
        return next;
      });
      setTypedChars(0);
      setStatus("typing");
    }, TIMING.retryDelay);
    return () => clearTimeout(timer);
  }, [status]);

  // Phase 4: SHIPPED! display then reset
  useEffect(() => {
    if (status !== "shipped") return;
    const timer = setTimeout(() => {
      setProgress(0);
      setQuestionIdx(i => (i + 1) % QUESTIONS.length);
      setTypedChars(0);
      setStatus("typing");
    }, TIMING.shippedDisplay);
    return () => clearTimeout(timer);
  }, [status]);

  // --- User interaction (only during "waiting") ---

  const handleAccept = useCallback(() => {
    if (isMobile || status !== "waiting") return;
    flash("accept");
    playSound("accept");
    setStatus("accepted");
    setProgress(p => Math.min(p + 20, 100));
  }, [isMobile, status, flash, playSound]);

  const handleRetry = useCallback(() => {
    if (isMobile || status !== "waiting") return;
    flash("retry");
    playSound("retry");
    setStatus("retried");
  }, [isMobile, status, flash, playSound]);

  if (!mounted) return null;

  // --- Colors (amber palette only) ---
  const amber = "rgb(245, 185, 68)";
  const bright = "rgb(255, 215, 100)";
  const dim = "rgb(180, 135, 50)";

  // --- Terminal status line ---
  const statusLine =
    status === "accepted" ? { text: "> merged", color: bright } :
    status === "retried"  ? { text: "> retrying...", color: dim } :
    status === "shipped"  ? { text: "> SHIPPED!", color: bright } :
    { text: "> _", color: amber };

  // --- Screen content ---
  const q = QUESTIONS[questionIdx];
  const typed = q.text.slice(0, typedChars);
  const showCursor = status === "typing" || status === "waiting";
  const isShipped = status === "shipped";

  // Question line: "  " + typed text + optional cursor, padded to 30
  const questionPrefix = "  ";
  const questionContent = isShipped ? "SHIPPED!" : typed;
  const cursorChar = showCursor ? 1 : 0;
  const questionPad = " ".repeat(Math.max(0, 30 - questionPrefix.length - questionContent.length - cursorChar));

  // Progress bar
  const filled = Math.round(progress / 20);
  const bar = "=".repeat(filled) + "-".repeat(5 - filled);
  const pct = String(progress).padStart(3);
  const screenLine = (`  PROGRESS:${bar}${pct}%`).padEnd(30);

  // LED colors
  const led1 = status === "accepted" || status === "shipped" ? bright : amber;
  const led2 = status === "retried" ? dim : amber;
  const led3 = amber;

  // Button active state (only clickable during "waiting")
  const buttonsActive = status === "waiting" && !isMobile;

  const Btn = ({ id, label, color, onClick, ariaLabel }: {
    id: ButtonId; label: string; color?: string; onClick: () => void; ariaLabel: string;
  }) => {
    const isPressed = pressed === id;
    const activeColor = color || amber;
    const dimmed = !buttonsActive;
    return (
      <span
        role={buttonsActive ? "button" : undefined}
        aria-label={buttonsActive ? ariaLabel : undefined}
        onClick={onClick}
        onMouseEnter={buttonsActive ? (e) => { (e.target as HTMLElement).style.color = bright; } : undefined}
        onMouseLeave={buttonsActive ? (e) => { (e.target as HTMLElement).style.color = isPressed ? activeColor : amber; } : undefined}
        style={{
          color: isPressed ? activeColor : amber,
          opacity: dimmed ? 0.5 : 1,
          cursor: buttonsActive ? "pointer" : "default",
          userSelect: "none",
          transition: "color 100ms ease, opacity 200ms ease",
        }}
      >
        {label}
      </span>
    );
  };

  // Outer device width: 38 chars
  // ╔(1) + 36 inner + ╗(1)
  // Screen: ║(1) + 2sp + │(1) + 30 content + │(1) + 2sp + ║(1) = 38

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
              {q.code}
              {`\n\n`}
              <span aria-live="polite" style={{ color: statusLine.color }}>{statusLine.text}</span>
              {(status === "typing" || status === "waiting") && <span className="animate-pulse">_</span>}
            </div>
          </pre>
        </div>
      )}

      {/* RIGHT: Device pane */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <pre className="m-0 font-normal" style={{ lineHeight: "initial", letterSpacing: "initial", whiteSpace: "pre" }}>
          <div className="leading-tight whitespace-pre">
            {`                  ╷\n`}
            {`                ┌─┴─┐\n`}
            {`╔═══════════════╧═══╧════════════════╗\n`}
            {`║  (*)      VIBE CODER 001      (*)  ║\n`}
            {`║                                    ║\n`}
            {`║  ┌──────────────────────────────┐  ║\n`}
            {`║  │`}{questionPrefix}{questionContent}{showCursor && <span className={status === "waiting" ? "animate-pulse" : ""}>_</span>}{questionPad}{`│  ║\n`}
            {`║  │──────────────────────────────│  ║\n`}
            {`║  │`}{screenLine}{`│  ║\n`}
            {`║  └──────────────────────────────┘  ║\n`}
            {`║                                    ║\n`}
            {`║  `}<span style={{ color: led1, transition: "color 200ms ease" }}>o</span>{` `}<span style={{ color: led2, transition: "color 200ms ease" }}>o</span>{` `}<span style={{ color: led3 }}>o</span>{`                             ║\n`}
            {`║                                    ║\n`}
            {`║  `}
            <Btn id="accept" label="[ACCEPT]" color={bright} onClick={handleAccept} ariaLabel="Accept code" />
            {`        `}
            <Btn id="retry" label="[RETRY]" color={dim} onClick={handleRetry} ariaLabel="Retry code review" />
            {`     (o)   ║\n`}
            {`║                                    ║\n`}
            {`║════════════════════════════════════║\n`}
            {`║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║\n`}
            {`╚════════════════════════════════════╝`}
          </div>
        </pre>
      </div>
    </div>
  );
}
