'use client'

import Link from 'next/link'

export function TeamSection() {
  const team = [
    {
      name: 'Aníbal Barrera',
      role: 'Founder & Technical Director',
      experience: '15+ years',
      specializations: 'Enterprise Architecture, Infrastructure Design, Technical Strategy',
      background: 'Former Senior Solutions Architect at Fortune 500 companies. Led digital transformations for organizations across Latin America.',
      philosophy: 'Technology should solve real problems, not create new ones.',
      certifications: ['AWS Solutions Architect', 'Lenovo Gold Partner', 'UniFi Enterprise Certified'],
      contact: 'anibal@estela.tech'
    },
    {
      name: 'Engineering Team',
      role: 'Distributed Excellence',
      experience: 'On-demand expertise',
      specializations: 'Custom Development, DevOps, Security, Data Engineering',
      background: 'Curated network of senior engineers and specialists. Each project gets the exact expertise it needs.',
      philosophy: 'Right expert, right project, right time.',
      certifications: ['Various cloud certifications', 'Security clearances', 'Industry specializations'],
      contact: 'Available through project engagement'
    }
  ]

  const advisors = [
    {
      name: 'Strategic Advisory Board',
      role: 'Industry Guidance',
      areas: ['Technology Strategy', 'Market Intelligence', 'Partnership Development'],
      description: 'Senior executives and technical leaders from enterprise technology companies who provide strategic guidance and market insight.'
    },
    {
      name: 'Technical Advisory Council',
      role: 'Deep Technical Expertise',
      areas: ['Emerging Technologies', 'Security Standards', 'Compliance Requirements'],
      description: 'Principal engineers and architects from leading technology companies who help us stay ahead of the curve.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
            Our Team
          </p>
          <h1 className="text-4xl font-normal leading-tight mb-2">
            The People Behind Estela
          </h1>
          <p className="text-lg leading-relaxed mb-4 min-[700px]:mb-6">
            Experience. Expertise. Excellence.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4 min-[700px]:mb-6">
            Small team. Big experience. Global reach.
          </p>
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Core Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Core Team
          </h2>

          {team.map((member, index) => (
            <div key={index} className="mb-12 p-8 bg-muted/5 rounded-xl border border-muted/10">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="font-mono text-muted-foreground uppercase tracking-wide">
                    Experience: {member.experience}
                  </span>
                </div>
                <div className="border-b border-muted/20 mt-6 mb-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3">Specializations</h4>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {member.specializations}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3">Background</h4>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {member.background}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3">Philosophy</h4>
                    <blockquote className="text-lg italic leading-relaxed">
                      "{member.philosophy}"
                    </blockquote>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3">Key Certifications</h4>
                    <ul className="text-base leading-relaxed text-muted-foreground">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="mb-2">
                          • {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm font-mono text-muted-foreground">
                    Contact: {member.contact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Advisory Network */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Advisory Network
          </h2>

          <div className="mb-8">
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              We maintain relationships with senior executives and technical leaders across the technology industry. This network provides strategic guidance, market intelligence, and technical expertise that keeps us ahead of emerging trends and challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="p-6 bg-muted/5 rounded-lg border border-muted/10">
                  <h3 className="text-lg font-medium mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {advisor.role}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {advisor.areas.map((area, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-muted/10 border border-muted/20 rounded text-muted-foreground">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {advisor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Small by Design</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We stay small intentionally. Every team member has direct access to decision makers. No layers, no bureaucracy, no delays.
              </p>

              <h3 className="text-xl font-medium mb-4">Expertise on Demand</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We maintain a curated network of senior specialists. Your project gets exactly the expertise it needs, when it needs it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Direct Relationships</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                You work directly with the people making decisions and implementing solutions. No account managers, no project coordinators.
              </p>

              <h3 className="text-xl font-medium mb-4">Long-term Thinking</h3>
              <div className="border-b border-muted/20 mb-4 pb-1" />
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We build relationships, not transactions. Most of our clients have worked with us for multiple years across different projects.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium italic">
              Small team. Deep expertise.<br />
              Direct access. Long-term partnership.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Why This Approach Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Why This Approach Works
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">No Bench Warming</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Large consultancies keep expensive senior people on projects to justify rates. We engage experts only when their specific skills are needed. You pay for expertise, not overhead.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">No Training Projects</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Your project isn't a learning opportunity for junior staff. Every person working on your solution has proven expertise in the specific technologies and challenges you're facing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">No Knowledge Silos</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Information doesn't get lost in translation between layers of management. Technical decisions are made by technical people who understand both the problem and the solution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">No Handoff Drama</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The people who design your solution are the same people who implement it. No requirements lost in translation, no "that's not what we meant" moments.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Bottom CTA */}
        <section className="text-center mb-12">
          <p className="text-xl font-medium mb-4">
            Want to work with people who understand your challenges?
          </p>

          <p className="text-base text-muted-foreground mb-8">
            Skip the layers. Talk directly to the experts.
          </p>

          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link 
              href="/company/work"
              className="px-6 py-3 bg-transparent text-muted-foreground border border-muted-foreground rounded-md font-medium text-sm hover:bg-muted-foreground hover:text-background transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </section>

        <div className="h-px bg-border" />
      </div>
    </div>
  )
}