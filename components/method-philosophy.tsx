'use client'

import { useState, useEffect } from 'react'
import { Link } from 'next-view-transitions'
import HexagonalSlidingBars from '@/components/ui/hexagonal-sliding-bars'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    breadcrumb: { home: 'Estela', method: 'Method', current: 'Philosophy' },
    title: 'Our Philosophy',
    lead: 'The why behind the how.',
    hexagonTitle: '5.1 The Hexagon Principle',
    hexagonIntro: "Pythagoras devoted his life to numbers. Euclid, to shapes. We reached the hexagon by the shortest path: a headcount.",
    hexagonP1: "And since we mentioned Euclid...",
    historyTitle: '5.2 Learning from History',
    historyIntro: "Grace Hopper simplified computing. Euclid, geometry. We borrow from both.",
    historyP1: "Technology changes. Human nature doesn't.",
    hopperTitle: 'From Grace Hopper',
    hopperQuote: '"The most dangerous phrase in the language is \'we\'ve always done it this way.\'"',
    hopperText: "She invented the compiler because she hated repeating herself. So do we.",
    euclidTitle: 'From Euclid',
    euclidText: "From few axioms, infinite truths. That's how we build: from fundamentals.",
    bauhausTitle: 'From the Bauhaus Movement',
    bauhausText: "The useful can be beautiful. The beautiful, useful.",
    historyConclusion: "Great innovations connect what seemed disconnected.",
    artTitle: '5.3 The Art Connection',
    artIntro: "The Renaissance understood something: the whole matters as much as the detail.",
    artP1: "Art and technology: two ways of creating order.",
    artConclusion: "Art teaches you to see. Technology, to think.",
    resultsTitle: '5.4 Results, Not Reports',
    resultsIntro: "We measure success with one metric: Does your technology make your daily work better?",
    resultsP1: "The difference isn't in the specs. It's in never having to think about them.",
    resultsConclusion: "That's the only result that matters.",
    resultsCoda: "Hexagons, history, art, results. Scattered in appearance. Coherent in practice.",
    prevLink: '← Previous: Practices',
    backLink: 'Back to Method Overview'
  },
  es: {
    breadcrumb: { home: 'Estela', method: 'Método', current: 'Filosofía' },
    title: 'Nuestra Filosofía',
    lead: 'El porqué detrás del cómo.',
    hexagonTitle: '5.1 El Hexágono',
    hexagonIntro: "Pitágoras dedicó su vida a los números. Euclides, a las formas. Nosotros llegamos al hexágono por el camino más corto: contarnos.",
    hexagonP1: "Y ya que mencionamos a Euclides...",
    historyTitle: '5.2 Aprendiendo de la Historia',
    historyIntro: "Grace Hopper simplificó la computación. Euclides, la geometría. Nosotros tomamos prestado de los dos.",
    historyP1: "La tecnología cambia. La naturaleza humana, no.",
    hopperTitle: 'De Grace Hopper',
    hopperQuote: '"La frase más peligrosa del lenguaje es \'siempre lo hemos hecho así\'."',
    hopperText: "Inventó el compiler porque odiaba repetirse. Nosotros también.",
    euclidTitle: 'De Euclides',
    euclidText: "De pocos axiomas, infinitas verdades. Así construimos: desde lo fundamental.",
    bauhausTitle: 'Del Movimiento Bauhaus',
    bauhausText: "Lo útil puede ser bello. Lo bello, útil.",
    historyConclusion: "Las grandes innovaciones conectan lo que parecía desconectado.",
    artTitle: '5.3 La Conexión Artística',
    artIntro: "El Renacimiento entendió algo: el todo importa tanto como el detalle.",
    artP1: "Arte y tecnología: dos formas de crear orden.",
    artConclusion: "El arte enseña a ver. La tecnología, a pensar.",
    resultsTitle: '5.4 Resultados, No Informes',
    resultsIntro: "Medimos el éxito con una sola métrica: ¿La tecnología hace mejor su trabajo diario?",
    resultsP1: "La diferencia no está en las especificaciones. Está en que nunca tengas que pensar en ellas.",
    resultsConclusion: "Ese es el único resultado que importa.",
    resultsCoda: "Hexágonos, historia, arte, resultados. Disperso en apariencia. Coherente en práctica.",
    prevLink: '← Anterior: Prácticas',
    backLink: 'Volver a Vista General del Método'
  }
}

