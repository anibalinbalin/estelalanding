# Z-Index Layering Technique for Mobile Spacing

## Overview
When dealing with delicate components (like Unicorn Studio canvas, complex animations) that cannot be directly modified without breaking functionality, use z-index layering to create visual spacing adjustments.

## The "Carpet" Approach

### Problem Scenario
- Large white space between sections on mobile
- Direct modification of delicate components risks breaking functionality
- Need responsive solution that maintains desktop layout

### Solution: Layer sections with z-index
1. **Top Section (Carpet)**: Higher z-index, covers lower section
2. **Bottom Section (Hidden)**: Default z-index, pulled up with negative margin
3. **Overlap Control**: Use negative margins to control visual spacing

## Implementation Pattern

### Step 1: Set Z-Index Hierarchy
```tsx
// Top section (covers lower section)
<section className="... relative z-10">

// Bottom section (gets covered)
<section className="... relative">
```

### Step 2: Calculate Negative Margin
```
Formula: Visual Spacing = Top Section Margin + Bottom Section Negative Margin

Example:
- Desired visual spacing: 64px
- Top section margin: 112px (mt-28)
- Required negative margin: 64px - 112px = -48px (-mt-12)
```

### Step 3: Apply Responsive Classes
```tsx
// Bottom section with calculated negative margin
<section className="w-full -mt-12 sm:mt-[original-desktop-margin] mb-4 relative">
```

## Real Implementation Example

### Components Used
- **CTA Section** (Small Over Scale): Top layer with `z-10`
- **Unicorn Odysseus Section**: Bottom layer with negative margin

### Code Changes
```tsx
// CTA Section
<section className="w-full mt-28 sm:mt-[11.25rem] mb-4 relative z-10">

// Odysseus Section  
<section className="w-full -mt-12 sm:mt-[11.25rem] mb-4 relative">
```

### Results
- **Mobile**: 64px visual spacing achieved through layering
- **Desktop**: Original 180px spacing maintained
- **Functionality**: Unicorn Studio canvas completely preserved

## Benefits
1. **Non-Destructive**: Preserves complex component functionality
2. **Responsive**: Mobile-only solution, desktop unchanged  
3. **Maintainable**: Uses standard CSS layering techniques
4. **Accessible**: Maintains all interactions and click areas

## When to Use
- Complex third-party components (Unicorn Studio, etc.)
- Animation libraries sensitive to container changes
- Any component where direct modification risks breaking functionality
- Need for mobile-specific spacing without desktop impact

## Notes
- Always test button/link clickability with overlays
- Verify theme compatibility (dark/light mode)
- Consider scroll behavior with negative margins
- Document calculations for future maintenance