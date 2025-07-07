# Spanish Translation Updates

## Date: 2025-07-07

## Change Summary
Updated Spanish translations on the main page as requested by the user:
1. Changed the principle "Truth Over Comfort" to "Una visión amplia"
2. Changed the CTA subtitle from "Mantenemos nuestro tamaño para mantener nuestra esencia" to "Somos un equipo sólido y compacto por decisión"
3. Changed "Las empresas de varios pisos" to "Las empresas con varios pisos" in the closing section

## Files Modified

### 1. components/estela-principles.tsx
- Changed `title: "Truth Over Comfort"` to `title: "Una visión amplia"` in the Spanish translation section
- This translates to "A broad vision" in English

### 2. components/cta-section.tsx
- Changed `subtitle: "Mantenemos nuestro tamaño para mantener nuestra esencia."`
- To: `subtitle: "Somos un equipo sólido y compacto por decisión."`
- This changes from "We maintain our size to maintain our essence" to "We are a solid and compact team by choice"

### 3. components/closing-section.tsx
- Changed "Las empresas de varios pisos navegan con flotas completas" to "Las empresas con varios pisos maniobran con inercia de buque carguero"
- This changes from "Companies with several floors navigate with complete fleets" to "Companies with several floors maneuver with cargo ship inertia"
- Makes the metaphor more vivid - large companies move slowly like cargo ships

## Issues Found
1. **components/storage-section.tsx**: 
   - The Spanish translation in this component is completely different from the English version
   - English shows principles content ("Truth Over Comfort", "People Over Profit", etc.)
   - Spanish shows storage-related content ("Almacenamiento de Bloques Distribuido", etc.)
   - This appears to be a mismatch and may need further investigation

## Testing Recommendations
1. Test the Spanish version of the site to ensure both changes display correctly
2. Verify that the translations make sense in context with their descriptions
3. Check mobile responsiveness on iPhone 12 as specified
4. Check if `storage-section.tsx` needs to be updated to match the principles content

## Additional Notes
- Both changes were made in the Spanish language objects within the content definitions
- The English versions remain unchanged
- These translations provide more culturally appropriate messaging for the Spanish audience