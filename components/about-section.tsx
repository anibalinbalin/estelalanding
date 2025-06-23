'use client'

import Link from 'next/link'

export function AboutSection() {
  const values = [
    {
      title: 'Technology Serves Business',
      description: 'We start with your business goals, not our favorite technologies. Every technical decision must advance your objectives.',
      principle: 'Form follows function. Always.'
    },
    {
      title: 'Excellence Over Scale',
      description: 'We choose quality over quantity. Small teams, deep expertise, direct relationships. No bureaucracy, no account managers.',
      principle: 'Do fewer things. Do them better.'
    },
    {
      title: 'Reality Over Marketing',
      description: 'We promise what we can deliver. We deliver what we promise. No overselling, no underwhelming.',
      principle: 'Truth is our competitive advantage.'
    },
    {
      title: 'Long-term Over Quick Wins',
      description: 'We build solutions that last. Sustainable architectures, maintainable code, transferable knowledge.',
      principle: 'Today\'s solution shouldn\'t become tomorrow\'s problem.'
    }
  ]

  const timeline = [
    {
      year: '2015',
      milestone: 'Founded',
      description: 'Started with a simple mission: technology consulting that actually helps businesses.'
    },
    {
      year: '2016-2018',
      milestone: 'Regional Expansion',
      description: 'Established partnerships with major technology vendors. Grew client base across South America.'
    },
    {
      year: '2019-2021',
      milestone: 'Cloud Transformation',
      description: 'Led digital transformations for enterprises moving to cloud-first architectures.'
    },
    {
      year: '2022-2023',
      milestone: 'AI & Automation',
      description: 'Integrated AI and automation solutions for manufacturing and logistics clients.'
    },
    {
      year: '2024-Present',
      milestone: 'Global Reach',
      description: 'Serving clients globally while maintaining personal, direct relationships.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
            About Estela
          </p>
          <h1 className="text-4xl font-normal leading-tight mb-4">
            Technology Consulting with Purpose and Precision
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            No buzzwords. No overselling. Just technology that solves real problems.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Founded in 2015, we've spent nearly a decade proving that technology consulting doesn't have to be complicated, expensive, or disappointing.
          </p>
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">What We Do</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We design, implement, and maintain technology solutions that solve real business problems. Infrastructure, security, custom development, and strategic consulting.
              </p>

              <h3 className="text-xl font-medium mb-4">How We're Different</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Small team. Direct relationships. No layers of management. The person who understands your problem is the same person who solves it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Why We Exist</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Most technology consulting is broken. Overpriced, underdelivered, and overcomplicated. We exist to prove it doesn't have to be this way.
              </p>

              <h3 className="text-xl font-medium mb-4">Who We Serve</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Organizations that need enterprise-grade technology but want startup-level agility. Companies tired of vendor promises and consultant overhead.
              </p>
            </div>
          </div>

          <div className="bg-muted/5 border border-muted/10 rounded-xl p-8 text-center">
            <blockquote className="text-xl italic leading-relaxed mb-4">
              "Technology should be invisible when it works and obvious when it doesn't."
            </blockquote>
            <cite className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
              — Our guiding principle
            </cite>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Core Values
          </h2>

          <div className="space-y-12">
            {values.map((value, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {value.title}
                  </h3>
                  <div className="border-b border-muted/20 mb-4 pb-1" />
                </div>
                <div className="md:col-span-2">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    {value.description}
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    {value.principle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Our Journey
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-16">
                  <span className="text-sm font-mono text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-2">
                    {item.milestone}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Discovery First</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                We spend time understanding your actual challenges, not just your perceived problems. Most technology issues are symptoms, not causes.
              </p>

              <h3 className="text-xl font-medium mb-4">Proven Technologies</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                We use technologies with track records. No bleeding edge experiments in production. Your business isn't our testing ground.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Measurable Outcomes</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                Every project has clear success metrics defined upfront. We measure technical improvements and business impact.
              </p>

              <h3 className="text-xl font-medium mb-4">Knowledge Transfer</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                We don't create vendor lock-in. Your team learns how to maintain and evolve what we build. Independence is the goal.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium italic">
              Understand first. Build second.<br />
              Measure always. Transfer completely.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Recognition */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Recognition & Partnerships
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-muted/5 rounded-lg border border-muted/10">
              <h3 className="text-lg font-medium mb-3">Industry Partnerships</h3>
              <ul className="text-base leading-relaxed text-muted-foreground space-y-2">
                <li>• Lenovo Gold Business Partner</li>
                <li>• UniFi Enterprise Certified Installer</li>
                <li>• Synology Gold Partner</li>
                <li>• Acronis Cloud Solution Provider</li>
              </ul>
            </div>

            <div className="p-6 bg-muted/5 rounded-lg border border-muted/10">
              <h3 className="text-lg font-medium mb-3">Client Success</h3>
              <ul className="text-base leading-relaxed text-muted-foreground space-y-2">
                <li>• 100+ successful projects</li>
                <li>• 100% client retention rate</li>
                <li>• Proven System Stability: Renowned for building and maintaining remarkably stable and dependable client environments.</li>
                <li>• Rapid Realization of Value: Clients typically experience significant positive business impact well within the first year.</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-base text-muted-foreground">
            <p>
              Recognition that matters: client success, not industry awards.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Bottom CTA */}
        <section className="text-center mb-12">
          <p className="text-xl font-medium mb-4">
            Ready to experience technology consulting that actually works?
          </p>

          <p className="text-base text-muted-foreground mb-8">
            Let's start with understanding your real challenges.
          </p>

          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start the Conversation
            </Link>
            <Link 
              href="/work"
              className="px-6 py-3 bg-transparent text-muted-foreground border border-muted-foreground rounded-md font-medium text-sm hover:bg-muted-foreground hover:text-background transition-colors"
            >
              See Our Results
            </Link>
          </div>
        </section>

        <div className="h-px bg-border" />
      </div>
    </div>
  )
}