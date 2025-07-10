# Oxide to Estela Migration Summary

## Completed Changes

### 1. CSS Classes Renamed
All CSS classes with `oxide-` prefix have been renamed to `estela-` prefix:
- `.oxide-nav` → `.estela-nav`
- `.oxide-nav-trigger` → `.estela-nav-trigger`
- `.oxide-nav-link` → `.estela-nav-link`
- `.oxide-nav-button` → `.estela-nav-button`
- `.oxide-cta-card` → `.estela-cta-card`
- And all other related classes

**Files updated:**
- `app/globals.css`
- All component files using these classes

### 2. Image Files Renamed
All image files in `/public/img/` with `oxide-` prefix have been renamed to `estela-` prefix:
- `oxide-compute-instance-create.png` → `estela-compute-instance-create.png`
- `oxide-rack.png` → `estela-rack.png`
- And 13 other image files

### 3. Image References Updated
All references to these images in components have been updated to use the new filenames.

### 4. Email Addresses Updated
- Changed `sales@oxide.computer` → `hola@este.la` in `components/storage-section.tsx`

### 5. Font References Updated
- Updated `app/company/work/work.css` to reference fonts from `/font/` instead of `https://oxide.computer/fonts/`
- Fonts are already available in `/public/font/` directory

### 6. Configuration Updates
- Commented out oxide domains in `next.config.ts`
- Removed `WebFetch(domain:oxide.computer)` from `.claude/settings.local.json`

## Manual Tasks Required

### 1. Fonts - Already Available ✅
Fonts are already available in `/public/font/` directory:
- `GT-America-Mono-Regular-OCC.woff2`
- `SuisseIntl-Light-WebS.woff2`
- `SuisseIntl-Regular-WebS.woff2`
- `SuisseIntl-Medium-WebS.woff2`

Note: The CSS references both `.woff2` and `.woff` formats, but only `.woff2` files are present. This is fine as browsers will use the available `.woff2` format.

### 2. External Images Updated ✅
Storage images have been updated to use local assets from `/public/assets/`:
- `components/storage-section.tsx` - Now uses local storage images
- `components/storage-section-new.tsx` - Now uses local storage images

Office/principles images have been commented out in work section:
- `app/company/work/components/FinalSection.tsx` - Images commented out
- `app/company/work/components/ImagesSection.tsx` - Images commented out

### 3. Testing Required
After downloading the fonts and images:
1. Test that all fonts load correctly
2. Verify all images display properly
3. Check both light and dark themes
4. Ensure no console errors about missing resources

## Summary
The oxide to estela migration has been completed successfully:

1. ✅ All CSS classes renamed from `oxide-*` to `estela-*`
2. ✅ All local image files renamed from `oxide-*` to `estela-*`
3. ✅ All component references updated to use new class names and image paths
4. ✅ Email addresses updated from `sales@oxide.computer` to `hola@este.la`
5. ✅ Font references updated to use local paths (`/font/`)
6. ✅ Storage images updated to use local assets from `/public/assets/`
7. ✅ Office/principles images commented out in work section components
8. ✅ Next.js configuration updated to remove oxide domains
9. ✅ Local settings file updated

All external oxide dependencies have been removed. The build completes successfully with no errors.