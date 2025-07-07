# Navbar Icons Color Update

## Changes Made

Updated the toolbar switcher component to use the specific color #9b9fa3 for:

1. **Languages Icon**: When in English mode (inactive state), the icon now uses the specified color instead of the default muted foreground
2. **Moon Icon**: Applied the same #9b9fa3 color to maintain consistency

## Files Modified

- `components/ui/toolbar-switcher.tsx`: Updated both Languages and MoonIcon components to use the specified color

## Implementation Details

- Languages icon: Added conditional styling with `style` prop when language is 'en'
- Moon icon: Applied direct styling with the specified color
- Maintained existing functionality while applying the new color scheme

The change ensures consistent visual styling for the navbar toggle icons with the requested color specification.