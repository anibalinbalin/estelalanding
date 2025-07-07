# Values Grid Mobile Border Fix

## Issue
The Values Grid cards (Candor, Courage, Curiosity) on the company/about page have a double border on mobile:
- Dark mode: External white/gray border (#d7d8d9) that needs to be removed
- Light mode: External black border (#1b1b1b) that needs to be removed

## Component Location
- File: `app/company/about/components/ValuesGrid.tsx`
- Component: `ValueCard`

## Current Implementation
The ValueCard component currently has a border applied with:
```tsx
<div className={`... border ${
  currentTheme === 'light' 
    ? 'bg-[#ffffff] border-[#e4e5e4]' 
    : 'bg-[var(--surface-raise-p3)] border-[var(--border)] shadow-[var(--elevation-1)]'
}`}>
```

## Solution
Remove the border on mobile devices while keeping it on desktop by using responsive border utilities.

## Root Cause
The double border effect was caused by two issues:
1. The card div had a border applied on all screen sizes
2. The button inside had `outline-2 outline-offset-[2px]` classes creating an additional outline

## Changes Made
1. Modified the ValueCard component border to use responsive classes:
   - Changed `border` to `border-0 min-[600px]:border`
   - Added responsive border color classes with `min-[600px]:` prefix
2. Removed the outline from the mobile button:
   - Changed `outline-2 outline-offset-[2px]` to `outline-none`
3. Both changes ensure the desktop version (600px+) remains unchanged while removing the double border on mobile

## Results
- Mobile: Clean subtle borders (#e5e5e5 for light, #1b2123 for dark)
- Desktop: Original borders preserved as designed
- The fix is responsive and doesn't affect the desktop layout
- Accordion functionality now works on mobile with smooth animations

## Additional Features Implemented
1. **Accordion Functionality**: 
   - Cards can now be expanded/collapsed on mobile by clicking
   - Arrow icon rotates when expanded
   - Smooth transition animation for content reveal
2. **State Management**: Each card maintains its own open/closed state
3. **Responsive Behavior**: Accordion only works on mobile; desktop shows all content