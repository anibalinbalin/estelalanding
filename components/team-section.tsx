'use client'

import Link from 'next/link'

export function TeamSection() {
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
    marginBottom: '64px',
    padding: '32px',
    backgroundColor: 'rgba(126, 131, 133, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(126, 131, 133, 0.1)'
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

  const teamMembers = [
    {
      name: '[Name]',
      title: 'Co-Founder & CEO',
      description: 'The artist-engineer. Collector of paintings, solver of problems, believer in beauty and function.',
      experience: '15 years in technology',
      specialties: 'System architecture, client strategy, business development',
      education: 'Computer Engineering, Universidad de la República',
      obsession: 'Making complexity invisible',
      hiddenTalent: 'Can spot a Caravaggio influence at 50 paces',
      quote: 'Technology without soul is just expensive furniture.',
      email: '[name]@este.la',
      linkedin: '/in/[name]'
    },
    {
      name: '[Name]',
      title: 'Co-Founder & CTO',
      description: 'The philosopher-builder. Reads Borges, writes code, sees patterns others miss.',
      experience: '18 years in technology',
      specialties: 'Infrastructure, security, optimization, automation',
      education: 'Systems Engineering, ORT Uruguay',
      obsession: 'Systems that self-heal',
      hiddenTalent: 'Explains quantum computing with coffee cups',
      quote: 'The best solution is the one you never notice.',
      email: '[name]@este.la',
      linkedin: '/in/[name]'
    },
    {
      name: '[Name]',
      title: 'Senior Infrastructure Engineer',
      description: 'The reliability wizard. If it can fail, they\'ve already built three failsafes.',
      experience: '12 years in technology',
      specialties: 'Networking, virtualization, automation, monitoring',
      education: 'Network Engineering, Universidad Católica',
      obsession: '100% uptime (currently at 99.97%)',
      hiddenTalent: 'Troubleshoots in their sleep (literally)',
      quote: 'Downtime is a choice. We choose differently.',
      email: '[name]@este.la',
      linkedin: '/in/[name]'
    },
    {
      name: '[Name]',
      title: 'Development Lead',
      description: 'The innovation catalyst. Turns "what if" into "here it is" faster than you can explain the problem.',
      experience: '10 years in technology',
      specialties: 'Full-stack development, AI integration, automation',
      education: 'Software Engineering, Universidad ORT',
      obsession: 'Code that reads like poetry',
      hiddenTalent: 'Builds functioning prototypes during meetings',
      quote: 'Every line of code should improve someone\'s day.',
      email: '[name]@este.la',
      linkedin: '/in/[name]'
    },
    {
      name: '[Name]',
      title: 'Client Success Manager',
      description: 'The human translator. Bridges the gap between geek and greek with grace and patience.',
      experience: '8 years in technology',
      specialties: 'Training, documentation, support, relationship management',
      education: 'Communications, Universidad Católica',
      obsession: 'Making sure everyone understands everything',
      hiddenTalent: 'Remembers every client\'s coffee order',
      quote: 'Technology is only as good as the people using it.',
      email: '[name]@este.la',
      linkedin: '/in/[name]'
    }
  ]

  return (
    <div style={pageStyles}>
      <div className="section-spacing" style={{ maxWidth: '680px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Company / Team
        </div>

        <div style={dividerStyle} />

        {/* Main Title */}
        <h1 style={titleStyle}>
          Our Team
        </h1>
        <p style={subtitleStyle}>
          Five people. Decades of experience. Unlimited dedication.
        </p>
        
        <div style={dividerStyle} />

        {/* Team Members */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Team Members
          </h2>

          {teamMembers.map((member, index) => (
            <div key={index} style={teamMemberStyle}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '8px'
              }}>
                {member.name}
              </h3>
              <p style={{ 
                fontSize: '1rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {member.title}
              </p>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
              
              <p style={{ 
                ...paragraphStyle,
                fontSize: '1.125rem',
                color: 'rgb(215, 216, 217)',
                fontStyle: 'italic',
                marginBottom: '32px'
              }}>
                {member.description}
              </p>

              {/* Details Grid */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Experience:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {member.experience}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Specialties:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {member.specialties}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Education:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {member.education}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Obsession:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {member.obsession}
                  </span>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Hidden talent:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {member.hiddenTalent}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote style={{ 
                ...paragraphStyle,
                fontStyle: 'italic',
                marginLeft: '24px',
                borderLeft: '3px solid rgba(126, 131, 133, 0.3)',
                paddingLeft: '24px',
                color: 'rgb(215, 216, 217)',
                marginBottom: '24px'
              }}>
                "{member.quote}"
              </blockquote>

              {/* Contact */}
              <div style={{ 
                fontSize: '0.9rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  <span>Contact: </span>
                  <Link 
                    href={`mailto:${member.email}`}
                    style={{
                      color: 'rgb(126, 131, 133)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(215, 216, 217)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(126, 131, 133)'}
                  >
                    {member.email}
                  </Link>
                </div>
                <div>
                  <span>LinkedIn: </span>
                  <a 
                    href={`https://linkedin.com${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'rgb(126, 131, 133)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(215, 216, 217)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(126, 131, 133)'}
                  >
                    {member.linkedin}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div style={dividerStyle} />

        {/* Team Culture */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Team Culture
          </h2>

          {/* Why Five? */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              Why Five?
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>
            
            <p style={paragraphStyle}>
              We've studied the research. We've lived the experience. Five is our magic number.
            </p>

            <ul style={{ ...paragraphStyle, marginLeft: '24px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Small enough to move fast</li>
              <li style={{ marginBottom: '8px' }}>Large enough to handle complexity</li>
              <li style={{ marginBottom: '8px' }}>Everyone knows everything</li>
              <li style={{ marginBottom: '8px' }}>No knowledge silos</li>
              <li style={{ marginBottom: '8px' }}>Direct communication only</li>
              <li>Consensus without committees</li>
            </ul>

            <p style={{ ...paragraphStyle, marginBottom: '8px' }}>
              We've had offers to grow. We always say no.
            </p>
            <p style={{ ...paragraphStyle, fontWeight: '500', color: 'rgb(215, 216, 217)' }}>
              Because we've learned: excellence doesn't scale.
            </p>
          </div>

          <div style={dividerStyle} />

          {/* Our Values in Action */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              Our Values in Action
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            {/* Values Grid */}
            <div style={{ marginLeft: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Answer Our Own Phones
                </h4>
                <p style={paragraphStyle}>
                  No call centers. No tiers. Direct access always.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Own Our Outcomes
                </h4>
                <p style={paragraphStyle}>
                  Every project has a name attached. That name cares.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Learn Constantly
                </h4>
                <p style={paragraphStyle}>
                  Weekly tech talks. Monthly certifications. Daily curiosity.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Document Everything
                </h4>
                <p style={paragraphStyle}>
                  Future us will thank current us. So will you.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Have Fun
                </h4>
                <p style={paragraphStyle}>
                  Serious work doesn't require serious faces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Bottom CTA */}
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.25rem', 
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px'
          }}>
            Want to work with us?
          </p>

          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1rem',
            marginBottom: '32px'
          }}>
            We're not hiring. We're always listening.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
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
        </section>

        <div style={dividerStyle} />
      </div>
    </div>
  )
}