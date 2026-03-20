"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useKeyClickSound } from "@/hooks/use-key-click-sound";

type ClickType = "regular" | "space" | "backspace" | "enter";

interface KeyDef {
  key: string;
  label: string;
  span: number;
  modifier?: boolean;
  clickType?: ClickType;
}

const ROWS: KeyDef[][] = [
  // Number row: 13×4 + 8 = 60
  [
    { key: "`", label: "`", span: 4 },
    { key: "1", label: "1", span: 4 },
    { key: "2", label: "2", span: 4 },
    { key: "3", label: "3", span: 4 },
    { key: "4", label: "4", span: 4 },
    { key: "5", label: "5", span: 4 },
    { key: "6", label: "6", span: 4 },
    { key: "7", label: "7", span: 4 },
    { key: "8", label: "8", span: 4 },
    { key: "9", label: "9", span: 4 },
    { key: "0", label: "0", span: 4 },
    { key: "-", label: "-", span: 4 },
    { key: "=", label: "=", span: 4 },
    { key: "backspace", label: "⌫", span: 8, clickType: "backspace" },
  ],
  // Top row: 6 + 12×4 + 6 = 60
  [
    { key: "tab", label: "TAB", span: 6, modifier: true },
    { key: "q", label: "q", span: 4 },
    { key: "w", label: "w", span: 4 },
    { key: "e", label: "e", span: 4 },
    { key: "r", label: "r", span: 4 },
    { key: "t", label: "t", span: 4 },
    { key: "y", label: "y", span: 4 },
    { key: "u", label: "u", span: 4 },
    { key: "i", label: "i", span: 4 },
    { key: "o", label: "o", span: 4 },
    { key: "p", label: "p", span: 4 },
    { key: "[", label: "[", span: 4 },
    { key: "]", label: "]", span: 4 },
    { key: "\\", label: "\\", span: 6 },
  ],
  // Home row: 7 + 11×4 + 9 = 60
  [
    { key: "caps", label: "CAPS", span: 7, modifier: true },
    { key: "a", label: "a", span: 4 },
    { key: "s", label: "s", span: 4 },
    { key: "d", label: "d", span: 4 },
    { key: "f", label: "f", span: 4 },
    { key: "g", label: "g", span: 4 },
    { key: "h", label: "h", span: 4 },
    { key: "j", label: "j", span: 4 },
    { key: "k", label: "k", span: 4 },
    { key: "l", label: "l", span: 4 },
    { key: ";", label: ";", span: 4 },
    { key: "'", label: "'", span: 4 },
    { key: "enter", label: "⏎", span: 9, clickType: "enter" },
  ],
  // Bottom row: 9 + 10×4 + 11 = 60
  [
    { key: "lshift", label: "⇧", span: 9, modifier: true },
    { key: "z", label: "z", span: 4 },
    { key: "x", label: "x", span: 4 },
    { key: "c", label: "c", span: 4 },
    { key: "v", label: "v", span: 4 },
    { key: "b", label: "b", span: 4 },
    { key: "n", label: "n", span: 4 },
    { key: "m", label: "m", span: 4 },
    { key: ",", label: ",", span: 4 },
    { key: ".", label: ".", span: 4 },
    { key: "/", label: "/", span: 4 },
    { key: "rshift", label: "⇧", span: 11, modifier: true },
  ],
  // Mods row: 4+5+5+22+5+5+5+9 = 60
  [
    { key: "fn1", label: "fn", span: 4, modifier: true },
    { key: "lctrl", label: "⌃", span: 5, modifier: true },
    { key: "lopt", label: "⌥", span: 5, modifier: true },
    { key: " ", label: "", span: 22, clickType: "space" },
    { key: "ropt", label: "⌥", span: 5, modifier: true },
    { key: "cmd", label: "⌘", span: 5, modifier: true },
    { key: "rctrl", label: "⌃", span: 5, modifier: true },
    { key: "fn2", label: "fn", span: 9, modifier: true },
  ],
];

