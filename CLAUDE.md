# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.2 application using the App Router architecture. The project appears to be a corporate/portfolio website with custom UI components, animations, and theme support.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture

- **Framework**: Next.js 15.3.2 with React 19
- **Routing**: App Router (using `/app` directory)
- **Styling**: Tailwind CSS v4 (alpha) with CSS variables
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion
- **Theme Management**: next-themes for dark/light mode support
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)

## Key Libraries

- **UI**: @radix-ui components, lucide-react icons
- **Animation**: framer-motion, tw-animate-css
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Carousel**: embla-carousel-react

## Component Structure

The `/components` directory contains custom components including:
- `ui/`: Reusable UI components (button, switch, navigation-menu, etc.)
- Theme and language providers
- Hero sections and marketing components
- Custom backgrounds and animations

## Configuration

- **shadcn/ui**: Configured in `components.json` with "new-york" style
- **ESLint**: Next.js recommended rules with TypeScript support
- **No testing framework**: Tests need to be set up if required


6. Do not use npm but pnpm. Do not start a new server instance, I have already localhost:3000 running.
7. Always do a .md file to start noting the changes we are doing. So we can have track.
8. If you have a doubt about something, ask me first. Do not go alone if you not at certain of what I mean in the promnt.
9. You have mcp servers at your disposal. If the case is that we are stuck after two iterations please consider using the mcp servers to aid you.
10. always check documentation if you no are 100% confident on how to approach a problem. You have context7 mcp server for that.

## Handling Large Search Results

When using serena MCP tools (like `search_for_pattern`) and you encounter errors like "The answer is too long (X characters)", automatically switch to using the Gemini CLI:

```bash
# When serena search fails due to size limits, use Gemini instead
gemini -p "@./ Search for your-pattern across the entire codebase"

# For specific directories
gemini -p "@components/ @app/ Find pattern usage in specific areas"
```

This leverages Gemini's massive context window to handle searches that exceed serena's character limits.
