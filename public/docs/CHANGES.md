# Changes Log

## 2025-05-30

### Navbar Logo Position Update
- Moving logo from center to left position in navbar
- File: `components/navbar.tsx`
- Changes:
  1. Update logo positioning classes to align left instead of center
  2. Restructured navbar layout to use `justify-between` for proper spacing
  3. Grouped mobile menu button and logo in a left section container
  4. Removed `flex-1` from logo and right CTA section to fix doubled height issue
  5. Made logo 2x larger (width: 180px, height: 52px, container height: 44px)
  6. Removed "Careers" menu item from both desktop and mobile navigation
  7. Removed "Try it now" button from both desktop and mobile CTAs

### Page Layout Update
- Removed excessive top padding
- File: `app/page.tsx`
- Change: Removed `pt-[60px]` class from main element to eliminate extra spacing below navbar

### Note
- The mono font style for navigation items (Product, Resources, Company, etc.) is preserved
- These use the `oxide-nav-trigger` and `oxide-nav-link` classes which apply:
  - Font: GT America Mono, monospace
  - Font size: 0.75rem
  - Text transform: uppercase
  - Letter spacing: 0.08em

### Navigation Fixes
- Fixed deprecated `legacyBehavior` warning in Blog link
- File: `components/navbar.tsx`
- Change: Updated Link component to use `asChild` prop pattern

### Submenu Mono Font Fix
- Added mono font styling to submenu item titles
- Files: `components/navbar.tsx`, `app/globals.css`
- Changes:
  1. Created `.oxide-submenu-title` CSS class with GT_America_Mono font
  2. Applied the class to ListItem component titles
  3. Submenu titles now display in uppercase mono font matching the main nav items

## Evolution Section Content Update
- Updated evolution-section.tsx content from cloud computing narrative to technology/system integration narrative
- File: `components/evolution-section.tsx`
- Changes:
  1. Replaced Oxide references with Estela branding
  2. Updated focus from cloud infrastructure to business technology integration
  3. Modified content theme to "Technology shouldn't hold your business back"
  4. Changed negative points to reflect system integration challenges (15+ vendors, finger-pointing, slow time to value, integration nightmares)
  5. Updated main narrative to focus on unified architecture and system integration solutions

## Cleanup - Test Section Removal
- Removed test file: `components/cloud-evolution-section.tsx`
- This was a test component with the class "relative w-full bg-[var(--surface-default)] text-[var(--content-default-p3)]"
- File contained cloud computing content and ASCII art components that were not needed
- Removed import and usage of CloudEvolutionSection from `app/page.tsx` to fix module not found error

## Navbar Logo Size Update
- Increased logo size by 10% in navbar
- File: `components/navbar.tsx`
- Changed logo dimensions from 288x83 to 317x91 pixels

## Evolution Section - Part 2 Addition
- Added second section "The Evolution of Integration - Part 2" to evolution-section.tsx
- File: `components/evolution-section.tsx`
- Changes:
  1. Added new ASCII art "Fig 2. The Estela Approach" showing unified system architecture
  2. Added new content about "That's why we built a different way"
  3. Added positive points with checkmarks (✓) instead of X marks
  4. Added final value proposition text
  5. Added "Transform Your Infrastructure" CTA button
  6. Included Spanish translations for all new content
  7. Added imports for Check and ArrowRight icons from lucide-react

## Developer Velocity Section Addition
- Added new section "Accelerate developer velocity with a self-service environment"
- Files: `components/developer-velocity-section.tsx`, `app/page.tsx`, `next.config.ts`
- Changes:
  1. Created new component with three feature cards showing developer tools
  2. Added bilingual support (English and Spanish)
  3. Features include: provision/scale, API/CLI access, and familiar tools integration
  4. Used external images from oxide.computer (temporary)
  5. Updated Next.js config to allow external images from oxide.computer
  6. Added responsive design with different layouts for mobile and desktop
  7. Integrated component into main page after Evolution Section
  8. Updated section to match consistent margin pattern (py-20 lg:py-40) used by hero and logos sections

## Developer Velocity Section Content Update
- Updated section title and added subtitle
- File: `components/developer-velocity-section.tsx`
- Changes:
  1. Changed title from "Accelerate developer velocity with a self-service environment" to "Complete Technology Solutions"
  2. Added new subtitle: "We design, implement, and maintain the infrastructure that powers modern organizations. One partner. Total accountability."
  3. Added Spanish translation: "Soluciones Tecnológicas Completas" with corresponding subtitle
  4. Updated typography hierarchy with proper spacing between title and subtitle
  5. Styled subtitle with muted foreground color and responsive text sizing

## Complete Technology Solutions - Feature Cards Update
- Updated all three feature cards with new content
- File: `components/developer-velocity-section.tsx`
- Changes:
  1. **Networks & Servers**: VMware virtualization, UniFi networking, Synology storage, structured cabling
  2. **Complete Protection**: SentinelOne XDR, UniFi Protect cameras, backup & recovery, compliance ready
  3. **Custom Development**: Next.js applications, process automation, AI integration, digital transformation
  4. Added corresponding Spanish translations for all three feature cards
  5. Updated content to reflect Estela's comprehensive technology solutions approach

