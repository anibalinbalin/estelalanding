# Hero Theme Switching Investigation

## Issue Description
The hero effect is not switching themes properly when toggling between light and dark modes.

## Components Involved

### 1. **animated-hero.tsx** (`/components/ui/animated-hero.tsx`)
- Uses `useTheme` hook from `next-themes`
- Has a mounted state to prevent hydration issues
- Manually sets text color based on theme:
  - Dark theme: `#d7d8d9` for title
  - Light theme: `#08090a` for title
  - Subtitle uses fixed color: `#7e8385`

### 2. **unicorn-background.tsx** (`/components/ui/unicorn-background.tsx`)
- Contains the visual background effect
- Uses different project IDs based on theme:
  - Light theme: `x32OzaamtEMBurgclZfn`
  - Dark theme: `v0bejveYheJ4JoKnNQwP`
- Reinitializes the UnicornStudio scene when theme changes
- Has cleanup logic to destroy previous scenes

### 3. **hero-demo.tsx** (`/components/hero-demo.tsx`)
- Simple wrapper component that renders the Hero component

## Potential Issues Identified

1. **Manual Color Setting**: The hero title uses inline styles with manual color values instead of CSS variables that would automatically update with theme changes.

2. **UnicornStudio Reinitialization**: The background effect depends on external UnicornStudio library which needs to be properly destroyed and reinitialized when theme changes.

3. **Mounted State Timing**: Both components use mounted state, but timing might cause issues if theme changes before components are fully mounted.

## Key Findings

### Theme System Configuration
- **ThemeProvider**: Configured with `attribute="class"`, `defaultTheme="light"`, `enableSystem`, and `disableTransitionOnChange`
- **CSS Variables**: Properly defined in `globals.css` for both light and dark modes
  - Light: `--foreground: #000000`, `--background: #ffffff`
  - Dark: `--foreground: #ffffff`, `--background: #080f11`

### Issues Found

1. **Hardcoded Colors in animated-hero.tsx**:
   - Title color is hardcoded: `#d7d8d9` (dark) and `#08090a` (light)
   - These don't match the CSS variables: `#ffffff` (dark) and `#000000` (light)
   - Subtitle uses fixed color `#7e8385` for both themes

2. **Inline Styles Override CSS Variables**:
   - The component uses inline styles which have higher specificity than CSS classes
   - This prevents the theme-aware CSS variables from being applied

## Recommended Fix

The hero component should use CSS variables instead of hardcoded colors:

```tsx
// Replace inline styles with className
<h1 className="text-[65px] leading-[65px] tracking-normal text-foreground">
  {/* content */}
</h1>

<p className="mt-6 text-[22px] leading-[29px] tracking-normal max-w-2xl text-muted-foreground">
  {/* subtitle */}
</p>
```

This would make the text colors automatically update when the theme changes, matching the rest of the application.