# Text Color Update: Replacing Hard Black with Softer Black

## Overview
Replaced hard black (`#000000`) text colors with a softer black (`#1b1b1b`) specifically for light mode to improve readability and reduce eye strain.

## Changes Made

### File: `app/globals.css`

Updated the following CSS variables in the light mode section (`:root`):

1. **--foreground**: `#000000` → `#1b1b1b`
   - Main text color for the application

2. **--card-foreground**: `#000000` → `#1b1b1b`
   - Text color for card components

3. **--popover-foreground**: `#000000` → `#1b1b1b`
   - Text color for popover components

4. **--secondary-foreground**: `#000000` → `#1b1b1b`
   - Text color for secondary elements

5. **--accent-foreground**: `#000000` → `#1b1b1b`
   - Text color for accent elements

6. **--sidebar-foreground**: `#000000` → `#1b1b1b`
   - Text color for sidebar elements

7. **--sidebar-accent-foreground**: `#000000` → `#1b1b1b`
   - Text color for sidebar accent elements

8. **.oxide-cta-title color**: `#000000` → `#1b1b1b`
   - Specific title color for Oxide CTA components

9. **--content-raise-p3**: `#08090a` → `#1b1b1b`
   - Main heading color (used in services/security "Managed Security & Data Protection")

10. **--surface-tertiary-p3**: Added `#f9fafb` (light gray)
    - Fixed yellowish tone on services/security image caused by dark background color

## Impact
- Improved readability in light mode
- Reduced eye strain from harsh black text
- Fixed yellowish image tone on services/security page
- Maintained sufficient contrast for accessibility
- No changes to dark mode (preserves existing dark theme colors)

## Notes
- Dark mode colors remain unchanged as they already use appropriate contrast ratios
- Primary button backgrounds and other non-text elements using `#000000` were intentionally left unchanged
- The change affects only foreground text colors, not backgrounds or borders