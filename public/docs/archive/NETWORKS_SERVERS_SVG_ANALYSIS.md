# Networks & Servers SVG Analysis

## Location Found
File: `/Users/anibalin/Sites/anibal6/estela3/my-app/components/developer-velocity-section.tsx`

## Content Details
The "Networks & Servers" section is the first feature in the `DeveloperVelocitySection` component with the following text:
- **English**: "VMware virtualization, UniFi networking, Synology storage, Structured cabling. From 10Gb backbone to redundant power, we build foundations that don't fail."
- **Spanish**: "Virtualización VMware, redes UniFi, almacenamiento Synology, cableado estructurado. Desde backbone de 10Gb hasta energía redundante, construimos fundamentos que no fallan."

## Current SVG Image Setup

### Image 1 (Primary/Background Image)
- **Source**: `https://oxide.computer/img/home/developer-public-cloud-1.svg`
- **Width**: 361px
- **Height**: 274px
- **CSS Classes**: `w-full max-w-full h-auto block`

### Image 2 (Overlay Image)
- **Source**: `https://oxide.computer/img/home/developer-public-cloud-2.svg`
- **Width**: 279px
- **Height**: 62px
- **CSS Classes**: `max-w-full h-auto block absolute bottom-0 left-0 w-[77.3%] shadow-lg`
- **Positioning**: Positioned at bottom-left, takes 77.3% width of container

## Container Styling
- **Container**: `w-full relative max-w-[400px] lg:mb-16`
- **Layout**: Grid-based responsive layout (12 columns on mobile, 3 columns on desktop)
- **Max Width**: 400px
- **Aspect Ratio**: Maintained via CSS `h-auto` class

## Image Dimensions for New SVGs
Based on the current setup, new SVG images should follow these specifications:

### Primary Image (image1)
- **Recommended dimensions**: 361 × 274 pixels
- **Aspect ratio**: ~1.32:1 (landscape)
- **Purpose**: Main background/primary visual

### Overlay Image (image2)
- **Recommended dimensions**: 279 × 62 pixels
- **Aspect ratio**: ~4.5:1 (wide landscape)
- **Purpose**: Secondary element positioned at bottom-left
- **Visual weight**: Should be 77.3% the width of the primary image

## Implementation Notes
- Images are rendered using Next.js `Image` component
- Both images are contained within a relative positioned container
- The overlay image uses absolute positioning with `shadow-lg`
- The container has a maximum width of 400px and scales responsively
- Images maintain aspect ratio with `h-auto`