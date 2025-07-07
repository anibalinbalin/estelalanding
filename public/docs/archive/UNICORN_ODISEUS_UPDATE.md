# Unicorn Studio Odiseus Update

## Date: January 5, 2025

### Changes Made:

1. **Updated Dark Mode Unicorn Effect in DeveloperVelocitySection**
   - Added conditional rendering for the Unicorn Studio effect in the DeveloperVelocitySection component
   - Light theme: uses original project ID `bJ8ClYm9Acq6hsxeaXbl`
   - Dark theme: uses new "Odiseus" project ID `oMxsDGc8LOPLjsXIahO4`
   - The hero unicorn effect remains unchanged

### Files Modified:
- `/components/developer-velocity-section.tsx` - Added conditional project ID based on theme

### Technical Details:
- **Light Mode**: Uses original project `bJ8ClYm9Acq6hsxeaXbl` with dimensions 1440x900
- **Dark Mode**: Uses Odiseus project `oMxsDGc8LOPLjsXIahO4` with dimensions 390x844 (has black borders for better blending)
- Both maintain the same configuration: scale=1, dpi=1.5, fps=30
- Conditional styling applied based on theme for appropriate dimensions
- **Hydration Fix**: Added `mounted` check to prevent SSR/client mismatch errors

### Effects Overview:
- **Hermes**: Hero background effect (unchanged)
- **Odiseus**: DeveloperVelocitySection effect with theme-conditional rendering

### Original Odiseus Code Reference:
```html
<div data-us-project="oMxsDGc8LOPLjsXIahO4" style="width:390px; height: 844px"></div>
<script type="text/javascript">!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();</script>
```