# Development Changes Log

## 2025-01-30

### Added Cloud Evolution Section
- Created new component `CloudEvolutionSection` in `/components/cloud-evolution-section.tsx`
- Added to main page after the existing `EvolutionSection`
- Features:
  - ASCII art diagrams comparing conventional rack vs Oxide rack
  - Responsive layout with mobile/tablet/desktop breakpoints (600px, 1000px)
  - Typography using custom fonts (GT America Mono for code/figures, SuisseIntl for body text)
  - Color scheme using CSS custom properties for theming
  - Separate components for ASCII art (ConventionalRackASCII, OxideRackASCII)
  - Icons for like/dislike using SVG sprites
  - Image of Oxide Cloud Computer
- Content includes:
  - Evolution of cloud computing narrative
  - Comparison between traditional infrastructure and Oxide's solution
  - Benefits and drawbacks highlighted with visual indicators

### Updated Main Heading Typography
- Updated "Cloud computing revolutionized the global economy" heading with specific styling:
  - Font: SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif
  - Weight: 400 (normal)
  - Size: 50px
  - Line Height: 55px
  - Color: color(display-p3 0.8431 0.8471 0.851) for dark mode

### Updated Navbar Logo
- Changed logo from separate light/dark versions to single `logo_original.png`
- Increased logo size to 2x (360x104px, container height 88px)
- Updated navbar height from 60px to 120px to accommodate larger logo
- Simplified logo implementation (no dark/light mode switching needed)