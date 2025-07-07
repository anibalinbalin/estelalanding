# Infra3 ASCII Art Distance and Background Fix

## Overview
Fixed the spacing and background issues for ASCII art in the `/services/infra3` page as requested.

## Changes Made

### 1. Restored Original Distance Between ASCII Art and Text
- **Problem**: The distance from ASCII art to text block was increased 
- **Fix**: Changed `min-[1000px]:pl-16` to `min-[1000px]:pr-8` for ASCII art containers
- **Fix**: Changed `min-[1000px]:ml-[-1.5rem]` to `min-[1000px]:ml-8` for content sections
- **Result**: Restored the proper spacing between ASCII art and content

### 2. Added Background to ASCII Art
- **Problem**: ASCII art was missing the `#3b301c` background with 12px padding
- **Fix**: Added `bg-[#3b301c] p-3` to both desktop and mobile ASCII art containers
- **Applied to**:
  - Fig 1. Conventional Rack (first ASCII art)
  - Fig 2. Oxide Rack (second ASCII art)
  - Both desktop and mobile versions

### 3. Ensured Consistent Dimensions
- **Problem**: ASCII art needed to match dimensions of other images
- **Fix**: Applied consistent `mt-[3ch]` spacing and `p-3` padding
- **Result**: ASCII art now has uniform dimensions and spacing

## Files Modified

### `/app/services/infra3/page.tsx`
```tsx
// Before
<div className="relative grow max-[1000px]:my-12 hidden min-[1000px]:block min-[1000px]:mt-11 min-[1000px]:mb-32 min-[1000px]:col-span-6 min-[1000px]:pl-16">
  <div className="min-[1000px]:sticky min-[1000px]:top-24">
    <div className="mt-[3ch] p-3">

// After  
<div className="relative grow max-[1000px]:my-12 hidden min-[1000px]:block min-[1000px]:mt-11 min-[1000px]:mb-32 min-[1000px]:col-span-6 min-[1000px]:pr-8">
  <div className="min-[1000px]:sticky min-[1000px]:top-24">
    <div className="mt-[3ch] bg-[#3b301c] p-3">
```

### Content Section Spacing
```tsx
// Before
<div className="relative col-span-12 border-l border-r border-gray-700 min-[1000px]:ml-[-1.5rem]">

// After
<div className="relative col-span-12 border-l border-r border-gray-700 min-[1000px]:ml-8">
```

### Mobile ASCII Art
```tsx
// Before
<div className="mt-3 p-3">

// After
<div className="mt-3 bg-[#3b301c] p-3">
```

## Additional Fixes

### Lint Error Resolution
Fixed React `no-unescaped-entities` errors by properly escaping apostrophes:
- `couldn't` → `couldn&apos;t`
- `That's` → `That&apos;s` 
- `that's` → `that&apos;s`
- `Let's` → `Let&apos;s`

## Technical Details

### Background Color
- **Color**: `#3b301c` (warm brown)
- **Padding**: `p-3` (12px in Tailwind)
- **Applied to**: Both desktop sticky ASCII art and mobile ASCII art sections

### Spacing Adjustments
- **ASCII Art**: `pr-8` instead of `pl-16` for better right spacing
- **Content**: `ml-8` instead of `ml-[-1.5rem]` for proper left margin
- **Maintains**: Responsive behavior and sticky positioning on desktop

## Responsive Behavior
- **Desktop (≥1000px)**: Full ASCII art with background and sticky positioning
- **Mobile (<1000px)**: Simplified ASCII art with same background treatment
- **Spacing**: Consistent across all breakpoints

## Result
The ASCII art now has:
1. ✅ Proper distance from text content (restored to original spacing)
2. ✅ `#3b301c` background with 12px padding as requested  
3. ✅ Consistent dimensions matching other image elements
4. ✅ No lint errors
5. ✅ Maintained responsive design patterns