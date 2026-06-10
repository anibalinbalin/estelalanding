# ASCII Redesign Study — AI-First Repositioning

Date: 2026-06-09
Status: Study only — no component code modified
Companion to: `docs/repositioning/2026-06-09-ai-first-restructure.md`

Hard constraints (carried from project memory):

- **Amber-only palette.** Variations of amber are fine. Never green, orange, or red.
- **No emojis.** Anywhere.
- All new components follow the house props convention: `{ isVisible?: boolean; className?: string }`.

Palette tokens (from `app/globals.css`):

| Token | Light | Dark | Use |
|---|---|---|---|
| `--ascii-foreground-p3` | `#f5b944` | `#f5b944` | Base amber for all ASCII glyphs |
| `--ascii-background-p3` | `#3b301c` | `#3b301c` | ASCII card background |
| `--ascii-background-alt-p3` | `#e5e5e6` | `#3d3019` | Alt card background |
| `--ascii-xs-font-size` | `7.5px` | `7.5px` | Smallest ASCII type size |

Vibe Coder 001 additionally defines an inline amber triad that should become the
de-facto standard for all new ASCII work (consider promoting to CSS variables
`--ascii-amber`, `--ascii-amber-bright`, `--ascii-amber-dim`):

- amber `rgb(245, 185, 68)` (= `#f5b944`, matches the token)
- bright `rgb(255, 215, 100)` (success / highlight)
- dim `rgb(180, 135, 50)` (secondary / retry)

House ASCII type style (set by Vibe Coder, the best-executed component):
`fontFamily: "GT_America_Mono, monospace"`, `fontFeatureSettings: '"ss06"'`,
`fontSize: var(--ascii-xs-font-size)`, `<pre>` with `whiteSpace: pre`.

---

## Part 1 — Component inventory

### 1.1 `components/vibe-coder-001.tsx` — the crown jewel

- **Renders:** A two-pane ASCII scene: left, a terminal (`$ estela review` + rotating
  code snippet + status line); right, a hand-drawn ASCII hardware device
  ("VIBE CODER 001") in double-line box frame with a screen, progress bar, three
  LEDs, and `[ACCEPT]` / `[RETRY]` buttons. Auto-play loop: questions typewrite
  onto the screen, auto-accept after 2.2s (or user click), progress climbs in 20%
  steps, "SHIPPED!" at 100%, reset.
