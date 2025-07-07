# Principles Section ASCII Art Aspect Ratio Fix

## Issue
The ASCII art containers in the principles section were displaying as narrow/tall rectangles instead of maintaining their proper wide landscape aspect ratio after Tailwind values cleanup.

## Root Cause
The containers were using global aspect ratio variables (`--tw-aspect-h: 10` and `--tw-aspect-w: 15`) which created a 66.67% aspect ratio, making containers too tall/narrow.

## Solution
Created specific CSS variables for ASCII art containers:
- Added `--ascii-aspect-h: 7` and `--ascii-aspect-w: 15` to both light and dark themes
- Updated ASCII art components to use these specific variables
- This creates a 46.67% aspect ratio for wider, more landscape-oriented containers

## Technical Implementation
1. **CSS Variables Added** (in `app/globals.css`):
   ```css
   --ascii-aspect-h: 7;
   --ascii-aspect-w: 15;
   ```

2. **Component Updates**:
   - Changed from: `pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]`
   - Changed to: `pb-[calc(var(--ascii-aspect-h)_/_var(--ascii-aspect-w)_*_100%)]`

## Files Modified
- `app/globals.css` - Added ASCII-specific aspect ratio variables
- `components/ui/animated-server-art.tsx` - Updated to use ASCII variables
- `components/ui/animated-uuid-estela-art.tsx` - Updated to use ASCII variables

## Result
- ASCII art containers now maintain proper wide landscape aspect ratio (7:15 = 46.67%)
- Matches backup reference implementation exactly
- Other image containers throughout the site remain unaffected (still use 10:15 ratio)
- Build completes successfully with no conflicts

## Verification
- Build completed successfully with no errors
- ASCII containers display as wide landscape rectangles matching backup
- Image containers in other sections maintain their intended aspect ratios
- Works correctly in both light and dark themes