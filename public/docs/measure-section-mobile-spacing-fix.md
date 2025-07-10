# Measure Section Mobile Spacing Fix

## Issue
On mobile view, "The Measure of Our Method: Lasting Success, Enduring Partnerships" heading was positioned too high and getting affected by the faded gradient overlay from the section above.

## Root Cause
The heading had `mt-24` (96px) margin-top on mobile, which wasn't sufficient to push it below the gradient fade effect from the SmallOverScaleSection component that uses absolute positioned elements with gradients.

## Solution
Increased the mobile margin-top from `mt-24` to `mt-40` (160px) to ensure the heading appears below the faded area.

## Implementation
Changed the h2 className from `mt-24 min-[600px]:mt-40` to `mt-40 min-[600px]:mt-40` to apply the same larger margin on all screen sizes.

## Result
The heading is now properly positioned below the gradient fade effect and fully visible on mobile devices.

## Testing
Verified with Puppeteer on iPhone 12 viewport (390x844) that the heading is clearly visible and not affected by the gradient overlay.