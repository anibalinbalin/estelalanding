'use client'

import { Link } from 'next-view-transitions'

export function MethodSection() {
  // Linear's exact styles adapted for Estela
  const pageStyles = {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    overflowX: 'hidden' as const
  }

  const heroTitleStyle = {
    fontSize: '3.25rem', // 52px - coherent with main site
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    lineHeight: '3.625rem',
    letterSpacing: 'normal',
    color: 'var(--foreground)',
    margin: 0,
    marginBottom: '24px'
  }

  const heroSubtitleStyle = {
    fontSize: '1.125rem', // 18px - coherent with main site
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    lineHeight: '1.75rem',
    letterSpacing: 'normal',
    color: 'var(--foreground)',
    marginBottom: '24px'
  }

  const subtitleStyle = {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginTop: '16px',
    maxWidth: '640px',
    margin: '0 auto'
  }

  const dividerStyle = {
    height: '1px',
    backgroundColor: 'var(--border)',
    margin: '72px 0'
  }

  const sectionStyle = {
    marginBottom: '120px'
  }

  const sectionHeaderStyle = {
    fontSize: '0.8125rem',
    lineHeight: '1.5',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontWeight: '400',
    fontFamily: 'GT_America_Mono, monospace',
    color: 'var(--foreground)',
    marginBottom: '0px'
  }

  const sectionContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px'
  }

  const listStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    listStyle: 'none',
    gap: '6px',
    margin: '0',
    padding: '0'
  }

  const listItemStyle = {
    margin: '0'
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

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Método
        </div>

        {/* Hero Section */}
        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>
            El Método Estela
          </h1>
          <h2 style={heroSubtitleStyle}>
            Integración Tecnológica con Alma
          </h2>
          
          <div style={dividerStyle} />
          
          <div style={{ marginBottom: '48px' }}>
            <p style={{ ...subtitleStyle, marginBottom: '24px' }}>
              Existe una cierta distorsión en como frecuentemente se 
              implementa la tecnología en las empresas.
            </p>
            <p style={subtitleStyle}>
              Esos capitulos intentan aclarar y renovar conceptos, 
              la forma en la que trabajamos en Estela.
            </p>
          </div>
        </section>

        {/* Method Chapters Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          {/* Introduction Section */}
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>Introducción</span>
            <ol style={listStyle}>
              <li style={listItemStyle}>
                <Link
                  href="/es/method/introduction"
                  style={{
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'var(--content-secondary-p3)',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'color 0.1s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--content-secondary-p3)'
                  }}
                >
                  <span>El Arte de la Traducción</span>
                  <span style={{ 
                    fontSize: '15px',
                    fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
                    color: 'inherit'
                  }}>1.1</span>
                </Link>
              </li>
            </ol>
          </div>

          {/* Principles Section */}
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>Principios</span>
            <ol style={listStyle}>
              {[
                { title: 'Equipos Pequeños, Impacto Profundo', href: '/es/method/principles#1', number: '2.1' },
                { title: 'La Tecnología al Servicio de las Personas', href: '/es/method/principles#2', number: '2.2' },
                { title: 'Construido para Durar, Diseñado para Evolucionar', href: '/es/method/principles#3', number: '2.3' },
                { title: 'Transparencia Radical', href: '/es/method/principles#4', number: '2.4' },
                { title: 'La Belleza de la Simplicidad', href: '/es/method/principles#5', number: '2.5' }
              ].map((item) => (
                <li key={item.number} style={listItemStyle}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--content-secondary-p3)'
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ 
                      fontSize: '15px',
                      fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
                      color: 'inherit'
                    }}>{item.number}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Implementation Section */}
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>Implementación</span>
            <ol style={listStyle}>
              {[
                { title: 'Comprensión', href: '/es/method/implementation#understanding', number: '3.1' },
                { title: 'Arquitectura', href: '/es/method/implementation#architecture', number: '3.2' },
                { title: 'Implementación', href: '/es/method/implementation#implementation', number: '3.3' },
                { title: 'Evolución', href: '/es/method/implementation#evolution', number: '3.4' }
              ].map((item) => (
                <li key={item.number} style={listItemStyle}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--content-secondary-p3)'
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ 
                      fontSize: '15px',
                      fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
                      color: 'inherit'
                    }}>{item.number}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Practices Section */}
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>Prácticas</span>
            <ol style={listStyle}>
              {[
                { title: 'La Regla de las 24 Horas', href: '/es/method/practices#24hour', number: '4.1' },
                { title: 'La Documentación como un Arte', href: '/es/method/practices#documentation', number: '4.2' },
                { title: 'El Pulso Semanal', href: '/es/method/practices#weekly', number: '4.3' },
                { title: 'Relaciones con Proveedores', href: '/es/method/practices#vendors', number: '4.4' },
                { title: 'Transferencia de Conocimiento', href: '/es/method/practices#knowledge', number: '4.5' }
              ].map((item) => (
                <li key={item.number} style={listItemStyle}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--content-secondary-p3)'
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ 
                      fontSize: '15px',
                      fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
                      color: 'inherit'
                    }}>{item.number}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Philosophy Section */}
          <div style={sectionContainerStyle}>
            <span style={sectionHeaderStyle}>Filosofía</span>
            <ol style={listStyle}>
              {[
                { title: 'El Principio del Hexágono', href: '/es/method/philosophy#hexagon', number: '5.1' },
                { title: 'Aprendiendo de la Historia', href: '/es/method/philosophy#history', number: '5.2' },
                { title: 'La Conexión con el Arte', href: '/es/method/philosophy#art', number: '5.3' },
                { title: 'Resultados, No Reportes', href: '/es/method/philosophy#results', number: '5.4' }
              ].map((item) => (
                <li key={item.number} style={listItemStyle}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--content-secondary-p3)'
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ 
                      fontSize: '15px',
                      fontFamily: 'GT_America_Mono, ui-monospace, "SF Mono", "Menlo", monospace',
                      color: 'inherit'
                    }}>{item.number}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}