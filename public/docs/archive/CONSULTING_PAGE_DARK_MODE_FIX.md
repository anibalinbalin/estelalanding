# Consulting Page Dark Mode Text Color Fix

## Issue
On the /services/consulting page, certain text elements with the class `text-[var(--content-accent-secondary-p3)]` are not displaying correctly in dark mode. These elements should be changed to use the color `#ecbb5a`.

## Affected Elements
1. Email link: hola@este.la (line 41)
2. "Our Method" link (line 51)
3. "Infrastructure Services" link (line 57)
4. "View Our Work" link (line 63)

## Solution
Replace `text-[var(--content-accent-secondary-p3)]` with `text-[#ecbb5a]` for dark mode on these specific elements.

## Implementation
Using direct color values for dark mode to ensure consistent display of the golden/amber color (#ecbb5a) across all these interactive elements.

## Changes Made
1. Updated email link (line 41): Added `text-[#ecbb5a] dark:text-[#ecbb5a]`
2. Updated "Our Method" link (line 51): Added `text-[#ecbb5a] dark:text-[#ecbb5a]`
3. Updated "Infrastructure Services" link (line 57): Added `text-[#ecbb5a] dark:text-[#ecbb5a]`
4. Updated "View Our Work" link (line 63): Added `text-[#ecbb5a] dark:text-[#ecbb5a]`

All links now explicitly use the #ecbb5a color in both light and dark modes to ensure consistent styling.