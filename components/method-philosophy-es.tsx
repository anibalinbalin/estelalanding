'use client'

import { Link } from 'next-view-transitions'
import HexagonalSlidingBars from '@/components/ui/hexagonal-sliding-bars'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'

export function MethodPhilosophyEs() {
  const { resolvedTheme } = useTheme()
  
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
    fontSize: '2.5rem',
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

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Estela', href: '/es' },
            { label: 'Método', href: '/es/method' },
            { label: 'Filosofía' }
          ]} 
        />

        <div style={dividerStyle} />

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
            5
          </div>
        </div>

        {/* Title */}
        <h1 style={titleStyle}>
          Nuestra filosofía
        </h1>
        
        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          Nuestros ideales de fondo que da forma a todo lo que construimos.
        </p>

        {/* Hexagonal Sliding Bars Animation */}
        <div style={{ 
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <HexagonalSlidingBars 
            backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
            lineColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
            fillColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
            containerBackgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#F0EEE6'}
          />
        </div>

        <div style={dividerStyle} />

        {/* 5.1 El Principio del Hexágono */}
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
            5.1 El Hexágono
          </h2>
          
          <p style={paragraphStyle}>
            Somos 6 integrantes. El hexágono tiene 6 lados. ¿Casualidad? Seguramente. Pero es una metáfora demasiado buena para descartarla.
          </p>
          
          <p style={paragraphStyle}>
            Si lo pensamos, la naturaleza optimiza para la eficiencia, y su forma predilecta para la resistencia y la solidez es el hexágono. Es la estructura que ofrece máxima solidez utilizando la menor cantidad de recursos posible.
          </p>
          
          <p style={paragraphStyle}>
            Nosotros aplicamos esa misma lógica: un equipo compacto y sólido, sin partes de más, donde cada miembro está interconectado y sostiene al resto. Quizás el universo sí sabe lo que hace.
          </p>
          
          <p style={paragraphStyle}>
            El hexágono nos enseña una lección importante del diseño: la fortaleza no viene de la rigidez, sino de las conexiones entre sí.
          </p>
          
          <p style={paragraphStyle}>
            Cada elemento que construimos sostiene a sus vecinos. Si uno se quita, los demás compensan. Si uno se añade, el conjunto se vuelve más sólido.
          </p>
          
          <p style={paragraphStyle}>
            Porque la buena tecnología, como un buen equipo, se define por la solidez de sus vínculos.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.2 Aprendiendo de la Historia */}
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
            5.2 Aprendiendo de la historia
          </h2>
          
          <p style={paragraphStyle}>
            Grace Hopper simplificó la computación para los humanos. Euclides construyó grandes verdades a partir de axiomas fundamentales. 
            Nosotros aplicamos principios atemporales a problemas modernos.
          </p>
          
          <p style={paragraphStyle}>
            La tecnología cambia pero no así la naturaleza humana. Los desafíos que enfrentamos hoy —complejidad, escala, integración— no son nuevos. Son problemas desde siempre.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                De Grace Hopper
              </h3>
              <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                &quot;La frase más peligrosa del idioma es &apos;siempre lo hicimos así&apos;.&quot;
              </p>
              <p style={paragraphStyle}>
                Ella inventó el compiler porque estaba cansada de escribir el mismo código repetidamente. 
                Nosotros automatizamos no porque sea una tendencia de AI, sino porque la repetición es una perdida de tiempo y es en definitiva el potencial que se puede aplicar a otro trabajo.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                De Euclides
              </h3>
              <p style={paragraphStyle}>
                Él demostró cómo vastas verdades geométricas podían construirse a partir de unos pocos axiomas fundamentales y la deducción lógica. 
                Creemos que la tecnología duradera se construye de manera similar: sobre principios sólidos y un diseño claro y racional, 
                creando sistemas que son complejos y a la vez comprensibles.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Del Movimiento Bauhaus
              </h3>
              <p style={paragraphStyle}>
                Buscaron una unidad radical entre arte, artesanía y tecnología, creyendo que incluso los objetos cotidianos debían ser diseñados 
                con integridad funcional y claridad visual. Vemos nuestros sistemas a través de un lente similar, donde el diseño elegante 
                sirve a un propósito práctico, y la función posee su propia belleza inherente.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            Las innovaciones siempre surgieron de la conexión de ideas que parecían no tener relación. Nosotros lo hacemos así.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.3 La Conexión con el Arte */}
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
            5.3 La Conexión con el Arte
          </h2>
          
          <p style={paragraphStyle}>
            ¿Por qué nos gustan las obras clásicas del Renacimiento? Porque el diseño de sistemas es composición. Equilibrio. Es ver el todo mientras se afinan detalles.
          </p>
          
          <p style={paragraphStyle}>
            La mayoría ve el arte y la tecnología como opuestos. Nosotros los vemos como variaciones de un mismo tema: crear orden, encontrar patrones en la complejidad, comunicar ideas que trascienden.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.4 Resultados, no Informes */}
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
            5.4 Resultados, no Informes
          </h2>
          
          <p style={paragraphStyle}>
            Medimos el éxito con una sola métrica: ¿su tecnología mejora su trabajo? Todo lo demás es vanidad.
          </p>
          
          <p style={paragraphStyle}>
            La industria de TI está inundada de métricas. Porcentajes de uptime. Tasas de cierre de tickets. Uso de ancho de banda. 
            Puntajes de cumplimiento. Números que impresionan a los auditores, pero que ignoran la única pregunta que importa: 
            ¿su tecnología ayuda o estorba?
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Nuestras Métricas de Éxito
              </h3>
              <p style={paragraphStyle}>
                <strong>No:</strong> Cuántos tickets cerramos.<br />
                <strong>Sino:</strong> Cuántos tickets nunca se abrieron.
              </p>
              <p style={paragraphStyle}>
                <strong>No:</strong> Qué tan rápido respondimos.<br />
                <strong>Sino:</strong> Qué tan rara vez nos necesitó.
              </p>
              <p style={paragraphStyle}>
                <strong>No:</strong> Cuánta tecnología instalamos.<br />
                <strong>Sino:</strong> Cuán invisible se volvió.
              </p>
              <p style={paragraphStyle}>
                <strong>No:</strong> Cuántos informes generamos.<br />
                <strong>Sino:</strong> Cuántas decisiones permitieron tomar.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            Hemos visto empresas con un 99.99% de uptime cuyos empleados pierden horas diarias luchando contra sus herramientas. 
            Hemos visto otras con una infraestructura modesta cuyos equipos fluyen sin esfuerzo en su trabajo.
          </p>
          
          <p style={paragraphStyle}>
            La diferencia no está en las especificaciones. Está en la filosofía: la tecnología debe desaparecer 
            en la productividad. El mejor sistema es aquel en el que uno nunca piensa, porque nunca le falla.
          </p>
          
          <p style={paragraphStyle}>
            Cuando los clientes nos agradecen, rara vez es por proezas técnicas. Es por devolverles su tiempo, 
            su enfoque, su capacidad para hacer lo que mejor saben hacer.
          </p>
          
          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            Ese es el único resultado que importa.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Closing Statement */}
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.125rem', 
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            Estas filosofías no son conceptos abstractos.<br />
            Son el fundamento de cada decisión que tomamos.
          </p>
          
          <p style={paragraphStyle}>
            Desde la eficiencia hexagonal de nuestros diseños de red hasta la atención artística que ponemos en la gestión de cables. 
            Desde las lecciones históricas que guían nuestras estrategias hasta las métricas centradas en resultados que demuestran nuestro valor.
          </p>
          
          <p style={paragraphStyle}>
            La filosofía sin práctica es solo teoría.
          </p>
          <p style={paragraphStyle}>
            La práctica sin filosofía es solo costumbre.
          </p>
          
          <p style={paragraphStyle}>
            Juntas, crean sistemas que trascienden sus especificaciones para convertirse en algo más:
          </p>
          
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.5rem', 
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>

          </p>

          <div style={dividerStyle} />
          
          <p style={paragraphStyle}>
            Gracias por leer El Método Estela.
          </p>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.125rem',
            color: 'var(--foreground)'
          }}>
            Ahora, pongámoslo en práctica.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Navigation */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
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
            ← Anterior: Prácticas
          </Link>
          <Link 
            href="/es/method"
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
            Volver a Visión General del Método
          </Link>
        </div>
      </div>
    </div>
  );
}