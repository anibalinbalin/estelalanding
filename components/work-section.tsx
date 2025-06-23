'use client'

import Link from 'next/link'

export function WorkSection() {
  const projects = [
    {
      id: 'hospital-network',
      title: 'Hospital Network Infrastructure',
      client: 'Regional Hospital System',
      year: '2023',
      category: 'Infrastructure',
      duration: '6 months',
      challenge: 'Complete network overhaul for a 300-bed hospital with zero downtime requirements.',
      solution: 'Phased deployment of redundant infrastructure with automated failover systems.',
      technologies: ['Lenovo ThinkSystem', 'UniFi Enterprise', 'Synology NAS', 'Acronis Backup'],
      results: [
        '99.99% uptime achieved',
        'Zero patient data loss',
        '40% reduction in IT incidents',
        'HIPAA compliance certified'
      ],
      testimonial: "They didn't just upgrade our network. They gave us peace of mind."
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing Platform',
      client: 'Industrial Manufacturing Corp',
      year: '2023',
      category: 'Development',
      duration: '8 months',
      challenge: 'Legacy manufacturing systems needed real-time monitoring and predictive maintenance.',
      solution: 'Custom IoT platform with machine learning for predictive analytics.',
      technologies: ['Edge Computing', 'Time Series DB', 'Machine Learning', 'Real-time Dashboard'],
      results: [
        '30% reduction in downtime',
        '$2M saved in prevented failures',
        'Real-time visibility across 50+ machines',
        'ROI achieved in 6 months'
      ],
      testimonial: "We can now predict machine failures before they happen. It's changed everything."
    },
    {
      id: 'finance-security',
      title: 'Financial Services Security',
      client: 'Regional Credit Union',
      year: '2022',
      category: 'Security',
      duration: '4 months',
      challenge: 'Cybersecurity overhaul for banking compliance and threat protection.',
      solution: 'Multi-layered security architecture with 24/7 monitoring and incident response.',
      technologies: ['Next-Gen Firewall', 'SIEM', 'Endpoint Protection', 'Security Training'],
      results: [
        'Zero security incidents since deployment',
        'SOC 2 Type II compliance achieved',
        '100% staff security training completion',
        'Automated threat detection and response'
      ],
      testimonial: "Our customers sleep better knowing their data is protected by Estela's security."
    },
    {
      id: 'logistics-cloud',
      title: 'Cloud Migration & Modernization',
      client: 'Logistics & Distribution',
      year: '2022',
      category: 'Consulting',
      duration: '5 months',
      challenge: 'Migrate legacy ERP and warehouse systems to cloud with zero business disruption.',
      solution: 'Hybrid cloud strategy with gradual migration and parallel system operation.',
      technologies: ['AWS', 'Kubernetes', 'Microservices', 'API Gateway'],
      results: [
        '60% reduction in infrastructure costs',
        '10x faster deployment cycles',
        '99.9% system availability',
        'Global access for remote teams'
      ],
      testimonial: "The migration was seamless. Our team didn't miss a beat."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
            Our Work
          </p>
          <h1 className="text-4xl font-normal leading-tight mb-4">
            Recent Projects
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Real solutions. Real results. Real impact.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Every project tells a story of transformation. Here are some recent chapters.
          </p>
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Projects */}
        <section className="mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="mb-16">
              {/* Project Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                    {project.category} • {project.year}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.duration}
                  </span>
                </div>
                <h2 className="text-2xl font-medium mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {project.client}
                </p>
                <div className="border-b border-muted/20 mt-6 mb-8" />
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">The Challenge</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Our Solution</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-sm px-3 py-1 bg-muted/10 border border-muted/20 rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Key Results</h3>
                    <ul className="text-base leading-relaxed text-muted-foreground">
                      {project.results.map((result, i) => (
                        <li key={i} className="mb-2">
                          ✓ {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-muted/5 border border-muted/10 rounded-xl p-6 mb-8">
                <blockquote className="text-lg italic leading-relaxed">
                  &ldquo;{project.testimonial}&rdquo;
                </blockquote>
                <cite className="text-sm text-muted-foreground font-mono uppercase tracking-wide mt-4 block">
                  — {project.client}
                </cite>
              </div>

              {index < projects.length - 1 && (
                <div className="h-px bg-border mt-12" />
              )}
            </div>
          ))}
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Approach Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Discovery First</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We don&apos;t start with solutions. We start with understanding. Every project begins with deep discovery to understand your real challenges, not just symptoms.
              </p>

              <h3 className="text-xl font-medium mb-4">Build for Tomorrow</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Quick fixes create bigger problems. We architect solutions that scale with your growth and adapt to future needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Test Everything</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Production is not a testing environment. We validate every component in controlled environments before deployment.
              </p>

              <h3 className="text-xl font-medium mb-4">Measure Impact</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Technology without measurable business impact is just expensive. We define success metrics before we start and track them after deployment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium italic">
              Every project is a partnership.<br />
              Every outcome is measured.<br />
              Every solution is built to last.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            How We Work
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a2224] rounded-full flex items-center justify-center text-sm font-mono text-white">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Discovery & Analysis</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  2-3 weeks of deep discovery. We map your current state, understand your goals, and identify the real challenges behind the symptoms.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a2224] rounded-full flex items-center justify-center text-sm font-mono text-white">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Architecture & Planning</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Detailed technical specifications, phased implementation plan, and risk mitigation strategies. No surprises, no scope creep.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a2224] rounded-full flex items-center justify-center text-sm font-mono text-white">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Staged Implementation</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Phased rollout with continuous validation. Each phase is tested and validated before moving to the next.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a2224] rounded-full flex items-center justify-center text-sm font-mono text-white">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Validation & Handover</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Comprehensive testing, team training, and documentation. We don&apos;t leave until you&apos;re confident and capable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Bottom CTA */}
        <section className="text-center mb-12">
          <p className="text-xl font-medium mb-4">
            Ready to start your transformation?
          </p>

          <p className="text-base text-muted-foreground mb-8">
            Every great project starts with a conversation.
          </p>

          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services"
              className="px-6 py-3 bg-transparent text-muted-foreground border border-muted-foreground rounded-md font-medium text-sm hover:bg-muted-foreground hover:text-background transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </section>

        <div className="h-px bg-border" />
      </div>
    </div>
  )
}