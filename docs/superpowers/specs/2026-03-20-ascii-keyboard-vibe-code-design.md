# ASCII Keyboard for "We Vibe Code" Principle Card

## Context

The AI principles section on the Estela homepage has two principle cards, each with an ASCII art box above the title text. Principle 2 ("We vibe code. So does everyone.") currently shows UUID-style text with pulsing "ESTELA" spans. We want to replace that with an interactive ASCII keyboard — a miniature keyboard drawn in box-drawing characters where visitors can click keys and see typed output, reinforcing the "vibe coding" message through direct interaction.

Inspired by [keyb.himan.me](https://keyb.himan.me/) but adapted to Estela's ASCII art / amber monospace aesthetic.

**Note:** `estela-principles.tsx` is a separate section (Estela Principles) that also has two ASCII art boxes. It is not modified by this change. Only `ai-principles-section.tsx` (AI Principles) is affected.

## Design

### New Component: `components/ascii-keyboard.tsx`

A client component (`"use client"`) that renders an interactive ASCII keyboard inside the existing principle 2 box container.

#### Visual Layout

```
> we vibe code_          ← output line with blinking cursor
                         ← small gap
┌───┬───┬───┬───┬───┬───┐
│ q │ w │ e │ r │ t │ y │  ← row 1
├───┼───┼───┼───┼───┼───┤
│ a │ s │ d │ f │ g │ h │  ← row 2
├───┼───┼───┼───┼───┼───┤
│ v │ i │ b │ c │ o │ ⌫ │  ← row 3
└───┴───┴───┴───┴───┴───┘
```

- 6 columns x 3 rows = 18 keys
- Key selection: letters that can spell "vibe code" plus additional common letters, plus backspace
- Rendered inside a `<pre>` block preserving the existing ASCII art styling

#### Styling

All styling matches the existing ASCII art boxes exactly:

- Font: `GT_America_Mono, monospace` with `font-feature-settings: "ss06"`
- Size: `var(--ascii-xs-font-size)`
- Color: `rgb(245, 185, 68)` (amber)
- Line height: `initial`, letter spacing: `initial`, font stretch: `normal`
- The `AsciiKeyboard` component renders its own `<pre>` with the centering classes (`absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2`) applied internally, exactly matching the pattern of the existing `<pre>` blocks

Key-specific styles:
- Default state: `rgb(245, 185, 68)` (same as everything else)
- Pressed/active state: `rgb(255, 215, 100)` (brighter amber) for 150ms via CSS transition
- Cursor: `cursor-pointer` on key letter spans
- Box-drawing characters (`┌─┬┐│├┤└┴┘`): non-interactive, static amber

#### Interaction

1. **Click/tap a key**: the letter's span flashes bright, character appends to the output line
2. **Physical keyboard**: component wrapper div has `tabIndex={0}` and listens for `keydown` on focus only (not on hover). A subtle focus ring (`outline` or `ring`) indicates when the component is active. Only keys present in the grid respond; all others are ignored via `preventDefault` suppression.
3. **Output line**: displays `> ` prefix + typed characters + blinking `_` cursor (`animate-pulse`). Max ~18 characters, then clears to empty (hard reset, not wrap).
4. **Backspace** (`⌫` key or physical Backspace): removes last character from output

#### Mobile Considerations

At `var(--ascii-xs-font-size)` (8.5px), individual key letters are too small for reliable touch targets. On mobile viewports (`< 600px`), the keyboard is a **visual-only decoration** — it renders the same ASCII keyboard but without interactive click handlers. The keys are not expected to be tappable at this size. This matches how the existing ASCII art boxes behave on mobile (purely decorative). Desktop/tablet users get the full interactive experience.

#### Accessibility

- Wrapper div: `role="group"`, `aria-label="Interactive ASCII keyboard"`, `tabIndex={0}`
- Each key span: `role="button"`, `aria-label` with the key character (e.g., `aria-label="q"`)
- Output line: wrapped in a `<span aria-live="polite">` so screen readers announce typed characters
- On mobile (where interaction is disabled): `aria-hidden="true"` on the entire component since it's decorative

#### State

- `typedText: string` — current output line content (useState)
- `pressedKey: string | null` — currently pressed key for glow effect (useState, cleared after 150ms timeout)

No external state, no context, no props needed.

### Integration in `ai-principles-section.tsx`

- Import `AsciiKeyboard` from `@/components/ascii-keyboard`
- Replace principle 2's inner `<pre>` block (the entire UUID/ESTELA `<pre>` element) with `<AsciiKeyboard />`
- The `AsciiKeyboard` component renders its own `<pre>` with identical centering styles
- The outer container stays untouched:
  ```
  <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border p-3" style={{ backgroundColor: ... }}>
    <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
      <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
        <AsciiKeyboard />    ← replaces the <pre> block
      </div>
    </div>
  </div>
  ```

### What This Does NOT Change

- Principle 1's card-grid ASCII art box — stays as-is
- `estela-principles.tsx` — completely separate section, not touched
- Section title, subtitle, or principle text content
- No new dependencies, fonts, or CSS variables

## Files

| Action | File |
|--------|------|
| Create | `components/ascii-keyboard.tsx` |
| Modify | `components/ai-principles-section.tsx` (swap UUID pre for AsciiKeyboard) |

## Verification

1. `rm -rf .next && pnpm dev`
2. Navigate to homepage, scroll to AI principles section
3. Principle 2 box shows ASCII keyboard instead of UUID text
4. Click keys — characters appear in output line, key flashes bright
5. Physical keyboard works when component is focused (click to focus first)
6. Backspace removes characters
7. Output line clears after ~18 chars
8. Dark mode: amber on dark background
9. Light mode: amber on `#f6f6f6` background
10. Mobile (< 600px): keyboard renders as visual decoration, no interaction expected
11. Principle 1 box unchanged
12. Estela Principles section above unchanged
