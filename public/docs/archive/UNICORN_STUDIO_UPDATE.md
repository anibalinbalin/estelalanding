# Unicorn Studio Update - Theme Switching Implementation

## Date: 2025-01-06

### Overview
Updating the Unicorn Studio background component to:
1. Support the new project IDs for light and dark themes
2. Enable production mode for optimal performance
3. Improve theme switching behavior
4. Add proper cleanup and initialization

### Changes Made

#### 1. Updated Project IDs
- **Light theme**: `x32OzaamtEMBurgclZfn` (was: `hzCHR7pkfaINHqE3pmvN`)
- **Dark theme**: `v0bejveYheJ4JoKnNQwP` (was: `7oGZViIlL09cikCTRaRM`)

#### 2. Production Mode
- Added `?production=true` to project IDs for CDN optimization
- This enables the global edge CDN for better performance

#### 3. Improved Implementation
- Better TypeScript types for UnicornStudio
- Proper scene cleanup on theme switch
- Added configuration options (scale, dpi, fps)
- Fixed re-initialization issues

### Technical Details
- Using the proper UnicornStudio init method with configuration
- Tracking scene references for proper cleanup
- Preventing multiple initializations
- Added production mode query parameter to enable CDN
- Lowered FPS to 30 for better performance
- Using data attributes for configuration

### Implementation Notes
- The component now properly tracks the scene instance
- Cleanup is handled correctly when switching themes
- Production mode is enabled with `?production=true`
- The component follows the React/Next.js sample pattern
- Prevents flickering during theme switches