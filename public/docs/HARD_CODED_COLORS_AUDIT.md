# Hard-Coded Hex Color Values Audit

This document lists all hard-coded hex color values found in the main UI components and pages that should be replaced with CSS variables for proper theme consistency.

## Summary

Found hard-coded hex colors in the following categories:
- **Critical Priority**: ASCII art animations that break theme switching
- **High Priority**: Main UI components with theme-dependent colors
- **Medium Priority**: Component styling that affects user experience
- **Low Priority**: Animation/effect components (may be intentional)

---

## HIGH PRIORITY - Main UI Components

### Contact Page (`app/contact/page.tsx`)
- `text-[#f5b944]` (3 instances) - Should use `text-[var(--content-accent-p3)]`

### Services Pages

#### Security Page (`app/services/security/page.tsx`)
- Light theme backgrounds: `bg-[#e5e5e6]` and `bg-[#3d3019]` (4 instances each)
- Icon colors: `text-[#ecbb5a]` and `text-[#ebbb5a]` (8 instances)
- List item icons: `text-[#ecbb5a]` (5 instances)

#### Consulting Page (`app/services/consulting/page.tsx`)
- Link colors: `text-[#ecbb5a] dark:text-[#ecbb5a]` (3 instances)
- Icon colors: `text-[#f5b944]` (3 instances)

#### Infrastructure Page (`app/services/infrastructure/page.tsx`)
- **Extensive hard-coded colors** (50+ instances):
  - Background colors: `bg-[#ffffff]`, `bg-[#060f11]`, `bg-[#e5e5e5]`, `bg-[#d5d5d5]`, `bg-[#1c2225]`
  - Border colors: `border-[#e4e5e4]`, `border-[#1c2225]`
  - Text colors: `text-[#f5b944]`, `text-[#f5b943]`
  - Badge backgrounds: `bg-[#574829]`

#### Development Page (`app/services/development/page.tsx`)
- Background color: `backgroundColor: '#3b301c'`

### Company Pages

#### About Components
- **PrinciplesList.tsx**: Theme-dependent backgrounds `bg-[#e5e5e5]`, `bg-[#3d3019]`, text colors `text-[#ecbb5a]`, `text-[#f5b944]`
- **ValuesGrid.tsx**: White backgrounds `bg-[#ffffff]`, borders `border-[#e4e5e4]`, accent colors `text-[#f5b944]`
- **TeamSection.tsx**: Gray text `text-[#7d8384]`
- **ContentSection.tsx** & **FinalSection.tsx**: Gray headings `text-[#7d8384]`

#### Team Components (Similar patterns as About)
- **TeamGrid.tsx**: `bg-[#ffffff] border-[#e4e5e4]`
- **PrinciplesList.tsx**: Same color issues as About version
- **ValuesGrid.tsx**: Same color issues as About version

#### Work Components
- **ValuesGrid.tsx**: Accent colors `text-[#f5b944]`, borders `border-b-[#eaeaea]`, `border-b-[#1c2225]`
- **WorkApproachList.tsx**: Icon colors `text-[#f5b944]` (8 instances), backgrounds for light theme

---

## MEDIUM PRIORITY - Component Styling

### Main Components (`components/`)

#### Service Components
- **service-specifications-section.tsx**: Heading colors `text-[#7e8385]` (10 instances)
- **developer-velocity-section.tsx**: Dynamic colors in JavaScript `color: '#d7d8d9'` and `'#08090a'`, background `backgroundColor: '#3b301c'`
- **complete-tech-solutions.tsx**: Dynamic colors `color: '#d7d8d9'` and `'#08090a'`

#### Method Components
- **method-practices.tsx**: Text color `color: '#fff'`
- **method-introduction.tsx**: Text color `color: '#fff'`
- **method-philosophy.tsx**: Text color `color: '#fff'`
- **method-principles.tsx**: Text color `color: '#fff'`
- **method-implementation.tsx**: Text color `color: '#fff'`

