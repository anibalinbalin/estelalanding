# Infrastructure Page Mobile Spacing Fix

## Issue
On mobile view (iPhone 12), the infrastructure page had spacing issues:
1. Too much white space at the top of the page
2. No spacing after the "monitoring and support" section

## Root Cause
1. The main section containing the heading had excessive top padding (80px) on mobile
2. The third line of the heading had a fixed font size of 36px which was too large for mobile
3. The content sections container had no bottom padding on mobile

## Solution
1. Reduced top padding to `pt-12 sm:pt-0` (48px on mobile, 0 on desktop)
2. Made the third line responsive by replacing inline styles with Tailwind classes:
   - Mobile: 20px font size with 30px line height
   - Tablet (600px+): 25px font size with 32px line height  
   - Desktop (1000px+): 36px font size with 42px line height
3. Added `pb-12 sm:pb-0` to the content sections container for proper bottom spacing on mobile

## Implementation
```jsx
// Top spacing fix
<section className="pt-12 sm:pt-0"> // Reduced from pt-20

// Responsive font sizes  
<span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal">

// Bottom spacing fix
<div className="relative gap-6 border-[var(--stroke-default-p3)] flex flex-col col-span-12 border-l border-r min-[900px]:border-r-[0px] pb-12 sm:pb-0 min-[900px]:py-52">
```

## Result
- Balanced top spacing without being excessive (48px instead of 80px)
- Proper spacing after content sections on mobile
- Desktop layout remains completely unchanged

## Testing
Verified with Puppeteer on iPhone 12 viewport (390x844) that spacing is properly balanced throughout the page.