# Component Guide

This document outlines the UI patterns, conventions, and reusable components used throughout the Estela Technology Solutions website.

## Design System Overview

### Framework & Styling
- **Next.js 15.3.2** with App Router
- **Tailwind CSS v4 (alpha)** with CSS variables
- **shadcn/ui** components with Radix UI primitives
- **Framer Motion** for animations
- **next-themes** for theme management

### Typography
- **Primary Font**: Geist (Vercel's font family)
- **Navigation Font**: GT America Mono (monospace)
- **Responsive Text**: Fluid scaling using Tailwind's responsive prefixes

## Component Architecture

### Section Structure Pattern

All major sections follow this consistent structure:

```jsx
<section className="w-full py-20 lg:py-40 bg-background">
  <div className="container mx-auto px-5 sm:px-10">
    {/* Section content */}
  </div>
</section>
```

**Key Properties:**
- `py-20 lg:py-40`: Consistent vertical spacing (mobile: 80px, desktop: 160px)
- `container mx-auto`: Centered content with responsive max-width
- `px-5 sm:px-10`: Horizontal padding (mobile: 20px, desktop: 40px)

### Theme Detection Pattern

For components that need theme-aware rendering:

```jsx
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function ThemeAwareComponent() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

**Why This Pattern:**
- Prevents hydration mismatches
- Ensures consistent theme rendering
- Avoids layout shifts on theme changes

## UI Components

### Buttons

#### Primary Button (Hero Style)
```jsx
<button className="inline-flex items-center justify-center h-[40px] px-[20px] text-[14px] font-[510] border border-border bg-transparent text-foreground rounded-[8px] hover:bg-accent transition-all duration-[150ms]">
  Button Text
  <ArrowRight className="ml-2 h-4 w-4" />
</button>
```

#### Secondary Button
```jsx
<button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
  Secondary Action
</button>
```

### Navigation Components

#### Main Navigation Item
```jsx
<NavigationMenuTrigger className="oxide-nav-trigger">
  SERVICES
</NavigationMenuTrigger>
```

**CSS Classes:**
```css
.oxide-nav-trigger {
  font-family: 'GT_America_Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}
```

#### Submenu Item
```jsx
<ListItem title="Infrastructure" className="oxide-submenu-title">
  <p className="text-sm text-muted-foreground">
    The foundation of everything digital
  </p>
</ListItem>
```

### Content Sections

#### Section Header Pattern
```jsx
<div className="text-center mb-16">
  <h2 
    className="text-4xl lg:text-5xl font-bold mb-6"
    style={{ 
      color: mounted ? (resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a') : 'inherit' 
    }}
  >
    Section Title
  </h2>
  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

#### Feature Grid (3-Column)
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
  {features.map((feature, index) => (
    <div key={index} className="text-center">
      <div className="mb-6">
        <Image
          src={feature.image}
          alt={feature.title}
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  ))}
</div>
```

## Bilingual Support

### Content Structure
```jsx
const content = {
  en: {
    title: "English Title",
    description: "English description",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  es: {
    title: "Título en Español", 
    description: "Descripción en español",
    features: ["Característica 1", "Característica 2", "Característica 3"]
  }
}

// Usage
<h2>{content[language].title}</h2>
```

### Language Context
```jsx
// Context setup (in layout or provider)
const [language, setLanguage] = useState('en')

// Component usage
const currentContent = content[language] || content.en
```

## Color System

### Theme Colors
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  --muted: 240 4.8% 95.9%;
  --accent: 240 4.8% 95.9%;
  --border: 240 5.9% 90%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --secondary: 240 3.7% 15.9%;
  --muted: 240 3.7% 15.9%;
  --accent: 240 3.7% 15.9%;
  --border: 240 3.7% 15.9%;
}
```

### Consistent Section Headers
- **Dark Mode**: `#d7d8d9`
- **Light Mode**: `#08090a`
- **Applied to**: All major section titles for visual consistency

## Animation Patterns

### Framer Motion Variants
```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### Hover Effects
```css
.hover-lift {
  transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

## Responsive Design

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`  
- **Desktop**: `> 1024px`

### Common Responsive Patterns
```jsx
// Grid responsiveness
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Text sizing
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Spacing
<div className="py-12 md:py-16 lg:py-20">

// Padding
<div className="px-4 md:px-6 lg:px-8">
```

## Best Practices

### Component Development
1. **Single Responsibility**: Each component has one clear purpose
2. **Composability**: Components can be combined to create complex layouts
3. **Consistency**: Follow established patterns for styling and structure
4. **Accessibility**: Include proper ARIA labels and semantic HTML

### Styling Guidelines
1. **Utility-First**: Use Tailwind utilities before custom CSS
2. **Consistent Spacing**: Use the established spacing scale
3. **Theme-Aware**: Always consider both light and dark mode appearances
4. **Mobile-First**: Design for mobile, then enhance for larger screens

### Performance Considerations
1. **Image Optimization**: Use Next.js Image component with proper sizing
2. **Lazy Loading**: Implement for below-the-fold content
3. **Bundle Splitting**: Keep components modular for better code splitting
4. **CSS Variables**: Use CSS custom properties for theme-dependent styling

## Common Pitfalls to Avoid

1. **Hydration Mismatches**: Always use the theme detection pattern for theme-dependent content
2. **Inconsistent Spacing**: Stick to the established section padding/margin patterns
3. **Color Inconsistency**: Use the standardized color scheme for section headers
4. **Missing Responsive Design**: Test all breakpoints during development
5. **Accessibility Gaps**: Ensure proper contrast ratios and keyboard navigation

---

*This guide serves as the single source of truth for UI patterns and component conventions. Update this document when introducing new patterns or modifying existing ones.*