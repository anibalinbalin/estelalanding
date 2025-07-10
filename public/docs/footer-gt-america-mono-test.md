# Footer GT America Mono Font Test

## Overview
Testing GT America Mono font styling on the footer contact information to match the monospace styling used in the toolbar and other UI elements throughout the website.

## Target Contact Information
The following text in the footer will be styled with GT America Mono:
- "Estela Technology Solutions"
- "21 de Setiembre, 3015. 802"
- "Montevideo, Uruguay"
- "South America"
- "+598 27113184"
- "hola@este.la"

## Implementation Details
- **File Modified**: `components/footer.tsx`
- **Location**: Contact information section around lines 170-195
- **Font Styling**: `fontFamily: 'GT_America_Mono, monospace'`
- **Font Features**: Including standard GT America Mono feature settings for consistency

## Purpose
This is an experimental test to see how the contact information appears with the same monospace font used elsewhere in the interface. The change can be easily reverted if the styling doesn't provide the desired visual effect.

## Testing Criteria
- Visual consistency with existing GT America Mono elements
- Readability of contact information
- Proper rendering in both light and dark themes
- Overall aesthetic harmony with the footer design

## Reversion Plan
If the styling is not satisfactory, the changes can be easily reverted by removing the font styling from the contact information elements.

## Date
June 30, 2025