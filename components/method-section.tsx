'use client'

import { Link } from 'next-view-transitions'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    badge: "Estela / Method",
    title: "The Estela Method",
    subtitle: "Technology Integration with Soul",
    intro1: "There is a lost art of building technology systems that actually work for people.",
    intro2: "To bring back the human element, these are the foundational ideas that guide everything we do at Estela.",
    sections: {
      introduction: "Introduction",
      principles: "Principles",
      implementation: "Implementation",
      practices: "Practices",
      philosophy: "Philosophy"
    },
    introItems: [
      { title: 'The Art of Translation', href: '/method/introduction', number: '1.1' }
    ],
    principlesItems: [
      { title: 'Small Teams, Deep Impact', href: '/method/principles#1', number: '2.1' },
      { title: 'Technology Serves People', href: '/method/principles#2', number: '2.2' },
      { title: 'Built to Last', href: '/method/principles#3', number: '2.3' },
      { title: 'Radical Transparency', href: '/method/principles#4', number: '2.4' },
      { title: 'The Beauty of Simplicity', href: '/method/principles#5', number: '2.5' }
    ],
    implementationItems: [
      { title: 'Understanding Phase', href: '/method/implementation#understanding', number: '3.1' },
      { title: 'Architecture Phase', href: '/method/implementation#architecture', number: '3.2' },
      { title: 'Implementation Phase', href: '/method/implementation#implementation', number: '3.3' },
      { title: 'Evolution Phase', href: '/method/implementation#evolution', number: '3.4' }
    ],
    practicesItems: [
      { title: 'The 24-Hour Rule', href: '/method/practices#24hour', number: '4.1' },
      { title: 'Documentation as Art', href: '/method/practices#documentation', number: '4.2' },
      { title: 'The Weekly Pulse', href: '/method/practices#weekly', number: '4.3' },
      { title: 'Vendor Relationships', href: '/method/practices#vendors', number: '4.4' },
      { title: 'Knowledge Transfer', href: '/method/practices#knowledge', number: '4.5' }
    ],
    philosophyItems: [
      { title: 'The Hexagon Principle', href: '/method/philosophy#hexagon', number: '5.1' },
      { title: 'Learning from History', href: '/method/philosophy#history', number: '5.2' },
      { title: 'The Art Connection', href: '/method/philosophy#art', number: '5.3' },
      { title: 'Results, Not Reports', href: '/method/philosophy#results', number: '5.4' }
    ]
  },
  es: {
    badge: "Estela / Método",
    title: "El Método Estela",
    subtitle: "",
    intro1: "En algún momento, la tecnología dejó de servir a las personas para exigir que las personas la sirvieran.",
    intro2: "Estos capítulos recogen lo que guía nuestro trabajo.",
    sections: {
      introduction: "Introducción",
      principles: "Principios",
      implementation: "Implementación",
      practices: "Prácticas",
      philosophy: "Filosofía"
    },
    introItems: [
      { title: 'El Arte de la Traducción', href: '/method/introduction', number: '1.1' }
    ],
    principlesItems: [
      { title: 'Seis', href: '/method/principles#1', number: '2.1' },
      { title: 'Tecnología con propósito', href: '/method/principles#2', number: '2.2' },
      { title: 'Sin parches', href: '/method/principles#3', number: '2.3' },
      { title: 'Sin dependencias', href: '/method/principles#4', number: '2.4' },
      { title: 'Nada que sobre', href: '/method/principles#5', number: '2.5' }
    ],
    implementationItems: [
      { title: 'Entendimiento', href: '/method/implementation#understanding', number: '3.1' },
      { title: 'Arquitectura', href: '/method/implementation#architecture', number: '3.2' },
      { title: 'Implementación', href: '/method/implementation#implementation', number: '3.3' },
      { title: 'Evolución', href: '/method/implementation#evolution', number: '3.4' }
    ],
    practicesItems: [
      { title: 'Respuesta Inmediata', href: '/method/practices#24hour', number: '4.1' },
      { title: 'Claridad', href: '/method/practices#documentation', number: '4.2' },
      { title: 'Atención', href: '/method/practices#weekly', number: '4.3' },
      { title: 'Relaciones', href: '/method/practices#vendors', number: '4.4' },
      { title: 'Saber', href: '/method/practices#knowledge', number: '4.5' }
    ],
    philosophyItems: [
      { title: 'El Hexágono', href: '/method/philosophy#hexagon', number: '5.1' },
      { title: 'Aprendiendo de la Historia', href: '/method/philosophy#history', number: '5.2' },
      { title: 'La Conexión Artística', href: '/method/philosophy#art', number: '5.3' },
      { title: 'Resultados, No Informes', href: '/method/philosophy#results', number: '5.4' }
    ]
  }
}

