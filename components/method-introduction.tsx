'use client'

import { Link } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ReactbitsDither = dynamic(() => import('@/components/ui/reactbits-dither'), { ssr: false })

export function MethodIntroduction() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
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
    fontSize: '2.5rem', // 40px - coherent with main site
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

  const listStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginLeft: '24px',
    marginBottom: '48px'
  }

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Estela', href: '/' },
            { label: 'Method', href: '/method' },
            { label: 'Introduction' }
          ]} 
        />

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
            1
          </div>
        </div>

        {/* Title */}
        <h1 style={titleStyle}>
          The Art of Translation
        </h1>
        
        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          The art of true interpretation lies in making the complex clear.
          This is our practice: we translate the intricate world of technology into human-centric solutions.
        </p>

        {/* Dither Wave Effect */}
        <div style={{ 
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: mounted && resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'var(--ascii-background-alt-p3)',
          boxSizing: 'border-box'
        }}>
          <ReactbitsDither
            waveColor={mounted && resolvedTheme === 'light' ? [0.6, 0.6, 0.6] : [0.961, 0.725, 0.267]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            waveAmplitude={0.2}
            waveFrequency={2}
            waveSpeed={0.02}
          />
        </div>

        <div style={dividerStyle} />

        {/* The Lost Art Section */}
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
            The Lost Art
          </h2>
          
          <p style={paragraphStyle}>
            In Greek mythology, Hermes served as the messenger between the divine and mortal realms. He didn't just carry messages; he translated meaning across worlds that couldn't understand each other.
          </p>

          <p style={paragraphStyle}>
            Today's technology landscape suffers from the same divide. On one side: servers, protocols, frameworks, and endless acronyms. On the other: people trying to run businesses, serve customers, and make a difference.
          </p>

          <p style={paragraphStyle}>
            Most IT companies speak only technology. They deliver solutions that work for machines but confound humans. They optimize for specifications, not experiences.
          </p>

          <p style={paragraphStyle}>
            <strong>We chose a different path.</strong>
          </p>
        </section>

        <div style={dividerStyle} />

        {/* The Translation Imperative Section */}
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
            The Translation Imperative
          </h2>

          <p style={paragraphStyle}>
            After 13 years of building systems, we've learned that the best infrastructure is invisible. It doesn't announce itself with complexity or demand attention through failure. It just works.
          </p>

          <p style={paragraphStyle}>
            This invisibility isn't accidental. It's the result of continuous translation between what technology can do and what people actually need.
          </p>

          <p style={paragraphStyle}>
            Consider the architect who needs to share massive CAD files. She doesn't care about RAID configurations or IOPS metrics. She cares about opening files quickly and meeting deadlines.
          </p>

          <p style={paragraphStyle}>
            Or the medical laboratory that must maintain perfect uptime. They don't need lectures on virtualization. They need systems that never fail when lives depend on them.
          </p>

          <p style={paragraphStyle}>
            <strong>Translation means understanding both languages fluently</strong>—the language of technology and the language of human need—then building bridges between them.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Our Translation Philosophy Section */}
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
            Our Translation Philosophy
          </h2>

          <p style={paragraphStyle}>
            We practice translation at every level:
          </p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                Technical to Practical
              </h3>
              <p style={paragraphStyle}>
                We transform "10Gb fiber backbone with link aggregation" into "your files open in seconds, not minutes."
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                Complex to Simple
              </h3>
              <p style={paragraphStyle}>
                We convert intricate network diagrams into clear benefits: "work from anywhere, securely."
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                Problem to Solution
              </h3>
              <p style={paragraphStyle}>
                We translate "our system keeps crashing" into "here's how we ensure that never happens again."
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>
                Present to Future
              </h3>
              <p style={paragraphStyle}>
                We interpret current limitations as tomorrow's capabilities, building systems that grow with you.
              </p>
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* The Method Emerges Section */}
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
            The Method Emerges
          </h2>

          <p style={paragraphStyle}>
            Our method isn't about following trends or implementing the latest tools. It's about understanding what actually matters: your people, your work, your growth.
          </p>

          <p style={paragraphStyle}>
            This method emerged from:
          </p>

          <ul style={listStyle}>
            <li style={{ marginBottom: '12px' }}>
              <strong>50+ successful implementations</strong><br />
              <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                Each one teaching us something new about translation
              </span>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Countless hours of listening</strong><br />
              <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                Before we speak technology, we think alongside you
              </span>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>A belief that small teams build better</strong><br />
              <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                Fewer translators mean clearer communication
              </span>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>The intersection of art and engineering</strong><br />
              <span style={{ color: 'var(--content-secondary-p3)', fontSize: '0.9rem' }}>
                Because the best systems balance beauty and function
              </span>
            </li>
          </ul>
        </section>

        <div style={dividerStyle} />

        {/* What This Means for You Section */}
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
            What This Means for You
          </h2>

          <p style={paragraphStyle}>
            When you work with Estela, you're not getting technology vendors who happen to work with businesses. You're getting translators who ensure technology serves your mission.
          </p>

          <p style={paragraphStyle}>
            We don't just install servers. We create infrastructure that accelerates your work.
          </p>

          <p style={paragraphStyle}>
            We don't just configure networks. We connect people and possibilities.
          </p>

          <p style={paragraphStyle}>
            We don't just provide support. We ensure you're never lost in translation.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* The Journey Ahead Section */}
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
            The Journey Ahead
          </h2>

          <p style={paragraphStyle}>
            In the following chapters, we'll explore how this translation philosophy shapes everything we do:
          </p>

          <p style={paragraphStyle}>
            Our <strong>Principles</strong> that ensure we never lose sight of the human element.
          </p>

          <p style={paragraphStyle}>
            Our <strong>Implementation</strong> approach that builds without breaking what works.
          </p>

          <p style={paragraphStyle}>
            Our <strong>Practices</strong> that maintain excellence day after day.
          </p>

          <p style={paragraphStyle}>
            Our <strong>Philosophy</strong> that connects art to modern infrastructure.
          </p>

          <p style={paragraphStyle}>
            Each element reflects our core belief: <strong>technology should adapt to people, not the other way around.</strong>
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Navigation */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href="/method"
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
            ← Back to Method Overview
          </Link>
          <Link 
            href="/method/principles"
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
            Next: Principles →
          </Link>
        </div>
      </div>
    </div>
  );
}