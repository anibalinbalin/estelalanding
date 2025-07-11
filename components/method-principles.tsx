'use client'

import { Link } from 'next-view-transitions'
import InteractiveLinesGrid from '@/components/ui/interactive-lines-grid'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

export function MethodPrinciples() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Core Principles',
      subtitle: 'The fundamental beliefs that guide every decision we make.',
      principles: [
        {
          number: '2.1',
          title: 'Small Teams, Deep Impact',
          content: [
            'We stay at 5 people. Not because we can\'t grow, but because we shouldn\'t. Research proves it. Experience confirms it.',
            'You partner directly with our senior team, guaranteeing undiluted expertise and clear, purposeful communication.'
          ]
        },
        {
          number: '2.2',
          title: 'Technology Serves People',
          content: [
            'We don\'t implement technology for technology\'s sake. Every cable, every configuration, every line of code must improve someone\'s day.',
            'If it doesn\'t make work easier, we don\'t build it.'
          ]
        },
        {
          number: '2.3',
          title: 'Built to Last, Designed to Evolve',
          content: [
            'We build foundations that can grow with you. Not Band-Aids. Not quick fixes. Real solutions that work today and adapt tomorrow.'
          ]
        },
        {
          number: '2.4',
          title: 'Radical Transparency',
          content: [
            'No black boxes. No vendor lock-in. No mysteries. You understand what we build, how it works, and how to maintain it.'
          ]
        },
        {
          number: '2.5',
          title: 'The Beauty of Simplicity',
          content: [
            'Like a well-composed painting, the best systems have nothing extra. Every element has purpose. Complexity is the enemy of reliability.'
          ]
        }
      ],
      closing: {
        intro: 'These principles aren\'t abstract concepts.',
        intro2: 'They\'re the foundation of every decision we make.',
        description: 'From the size of our team to the choice of technologies. From how we communicate to how we structure our code. These principles guide everything.',
        lines: [
          'Principles without practice are just words.',
          'Practice without principles is just habit.',
          'Together, they create something more:',
          'The mark of applied wisdom.'
        ]
      },
      navigation: {
        back: '← Back to Introduction',
        next: 'Next: Implementation →'
      }
    },
    es: {
      title: 'Principios Fundamentales',
      subtitle: 'Las convicciones fundamentales que guían cada decisión que tomamos.',
      principles: [
        {
          number: '2.1',
          title: 'Equipos Pequeños, Impacto Profundo',
          content: [
            'Nos mantenemos en 5 personas. No porque no podamos crecer, sino porque no debemos. La investigación lo demuestra. La experiencia lo confirma.',
            'Usted trabaja directamente con nuestro equipo principal, garantizando un conocimiento experto sin intermediarios y una comunicación clara y con propósito.'
          ]
        },
        {
          number: '2.2',
          title: 'La Tecnología al Servicio de las Personas',
          content: [
            'No implementamos tecnología por la tecnología en sí misma. Cada cable, cada configuración y cada línea de código debe tener como fin facilitar el trabajo de una persona.',
            'Si no simplifica el trabajo, no lo construimos.'
          ]
        },
        {
          number: '2.3',
          title: 'Construido para Durar, Diseñado para Evolucionar',
          content: [
            'Construimos cimientos que pueden crecer con usted. No son curitas. No son soluciones rápidas. Son soluciones reales que funcionan hoy y se adaptan al mañana.'
          ]
        },
        {
          number: '2.4',
          title: 'Transparencia Radical',
          content: [
            'Sin cajas negras. Sin dependencia de un proveedor. Sin misterios. Usted entiende lo que construimos, cómo funciona y cómo mantenerlo.'
          ]
        },
        {
          number: '2.5',
          title: 'La Belleza de la Simplicidad',
          content: [
            'Al igual que una pintura bien compuesta, los mejores sistemas no tienen nada superfluo. Cada elemento tiene un propósito. La complejidad es enemiga de la confiabilidad.'
          ]
        }
      ],
      closing: {
        intro: 'Estos principios no son conceptos abstractos.',
        intro2: 'Son la base de cada decisión que tomamos.',
        description: 'Desde el tamaño de nuestro equipo hasta la elección de las tecnologías. Desde cómo nos comunicamos hasta cómo estructuramos nuestro código. Estos principios lo guían todo.',
        lines: [
          'Principios sin práctica son solo palabras.',
          'La práctica sin principios es solo costumbre.',
          'Juntos, crean algo más:',
          'El sello de la sabiduría aplicada.'
        ]
      },
      navigation: {
        back: '← Volver a la Introducción',
        next: 'Siguiente: Implementación →'
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
      overflowX: 'hidden' as const
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '120px 32px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <Breadcrumb 
            items={[
              { label: 'Estela', href: language === 'es' ? '/es' : '/' },
              { label: language === 'es' ? 'Método' : 'Method', href: language === 'es' ? '/es/method' : '/method' },
              { label: language === 'es' ? 'Principios' : 'Principles' }
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
              backgroundColor: '#1a2224',
              color: '#fff',
              fontSize: '1.125rem', 
              fontFamily: 'GT_America_Mono, monospace'
            }}>
              2
            </div>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '400',
            lineHeight: '2.75rem',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            margin: 0,
            marginBottom: '24px'
          }}>
            {t.title}
          </h1>
          
          <div style={{
            height: '1px',
            marginBottom: '48px'
          }} />

          <p style={{
            fontSize: '19px',
            fontWeight: '400',
            lineHeight: '30.4px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '48px'
          }}>
            {t.subtitle}
          </p>

          <div style={{
            position: 'relative',
            height: '300px',
            width: '100%',
            borderRadius: '8px',
            border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
            overflow: 'hidden',
            backgroundColor: resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019',
            marginBottom: '48px'
          }}>
            <InteractiveLinesGrid 
              cols={30}
              rows={10}
              height={300}
              lineLength={16}
              lineWidth={1.2}
              showDot={true}
              dotSize={7}
              backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
              color={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
              hoverColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        {t.principles.map((principle, index) => (
          <div key={`principle-${index}`} style={{ marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)', 
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {principle.number} {principle.title}
              </h2>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              {principle.content.map((paragraph, i) => (
                <p key={`paragraph-${i}`} style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '27.2px',
                  letterSpacing: 'normal',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  marginBottom: '24px'
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            {index < t.principles.length - 1 && (
              <div style={{
                height: '1px',
            marginBottom: '48px'
              }} />
            )}
          </div>
        ))}
        
        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            fontSize: '1.125rem', 
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            {t.closing.intro}<br />
            {t.closing.intro2}
          </p>
          
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '24px'
          }}>
            {t.closing.description}
          </p>
          
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '24px'
          }}>
            {t.closing.lines[0]}
          </p>
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '24px'
          }}>
            {t.closing.lines[1]}
          </p>
          
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '24px'
          }}>
            {t.closing.lines[2]}
          </p>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            {t.closing.lines[3]}
          </p>
        </section>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href={language === 'es' ? '/es/method/introduction' : '/method/introduction'}
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
            href={language === 'es' ? '/es/method/implementation' : '/method/implementation'}
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
