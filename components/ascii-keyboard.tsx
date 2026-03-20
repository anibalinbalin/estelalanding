"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const KEYS = [
  ["q", "w", "e", "r", "t", "y"],
  ["a", "s", "d", "f", "g", "h"],
  ["v", "i", "b", "c", "o", "⌫"],
];

const MAX_CHARS = 18;

export function AsciiKeyboard() {
  const [typedText, setTypedText] = useState("");
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pressTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleKey = useCallback(
    (key: string) => {
      if (isMobile) return;

      if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current);
      setPressedKey(key);
      pressTimeoutRef.current = setTimeout(() => setPressedKey(null), 150);

      if (key === "⌫") {
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        setTypedText((prev) => {
          if (prev.length >= MAX_CHARS) return "";
          return prev + key;
        });
      }
    },
    [isMobile]
  );

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || isMobile) return;

    const validKeys = new Set(KEYS.flat().filter((k) => k !== "⌫"));

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "backspace") {
        e.preventDefault();
        handleKey("⌫");
      } else if (validKeys.has(key)) {
        e.preventDefault();
        handleKey(key);
      }
    };

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [handleKey, isMobile]);

  useEffect(() => {
    return () => {
      if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current);
    };
  }, []);

  if (!mounted) return null;

  const renderKey = (key: string, index: number) => {
    const isPressed = pressedKey === key;
    const isBackspace = key === "⌫";

    if (isMobile) {
      return <span key={index}>{` ${key} `}</span>;
    }

    return (
      <span
        key={index}
        role="button"
        aria-label={isBackspace ? "backspace" : key}
        className="cursor-pointer select-none"
        style={{
          color: isPressed ? "rgb(255, 215, 100)" : undefined,
          transition: "color 150ms ease",
        }}
        onClick={() => handleKey(key)}
      >
        {` ${key} `}
      </span>
    );
  };

  const outputDisplay = `> ${typedText}`;

  return (
    <div
      ref={wrapperRef}
      tabIndex={isMobile ? undefined : 0}
      role={isMobile ? undefined : "group"}
      aria-label={isMobile ? undefined : "Interactive ASCII keyboard"}
      aria-hidden={isMobile ? true : undefined}
      className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 outline-none focus:ring-1 focus:ring-amber-500/30 rounded"
      style={{
        fontFamily: "GT_America_Mono, monospace",
        fontFeatureSettings: '"ss06"',
        fontSize: "var(--ascii-xs-font-size)",
        fontStretch: "normal",
        lineHeight: "initial",
        letterSpacing: "initial",
        color: "rgb(245, 185, 68)",
      }}
    >
      <pre className="m-0 font-normal">
        <div className="whitespace-pre leading-relaxed text-left">
          <span aria-live="polite">{outputDisplay}</span>
          <span className="animate-pulse">_</span>
          {"\n\n"}
          {`┌───┬───┬───┬───┬───┬───┐\n`}
          {`│`}{renderKey(KEYS[0][0], 0)}{`│`}{renderKey(KEYS[0][1], 1)}{`│`}{renderKey(KEYS[0][2], 2)}{`│`}{renderKey(KEYS[0][3], 3)}{`│`}{renderKey(KEYS[0][4], 4)}{`│`}{renderKey(KEYS[0][5], 5)}{`│\n`}
          {`├───┼───┼───┼───┼───┼───┤\n`}
          {`│`}{renderKey(KEYS[1][0], 6)}{`│`}{renderKey(KEYS[1][1], 7)}{`│`}{renderKey(KEYS[1][2], 8)}{`│`}{renderKey(KEYS[1][3], 9)}{`│`}{renderKey(KEYS[1][4], 10)}{`│`}{renderKey(KEYS[1][5], 11)}{`│\n`}
          {`├───┼───┼───┼───┼───┼───┤\n`}
          {`│`}{renderKey(KEYS[2][0], 12)}{`│`}{renderKey(KEYS[2][1], 13)}{`│`}{renderKey(KEYS[2][2], 14)}{`│`}{renderKey(KEYS[2][3], 15)}{`│`}{renderKey(KEYS[2][4], 16)}{`│`}{renderKey(KEYS[2][5], 17)}{`│\n`}
          {`└───┴───┴───┴───┴───┴───┘`}
        </div>
      </pre>
    </div>
  );
}
