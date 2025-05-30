# Linear-Inspired Hero Section Styling Guide

This guide contains all the typography, styling, and implementation details for creating a Linear-inspired hero section in Next.js with Tailwind CSS.

## Overview

The Linear design system is characterized by:
- Clean, minimal aesthetics
- Precise typography with specific font weights
- Subtle animations and transitions
- Glass morphism effects
- Careful spacing and proportions

## Typography System

### Font Configuration

```javascript
// Import Inter font with variable weights
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Font Weights (Critical for Linear Look)

Linear uses specific font weights that are between standard weights:

```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 510;  /* Not 500! */
  --font-weight-semibold: 590; /* Not 600! */
}
```

### Typography Scale

```css
/* Hero Title - Large Display Text */
.hero-title {
  font-size: 4rem;        /* 64px */
  line-height: 1.06;      /* Very tight */
  font-weight: 590;       /* Semibold */
  letter-spacing: -0.02em; /* Tight tracking */
}

/* Hero Subtitle */
.hero-subtitle {
  font-size: 1.125rem;    /* 18px */
  line-height: 1.6;       /* Relaxed */
  font-weight: 400;       /* Normal */
  color: var(--muted-foreground);
}

/* Button Text */
.button-text {
  font-size: 0.875rem;    /* 14px */
  font-weight: 510;       /* Medium */
}
```

## Color System

### Light Mode Colors

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --muted-foreground: #666666;
  --border: rgba(0, 0, 0, 0.08);
  --accent: rgba(0, 0, 0, 0.04);
}
```

### Dark Mode Colors

```css
.dark {
  --background: #000000;
  --foreground: #ffffff;
  --muted-foreground: #999999;
  --border: rgba(255, 255, 255, 0.08);
  --accent: rgba(255, 255, 255, 0.04);
}
```

## Hero Section Implementation

### Basic Structure

```tsx
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Add background effects here */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex min-h-screen items-center py-24">
          <div className="w-full">
            {/* Hero Content */}
            <h1 className="hero-title">
              When technology<br />
              meets wisdom
            </h1>
            <p className="hero-subtitle mt-6 max-w-2xl">
              Guiding businesses through technological transformations with 
              the perfect balance of trusted expertise and innovative insight.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="primary-button">
                Start Building
              </button>
              <button className="secondary-button">
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Button Styles (Linear-inspired)

```css
/* Primary Button */
.primary-button {
  background: var(--foreground);
  color: var(--background);
  padding: 0 20px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 510;
  transition: all 150ms ease;
  border: 1px solid transparent;
}

.primary-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.secondary-button {
  background: transparent;
  color: var(--foreground);
  padding: 0 20px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 510;
  transition: all 150ms ease;
  border: 1px solid var(--border);
}

.secondary-button:hover {
  background: var(--accent);
  border-color: var(--foreground);
}
```

## Key Implementation Details

### 1. Precise Spacing

Linear uses an 8px grid system. Common spacing values:
- 8px (0.5rem)
- 16px (1rem)
- 24px (1.5rem)
- 32px (2rem)
- 48px (3rem)
- 64px (4rem)

### 2. Animation Timing

```css
/* Linear's signature easing function */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Standard transition duration */
--transition-fast: 150ms;
--transition-normal: 200ms;
--transition-slow: 300ms;
```

### 3. Glass Morphism Effects

```css
/* Subtle glass effect for overlays */
.glass-effect {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
}

.dark .glass-effect {
  background: rgba(0, 0, 0, 0.8);
}
```

### 4. Shadows (Minimal)

Linear uses very subtle shadows:

```css
/* Light mode shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.04);

/* Dark mode (usually no shadows) */
.dark {
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
}
```

## Responsive Design

### Breakpoints

```css
/* Linear's breakpoint system */
@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;  /* 40px on mobile */
    line-height: 1.1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;    /* 48px on tablet */
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;    /* 64px on desktop */
  }
}
```

## Complete Tailwind Classes for Hero

```tsx
// Hero Title
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight">

// Hero Subtitle  
<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">

// Primary Button
<button className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-all duration-150">

// Secondary Button
<button className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-all duration-150">
```

## Additional Notes

1. **No Drop Shadows on Text**: Linear never uses text shadows
2. **Minimal Borders**: Borders are always 1px and use rgba colors
3. **No Gradients**: Linear rarely uses gradients, preferring solid colors
4. **Subtle Hover States**: Hover effects are minimal (opacity changes, slight background color)
5. **Performance**: Use `will-change` sparingly, only for elements that actually animate

## CSS Variables Setup

Add these to your globals.css:

```css
@layer base {
  :root {
    /* Linear-inspired variables */
    --radius: 0.5rem;
    --transition-base: 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    /* Typography */
    --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
    --font-weight-normal: 400;
    --font-weight-medium: 510;
    --font-weight-semibold: 590;
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "cv01", "ss03";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

This guide should help recreate the exact Linear-inspired styling we achieved for the hero section.