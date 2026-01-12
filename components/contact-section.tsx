'use client'

import { useState } from 'react'
import { Link } from 'next-view-transitions'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    breadcrumb: 'Estela / Contact',
    title: 'Contact',
    subtitle: "Let's start a conversation.",
    form: {
      title: 'Get Started',
      description: 'Tell us about your infrastructure challenges.',
      submit: 'SUBMIT',
      fields: {
        name: 'Name *',
        company: 'Company *',
        email: 'Email *',
        phone: 'Phone',
        infrastructureSize: 'Current infrastructure size',
        primaryChallenge: 'Primary challenge',
        howDidYouHear: 'How did you hear about us?',
        message: 'Message'
      },
      placeholders: {
        message: 'Tell us more about your project...',
        selectSize: 'Select size',
        selectChallenge: 'Select challenge',
        selectSource: 'Select source'
      },
      options: {
        infrastructureSize: [
          { value: 'less-than-50', label: 'Less than 50 users' },
          { value: '50-200', label: '50-200 users' },
          { value: '200-plus', label: '200+ users' }
        ],
        primaryChallenge: [
          { value: 'performance', label: 'Performance issues' },
          { value: 'security', label: 'Security concerns' },
          { value: 'scaling', label: 'Scaling difficulties' },
          { value: 'integration', label: 'Integration problems' },
          { value: 'other', label: 'Other' }
        ],
        howDidYouHear: [
          { value: 'referral', label: 'Referral' },
          { value: 'web-search', label: 'Web search' },
          { value: 'partner', label: 'Partner recommendation' },
          { value: 'other', label: 'Other' }
        ]
      }
    },
    timeline: {
      title: 'What happens next?',
      steps: [
        { time: 'Within 4 hours:', text: 'We acknowledge your message and review your needs' },
        { time: 'Within 24 hours:', text: 'We schedule a consultation call at your convenience' },
        { time: 'Within 48 hours:', text: 'You receive our initial assessment and recommendations' }
      ],
      consultationTitle: 'Your consultation includes:',
      consultationItems: [
        '60-90 minute deep dive into your challenges',
        'Infrastructure assessment',
        'Opportunity identification',
        'No-obligation recommendations',
        'Clear next steps'
      ]
    },
    directContact: {
      title: 'Prefer Direct Contact?',
      email: {
        title: 'Email',
        address: 'hola@este.la',
        description: "We respond to all emails within 4 business hours.\nReal responses from real people who know technology."
      },
      phone: {
        title: 'Phone',
        number: '+598 2 XXX XXXX',
        description: "Monday - Friday: 9:00 - 18:00 UYT\nEmergency support: 24/7 for existing clients\n\nYes, we actually answer our phones."
      },
      whatsapp: {
        title: 'WhatsApp',
        number: '+598 9X XXX XXX',
        description: "For quick questions and urgent matters.\nBusiness hours response guaranteed."
      }
    },
    location: {
      title: 'Visit Us',
      address: ['Estela', '[Street Address]', '[Neighborhood]', 'Montevideo, Punta del Este, Uruguay', 'CP XXXXX'],
      mapPlaceholder: '[Interactive Map]',
      amenities: ['Parking available', 'Accessible entrance', 'Coffee always ready']
    },
    existingClients: {
      title: 'For Existing Clients',
      portal: {
        title: 'Support Portal',
        button: 'Access Client Portal →',
        description: 'Submit tickets, view documentation, check system status'
      },
      emergency: {
        title: 'Emergency Support',
        number: '+598 9X XXX XXX',
        description: "24/7 for critical issues\nDirect line to on-call engineer"
      }
    },
    notReady: {
      title: 'Not ready to talk yet?',
      subtitle: "That's fine. Good decisions take time.",
      links: [
        { href: '/method', label: 'Read Our Method' },
        { href: '/company/work', label: 'View Our Work' },
        { href: '/company/team', label: 'Meet Our Team' }
      ],
      closing: ['The first conversation is always free.', 'The coffee is too.']
    }
  },
  es: {
    breadcrumb: 'Estela / Contacto',
    title: 'Contacto',
    subtitle: 'Comencemos una conversación.',
    form: {
      title: 'Comenzar',
      description: 'Cuéntanos sobre tus desafíos de infraestructura.',
      submit: 'ENVIAR',
      fields: {
        name: 'Nombre *',
        company: 'Empresa *',
        email: 'Email *',
        phone: 'Teléfono',
        infrastructureSize: 'Tamaño de infraestructura actual',
        primaryChallenge: 'Desafío principal',
        howDidYouHear: '¿Cómo nos conociste?',
        message: 'Mensaje'
      },
      placeholders: {
        message: 'Cuéntanos más sobre tu proyecto...',
        selectSize: 'Seleccionar tamaño',
        selectChallenge: 'Seleccionar desafío',
        selectSource: 'Seleccionar fuente'
      },
      options: {
        infrastructureSize: [
          { value: 'less-than-50', label: 'Menos de 50 usuarios' },
          { value: '50-200', label: '50-200 usuarios' },
          { value: '200-plus', label: '200+ usuarios' }
        ],
        primaryChallenge: [
          { value: 'performance', label: 'Problemas de rendimiento' },
          { value: 'security', label: 'Preocupaciones de seguridad' },
          { value: 'scaling', label: 'Dificultades de escalado' },
          { value: 'integration', label: 'Problemas de integración' },
          { value: 'other', label: 'Otro' }
        ],
        howDidYouHear: [
          { value: 'referral', label: 'Referencia' },
          { value: 'web-search', label: 'Búsqueda web' },
          { value: 'partner', label: 'Recomendación de partner' },
          { value: 'other', label: 'Otro' }
        ]
      }
    },
    timeline: {
      title: '¿Qué sigue?',
      steps: [
        { time: 'En 4 horas:', text: 'Confirmamos tu mensaje y revisamos tus necesidades' },
        { time: 'En 24 horas:', text: 'Agendamos una llamada de consulta a tu conveniencia' },
        { time: 'En 48 horas:', text: 'Recibes nuestra evaluación inicial y recomendaciones' }
      ],
      consultationTitle: 'Tu consulta incluye:',
      consultationItems: [
        '60-90 minutos de inmersión en tus desafíos',
        'Evaluación de infraestructura',
        'Identificación de oportunidades',
        'Recomendaciones sin compromiso',
        'Próximos pasos claros'
      ]
    },
    directContact: {
      title: '¿Prefieres contacto directo?',
      email: {
        title: 'Email',
        address: 'hola@este.la',
        description: 'Respondemos todos los emails en 4 horas hábiles.\nRespuestas reales de personas reales que entienden tecnología.'
      },
      phone: {
        title: 'Teléfono',
        number: '+598 2 XXX XXXX',
        description: 'Lunes - Viernes: 9:00 - 18:00 UYT\nSoporte de emergencia: 24/7 para clientes existentes\n\nSí, realmente contestamos el teléfono.'
      },
      whatsapp: {
        title: 'WhatsApp',
        number: '+598 9X XXX XXX',
        description: 'Para preguntas rápidas y asuntos urgentes.\nRespuesta garantizada en horario laboral.'
      }
    },
    location: {
      title: 'Visítanos',
      address: ['Estela', '[Dirección]', '[Barrio]', 'Montevideo, Punta del Este, Uruguay', 'CP XXXXX'],
      mapPlaceholder: '[Mapa Interactivo]',
      amenities: ['Estacionamiento disponible', 'Entrada accesible', 'Café siempre listo']
    },
    existingClients: {
      title: 'Para Clientes Existentes',
      portal: {
        title: 'Portal de Soporte',
        button: 'Acceder al Portal →',
        description: 'Enviar tickets, ver documentación, verificar estado del sistema'
      },
      emergency: {
        title: 'Soporte de Emergencia',
        number: '+598 9X XXX XXX',
        description: '24/7 para incidentes críticos\nLínea directa con ingeniero de guardia'
      }
    },
    notReady: {
      title: '¿No estás listo para hablar?',
      subtitle: 'Está bien. Las buenas decisiones toman tiempo.',
      links: [
        { href: '/method', label: 'Nuestro Método' },
        { href: '/company/work', label: 'Nuestro Trabajo' },
        { href: '/company/team', label: 'Nuestro Equipo' }
      ],
      closing: ['La primera conversación siempre es gratis.', 'El café también.']
    }
  }
}

