# Code Style and Conventions

## TypeScript Configuration
- **Strict Mode**: Enabled
- **Target**: ES2017
- **Module**: ESNext with bundler resolution
- **JSX**: Preserve
- **Path Alias**: `@/*` maps to root directory

## Component Structure
- **Functional Components**: Using arrow functions or function declarations
- **Naming**: PascalCase for components, kebab-case for files
- **Exports**: Default exports for page components, named exports for utility components
- **State Management**: React hooks (useState, useEffect)
- **Custom Hooks**: useTheme, useLanguage for global state

## Styling Conventions
- **Tailwind CSS**: v4 with custom CSS variables
- **Theme Variables**: Using CSS custom properties for colors
- **Responsive Design**: Mobile-first approach with sm/md/lg breakpoints
- **Custom Classes**: Prefixed with component name (e.g., oxide-nav-button)
- **Dark Mode**: Using `dark:` variant with theme provider

## File Organization
- Component files include the component implementation
- Separate CSS files for complex animations (e.g., hands-section.css)
- ASCII art components in `/components/ui/*-ascii-art.tsx`
- Shared UI components in `/components/ui/`

## Import Order
1. React and Next.js imports
2. Third-party libraries
3. Custom hooks and utilities
4. Components
5. Types and interfaces
6. Styles

## Best Practices
- No unnecessary comments unless specifically requested
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Use TypeScript for type safety
- Follow existing patterns in the codebase