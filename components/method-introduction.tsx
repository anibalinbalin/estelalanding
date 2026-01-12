'use client'

import { Link } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'

const ReactbitsDither = dynamic(() => import('@/components/ui/reactbits-dither'), { ssr: false })

export function MethodIntroduction(): React.ReactElement {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const content = {
    en: {
      title: 'The Art of Translation',
      lead: 'The art of true interpretation lies in making the complex clear. This is our practice: we translate the intricate world of technology into human-centric solutions.',
      lostArt: {
        title: 'The Lost Art',
        paragraphs: [
          "In Greek mythology, Hermes served as the messenger between the divine and mortal realms. He didn't just carry messages; he translated meaning across worlds that couldn't understand each other.",
          "Today's technology landscape suffers from the same divide. On one side: servers, protocols, frameworks, and endless acronyms. On the other: people trying to run businesses, serve customers, and make a difference.",
          "Most IT companies speak only technology. They deliver solutions that work for machines but confound humans. They optimize for specifications, not experiences.",
          "We chose a different path."
        ]
      },
      translationImperative: {
        title: 'The Translation Imperative',
        paragraphs: [
          "The best infrastructure is like a good translation: the reader forgets they're reading one. If they think about the translator, the translator failed.",
          "Consider the editor who needs to open massive After Effects files. He doesn't care about the NAS RAID configuration. He just wants to open files fast and meet deadlines.",
          "Translation is disappearing. If the message arrives clear, no one remembers the messenger."
        ]
      },
      philosophy: {
        title: 'Our Translation Philosophy',
        intro: 'We practice translation at every level:',
        items: [
          { title: 'Technical to Practical', description: 'We transform "10Gb fiber backbone with link aggregation" into "your files open in seconds, not minutes."' },
          { title: 'Complex to Simple', description: 'We convert intricate network diagrams into clear benefits: "work from anywhere, securely."' },
          { title: 'Problem to Solution', description: 'We translate "our system keeps crashing" into "here\'s how we ensure that never happens again."' },
          { title: 'Present to Future', description: 'We interpret current limitations as tomorrow\'s capabilities, building systems that grow with you.' }
        ]
      },
      methodEmerges: {
        title: 'The Method Emerges',
        intro: "Our method isn't about following trends or implementing the latest tools. It's about understanding what actually matters: your people, your work, your growth.",
        listIntro: 'This method emerged from:',
        items: [
          { title: '50+ successful implementations', description: 'Each one teaching us something new about translation' },
          { title: 'Countless hours of listening', description: 'Before we speak technology, we think alongside you' },
          { title: 'A belief that small teams build better', description: 'Fewer translators mean clearer communication' },
          { title: 'The intersection of art and engineering', description: 'Because the best systems balance beauty and function' }
        ]
      },
      whatThisMeans: {
        title: 'What this means for the client',
        paragraphs: [
          "We don't sell technology. Technology is the means, not the product. The product is your problem disappearing.",
          "We don't install servers. We create infrastructure that accelerates your work —and that you can happily ignore because it works."
        ]
      },
      journeyAhead: {
        title: 'The Journey Ahead',
        intro: "In the following chapters, we'll explore how this translation philosophy shapes everything we do:",
        items: [
          'Our Principles that ensure we never lose sight of the human element.',
          'Our Implementation approach that builds without breaking what works.',
          'Our Practices that maintain excellence day after day.',
          'Our Philosophy that connects art to modern infrastructure.'
        ],
        conclusion: 'Each element reflects our core belief: technology should adapt to people, not the other way around.'
      },
      navigation: { back: '← Back to Method Overview', next: 'Next: Principles →' }
    },
    es: {
      title: 'El Arte de la Traducción',
      lead: 'Hacer claro lo complejo es un arte. Hacer complejo lo claro, en cambio, cualquiera puede. Nosotros elegimos lo primero.',
      lostArt: {
        title: 'Un Arte Perdido',
        paragraphs: [
          "En la mitología griega, Hermes servía como mensajero entre los dioses y los mortales. No solo entregaba mensajes; los traducía. Sin él, Zeus habría seguido gritando en griego antiguo. Los humanos habrían asentido igual —uno no contradice al que tiene los rayos.",
          "Hoy Olympus fabrica cámaras y el único rayo es el flash, pero la confusión persiste. De un lado: técnicos hablando en acrónimos. Del otro: el resto. La mayoría de las empresas de IT solo hablan técnico. Nosotros también —pero solo cuando es estrictamente necesario."
        ]
      },
      translationImperative: {
        title: 'El Imperativo de Traducir',
        paragraphs: [
          "La mejor infraestructura es como una buena traducción: el lector olvida que está leyendo una. Si piensa en el traductor, el traductor falló.",
          "Considere al editor que necesita abrir archivos de After pesadísimos. No le interesa la configuración RAID del NAS. Solo le interesa abrir los archivos rápido y cumplir plazos.",
          "Traducir es desaparecer. Si el mensaje llega claro, nadie recuerda al mensajero."
        ]
      },
      philosophy: null,
      methodEmerges: null,
      whatThisMeans: {
        title: 'Lo que esto significa para el cliente',
        paragraphs: [
          "No vendemos tecnología. La tecnología es el medio, no el producto. El producto es que su problema desaparezca.",
          "No instalamos servidores. Creamos infraestructura que acelera su trabajo —y que usted puede ignorar tranquilamente porque funciona."
        ]
      },
      journeyAhead: {
        title: null,
        intro: "Lo que sigue es el cómo. Esto fue el porqué.",
        items: null,
        conclusion: null
      },
      navigation: { back: '← Volver a la Vista General del Método', next: 'Siguiente: Principios →' }
    }
  }

  const t = content[language] || content.en

  const fontFamily = 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'

  const styles = {
    page: {
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      overflowX: 'hidden' as const
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '400',
      lineHeight: '2.75rem',
      fontFamily,
      color: 'var(--foreground)',
      margin: 0,
      marginBottom: '24px'
    },
    divider: { height: '1px', marginBottom: '48px' },
    lead: {
      fontSize: '19px',
      fontWeight: '400',
      lineHeight: '30.4px',
      fontFamily,
      color: 'var(--content-secondary-p3)',
      marginBottom: '48px'
    },
    paragraph: {
      fontSize: '17px',
      fontWeight: '400',
      lineHeight: '27.2px',
      fontFamily,
      color: 'var(--content-secondary-p3)',
      marginBottom: '24px'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '400',
      fontFamily,
      color: 'var(--foreground)',
      marginBottom: '24px',
      borderBottom: '1px solid var(--border)',
      paddingBottom: '8px'
    },
    list: {
      fontSize: '17px',
      fontWeight: '400',
      lineHeight: '27.2px',
      fontFamily,
      color: 'var(--content-secondary-p3)',
      marginLeft: '24px',
      marginBottom: '48px'
    }
  }

  const isLight = mounted && resolvedTheme === 'light'

  return (
    <div style={styles.page}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        <Breadcrumb
          items={[
            { label: 'Estela', href: '/' },
            { label: language === 'es' ? 'Método' : 'Method', href: '/method' },
            { label: language === 'es' ? 'Introducción' : 'Introduction' }
          ]}
        />

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
            1
          </div>
        </div>

        <h1 style={styles.title}>{t.title}</h1>
        <div style={styles.divider} />
        <p style={styles.lead}>{t.lead}</p>

        <div style={{
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: isLight ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'var(--ascii-background-alt-p3)',
          boxSizing: 'border-box'
        }}>
          <ReactbitsDither
            waveColor={isLight ? [0.6, 0.6, 0.6] : [0.961, 0.725, 0.267]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            waveAmplitude={0.2}
            waveFrequency={2}
            waveSpeed={0.02}
          />
        </div>

        <div style={styles.divider} />

        <section style={{ marginBottom: '48px' }}>
          <h2 style={styles.sectionTitle}>{t.lostArt.title}</h2>
          {t.lostArt.paragraphs.map((paragraph, index) => (
            <p key={index} style={styles.paragraph}>{paragraph}</p>
          ))}
        </section>

        {t.translationImperative.title && (
          <>
            <div style={styles.divider} />
            <section style={{ marginBottom: '48px' }}>
              <h2 style={styles.sectionTitle}>{t.translationImperative.title}</h2>
              {t.translationImperative.paragraphs.map((paragraph, index) => (
                <p key={index} style={styles.paragraph}>{paragraph}</p>
              ))}
            </section>
          </>
        )}

        {t.philosophy && (
          <>
            <div style={styles.divider} />
            <section style={{ marginBottom: '48px' }}>
              <h2 style={styles.sectionTitle}>{t.philosophy.title}</h2>
              <p style={styles.paragraph}>{t.philosophy.intro}</p>
              <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                {t.philosophy.items.map((item, index) => (
                  <div key={index} style={{ marginBottom: '16px' }}>
                    <h3 style={{ ...styles.paragraph, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={styles.paragraph}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {t.methodEmerges && (
          <>
            <div style={styles.divider} />
            <section style={{ marginBottom: '48px' }}>
              <h2 style={styles.sectionTitle}>{t.methodEmerges.title}</h2>
              <p style={styles.paragraph}>{t.methodEmerges.intro}</p>
              <p style={styles.paragraph}>{t.methodEmerges.listIntro}</p>
              <ul style={styles.list}>
                {t.methodEmerges.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <strong>{item.title}</strong><br />
                    <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <div style={styles.divider} />
          </>
        )}

        {t.whatThisMeans.title && (
          <>
            <section style={{ marginBottom: '48px' }}>
              <h2 style={styles.sectionTitle}>{t.whatThisMeans.title}</h2>
              {t.whatThisMeans.paragraphs.map((paragraph, index) => (
                <p key={index} style={styles.paragraph}>{paragraph}</p>
              ))}
            </section>
            <div style={styles.divider} />
          </>
        )}

        {t.journeyAhead.title && (
          <section style={{ marginBottom: '48px' }}>
            <h2 style={styles.sectionTitle}>{t.journeyAhead.title}</h2>
            <p style={styles.paragraph}>{t.journeyAhead.intro}</p>
            {t.journeyAhead.items?.map((item, index) => (
              <p key={index} style={styles.paragraph} dangerouslySetInnerHTML={{
                __html: item.replace(/Principles|Implementation|Practices|Philosophy/g, '<strong>$&</strong>')
              }} />
            ))}
            {t.journeyAhead.conclusion && (
              <p style={styles.paragraph} dangerouslySetInnerHTML={{
                __html: t.journeyAhead.conclusion.replace(
                  /technology should adapt to people, not the other way around/,
                  '<strong>$&</strong>'
                )
              }} />
            )}
          </section>
        )}

        {!t.journeyAhead.title && t.journeyAhead.intro && (
          <section style={{ marginBottom: '48px' }}>
            <p style={styles.paragraph}>{t.journeyAhead.intro}</p>
          </section>
        )}

        <div style={styles.divider} />

        <nav style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <Link
            href="/method"
            className="nav-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily,
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.navigation.back}
          </Link>
          <Link
            href="/method/principles"
            className="nav-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily,
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.navigation.next}
          </Link>
        </nav>
      </div>
    </div>
  )
}
