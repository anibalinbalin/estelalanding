# Fibonacci ASCII Colors Restoration

## Issue
The Fibonacci ASCII spiral component was showing wrong colors in light mode after CSS variable standardization. The section was using CSS variables that had inappropriate light mode values.

## Problem Details
- Light mode `--ascii-background-alt-p3` was set to `#e5e5e6` (very light gray)
- This caused poor contrast and visibility issues
- Dark mode worked correctly with `--ascii-background-alt-p3: #3d3019`

## Solution
Restored hardcoded colors from backup version:
- `backgroundColor: '#39301f'` (consistent dark background)
- `color: 'color(display-p3 0.92 0.73 0.35)'` (proper golden text color)

## Files Modified
- `components/ui/fibonacci-ascii-spiral.tsx`

## Changes Made
1. Replaced `backgroundColor: 'var(--ascii-background-alt-p3)'` with `backgroundColor: '#39301f'` 
2. Replaced `color: 'var(--ascii-foreground-p3)'` with `color: 'color(display-p3 0.92 0.73 0.35)'`

## Reasoning
This component requires specific colors that work consistently across both light and dark themes. The CSS variable approach was causing visibility issues in light mode, so hardcoded values provide the intended visual appearance.