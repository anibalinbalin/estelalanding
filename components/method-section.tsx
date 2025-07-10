'use client'

import { Link } from 'next-view-transitions'
import { useState, useEffect } from 'react'
import { BerlinAsciiArt } from '@/components/ui/berlin-ascii-art'

export function MethodSection() {
  const [showBerlinArt, setShowBerlinArt] = useState(false)

  // Handle ESC key to close ASCII art
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowBerlinArt(false)
      }
    }

    if (showBerlinArt) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showBerlinArt])
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
          Estela / Method
        </div>

        {/* Hero Section */}
        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>
            The Estela Method
          </h1>
          <h2 style={heroSubtitleStyle}>
            Technology Integration with Soul
          </h2>
          
          <div style={dividerStyle} />
          
          <div style={{ marginBottom: '48px' }}>
            <p style={{ ...subtitleStyle, marginBottom: '24px' }}>
              There is a lost art of building technology systems 
              that actually work for people.
            </p>
            <p style={subtitleStyle}>
              To bring back the human element, these are the 
              foundational ideas that guide everything we do at Estela.
            </p>
          </div>
        </section>

        {/* ASCII Art Container */}
        {showBerlinArt && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            width: '80vw',
            height: '80vh',
            maxWidth: '800px',
            maxHeight: '600px',
            backgroundColor: 'var(--background)',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}>
            <BerlinAsciiArt isVisible={showBerlinArt} />
            <button
              onClick={() => setShowBerlinArt(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: 'var(--foreground)',
                cursor: 'pointer',
                fontSize: '12px',
                fontFamily: 'GT_America_Mono, monospace'
              }}
            >
              ESC
            </button>
          </div>
        )}

        {/* Backdrop */}
        {showBerlinArt && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
            onClick={() => setShowBerlinArt(false)}
          />
        )}

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
            <span style={sectionHeaderStyle}>Introduction</span>
            <ol style={listStyle}>
              <li style={listItemStyle}>
                <Link
                  href="/method/introduction"
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
                    setShowBerlinArt(true)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--content-secondary-p3)'
                    setShowBerlinArt(false)
                  }}
                >
                  <span>The Art of Translation</span>
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
            <span style={sectionHeaderStyle}>Principles</span>
            <ol style={listStyle}>
              {[
                { title: 'Small Teams, Deep Impact', href: '/method/principles#1', number: '2.1' },
                { title: 'Technology Serves People', href: '/method/principles#2', number: '2.2' },
                { title: 'Built to Last', href: '/method/principles#3', number: '2.3' },
                { title: 'Radical Transparency', href: '/method/principles#4', number: '2.4' },
                { title: 'The Beauty of Simplicity', href: '/method/principles#5', number: '2.5' }
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
            <span style={sectionHeaderStyle}>Implementation</span>
            <ol style={listStyle}>
              {[
                { title: 'Understanding Phase', href: '/method/implementation#understanding', number: '3.1' },
                { title: 'Architecture Phase', href: '/method/implementation#architecture', number: '3.2' },
                { title: 'Implementation Phase', href: '/method/implementation#implementation', number: '3.3' },
                { title: 'Evolution Phase', href: '/method/implementation#evolution', number: '3.4' }
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
            <span style={sectionHeaderStyle}>Practices</span>
            <ol style={listStyle}>
              {[
                { title: 'The 24-Hour Rule', href: '/method/practices#24hour', number: '4.1' },
                { title: 'Documentation as Art', href: '/method/practices#documentation', number: '4.2' },
                { title: 'The Weekly Pulse', href: '/method/practices#weekly', number: '4.3' },
                { title: 'Vendor Relationships', href: '/method/practices#vendors', number: '4.4' },
                { title: 'Knowledge Transfer', href: '/method/practices#knowledge', number: '4.5' }
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
            <span style={sectionHeaderStyle}>Philosophy</span>
            <ol style={listStyle}>
              {[
                { title: 'The Hexagon Principle', href: '/method/philosophy#hexagon', number: '5.1' },
                { title: 'Learning from History', href: '/method/philosophy#history', number: '5.2' },
                { title: 'The Art Connection', href: '/method/philosophy#art', number: '5.3' },
                { title: 'Results, Not Reports', href: '/method/philosophy#results', number: '5.4' }
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