'use client'

import { Link } from 'next-view-transitions'
import CustomVerticalBarsNoise from '@/components/ui/custom-vertical-bars-noise'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'

export function MethodPractices() {
  const { resolvedTheme } = useTheme()
  
  const practices = [
    {
      number: '4.1',
      title: 'Respuesta directa',
      intro: 'El mismo equipo que diseñó su infraestructura es el que responde cuando algo falla.',
      description: [],
      subsection: null,
      conclusion: []
    },
    {
      number: '4.2',
      title: 'Documentación útil',
      intro: 'Cada documento responde tres preguntas: ¿Qué hace? ¿Cómo lo uso? ¿Qué hago si falla?',
      description: [],
      subsection: null,
      conclusion: []
    },
    {
      number: '4.3',
      title: 'Chequeos regulares',
      intro: 'Revisiones cortas, periódicas.',
      description: [],
      subsection: null,
      conclusion: []
    },
    {
      number: '4.4',
      title: 'Proveedores',
      intro: 'Mantenemos relaciones directas con Lenovo, UniFi, Synology, SentinelOne y Wasabi. Cuando hay un problema, lo resolvemos nosotros primero.',
      description: [],
      subsection: null,
      conclusion: []
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
              { label: 'Prácticas' }
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
              4
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
            Nuestras prácticas
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
            Cómo se ve el trabajo diario.
          </p>

          {/* Custom Vertical Bars Noise Effect */}
          <div style={{ 
            position: 'relative',
            marginBottom: '48px',
            borderRadius: '8px',
            border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
            height: '300px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <CustomVerticalBarsNoise 
              backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
              pressedBackgroundColor={resolvedTheme === 'light' ? '#e0e0e0' : '#4a3a20'}
              lineColor={resolvedTheme === 'light' ? { r: 102, g: 102, b: 102 } : { r: 245, g: 185, b: 68 }}
            />
          </div>
        </div>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        {practices.map((practice, index) => (
          <div key={`practice-${index}`} style={{ marginBottom: '48px' }}>
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
                {practice.number} {practice.title}
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
                {practice.intro}
              </p>
              
              {practice.description.length > 0 && practice.description.map((paragraph, i) => (
                <p key={`desc-${i}`} style={{
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
            
            
            {index < practices.length - 1 && (
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

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href="/es/method/implementation"
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
            ← Anterior: Implementación
          </Link>
          <Link 
            href="/es/method/philosophy"
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
            Siguiente: Filosofía →
          </Link>
        </div>
      </div>
    </div>
  );
}
