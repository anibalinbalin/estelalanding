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
            'We&apos;re six. Not five—too few. Not seven—that already needs meetings about meetings. <a href="https://www.researchgate.net/publication/228838549_Empirical_Findings_on_Team_Size_and_Productivity_in_Software_Development" style="color: #ecbb5a">Research agrees</a>.'
          ]
        },
        {
          number: '2.2',
          title: 'Technology Serves People',
          content: [
            'We don&apos;t implement technology for technology&apos;s sake. Every cable, every configuration, every line of code must improve someone&apos;s day.',
            'If it doesn&apos;t make work easier, we don&apos;t build it.'
          ]
        },
        {
          number: '2.3',
          title: 'Built to Last, Designed to Evolve',
          content: [
            'If it&apos;s temporary, it&apos;s not a solution. It&apos;s debt.'
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
            'Complexity is easy. Anyone can add. The hard part is knowing what to remove.'
          ]
        }
      ],
      navigation: {
        back: '← Back to Introduction',
        next: 'Next: Implementation →'
      }
    },
    es: {
      title: 'Principios Fundamentales',
      subtitle: 'Cinco ideas que suenan simples hasta que uno intenta aplicarlas.',
      principles: [
        {
          number: '2.1',
          title: 'Seis',
          content: [
            'Somos seis. No cinco, que era poco. No siete, que ya requería reuniones sobre reuniones. <a href="https://www.researchgate.net/publication/228838549_Empirical_Findings_on_Team_Size_and_Productivity_in_Software_Development" style="color: #ecbb5a">Los estudios coinciden</a>.'
          ]
        },
        {
          number: '2.2',
          title: 'Tecnología con propósito',
          content: [
            'Cada decisión técnica responde a una pregunta: ¿esto le ahorra tiempo a alguien? Si la respuesta es "depende", también es no.'
          ]
        },
        {
          number: '2.3',
          title: 'Sin parches',
          content: [
            'Si es temporal, no es solución. Es deuda.'
          ]
        },
        {
          number: '2.4',
          title: 'Sin dependencias',
          content: [
            'Su infraestructura es suya. Con o sin nosotros.'
          ]
        },
        {
          number: '2.5',
          title: 'Nada que sobre',
          content: [
            'La complejidad es fácil. Cualquiera puede agregar. Lo difícil es saber qué quitar.'
          ]
        }
      ],
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
              { label: 'Estela', href: '/' },
              { label: language === 'es' ? 'Método' : 'Method', href: '/method' },
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
                }} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
        

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href={'/method/introduction'}
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
            href={'/method/implementation'}
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
