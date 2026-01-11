'use client'

import { Link } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import { usePathname } from 'next/navigation'

const ReactbitsDither = dynamic(() => import('@/components/ui/reactbits-dither'), { ssr: false })

export function MethodIntroduction() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const content = {
    en: {
      title: 'The Art of Translation',
      lead: 'The art of true interpretation lies in making the complex clear. This is our practice: we translate the intricate world of technology into human-centric solutions.',
      sections: {
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
            "After 13 years of building systems, we've learned that the best infrastructure is invisible. It doesn't announce itself with complexity or demand attention through failure. It just works.",
            "This invisibility isn't accidental. It's the result of continuous translation between what technology can do and what people actually need.",
            "Consider the architect who needs to share massive CAD files. She doesn't care about RAID configurations or IOPS metrics. She cares about opening files quickly and meeting deadlines.",
            "Or the medical laboratory that must maintain perfect uptime. They don't need lectures on virtualization. They need systems that never fail when lives depend on them.",
            "Translation means understanding both languages fluently—the language of technology and the language of human need—then building bridges between them."
          ]
        },
        philosophy: {
          title: 'Our Translation Philosophy',
          intro: 'We practice translation at every level:',
          items: [
            {
              title: 'Technical to Practical',
              description: 'We transform "10Gb fiber backbone with link aggregation" into "your files open in seconds, not minutes."'
            },
            {
              title: 'Complex to Simple',
              description: 'We convert intricate network diagrams into clear benefits: "work from anywhere, securely."'
            },
            {
              title: 'Problem to Solution',
              description: 'We translate "our system keeps crashing" into "here\'s how we ensure that never happens again."'
            },
            {
              title: 'Present to Future',
              description: 'We interpret current limitations as tomorrow\'s capabilities, building systems that grow with you.'
            }
          ]
        },
        methodEmerges: {
          title: 'The Method Emerges',
          intro: "Our method isn't about following trends or implementing the latest tools. It's about understanding what actually matters: your people, your work, your growth.",
          listIntro: 'This method emerged from:',
          items: [
            {
              title: '50+ successful implementations',
              description: 'Each one teaching us something new about translation'
            },
            {
              title: 'Countless hours of listening',
              description: 'Before we speak technology, we think alongside you'
            },
            {
              title: 'A belief that small teams build better',
              description: 'Fewer translators mean clearer communication'
            },
            {
              title: 'The intersection of art and engineering',
              description: 'Because the best systems balance beauty and function'
            }
          ]
        },
        whatThisMeans: {
          title: 'What This Means for You',
          paragraphs: [
            "When you work with Estela, you're not getting technology vendors who happen to work with businesses. You're getting translators who ensure technology serves your mission.",
            "We don't just install servers. We create infrastructure that accelerates your work.",
            "We don't just configure networks. We connect people and possibilities.",
            "We don't just provide support. We ensure you're never lost in translation."
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
        }
      },
      navigation: {
        back: '← Back to Method Overview',
        next: 'Next: Principles →'
      }
    },
    es: {
      title: 'El Arte de la Traducción',
      lead: 'Hacer claro lo complejo es un arte. Hacer complejo lo claro, en cambio, cualquiera puede. Nosotros elegimos lo primero.',
      sections: {
        lostArt: {
          title: 'Un Arte Perdido',
          paragraphs: [
            "En la mitología griega, Hermes servía como mensajero entre los dioses y los mortales. No solo entregaba mensajes; los traducía. Sin él, Zeus habría seguido gritando en griego antiguo mientras los humanos asentían sin entender nada. Como en una reunión de TI promedio.",
            "El panorama tecnológico actual padece la misma división. De un lado: servidores, protocolos y siglas. Del otro: personas intentando trabajar.",
            "La mayoría de las empresas de TI solo hablan el primer idioma.",
            "Nosotros hablamos ambos."
          ]
        },
        translationImperative: {
          title: '',
          paragraphs: []
        },
        philosophy: {
          title: '',
          intro: '',
          items: []
        },
        methodEmerges: {
          title: '',
          intro: '',
          listIntro: '',
          items: []
        },
        whatThisMeans: {
          title: 'Lo Que Esto Significa para Usted',
          paragraphs: [
            "Cuando trabaja con Estela, no está contratando proveedores de tecnología que casualmente trabajan con empresas. Está eligiendo traductores que aseguran que la tecnología sirva a su misión.",
            "No sólo instalamos servidores. Creamos infraestructura que acelera su trabajo.",
            "No sólo configuramos redes. Conectamos personas y posibilidades.",
            "No sólo brindamos soporte. Nos aseguramos de que nunca se pierda en la traducción."
          ]
        },
        journeyAhead: {
          title: '',
          intro: "Lo que sigue es el cómo. Esto fue el porqué.",
          items: [],
          conclusion: ''
        }
      },
      navigation: {
        back: '← Volver a la Vista General del Método',
        next: 'Siguiente: Principios →'
      }
    }
  }

  const t = content[language] || content.en
  
  const pageStyles = {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    overflowX: 'hidden' as const
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

  const titleStyle = {
    fontSize: '2.5rem', // 40px - coherent with main site
    fontWeight: '400',
    lineHeight: '2.75rem',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--foreground)',
    margin: 0,
    marginBottom: '24px'
  }

  const dividerStyle = {
    height: '1px',
    marginBottom: '48px'
  }

  const leadStyle = {
    fontSize: '19px',
    fontWeight: '400',
    lineHeight: '30.4px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '48px'
  }

  const paragraphStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  }

  const listStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginLeft: '24px',
    marginBottom: '48px'
  }

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Estela', href: '/' },
            { label: language === 'es' ? 'Método' : 'Method', href: '/method' },
            { label: language === 'es' ? 'Introducción' : 'Introduction' }
          ]} 
        />

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
            1
          </div>
        </div>

        {/* Title */}
        <h1 style={titleStyle}>
          {t.title}
        </h1>
        
        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          {t.lead}
        </p>

        {/* Dither Wave Effect */}
        <div style={{ 
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: mounted && resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'var(--ascii-background-alt-p3)',
          boxSizing: 'border-box'
        }}>
          <ReactbitsDither
            waveColor={mounted && resolvedTheme === 'light' ? [0.6, 0.6, 0.6] : [0.961, 0.725, 0.267]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            waveAmplitude={0.2}
            waveFrequency={2}
            waveSpeed={0.02}
          />
        </div>

        <div style={dividerStyle} />

        {/* The Lost Art Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)', 
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.sections.lostArt.title}
          </h2>
          
          {t.sections.lostArt.paragraphs.map((paragraph, index) => (
            <p key={index} style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* The Translation Imperative Section - Only show if has content */}
        {t.sections.translationImperative.title && (
          <>
            <div style={dividerStyle} />
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {t.sections.translationImperative.title}
              </h2>

              {t.sections.translationImperative.paragraphs.map((paragraph, index) => (
                <p key={index} style={paragraphStyle}>
                  {index === t.sections.translationImperative.paragraphs.length - 1 ? (
                    <span dangerouslySetInnerHTML={{ __html: paragraph.replace('Translation means understanding both languages fluently', '<strong>Translation means understanding both languages fluently</strong>').replace('Traducir significa entender ambos lenguajes con fluidez', '<strong>Traducir significa entender ambos lenguajes con fluidez</strong>') }} />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </section>
          </>
        )}

        {/* Our Translation Philosophy Section - Only show if has content */}
        {t.sections.philosophy.title && (
          <>
            <div style={dividerStyle} />
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {t.sections.philosophy.title}
              </h2>

              <p style={paragraphStyle}>
                {t.sections.philosophy.intro}
              </p>

              <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                {t.sections.philosophy.items.map((item, index) => (
                  <div key={index} style={{ marginBottom: '16px' }}>
                    <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={paragraphStyle}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* The Method Emerges Section */}
        <div style={dividerStyle} />
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.sections.methodEmerges.title}
          </h2>

          <p style={paragraphStyle}>
            {t.sections.methodEmerges.intro}
          </p>

          <p style={paragraphStyle}>
            {t.sections.methodEmerges.listIntro}
          </p>

          {t.sections.methodEmerges.items.length > 0 && (
            <ul style={listStyle}>
              {t.sections.methodEmerges.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <strong>{item.title}</strong><br />
                  <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div style={dividerStyle} />

        {/* What This Means for You Section - Only show for English */}
        {language === 'en' && (
          <>
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)', 
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {t.sections.whatThisMeans.title}
              </h2>

              {t.sections.whatThisMeans.paragraphs.map((paragraph, index) => (
                <p key={index} style={paragraphStyle}>
                  {paragraph}
                </p>
              ))}
            </section>

            <div style={dividerStyle} />
          </>
        )}

        {/* The Journey Ahead Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.sections.journeyAhead.title}
          </h2>

          <p style={paragraphStyle}>
            {t.sections.journeyAhead.intro}
          </p>

          {t.sections.journeyAhead.items.length > 0 && t.sections.journeyAhead.items.map((item, index) => (
            <p key={index} style={paragraphStyle} dangerouslySetInnerHTML={{
              __html: item.replace(/Principles|Principios/g, '<strong>$&</strong>')
                         .replace(/Implementation|Enfoque de Implementación/g, '<strong>$&</strong>')
                         .replace(/Practices|Prácticas/g, '<strong>$&</strong>')
                         .replace(/Philosophy|Filosofía/g, '<strong>$&</strong>')
            }} />
          ))}

          {t.sections.journeyAhead.conclusion && (
            <p style={paragraphStyle} dangerouslySetInnerHTML={{
              __html: t.sections.journeyAhead.conclusion.replace(
                /technology should adapt to people, not the other way around|la tecnología debe adaptarse a las personas, y no al revés/g,
                '<strong>$&</strong>'
              )
            }} />
          )}
        </section>

        <div style={dividerStyle} />

        {/* Navigation */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href={'/method'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.navigation.back}
          </Link>
          <Link 
            href={'/method/principles'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.navigation.next}
          </Link>
        </div>
      </div>
    </div>
  );
}
