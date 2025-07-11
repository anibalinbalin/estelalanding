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
      title: 'La Regla de las 24 Horas',
      intro: 'Nuestro Compromiso de Respuesta Rápida',
      description: [
        'Esta regla surgió de una observación simple: la mayoría de los problemas de TI se agravan con el tiempo. Un pequeño fallo en la red se convierte en un fallo en cascada. Un único archivo corrupto se convierte en una pérdida de datos. Un usuario confundido se convierte en un equipo frustrado.'
      ],
      subsection: {
        title: 'Cómo Funciona:',
        items: [
          'Todos los incidentes críticos se registran desde el primer contacto.',
          'Su problema es atendido de inmediato por uno de nuestros expertos principales.',
          'Diagnóstico inicial y plan de acción en menos de 24 horas.',
          'Comunicación clara durante todo el proceso de resolución.',
          'Revisión posterior al incidente para la prevención.'
        ]
      },
      conclusion: [
        'Los problemas críticos exigen atención inmediata. Nuestro compromiso es una respuesta rápida y personal, generalmente en minutos u horas, no en días. Usted se conectará directamente con un miembro de nuestro equipo principal que entiende su sistema.',
        '...usted nunca es solo un ticket en una cola, ni se enfrenta a un diagnóstico genérico cuando los sistemas críticos fallan.'
      ]
    },
    {
      number: '4.2',
      title: 'La Documentación como un Arte',
      intro: 'Creemos que la documentación debe iluminar, no intimidar. La nuestra está diseñada para ser clara y de uso inmediato: es visual, práctica y siempre accesible.',
      description: [
        'La documentación de TI tradicional fracasa porque está escrita para auditores, no para usuarios. Prioriza lo exhaustivo sobre lo claro, el cumplimiento sobre la comprensión.'
      ],
      subsection: {
        title: 'Nuestro Enfoque:',
        items: [
          'Diagramas visuales que muestran, no solo describen.',
          'Guías de referencia rápida para tareas diarias.',
          'Tutoriales en video para procedimientos complejos.',
          'Base de conocimiento consultable, no carpetas.',
          'Actualizaciones periódicas basadas en preguntas reales.'
        ]
      },
      conclusion: [
        'Cada documento responde a tres preguntas: 1. ¿Qué hace esto? 2. ¿Cómo lo uso? 3. ¿Qué hago si algo sale mal?',
        'Hemos aprendido que la mejor documentación no es la más completa, sino la más comprensible. No se trata de cubrir cada edge case; se trata de asegurar que su equipo pueda manejar los casos que realmente ocurren.',
        'La documentación debe empoderar, no abrumar.'
      ]
    },
    {
      number: '4.3',
      title: 'El Pulso Semanal',
      intro: 'Revisiones cortas y regulares mantienen los sistemas en buen estado. 15 minutos pueden prevenir 15 horas de inactividad.',
      description: [
        'La mayoría de los desastres de TI dan señales sutiles antes de volverse críticos. Un disco funcionando al 90% de su capacidad. El uso de la memoria aumentando gradualmente. Los tiempos de respuesta incrementándose poco a poco. El Pulso Semanal detecta esas señales.'
      ],
      subsection: {
        title: 'Nuestra Rutina Semanal:',
        items: [
          'Informes automatizados del estado del sistema cada mañana.',
          'Llamada de revisión de 15 minutos cada miércoles.',
          'Recomendaciones proactivas de optimización.',
          'Análisis de tendencias y planificación de capacidad.',
          'Planes de acción claros con prioridades.'
        ]
      },
      conclusion: [
        'No se trata de crear reuniones ni de generar informes. Se trata de mantener un ritmo de atención que evita que los problemas pequeños se magnifiquen. Como un médico que revisa los signos vitales, monitoreamos lo que importa e intervenimos antes de que los síntomas se conviertan en emergencias.',
        'Los mejores problemas son aquellos que nunca ocurren.'
      ]
    },
    {
      number: '4.4',
      title: 'Relaciones con Proveedores',
      intro: 'Mantenemos relaciones directas con Lenovo, UniFi, Synology y SentinelOne. Sus problemas se convierten en nuestros problemas. Sin evasivas.',
      description: [
        'El modelo tradicional de proveedores crea un triángulo de frustración: usted llama a su empresa de TI, ellos llaman al proveedor y el proveedor culpa a otro. Pasan las horas. Pasan los días. Nada se resuelve.'
      ],
      subsection: {
        title: 'Nuestro Enfoque Directo:',
        items: [
          'Contactos designados en cada empresa asociada.',
          'Vías de escalamiento directo para problemas críticos.',
          'Sesiones informativas técnicas sobre nuevos productos.',
          'Acceso a versiones beta para pruebas y validación.',
          'Tiempos de respuesta garantizados en los acuerdos con socios.'
        ]
      },
      conclusion: [
        'Cuando surge un problema específico de un proveedor —sea con Synology, UniFi o SentinelOne—, nuestras alianzas nos permiten navegar sus canales de soporte con la eficiencia de quien conoce el sistema desde adentro. Aprovechamos los contactos directos y un profundo conocimiento del producto para acelerar la resolución, a menudo probando actualizaciones críticas en nuestro propio entorno para garantizar la estabilidad en el suyo. Nuestro objetivo es siempre protegerlo de la complejidad y agilizar las soluciones.',
        'Estas relaciones tomaron años en construirse. Le ahorran horas cada vez que algo sale mal.'
      ]
    },
    {
      number: '4.5',
      title: 'Transferencia de Conocimiento',
      intro: 'Nuestro objetivo es desarrollar la capacidad de su equipo, no crear dependencia.',
      description: [
        'Muchas empresas de TI se benefician de la ignorancia del cliente. Cuanto menos sabe usted, más los necesita. Creemos lo contrario: cuanto más capaz se vuelve su equipo, más valiosa es nuestra alianza.'
      ],
      subsection: {
        title: 'Cómo Transferimos el Conocimiento:',
        items: [
          'Capacitación práctica durante la implementación.',
          'Sesiones de formación durante el almuerzo.',
          'Materiales de referencia rápida para su equipo.',
          'Procedimientos de escalamiento claramente definidos.',
          'Evaluaciones anuales de capacidades.'
        ]
      },
      conclusion: [
        'Enseñamos a su equipo a gestionar con confianza las tareas rutinarias: cambiar la contraseña de un usuario, agregar una impresora de red, restaurar un archivo eliminado, revisar los registros de seguridad. No son tareas complejas, solo poco familiares.',
        'Nuestra filosofía se basa en el empoderamiento. Creemos que cuanto más capaz se vuelve su equipo con las tareas cotidianas, más valiosa y estratégica se vuelve nuestra alianza.',
        'Una verdadera alianza significa crecer juntos.'
      ]
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
            Nuestras Prácticas
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
            Excelencia operativa diaria mediante métodos probados y una ejecución consistente.
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
