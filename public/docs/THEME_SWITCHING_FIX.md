# Theme Switching Hero Effect Fix

## Issue
The hero effect does not switch to black when toggling the light/dark mode switch. The theme only updates after hitting Command+R (browser refresh).

## Investigation

### Components to Check
1. Hero component implementation
2. Theme provider setup
3. CSS variables and their usage
4. Any hardcoded colors or theme values

### Root Cause
The animated-hero component was using hardcoded inline styles for text colors instead of theme-aware CSS variables:
- Title: Used `#d7d8d9` (dark) and `#08090a` (light) in inline styles
- Subtitle: Always showed `#7e8385` regardless of theme

Inline styles have higher specificity than CSS classes, preventing theme variables from working properly.

### Solution
Replaced hardcoded color values with Tailwind CSS classes that use theme variables:
1. Title: Added `text-foreground` class - automatically uses CSS variable `var(--foreground)`
2. Subtitle: Added `text-muted-foreground` class - automatically uses CSS variable `var(--muted-foreground)`
3. Removed color properties from inline styles

This ensures colors update immediately when switching themes without requiring a page refresh.

### Additional Issue - Background Effect
The UnicornBackground component was not switching back to light mode properly. Fixed by:
1. Added `key={resolvedTheme}` to force component re-render on theme change
2. Added container cleanup (`innerHTML = ''`) before re-initialization
3. Added small delay (100ms) to ensure proper cleanup before re-init

### Testing
- [x] Theme switches immediately when toggle is clicked
- [x] No browser refresh required
- [x] All hero elements update correctly
- [x] Background effect switches between light/dark themes properly