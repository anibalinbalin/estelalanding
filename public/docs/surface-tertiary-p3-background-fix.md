# Surface Tertiary P3 Background Fix

## Issue
Image containers on the security page (and other pages) were displaying with light backgrounds in dark mode instead of transparent backgrounds like in the backup version.

## Root Cause
1. **Undefined CSS Variable**: `--surface-tertiary-p3` was being used in components but never defined in the CSS, causing fallback behavior
2. **Incorrect Color Values**: `--base-neutral-200-p3` was set to a light gray value instead of the dark value from backup

## Before vs After
**Before (Current)**:
- `--base-neutral-200-p3: color(display-p3 .898 .898 .898)` (light gray)
- `--surface-tertiary-p3` undefined (fallback to browser default)

**After (Fixed)**:
- `--base-neutral-200-p3: color(display-p3 .1098 .1333 .1451)` (dark - matches backup)
- `--surface-tertiary-p3: transparent` (explicit definition)

## Solution Applied
1. **Restored backup color values** in `app/globals.css`:
   - Changed `--base-neutral-200-p3` from light to dark values

2. **Defined missing CSS variable**:
   - Added `--surface-tertiary-p3: transparent` to the CSS variables section

## Files Modified
- `app/globals.css`: Updated CSS variable definitions

## Impact
All components using `bg-[var(--surface-tertiary-p3)]` now have transparent backgrounds:
- **Security page**: Image containers (4 instances) 
- **Work page**: TeamSection hiring banner
- **Contact section**: Form inputs and navigation buttons

## Testing Notes
- Image containers now blend seamlessly with dark backgrounds (matches backup)
- Form inputs may need additional styling adjustments if transparent backgrounds aren't desired
- All affected pages should be tested in both light and dark modes

## Result
✅ Image containers now display with transparent backgrounds in dark mode, matching the backup version's clean appearance.