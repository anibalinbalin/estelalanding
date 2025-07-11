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
      title: 'La regla de las 24 horas',
      intro: 'Nuestro compromiso de respuesta rápida',
      description: [
        'Esta regla surgió de una observación simple: la mayoría de los problemas de TI se agravan con el tiempo. Un fallo que parece smple se convierte con el tiempo en problemas mas complejos.'
      ],
      subsection: {
        title: 'Cómo funciona:',
        items: [
          'Todos los incidentes se abordan al momento.',
          'Comunicación durante todo el proceso.',
          'Revisión posterior al incidente para la prevención.'
        ]
      },
      conclusion: [
        'Los problemas exigen atención. Nuestro compromiso es una respuesta rápida y personal, generalmente al momento y no en días. Usted se conecta directamente con un miembro de nuestro equipo que entiende la empresa.',
        'El cliente nunca es solo un ticket en una cola.'
      ]
    },
    {
      number: '4.2',
      title: 'La Documentación',
      intro: 'Creemos que la documentación debe informar. La nuestra está diseñada para ser clara y de uso inmediato: es visual, práctica y siempre accesible.',
      description: [
        'La documentación de TI tradicional es árida porque está escrita para otros de la misma rama.'
      ],
      subsection: {
        title: 'Nuestra manera:',
        items: [
          'Diagramas visuales que muestran, no solo describen.',
          'Guías de referencia rápida para tareas diarias.',
          'Actualizaciones periódicas basadas en preguntas reales.'
        ]
      },
      conclusion: [
        'Cada documento responde a tres preguntas: 1. ¿Qué hace esto? 2. ¿Cómo lo uso? 3. ¿Qué hago si algo no funciona?',
        'Hemos aprendido que la mejor documentación no es la más completa, sino la más comprensible. No se trata de cubrir cada caso extremo; se trata de asegurar que la empresa pueda manejar los casos que realmente ocurren.',
        'La documentación debe empoderar a los usuarios, no abrumar.'
      ]
    },
    {
      number: '4.3',
      title: 'Revisiones',
      intro: 'Revisiones cortas y regulares mantienen los sistemas en buen estado. 30 minutos pueden prevenir muchas horas de inactividad.',
      description: [
        'La mayoría de los eventos de TI dan señales sutiles antes de volverse un problema mas grave.'
      ],
      subsection: {
        title: 'Nuestra rutina semanal:',
        items: [
          'Informes automatizados.',
          'Recomendaciones proactivas de optimización.',
          'Análisis de tendencias y planificación de capacidad.',
          'Planes de acción claros con prioridades.'
        ]
      },
      conclusion: [
        'No se trata de crear reuniones ni de generar informes. Se trata de mantener un ritmo de atención que evita que los problemas se magnifiquen.'
      ]
    },
    {
      number: '4.4',
      title: 'Relaciones con proveedores',
      intro: 'Mantenemos relaciones directas con Lenovo, UniFi, Synology, SentinelOne, y Wasabi.',
      description: [
        'El modelo tradicional de proveedores crea un triángulo de frustración: Cliente -> empresa de TI -> contactan al proveedor -> proveedor indica el problema es el cliente. Este es un proceso de dias o semanas.'
      ],
      subsection: {
        title: 'Nuestro enfoque:',
        items: [
          'Contactos designados en cada empresa.',
          'Vías de escalamiento directo para problemas.',
          'Los responsables de las garantias los provee primero Estela.'
        ]
      },
      conclusion: [
        'Cuando surge un problema específico de un proveedor la primera linea de respuesta es Estela. Nuestro objetivo es siempre protegerlo de la complejidad y agilizar las soluciones.'
      ]
    },
    {
      number: '4.5',
      title: 'Transferencia de conocimiento',
      intro: 'Nuestro objetivo es desarrollar la capacidad de su equipo, no crear dependencia.',
      description: [
        'Creemos que las empresas deben entender que hay detrás de su infraestrcutura: cuanto más capaz se vuelve su equipo, más sólida es nuestra alianza.'
      ],
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
            Nuestros métodos probados y una ejecución consistente.
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
              
              {practice.description.map((paragraph, i) => (
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
            
            {practice.subsection && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: '500',
                      color: 'var(--foreground)',
                      marginBottom: '8px',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}>
                      {practice.subsection.title}
                    </h3>
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
                      {practice.subsection.items.map((item, i) => (
                        <li key={`item-${i}`} style={{ marginBottom: '8px' }}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ marginBottom: '24px' }}>
              {practice.conclusion.map((paragraph, i) => (
                <p key={`conclusion-${i}`} style={{
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

        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            fontSize: '1.125rem', 
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            Estas prácticas no son reglas impuestas desde arriba.
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
            Son lecciones aprendidas a lo largo de 13 años de servicio. Cada una existe porque resuelve un problema real. 
            Cada una evoluciona a medida que aprendemos mejores maneras. Cada una se enfoca en un objetivo simple:
          </p>
          
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            fontStyle: 'italic',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>

          </p>
        </section>

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
