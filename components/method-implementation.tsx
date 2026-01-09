'use client'

import { Link } from 'next-view-transitions'
import Waves from '@/components/ui/waves'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    breadcrumb: { home: 'Estela', method: 'Method', current: 'Implementation' },
    title: 'How We Work',
    lead: 'Our proven methodology for turning complex problems into simple solutions.',
    phases: [
      {
        number: '3.1',
        title: 'Understanding',
        intro: "We don't start with solutions. We start with questions.",
        content: [
          'Shadow your team for a day',
          'Map your actual workflows (not the ideal ones)',
          'Identify pain points and possibilities',
          'Document everything'
        ],
        time: 'Time: 1-2 days'
      },
      {
        number: '3.2',
        title: 'Architecture',
        intro: 'Design the system that fits your reality.',
        content: [
          'Create detailed blueprints',
          'Plan for today and tomorrow',
          'Choose tools that talk to each other',
          "Design for your team's skill level"
        ],
        time: 'Time: 1-2 weeks'
      },
      {
        number: '3.3',
        title: 'Implementation',
        intro: 'Build without breaking what works.',
        content: [
          'Staged rollouts, no big bangs',
          'Test with real users, not scenarios',
          'Document as we build',
          'Train as we go'
        ],
        time: 'Time: 2-8 weeks (depending on scope)'
      },
      {
        number: '3.4',
        title: 'Evolution',
        intro: 'Technology is never "done."',
        content: [
          'Regular health checks',
          'Proactive improvements',
          'Continuous education',
          'Grow with your needs'
        ],
        time: 'Time: Ongoing'
      }
    ],
    closingP1: "This methodology isn't theoretical.",
    closingP2: "It's refined through 13 years of real-world projects.",
    closingP3: "From 5-person companies to 100-person organizations. From simple network upgrades to complete digital transformations. Every project teaches us something new.",
    closingP4: 'The phases are flexible, not rigid.',
    closingP5: 'The timeline adapts to your reality.',
    closingP6: 'The outcome is always the same:',
    closingHighlight: 'Technology that just works.',
    prevLink: '← Previous: Principles',
    nextLink: 'Next: Practices →'
  },
  es: {
    breadcrumb: { home: 'Estela', method: 'Método', current: 'Implementación' },
    title: 'Cómo Trabajamos',
    lead: 'Nuestra metodología probada para convertir problemas complejos en soluciones simples.',
    phases: [
      {
        number: '3.1',
        title: 'Entendimiento',
        intro: 'No empezamos con soluciones. Empezamos con preguntas.',
        content: [
          'Observar a su equipo por un día',
          'Mapear sus flujos de trabajo reales (no los ideales)',
          'Identificar problemas y posibilidades',
          'Documentar todo'
        ],
        time: 'Tiempo: 1-2 días'
      },
      {
        number: '3.2',
        title: 'Arquitectura',
        intro: 'Diseñar el sistema que se ajusta a su realidad.',
        content: [
          'Crear lineas de tiempo claras',
          'Planificar a largo plazo',
          'Elegir herramientas que se comuniquen entre sí',
          'Diseñar los cambios de forma progresiva'
        ],
        time: 'Tiempo: 1-2 semanas'
      },
      {
        number: '3.3',
        title: 'Implementación',
        intro: 'Construir sin romper lo que funciona.',
        content: [
          'Desarrollos por etapas',
          'Probar con usuarios en los test beds',
          'Ir documentando mientras avanzamos',
          'Enseñar sobre la marcha'
        ],
        time: 'Tiempo: 2-8 semanas (según el alcance)'
      },
      {
        number: '3.4',
        title: 'Evolución',
        intro: 'La tecnología nunca está "terminada".',
        content: [
          'Chequeos regulares',
          'Mejoras proactivas',
          'Transmitir nuevos cambios',
          'Crecer con las necesidades de la empresa'
        ],
        time: 'Tiempo: Continuo'
      }
    ],
    closingP1: 'Esta metodología no es teórica.',
    closingP2: 'Está refinada a través de 13 años de proyectos reales.',
    closingP3: 'Desde empresas de 5 personas hasta organizaciones de 100 personas. Desde actualizaciones de red simples hasta transformaciones digitales completas. Cada proyecto nos enseña algo nuevo.',
    closingP4: 'Las fases son flexibles, no rígidas.',
    closingP5: 'El cronograma se adapta a su realidad.',
    closingP6: 'El resultado es siempre el mismo:',
    closingHighlight: 'Tecnología que simplemente funciona.',
    prevLink: '← Anterior: Principios',
    nextLink: 'Siguiente: Prácticas →'
  }
}

export function MethodImplementation() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const t = content[language]

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
              { label: t.breadcrumb.home, href: '/' },
              { label: t.breadcrumb.method, href: '/method' },
              { label: t.breadcrumb.current }
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
              3
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
            {t.lead}
          </p>

          {/* Waves Effect */}
          <div style={{ 
            position: 'relative',
            marginBottom: '48px',
            borderRadius: '8px',
            border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
            height: '300px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <Waves
              lineColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
              backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
              waveSpeedX={0}
              waveSpeedY={0}
              waveAmpX={0}
              waveAmpY={0}
              friction={0.92}
              tension={0.008}
              maxCursorMove={100}
              xGap={14}
              yGap={32}
            />
          </div>
        </div>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        {t.phases.map((phase, index) => (
          <div key={`phase-${index}`} style={{ marginBottom: '48px' }}>
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
                {phase.number} {phase.title}
              </h2>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '500',
                lineHeight: '27.2px',
                letterSpacing: 'normal',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px'
              }}>
                {phase.intro}
              </p>
              
              <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                <ul style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '27.2px',
                  letterSpacing: 'normal',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  marginLeft: '16px',
                  listStyle: 'none',
                  padding: '0'
                }}>
                  {phase.content.map((item, i) => (
                    <li key={`item-${i}`} style={{ marginBottom: '8px' }}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <p style={{
                fontSize: '0.875rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'var(--content-secondary-p3)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}>
                {phase.time}
              </p>
            </div>
            
            {index < t.phases.length - 1 && (
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
            {t.closingP1}<br />
            {t.closingP2}
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
            {t.closingP3}
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
            {t.closingP4}
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
            {t.closingP5}
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
            {t.closingP6}
          </p>

          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            {t.closingHighlight}
          </p>
        </section>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/method/principles"
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
            {t.prevLink}
          </Link>
          <Link
            href="/method/practices"
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
            {t.nextLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
