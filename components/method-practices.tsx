'use client'

import { Link } from 'next-view-transitions'
import CustomVerticalBarsNoise from '@/components/ui/custom-vertical-bars-noise'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'

export function MethodPractices() {
  const { resolvedTheme } = useTheme()
  
  const practices = [
    {
      number: '4.1',
      title: 'The 24-Hour Rule',
      intro: 'Our Rapid Response Pledge',
      description: [
        'This rule emerged from a simple observation: most IT problems compound with time. A small network hiccup becomes a cascade failure. A single corrupted file becomes data loss. A confused user becomes a frustrated team.'
      ],
      subsection: {
        title: 'How It Works:',
        items: [
          'All critical issues tracked from first contact',
          'Your issue is immediately addressed by one of our core experts',
          'Initial diagnosis and action plan within 24 hours',
          'Clear communication throughout resolution',
          'Post-incident review for prevention'
        ]
      },
      conclusion: [
        'Critical issues demand immediate attention. Our pledge is a swift, personal response—typically within minutes or hours, not days. You\'ll connect directly with a core team member who understands your setup.',
        '...you\'re never just a ticket in a queue, nor are you met with generic troubleshooting when critical systems are down.'
      ]
    },
    {
      number: '4.2',
      title: 'Documentation as Art',
      intro: 'We believe documentation should illuminate, not intimidate. Ours is designed for clarity and immediate use—visual, practical, and always accessible.',
      description: [
        'Traditional IT documentation fails because it\'s written for auditors, not users. It prioritizes completeness over clarity, compliance over comprehension.'
      ],
      subsection: {
        title: 'Our Approach:',
        items: [
          'Visual diagrams that show, not tell',
          'Quick reference guides for daily tasks',
          'Video walkthroughs for complex procedures',
          'Searchable knowledge base, not binders',
          'Regular updates based on real questions'
        ]
      },
      conclusion: [
        'Every piece of documentation answers three questions: 1. What does this do? 2. How do I use it? 3. What if something goes wrong?',
        'We\'ve learned that the best documentation isn\'t comprehensive—it\'s comprehensible. It\'s not about covering every edge case; it\'s about ensuring your team can handle the cases that actually occur.',
        'Documentation should empower, not overwhelm.'
      ]
    },
    {
      number: '4.3',
      title: 'The Weekly Pulse',
      intro: 'Short, regular check-ins keep systems healthy. 15 minutes can prevent 15 hours of downtime.',
      description: [
        'Most IT disasters announce themselves with whispers before they scream. A disk running at 90% capacity. Memory usage creeping upward. Response times gradually increasing. The Weekly Pulse catches whispers.'
      ],
      subsection: {
        title: 'Our Weekly Routine:',
        items: [
          'Automated system health reports every morning',
          '15-minute review call every Wednesday',
          'Proactive optimization recommendations',
          'Trend analysis and capacity planning',
          'Clear action items with priorities'
        ]
      },
      conclusion: [
        'This isn\'t about creating meetings or generating reports. It\'s about maintaining a rhythm of attention that keeps small issues small. Like a doctor checking vital signs, we monitor what matters and intervene before symptoms become emergencies.',
        'The best problems are the ones that never happen.'
      ]
    },
    {
      number: '4.4',
      title: 'Vendor Relationships',
      intro: 'We maintain direct relationships with Lenovo, UniFi, Synology, and SentinelOne. Your problems become our problems. No runaround.',
      description: [
        'The traditional vendor model creates a triangle of frustration: you call your IT company, they call the vendor, the vendor blames someone else. Hours pass. Days pass. Nothing gets resolved.'
      ],
      subsection: {
        title: 'Our Direct Approach:',
        items: [
          'Named contacts at every partner company',
          'Direct escalation paths for critical issues',
          'Regular technical briefings on new products',
          'Beta access for testing and validation',
          'Guaranteed response times in partner agreements'
        ]
      },
      conclusion: [
        'When a vendor-specific issue arises—be it with Synology, UniFi, or SentinelOne—our established partnerships mean we navigate their support channels with an insider\'s efficiency. We leverage direct contacts and deep product knowledge to accelerate resolution, often pre-testing critical updates in our environment to ensure stability for yours. Our aim is always to shield you from complexity and expedite solutions.',
        'These relationships took years to build. They save you hours every time something goes wrong.'
      ]
    },
    {
      number: '4.5',
      title: 'Knowledge Transfer',
      intro: 'Our goal is to build your team\'s capability, not create reliance.',
      description: [
        'Many IT companies profit from client ignorance. The less you know, the more you need them. We believe the opposite: the more capable you become, the more valuable our partnership.'
      ],
      subsection: {
        title: 'How We Transfer Knowledge:',
        items: [
          'Hands-on training during implementation',
          'Regular lunch-and-learn sessions',
          'Quick reference materials for your team',
          'Escalation procedures clearly defined',
          'Annual capability assessments'
        ]
      },
      conclusion: [
        'We teach your team to handle routine tasks confidently. Change a user password. Add a network printer. Restore a deleted file. Review security logs. These aren\'t complex tasks—they\'re just unfamiliar ones.',
        'Our philosophy is built on empowerment. We believe that the more capable your team becomes with everyday tasks, the more valuable and strategic our partnership evolves.',
        'True partnership means growing together.'
      ]
    }
  ]

  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
      overflowX: 'hidden' as const
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '120px 32px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <Breadcrumb 
            items={[
              { label: 'Estela', href: '/' },
              { label: 'Method', href: '/method' },
              { label: 'Practices' }
            ]} 
          />
          
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
              4
            </div>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '400',
            lineHeight: '2.75rem',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            margin: 0,
            marginBottom: '24px'
          }}>
            Our Practices
          </h1>
          
          <div style={{
            height: '1px',
            marginBottom: '48px'
          }} />

          <p style={{
            fontSize: '19px',
            fontWeight: '400',
            lineHeight: '30.4px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '48px'
          }}>
            Daily operational excellence through proven methods and consistent execution.
          </p>

          {/* Custom Vertical Bars Noise Effect */}
          <div style={{ 
            position: 'relative',
            marginBottom: '48px',
            borderRadius: '8px',
            border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
            height: '300px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <CustomVerticalBarsNoise 
              backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
              pressedBackgroundColor={resolvedTheme === 'light' ? '#e0e0e0' : '#4a3a20'}
              lineColor={resolvedTheme === 'light' ? { r: 102, g: 102, b: 102 } : { r: 245, g: 185, b: 68 }}
            />
          </div>
        </div>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        {practices.map((practice, index) => (
          <div key={`practice-${index}`} style={{ marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)', 
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {practice.number} {practice.title}
              </h2>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '500',
                lineHeight: '27.2px',
                letterSpacing: 'normal',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px'
              }}>
                {practice.intro}
              </p>
              
              {practice.description.map((paragraph, i) => (
                <p key={`desc-${i}`} style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '27.2px',
                  letterSpacing: 'normal',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  marginBottom: '24px'
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    color: 'var(--foreground)',
                    marginBottom: '8px',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}>
                    {practice.subsection.title}
                  </h3>
                  <ul style={{
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '27.2px',
                    letterSpacing: 'normal',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                    color: 'var(--content-secondary-p3)',
                    marginLeft: '16px',
                    listStyle: 'none',
                    padding: '0'
                  }}>
                    {practice.subsection.items.map((item, i) => (
                      <li key={`item-${i}`} style={{ marginBottom: '8px' }}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              {practice.conclusion.map((paragraph, i) => (
                <p key={`conclusion-${i}`} style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '27.2px',
                  letterSpacing: 'normal',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  marginBottom: '24px'
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            {index < practices.length - 1 && (
              <div style={{
                height: '1px',
            marginBottom: '48px'
              }} />
            )}
          </div>
        ))}
        
        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            fontSize: '1.125rem', 
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            These practices aren't rules imposed from above.
          </p>
          
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '24px'
          }}>
            They're lessons learned from 13 years of service. Each one exists because it solves a real problem. 
            Each one evolves as we learn better ways. Each one focuses on a simple goal:
          </p>
          
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            fontStyle: 'italic',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>

          </p>
        </section>

        <div style={{
          height: '1px',
            marginBottom: '48px'
        }} />

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href="/method/implementation"
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
            ← Previous: Implementation
          </Link>
          <Link 
            href="/method/philosophy"
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
            Next: Philosophy →
          </Link>
        </div>
      </div>
    </div>
  );
}