# Infrastructure Page Updates

## Overview
Added two new sections to the infrastructure services page showcasing advanced networking and security solutions.

## Changes Made

### 1. Advanced Security & Surveillance Solutions Section
- **Location**: Added after "High-Performance Post-Production Systems" section
- **Image**: `/img/unifi_ptz.png` (G6-PTZ camera)
- **Image Size**: 64% width (reduced by 15% from original 75%)
- **Features**:
  - 360° Pan/Tilt/Zoom with 30x optical zoom
  - 4K Ultra HD video resolution
  - AI-powered person and vehicle detection (no icon)
  - Night vision with advanced IR illumination
  - Remote monitoring via UniFi Protect
- **Status Display**: Shows two PTZ cameras (entrance and parking) with recording status

### 2. Enterprise Wireless Networks Section
- **Location**: Added after security section
- **Image**: `/img/u7pro.png` (U7 Pro WiFi 7 access point)
- **Image Size**: 64% width (matching PTZ camera sizing)
- **Features**:
  - WiFi 7 (802.11be) with 6GHz support
  - Tri-band operation up to 9.3 Gbps
  - Seamless roaming between access points
  - WPA3 Enterprise with RADIUS authentication
  - Centralized management via UniFi Network
- **Status Display**: Shows two access points with client counts and bandwidth usage

## Technical Details
- Maintained consistent styling with existing sections
- Used yellow accent color (#f5b944) throughout
- Responsive design patterns preserved
- Theme switching support (light/dark) included
- SVG icons from existing sprite sheet

## Files Modified
- `/app/services/infrastructure/page.tsx`

## Testing Recommendations
- Verify responsive behavior on mobile/tablet/desktop
- Test theme switching (light/dark modes)
- Ensure images load correctly
- Check hover states and transitions

---

## Update: 2025-07-10 - Removed Section Links

### Summary
Removed clickable links from 5 section headings on the infrastructure page while maintaining visual appearance.

### Changes Made
Removed links from the following sections:
1. **On-demand virtual machines** - Previously linked to `/product/compute`
2. **Enterprise Network Architecture** - Previously linked to `/product/storage`
3. **High-Performance Post-Production Systems** - Previously linked to `/product/networking`
4. **Advanced Security & Surveillance Solutions** - Previously linked to `/product/security`
5. **Enterprise Wireless Networks** - Previously linked to `/product/wireless`

### Technical Details
- Removed `<a>` tags wrapping the section headings
- Replaced with plain `<div>` elements maintaining the same flex layout
- Preserved all visual styling (icons, text, arrows)
- Removed hover opacity transitions that were part of the link styling

### Testing
- Verify all 5 sections are no longer clickable
- Confirm visual appearance remains unchanged
- Check that cursor no longer changes to pointer on hover
- Test on both light and dark themes

---

## Update: 2025-07-10 - Spanish Infrastructure Page Updates

### Summary
Updated Spanish infrastructure page to match English version with link removal and added two new sections with proper Spanish translations.

### Changes Made

#### 1. Removed Links from Existing Sections
Removed links from the following sections:
- **Virtual Machines** - Previously linked to `/es/product/compute`
- **Arquitectura de Red Empresarial** - Previously linked to `/es/product/storage`
- **Sistemas de Post-Producción de Alto Rendimiento** - Previously linked to `/es/product/networking`

#### 2. Added Security & Surveillance Section (Seguridad y vigilancia)
- Spanish translation of Advanced Security & Surveillance Solutions
- Features include:
  - PTZ de 360° con zoom óptico de 30x
  - Resolución de video 4K Ultra HD
  - Detección de personas y vehículos por IA
  - Visión nocturna con iluminación IR
  - Monitoreo y control remoto a través de UniFi Protect
- Status displays show "GRABANDO" instead of "RECORDING"

#### 3. Added Enterprise Wireless Networks Section (Redes wifi empresariales)
- Spanish translation of Enterprise Wireless Networks
- Features include:
  - WiFi 7 (802.11be) con soporte para 6GHz
  - Operación tri-banda de hasta 9.3 Gbps
  - Roaming sin interrupciones entre puntos de acceso
  - Autenticación WPA3 Enterprise con RADIUS
  - Gestión centralizada a través de UniFi Network
- Status displays show "EN LÍNEA" instead of "ONLINE"

### Technical Details
- Maintained consistent structure with English version
- Used proper Spanish accents and grammar
- Translated UI elements (cam-entrada, cam-estacionamiento, etc.)
- Preserved all styling and responsive behavior

### Files Modified
- `/app/es/services/infrastructure/page.tsx`

### Testing
- Verify all sections display correctly in Spanish
- Confirm new sections appear after Post-Production section
- Check Spanish translations are accurate and natural
- Test on both light and dark themes
- Verify responsive behavior matches English version