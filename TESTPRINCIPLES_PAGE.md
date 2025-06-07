# Test Principles Page Implementation

## Overview
Created a new page at `/testprinciples` that showcases the "No assembly required" section from Oxide Computer's design.

## Implementation Details

### File Created
- `/app/testprinciples/page.tsx`

### Features
1. **ASCII Art Visualizations**
   - Server rack illustration showing instant deployment
   - License key visualization with OXIDE branding
   - Monospace font (GT_America_Mono) for ASCII art

2. **Responsive Design**
   - Two-column grid layout on desktop
   - Stacks vertically on mobile
   - Responsive text sizes

3. **Theme Support**
   - Adapts colors based on light/dark theme
   - Uses theme-aware color values
   - Maintains readability in both modes

4. **Typography**
   - Main heading: SuisseIntl font, 4xl to 6xl responsive
   - Subheading: SuisseIntl font, xl to 3xl responsive
   - Feature titles: SuisseIntl font, xl to 2xl
   - Body text: SuisseIntl font with proper line height

5. **Color Scheme**
   - Accent green: #48d597 (bright green)
   - Accent dark: #236A4C (dark green)
   - Text colors adapt to theme
   - Background adapts to theme

### Content Structure
- **Main Title**: "No assembly required"
- **Subtitle**: "Unboxing to provisioning in two hours"
- **Feature 1**: "Instant IT transformation" - with server rack ASCII art
- **Feature 2**: "No more license management" - with license key ASCII art

### Styling Approach
- Inline styles for precise color control
- Tailwind classes for layout and spacing
- Theme-aware color system
- Proper font families matching the design system

## Notes
- The ASCII art is preserved exactly as provided
- Colors use the exact values from the original design
- Layout is optimized for both desktop and mobile viewing
- Theme switching is fully supported