const styles = {
  page: {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    overflowX: 'hidden' as const
  },
  container: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '120px 32px'
  },
  divider: {
    height: '1px',
    marginBottom: '48px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '400',
    lineHeight: '2.75rem',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--foreground)',
    margin: 0,
    marginBottom: '24px'
  },
  lead: {
    fontSize: '19px',
    fontWeight: '400',
    lineHeight: '30.4px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '48px'
  },
  paragraph: {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  },
  sectionHeading: {
    fontSize: '1.5rem',
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--foreground)',
    marginBottom: '24px',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '8px'
  },
  subsectionTitle: {
    fontSize: '17px',
    fontWeight: '500',
    lineHeight: '27.2px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--foreground)',
    marginBottom: '8px'
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--content-secondary-p3)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    transition: 'color 0.2s'
  }
}

interface SubsectionProps {
  title: string
  children: React.ReactNode
}

function Subsection({ title, children }: SubsectionProps): React.ReactElement {
  return (
    <div style={{ marginBottom: '16px' }}>
      <h3 style={styles.subsectionTitle}>{title}</h3>
      {children}
    </div>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps): React.ReactElement {
  return (
    <Link
      href={href}
      style={styles.navLink}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
    >
      {children}
    </Link>
  )
}

export function MethodPhilosophy(): React.ReactElement {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const t = content[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = mounted && resolvedTheme === 'light'

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Breadcrumb
          items={[
            { label: t.breadcrumb.home, href: '/' },
            { label: t.breadcrumb.method, href: '/method' },
            { label: t.breadcrumb.current }
          ]}
        />

        <div style={styles.divider} />

        {/* Section Number */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--step-indicator-p3)',
            color: '#fff',
            fontSize: '1.125rem',
            fontFamily: 'GT_America_Mono, monospace'
          }}>
            5
          </div>
        </div>

        <h1 style={styles.title}>{t.title}</h1>

        <div style={styles.divider} />

        <p style={styles.lead}>{t.lead}</p>

        {/* Hexagonal Sliding Bars Animation */}
        <div style={{
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: isLight ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <HexagonalSlidingBars
            backgroundColor={isLight ? '#f5f5f5' : '#3d3019'}
            lineColor={isLight ? '#666666' : '#f5b944'}
            fillColor={isLight ? '#666666' : '#f5b944'}
            containerBackgroundColor={isLight ? '#f5f5f5' : '#F0EEE6'}
          />
        </div>

        <div style={styles.divider} />

        {/* 5.1 The Hexagon Principle */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={styles.sectionHeading}>{t.hexagonTitle}</h2>
          <p style={styles.paragraph}>{t.hexagonIntro}</p>
          <p style={styles.paragraph}>{t.hexagonP1}</p>
        </section>

        <div style={styles.divider} />

        {/* 5.2 Learning from History */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={styles.sectionHeading}>{t.historyTitle}</h2>
          <p style={styles.paragraph}>{t.historyIntro}</p>
          <p style={styles.paragraph}>{t.historyP1}</p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <Subsection title={t.hopperTitle}>
              <p style={{ ...styles.paragraph, fontStyle: 'italic' }}>{t.hopperQuote}</p>
              <p style={styles.paragraph}>{t.hopperText}</p>
            </Subsection>

            <Subsection title={t.euclidTitle}>
              <p style={styles.paragraph}>{t.euclidText}</p>
            </Subsection>

            <Subsection title={t.bauhausTitle}>
              <p style={styles.paragraph}>{t.bauhausText}</p>
            </Subsection>
          </div>

          <p style={styles.paragraph}>{t.historyConclusion}</p>
        </section>

        <div style={styles.divider} />

        {/* 5.3 The Art Connection */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={styles.sectionHeading}>{t.artTitle}</h2>
          <p style={styles.paragraph}>{t.artIntro}</p>
          <p style={styles.paragraph}>{t.artP1}</p>
          <p style={styles.paragraph}>{t.artConclusion}</p>
        </section>

        <div style={styles.divider} />

        {/* 5.4 Results, Not Reports */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={styles.sectionHeading}>{t.resultsTitle}</h2>
          <p style={styles.paragraph}>{t.resultsIntro}</p>
          <p style={styles.paragraph}>{t.resultsP1}</p>
          <p style={{ ...styles.paragraph, fontStyle: 'italic' }}>{t.resultsConclusion}</p>
          <p style={styles.paragraph}>{t.resultsCoda}</p>
        </section>

        <div style={styles.divider} />

        {/* Navigation */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <NavLink href="/method/practices">{t.prevLink}</NavLink>
          <NavLink href="/method">{t.backLink}</NavLink>
        </div>
      </div>
    </div>
  )
}
