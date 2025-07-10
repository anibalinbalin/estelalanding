# Dark Mode Border Fix

## Issue
Multiple pages had borders appearing white in dark mode instead of the proper theme-appropriate colors.

## Root Cause
Pages were using `var(--stroke-secondary-p3)` for borders, while the backup version correctly used `var(--border)` which properly resolves theme-appropriate colors. The footer component was using a hardcoded light mode border color. The security page also had incorrect contact button styling.

## Solution
1. Replaced all instances of:
   - `border-[var(--stroke-secondary-p3)]` → `border-[var(--border)]`
   - `border-b-[var(--stroke-secondary-p3)]` → `border-b-[var(--border)]`

2. Updated footer component to use theme-responsive border colors:
   - Added `borderColor` variable based on theme
   - Light mode: `#e5e5e5`
   - Dark mode: `#1c2225`

3. Fixed security page contact button styling:
   - Changed `after:text-[var(--content-secondary-p3)]` to `after:text-[var(--base-neutral-300)]`

## Files Modified
- `app/services/infrastructure/page.tsx`: Updated all border CSS variables
- `app/company/about/components/ValuesGrid.tsx`: Fixed border variable in ValueCard component
- `components/footer.tsx`: Added theme-responsive border color logic
- `app/services/security/page.tsx`: Updated border variables and contact button styling

## Result
Borders now use the correct CSS variable that properly switches between light and dark theme colors, matching the backup implementation across all affected pages.