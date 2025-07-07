# Light Theme Image Visibility Fix - Complete Solution

## Problem
The `oxide-gimlet-front.png` image in `/app/services/infrastructure/page.tsx` was not visible when switching to light theme.

## Root Causes
After investigation, multiple issues were identified:

1. **Missing Background CSS Variable**: `--surface-default-p3` was incorrectly defaulting to black in light mode
2. **Missing Aspect Ratio Variables**: `--tw-aspect-h` and `--tw-aspect-w` were only defined in dark mode, causing container layout issues in light mode
3. **Malformed Filter CSS**: The image had invalid `filter-[shadow(...)]` syntax that prevented proper rendering

## Complete Solution

### 1. Fixed Background Color Variable
Updated `/app/globals.css` to add proper light mode value for `--surface-default-p3`:

```css
/* Added to :root section */
--surface-default-p3: #ffffff;
```

### 2. Added Missing Aspect Ratio Variables
Added aspect ratio variables to light mode in `/app/globals.css`:

```css
/* Added to :root section */
--tw-aspect-h: 7;
--tw-aspect-w: 12;
```

### 3. Fixed Malformed Image Filter CSS
Corrected the image element in `/app/services/infrastructure/page.tsx`:

```css
/* Before - Invalid syntax */
filter-[shadow(0px 50px 80px rgba(0,0,0,.4)] 25.313px 34.875px rgba(0,0,0,.27)] 10px 13px rgba(0,0,0,.2)] 2.188px 4.625px rgba(0,0,0,.13)]

/* After - Proper shadow syntax */
shadow-[0px_50px_80px_rgba(0,0,0,0.4),_0px_25px_35px_rgba(0,0,0,0.27),_0px_10px_13px_rgba(0,0,0,0.2),_0px_2px_5px_rgba(0,0,0,0.13)]
```

## Files Modified
- `/app/globals.css` - Added light mode CSS variables
- `/app/services/infrastructure/page.tsx` - Fixed image filter CSS syntax

## Impact
- ✅ Image displays correctly in light theme with proper white background
- ✅ Container has proper aspect ratio in all themes  
- ✅ Dark theme continues to work correctly
- ✅ Clean CSS without syntax errors
- ✅ Maintains design consistency across themes

## Technical Details
**Background**: Container uses `bg-[var(--surface-default-p3)]` which now resolves to:
- **Light mode**: `#ffffff` (white background)
- **Dark mode**: `color(display-p3 .0314 .0588 .0667)` (dark background)

**Layout**: Container uses `pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]` which now calculates properly in both themes

**Shadows**: Image uses proper Tailwind shadow syntax that renders correctly across browsers

## Testing
Navigate to `/services/infrastructure` and toggle between light and dark themes to verify the image is visible and properly styled in both modes.