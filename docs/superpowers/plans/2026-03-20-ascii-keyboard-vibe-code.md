# ASCII Keyboard for "We Vibe Code" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the UUID/ESTELA ASCII art in the AI principles section's "vibe code" card with an interactive ASCII keyboard that visitors can click to type characters.

**Architecture:** A single new client component (`AsciiKeyboard`) renders a 6x3 grid of box-drawing keyboard keys with a typed-output line. It replaces the `<pre>` block in principle 2's box container in `ai-principles-section.tsx`. No new dependencies.

**Tech Stack:** React (useState, useEffect, useCallback), CSS transitions, box-drawing Unicode characters

**Spec:** `docs/superpowers/specs/2026-03-20-ascii-keyboard-vibe-code-design.md`

---

### Task 1: Create the AsciiKeyboard component with static rendering

**Files:**
- Create: `components/ascii-keyboard.tsx`

- [ ] **Step 1: Create the component file with the static ASCII keyboard layout**

```tsx
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
  const [isMobile, setIsMobile] = useState(true); // safe default: non-interactive until mounted
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

  // Cleanup timeout on unmount
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
```

- [ ] **Step 2: Commit**

```bash
git add components/ascii-keyboard.tsx
git commit -m "feat: add AsciiKeyboard component with interactive typing"
```

---

### Task 2: Integrate AsciiKeyboard into AI principles section

**Files:**
- Modify: `components/ai-principles-section.tsx:1` (add import)
- Modify: `components/ai-principles-section.tsx:148-170` (replace UUID pre block)

- [ ] **Step 1: Add import at top of file**

Add after the existing imports:
```tsx
import { AsciiKeyboard } from "@/components/ascii-keyboard";
```

- [ ] **Step 2: Replace principle 2's `<pre>` block with `<AsciiKeyboard />`**

In `components/ai-principles-section.tsx`, find the second `<pre>` block — the one inside principle 2's box container (the `col-span-6 min-[1000px]:col-span-3` div that does NOT have `gap-6 mb-6`). This `<pre>` contains the UUID/ESTELA text (`550E800-`, `animate-pulse`, etc.).

Delete the entire `<pre>...</pre>` element (including its inner `<div>` with the UUID content) and replace it with:

```tsx
                    <AsciiKeyboard />
```

The surrounding container structure stays untouched — only the `<pre>` element is swapped out. The `AsciiKeyboard` component handles its own centering and styling internally.

**Note:** Both `ai-principles-section.tsx` and `AsciiKeyboard` are `"use client"` components. This is fine — importing a client component from another client component does not create a boundary issue.

- [ ] **Step 3: Commit**

```bash
git add components/ai-principles-section.tsx
git commit -m "feat: replace UUID art with interactive ASCII keyboard in vibe code card"
```

---

### Task 3: Visual verification

- [ ] **Step 1: Restart dev server**

```bash
rm -rf .next && pnpm dev
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3001` and scroll to the AI principles section. Check:

1. Principle 2 box shows ASCII keyboard grid instead of UUID text
2. Click a key — character appears in `> _` output line, key flashes brighter
3. Click the component to focus it, then type on physical keyboard — same behavior
4. Press backspace — removes last character
5. Type 18+ characters — output resets
6. Principle 1's card-grid box is unchanged
7. Toggle dark/light mode — both look correct (amber on dark bg, amber on light bg)
8. Resize to mobile width (< 600px) — keyboard renders but keys are not interactive
9. Estela Principles section above is completely unchanged

- [ ] **Step 3: Fix any visual issues**

If the keyboard doesn't fit or align within the aspect-ratio box, adjust the component. The keyboard + output line should be vertically centered in the box just like the UUID text was.

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: adjust ASCII keyboard layout for proper fit in principle box"
```
