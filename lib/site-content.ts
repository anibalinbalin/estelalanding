// Site content aggregator - single source of truth for machine-view
// Imports content from page files to avoid duplication

import { securityContent } from '@/app/services/security/page'
import { infrastructureContent } from '@/app/services/infrastructure/page'
import { developmentContent } from '@/app/services/development/page'
import { consultingContent } from '@/app/services/consulting/page'
import { contactContent } from '@/app/contact/page'

export {
  securityContent,
  infrastructureContent,
  developmentContent,
  consultingContent,
  contactContent
}