#### Other Components
- **trusted-by.tsx**: Text colors `text-[#08090a]`
- **hands-section.tsx**: SVG fill colors `fill="#010102"`, `fill="#F7F8F8"`

---

## CRITICAL PRIORITY - ASCII Art Animations

These components contain ASCII art animations with hardcoded colors that break theme switching:

### Server/Infrastructure ASCII Art
- **animated-server-art.tsx**: ✅ Uses `var(--ascii-foreground-p3)` (GOOD)
  - ASCII Pattern: `┌───┐ ┌───┐ ┌───┐ ┌───┐` with animated `▊▊▊` and `⎕⎕⎕` blocks
  - Status: No hardcoded colors found

### UUID/ESTELA ASCII Art
- **animated-uuid-estela-art.tsx**: ❌ **NEEDS FIX**
  - Line 16: `color: '#f5b944'` (hardcoded golden color)
  - ASCII Pattern: `550E800-ESTELA-41D4-A7` with animated ESTELA text
  - Recommendation: Replace with `var(--ascii-foreground-p3)`

### Wave/Mountain ASCII Art
- **ascii-wave-animation.tsx**: ✅ Uses `var(--ascii-foreground-p3)` (GOOD)
  - ASCII Pattern: Animated wave using Unicode blocks like `▂▄▆█`
  - Background: Uses `transparent` (GOOD)
  - Status: No hardcoded colors found

### Fibonacci Spiral ASCII Art
- **fibonacci-ascii-spiral.tsx**: ❌ **NEEDS FIX**
  - Line 70: `backgroundColor: '#39301f'` (hardcoded brown background)
  - Line 76: `backgroundColor: '#39301f'` (hardcoded brown background)
  - ASCII Pattern: Spiral pattern using chars `['.', '–', '=', '▂', '▄', '▆', '█']`
  - Recommendation: Replace with CSS variables for theme-aware backgrounds

### Estela Principles Component (Contains Multiple ASCII Arts)
- **estela-principles.tsx**: ❌ **NEEDS MAJOR FIX**
  - Line 33: `backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(8, 15, 17)' : '#ffffff'`
  - Line 67: `backgroundColor: 'rgb(59, 48, 28)'` (ASCII container background)
  - Line 81: `color: 'rgb(245, 185, 68)'` (ASCII text color - server art)
  - Line 125: `backgroundColor: 'rgb(59, 48, 28)'` (ASCII container background)
  - Line 139: `color: 'rgb(245, 185, 68)'` (ASCII text color - UUID art)
  - Contains: Both server ASCII art and UUID ESTELA art patterns
  - Impact: High - affects multiple ASCII animations

### Recommended CSS Variables for ASCII Art
```css
:root {
  --ascii-foreground-p3: /* Golden color for ASCII text */
  --ascii-background-alt-p3: /* Brown background for containers */
  --ascii-container-bg: /* Container background */
}

[data-theme="dark"] {
  --ascii-foreground-p3: #f5b944;
  --ascii-background-alt-p3: #39301f;
  --ascii-container-bg: rgb(59, 48, 28);
}

[data-theme="light"] {
  --ascii-foreground-p3: #b8860b; /* Darker gold for light mode */
  --ascii-background-alt-p3: #f5f5dc; /* Light beige */
  --ascii-container-bg: #f8f9fa;
}
```

---

## LOW PRIORITY - Animation/Effect Components

These may be intentionally hard-coded for specific visual effects:

### UI Components (`components/ui/`)
- **interactive-lines-grid.tsx**: Grid colors `#666`, `#999`, `#fff`, `#000`, `#0a0a0a`, `#fafafa`
- **letter-glitch.tsx**: Glitch effect colors `["#2b4539", "#61dca3", "#61b3dc"]`
- **waves.tsx**: Wave color `bg-[#160000]`
- **custom-vertical-bars-noise.tsx**: Gradient colors `#4a3a20`, `#3d3019`
- **hexagonal-sliding-bars.tsx**: Canvas colors `#3d3019`, `#f5b944`, background `#F0EEE6`
- **reactbits-dither.tsx**: Shader background `vec3(0.239, 0.188, 0.098)` (equivalent to `#3d3019`)

