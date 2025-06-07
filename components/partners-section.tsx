'use client'

import Link from 'next/link'

export function PartnersSection() {
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

  const leadStyle = {
    fontSize: '19px',
    fontWeight: '400',
    lineHeight: '30.4px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(126, 131, 133)',
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

  const partnerCardStyle = {
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

  const partners = [
    {
      name: 'Lenovo',
      partnership: 'Business Partner Since 2015',
      description: 'Reliability meets innovation. Their ThinkSystem servers have never let us down. Not once in 9 years.',
      level: 'Gold Business Partner',
      coverage: 'Uruguay & Southern Cone',
      specializations: 'Data Center, ThinkSystem, ThinkAgile',
      benefits: [
        'Direct access to enterprise support',
        'Preferred pricing on all hardware',
        'Extended warranties and guarantees',
        'Priority repair and replacement',
        'Beta access to new products',
        'Dedicated account management'
      ],
      solutions: [
        'ThinkSystem SR650 V3 servers',
        'ThinkAgile HX hyperconverged systems',
        'ThinkStation workstations',
        'ThinkPad enterprise laptops'
      ],
      metrics: [
        '200+ servers deployed',
        'Zero DOA units',
        '4-hour average support resolution',
        '100% client satisfaction'
      ],
      portal: 'Visit Lenovo Partnership Portal →'
    },
    {
      name: 'UniFi',
      partnership: 'Enterprise Installer Since 2018',
      description: 'Enterprise performance. Startup agility. Networks that manage themselves.',
      level: 'Enterprise Certified Installer',
      coverage: 'Uruguay, Argentina, Brasil',
      specializations: 'Enterprise Networking, WiFi 6E/7, Protect',
      benefits: [
        'Certified installation and configuration',
        'Advanced troubleshooting capabilities',
        'Direct vendor relationships',
        'Volume pricing benefits',
        'Priority RMA processing',
        'Early access programs'
      ],
      solutions: [
        'Dream Machine enterprise gateways',
        'Enterprise switches and WiFi',
        'Protect AI camera systems',
        'Access control systems'
      ],
      metrics: [
        '500+ access points deployed',
        '50+ complete network builds',
        '24/7 monitoring capability',
        'Zero security incidents'
      ],
      portal: 'Visit UniFi Elite Portal →'
    },
    {
      name: 'Synology',
      partnership: 'Gold Partner Since 2016',
      description: 'Storage that scales. Solutions that last. Support that actually supports.',
      level: 'Gold Partner',
      coverage: 'LATAM Region',
      specializations: 'Enterprise NAS, Surveillance, Backup',
      benefits: [
        'Expert NAS deployment and optimization',
        'Advanced training and certifications',
        'Beta access to new features',
        'Priority technical support',
        'Extended warranty options',
        'On-site spare availability'
      ],
      solutions: [
        'FlashStation all-flash arrays',
        'RackStation enterprise NAS',
        'Surveillance Station systems',
        'Active Backup solutions'
      ],
      metrics: [
        '2PB+ total storage deployed',
        '99.999% data availability',
        '30-minute average recovery',
        'Zero data loss incidents'
      ],
      portal: 'Access Synology Partner Resources →'
    },
    {
      name: 'SentinelOne',
      partnership: 'Certified Partner Since 2019',
      description: 'AI-powered protection that actually works. Stops threats before they start.',
      level: 'Gold MSSP Partner',
      coverage: 'Uruguay & Region',
      specializations: 'XDR, Endpoint Protection, Threat Hunting',
      benefits: [
        'Next-generation endpoint protection',
        '24/7 automated threat response',
        'Certified deployment expertise',
        'Direct escalation channels',
        'Managed detection services',
        'Incident response support'
      ],
      solutions: [
        'Singularity XDR platform',
        'Ranger network discovery',
        'Vigilance MDR services',
        'Cloud workload protection'
      ],
      metrics: [
        '5000+ endpoints protected',
        '100% ransomware prevention',
        '<1ms threat detection',
        'Zero breaches since 2019'
      ],
      portal: 'View SentinelOne Dashboard →'
    }
  ]

  return (
    <div style={pageStyles}>
      <div className="section-spacing" style={{ maxWidth: '680px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Company / Partners
        </div>

        <div style={dividerStyle} />

        {/* Main Title */}
        <h1 style={titleStyle}>
          Strategic Partnerships
        </h1>
        <p style={subtitleStyle}>
          We choose our partners as carefully as our clients.
        </p>

        <p style={leadStyle}>
          Quality over quantity. Always.
        </p>
        
        <div style={dividerStyle} />

        {/* Partner Details */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Partner Details
          </h2>

          {partners.map((partner, index) => (
            <div key={index} style={partnerCardStyle}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '8px'
              }}>
                {partner.name}
              </h3>
              <p style={{ 
                fontSize: '1rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {partner.partnership}
              </p>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

              {/* Logo placeholder */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(126, 131, 133, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(126, 131, 133, 0.2)',
                textAlign: 'center',
                marginBottom: '32px',
                fontSize: '0.9rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)'
              }}>
                [{partner.name} Logo]
              </div>

              {/* Why Partner */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '16px'
                }}>
                  Why {partner.name}:
                </h4>
                <p style={{ 
                  ...paragraphStyle,
                  fontSize: '1.125rem',
                  color: 'rgb(215, 216, 217)',
                  fontStyle: 'italic'
                }}>
                  {partner.description}
                </p>
              </div>

              {/* Partnership Details */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'GT_America_Mono, monospace',
                    color: 'rgb(126, 131, 133)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Partnership Level:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {partner.level}
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
                    Coverage:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {partner.coverage}
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
                    Specializations:
                  </span>
                  <span style={{ 
                    fontSize: '0.9rem',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'rgb(215, 216, 217)',
                    marginLeft: '8px'
                  }}>
                    {partner.specializations}
                  </span>
                </div>
              </div>

              {/* What This Means for You */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '16px'
                }}>
                  What This Means for You:
                </h4>
                <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
                <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Solutions */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '16px'
                }}>
                  Key Solutions We Deploy:
                </h4>
                <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                  {partner.solutions.map((solution, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      - {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success Metrics */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '16px'
                }}>
                  Success Metrics:
                </h4>
                <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                  {partner.metrics.map((metric, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      - {metric}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portal Link */}
              <Link 
                href="#"
                style={{
                  color: 'rgb(126, 131, 133)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  transition: 'color 0.2s',
                  display: 'inline-block',
                  padding: '8px 0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(215, 216, 217)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(126, 131, 133)'}
              >
                [{partner.portal}]
              </Link>
            </div>
          ))}
        </section>

        <div style={dividerStyle} />

        {/* Partnership Philosophy */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Partnership Philosophy
          </h2>

          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '16px'
            }}>
              Our Partnership Philosophy
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '32px', paddingBottom: '8px' }}></div>

            {/* Philosophy Sections */}
            <div style={{ marginLeft: '24px' }}>
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  We Don't Chase Certifications
                </h4>
                <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
                <p style={paragraphStyle}>
                  We earn partnerships through real-world excellence. Every partner relationship is tested in production before we formalize it.
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  Direct Relationships Matter
                </h4>
                <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
                <p style={paragraphStyle}>
                  When you have a problem, we don't open tickets. We call our contacts. Real people who know us and prioritize your needs.
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  Quality Over Quantity
                </h4>
                <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
                <p style={paragraphStyle}>
                  Four strategic partners. That's it. Each one best-in-class. Each one proven. No compromises.
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'rgb(215, 216, 217)', 
                  marginBottom: '8px'
                }}>
                  Your Advantage
                </h4>
                <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
                <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>✓ Enterprise pricing on day one</li>
                  <li style={{ marginBottom: '8px' }}>✓ Priority support always</li>
                  <li style={{ marginBottom: '8px' }}>✓ Beta access to innovations</li>
                  <li style={{ marginBottom: '8px' }}>✓ Direct vendor escalation</li>
                  <li style={{ marginBottom: '8px' }}>✓ Extended warranties</li>
                  <li>✓ Local spare parts</li>
                </ul>
              </div>
            </div>

            <p style={{ 
              ...paragraphStyle, 
              fontSize: '1.125rem',
              fontWeight: '500',
              color: 'rgb(215, 216, 217)',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              These aren't just logos on our website.<br />
              They're promises to you.
            </p>
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
            Want enterprise-grade solutions with startup agility?
          </p>

          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1rem',
            marginBottom: '32px'
          }}>
            Our partnerships make it possible.
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
              Start Your Project
            </Link>
            <Link 
              href="/services/specifications"
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
              View Technical Specifications
            </Link>
          </div>
        </section>

        <div style={dividerStyle} />
      </div>
    </div>
  )
}