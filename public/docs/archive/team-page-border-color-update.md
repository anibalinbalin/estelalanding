# Team Page Border Color Update

## Task
Update border colors on the company/team page to use #ebebeb for light theme

## Changes Required
1. Update the main container's top border color
2. Update both top and bottom border colors for the Partners section
3. Update both top and bottom border colors for the Copyright section

## Implementation
- Replace the CSS variable `var(--stroke-secondary-p3)` with a conditional approach
- Use #ebebeb for light theme
- Maintain existing color for dark theme

## Date
2025-01-29

## Status
Completed

## Files Modified
- `/components/footer.tsx`

## Implementation Details
- Updated the main container's border-top color (lines 129-135) to use CSS custom properties to avoid hydration issues
- Updated Partners section borders to use the same CSS custom property
- Updated Copyright section borders to use the same CSS custom property
- Used `--footer-border-color` CSS custom property set to `mounted && resolvedTheme === 'light' ? '#ebebeb' : 'var(--stroke-secondary-p3)'`
- The `mounted` check prevents hydration mismatches by ensuring theme state is available before applying light theme colors
- All border styles now reference `var(--footer-border-color)` for consistency
- The changes apply globally to the footer component which appears on all pages including company/team

## Fix Applied
- Fixed hydration error by using CSS custom properties instead of direct conditional styling
- Ensured server-side rendering compatibility by checking `mounted` state before applying theme-specific colors