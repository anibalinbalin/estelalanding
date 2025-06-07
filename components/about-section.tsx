'use client'

import Link from 'next/link'

export function AboutSection() {
  const pageStyles = {
    backgroundColor: 'rgb(8, 9, 10)',
    color: 'rgb(215, 216, 217)',
    minHeight: '100vh'
  }

  const badgeStyle = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontFamily: 'GT_America_Mono, monospace',
    color: 'rgb(126, 131, 133)',
    marginBottom: '24px'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '400',
    lineHeight: '2.75rem',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)',
    margin: 0,
    marginBottom: '16px'
  }

  const subtitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)',
    marginBottom: '24px'
  }

  const dividerStyle = {
    height: '1px',
    backgroundColor: 'rgba(126, 131, 133, 0.3)',
    marginBottom: '48px'
  }

  const leadStyle = {
    fontSize: '19px',
    fontWeight: '400',
    lineHeight: '30.4px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(126, 131, 133)',
    marginBottom: '24px'
  }

  const paragraphStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(126, 131, 133)',
    marginBottom: '24px'
  }

  const sectionHeaderStyle = {
    fontSize: '1.5rem', 
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)', 
    marginBottom: '24px',
    borderBottom: '1px solid rgba(126, 131, 133, 0.3)',
    paddingBottom: '8px'
  }

  const teamMemberStyle = {
    marginBottom: '48px',
    padding: '24px',
    backgroundColor: 'rgba(126, 131, 133, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(126, 131, 133, 0.1)'
  }

  const partnerItemStyle = {
    marginBottom: '32px',
    padding: '20px',
    backgroundColor: 'rgba(126, 131, 133, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(126, 131, 133, 0.1)'
  }

  return (
    <div style={pageStyles}>
      <div className="section-spacing" style={{ maxWidth: '680px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Company / About
        </div>

        <div style={dividerStyle} />

        {/* Main Title */}
        <h1 style={titleStyle}>
          About Estela
        </h1>
        <p style={subtitleStyle}>
          The Humans Behind the Technology
        </p>

        <p style={leadStyle}>
          We're not your typical technology company.<br />
          And that's entirely the point.
        </p>
        
        <div style={dividerStyle} />

        {/* Our Story Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeaderStyle}>
            Our Story
          </h2>

          {/* 2011: Two Friends, One Vision */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              2011: Two Friends, One Vision
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
            
            <p style={paragraphStyle}>
              It started in a small office in Montevideo. Two engineers who'd spent years watching companies struggle with technology that made work harder, not easier.
            </p>

            <p style={paragraphStyle}>
              We had no investors. No business plan. No safety net. Just a belief: technology should adapt to people, not the other way around.
            </p>

            <p style={paragraphStyle}>
              Our first client was a small dental clinic. Their server had crashed, taking weeks of patient records with it. We not only recovered their data but built them a system that hasn't failed since. They're still our client today.
            </p>
          </div>

          <div style={dividerStyle} />

          {/* The Early Years */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              The Early Years (2011-2015)
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
            
            <p style={paragraphStyle}>
              We learned by doing. Every project taught us something:
            </p>

            <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Architecture firms needed speed above all</li>
              <li style={{ marginBottom: '8px' }}>Medical labs needed reliability above all</li>
              <li style={{ marginBottom: '8px' }}>Law firms needed security above all</li>
              <li style={{ marginBottom: '8px' }}>Everyone needed someone who actually listened</li>
            </ul>

            <p style={paragraphStyle}>
              We stayed small on purpose. While others scaled fast and failed faster, we grew carefully. One client at a time. One relationship at a time. One success at a time.
            </p>
          </div>

          <div style={dividerStyle} />

          {/* Finding Our Philosophy */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              Finding Our Philosophy (2016-2019)
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
            
            <p style={paragraphStyle}>
              By year five, we'd found our rhythm. We discovered Putnam's research on team size. We studied Grace Hopper's approach to simplification. We realized our instincts were backed by science.
            </p>

            <p style={paragraphStyle}>
              We also discovered something else: the best system designers think like artists. Composition. Balance. Perspective. It all applied.
            </p>

            <p style={paragraphStyle}>
              Our CEO started studying Renaissance paintings.<br />
              Our CTO dove into philosophy.<br />
              Our work got better.
            </p>
          </div>

          <div style={dividerStyle} />

          {/* The Modern Era */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              The Modern Era (2020-Present)
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
            
            <p style={paragraphStyle}>
              The pandemic proved our approach. While others scrambled, our clients kept working. The systems we'd built for flexibility became lifelines.
            </p>

            <p style={paragraphStyle}>
              Today, we're five people serving 50+ organizations.<br />
              We've been profitable since year two.<br />
              We've never taken outside investment.<br />
              We've never lost a client to a competitor.
            </p>

            <p style={paragraphStyle}>
              But we're most proud of this: we still answer our own phones, we still write our own code, and we still believe technology should make life better, not just different.
            </p>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Our Team Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeaderStyle}>
            Our Team
          </h2>
          <p style={paragraphStyle}>
            Five people. Decades of experience. Unlimited dedication.
          </p>

          <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

          {/* Team Member 1 */}
          <div style={teamMemberStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              [Name]
            </h3>
            <p style={{ 
              fontSize: '0.9rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Co-Founder & CEO
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
            
            <p style={paragraphStyle}>
              The artist-engineer. Collector of paintings, solver of problems, believer in beauty and function.
            </p>

            <p style={{ ...paragraphStyle, fontSize: '0.9rem' }}>
              15 years in technology<br />
              Specialties: System architecture, client strategy<br />
              Obsession: Making complexity invisible
            </p>

            <p style={{ 
              ...paragraphStyle, 
              fontStyle: 'italic',
              color: 'rgb(215, 216, 217)',
              marginBottom: '0'
            }}>
              "Technology without soul is just expensive furniture."
            </p>
          </div>

          {/* Team Member 2 */}
          <div style={teamMemberStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              [Name]
            </h3>
            <p style={{ 
              fontSize: '0.9rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Co-Founder & CTO
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
            
            <p style={paragraphStyle}>
              The philosopher-builder. Reads Borges, writes code, sees patterns others miss.
            </p>

            <p style={{ ...paragraphStyle, fontSize: '0.9rem' }}>
              18 years in technology<br />
              Specialties: Infrastructure, security, optimization<br />
              Obsession: Systems that self-heal
            </p>

            <p style={{ 
              ...paragraphStyle, 
              fontStyle: 'italic',
              color: 'rgb(215, 216, 217)',
              marginBottom: '0'
            }}>
              "The best solution is the one you never notice."
            </p>
          </div>

          <p style={{ ...paragraphStyle, fontStyle: 'italic', textAlign: 'center' }}>
            [Continue with other team members...]
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Why We Stay Small */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeaderStyle}>
            Why We Stay Small
          </h2>
          <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

          <p style={paragraphStyle}>
            We've had offers to grow. Investors wanting to 10x us. Clients begging us to expand. We always say no.
          </p>

          <p style={paragraphStyle}>
            Because we've learned: the magic happens at this size. Any bigger and we'd lose the very thing that makes us valuable.
          </p>

          <p style={paragraphStyle}>
            Your project doesn't get handed off to juniors.<br />
            Your calls don't go to a call center.<br />
            Your relationship doesn't get account-managed to death.
          </p>

          <p style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)' }}>
            You get us. All of us. Always.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Our Partners Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeaderStyle}>
            Strategic Partnerships
          </h2>
          <p style={paragraphStyle}>
            We choose our partners as carefully as our clients.
          </p>

          <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

          {/* Lenovo */}
          <div style={partnerItemStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Lenovo
            </h3>
            <p style={{ 
              fontSize: '0.9rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Business Partner Since 2015
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
            
            <ul style={{ ...paragraphStyle, marginLeft: '24px', marginBottom: '0' }}>
              <li style={{ marginBottom: '8px' }}>Direct access to enterprise support</li>
              <li style={{ marginBottom: '8px' }}>Preferred pricing on all hardware</li>
              <li>Extended warranties and guarantees</li>
            </ul>
          </div>

          {/* UniFi */}
          <div style={partnerItemStyle}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              UniFi
            </h3>
            <p style={{ 
              fontSize: '0.9rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Enterprise Installer Since 2018
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
            
            <ul style={{ ...paragraphStyle, marginLeft: '24px', marginBottom: '0' }}>
              <li style={{ marginBottom: '8px' }}>Certified installation and configuration</li>
              <li style={{ marginBottom: '8px' }}>Advanced troubleshooting capabilities</li>
              <li>Volume pricing benefits</li>
            </ul>
          </div>

          <p style={{ ...paragraphStyle, fontStyle: 'italic', textAlign: 'center' }}>
            [Continue with Synology and SentinelOne...]
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Bottom CTA */}
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.125rem', 
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '32px'
          }}>
            Now you know us. We'd love to know you.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
            <Link 
              href="/contact"
              style={{
                padding: '12px 24px',
                backgroundColor: 'rgb(215, 216, 217)',
                color: 'rgb(8, 9, 10)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(126, 131, 133)'
                e.currentTarget.style.color = 'rgb(215, 216, 217)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(215, 216, 217)'
                e.currentTarget.style.color = 'rgb(8, 9, 10)'
              }}
            >
              Start a Conversation
            </Link>
            <Link 
              href="/method"
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'rgb(126, 131, 133)',
                textDecoration: 'none',
                border: '1px solid rgb(126, 131, 133)',
                borderRadius: '6px',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(126, 131, 133)'
                e.currentTarget.style.color = 'rgb(215, 216, 217)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'rgb(126, 131, 133)'
              }}
            >
              Read Our Method
            </Link>
          </div>

          <p style={{ 
            ...paragraphStyle, 
            fontSize: '0.9rem',
            fontStyle: 'italic',
            marginBottom: '0'
          }}>
            "Technology is best when it brings people together."<br />
            <span style={{ fontSize: '0.8rem' }}>- Matt Mullenweg</span>
          </p>
        </section>
      </div>
    </div>
  )
}