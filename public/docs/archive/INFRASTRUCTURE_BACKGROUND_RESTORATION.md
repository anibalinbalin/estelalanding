# Infrastructure Page Background Restoration

## Date: June 27, 2025

## Overview
Restored the correct plus-bg.svg pattern background on the infrastructure page, replacing the incorrectly used oxide-compute-terraform-config_colosus.svg and oxide-compute-terraform-init.svg.

## Changes Made

### 1. Downloaded plus-bg.svg
- Downloaded the original plus-bg.svg from https://oxide.computer/img/home/plus-bg.svg
- Saved to `/public/img/plus-bg.svg`

### 2. Updated Infrastructure Page Backgrounds
- **File**: `/app/services/infrastructure/page.tsx`
- **Line 93**: Replaced `/img/oxide-compute-terraform-config_colosus.svg` with `/img/plus-bg.svg`
- **Line 190**: Replaced `/img/oxide-compute-terraform-init.svg` with `/img/plus-bg.svg`

### 3. Implemented Theme-Specific Styling
Applied conditional styling based on theme:

**Light Mode**:
- `opacity-10` - More subtle opacity for light backgrounds
- `grayscale` - Converts to grayscale for a grey subtle tone
- `brightness-100` - Normal brightness (no enhancement)

**Dark Mode**:
- `opacity-20` - Original opacity
- `brightness-150` - Enhanced brightness
- `contrast-50` - Reduced contrast

## Technical Implementation
```jsx
className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`}
```

## Result
- The plus-bg.svg pattern is now correctly displayed as the background on both sections of the infrastructure page
- Light mode displays a subtle grey-toned version of the pattern
- Dark mode maintains the original enhanced styling
- The oxide-compute-terraform-config_colosus.svg remains correctly used only on the security page