export function MethodSection() {
  const { language } = useLanguage()
  const t = content[language]

  const pageStyles = {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    overflowX: 'hidden' as const
  }

  const heroTitleStyle = {
    fontSize: '3.25rem',
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    lineHeight: '3.625rem',
    letterSpacing: 'normal',
    color: 'var(--foreground)',
    margin: 0,
    marginBottom: '24px'
  }

  const heroSubtitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    lineHeight: '1.75rem',
    letterSpacing: 'normal',
    color: 'var(--foreground)',
    marginBottom: '24px'
  }

  const subtitleStyle = {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginTop: '16px',
    maxWidth: '640px',
    margin: '0 auto'
  }

  const dividerStyle = {
    height: '1px',
    backgroundColor: 'var(--border)',
    margin: '72px 0'
  }

  const sectionStyle = {
    marginBottom: '120px'
  }

  const sectionHeaderStyle = {
    fontSize: '0.8125rem',
    lineHeight: '1.5',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontWeight: '400',
    fontFamily: 'GT_America_Mono, monospace',
    color: 'var(--foreground)',
    marginBottom: '0px'
  }

  const sectionContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px'
  }

  const listStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    listStyle: 'none',
    gap: '6px',
    margin: '0',
    padding: '0'
  }

  const listItemStyle = {
    margin: '0'
  }

  const badgeStyle = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontFamily: 'GT_America_Mono, monospace',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  }

  const linkStyle = {
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '1.6',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'color 0.1s ease'
  }

  const numberStyle = {
    fontSize: '15px',
    fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
    color: 'inherit'
  }

  const renderItems = (items: Array<{ title: string; href: string; number: string }>) => (
    <ol style={listStyle}>
      {items.map((item) => (
        <li key={item.number} style={listItemStyle}>
          <Link
            href={item.href}
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--content-secondary-p3)' }}
          >
            <span>{item.title}</span>
            <span style={numberStyle}>{item.number}</span>
          </Link>
        </li>
      ))}
    </ol>
  )

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        <div style={badgeStyle}>{t.badge}</div>

        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>{t.title}</h1>
          <h2 style={heroSubtitleStyle}>{t.subtitle}</h2>

          <div style={dividerStyle} />

          <div style={{ marginBottom: '48px' }}>
            <p style={{ ...subtitleStyle, marginBottom: '24px' }}>{t.intro1}</p>
            <p style={subtitleStyle}>{t.intro2}</p>
          </div>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>{t.sections.introduction}</span>
            {renderItems(t.introItems)}
          </div>

          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>{t.sections.principles}</span>
            {renderItems(t.principlesItems)}
          </div>

          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>{t.sections.implementation}</span>
            {renderItems(t.implementationItems)}
          </div>

          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>{t.sections.practices}</span>
            {renderItems(t.practicesItems)}
          </div>

          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>{t.sections.philosophy}</span>
            {renderItems(t.philosophyItems)}
          </div>
        </div>
      </div>
    </div>
  )
}
