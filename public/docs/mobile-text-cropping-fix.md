# Mobile Text Cropping Fix

## Issue
On mobile view, the text ending with "cohesive team can provide." in the ClosingSection was being cropped at the bottom.

## Root Cause
The ClosingSection component has a large negative margin-top on mobile (`calc(var(--spacing) * -60)` = -240px) which pulls it up significantly. The paragraph containing the text didn't have enough bottom spacing to prevent the text from being cut off by the section below.

## Solution
Added padding to ensure the text has enough space:
1. Increased mobile margin-bottom on the section from `mb-20` to `mb-32`
2. Added `pb-8` (32px padding-bottom) to the paragraph element on mobile only (`sm:pb-0` for desktop)

## Implementation
- Changed section className to include `mb-32 sm:mb-4` (increased mobile bottom margin)
- Changed paragraph className to include `pb-8 sm:pb-0` (added mobile padding-bottom)

## Result
The text "cohesive team can provide." is now fully visible with adequate spacing before the next section begins.

## Testing
Verified with Puppeteer on iPhone 12 viewport (390x844) that the full text is visible and not cropped.