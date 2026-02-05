# CLAUDE.md

Estela - Bilingual (ES/EN) Next.js 16 marketing site. Oxide Computer aesthetic. Deployed on Vercel.

## Quick Reference

```bash
pnpm dev          # Dev server (Turbopack)
pnpm build        # Production build
pnpm lint         # ESLint
```

**Key files:**
- `app/layout.tsx` - Root layout, providers
- `components/navbar.tsx` - Nav with mega menus
- `components/language-provider.tsx` - useLanguage hook
- `app/globals.css` - Design tokens, P3 color vars

**Routes:** `/` | `/services/{infrastructure,security,development,consulting,specifications}` | `/method/{introduction,principles,implementation,practices,philosophy}` | `/company/{about,work,team,partners}` | `/contact`

## Architecture

### Bilingual Pattern

Single codebase, client-side switching via `LanguageProvider`:

```tsx
const content = {
  en: { title: "English title" },
  es: { title: "Título español" }
};

export default function Page() {
  const { language } = useLanguage();
  const t = content[language];
  return <h1>{t.title}</h1>;
}
```

Detection: URL path → localStorage → browser. Default: Spanish.

### Design System

- **Fonts**: SuisseIntl (body), GT America Mono (nav/buttons)
- **Colors**: P3 color space vars (`--content-raise-p3`, `--stroke-secondary-p3`)
- **Dark mode**: next-themes, class-based
- **ASCII art**: `components/ui/*-ascii-art.tsx`, `components/ascii-partners/`
- **Machine view**: Toggle between HUMAN/MACHINE modes; MACHINE shows markdown-style nav links
- **Animations**: Framer Motion, View Transitions API

### Style

- Spanish copy: **Les Luthiers** wit - sophisticated, intellectual humor
- Radix UI for menus
- `cn()` utility (clsx + tailwind-merge) in `lib/utils.ts`

## Behavioral Guidelines

**Bias:** Caution over speed. For trivial tasks, use judgment.

### Think First

- State assumptions explicitly. If uncertain, ask.
- Multiple interpretations? Present them, don't pick silently.
- Simpler approach exists? Say so.

### Simplicity

- No features beyond what was asked
- No abstractions for single-use code
- No error handling for impossible scenarios
- 200 lines that could be 50? Rewrite.

### Surgical Changes

- Don't "improve" adjacent code
- Match existing style
- Only remove dead code YOUR changes created
- Every changed line traces to user's request

### Goal-Driven

Transform tasks into verifiable goals:
- "Add validation" → tests for invalid inputs pass
- "Fix bug" → reproducing test passes
- "Refactor X" → tests pass before and after

## Notes

- ESLint ignored during builds (`next.config.ts`)
- tsconfig excludes `backups/`
- Path alias: `@/*` → project root
