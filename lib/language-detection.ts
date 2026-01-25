type Language = 'en' | 'es'

/**
 * Maps browser language codes to supported languages
 * Handles variants like es-ES, es-MX, en-US, en-GB, etc.
 */
const languageMap: Record<string, Language> = {
  // Spanish variants
  'es': 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-AR': 'es',
  'es-CO': 'es',
  'es-CL': 'es',
  'es-PE': 'es',
  'es-VE': 'es',
  'es-EC': 'es',
  'es-GT': 'es',
  'es-CU': 'es',
  'es-BO': 'es',
  'es-DO': 'es',
  'es-HN': 'es',
  'es-PY': 'es',
  'es-SV': 'es',
  'es-NI': 'es',
  'es-CR': 'es',
  'es-PA': 'es',
  'es-UY': 'es',
  'es-PR': 'es',
  
  // English variants
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'en-CA': 'en',
  'en-AU': 'en',
  'en-NZ': 'en',
  'en-IE': 'en',
  'en-ZA': 'en',
  'en-IN': 'en',
  'en-SG': 'en',
  'en-PH': 'en',
}

/**
 * Detects language from localStorage or browser settings
 * @returns The detected language or default language
 */
export function detectBrowserLanguage(defaultLanguage: Language = 'es'): Language {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  // First priority: localStorage for saved preference
  const savedLanguage = localStorage.getItem('language') as Language | null
  if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
    return savedLanguage
  }

  // Second: browser language preference
  const browserLang = navigator.language || (navigator as any).userLanguage || ''

  // Try exact match first
  if (languageMap[browserLang]) {
    return languageMap[browserLang]
  }

  // Try matching just the language part (before the hyphen)
  const primaryLang = browserLang.split('-')[0].toLowerCase()
  if (languageMap[primaryLang]) {
    return languageMap[primaryLang]
  }

  // Check navigator.languages array for additional preferences
  if (navigator.languages && navigator.languages.length > 0) {
    for (const lang of navigator.languages) {
      if (languageMap[lang]) {
        return languageMap[lang]
      }

      // Try primary language part
      const primary = lang.split('-')[0].toLowerCase()
      if (languageMap[primary]) {
        return languageMap[primary]
      }
    }
  }

  // Default to Spanish if no match found
  return defaultLanguage
}

