# AI Messaging Update — Design Spec

**Date:** 2026-03-19
**Scope:** Two changes — rewrite `/services/development` page copy + add new AI principles section to homepage

---

## 1. Development Page Rewrite (`/services/development`)

### What changes

The `developmentContent` object in `app/services/development/page.tsx` gets new copy for both `en` and `es` keys. No structural or layout changes — same fields (title, subtitle, sectionTitle, sectionDesc, cta, contact).

### New copy

**EN:**

| Field | Current | New |
|-------|---------|-----|
| title | Development & Artificial Intelligence | Development & Artificial Intelligence |
| subtitle | AI solutions that work outside the demo. | AI that works after the demo ends. |
| sectionTitle | Custom Development | AI-Assisted Engineering |
| sectionDesc | Software that works. React, Postgres, Claude Code. Automation that saves time. AI that delivers. | We build AI-powered pipelines that cut processing times, automate repetitive workflows, and integrate intelligence into existing systems. Document processing, automated QA, data routing, content generation — we design the pipeline, the AI does the heavy lifting, and a human signs off. Claude Code, React, Postgres. Not vibe coding. Engineering. |
| cta | Development with continuity | Development with accountability |
| contact | CONTACT | CONTACT |

**ES:**

| Field | Current | New |
|-------|---------|-----|
| title | Desarrollo e Inteligencia Artificial | Desarrollo e Inteligencia Artificial |
| subtitle | Soluciones de IA que funcionan fuera del demo. | IA que funciona cuando se apaga el proyector. |
| sectionTitle | Desarrollo a Medida | Ingenieria Asistida por IA |
| sectionDesc | Software que funciona. React, Postgres, Claude Code. Automatizacion que ahorra tiempo. IA que aporta. | Construimos pipelines con IA que recortan tiempos de procesamiento, automatizan flujos repetitivos e integran inteligencia en sistemas existentes. Procesamiento de documentos, QA automatizado, enrutamiento de datos, generacion de contenido — disenamos el pipeline, la IA hace el trabajo pesado, y un humano firma. Claude Code, React, Postgres. No es vibe coding. Es ingenieria. |
| cta | Desarrollo con continuidad | Desarrollo con responsabilidad |
| contact | CONTACTO | CONTACTO |

### Rationale

- **Subtitle** becomes punchier, keeps the "demo vs reality" framing
- **Section title** shifts from generic "Custom Development" to "AI-Assisted Engineering" — draws a line against vibe coding
- **Section desc** goes from vague ("Software that works") to specific (names pipeline types, names the methodology, references the vibe coding problem as contrast)
- **CTA** moves from "continuity" to "accountability" — value proposition and differentiator

### Files to modify

- `app/services/development/page.tsx` — update the `developmentContent` object (lines 7-24)

---

## 2. New Homepage Section: AI Principles

### What gets added

A new React component rendered on the homepage between the existing Estela Principles section and the Estela Speed section.

### Content

**EN:**

- **Section Title:** "AI is a tool. We are the criteria."
- **Section Subtitle:** "Everyone added AI to their homepage. We added it to our process. The difference: one is a label, the other is a method. Harvard says AI doesn't reduce work — it intensifies it. We agree. That's why it needs someone at the wheel."
- **Principle 1 title:** "The machine proposes. We decide."
- **Principle 1 body:** "A 15-person firm with AI can deliver what a 50-person firm delivers without it. But only if someone knows what to accept, what to reject, and why. AI makes speed cheap. Judgment remains expensive. We sell the expensive part."
- **Principle 2 title:** "We don't vibe code."
- **Principle 2 body:** "There's a name for accepting AI-generated code without understanding it. The industry calls it vibe coding. It ships fast, breaks at three months, and the person who built it can't explain what it does. We read every line. We test every path. We sign what we ship."

**ES:**

- **Section Title:** "La IA es una herramienta. Nosotros somos el criterio."
- **Section Subtitle:** "Todos agregaron IA a su pagina web. Nosotros la agregamos a nuestro proceso. La diferencia: uno es un rotulo, el otro es un metodo. Harvard dice que la IA no reduce el trabajo — lo intensifica. Estamos de acuerdo. Por eso necesita a alguien al volante."
- **Principle 1 title:** "La maquina propone. Nosotros decidimos."
- **Principle 1 body:** "Un estudio de seis personas con IA puede entregar lo que un equipo de cincuenta entrega sin ella. Pero solo si alguien sabe que aceptar, que rechazar, y por que. La IA abarato la velocidad. El criterio sigue siendo caro. Vendemos la parte cara."
- **Principle 2 title:** "No hacemos vibe coding."
- **Principle 2 body:** "Hay un nombre para aceptar codigo generado por IA sin entenderlo. La industria lo llama vibe coding. Se entrega rapido, se rompe a los tres meses, y quien lo construyo no puede explicar que hace. Leemos cada linea. Probamos cada camino. Firmamos lo que entregamos."

### Visual treatment

Follow the same pattern as `estela-principles.tsx`:
- Large section title + muted subtitle
- Two principle blocks with bold titles and body text
- Same spacing, typography, and color tokens
- No ASCII art or special visual elements needed — the copy carries the section

### Homepage placement

In `app/page.tsx`, the new component renders between `<EstelaPrinciples />` and `<EstelaSpeed />`.

Current order (relevant excerpt):
```
<EstelaPrinciples />
<EstelaSpeed />
```

New order:
```
<EstelaPrinciples />
<AIPrinciplesSection />
<EstelaSpeed />
```

### Files to create

- `components/ai-principles-section.tsx` — new component, bilingual, follows existing section patterns

### Files to modify

- `app/page.tsx` — import and render `<AIPrinciplesSection />` between Principles and Speed sections

---

## Design decisions

1. **No layout changes to the development page** — same structure, just new words. Keeps the change minimal and focused.
2. **New component for AI principles** rather than modifying `estela-principles.tsx` — the existing section is about character (who we are), the new one is about methodology (how we work with AI). Separate concerns.
3. **Bilingual from the start** — both EN and ES in the content object, matching the existing pattern across all components.
4. **"Vibe coding" used explicitly** — it's a term the industry knows (coined by Karpathy, covered by HBR, fast.ai, Red Hat). Using it positions Estela as aware of the discourse and deliberately on the right side of it.
5. **Harvard reference kept implicit** — the subtitle says "Harvard says" without a link or footnote. This matches the site's tone (assertive, not academic). The claim is verifiable but the site isn't a research paper.

---

## Out of scope

- No changes to other service pages (infrastructure, security, consulting, specifications)
- No changes to the existing principles section content
- No new routes or pages
- No visual/design system changes
- No changes to the ASCII art components