const inputClassName = 'w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function FormField({ label, name, type = 'text', value, onChange, required }: FormFieldProps): React.JSX.Element {
  return (
    <div>
      <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClassName}
      />
    </div>
  )
}

interface SelectFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string
  options: Array<{ value: string; label: string }>
}

function SelectField({ label, name, value, onChange, placeholder, options }: SelectFieldProps): React.JSX.Element {
  return (
    <div>
      <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  size?: 'lg' | 'md' | 'sm'
  centered?: boolean
  underlineWidth?: string
}

function SectionHeader({ title, size = 'lg', centered, underlineWidth = '200px' }: SectionHeaderProps): React.JSX.Element {
  const sizeClasses = {
    lg: 'text-2xl',
    md: 'text-lg',
    sm: 'text-base'
  }
  return (
    <>
      <h2 className={`text-[var(--content-raise-p3)] ${sizeClasses[size]} font-medium mb-2 ${centered ? 'text-center' : ''}`}>
        {title}
      </h2>
      <div className={`h-[1px] w-[${underlineWidth}] border-b border-[var(--stroke-default-p3)] mb-6 ${centered ? 'mx-auto' : ''}`} style={{ width: underlineWidth }} />
    </>
  )
}

function Divider(): React.JSX.Element {
  return <div className="h-[1px] w-full border-b border-[var(--stroke-default-p3)] my-16" />
}

interface ContactCardProps {
  title: string
  link: { href: string; text: string; type?: 'email' | 'tel' | 'external' }
  description: string
}

function ContactCard({ title, link, description }: ContactCardProps): React.JSX.Element {
  const href = link.type === 'email' ? `mailto:${link.href}` :
               link.type === 'tel' ? `tel:${link.href.replace(/\s/g, '')}` :
               link.href
  return (
    <div>
      <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">{title}</h3>
      <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4" />
      <a href={href} className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)] font-medium text-lg">
        {link.text}
      </a>
      <p className="text-[var(--content-secondary-p3)] mt-4 text-sm whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}

export function ContactSection(): React.JSX.Element {
  const { language } = useLanguage()
  const t = content[language]

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    infrastructureSize: '',
    primaryChallenge: '',
    howDidYouHear: '',
    message: ''
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="mt-10 min-[1100px]:mt-24">
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto flex max-w-[1200px] flex-col items-center">
          <div className="mb-4 min-[1000px]:mb-8 text-center">
            <span className="text-[var(--content-tertiary-p3)] text-sm tracking-wider uppercase font-[GT_America_Mono,monospace]">
              {t.breadcrumb}
            </span>
          </div>

          <h1 className="text-balance m-0 text-[var(--content-raise-p3)] text-4xl min-[1000px]:text-[3.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[2.625rem] min-[1000px]:leading-[3.625rem]">
            {t.title}
          </h1>
          <p className="text-center text-[var(--content-secondary-p3)] text-lg mt-4 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="my-6 min-[800px]:my-10">
          <div className="h-[1px] w-full border-b border-[var(--stroke-default-p3)]" />
        </div>
      </div>

      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <SectionHeader title={t.form.title} />
              <p className="text-[var(--content-secondary-p3)] mb-8">
                {t.form.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField label={t.form.fields.name} name="name" value={formData.name} onChange={handleInputChange} required />
                <FormField label={t.form.fields.company} name="company" value={formData.company} onChange={handleInputChange} required />
                <FormField label={t.form.fields.email} name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                <FormField label={t.form.fields.phone} name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />

                <SelectField
                  label={t.form.fields.infrastructureSize}
                  name="infrastructureSize"
                  value={formData.infrastructureSize}
                  onChange={handleInputChange}
                  placeholder={t.form.placeholders.selectSize}
                  options={t.form.options.infrastructureSize}
                />

                <SelectField
                  label={t.form.fields.primaryChallenge}
                  name="primaryChallenge"
                  value={formData.primaryChallenge}
                  onChange={handleInputChange}
                  placeholder={t.form.placeholders.selectChallenge}
                  options={t.form.options.primaryChallenge}
                />

                <SelectField
                  label={t.form.fields.howDidYouHear}
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  placeholder={t.form.placeholders.selectSource}
                  options={t.form.options.howDidYouHear}
                />

                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    {t.form.fields.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.form.placeholders.message}
                    rows={4}
                    className={`${inputClassName} resize-vertical`}
                  />
                </div>

                <div className="flex flex-col gap-2 text-center">
                  <button
                    type="submit"
                    className="px-3 items-center text-[var(--content-secondary-p3)] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)] w-full"
                  >
                    {t.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Timeline */}
            <div>
              <SectionHeader title={t.timeline.title} />

              <div className="space-y-6">
                {t.timeline.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="text-[var(--content-raise-p3)] font-medium mb-2">{step.time}</h3>
                    <p className="text-[var(--content-secondary-p3)]">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-[var(--content-raise-p3)] font-medium mb-4">{t.timeline.consultationTitle}</h3>
                <ul className="text-[var(--content-secondary-p3)] space-y-2 list-none">
                  {t.timeline.consultationItems.map((item, i) => (
                    <li key={i}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          {/* Direct Contact */}
          <section className="mb-16">
            <SectionHeader title={t.directContact.title} underlineWidth="200px" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContactCard
                title={t.directContact.email.title}
                link={{ href: t.directContact.email.address, text: t.directContact.email.address, type: 'email' }}
                description={t.directContact.email.description}
              />
              <ContactCard
                title={t.directContact.phone.title}
                link={{ href: '+59822xxxxxx', text: t.directContact.phone.number, type: 'tel' }}
                description={t.directContact.phone.description}
              />
              <ContactCard
                title={t.directContact.whatsapp.title}
                link={{ href: 'https://wa.me/5989xxxxxxx', text: t.directContact.whatsapp.number, type: 'external' }}
                description={t.directContact.whatsapp.description}
              />
            </div>
          </section>

          <Divider />

          {/* Location & Existing Clients */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Location */}
              <div>
                <SectionHeader title={t.location.title} />

                <div className="text-[var(--content-secondary-p3)] space-y-1 mb-6">
                  {t.location.address.map((line, i) => (
                    <p key={i} className={i === 0 ? 'text-[var(--content-raise-p3)] font-medium' : ''}>
                      {line}
                    </p>
                  ))}
                </div>

                <div className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg p-6 mb-6">
                  <p className="text-[var(--content-secondary-p3)] text-center">
                    {t.location.mapPlaceholder}
                  </p>
                </div>

                <div className="text-[var(--content-secondary-p3)] text-sm space-y-1">
                  {t.location.amenities.map((amenity, i) => (
                    <p key={i}>{amenity}</p>
                  ))}
                </div>
              </div>

              {/* Existing Clients */}
              <div>
                <SectionHeader title={t.existingClients.title} />

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">{t.existingClients.portal.title}</h3>
                    <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4" />
                    <a href="#" className="inline-block bg-[var(--content-accent-p3)] text-white py-2 px-4 rounded-lg font-medium hover:bg-[var(--content-accent-secondary-p3)] transition-colors">
                      {t.existingClients.portal.button}
                    </a>
                    <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                      {t.existingClients.portal.description}
                    </p>
                  </div>

                  <ContactCard
                    title={t.existingClients.emergency.title}
                    link={{ href: '+5989xxxxxxx', text: t.existingClients.emergency.number, type: 'tel' }}
                    description={t.existingClients.emergency.description}
                  />
                </div>
              </div>

            </div>
          </section>

          <Divider />

          {/* Not Ready Section */}
          <section className="mb-16">
            <div className="text-center">
              <SectionHeader title={t.notReady.title} centered />

              <p className="text-[var(--content-secondary-p3)] mb-8">
                {t.notReady.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                {t.notReady.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] text-[var(--content-raise-p3)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-secondary-p3)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="h-[1px] w-full border-b border-[var(--stroke-default-p3)] my-8" />

              <div className="space-y-4">
                {t.notReady.closing.map((line, i) => (
                  <p key={i} className="text-[var(--content-secondary-p3)]">{line}</p>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