- **Used by:** `components/ai-principles-section.tsx:95` (home page, "AI is a tool.
  We are the criteria." section). The restructure plan promotes this section to
  first content slot after TrustedBy.
- **Animation:** Event-driven state machine (`typing | waiting | accepted | retried |
  shipped`) with one short `setInterval` only while typing (50ms/char on ~15-char
  strings) and `setTimeout` phase transitions. Web Audio noise-burst click on
  button press. CSS transitions for LED/button color. Cheap re-renders, no rAF.
- **Palette:** Inline amber triad (above). No CSS-variable usage for color —
  acceptable but worth tokenizing.
- **Quality:** Excellent. Documented storyboard comment block, timing constants
  table, accessibility (`aria-live`, conditional `role="button"`, `aria-hidden` on
  mobile), mobile fallback (single-pane, non-interactive). This is the reference
  implementation for everything proposed below. One gap: no
  `prefers-reduced-motion` handling; no `isVisible`/`className` props (it is
  embedded, not reused — fine, but extracting its timing/typewriter logic into a
  shared hook would help the new components).

### 1.2 `components/ui/development-ascii-art.tsx`

- **Renders:** A static 40-row x ~81-col density gradient ("dune" diagonal: `▓ = – ■ .`)
  revealed character-by-character with a `█` cursor, typewriter style.
- **Used by:**
  - `app/services/development/page.tsx:82`
  - `app/services/ai/page.tsx:86` (placeholder — the thing this study replaces)
  - `components/developer-velocity-section.tsx:190` (home)
  - `components/navbar.tsx:269,271` (dropdown preview for both `development` and
    the AI entry — dynamic import, `ssr: false`)
- **Animation:** `setInterval` at 45 chars/sec calling `setState(currentIndex+1)`
  per character; a second effect rebuilds the full ~3,300-char display string in a
  JS loop and writes it via `canvasRef.current.textContent`.
- **Palette:** `color: var(--ascii-foreground-p3)` — correct. But font is
  `"Courier New", monospace` at hardcoded `8px` — off the house type style.
- **Quality:** Good look, weak implementation. Three problems:
  1. ~3,300 chars at 45cps = **~73 seconds** to complete the reveal. Nobody sees
     it finish; the cursor crawls forever in a card.
  2. One React re-render per character (3,300 renders), each rebuilding the whole
     string: O(n) per tick, O(n²) total work.
  3. `aspectRatio: '620/600'` hardcoded; props API is correct (`isVisible`,
     `className`) but `isVisible` is always passed statically `true` — never
     wired to viewport visibility.

### 1.3 `components/ascii-logos/` (4 files + index)

- **Contents:** `favico-ascii.tsx`, `logo_blanco-ascii.tsx`, `logo_negro-ascii.tsx`,
  `logo_original-ascii.tsx`. Each is a stateless `<pre>` with a block-character
  rendering of an Estela brand logo, props `{ className?: string }`.
- **Provenance:** Generated through `app/api/ascii/route.ts` (a dev-time route that
  shells out to `ascii-image-converter` over files in `public/`) tuned via
  `app/logostest/page.tsx` (an interactive tuner page that calls the API live).
- **Used by:** **Nothing.** No imports outside the directory's own `index.ts`.
  Orphaned output of the generation workflow.
- **Animation:** None. **Palette:** Inherits from `className` — neutral.
- **Quality:** Fine as raw material; currently dead weight in the bundle graph
  (tree-shaken since unimported, so zero runtime cost).

### 1.4 `components/ascii-partners/` (23 files + index)

- **Contents:** 23 client/partner logos (AECID, Aparato, Avisa, Box, CCE, Cimarrón,
  Diagnóstico, Dominio, Don Obldulio, Embajada, Fullcat, La Mayor, Mueca, Olivera,
  Orben, Oriental, Plataforma, Producrers, Sidley Jones, Sodre, Tafirel, U Films,
  Verne) as stateless `<pre>` braille/block-character art, props `{ className?: string }`.
- **Used by:** `components/machine-view.tsx:37` only — rendered in a 3-column grid
  under "Trusted By" in machine mode at `text-[5px]`.
- **Animation:** None. **Palette:** `text-foreground` via className — neutral,
  amber-safe.
- **Quality:** Charming and on-brand for machine mode. Mixed fidelity (some braille
  Unicode like Sodre, some coarse block art); irrelevant at 5px.

### 1.5 `components/machine-view.tsx` (1,168 lines)

- **Renders:** The full site as a plain-text, markdown-flavored document
  (`# Estela`, `[link](path)` notation, `###` section headers) — the "machine
  mode" alternative rendering, toggled by `mode-provider` via
  `components/layout-content.tsx:11` (replaces Navbar + children entirely).
- **ASCII-related?** Adjacent. It is monospace text-as-interface and is the sole
  consumer of `ascii-partners`. No animation; static content object (EN/ES).
- **Repositioning note (copy, not ASCII — owned by the parallel copy workflow):**
  its hardcoded nav and section order still reflect the old taxonomy
  ("Infraestructura y Redes" first, "Desarrollo e IA", no `/services/ai` link).
  Flagging here so it is not forgotten: machine view must mirror the new
  taxonomy or it contradicts the repositioning for exactly the audience
  (crawlers, LLMs) the mode was built for.
- **Quality:** Good concept, heavy file; fine to leave structurally alone.

### 1.6 Other ASCII components (grep sweep of `components/` and `app/`)

| File | Used by | Animation pattern | Notes |
|---|---|---|---|
| `ui/infrastructure-ascii-art.tsx` | `navbar.tsx:273` (dropdown preview) | rAF + `setState` **every frame**; regenerates 45x25 trig grid per render; `setState` on every `mousemove` | Old-positioning network-node motif. Monaco 14px, off-token. Prime rewrite target (see Part 2.3) |
| `ui/security-ascii-art.tsx` | navbar dropdown | Same rAF-per-frame pattern, 50x20 grid | Keep until security page rewrite |
| `ui/consulting-ascii-art.tsx` | navbar dropdown | Same pattern, 40x75 grid | Keep |
| `ui/specifications-ascii-art.tsx` | navbar dropdown | Same pattern, 40x75 grid | Keep; content shift to AI-stack later |
| `ui/networks-servers-ascii-art.tsx` | **Nothing** (orphan) | rAF + setState, builds HTML strings | Retire candidate |
| `ui/berlin-ascii-art.tsx` | `developer-velocity-section`, navbar | `<canvas>` 2D rendering in rAF, refs only, **no React re-render** | The good generative pattern |
| `ui/philosophy-ascii-art.tsx`, `ui/practices-ascii-art.tsx`, `ui/principles-ascii-art.tsx`, `ui/implementation-ascii-art.tsx` | navbar (method previews) | Canvas-based, refs only | Good pattern, keep |
| `ui/fibonacci-ascii-spiral.tsx` | `components/estela-speed.tsx` | Timer loop + `setAsciiPattern` state per tick | Mid; amber `color(display-p3 0.92 0.73 0.35)` |
| `ui/ascii-wave-animation.tsx` | `developer-velocity-section` | rAF + `setState(frame)` per frame | Same concern as infra family |
| `app/api/ascii/route.ts` + `app/logostest/page.tsx` | Dev tooling | n/a | Shells out to `ascii-image-converter`; should not ship to prod unguarded |

### 1.7 Design history

`docs/superpowers/specs/2026-03-20-ascii-keyboard-vibe-code-design.md` and the
matching plan document the predecessor of Vibe Coder 001: an interactive ASCII
keyboard for the "We vibe code" card. Key inherited decisions that remain canon:

- GT America Mono + `ss06`, `var(--ascii-xs-font-size)`, amber
  `rgb(245,185,68)` with `rgb(255,215,100)` pressed state.
- Mobile (<600px): ASCII pieces become non-interactive decoration,
  `aria-hidden="true"`.
- Accessibility via `role="button"`, `aria-live="polite"` output lines.
- No new dependencies, no new fonts.

The keyboard (`ascii-keyboard.tsx`, `ascii-full-keyboard.tsx`) was since deleted
and superseded by `vibe-coder-001.tsx`, which generalized the idea into the
device + terminal storyboard with auto-play. That evolution — from a passive
pattern to a narrative loop with an interrupt affordance — is the direction the
service-page art should follow.

---

## Part 2 — Redesign proposals

### 2.1 New flagship art for `/services/ai`

`app/services/ai/page.tsx:86` currently reuses `DevelopmentAsciiArt` as an
acknowledged placeholder. Three concepts, all amber-only, all in the existing
box-drawing + density-character visual language:

**Concept A — "Pipeline with a human gate" (recommended).**
A four-stage pipeline in box-drawing characters: INPUT, MODEL, REVIEW, SHIP.
Packets stream left to right; everything flows freely until REVIEW, where the
stream pauses, a cursor blinks, and a human sign-off brightens the gate before
the packet passes to SHIP. It is the AI page copy drawn literally: "We design
the pipeline, the AI does the heavy lifting, and a human signs off" — and it
rhymes with Vibe Coder 001 (the gate is the device's ACCEPT moment, zoomed out).

Mockup (68 cols, fits the 80-col budget):

```
$ estela pipeline --watch

 ┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐
 │  INPUT  │ ──▸ │    MODEL    │ ──▸ │   REVIEW    │ ──▸ │  SHIP   │
 │ ░░░░░░░ │     │ ▒▒▓▓██▓▓▒▒  │     │  human (o)  │     │ ▓▓▓▓▓▓▓ │
 └─────────┘     └─────────────┘     └─────────────┘     └─────────┘
    docs            inference           sign-off          verified

 > tokens ░▒▓█▓▒░          > signed_                  [ 3/5 shipped ]
```

Animation storyboard (Vibe Coder conventions — state machine + intervals, no rAF):

```
   0ms  frame reveals line-by-line, top to bottom (~120ms/line, 9 lines ≈ 1.1s)
 1100ms STREAM phase: a ▸ glyph steps along the connectors every 120ms;
        MODEL box interior shimmers by rotating its ▒▓█ density string;
        "> tokens" line scrolls one char per step (dim amber)
 ~2600ms GATE phase: packet halts at REVIEW; blinking _ cursor; 2s hold
        (mirrors TIMING.questionPause = 2200ms)
 ~4600ms SIGN phase: "(o)" transitions to bright rgb(255,215,100);
        "> signed" typewrites at 50ms/char; SHIP box fill ticks ░→▓;
        counter increments [ n/5 shipped ]
 loop;  at 5/5: counter flashes bright, resets — same cadence as SHIPPED!
```

Component spec:

- File: `components/ui/ai-ascii-art.tsx`
- Exports: `const AiAsciiArt: React.FC<AiAsciiArtProps>` + default export
  (mirror `development-ascii-art.tsx` so both import styles work)
- Props: `{ isVisible?: boolean; className?: string }`
- Type: GT_America_Mono, `ss06`, `var(--ascii-xs-font-size)` (allow ~10px on
  the service page via className override), `color: var(--ascii-foreground-p3)`,
  bright/dim as the Vibe Coder triad literals (or new tokens, see top)
- Integration: replace `DevelopmentAsciiArt` at `app/services/ai/page.tsx:3,86`;
  swap the navbar AI dropdown case (`components/navbar.tsx:269`) from
  `DevelopmentAsciiArt` to `AiAsciiArt`
- Mobile <600px: render the final static frame, no animation, `aria-hidden`
- Reduced motion: render final static frame

**Concept B — Token stream / inference terminal.** A terminal session
(`$ estela infer`) where a prompt typewrites in, then output tokens stream out
as a wrapping ribbon of density characters (`░▒▓█`) with the most recent token
bright and a trailing fade to dim — a literal LLM-stream visualization. Strong
motion appeal, weaker story: it shows generation but not judgment, and Estela's
differentiator is the judgment. Good candidate for a smaller slot (e.g., the
Agentic Automation card) later.

**Concept C — Attention grid.** An NxN matrix of density characters where
"attention heads" sweep amber-bright bands across rows and columns,
occasionally locking on a cell (bright) before releasing. Visually rich and
cheap to build with the existing generative-pattern style, but abstract — reads
as "math texture", not "AI engineering with accountability". Keep as a backup
texture for the Specifications page refresh.

### 2.2 `development-ascii-art` — refresh or keep?

**Keep the art, refresh the engine, narrow the placement.**

- Once `/services/ai` gets `AiAsciiArt`, remove `DevelopmentAsciiArt` from the
  AI page and navbar AI case. It stays on `/services/development`,
  `developer-velocity-section`, and the navbar development case — the dune
  gradient is a fine identity for "custom software".
- Refresh pass (same file, same exports, same props):
  1. Reveal by **line** (or 8–12 chars per frame via rAF + elapsed time) so the
     full pattern completes in 4–6 seconds instead of 73.
  2. Drop per-character `setState`: keep the reveal index in a ref and write
     `textContent` directly inside the rAF callback (it already writes through
     a ref — the React re-render per char is pure overhead).
  3. Move to the house type style (GT_America_Mono `ss06`) and keep
     `var(--ascii-foreground-p3)`.
  4. Wire `isVisible` to an IntersectionObserver at the call sites (or inside a
     shared wrapper) so the reveal starts when the card enters the viewport.

### 2.3 Infrastructure visual — "Private AI Infrastructure"

Rewrite the **internals** of `components/ui/infrastructure-ascii-art.tsx` but
keep the filename and `InfrastructureAsciiArt` named export so
`components/navbar.tsx:26,273` needs no change. The current network-nodes
motif is the old positioning ("Infrastructure & Networks"); the new motif is a
GPU rack — "Your models, on metal we control", drawn in the Vibe Coder device
language (double-line outer frame = hardware):

```
 ╔══════════════════════════════════╗
 ║  ESTELA · PRIVATE RACK 01        ║
 ╠══════════════════════════════════╣
 ║ [GPU0]  ▓▓▓▓▓▓▓▓▓▓░░░░  71%   o  ║
 ║ [GPU1]  ▓▓▓▓▓▓░░░░░░░░  43%   o  ║
 ║ [GPU2]  ▓▓▓▓▓▓▓▓▓▓▓▓░░  88%   o  ║
 ╠══════════════════════════════════╣
 ║ [NVME]  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  weights  ║
 ║ [LINK]  ‹··········›    10GbE    ║
 ╠══════════════════════════════════╣
 ║  pwr o    temp 62C    uptime 24/7║
 ╚══════════════════════════════════╝
      your data never leaves
```

Animation: every ~2s each GPU bar eases one or two `▓` steps toward a new
random target (discrete character steps, `setInterval`, 2–4 state updates per
second total); LEDs (`o`) pulse bright on bar changes via CSS transition; the
`[LINK]` dots shift one position per tick to suggest traffic. ES copy variant
for the caption ("sus datos no salen del edificio") if the caption is rendered
as text rather than baked into the art. This replaces a 60fps re-render loop
with a ~0.5Hz one — strictly cheaper and more in-voice. Same props API; mobile
and reduced-motion render the static frame.

### 2.4 `ascii-logos` — keep, wire, or retire

**Retire from the component graph; keep the generator.** The four logo
components are imported nowhere. Options considered:

- Wiring `FavicoAscii` into the AI page per the restructure doc's suggestion is
  possible but weak — a brand logo says nothing about AI.
- Recommended: delete `components/ascii-logos/` (the art is reproducible in
  minutes via `/api/ascii` + `logostest`), or, minimum action, leave untouched
  (zero runtime cost) and revisit in Phase 3. Do **not** build new pages on it.
- Either way: gate `app/api/ascii/route.ts` and `app/logostest/page.tsx` behind
  `process.env.NODE_ENV === "development"` (the route shells out to a local
  binary and 404s in prod anyway, but it should not be deployed as-is).

### 2.5 `ascii-partners` — keep

Keep all 23. They are load-bearing for machine view's Trusted By grid and cost
nothing (static `<pre>`, tree-shaken per import). Two follow-ups, both owned by
later phases:

- When the partners page is reviewed (restructure doc Phase 3: "UniFi/Synology
  logos read MSP"), prune the ASCII set in lockstep with the real logo set and
  generate ASCII versions of any new AI-stack partners with the same
  `/api/ascii` workflow (braille mode, width ~40).
- Machine view's section order/copy must be updated to the new taxonomy
  (Part 1.5) — partner art itself is untouched.

---

## Part 3 — Animation performance assessment

Three patterns coexist in the codebase, from best to worst:

1. **Event-driven state machine** (Vibe Coder 001): `setTimeout`/`setInterval`
   only during active phases, state changes a few times per second, CSS
   transitions for color. **Scales fine. The standard for all new work.**
2. **Typewriter via per-char setState** (`development-ascii-art`): 45 state
   updates/sec, each render rebuilds an O(n) string → O(n²) over the reveal.
   The `textContent` swap itself is *not* the problem — a single text-node
   write per tick causes no layout thrash beyond text reflow inside a fixed
   `pre`. The problem is the React re-render per character and the unbounded
   reveal duration. **Does not scale to larger art; fix per 2.2 (refs + rAF
   batching, no setState).**
3. **rAF + setState every frame** (`infrastructure`, `security`, `consulting`,
   `specifications`, `ascii-wave`, and `setState` on every `mousemove` in the
   infra family): 60 React re-renders/sec each regenerating a full trig grid
   (~1,100–3,000 `Math.sin` calls per frame) for what is a decorative card.
   Several of these can mount simultaneously (navbar dropdown + page content).
   **The pattern to eliminate.** The method-page components
   (`berlin`, `philosophy`, `practices`, `principles`, `implementation`) already
   show the fix: render to `<canvas>` inside rAF using refs only — zero React
   re-renders.

Cross-cutting gaps (recommend one shared module, `components/ui/ascii-shared.ts`):

- `usePrefersReducedMotion()` — no ASCII component respects it today; reduced
  motion should yield the final static frame.
- `useInViewVisible(ref)` — `isVisible` exists in every props API but is always
  passed `true`; wire it to IntersectionObserver so off-screen art does not
  animate (this alone fixes most of pattern 3's cost in practice).
- `useAsciiTypewriter(text, { cps, byLine })` — extract the Vibe Coder/typed
  reveal logic once, ref-based, rAF-driven, for AiAsciiArt and the
  development refresh.

---

## Part 4 — Suggested implementation order

1. **`components/ui/ascii-shared.ts`** — reduced-motion hook, in-view hook,
   typewriter hook. Small, unblocks everything.
2. **`components/ui/ai-ascii-art.tsx`** (Concept A, pipeline gate) — wire into
   `app/services/ai/page.tsx` and `components/navbar.tsx:269`. This is the
   Phase 1 ("Inversion") visual dependency.
3. **Rewrite internals of `components/ui/infrastructure-ascii-art.tsx`** to the
   GPU rack (same exports — navbar untouched). Lands with the Phase 2
   infrastructure page rewrite.
4. **Refresh `components/ui/development-ascii-art.tsx`** engine (timing, refs,
   house font); remove its usage from the AI page and navbar AI case.
5. **Delete `components/ui/networks-servers-ascii-art.tsx`** (orphan) and
   dev-gate `app/api/ascii` + `app/logostest`.
6. **Machine view taxonomy update** (coordinate with the copy workflow) +
   `ascii-partners` pruning alongside the Phase 3 partners review.
7. Optional polish: tokenize the amber triad as `--ascii-amber-bright` /
   `--ascii-amber-dim`; migrate the navbar's other generative previews
   (security/consulting/specifications) to the canvas pattern when those pages
   are rewritten.
