# Odiseo Effect Repositioning

## Change Made
Moved the Odiseo effect from the DeveloperVelocitySection to the StorageSection, positioning it just above the "Small Over Scale" section.

## Art Direction Purpose
This repositioning improves the content flow and visual composition of the front page.

## Technical Details

### From: DeveloperVelocitySection
- **Location**: Lines 104-119 in `components/developer-velocity-section.tsx`
- **Action**: Removed the Odiseo effect completely

### To: StorageSection  
- **Location**: Added before line 345 in `components/storage-section.tsx`
- **Position**: Just before the "Hardware and Software Co-Design Section" (which contains "Small Over Scale")

### Code Moved
```tsx
{/* Odiseo Effect */}
<div className="mb-12 lg:mb-20 flex justify-center">
  <div 
    key={resolvedTheme} // Force re-render when theme changes
    data-us-project={mounted && resolvedTheme === 'dark' ? "oMxsDGc8LOPLjsXIahO4?production=true" : "bJ8ClYm9Acq6hsxeaXbl?production=true"}
    data-us-scale="1"
    data-us-dpi="1.5"
    data-us-fps="30"
    className="w-full max-w-6xl"
    style={{ 
      width: '1440px',
      height: '900px',
      maxWidth: '100%',
      aspectRatio: '1440/900'
    }}
  />
</div>
```

## Result
The Odiseo effect now appears directly above the "Small Over Scale" section, maintaining its theme-switching functionality while improving the page's visual flow.