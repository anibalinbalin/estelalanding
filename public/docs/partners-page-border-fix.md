# Partners Page Border Fix

## Issue
The horizontal lines on the company/partners page were not displaying correctly due to an undefined CSS variable `--footer-border-color` being used in the border class.

## Root Cause
In `app/company/partners/page.tsx` line 53, the partners list items were using:
```tsx
className="border-b border-[var(--footer-border-color)] pb-4"
```

However, the CSS variable `--footer-border-color` was not defined in `app/globals.css`, causing the borders to not render properly.

## Solution
Replaced the undefined variable with the proper Oxide design system border variable:

**Before:**
```tsx
className="border-b border-[var(--footer-border-color)] pb-4"
```

**After:**
```tsx
className="border-b border-[var(--stroke-default-p3)] pb-4"
```

## Technical Details
- **Variable Used**: `--stroke-default-p3`
- **Light Mode Value**: `#e5e5e5`
- **Dark Mode Value**: `#2d3335`
- **Context**: This variable is part of the Oxide Computer design system and provides consistent border styling across light and dark themes

## Files Modified
- `app/company/partners/page.tsx` - Fixed border class on partner list items

## Result
- Horizontal lines between partner entries now display correctly
- Consistent styling with the rest of the Oxide design system
- Proper theme switching support for borders

## Additional Changes

### Empty Section Removal
Removed an empty section with the class `bg-[var(--base-neutral-50)] border border-[var(--base-neutral-200)] rounded-xl p-6 mb-8` from the PartnershipPhilosophySection component that was creating unnecessary empty space.

**Location**: `app/company/partners/components/PartnershipPhilosophySection.tsx` lines 68-70
**Action**: Completely removed the empty div and its associated comment

## Date
2025-06-30