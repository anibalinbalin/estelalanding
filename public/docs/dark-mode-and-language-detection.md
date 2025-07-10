# Dark Mode and Browser Language Detection Implementation

## Overview
This document describes the implementation of dark mode as default and automatic browser language detection.

## Features Implemented

### 1. Dark Mode as Default
- Changed `defaultTheme` from "light" to "dark" in the ThemeProvider
- Users will see dark mode by default on first visit
- Theme preference is saved in localStorage for subsequent visits
- System preference is still respected if users have `enableSystem` set

### 2. Browser Language Detection
The language is now automatically detected using the following priority:

1. **localStorage** - If the user has previously selected a language
2. **Browser Language** - Using `navigator.language` and `navigator.languages`
3. **Default** - Falls back to Spanish ('es') if no match found

### Supported Language Codes
The system recognizes and maps these browser language codes:

**Spanish variants:**
- es, es-ES, es-MX, es-AR, es-CO, es-CL, es-PE, es-VE, es-EC, es-GT, es-CU, es-BO, es-DO, es-HN, es-PY, es-SV, es-NI, es-CR, es-PA, es-UY, es-PR

**English variants:**
- en, en-US, en-GB, en-CA, en-AU, en-NZ, en-IE, en-ZA, en-IN, en-SG, en-PH

### 3. Dynamic HTML Lang Attribute
- The `<html>` tag's `lang` attribute updates automatically based on the selected language
- Spanish pages explicitly set `lang="es"`
- English pages set `lang="en"`
- This improves SEO and accessibility

## Files Modified

1. **`/lib/language-detection.ts`** - New utility for browser language detection
2. **`/components/language-provider.tsx`** - Updated to use browser detection on initial load
3. **`/app/layout.tsx`** - Changed defaultTheme to "dark", removed hardcoded lang="en"
4. **`/app/es/layout.tsx`** - Added client-side effect to ensure Spanish pages have correct lang

## How It Works

### On First Visit:
1. Dark theme loads immediately (no flash of light theme)
2. Browser language is detected
3. If browser is in Spanish, user stays on current page
4. If browser is in English and on Spanish page, no automatic redirect (respects user navigation)
5. Language preference is saved for future visits

### On Subsequent Visits:
1. Theme loads from localStorage (dark/light/system)
2. Language loads from localStorage
3. No re-detection occurs unless localStorage is cleared

### Manual Language Switch:
1. User clicks language toggle
2. Language updates in state and localStorage
3. HTML lang attribute updates
4. User is redirected to appropriate language version

## Testing
To test browser language detection:
1. Clear localStorage: `localStorage.clear()`
2. Change browser language in settings
3. Refresh the page
4. The site should detect the new language

To test dark mode:
1. Clear localStorage to see default (dark)
2. Toggle theme using the theme switcher
3. Refresh to confirm persistence