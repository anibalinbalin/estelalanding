# Troubleshooting Guide

This document contains solutions to common issues encountered during development of the Estela Technology Solutions website.

## Theme & Hydration Issues

### 1. Theme Switching Not Working

**Symptoms:**
- Components don't update colors when theme changes
- Theme-dependent content shows incorrect styling
- Flash of wrong theme on page load

**Root Cause:**
Manual color setting instead of CSS variables or hydration mismatches between server and client.

**Solution:**
Use the theme detection pattern with mounted state:

```jsx
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function MyComponent() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <div style={{ 
      color: resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a' 
    }}>
      Content
    </div>
  )
}
```

**Prevention:**
- Always use the mounted state check for theme-dependent rendering
- Prefer CSS variables over manual color values when possible
- Test theme switching during development

### 2. Hydration Mismatches

**Symptoms:**
- Console warnings about server/client content mismatch
- Layout shifts on page load
- Content briefly shows wrong styling

**Common Causes:**
1. Theme-dependent content rendered before theme is resolved
2. Client-only state used in server components
3. Date/time formatting differences between server and client

**Solutions:**

**For Theme-Dependent Content:**
```jsx
// Always use mounted state check
if (!mounted) return null
```

**For Client-Only Features:**
```jsx
// Use dynamic imports with ssr: false
import dynamic from 'next/dynamic'

const ClientOnlyComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
)
```

## Build & Runtime Errors

### 3. JSX Parsing Errors

**Symptoms:**
- Build fails with "Unexpected token" errors
- JSX syntax highlighting broken in editor
- TypeScript errors in valid JSX

**Error Example:**
```
Error: x Unexpected token `main`. Expected jsx identifier
```

**Solutions:**

**1. Check File Encoding:**
- Ensure file is saved as UTF-8
- Remove any hidden characters or BOM markers
- Recreate file if encoding issues persist

**2. Verify JSX Syntax:**
```jsx
// Correct
export default function Page() {
  return (
    <main>
      <h1>Title</h1>
    </main>
  )
}

// Incorrect - missing return statement
export default function Page() {
  <main>
    <h1>Title</h1>
  </main>
}
```

**3. Check TypeScript Configuration:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

### 4. Double Navbar Issue

**Symptoms:**
- Two navigation bars appear on certain pages
- Navbar content is duplicated
- Layout appears broken with extra height

**Root Cause:**
Navbar component included in both root layout and individual page components.

**Solution:**
Remove navbar from individual page components since it's already in the root layout:

```jsx
// ❌ Incorrect - causes double navbar
export default function Page() {
  return (
    <>
      <Navbar /> {/* Remove this */}
      <main>
        Page content
      </main>
    </>
  )
}

// ✅ Correct - navbar comes from layout
export default function Page() {
  return (
    <main>
      Page content
    </main>
  )
}
```

**Prevention:**
- Check if component is already included in layout before adding to pages
- Use consistent layout hierarchy across all pages

## Styling Issues

### 5. CSS Variables Not Working

**Symptoms:**
- Theme colors not applying correctly
- Custom properties showing as literal values
- Inconsistent styling across components

**Common Causes:**
1. CSS variables not defined in `:root` or `.dark` selectors
2. Incorrect variable names or syntax
3. CSS not being loaded properly

**Solutions:**

**1. Verify Variable Definitions:**
```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}
```

**2. Correct Usage in Components:**
```jsx
// Using with Tailwind
<div className="bg-background text-foreground">

// Using with inline styles
<div style={{ backgroundColor: 'hsl(var(--background))' }}>
```

### 6. Responsive Design Breakpoints

**Symptoms:**
- Layout breaks at certain screen sizes
- Elements overflow containers
- Mobile design not working correctly

**Common Issues:**
1. Missing responsive classes
2. Fixed widths preventing responsive behavior
3. Incorrect breakpoint usage

**Solutions:**

**1. Use Responsive Utilities:**
```jsx
// ✅ Correct - responsive sizing
<div className="text-sm md:text-base lg:text-lg">

// ❌ Incorrect - fixed sizing
<div className="text-lg">
```

**2. Test All Breakpoints:**
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

**3. Use Flexible Layouts:**
```jsx
// ✅ Flexible grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ Fixed layout
<div className="grid grid-cols-3">
```

## Performance Issues

### 7. Large Bundle Size

**Symptoms:**
- Slow page loading
- High bundle size warnings
- Poor Lighthouse scores

**Common Causes:**
1. Importing entire libraries instead of specific functions
2. Not using dynamic imports for heavy components
3. Including unused dependencies

**Solutions:**

**1. Optimize Imports:**
```jsx
// ✅ Tree-shakeable import
import { ArrowRight } from 'lucide-react'

// ❌ Imports entire library
import * as Icons from 'lucide-react'
```

**2. Dynamic Imports:**
```jsx
// For heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'))

// For client-only features
const ClientFeature = dynamic(
  () => import('./ClientFeature'),
  { ssr: false }
)
```

### 8. Image Loading Issues

**Symptoms:**
- Images not loading or showing broken links
- Layout shift when images load
- Poor image performance

**Solutions:**

**1. Use Next.js Image Component:**
```jsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

**2. Configure External Images:**
```js
// next.config.ts
module.exports = {
  images: {
    domains: ['external-domain.com']
  }
}
```

## Development Workflow Issues

### 9. Hot Reload Not Working

**Symptoms:**
- Changes not reflected in browser
- Need to manually refresh page
- Development server seems stuck

**Solutions:**

**1. Check File Extensions:**
- Ensure files have correct extensions (`.tsx`, `.ts`, `.css`)
- Verify files are in the correct directories

**2. Restart Development Server:**
```bash
# Stop current server (Ctrl+C)
pnpm run dev
```

**3. Clear Next.js Cache:**
```bash
rm -rf .next
pnpm run dev
```

### 10. TypeScript Errors

**Symptoms:**
- Red squiggly lines in editor
- Build fails with type errors
- Incorrect type inference

**Common Solutions:**

**1. Install Type Definitions:**
```bash
pnpm add -D @types/node @types/react @types/react-dom
```

**2. Update TypeScript Configuration:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

**3. Add Type Annotations:**
```tsx
// ✅ Properly typed
interface ComponentProps {
  title: string;
  children: React.ReactNode;
}

function Component({ title, children }: ComponentProps) {
  return <div>{title} {children}</div>
}
```

## Debugging Tips

### General Debugging Process
1. **Check Console**: Look for error messages and warnings
2. **Verify Network Tab**: Check for failed resource loads
3. **Test in Incognito**: Rule out cache/extension issues
4. **Compare Working Version**: Use git to identify what changed
5. **Minimal Reproduction**: Create simplest case that reproduces issue

### Useful Development Commands
```bash
# Check for issues
pnpm run lint          # ESLint checking
pnpm run build         # Production build test
pnpm run type-check    # TypeScript checking (if configured)

# Clean slate
rm -rf .next node_modules
pnpm install
pnpm run dev
```

### Browser DevTools Tips
- **React DevTools**: Inspect component props and state
- **Network Tab**: Check for failed requests or slow loads
- **Performance Tab**: Identify performance bottlenecks
- **Console**: Monitor for warnings and errors

---

*When encountering new issues, document the problem and solution here to help future development. Include error messages, symptoms, root cause, and step-by-step solutions.*