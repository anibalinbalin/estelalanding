# Architecture Documentation

This document outlines the technical architecture, design decisions, and system organization of the Estela Technology Solutions website.

## Technology Stack

### Core Framework
- **Next.js 15.3.2** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS v4 (alpha)** - Utility-first CSS framework

### UI & Components
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Theming & Styling
- **next-themes** - Theme management system
- **CSS Variables** - Dynamic theming support
- **tw-animate-css** - Additional Tailwind animations
- **class-variance-authority** - Component variant management

### Development Tools
- **ESLint** - Code linting with Next.js configuration
- **TypeScript** - Strict mode enabled
- **Turbopack** - Fast bundler for development

## Project Structure

```
my-app/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   ├── company/            # Company pages
│   │   ├── about/          # About page
│   │   └── team/           # Team page
│   └── [service-pages]/    # Service-specific pages
├── components/             # React components
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── sections/           # Page section components
│   ├── navbar.tsx          # Main navigation
│   └── footer.tsx          # Site footer
├── public/                 # Static assets
│   ├── docs/               # Documentation
│   └── images/             # Image assets
├── lib/                    # Utility functions
└── types/                  # TypeScript type definitions
```

## Design Decisions

### 1. App Router Architecture

**Decision**: Use Next.js 15 App Router instead of Pages Router

**Rationale**:
- Better performance with React Server Components
- Improved developer experience with co-located layouts
- Future-proof architecture aligned with Next.js direction
- Better SEO and loading performance

**Trade-offs**:
- Some learning curve for developers familiar with Pages Router
- Limited ecosystem support for newest features (acceptable for this project)

### 2. Component Architecture

**Decision**: Modular component structure with section-based organization

**Structure**:
```
components/
├── ui/                     # Generic, reusable components
│   ├── button.tsx
│   ├── navigation-menu.tsx
│   └── switch.tsx
├── sections/               # Page-specific sections  
│   ├── hero-section.tsx
│   ├── evolution-section.tsx
│   └── developer-velocity-section.tsx
├── navbar.tsx              # Site navigation
└── footer.tsx              # Site footer
```

**Benefits**:
- Clear separation of concerns
- Easy to locate and modify specific sections
- Reusable UI components across different pages
- Scalable as the site grows

### 3. Theming System

**Decision**: CSS Variables + next-themes for dynamic theming

**Implementation**:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```

**Benefits**:
- Seamless light/dark mode switching
- Consistent color system across components
- Easy to maintain and extend
- No flash of unstyled content (FOUC)

**Challenges Solved**:
- Hydration mismatches with theme-dependent content
- Consistent color application across all components

### 4. Styling Approach

**Decision**: Tailwind CSS with utility-first methodology

**Configuration**:
- Tailwind CSS v4 (alpha) for latest features
- Custom CSS variables for theme integration
- Component-level overrides when necessary

**Benefits**:
- Rapid development and iteration
- Consistent design system
- Small bundle size with purging
- Easy responsive design

### 5. Internationalization Strategy

**Decision**: Context-based bilingual support (English/Spanish)

**Implementation**:
```jsx
const content = {
  en: { title: "English Title" },
  es: { title: "Título en Español" }
}
```

**Rationale**:
- Simple two-language requirement doesn't justify complex i18n library
- Better performance without additional dependencies
- Full control over language switching behavior
- Easy to maintain and extend

### 6. State Management

**Decision**: React Context + Local State (no external state management)

**Approach**:
- Theme state: `next-themes` provider
- Language state: React Context
- Component state: Local `useState` and `useEffect`

**Benefits**:
- Minimal complexity for current requirements
- No unnecessary dependencies
- Clear data flow
- Easy to debug and maintain

## Performance Considerations

### 1. Image Optimization

**Strategy**:
- Next.js Image component for automatic optimization
- Proper `width` and `height` attributes
- Lazy loading for below-the-fold images
- WebP format with fallbacks

**Current Status**:
- External placeholder images (temporary)
- **TODO**: Replace with optimized local assets

### 2. Code Splitting

**Approach**:
- Automatic code splitting with App Router
- Dynamic imports for heavy components when needed
- Component-level splitting for better caching

### 3. Bundle Optimization

**Techniques**:
- Tree shaking with ES modules
- Tailwind CSS purging for unused styles
- TypeScript compilation for smaller bundles

## Security Considerations

### 1. Content Security Policy

**Status**: To be implemented
**Requirements**:
- Restrict inline scripts and styles
- Control external resource loading
- Prevent XSS attacks

### 2. Type Safety

**Implementation**:
- TypeScript strict mode enabled
- Proper typing for all components and functions
- Interface definitions for data structures

### 3. Dependencies

**Approach**:
- Regular security audits with `npm audit`
- Minimal dependency surface area
- Regular updates for security patches

## Data Flow

### Theme Management
```
ThemeProvider (next-themes)
    ↓
useTheme() hook
    ↓
Component theme detection
    ↓
CSS variable application
```

### Language Management
```
LanguageContext
    ↓
useLanguage() hook
    ↓
Content object selection
    ↓
Rendered content
```

### Component Lifecycle
```
Server Component (Static)
    ↓
Client Component (Interactive)
    ↓
Theme/Language Detection
    ↓
Rendered UI
```

## Development Workflow

### 1. Component Development Process
1. Design component interface (props, types)
2. Implement with accessibility in mind
3. Add theme support if needed
4. Test responsive behavior
5. Document usage patterns

### 2. Build Process
```bash
# Development
pnpm run dev          # Start development server with Turbopack

# Production
pnpm run build        # Build for production
pnpm run start        # Start production server

# Quality Assurance
pnpm run lint         # ESLint checking
pnpm run type-check   # TypeScript checking (if configured)
```

### 3. Code Quality Standards
- **ESLint**: Next.js recommended rules + TypeScript
- **TypeScript**: Strict mode with proper type coverage
- **Component Structure**: Consistent patterns and naming
- **Documentation**: Document complex logic and architecture decisions

## Future Architecture Considerations

### 1. Content Management
**Current**: Static content in components
**Future Option**: Headless CMS integration (Contentful, Strapi)
**Trigger**: When content editing frequency increases

### 2. Performance Monitoring
**Current**: Basic Next.js analytics
**Future Option**: Advanced performance monitoring (Vercel Analytics, Sentry)
**Trigger**: When performance optimization becomes critical

### 3. Testing Strategy
**Current**: Manual testing
**Future Option**: Automated testing suite (Jest, Playwright)
**Trigger**: When application complexity increases significantly

### 4. API Integration
**Current**: Static content
**Future Option**: REST/GraphQL API integration
**Trigger**: When dynamic content requirements emerge

## Migration Considerations

### From Current Architecture
- **Database**: None currently, would require planning for data persistence
- **Authentication**: Not implemented, would need strategy for user management
- **Content**: Static to dynamic content migration path established

### Breaking Changes Protocol
1. Document breaking changes in DEVELOPMENT_LOG.md
2. Provide migration guide for affected components
3. Update this architecture document
4. Test all affected areas thoroughly

---

*This architecture document should be updated whenever significant architectural decisions are made or when the technology stack changes substantially.*