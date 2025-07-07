# Services Pages Mobile Styling Guide

## Overview
This document captures all mobile-specific modifications made to the `/services/infrastructure` page that should be applied consistently across all service pages for a cohesive mobile experience.

## Key Modifications

### 1. Page Header Spacing
**Issue**: Insufficient top spacing on mobile causing cramped header appearance.

**Solution**:
```jsx
// Add to main content section
<section className="pt-12 sm:pt-0">
```
- Adds 48px top padding on mobile only
- Desktop remains unchanged with `sm:pt-0`

### 2. Header Bottom Margin
**Issue**: Insufficient spacing between page subtitle and first content section.

**Solution**:
```jsx
// In the main h2 heading
className="... mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 ..."
```
- Changed from `mb-6` to `mb-12` for mobile (24px → 48px)
- Provides better visual separation between header and content

### 3. Responsive Subtitle Text
**Issue**: Fixed font size (36px) too large for mobile in the third line of heading.

**Solution**:
```jsx
// Replace inline styles with responsive classes
<span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal">
```
- Mobile: 20px font, 30px line-height
- Tablet: 25px font, 32px line-height
- Desktop: 36px font, 42px line-height

### 4. Section Spacing
**Issue**: Insufficient spacing between major content sections on mobile.

**Solution**:
```jsx
// Add to section wrapper divs
<div className="mb-16 sm:mb-0 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]">
```
- Adds 64px bottom margin between sections on mobile
- Desktop spacing remains unchanged

### 5. Table/Grid Overflow Fix
**Issue**: "ONLINE" status badge and uptime text overflowing in narrow columns.

**Solution**:
```jsx
// Change from horizontal to vertical stacking on mobile
<div className="px-3 py-3 flex flex-col sm:flex-row col-span-3 gap-1 sm:gap-2 text-[#f5b944]">
  <span className="...">ONLINE</span>
  <span>90d 2h</span>
</div>
```
- Stacks elements vertically on mobile
- Maintains horizontal layout on larger screens

### 6. Compact Badge Sizing
**Issue**: Storage array badge too wide on mobile (col-span-11).

**Solution**:
```jsx
// Reduce column span for mobile
className="... col-span-6 min-[600px]:col-span-6 ..."
```
- Changed from `col-span-11` to `col-span-6` for mobile
- Creates more compact, badge-like appearance

### 7. Container Bottom Padding
**Note**: The `pb-28` was removed from the main container div as requested. Consider if bottom spacing is needed for visual balance.

## Security Page Implementation

Applied the following changes to `/services/security`:
1. ✅ Added `pt-12 sm:pt-0` to main content section
2. ✅ Made subtitle responsive with classes: `text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px]`
3. ✅ Changed header `mb-6` to `mb-12` for mobile
4. ✅ Fixed three-column grid by changing `col-span-4` to `col-span-12 min-[600px]:col-span-4`
5. ✅ Added `mb-16 sm:mb-0` to first content section
6. ✅ Enhanced "Complete Business Protection" heading with `mb-6 min-[600px]:mb-4`

## Development Page Implementation

Applied the following changes to `/services/development`:
1. ✅ Added `pt-12 sm:pt-0` to main content section
2. ✅ Made subtitle responsive with classes: `text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px]`
3. ✅ Changed header `mb-6` to `mb-12` for mobile
4. ✅ Added `mb-16 sm:mb-0` to main content section
5. ✅ Enhanced "Custom Development" heading with `mb-6 min-[600px]:mb-4`

## Consulting Page Implementation

Applied the following changes to `/services/consulting`:
1. ✅ Added `pt-12 sm:pt-0` to main content section
2. ✅ Made subtitle responsive with classes: `text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px]`
3. ✅ Changed header `mb-6` to `mb-12` for mobile
4. ✅ Added `mb-16 sm:mb-0` to main content section
5. ✅ Enhanced "Translating Complexity" heading margin to `mb-6`

## Specifications Page Implementation

Applied the following changes to `/services/specifications`:
1. ✅ Added `pt-12 sm:pt-0` to main content section
2. ✅ Made subtitle responsive with classes: `text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px]`
3. ✅ Changed header `mb-6` to `mb-12` for mobile
4. ✅ Added `mb-16 sm:mb-0` to main content section
5. ✅ Enhanced "Compute Infrastructure" heading with `mb-6`

## CSS Variables Used
- `--spacing`: Base spacing unit (typically 4px)
- `--content-raise-p3`: Primary text color
- `--surface-secondary-p3`: Border/divider color
- `--border-radius-lg`: Large border radius
- `--elevation-2`: Shadow effect

## Testing Guidelines
1. Always test on mobile viewport first (390px width)
2. Verify desktop layout remains unchanged
3. Check for text overflow in narrow columns
4. Ensure adequate spacing between all sections
5. Verify touch targets are appropriately sized

## Notes
- All mobile changes use Tailwind's responsive prefixes (`sm:`, `min-[600px]:`, etc.)
- Desktop breakpoint typically starts at 640px (`sm:`)
- Some sections use 900px breakpoint for larger layout changes
- Always preserve existing desktop styles when adding mobile modifications