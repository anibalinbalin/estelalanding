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
            Somos 6 integrantes. El hexágono tiene 6 lados. ¿Casualidad? Seguramente. Es una metáfora muy buena como para no destacarla.
          </p>
          
          <p style={paragraphStyle}>
            Si lo pensamos, la naturaleza optimiza para la eficiencia, y su forma predilecta para la resistencia y la solidez es el hexágono. Algunas veces es el triángulo. Pero aquí es el hexágono. Es la estructura que ofrece máxima solidez utilizando la menor cantidad de recursos posible.
          </p>

          <p style={paragraphStyle}>
            Nosotros aplicamos esa misma lógica: un equipo sólido, sin partes de más, donde cada miembro está interconectado y sostiene al resto.
          </p>
          
          <p style={paragraphStyle}>
            El hexágono nos enseña una lección importante del diseño: la fortaleza no viene de la rigidez, sino de las conexiones entre sí.
          </p>

          <p style={paragraphStyle}>
            Cada elemento que construimos sostiene a sus vecinos. Si uno no está disponible, los demás compensan. Si uno se agrega, el conjunto recupera su solidez anterior.
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
            Grace Hopper simplificó la computación para todos. Euclides construyó grandes verdades a partir de axiomas fundamentales. 
            Nosotros aplicamos principios atemporales a problemas modernos. ¿Estamos en la misma jerarquía que Grace Hopper o Euclides? No. Pero tomamos lo mejor de ambos.
          </p>
          
          <p style={paragraphStyle}>
            La tecnología cambia y evoluciona dia a dia, pero no así nosotros. Los desafíos que enfrentamos hoy —complejidad, escala, integración— no son nuevos. 
            Son problemas desde siempre.
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
                Ella inventó el compiler porque estaba cansada de escribir el mismo código todo el tiempo. 
                Nosotros automatizamos no porque AI esta de moda, sino porque la repetición es una perdida de tiempo y es en definitiva el potencial que se puede aplicar a otro trabajo.
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
            Las innovaciones siempre surgieron de la conexión de ideas que parecían no tener relación.
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
            5.3 La conexión con el arte
          </h2>
          
          <p style={paragraphStyle}>
            ¿Por qué nos gustan las obras clásicas del Renacimiento? Porque el diseño de sistemas es composición. Equilibrio. 
            Es ver el todo mientras se afinan detalles.
          </p>
          
          <p style={paragraphStyle}>
            La mayoría ve el arte y la tecnología como opuestos. Nosotros los vemos como variaciones de un mismo tema: crear orden, 
            encontrar patrones en la complejidad, comunicar ideas que trascienden.
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
