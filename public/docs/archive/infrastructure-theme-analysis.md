# Infrastructure Page Theme Detection Analysis

## Overview

This document provides a comprehensive analysis of how theme detection is implemented in the `/app/services/infrastructure/page.tsx` component and documents the exact color values and patterns used for light mode styling of card-like components.

## Theme Detection Implementation

### Core Implementation
The infrastructure page uses the `useTheme` hook from `next-themes` for theme detection:

```tsx
import { useTheme } from 'next-themes';

const InfrastructurePage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';
  // ... rest of component
};
```

### Key Features
- **Hydration Safety**: Uses a `mounted` state to prevent hydration mismatches
- **Fallback Strategy**: Falls back to 'dark' theme if not mounted
- **Reliable Detection**: Prioritizes `resolvedTheme` over `theme` for more accurate theme detection
- **Conditional Rendering**: Uses `currentTheme === 'light'` conditional checks throughout the component

## Light Mode Color Specifications

### Primary Card Components

#### 1. Icon Container Backgrounds
```tsx
// Small icon containers with hover states
${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}
```

**Light Mode Colors:**
- **Background**: `#e5e5e5` (light gray)
- **Hover Background**: `#d5d5d5` (slightly darker gray)

#### 2. Main Card Container
```tsx
// Primary card container with border
${currentTheme === 'light' ? 'bg-[#ffffff] border-[#e4e5e4]' : 'bg-[#060f11] border-[#1c2225]'}
```

**Light Mode Colors:**
- **Background**: `#ffffff` (pure white)
- **Border**: `#e4e5e4` (very light gray border)

#### 3. Table/Grid Borders
```tsx
// Internal borders for table-like structures
${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}
${currentTheme === 'light' ? 'border-[#e4e5e4] border-t-[#e4e5e4]' : 'border-[#1c2225] border-t-[#1c2225]'}
```

**Light Mode Colors:**
- **All Borders**: `#e4e5e4` (consistent light gray for internal divisions)

#### 4. Secondary Background Elements
```tsx
// Secondary background containers
${currentTheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#1c2225]'}
```

**Light Mode Colors:**
- **Background**: `#e5e5e5` (light gray for secondary elements)

## Image Assets by Theme

The component also switches images based on theme:

```tsx
// Theme-specific image selection
src={currentTheme === 'light' ? '/img/oxide-storage-create-snapshot1_light.png' : '/img/oxide-storage-create-snapshot.svg'}
src={currentTheme === 'light' ? '/img/oxide-rack_light.png' : '/img/oxide-rack.png'}
```

**Light Mode Image Assets:**
- `/img/oxide-storage-create-snapshot1_light.png`
- `/img/oxide-rack_light.png`

## Background Image Styling

```tsx
// Background image opacity and effects
className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`}
```

**Light Mode Effects:**
- **Opacity**: `10%` (very subtle)
- **Filter**: `grayscale` (removes color)
- **Brightness**: `100%` (normal brightness)

## CSS Variable Usage

The component also makes extensive use of CSS variables for consistent theming:

### Common CSS Variables
- `var(--background)` - Main background color
- `var(--surface-default-p3)` - Default surface color
- `var(--surface-raise-p3)` - Raised surface color
- `var(--stroke-default-p3)` - Default border color
- `var(--stroke-secondary-p3)` - Secondary border color
- `var(--content-accent-p3)` - Accent text color
- `var(--content-secondary-p3)` - Secondary text color
- `var(--elevation-1)` - Light shadow
- `var(--elevation-2)` - Medium shadow
- `var(--border-radius)` - Standard border radius
- `var(--border-radius-lg)` - Large border radius

## Color Palette Summary

### Light Mode Card Colors
| Element Type | Background | Border | Hover Background |
|--------------|------------|---------|------------------|
| Main Cards | `#ffffff` | `#e4e5e4` | N/A |
| Icon Containers | `#e5e5e5` | N/A | `#d5d5d5` |
| Secondary Elements | `#e5e5e5` | `#e4e5e4` | N/A |

### Key Design Patterns
1. **High Contrast**: White backgrounds (`#ffffff`) against light gray borders (`#e4e5e4`)
2. **Subtle Interactions**: Minimal hover state changes (`#e5e5e5` → `#d5d5d5`)
3. **Consistent Borders**: Single border color (`#e4e5e4`) used throughout
4. **Layered Backgrounds**: Different shades of gray for hierarchy (`#ffffff` > `#e5e5e5`)

## Implementation Notes

### Theme Detection Reliability
- The component prioritizes `resolvedTheme` over `theme` for more accurate detection
- Uses hydration safety with `mounted` state
- Defaults to dark theme during SSR to prevent flashing

### Performance Considerations
- Theme conditional checks are done at render time
- No additional API calls or complex computations
- Leverages CSS variables for consistent theming across the application

### Accessibility
- High contrast ratios maintained in light mode
- Clear visual hierarchy through color differentiation
- Consistent interactive states for better UX

This analysis provides a complete overview of the theme detection implementation and light mode color specifications used in the infrastructure page components.