## Hydration Error Fixes and Color Consistency
- Fixed SSR hydration mismatches and color consistency issues
- Files: `components/navbar.tsx`, `components/trusted-by.tsx`, `components/ui/unicorn-background.tsx`, `components/ui/animated-hero.tsx`, `components/evolution-section.tsx`
- Changes:
  1. Added `mounted` state and `resolvedTheme` usage to prevent theme-dependent hydration mismatches
  2. Fixed color consistency between "When technology meets wisdom" and "Cloud computing revolutionized the global economy" headers
  3. Both headers now use the same color scheme: `#d7d8d9` for dark mode, `#08090a` for light mode
  4. Prevented UnicornBackground project ID mismatches during hydration
  5. Fixed navbar logo and trusted-by logo inversion during hydration
  6. All theme-dependent content now waits for client-side mounting before applying theme-specific styles

## Color Consistency Fix - Developer Velocity Section
- Fixed "Complete Technology Solutions" title color to match other section headers
- File: `components/developer-velocity-section.tsx`
- Changes:
  1. Added theme detection hooks (`useTheme`, `mounted` state)
  2. Updated h2 title to use consistent color scheme: `#d7d8d9` (dark mode) / `#08090a` (light mode)
  3. Removed `text-foreground` class and replaced with explicit color styling
  4. Now matches "When technology meets wisdom" and "Cloud computing revolutionized the global economy" colors

## **IMPORTANT NOTE FOR FUTURE SECTIONS:**
All major section headers should use the consistent color scheme:
- **Dark mode**: `#d7d8d9` 
- **Light mode**: `#08090a`
- Always add theme detection with `mounted` state to prevent hydration issues
- Never use generic Tailwind color classes like `text-foreground` for main section titles

## Transform Your Infrastructure Button Styling
- Updated button to match hero "Jump on a call" button styling
- File: `components/evolution-section.tsx`
- Changes:
  1. Applied exact same classes as hero button: `inline-flex items-center justify-center h-[40px] px-[20px] text-[14px] border border-border bg-transparent text-foreground rounded-[8px] hover:bg-accent transition-all duration-[150ms]`
  2. Updated font weight to `510` to match hero buttons
  3. Changed icon margin from `gap-2` to `ml-2` for consistency
  4. Now maintains consistent button styling across the site

## Visual Consistency - Container Width Matching
- Removed max-width constraints to match "Trusted by market leaders" section width
- Files: `components/evolution-section.tsx`, `components/developer-velocity-section.tsx`
- Changes:
  1. **Evolution Section**: Removed `max-w-[1200px]` from both main header and content grid containers
  2. **Developer Velocity Section**: Removed `max-w-[1200px]` from header and features grid containers
  3. All sections now use `container mx-auto` without width constraints
  4. Ensures visual consistency across all major sections
  5. "Cloud computing revolutionized the global economy" section now matches "Trusted by market leaders" width

## Container Structure Consistency - Trusted By Section
- Updated trusted-by section to match container structure pattern
- File: `components/trusted-by.tsx`
- Changes:
  1. Updated container from `container mx-auto` to `container mx-auto px-5 sm:px-10`
  2. Maintains `w-full py-20 lg:py-40` for proper vertical spacing
  3. Now matches the horizontal padding pattern used in other sections
  4. Ensures consistent horizontal spacing across all major sections

## Hero Section Container Consistency
- Updated hero section to match container structure of other sections
- File: `components/ui/animated-hero.tsx`
- Changes:
  1. Changed from `mx-auto max-w-6xl px-6` to `container mx-auto px-5 sm:px-10`
  2. Now matches the exact same margin and padding structure as all other sections
  3. Ensures consistent text alignment and spacing throughout the page
  4. Hero content now aligns perfectly with sections below

## Storage Section Addition
- Added comprehensive storage section with distributed block storage information
- Files: `components/storage-section.tsx`, `app/page.tsx`
- Changes:
  1. Created new StorageSection component with extensive storage content including:
     - Header with storage icon and title
     - Main content section with external images from oxide.computer
     - Feature grid (scale up, snapshots, mixed workloads)
     - Multiple content sections (On-Demand Snapshots, Powered by OpenZFS, Proactive Data Protection)
     - Hardware/Software co-design features
     - CTA section with "Try it now" and "Contact us" buttons
     - Specifications table with detailed storage specs
  2. Added bilingual support (English/Spanish) for all content
  3. Implemented consistent patterns:
     - Theme detection with `mounted` state to prevent hydration issues
     - Standard color scheme: `#d7d8d9` (dark mode) / `#08090a` (light mode)
     - Container structure: `container mx-auto px-5 sm:px-10`
     - Vertical spacing: `py-20 lg:py-40`
  4. Used external images from oxide.computer (temporary placeholders)
  5. Updated Next.js config to allow images from oxide-computer.imgix.net domain
  6. Integrated component into main page after DeveloperVelocitySection
  7. Follows established component architecture with proper TypeScript types