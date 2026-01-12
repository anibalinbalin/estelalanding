'use client'

import { useState, useEffect } from 'react'
import { Link } from 'next-view-transitions'
import CustomVerticalBarsNoise from '@/components/ui/custom-vertical-bars-noise'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    breadcrumb: { home: 'Estela', method: 'Method', current: 'Practices' },
    title: 'Our Practices',
    lead: 'Daily operational excellence through proven methods and consistent execution.',
    practices: [
      {
        number: '4.1',
        title: 'The 24-Hour Rule',
        intro: 'Our Rapid Response Pledge',
        description: [
          'This rule emerged from a simple observation: most IT problems compound with time. A small network hiccup becomes a cascade failure. A single corrupted file becomes data loss. A confused user becomes a frustrated team.'
        ],
        subsection: {
          title: 'How It Works:',
          items: [
            'Issues tracked from first contact',
            'Immediate attention',
            'Diagnosis and action plan',
            'Clear communication',
            'Post-incident review'
          ]
        },
        conclusion: [
          "Critical issues demand immediate attention. Our pledge is a swift, personal response—typically within minutes or hours, not days. You'll connect directly with a core team member who understands your setup.",
          "...you're never just a ticket in a queue, nor are you met with generic troubleshooting when critical systems are down."
        ]
      },
      {
        number: '4.2',
        title: 'Documentation as Art',
        intro: 'We believe documentation should illuminate, not intimidate. Ours is designed for clarity and immediate use—visual, practical, and always accessible.',
        description: [
          'Industry standard is to document for compliance. We document so someone actually reads it.'
        ],
        subsection: {
          title: 'Our Approach:',
          items: [
            'Visual diagrams that show, not tell',
            'Quick reference guides for daily tasks',
            'Video walkthroughs for complex procedures',
            'Searchable knowledge base, not binders',
            'Regular updates based on real questions'
          ]
        },
        conclusion: [
          'Every piece of documentation answers three questions: 1. What does this do? 2. How do I use it? 3. What if something goes wrong?',
          "We've learned that the best documentation isn't comprehensive—it's comprehensible. It's not about covering every edge case; it's about ensuring your team can handle the cases that actually occur.",
          'Documentation should empower, not overwhelm.'
        ]
      },
      {
        number: '4.3',
        title: 'The Weekly Pulse',
        intro: 'Short, regular check-ins keep systems healthy. 15 minutes can prevent 15 hours of downtime.',
        description: [
          'Systems warn before they fail. We listen.'
        ],
        subsection: {
          title: 'Our Weekly Routine:',
          items: [
            'Automated system health reports every morning',
            '15-minute review call every Wednesday',
            'Proactive optimization recommendations',
            'Trend analysis and capacity planning',
            'Clear action items with priorities'
          ]
        },
        conclusion: [
          "This isn't about creating meetings or generating reports. It's about maintaining a rhythm of attention that keeps small issues small. Like a doctor checking vital signs, we monitor what matters and intervene before symptoms become emergencies.",
          'The best problems are the ones that never happen.'
        ]
      },
      {
        number: '4.4',
        title: 'Vendor Relationships',
        intro: 'We maintain direct relationships with Lenovo, UniFi, Synology, and SentinelOne. Your problems become our problems. No runaround.',
        description: [
          'The traditional vendor model creates a triangle of frustration: you call your IT company, they call the vendor, the vendor blames someone else. Hours pass. Days pass. Nothing gets resolved.'
        ],
        subsection: {
          title: 'Our Direct Approach:',
          items: [
            'Named contacts at every partner company',
            'Direct escalation paths for critical issues',
            'Regular technical briefings on new products',
            'Beta access for testing and validation',
            'Guaranteed response times in partner agreements'
          ]
        },
        conclusion: [
          "When a vendor-specific issue arises—be it with Synology, UniFi, or SentinelOne—our established partnerships mean we navigate their support channels with an insider's efficiency. We leverage direct contacts and deep product knowledge to accelerate resolution, often pre-testing critical updates in our environment to ensure stability for yours. Our aim is always to shield you from complexity and expedite solutions.",
          'These relationships took years to build. They save you hours every time something goes wrong.'
        ]
      },
      {
        number: '4.5',
        title: 'Knowledge Transfer',
        intro: "Our goal is to build your team's capability, not create reliance.",
        description: [
          'Some providers cultivate ignorance. We cultivate independence.'
        ],
        subsection: {
          title: 'How We Transfer Knowledge:',
          items: [
            'Hands-on training during implementation',
            'Regular lunch-and-learn sessions',
            'Quick reference materials for your team',
            'Escalation procedures clearly defined',
            'Annual capability assessments'
          ]
        },
        conclusion: [
          "We teach your team to handle routine tasks confidently. Change a user password. Add a network printer. Restore a deleted file. Review security logs. These aren't complex tasks—they're just unfamiliar ones.",
          'Our philosophy is built on empowerment. We believe that the more capable your team becomes with everyday tasks, the more valuable and strategic our partnership evolves.',
          'True partnership means growing together.'
        ]
      }
    ],
    closingP1: "These practices aren't rules imposed from above.",
    closingP2: "They're lessons learned from 13 years of service. Each one exists because it solves a real problem. Each one evolves as we learn better ways. Each one focuses on a simple goal:",
    prevLink: '← Previous: Implementation',
    nextLink: 'Next: Philosophy →'
  },
  es: {
    breadcrumb: { home: 'Estela', method: 'Método', current: 'Prácticas' },
    title: 'Nuestras Prácticas',
    lead: 'Lo que repetimos hasta que deja de ser esfuerzo y empieza a ser reflejo.',
    practices: [
      {
        number: '4.1',
        title: 'Respuesta Inmediata',
        intro: 'Porque lo urgente no puede esperar.',
        description: [
          'Los problemas técnicos no mejoran solos. Empeoran. Nuestra velocidad existe para evitar que eso pase.'
        ],
        subsection: {
          title: 'Cómo Funciona:',
          items: [
            'Problemas rastreados desde el primer contacto',
            'Atención inmediata',
            'Diagnóstico y plan de acción',
            'Comunicación clara',
            'Revisión post-incidente'
          ]
        },
        conclusion: [
          'La urgencia ajena es urgencia propia.'
        ]
      },
      {
        number: '4.2',
        title: 'Claridad',
        intro: 'La buena documentación es la que alguien abre dos veces.',
        description: [
          'El estándar del rubro es documentar para cumplir. Nosotros documentamos para que alguien lo lea.'
        ],
        subsection: {
          title: 'Nuestro Enfoque:',
          items: [
            'Diagramas que muestran, no describen',
            'Guías de referencia rápida para tareas diarias',
            'Videos para procedimientos complejos',
            'Base de conocimiento buscable, no carpetas',
            'Actualizaciones basadas en preguntas reales'
          ]
        },
        conclusion: []
      },
      {
        number: '4.3',
        title: 'Atención',
        intro: 'Mirar seguido para actuar temprano.',
        description: [
          'Los sistemas avisan antes de fallar. Nosotros escuchamos.'
        ],
        subsection: {
          title: 'Nuestra Rutina:',
          items: [
            'Recomendaciones proactivas de optimización',
            'Puntos de acción claros con prioridades'
          ]
        },
        conclusion: []
      },
      {
        number: '4.4',
        title: 'Relaciones',
        intro: 'Conocemos nombres.',
        description: [
          'Socios estratégicos, les dicen. Nosotros les decimos por el nombre.'
        ],
        subsection: {
          title: 'Nuestra forma:',
          items: [
            'Rutas de escalamiento ágiles',
            'Briefings técnicos sobre nuevos productos',
            'Acceso beta para pruebas'
          ]
        },
        conclusion: []
      },
      {
        number: '4.5',
        title: 'Saber',
        intro: 'Preferimos clientes que sepan. Nos hacen mejores preguntas.',
        description: [
          'Algunos proveedores cultivan ignorancia. Nosotros, independencia.'
        ],
        subsection: {
          title: 'Cómo Transferimos:',
          items: [
            'Materiales de referencia',
            'Evaluaciones anuales'
          ]
        },
        conclusion: []
      }
    ],
    closingP1: '',
    closingP2: '',
    prevLink: '← Anterior: Implementación',
    nextLink: 'Siguiente: Filosofía →'
  }
}

export function MethodPractices() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const t = content[language]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

          {/* Custom Vertical Bars Noise Effect */}
          <div style={{ 
            position: 'relative',
            marginBottom: '48px',
            borderRadius: '8px',
            border: mounted && resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
            height: '300px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <CustomVerticalBarsNoise 
              backgroundColor={mounted && resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
              pressedBackgroundColor={mounted && resolvedTheme === 'light' ? '#e0e0e0' : '#4a3a20'}
              lineColor={mounted && resolvedTheme === 'light' ? { r: 102, g: 102, b: 102 } : { r: 245, g: 185, b: 68 }}
            />
          </div>
        </div>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        {t.practices.map((practice, index) => (
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
            
            {index < t.practices.length - 1 && (
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
            {t.closingP1}
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
            {t.closingP2}
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
            href="/method/implementation"
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
            href="/method/philosophy"
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