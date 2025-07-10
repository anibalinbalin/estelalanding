# Design Patterns and Architecture

## Component Patterns
- **Section Components**: Self-contained sections for homepage (e.g., HeroDemo, TrustedBy, EstelaSpeed)
- **UI Components**: Reusable UI elements in `/components/ui/`
- **ASCII Art Components**: Specialized components for ASCII animations
- **Page Components**: Minimal page files that compose section components

## State Management
- **Theme State**: Managed by ThemeProvider using next-themes
- **Language State**: Custom LanguageProvider for i18n
- **Local State**: useState for component-specific state
- **Effects**: useEffect for side effects and animations

## Animation Patterns
- **Framer Motion**: For declarative animations
- **CSS Animations**: For performance-critical animations
- **React Three Fiber**: For 3D graphics and effects
- **ASCII Animations**: Custom typewriter and wave effects

## Routing Structure
- **App Router**: Using Next.js 13+ app directory
- **Nested Routes**: `/method/*`, `/services/*`, `/company/*`
- **Dynamic Routing**: Not currently used
- **Static Generation**: Default rendering strategy

## Styling Architecture
- **Utility-First**: Tailwind CSS for most styling
- **Component Classes**: Custom classes for complex components
- **Theme System**: CSS variables for dynamic theming
- **Responsive**: Mobile-first with consistent breakpoints

## Content Management
- **Inline Content**: Component-level content objects
- **Multi-language**: Content objects with language keys
- **Images**: Stored in `/public` with descriptive paths
- **Documents**: Markdown files in `/public/docs`

## Performance Considerations
- **Font Loading**: Custom fonts with swap display
- **Image Optimization**: Next.js Image component where applicable
- **Code Splitting**: Automatic with Next.js
- **Turbopack**: Fast refresh in development