---

## Recommended CSS Variables to Use

Based on the existing CSS variable system, here are the recommended replacements:

### Text Colors
- `#f5b944`, `#f5b943`, `#ecbb5a`, `#ebbb5a` → `var(--content-accent-p3)`
- `#7d8384`, `#7e8385` → `var(--content-secondary-p3)`
- `#08090a` → `var(--content-primary-p3)`
- `#d7d8d9` → `var(--content-primary-p3)` (dark theme)
- `#fff` → `var(--content-primary-p3)` or `var(--content-raise-p3)`

### Background Colors
- `#ffffff` → `var(--surface-raise-p3)`
- `#060f11` → `var(--surface-raise-p3)` (dark theme)
- `#e5e5e5`, `#e5e5e6` → `var(--surface-accent-secondary-p3)`
- `#d5d5d5` → `var(--surface-accent-secondary-hover-p3)`
- `#3d3019`, `#3b301c` → `var(--surface-accent-secondary-p3)` (dark theme)

### Border Colors
- `#e4e5e4`, `#eaeaea` → `var(--stroke-secondary-p3)`
- `#1c2225` → `var(--stroke-secondary-p3)` (dark theme)

---

## Implementation Notes

1. **Priority Order**: Start with HIGH PRIORITY files as they directly impact theme switching
2. **Testing**: Each file should be tested in both light and dark themes after changes
3. **Consistency**: Use the existing CSS variable system rather than creating new variables
4. **Animation Components**: Review LOW PRIORITY items to determine if hard-coded colors are intentional for specific effects

---

## Files Requiring Updates

### Critical Priority - ASCII Art Animations (3 files)
1. `components/ui/animated-uuid-estela-art.tsx` - Hardcoded golden text color
2. `components/ui/fibonacci-ascii-spiral.tsx` - Hardcoded brown backgrounds  
3. `components/estela-principles.tsx` - Multiple hardcoded colors for ASCII containers and text

### High Priority (19 files)
1. `app/contact/page.tsx`
2. `app/services/security/page.tsx`
3. `app/services/consulting/page.tsx`
4. `app/services/infrastructure/page.tsx`
5. `app/services/development/page.tsx`
6. `app/company/about/components/PrinciplesList.tsx`
7. `app/company/about/components/ValuesGrid.tsx`
8. `app/company/about/components/TeamSection.tsx`
9. `app/company/about/components/ContentSection.tsx`
10. `app/company/about/components/FinalSection.tsx`
11. `app/company/team/components/TeamGrid.tsx`
12. `app/company/team/components/PrinciplesList.tsx`
13. `app/company/team/components/ValuesGrid.tsx`
14. `app/company/team/components/TeamSection.tsx`
15. `app/company/team/components/ContentSection.tsx`
16. `app/company/team/components/FinalSection.tsx`
17. `app/company/work/components/ValuesGrid.tsx`
18. `app/company/work/components/WorkApproachList.tsx`

### Medium Priority (9 files)
1. `components/service-specifications-section.tsx`
2. `components/developer-velocity-section.tsx`
3. `components/complete-tech-solutions.tsx`
4. `components/method-practices.tsx`
5. `components/method-introduction.tsx`
6. `components/method-philosophy.tsx`
7. `components/method-principles.tsx`
8. `components/method-implementation.tsx`
9. `components/trusted-by.tsx`
10. `components/hands-section.tsx`

**Total files requiring updates: 31 files**
- **Critical Priority**: 3 ASCII art animation files
- **High Priority**: 19 main UI component files  
- **Medium Priority**: 9 component styling files

**Total hard-coded color instances: 160+** (including 8+ in ASCII art animations)