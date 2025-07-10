'use client'

import { Link } from 'next-view-transitions'
import Waves from '@/components/ui/waves'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'

export function MethodImplementationEs() {
  const { resolvedTheme } = useTheme()
  
  const phases = [
    {
      number: '3.1',
      title: 'Comprensión',
      intro: 'No comenzamos con las soluciones. Empezamos con las preguntas.',
      content: [
        'Acompañamos a su equipo durante una jornada.',
        'Mapeamos sus flujos de trabajo reales (no los ideales).',
        'Identificamos los puntos críticos y las oportunidades.',
        'Documentamos todo el proceso.'
      ],
      time: 'Duración: 1-2 días'
    },
    {
      number: '3.2',
      title: 'Arquitectura',
      intro: 'Diseñamos el sistema que se ajusta a la realidad.',
      content: [
        'Creamos planos detallados del sistema.',
        'Planificamos para hoy y para el futuro.',
        'Elegimos equipos y herramientas que se integran entre sí.',
        'Diseñamos y migramos en función del nivel de conocimiento de la empresa.'
      ],
      time: 'Duración: 1-2 semanas'
    },
    {
      number: '3.3',
      title: 'Implementación',
      intro: 'Avanzamos sin afectar lo que ya funciona.',
      content: [
        'Implementaciones por etapas.',
        'Probamos con los usuarios.',
        'Documentamos a medida que avanzamos.',
        'Capacitamos sobre la marcha.'
      ],
      time: 'Duración: 2-8 semanas (según el alcance del proyecto)'
    },
    {
      number: '3.4',
      title: 'Evolución',
      intro: 'La tecnología nunca está "terminada".',
      content: [
        'Realizamos revisiones periódicas del sistema.',
        'Introducimos mejoras proactivas.',
        'Ofrecemos formación continua.',
        'Crecemos junto a sus necesidades.'
      ],
      time: 'Duración: Continua'
    }
  ]

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
              { label: 'Estela', href: '/es' },
              { label: 'Método', href: '/es/method' },
              { label: 'Implementación' }
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
            Cómo trabajamos
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
            Nuestra metodología probada para convertir problemas complejos en soluciones simples.
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

        {phases.map((phase, index) => (
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
            
            {index < phases.length - 1 && (
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

        

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href="/es/method/principles"
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
            ← Anterior: Principios
          </Link>
          <Link 
            href="/es/method/practices"
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
            Siguiente: Prácticas →
          </Link>
        </div>
      </div>
    </div>
  );
}