const ALL_TYPING_KEYS = new Set([
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
  "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
  " ",
]);

const MAX_CHARS = 50;

function getClickType(key: string): ClickType {
  if (key === " ") return "space";
  if (key === "backspace") return "backspace";
  if (key === "enter") return "enter";
  return "regular";
}

export function AsciiFullKeyboard() {
  const [typedText, setTypedText] = useState("");
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pressTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { playClick } = useKeyClickSound();

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

      playClick(getClickType(key));

      if (key === "backspace") {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (key === "enter") {
        setTypedText("");
      } else {
        setTypedText((prev) => {
          if (prev.length >= MAX_CHARS) return "";
          return prev + key;
        });
      }
    },
    [isMobile, playClick]
  );

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || isMobile) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Backspace") {
        e.preventDefault();
        handleKey("backspace");
      } else if (key === "Enter") {
        e.preventDefault();
        handleKey("enter");
      } else if (key === " ") {
        e.preventDefault();
        handleKey(" ");
      } else if (ALL_TYPING_KEYS.has(key.toLowerCase())) {
        e.preventDefault();
        handleKey(key.toLowerCase());
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

  return (
    <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_/_2_*_100%)]">
      <div className="absolute h-full w-full top-0 left-0">
        <div
          ref={wrapperRef}
          tabIndex={isMobile ? undefined : 0}
          role={isMobile ? undefined : "group"}
          aria-label={isMobile ? undefined : "Interactive keyboard"}
          aria-hidden={isMobile ? true : undefined}
          className="outline-none focus:ring-1 focus:ring-amber-500/30 rounded absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-1"
          style={{
            fontFamily: "GT_America_Mono, monospace",
            fontFeatureSettings: '"ss06"',
            fontSize: "var(--ascii-xs-font-size)",
            color: "rgb(245, 185, 68)",
          }}
        >
      {/* Typed text output */}
      <div className="mb-2 whitespace-pre" style={{ lineHeight: "initial", letterSpacing: "initial" }}>
        <span aria-live="polite">{`> ${typedText}`}</span>
        <span className="animate-pulse">_</span>
      </div>

      {/* CSS Grid keyboard */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(60, 1fr)",
          gap: "2px",
        }}
      >
        {ROWS.map((row, rowIdx) =>
          row.map((keyDef) => {
            const isPressed = pressedKey === keyDef.key;
            const isTypingKey = !keyDef.modifier && keyDef.key !== "backspace" && keyDef.key !== "enter"
              ? ALL_TYPING_KEYS.has(keyDef.key)
              : !keyDef.modifier;
            const isInteractive = !isMobile && isTypingKey;

            return (
              <div
                key={`${rowIdx}-${keyDef.key}`}
                onClick={isInteractive ? () => handleKey(keyDef.key) : undefined}
                style={{
                  gridColumn: `span ${keyDef.span}`,
                  height: "2.4em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(245, 185, 68, 0.3)",
                  borderRadius: "2px",
                  backgroundColor: isPressed
                    ? "rgba(245, 185, 68, 0.15)"
                    : "transparent",
                  color: isPressed
                    ? "rgb(255, 215, 100)"
                    : "rgb(245, 185, 68)",
                  cursor: isInteractive ? "pointer" : "default",
                  transition: "all 100ms ease",
                  userSelect: "none",
                  opacity: keyDef.modifier ? 0.6 : 1,
                }}
                onMouseEnter={
                  isInteractive
                    ? (e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor =
                          "rgba(245, 185, 68, 0.08)";
                      }
                    : undefined
                }
                onMouseLeave={
                  isInteractive
                    ? (e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor =
                          "transparent";
                      }
                    : undefined
                }
              >
                {keyDef.label}
              </div>
            );
          })
        )}
      </div>
        </div>
      </div>
    </div>
  );
}
