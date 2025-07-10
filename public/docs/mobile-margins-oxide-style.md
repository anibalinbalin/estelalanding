# Mobile Margins - Oxide Style Implementation

## Overview
Implementing mobile-specific margins inspired by Oxide Computer's website design patterns for better mobile responsive layout on iPhone 12 (390x844px viewport).

## Key Patterns from Oxide Analysis

### 1. Blog Link/CTA Button
- Mobile: `mb-6`
- Desktop (700px+): `min-[700px]:mb-10`

### 2. H1 Title
- Base: `mb-2` (consistent across all sizes)
- Font size: `text-4xl` → `min-[700px]:text-[4.0625rem]`
- Line height: `leading-[2.625rem]` → `min-[700px]:leading-[100%]`

### 3. Paragraph/Subtitle
- Mobile: No top margin on small screens
- Larger mobile (500px+): `min-[500px]:mt-2`
- Font size: `text-base` → `min-[700px]:text-[1.375rem]`
- Line height: `leading-6` → `min-[700px]:leading-[130%]`

### 4. General Content Wrapper
- Text alignment: `text-center` on mobile
- Max width constraints for readability

## Components to Update

### 1. Hero Component (`components/ui/animated-hero.tsx`)
Current state:
- H1: `mt-6` between title and subtitle
- CTA: `mt-8` after subtitle
- No responsive margin adjustments

### 2. Other Hero-style Sections
- about-section.tsx
- team-section.tsx
- work-section.tsx
- contact-section.tsx
- developer-velocity-section.tsx
- cta-section.tsx
- storage sections

## Implementation Plan

1. Update Hero component with Oxide-style responsive margins ✓
2. Apply similar patterns to other hero-style sections ✓
3. Ensure consistent spacing hierarchy across all sections ✓
4. Make paragraph text match h1 color on mobile ✓
5. Reduce paragraph width to 50% on mobile ✓
6. Test on iPhone 12 viewport (390x844px)

## Margin Guidelines

### Mobile First Approach
- Base margins: Smaller for mobile (mb-2, mb-4, mb-6)
- Progressive enhancement: Increase at breakpoints
- Common pattern: `mb-6 min-[700px]:mb-10`

### Spacing Scale
- Small: mb-2 (8px)
- Medium: mb-4 (16px)
- Large: mb-6 (24px)
- XL: mb-8 (32px)
- XXL: mb-10 (40px) - typically desktop only

### Breakpoints
- 500px: Larger mobile devices
- 600px: Small tablets
- 700px: Tablets/Desktop transition
- 1000px: Full desktop

## Mobile-Specific Hero Improvements

### Color Consistency
- **Problem**: Subtitle text was gray on all screen sizes, making it hard to read on mobile with background effects
- **Solution**: Use `text-foreground sm:text-[#999999]` to match h1 color on mobile while keeping gray on desktop
- **Result**: Better contrast and readability on mobile devices

### Width Optimization
- **Problem**: Full-width paragraph text was difficult to read with animated background
- **Solution**: Apply `w-1/2 sm:w-full` to reduce width to 50% on mobile only
- **Result**: Improved focus on content by reducing visual interference from background

### Implementation Details
Updated paragraph in `animated-hero.tsx`:
```jsx
className={`mt-2 min-[500px]:mt-4 text-[16px] leading-[24px] sm:text-[24px] sm:leading-[34px] tracking-normal w-1/2 sm:w-full max-w-2xl text-foreground sm:text-[#999999] ${isAnimated ? 'hero-subtitle' : 'opacity-0'}`}
```