# Spanish Translation Debug Guide

## How the Translation Works

1. **Language Toggle Button**: Located in the navbar (ToolbarSwitcher component)
2. **Language State**: Managed by LanguageProvider, stored in localStorage
3. **Routing**: When language changes, the router navigates to the Spanish version with `/es` prefix

## Testing Steps

1. Visit http://localhost:3001/company/work (English page)
2. Click the translate button (Languages icon) in the navbar
3. Should redirect to http://localhost:3001/es/company/work (Spanish page)

## Current Spanish Pages Available

- `/es` - Homepage
- `/es/company/work` - Work page (translated)
- `/es/company/about` - About page
- `/es/company/partners` - Partners page
- `/es/company/team` - Team page
- `/es/contact` - Contact page
- `/es/services/infrastructure` - Infrastructure service
- `/es/services/security` - Security service
- `/es/services/development` - Development service
- `/es/services/consulting` - Consulting service
- `/es/services/specifications` - Specifications service
- `/es/method` - Method page
- `/es/method/introduction` - Introduction page
- `/es/method/principles` - Principles page
- `/es/method/implementation` - Implementation page
- `/es/method/practices` - Practices page
- `/es/method/philosophy` - Philosophy page

## How to Navigate to Spanish Work Page

1. **Direct URL**: Visit http://localhost:3001/es/company/work
2. **Via Translation Button**: 
   - Go to http://localhost:3001/company/work
   - Click the Languages icon in the navbar
   - Should automatically redirect to Spanish version

## Troubleshooting

If translation isn't working:
1. Clear localStorage (browser console: `localStorage.clear()`)
2. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for any errors