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
          Nuestra Filosofía
        </h1>
        
        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          El pensamiento de fondo que da forma a todo lo que construimos.
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
            5.1 El Principio del Hexágono
          </h2>
          
          <p style={paragraphStyle}>
            La forma más eficiente de la naturaleza. Máxima resistencia, mínimo material. Así es como construimos nuestros sistemas.
          </p>
          
          <p style={paragraphStyle}>
            Observe un panal de abejas. Miles de años de evolución produjeron el hexágono —no el cuadrado, no el círculo, 
            sino la celda de seis lados que proporciona el máximo almacenamiento con la mínima cantidad de cera. Sin espacio desperdiciado. 
            Sin exceso de material. Una integridad estructural perfecta.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                El Hexágono en la Tecnología:
              </h3>
              <ul style={{ ...paragraphStyle, marginLeft: '16px' }}>
                <li>• Seis servicios centrales, cada uno apoyando a los demás.</li>
                <li>• Redundancia sin excesos.</li>
                <li>• Carga distribuida de manera uniforme.</li>
                <li>• Sin un único punto de fallo.</li>
                <li>• Escalable en cualquier dirección.</li>
                <li>• Uso eficiente de los recursos.</li>
              </ul>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            Aplicamos este principio a cada sistema que diseñamos, buscando una resiliencia inherente a través del soporte interconectado, 
            una distribución de carga eficiente y una escalabilidad sin puntos únicos de fallo, de manera muy similar a como un panal se adapta y perdura.
          </p>
          
          <p style={paragraphStyle}>
            El hexágono nos enseña que la fortaleza no proviene de estructuras rígidas, sino de conexiones flexibles. 
            Cada elemento soporta a sus vecinos. Si se quita uno, los demás lo compensan. Si se añade uno, el conjunto se vuelve más fuerte.
          </p>
          
          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            Eficiencia a través de la geometría. Confiabilidad a través del diseño.
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
            5.2 Aprendiendo de la Historia
          </h2>
          
          <p style={paragraphStyle}>
            Grace Hopper simplificó la computación para los humanos. Euclides construyó grandes verdades a partir de axiomas fundamentales. 
            Nosotros aplicamos principios atemporales a problemas modernos.
          </p>
          
          <p style={paragraphStyle}>
            La tecnología cambia. La naturaleza humana no. Los desafíos que enfrentamos hoy —complejidad, escala, integración— no son nuevos. 
            Son problemas antiguos con un ropaje moderno.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                De Grace Hopper
              </h3>
              <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                &quot;La frase más peligrosa del idioma es &apos;siempre lo hemos hecho así&apos;.&quot;
              </p>
              <p style={paragraphStyle}>
                Ella inventó el compiler porque estaba cansada de escribir el mismo código repetidamente. 
                Nosotros automatizamos no porque sea una tendencia, sino porque la repetición genera errores y desperdicia el potencial humano.
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
                con integridad funcional y claridad estética. Vemos nuestros sistemas a través de un lente similar, donde el diseño elegante 
                sirve a un propósito práctico, y la función robusta posee su propia belleza inherente.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            Las mayores innovaciones de la historia surgieron de la conexión de ideas que parecían no tener relación. Nosotros hacemos lo mismo.
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
            ¿Por qué nuestro CEO estudia pinturas del Renacimiento? Porque el diseño de sistemas es composición. Equilibrio. 
            Es ver el todo mientras se perfeccionan los detalles.
          </p>
          
          <p style={paragraphStyle}>
            La mayoría ve el arte y la tecnología como opuestos. Nosotros los vemos como variaciones de un mismo tema: crear orden a partir del caos, 
            encontrar patrones en la complejidad, comunicar ideas que trascienden su medio.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Composición
              </h3>
              <p style={paragraphStyle}>
                Toda pintura tiene un punto focal, elementos de apoyo y espacio negativo. También lo tiene toda red. 
                Los servidores críticos son el foco. Los sistemas redundantes brindan el apoyo. Una segmentación adecuada crea holgura.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Teoría del Color
              </h3>
              <p style={paragraphStyle}>
                Los artistas saben que los colores se afectan mutuamente: el rojo se ve diferente junto al azul que junto al naranja. 
                Los sistemas tienen la misma interdependencia. Un NVME rápido impacta más que solo el almacenamiento. 
                Switches de calidad mejoran más que solo la red.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Perspectiva
              </h3>
              <p style={paragraphStyle}>
                Los artistas del Renacimiento descubrieron que para mostrar la profundidad era necesario entender el punto de vista. 
                Aplicamos el mismo principio: su infraestructura se ve diferente desde el escritorio del usuario que desde la sala de servidores. 
                Ambas perspectivas importan.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Restauración
              </h3>
              <p style={paragraphStyle}>
                Nuestro CEO no solo estudia pinturas, las restaura. Toma algo dañado por el tiempo y el abandono, 
                entiende su intención original y, cuidadosamente, lo devuelve a la vida. Hacemos lo mismo con los sistemas legacy.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            El arte no es decoración. Es una forma de ver.
          </p>
          <p style={paragraphStyle}>
            La tecnología no es solo función. Es una forma de pensar.
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
