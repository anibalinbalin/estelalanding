# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `pnpm dev` - Run the development server (Next.js)
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## High-Level Architecture

This is a Next.js project using:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with CSS variables
- **shadcn/ui** component library (components in `components/ui/`)
- **React Hook Form** with Zod for form handling
- **next-themes** for theme switching support

### Key Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - React components including shadcn/ui components
- `components/ui/` - shadcn/ui components (Radix UI based)
- `lib/` - Utility functions and shared code
- `hooks/` - Custom React hooks
- `public/` - Static assets and images

### Important Files

- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind configuration with custom design tokens
- CSS variables are defined in `app/globals.css` for theming
- `next.config.mjs` - Next.js configuration (currently ignoring TS/lint errors during build)

### Component Structure

UI components follow shadcn/ui patterns:
- Built on Radix UI primitives
- Styled with Tailwind and CVA (class-variance-authority)
- Use `cn()` utility from `lib/utils.ts` for className merging
- Theme provider wraps the app for dark mode support

### Path Aliases

- `@/*` maps to the project root
- `@/components` for component imports
- `@/lib` for utilities
- `@/hooks` for custom hooks

###
Use pnpm instead of npm. Also befgore starting a new server check if its not already started. 