'use client'

import { Link } from 'next-view-transitions'
import HexagonalSlidingBars from '@/components/ui/hexagonal-sliding-bars'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'

export function MethodPhilosophy() {
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
            { label: 'Estela', href: '/' },
            { label: 'Method', href: '/method' },
            { label: 'Philosophy' }
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
          Our Philosophy
        </h1>
        
        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          The deeper thinking that shapes everything we build.
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

        {/* 5.1 The Hexagon Principle */}
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
            5.1 The Hexagon Principle
          </h2>
          
          <p style={paragraphStyle}>
            Nature&apos;s most efficient shape. Maximum strength, minimum material. That&apos;s how we build systems.
          </p>
          
          <p style={paragraphStyle}>
            Look at a honeycomb. Thousands of years of evolution produced the hexagon—not the square, not the circle, 
            but the six-sided cell that provides maximum storage with minimum wax. No wasted space. No excess material. 
            Perfect structural integrity.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                The Hexagon in Technology:
              </h3>
              <ul style={{ ...paragraphStyle, marginLeft: '16px' }}>
                <li>• Six core services, each supporting the others</li>
                <li>• Redundancy without excess</li>
                <li>• Load distributed evenly</li>
                <li>• No single point of failure</li>
                <li>• Scalable in any direction</li>
                <li>• Efficient resource utilization</li>
              </ul>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            We apply this principle to every system we design, aiming for inherent resilience through interconnected support, 
            efficient load distribution, and scalability without single points of failure—much like a honeycomb adapts and endures.
          </p>
          
          <p style={paragraphStyle}>
            The hexagon teaches us that strength comes not from rigid structures but from flexible connections. 
            Each element supports its neighbors. Remove one, and the others compensate. Add one, and the whole grows stronger.
          </p>
          
          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            Efficiency through geometry. Reliability through design.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.2 Learning from History */}
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
            5.2 Learning from History
          </h2>
          
          <p style={paragraphStyle}>
            Grace Hopper simplified computing for humans. Euclid built vast truths from fundamental axioms. 
            We apply timeless principles to modern problems.
          </p>
          
          <p style={paragraphStyle}>
            Technology changes. Human nature doesn&apos;t. The challenges we face today—complexity, scale, integration—aren&apos;t new. 
            They&apos;re ancient problems in modern dress.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                From Grace Hopper
              </h3>
              <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                &quot;The most dangerous phrase in the language is &apos;we&apos;ve always done it this way.&apos;&quot;
              </p>
              <p style={paragraphStyle}>
                She invented the compiler because she was tired of writing the same code repeatedly. 
                We automate not because it&apos;s trendy, but because repetition breeds errors and wastes human potential.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                From Euclid
              </h3>
              <p style={paragraphStyle}>
                He demonstrated how vast geometric truths could be built from a few fundamental axioms and logical deduction. 
                We believe enduring technology is similarly built—on sound first principles and clear, rational design, 
                creating systems that are both complex and comprehensible.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                From the Bauhaus Movement
              </h3>
              <p style={paragraphStyle}>
                They sought a radical unity of art, craft, and technology, believing that even everyday objects should be designed 
                with both functional integrity and aesthetic clarity. We see our systems through a similar lens—where elegant design 
                serves practical purpose, and robust function possesses its own inherent beauty.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            History&apos;s greatest innovations came from connecting ideas that seemed unrelated. We do the same.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.3 The Art Connection */}
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
            5.3 The Art Connection
          </h2>
          
          <p style={paragraphStyle}>
            Why does our CEO study Renaissance paintings? Because system design is composition. Balance. 
            Seeing the whole while perfecting the details.
          </p>
          
          <p style={paragraphStyle}>
            Most see art and technology as opposites. We see them as variations on a theme: creating order from chaos, 
            finding patterns in complexity, communicating ideas that transcend their medium.
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Composition
              </h3>
              <p style={paragraphStyle}>
                Every painting has a focal point, supporting elements, and negative space. So does every network. 
                The critical servers draw focus. Redundant systems provide support. Proper segmentation creates breathing room.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Color Theory
              </h3>
              <p style={paragraphStyle}>
                Artists know that colors affect each other—red looks different next to blue than next to orange. 
                Systems have the same interdependence. A fast NVME impacts more than just storage. 
                Quality switches improve more than just networking.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Perspective
              </h3>
              <p style={paragraphStyle}>
                Renaissance artists discovered that showing depth required understanding viewpoint. We apply the same principle: 
                your infrastructure looks different from the user&apos;s desk than from the server room. Both perspectives matter.
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Restoration
              </h3>
              <p style={paragraphStyle}>
                Our CEO doesn&apos;t just study paintings—he restores them. Taking something damaged by time and neglect, 
                understanding its original intent, and carefully bringing it back to life. We do the same with legacy systems.
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            Art isn&apos;t decoration. It&apos;s a way of seeing.
          </p>
          <p style={paragraphStyle}>
            Technology isn&apos;t just function. It&apos;s a way of thinking.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.4 Results, Not Reports */}
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
            5.4 Results, Not Reports
          </h2>
          
          <p style={paragraphStyle}>
            We measure success by one metric: Does your technology make your work better? Everything else is vanity.
          </p>
          
          <p style={paragraphStyle}>
            The IT industry drowns in metrics. Uptime percentages. Ticket closure rates. Bandwidth utilization. 
            Compliance scores. Numbers that impress auditors but ignore the only question that matters: 
            is your technology helping or hindering?
          </p>
          
          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                Our Success Metrics
              </h3>
              <p style={paragraphStyle}>
                <strong>Not:</strong> How many tickets we closed<br />
                <strong>But:</strong> How many tickets never opened
              </p>
              <p style={paragraphStyle}>
                <strong>Not:</strong> How fast we responded<br />
                <strong>But:</strong> How rarely you need us
              </p>
              <p style={paragraphStyle}>
                <strong>Not:</strong> How much technology we installed<br />
                <strong>But:</strong> How invisible it became
              </p>
              <p style={paragraphStyle}>
                <strong>Not:</strong> How many reports we generated<br />
                <strong>But:</strong> How many decisions they enabled
              </p>
            </div>
          </div>
          
          <p style={paragraphStyle}>
            We&apos;ve seen companies with 99.99% uptime whose employees waste hours daily fighting their tools. 
            We&apos;ve seen others with modest infrastructure whose teams flow effortlessly through their work.
          </p>
          
          <p style={paragraphStyle}>
            The difference isn&apos;t in the specifications. It&apos;s in the philosophy: technology should disappear 
            into productivity. The best system is the one you never think about because it never fails you.
          </p>
          
          <p style={paragraphStyle}>
            When clients thank us, it&apos;s rarely for technical feats. It&apos;s for giving them back their time, 
            their focus, their ability to do what they do best.
          </p>
          
          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            That&apos;s the only result that matters.
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
            These philosophies aren&apos;t abstract concepts.<br />
            They&apos;re the foundation of every decision we make.
          </p>
          
          <p style={paragraphStyle}>
            From the hexagonal efficiency of our network designs to the artistic attention we bring to cable management. 
            From the historical lessons that guide our strategies to the results-focused metrics that prove our worth.
          </p>
          
          <p style={paragraphStyle}>
            Philosophy without practice is just theory.
          </p>
          <p style={paragraphStyle}>
            Practice without philosophy is just habit.
          </p>
          
          <p style={paragraphStyle}>
            Together, they create systems that transcend their specifications to become something more:
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
            Thank you for reading The Estela Method.
          </p>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.125rem',
            color: 'var(--foreground)'
          }}>
            Now let&apos;s put it to work.
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Navigation */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link 
            href="/method/practices"
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
            ← Previous: Practices
          </Link>
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
            Back to Method Overview
          </Link>
        </div>
      </div>
    </div>
  );
}