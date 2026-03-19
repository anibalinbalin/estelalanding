# AI Messaging Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the `/services/development` page copy to focus on AI-assisted engineering, and add a new AI principles section to the homepage.

**Architecture:** Two independent changes — a copy-only update to an existing page component, and a new section component added to the homepage. Both follow the established bilingual content object + `useLanguage()` pattern.

**Tech Stack:** Next.js, React, next-themes, existing design tokens (SuisseIntl, display-p3 color tokens)

**Spec:** `docs/superpowers/specs/2026-03-19-ai-messaging-update-design.md`

---

### Task 1: Update development page copy

**Files:**
- Modify: `app/services/development/page.tsx:7-24`

- [ ] **Step 1: Update the EN content object**

Replace lines 8-14 in the `developmentContent` object:

```typescript
  en: {
    title: "Development & Artificial Intelligence",
    subtitle: "AI that works after the demo ends.",
    sectionTitle: "AI-Assisted Engineering",
    sectionDesc: "We build AI-powered pipelines that cut processing times, automate repetitive workflows, and integrate intelligence into existing systems. Document processing, automated QA, data routing, content generation\u2009—\u2009we design the pipeline, the AI does the heavy lifting, and a human signs off. Claude Code, React, Postgres. Not vibe coding. Engineering.",
    cta: "Development with accountability",
    contact: "CONTACT"
  },
```

- [ ] **Step 2: Update the ES content object**

Replace lines 16-23:

```typescript
  es: {
    title: "Desarrollo e Inteligencia Artificial",
    subtitle: "IA que funciona cuando se apaga el proyector.",
    sectionTitle: "Ingeniería Asistida por IA",
    sectionDesc: "Construimos pipelines con IA que recortan tiempos de procesamiento, automatizan flujos repetitivos e integran inteligencia en sistemas existentes. Procesamiento de documentos, QA automatizado, enrutamiento de datos, generación de contenido\u2009—\u2009diseñamos el pipeline, la IA hace el trabajo pesado, y un humano firma. Claude Code, React, Postgres. No es vibe coding. Es ingeniería.",
    cta: "Desarrollo con responsabilidad",
    contact: "CONTACTO"
  }
```

- [ ] **Step 3: Verify the dev server renders correctly**

Run: `pnpm dev` (if not already running)
Navigate to `http://localhost:3000/services/development`
Verify:
- EN: title, subtitle, section title, description, and CTA all render with new text
- Toggle language to ES: same verification
- Check mobile viewport (< 600px) — the longer `sectionDesc` should wrap naturally without layout breakage
- Check desktop viewport (> 1000px) — the text column sits next to the ASCII art block; verify the longer paragraph doesn't create an unbalanced layout

- [ ] **Step 4: Commit**

```bash
git add app/services/development/page.tsx
git commit -m "copy: rewrite development page — AI-assisted engineering focus"
```

---

### Task 2: Create AI principles section component

**Files:**
- Create: `components/ai-principles-section.tsx`

- [ ] **Step 1: Create the component file**

Create `components/ai-principles-section.tsx` with the following content. This follows the exact pattern from `estela-principles.tsx` — bilingual content object, `useTheme()` + `useLanguage()`, mounted guard — but with a simpler layout (no ASCII art boxes, just title + subtitle + two principle text blocks side by side):

```tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

export function AIPrinciplesSection() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "AI is a tool. We are the criteria.",
      subtitle: "Everyone added AI to their homepage. We added it to our process. The difference: one is a label, the other is a method. Harvard says AI doesn\u2019t reduce work\u2009\u2014\u2009it intensifies it. We agree. That\u2019s why it needs someone at the wheel.",
      principle1: {
        title: "The machine proposes. We decide.",
        description: "A six-person team with AI can deliver what a fifty-person team delivers without it. But only if someone knows what to accept, what to reject, and why. AI makes speed cheap. Judgment remains expensive. We sell the expensive part."
      },
      principle2: {
        title: "We don\u2019t vibe code.",
        description: "There\u2019s a name for accepting AI-generated code without understanding it. The industry calls it vibe coding. It ships fast, breaks at three months, and the person who built it can\u2019t explain what it does. We read every line. We test every path. We sign what we ship."
      }
    },
    es: {
      title: "La IA es una herramienta. Nosotros somos el criterio.",
      subtitle: "Todos agregaron IA a su p\u00e1gina web. Nosotros la agregamos a nuestro proceso. La diferencia: uno es un r\u00f3tulo, el otro es un m\u00e9todo. Harvard dice que la IA no reduce el trabajo\u2009\u2014\u2009lo intensifica. Estamos de acuerdo. Por eso necesita a alguien al volante.",
      principle1: {
        title: "La m\u00e1quina propone. Nosotros decidimos.",
        description: "Un equipo de seis personas con IA puede entregar lo que un equipo de cincuenta entrega sin ella. Pero solo si alguien sabe qu\u00e9 aceptar, qu\u00e9 rechazar, y por qu\u00e9. La IA abarat\u00f3 la velocidad. El criterio sigue siendo caro. Vendemos la parte cara."
      },
      principle2: {
        title: "No hacemos vibe coding.",
        description: "Hay un nombre para aceptar c\u00f3digo generado por IA sin entenderlo. La industria lo llama vibe coding. Se entrega r\u00e1pido, se rompe a los tres meses, y quien lo construy\u00f3 no puede explicar qu\u00e9 hace. Leemos cada l\u00ednea. Probamos cada camino. Firmamos lo que entregamos."
      }
    }
  };

  const t = content[language];

  if (!mounted) return null;

  return (
    <section
      className="mt-28 sm:mt-[11.25rem] mb-4"
      style={{
        backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(8, 15, 17)' : '#ffffff',
        color: mounted && resolvedTheme === 'dark' ? 'var(--content-default-p3)' : '#08090a'
      }}
    >
      <div className="container mx-auto px-5 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="grid items-start col-span-12 min-[1000px]:col-span-6 mb-4 min-[1000px]:mb-0 min-[1000px]:grid-cols-[repeat(6,minmax(0,1fr))]">
            <div className="flex flex-col col-span-5 text-center min-[1000px]:text-left min-[1000px]:mt-8">
              <h2
                className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.title}
              </h2>
              <div
                className="text-balance mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.subtitle}
              </div>
            </div>
          </div>

          <div className="gap-6 mb-6 col-span-6 min-[1000px]:col-span-3">
            <div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.principle1.title}
              </h3>
              <p
                className="text-base"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.principle1.description}
              </p>
            </div>
          </div>

          <div className="col-span-6 min-[1000px]:col-span-3">
            <div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.principle2.title}
              </h3>
              <p
                className="text-base"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.principle2.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the component renders in isolation**

Temporarily import and render in any page to confirm no errors. Or proceed directly to Task 3.

- [ ] **Step 3: Commit**

```bash
git add components/ai-principles-section.tsx
git commit -m "feat: add AI principles section component"
```

---

### Task 3: Add AI principles section to the homepage

**Files:**
- Modify: `app/page.tsx:9,36-37`

- [ ] **Step 1: Add the import**

Add after line 9 (`import { EstelaPrinciples }...`):

```typescript
import { AIPrinciplesSection } from "@/components/ai-principles-section";
```

- [ ] **Step 2: Render the component between EstelaPrinciples and EstelaSpeed**

In the JSX, between `<EstelaPrinciples />` (line 36) and `<EstelaSpeed />` (line 37), add:

```tsx
      <EstelaPrinciples />
      <AIPrinciplesSection />
      <EstelaSpeed />
```

- [ ] **Step 3: Verify on the homepage**

Run: `pnpm dev` (if not already running)
Navigate to `http://localhost:3000`
Verify:
- New section appears between the existing principles and speed sections
- Title, subtitle, and both principles render in EN
- Toggle to ES — all text switches correctly
- Dark mode: colors match the adjacent sections (same tokens)
- Light mode: same check
- Mobile viewport: section stacks properly, text is readable
- No hydration warnings in console

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add AI principles section to homepage between principles and speed"
```

---

### Task 4: Visual QA across both changes

- [ ] **Step 1: Development page — desktop check**

Navigate to `/services/development` at 1200px+ width. The longer `sectionDesc` (4x previous length) sits in a `col-span-5` column next to the ASCII art. Verify:
- Text doesn't overflow or create excessive whitespace
- The two-column layout remains balanced
- If the text creates an awkward imbalance, note it for a follow-up layout adjustment (out of scope for this plan)

- [ ] **Step 2: Development page — mobile check**

Same page at < 600px. The column becomes `col-span-12` so the longer text should be fine. Verify it wraps naturally.

- [ ] **Step 3: Homepage — AI principles column stacking on mobile**

At < 600px, the two principle blocks use `col-span-6` (side-by-side). Unlike the existing principles section which has ASCII art boxes absorbing space, the AI principles are dense text only. If the two text blocks feel cramped side-by-side on small screens, change both principle `div`s from `col-span-6 min-[1000px]:col-span-3` to `col-span-12 min-[600px]:col-span-6 min-[1000px]:col-span-3` so they stack on mobile.

- [ ] **Step 4: Homepage — section spacing check**

Scroll through the homepage. Verify the spacing between EstelaPrinciples → AIPrinciplesSection → EstelaSpeed feels consistent with the rest of the page rhythm. Both use `mt-28 sm:mt-[11.25rem] mb-4`.

- [ ] **Step 5: Final commit (if any spacing adjustments were needed)**

Only if adjustments were made:

```bash
git add -u
git commit -m "fix: adjust spacing for AI principles section"
```
