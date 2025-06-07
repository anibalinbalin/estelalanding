'use client'

import Link from 'next/link'

export function WorkSection() {
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

  const caseStudyStyle = {
    marginBottom: '64px',
    padding: '32px',
    backgroundColor: 'rgba(126, 131, 133, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(126, 131, 133, 0.1)'
  }

  const metricsTableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: '24px',
    fontFamily: 'GT_America_Mono, monospace',
    fontSize: '0.9rem'
  }

  const cellStyle = {
    padding: '16px',
    textAlign: 'center' as const,
    borderRight: '1px solid rgba(126, 131, 133, 0.2)',
    borderBottom: '1px solid rgba(126, 131, 133, 0.2)'
  }

  const progressBarStyle = {
    width: '100%',
    height: '24px',
    backgroundColor: 'rgba(126, 131, 133, 0.2)',
    borderRadius: '4px',
    marginBottom: '8px',
    overflow: 'hidden' as const
  }

  return (
    <div style={pageStyles}>
      <div className="section-spacing" style={{ maxWidth: '680px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Company / Work
        </div>

        <div style={dividerStyle} />

        {/* Main Title */}
        <h1 style={titleStyle}>
          Our Work
        </h1>
        <p style={subtitleStyle}>
          13 years. 50+ organizations. Zero failures.
        </p>

        <p style={leadStyle}>
          Every project tells a story of transformation.
        </p>
        
        <div style={dividerStyle} />

        {/* Featured Case Studies */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Featured Case Studies
          </h2>

          {/* Healthcare Case Study */}
          <div style={caseStudyStyle}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Healthcare Institution
            </h3>
            <p style={{ 
              fontSize: '1.125rem',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)',
              marginBottom: '24px'
            }}>
              From Chaos to Compliance
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <div style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>
              <p><strong>Industry:</strong> Medical Laboratory</p>
              <p><strong>Size:</strong> 200+ employees, 3 locations</p>
              <p><strong>Timeline:</strong> 12 weeks</p>
            </div>

            {/* The Challenge */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                The Challenge:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Failing compliance audits</li>
                <li style={{ marginBottom: '8px' }}>15-year-old server infrastructure</li>
                <li style={{ marginBottom: '8px' }}>No disaster recovery plan</li>
                <li style={{ marginBottom: '8px' }}>Daily system crashes</li>
                <li>Patient data at risk</li>
              </ul>
            </div>

            {/* Our Solution */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                Our Solution:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Full infrastructure virtualization (VMware)</li>
                <li style={{ marginBottom: '8px' }}>Synology NAS with real-time replication</li>
                <li style={{ marginBottom: '8px' }}>SentinelOne endpoint protection</li>
                <li style={{ marginBottom: '8px' }}>Automated backup system (3-2-1 strategy)</li>
                <li>24/7 monitoring implementation</li>
              </ul>
            </div>

            {/* The Results */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                The Results:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              
              <table style={metricsTableStyle}>
                <tbody>
                  <tr>
                    <td style={{ ...cellStyle, borderLeft: '1px solid rgba(126, 131, 133, 0.2)' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>100%</div>
                      <div style={{ fontSize: '0.8rem' }}>Compliance<br />Audit Score</div>
                    </td>
                    <td style={cellStyle}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>Zero Downtime</div>
                      <div style={{ fontSize: '0.8rem' }}>in 2 Years<br />Achieved</div>
                    </td>
                    <td style={{ ...cellStyle, borderRight: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>45 seconds</div>
                      <div style={{ fontSize: '0.8rem' }}>Recovery Time<br />Objective</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...cellStyle, borderLeft: '1px solid rgba(126, 131, 133, 0.2)', borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>80%</div>
                      <div style={{ fontSize: '0.8rem' }}>Faster<br />Processing</div>
                    </td>
                    <td style={{ ...cellStyle, borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>$200K</div>
                      <div style={{ fontSize: '0.8rem' }}>Annual Cost<br />Savings</div>
                    </td>
                    <td style={{ ...cellStyle, borderRight: 'none', borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>3 Minutes</div>
                      <div style={{ fontSize: '0.8rem' }}>Data Restore<br />Capability</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Client Quote */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                Client Quote:
              </h4>
              <blockquote style={{ 
                ...paragraphStyle,
                fontStyle: 'italic',
                marginLeft: '24px',
                borderLeft: '3px solid rgba(126, 131, 133, 0.3)',
                paddingLeft: '24px',
                color: 'rgb(215, 216, 217)'
              }}>
                "Estela didn't just fix our IT. They transformed how we deliver patient care. Our systems are now as reliable as our commitment to health."
                <footer style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>
                  - Laboratory Director
                </footer>
              </blockquote>
            </div>

            <Link 
              href="/case-studies/healthcare"
              style={{
                color: 'rgb(126, 131, 133)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(215, 216, 217)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(126, 131, 133)'}
            >
              [View Full Case Study →]
            </Link>
          </div>

          <div style={dividerStyle} />

          {/* Architecture Case Study */}
          <div style={caseStudyStyle}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Architecture Firm
            </h3>
            <p style={{ 
              fontSize: '1.125rem',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)',
              marginBottom: '24px'
            }}>
              Designing Without Delays
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <div style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>
              <p><strong>Industry:</strong> Architecture & Design</p>
              <p><strong>Size:</strong> 50 architects, 3 offices</p>
              <p><strong>Timeline:</strong> 8 weeks</p>
            </div>

            {/* The Challenge */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                The Challenge:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>4K CAD files taking 20+ minutes to open</li>
                <li style={{ marginBottom: '8px' }}>Remote offices constantly disconnected</li>
                <li style={{ marginBottom: '8px' }}>10TB of unorganized project files</li>
                <li style={{ marginBottom: '8px' }}>Version control nightmares</li>
                <li>Freelancers couldn't access systems</li>
              </ul>
            </div>

            {/* Our Solution */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                Our Solution:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              <ul style={{ ...paragraphStyle, marginLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>10Gb fiber backbone throughout building</li>
                <li style={{ marginBottom: '8px' }}>UniFi Dream Machine Pro setup</li>
                <li style={{ marginBottom: '8px' }}>Synology DS3622xs+ with NVMe cache</li>
                <li style={{ marginBottom: '8px' }}>Site-to-site VPN for all offices</li>
                <li>Secure freelancer access portal</li>
              </ul>
            </div>

            {/* The Results */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                The Results:
              </h4>
              <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '16px', paddingBottom: '4px' }}></div>
              
              <table style={metricsTableStyle}>
                <tbody>
                  <tr>
                    <td style={{ ...cellStyle, borderLeft: '1px solid rgba(126, 131, 133, 0.2)' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>30 seconds</div>
                      <div style={{ fontSize: '0.8rem' }}>File Access<br />(was 20 min)</div>
                    </td>
                    <td style={cellStyle}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>99.99%</div>
                      <div style={{ fontSize: '0.8rem' }}>Uptime<br />All Offices</div>
                    </td>
                    <td style={{ ...cellStyle, borderRight: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>5x</div>
                      <div style={{ fontSize: '0.8rem' }}>Faster Work<br />Delivery</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...cellStyle, borderLeft: '1px solid rgba(126, 131, 133, 0.2)', borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>Seamless</div>
                      <div style={{ fontSize: '0.8rem' }}>Remote<br />Collaboration</div>
                    </td>
                    <td style={{ ...cellStyle, borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>40%</div>
                      <div style={{ fontSize: '0.8rem' }}>Productivity<br />Increase</div>
                    </td>
                    <td style={{ ...cellStyle, borderRight: 'none', borderBottom: 'none' }}>
                      <div style={{ fontWeight: 'bold', color: 'rgb(215, 216, 217)', marginBottom: '4px' }}>Perfect</div>
                      <div style={{ fontSize: '0.8rem' }}>Version<br />Control</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Client Quote */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '16px'
              }}>
                Client Quote:
              </h4>
              <blockquote style={{ 
                ...paragraphStyle,
                fontStyle: 'italic',
                marginLeft: '24px',
                borderLeft: '3px solid rgba(126, 131, 133, 0.3)',
                paddingLeft: '24px',
                color: 'rgb(215, 216, 217)'
              }}>
                "We went from waiting for files to waiting for nothing. Estela gave us infrastructure that moves at the speed of creativity."
                <footer style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>
                  - Principal Architect
                </footer>
              </blockquote>
            </div>

            <Link 
              href="/case-studies/architecture"
              style={{
                color: 'rgb(126, 131, 133)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(215, 216, 217)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(126, 131, 133)'}
            >
              [View Full Case Study →]
            </Link>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Industries Overview */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Industries We Transform
          </h2>
          <p style={paragraphStyle}>
            Every sector. Unique challenges. Proven solutions.
          </p>

          <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '32px', paddingBottom: '8px' }}></div>

          {/* Industries Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Healthcare & Medical */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Healthcare<br />& Medical
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Hospitals</li>
                <li>• Laboratories</li>
                <li>• Dental</li>
                <li>• Research</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                HIPAA Ready<br />24/7 Uptime<br />Data Security
              </div>
            </div>

            {/* Creative & Media */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Creative<br />& Media
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Production</li>
                <li>• Ad Agencies</li>
                <li>• Photography</li>
                <li>• Post-Prod</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                8K Workflows<br />Real-time<br />Massive Storage
              </div>
            </div>

            {/* Professional Services */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Professional<br />Services
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Law Firms</li>
                <li>• Accounting</li>
                <li>• Consulting</li>
                <li>• Financial</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                Compliance<br />Document Mgmt<br />Audit Trails
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Architecture & Engineering */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Architecture<br />& Engineering
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Architecture</li>
                <li>• Engineering</li>
                <li>• Construction</li>
                <li>• Planning</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                CAD Optimized<br />Multi-site<br />Large Files
              </div>
            </div>

            {/* Government & Diplomatic */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Government &<br />Diplomatic
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Embassies</li>
                <li>• Agencies</li>
                <li>• NGOs</li>
                <li>• International</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                High Security<br />Global Connect<br />Multi-language
              </div>
            </div>

            {/* Research & Education */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'rgba(126, 131, 133, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(126, 131, 133, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(215, 216, 217)', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Research &<br />Education
              </h3>
              <ul style={{ 
                fontSize: '0.9rem',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'rgb(126, 131, 133)',
                listStyle: 'none',
                padding: 0,
                marginBottom: '16px'
              }}>
                <li>• Laboratories</li>
                <li>• Centers</li>
                <li>• Schools</li>
                <li>• Training</li>
              </ul>
              <div style={{ 
                fontSize: '0.8rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'rgb(126, 131, 133)',
                textAlign: 'center'
              }}>
                Data Integrity<br />Collaboration<br />Remote Access
              </div>
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Success Metrics */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Impact by the Numbers
          </h2>
          <p style={paragraphStyle}>
            Real results. Verified metrics. Consistent delivery.
          </p>

          <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '32px', paddingBottom: '8px' }}></div>

          {/* Overall Performance */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '24px'
            }}>
              Overall Performance
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            {/* Client Satisfaction */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ ...paragraphStyle, marginBottom: 0 }}>Client Satisfaction</span>
                <span style={{ ...paragraphStyle, marginBottom: 0, fontWeight: '500', color: 'rgb(215, 216, 217)' }}>100%</span>
              </div>
              <div style={progressBarStyle}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: 'rgb(126, 131, 133)'
                }}></div>
              </div>
            </div>

            {/* System Uptime */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ ...paragraphStyle, marginBottom: 0 }}>System Uptime</span>
                <span style={{ ...paragraphStyle, marginBottom: 0, fontWeight: '500', color: 'rgb(215, 216, 217)' }}>99.97%</span>
              </div>
              <div style={progressBarStyle}>
                <div style={{ 
                  width: '99.97%', 
                  height: '100%', 
                  backgroundColor: 'rgb(126, 131, 133)'
                }}></div>
              </div>
            </div>

            {/* Response Time */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ ...paragraphStyle, marginBottom: 0 }}>Response Time</span>
                <span style={{ ...paragraphStyle, marginBottom: 0, fontWeight: '500', color: 'rgb(215, 216, 217)' }}>2 hrs</span>
              </div>
              <div style={progressBarStyle}>
                <div style={{ 
                  width: '25%', 
                  height: '100%', 
                  backgroundColor: 'rgb(126, 131, 133)'
                }}></div>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgb(126, 131, 133)', marginTop: '4px' }}>
                Industry Average: 24 hrs
              </div>
            </div>
          </div>

          {/* Financial Impact */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '24px'
            }}>
              Financial Impact
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>35%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Average IT Cost Reduction</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>6 months</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>ROI Timeline</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>$2.5M+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Total Client Savings</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>92%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Budget Accuracy</div>
              </div>
            </div>
          </div>

          {/* Productivity Gains */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '24px'
            }}>
              Productivity Gains
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>73%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Faster file access</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>5x</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Reduction in IT tickets</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>40%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>Increase in team productivity</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '500', color: 'rgb(215, 216, 217)', marginBottom: '8px' }}>10 hrs/week</div>
                <div style={{ fontSize: '0.9rem', color: 'rgb(126, 131, 133)' }}>saved per employee</div>
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
            Ready to join these success stories?
          </p>

          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1rem',
            marginBottom: '32px'
          }}>
            Every transformation starts with a conversation.
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
              href="/case-studies.pdf"
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
              Download Case Studies PDF
            </Link>
          </div>
        </section>

        <div style={dividerStyle} />
      </div>
    </div>
  )
}