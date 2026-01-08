# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # Run ESLint
```

## Architecture

**Estela** - Bilingual (ES/EN) Next.js 15 marketing site for a tech consultancy. Deployed on Vercel.

### Bilingual Pattern

Single codebase, no route-based i18n. Language switching via client-side `LanguageProvider`:

```tsx
// Every page/component uses this pattern:
const content = {
  en: { title: "English title", ... },
  es: { title: "Título español", ... }
};

export default function Page() {
  const { language } = useLanguage();  // from components/language-provider.tsx
  const t = content[language];
  return <h1>{t.title}</h1>;
}
```

Detection priority: URL path → localStorage → browser language. Default: Spanish.

### Design System

Based on **Oxide Computer** aesthetic:
- **Fonts**: SuisseIntl (body), GT America Mono (nav/buttons)
- **CSS variables**: Extensive P3 color space vars in `globals.css` (e.g., `--content-raise-p3`, `--stroke-secondary-p3`)
- **Dark mode**: next-themes provider, CSS class-based (`.dark`)
- **ASCII art**: Custom animated ASCII components in `components/ui/*-ascii-art.tsx` for visual flair

### Key Files

- `app/layout.tsx` - Root layout with ViewTransitions, ThemeProvider, LanguageProvider
- `components/navbar.tsx` - Main nav with mega menus and ASCII art hover states
- `components/language-provider.tsx` - Language context (useLanguage hook)
- `lib/language-detection.ts` - Browser language detection logic
- `lib/utils.ts` - cn() utility (clsx + tailwind-merge)
- `app/globals.css` - Design tokens, custom CSS vars, Oxide-style component classes

### Routes

- `/` - Home
- `/services/{infrastructure,security,development,consulting,specifications}`
- `/method/{introduction,principles,implementation,practices,philosophy}`
- `/company/{about,work,team,partners}`
- `/contact`

## Style Guide

- Spanish copy uses **Les Luthiers** wit style: sophisticated, witty, intellectual humor with wordplay
- Radix UI for navigation menus
- Framer Motion for animations
- View Transitions API via `next-view-transitions`

## Notes

- ESLint ignored during builds (`next.config.ts`)
- tsconfig excludes `backups/` directory
- Path alias: `@/*` maps to project root
