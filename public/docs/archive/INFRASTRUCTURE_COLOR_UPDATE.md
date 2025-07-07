# ASCII Art Color Update

## Changes Made

Updated all ASCII art components to use custom color scheme instead of monochrome theme colors:

- Text color: #f5b944 (golden yellow)
- Background color: #3d3019 (dark brown)

## Files Modified

### Services Components
- `components/ui/consulting-ascii-art.tsx` - Updated color values
- `components/ui/development-ascii-art.tsx` - Updated color values
- `components/ui/infrastructure-ascii-art.tsx` - Updated color values
- `components/ui/security-ascii-art.tsx` - Updated color values
- `components/ui/specifications-ascii-art.tsx` - Updated color values

### Method Components (Canvas-based)
- `components/ui/principles-ascii-art.tsx` - Updated canvas background and foreground colors
- `components/ui/implementation-ascii-art.tsx` - Updated canvas background and foreground colors
- `components/ui/practices-ascii-art.tsx` - Updated canvas background and foreground colors
- `components/ui/philosophy-ascii-art.tsx` - Updated canvas background and foreground colors
- `components/ui/berlin-ascii-art.tsx` - Updated canvas background and foreground colors

### Method Introduction (Shader-based)
- `components/ui/reactbits-dither.tsx` - Updated shader background color and wave rendering
- `components/method-introduction.tsx` - Updated wave color and container background

All ASCII art effects now use the consistent golden yellow (#f5b944) text on dark brown (#3d3019) background instead of the previous monochrome theme-based colors.