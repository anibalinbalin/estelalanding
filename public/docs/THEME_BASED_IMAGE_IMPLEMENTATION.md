# Theme-Based Image Implementation

## Changes Made

### 1. Created ThemeImage Component
- **File**: `components/ui/theme-image.tsx`
- **Purpose**: A reusable component that displays different images based on the current theme (dark/light mode)
- **Features**:
  - Uses `next-themes` `useTheme` hook to detect current theme
  - Handles SSR by mounting detection to prevent hydration mismatches
  - Supports both dark and light image sources
  - Maintains all standard image properties (width, height, className, alt)

### 2. Updated Security Services Page
- **File**: `app/services/security/page.tsx`
- **Changes**:
  - Updated existing `ThemeImage` component to use local assets instead of external URLs
  - **Dark mode**: Changed from external URL to `/img/oxide-compute-instance-create.png`
  - **Light mode**: Changed from external URL to `/img/oxide-compute-instance-create_light.png`
  - Updated noscript fallback to use local asset as well

## Implementation Details

### Component Structure
```tsx
interface ThemeImageProps {
  darkSrc: string    // Image URL for dark theme
  lightSrc: string   // Image URL for light theme
  alt: string        // Alt text for accessibility
  width: number      // Image width
  height: number     // Image height
  className?: string // Optional CSS classes
}
```

### Usage Example
```tsx
<ThemeImage 
  darkSrc="/img/oxide-compute-instance-create.png"
  lightSrc="/img/oxide-compute-instance-create_light.png"
  width={427} 
  height={444} 
  className="w-[100%] max-w-[100%] h-auto block align-middle" 
  alt="Snapshot of the instance create form, a hardware configuration and distro are selected" 
/>
```

## Testing

### How to Test
1. Navigate to `/services/security` page
2. Toggle between dark and light themes using the theme switcher
3. Observe that the instance create form image changes accordingly:
   - **Dark theme**: Shows the original dark image
   - **Light theme**: Shows the light variant image

### Expected Behavior
- Image should change instantly when theme is toggled
- No layout shift or flicker during theme change
- Image maintains its responsive properties
- Fallback works properly for SSR/no-JS scenarios

## Technical Notes

### SSR Handling
- Component uses `useEffect` with `mounted` state to prevent hydration mismatches
- Default image shown during SSR is the dark variant
- Once mounted, image src switches based on resolved theme

### Performance
- Single image element - no CSS positioning conflicts
- Browser automatically caches both images on theme switches
- Minimal JavaScript footprint
- Leverages existing `next-themes` infrastructure

### Technical Solution
- **Problem**: Previous implementation used absolute positioning with multiple images, causing CSS conflicts
- **Solution**: Simplified to single image element that changes `src` attribute based on theme
- **Benefits**: Eliminates positioning issues, improves reliability, maintains same functionality

## Future Enhancements

1. **Preloading**: Consider preloading both images for instant switching
2. **Fade Transition**: Add smooth transition animation between theme changes
3. **Lazy Loading**: Implement lazy loading for better performance
4. **Image Optimization**: Use Next.js Image component for better optimization

## Files Modified
- ✅ `components/ui/theme-image.tsx` (existing component, already working)
- ✅ `app/services/security/page.tsx` (updated to use local assets)
- ✅ Local image assets verified in `/public/img/`
- ✅ External dependency removed for better performance
- ✅ Noscript fallback updated to use local assets