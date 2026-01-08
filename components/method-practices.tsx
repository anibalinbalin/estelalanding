'use client'

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
            'All critical issues tracked from first contact',
            'Your issue is immediately addressed by one of our core experts',
            'Initial diagnosis and action plan within 24 hours',
            'Clear communication throughout resolution',
            'Post-incident review for prevention'
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
          "Traditional IT documentation fails because it's written for auditors, not users. It prioritizes completeness over clarity, compliance over comprehension."
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
          'Most IT disasters announce themselves with whispers before they scream. A disk running at 90% capacity. Memory usage creeping upward. Response times gradually increasing. The Weekly Pulse catches whispers.'
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
          'Many IT companies profit from client ignorance. The less you know, the more you need them. We believe the opposite: the more capable you become, the more valuable our partnership.'
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
    lead: 'Excelencia operativa diaria a través de métodos probados y ejecución consistente.',
    practices: [
      {
        number: '4.1',
        title: 'La Regla de las 24 Horas',
        intro: 'Nuestro Compromiso de Respuesta Rápida',
        description: [
          'Esta regla surgió de una observación simple: la mayoría de los problemas de TI se agravan con el tiempo. Un pequeño contratiempo de red se convierte en una falla en cascada. Un archivo corrupto se convierte en pérdida de datos. Un usuario confundido se convierte en un equipo frustrado.'
        ],
        subsection: {
          title: 'Cómo Funciona:',
          items: [
            'Todos los problemas críticos rastreados desde el primer contacto',
            'Su problema es atendido inmediatamente por uno de nuestros expertos principales',
            'Diagnóstico inicial y plan de acción dentro de 24 horas',
            'Comunicación clara durante toda la resolución',
            'Revisión post-incidente para prevención'
          ]
        },
        conclusion: [
          'Los problemas críticos demandan atención inmediata. Nuestro compromiso es una respuesta rápida y personal—típicamente en minutos u horas, no días. Se conectará directamente con un miembro del equipo principal que entiende su configuración.',
          '...nunca es solo un ticket en una cola, ni recibe solución genérica cuando los sistemas críticos están caídos.'
        ]
      },
      {
        number: '4.2',
        title: 'Documentación como Arte',
        intro: 'Creemos que la documentación debe iluminar, no intimidar. La nuestra está diseñada para claridad y uso inmediato—visual, práctica, y siempre accesible.',
        description: [
          'La documentación tradicional de TI falla porque está escrita para auditores, no para usuarios. Prioriza completitud sobre claridad, cumplimiento sobre comprensión.'
        ],
        subsection: {
          title: 'Nuestro Enfoque:',
          items: [
            'Diagramas visuales que muestran, no cuentan',
            'Guías de referencia rápida para tareas diarias',
            'Videos explicativos para procedimientos complejos',
            'Base de conocimiento buscable, no carpetas',
            'Actualizaciones regulares basadas en preguntas reales'
          ]
        },
        conclusion: [
          'Cada pieza de documentación responde tres preguntas: 1. ¿Qué hace esto? 2. ¿Cómo lo uso? 3. ¿Qué pasa si algo sale mal?',
          'Hemos aprendido que la mejor documentación no es exhaustiva—es comprensible. No se trata de cubrir cada caso extremo; se trata de asegurar que su equipo pueda manejar los casos que realmente ocurren.',
          'La documentación debe empoderar, no abrumar.'
        ]
      },
      {
        number: '4.3',
        title: 'El Pulso Semanal',
        intro: 'Chequeos breves y regulares mantienen los sistemas saludables. 15 minutos pueden prevenir 15 horas de tiempo de inactividad.',
        description: [
          'La mayoría de los desastres de TI se anuncian con susurros antes de gritar. Un disco al 90% de capacidad. Uso de memoria aumentando gradualmente. Tiempos de respuesta incrementándose poco a poco. El Pulso Semanal captura los susurros.'
        ],
        subsection: {
          title: 'Nuestra Rutina Semanal:',
          items: [
            'Informes automáticos de salud del sistema cada mañana',
            'Llamada de revisión de 15 minutos cada miércoles',
            'Recomendaciones proactivas de optimización',
            'Análisis de tendencias y planificación de capacidad',
            'Puntos de acción claros con prioridades'
          ]
        },
        conclusion: [
          'Esto no se trata de crear reuniones o generar informes. Se trata de mantener un ritmo de atención que mantiene los problemas pequeños pequeños. Como un médico revisando signos vitales, monitoreamos lo que importa e intervenimos antes de que los síntomas se conviertan en emergencias.',
          'Los mejores problemas son los que nunca suceden.'
        ]
      },
      {
        number: '4.4',
        title: 'Relaciones con Proveedores',
        intro: 'Mantenemos relaciones directas con Lenovo, UniFi, Synology y SentinelOne. Sus problemas se convierten en nuestros problemas. Sin rodeos.',
        description: [
          'El modelo tradicional de proveedores crea un triángulo de frustración: usted llama a su empresa de TI, ellos llaman al proveedor, el proveedor culpa a alguien más. Pasan horas. Pasan días. Nada se resuelve.'
        ],
        subsection: {
          title: 'Nuestro Enfoque Directo:',
          items: [
            'Contactos nombrados en cada empresa asociada',
            'Rutas de escalamiento directas para problemas críticos',
            'Briefings técnicos regulares sobre nuevos productos',
            'Acceso beta para pruebas y validación',
            'Tiempos de respuesta garantizados en acuerdos con socios'
          ]
        },
        conclusion: [
          'Cuando surge un problema específico del proveedor—sea con Synology, UniFi o SentinelOne—nuestras alianzas establecidas significan que navegamos sus canales de soporte con la eficiencia de un insider. Aprovechamos contactos directos y conocimiento profundo del producto para acelerar la resolución, frecuentemente pre-probando actualizaciones críticas en nuestro entorno para asegurar estabilidad para el suyo. Nuestro objetivo siempre es protegerlo de la complejidad y agilizar soluciones.',
          'Estas relaciones tomaron años en construirse. Le ahorran horas cada vez que algo sale mal.'
        ]
      },
      {
        number: '4.5',
        title: 'Transferencia de Conocimiento',
        intro: 'Nuestro objetivo es construir la capacidad de su equipo, no crear dependencia.',
        description: [
          'Muchas empresas de TI lucran con la ignorancia del cliente. Entre menos sabe, más los necesita. Nosotros creemos lo opuesto: entre más capaz se vuelve, más valiosa es nuestra asociación.'
        ],
        subsection: {
          title: 'Cómo Transferimos Conocimiento:',
          items: [
            'Entrenamiento práctico durante la implementación',
            'Sesiones regulares de lunch-and-learn',
            'Materiales de referencia rápida para su equipo',
            'Procedimientos de escalamiento claramente definidos',
            'Evaluaciones anuales de capacidad'
          ]
        },
        conclusion: [
          'Enseñamos a su equipo a manejar tareas rutinarias con confianza. Cambiar una contraseña de usuario. Agregar una impresora de red. Restaurar un archivo eliminado. Revisar logs de seguridad. Estas no son tareas complejas—solo son desconocidas.',
          'Nuestra filosofía se basa en el empoderamiento. Creemos que mientras más capaz se vuelve su equipo con las tareas cotidianas, más valiosa y estratégica evoluciona nuestra asociación.',
          'La verdadera asociación significa crecer juntos.'
        ]
      }
    ],
    closingP1: 'Estas prácticas no son reglas impuestas desde arriba.',
    closingP2: 'Son lecciones aprendidas de 13 años de servicio. Cada una existe porque resuelve un problema real. Cada una evoluciona mientras aprendemos mejores formas. Cada una se enfoca en un objetivo simple:',
    prevLink: '← Anterior: Implementación',
    nextLink: 'Siguiente: Filosofía →'
  }
}

export function MethodPractices() {
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