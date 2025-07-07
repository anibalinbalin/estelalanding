'use client'

import Link from 'next/link'

export function PartnersSection() {
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
      coverage: 'Uruguay & Regional',
      specializations: 'NAS, Backup, Surveillance, Active Directory',
      benefits: [
        'Premier technical support access',
        'Advanced replacement service',
        'Volume licensing discounts',
        'Direct engineering contact',
        'Beta program participation',
        'Migration assistance included'
      ],
      solutions: [
        'DiskStation enterprise NAS',
        'RackStation rackmount units',
        'Surveillance Station systems',
        'Active Backup for Business'
      ],
      metrics: [
        '300+ storage systems deployed',
        '99.99% uptime achieved',
        'Zero data loss incidents',
        'Full disaster recovery capability'
      ],
      portal: 'Visit Synology Partner Portal →'
    },
    {
      name: 'Acronis',
      partnership: 'Cloud Partner Since 2017',
      description: 'Backup and security that actually works when you need it most.',
      level: 'Cloud Solution Provider',
      coverage: 'Global Coverage',
      specializations: 'Cyber Backup, Disaster Recovery, Cyber Protection',
      benefits: [
        'White-label cloud services',
        'Advanced threat protection',
        'Guaranteed recovery times',
        'Compliance assistance',
        'Multi-tenant management',
        '24/7 monitoring included'
      ],
      solutions: [
        'Acronis Cyber Backup',
        'Acronis Cyber Protect',
        'Disaster Recovery as a Service',
        'Cyber Security services'
      ],
      metrics: [
        '10TB+ data under protection',
        '15-minute recovery point objectives',
        'Zero ransomware successes',
        '100% compliance audits passed'
      ],
      portal: 'Visit Acronis Partner Portal →'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
            Technology Partners
          </p>
          <h1 className="text-4xl font-normal leading-tight mb-4">
            Our Strategic Partners
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Partnerships built on trust, tested in production
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Four strategic partnerships. Nine years of proven excellence. Zero compromises.
          </p>
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Partners */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Our Partners
          </h2>

          {partners.map((partner, index) => (
            <div key={index} className="mb-16 p-8 bg-muted/5 rounded-xl border border-muted/10">
              <h3 className="text-xl font-medium mb-4">
                {partner.name}
              </h3>
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
                {partner.partnership}
              </p>
              <div className="border-b border-muted/20 mb-6 pb-2" />

              {/* Logo placeholder */}
              <div className="p-8 bg-muted/10 rounded-lg border border-muted/20 text-center mb-8 text-sm font-mono text-muted-foreground">
                [{partner.name} Logo]
              </div>

              {/* Why Partner */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">
                  Why {partner.name}:
                </h4>
                <p className="text-lg italic leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Partnership Details */}
              <div className="mb-8">
                <div className="mb-4">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                    Partnership Level:
                  </span>
                  <span className="text-sm ml-2">
                    {partner.level}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                    Coverage:
                  </span>
                  <span className="text-sm ml-2">
                    {partner.coverage}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                    Specializations:
                  </span>
                  <span className="text-sm ml-2">
                    {partner.specializations}
                  </span>
                </div>
              </div>

              {/* What This Means for You */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">
                  What This Means for You:
                </h4>
                <div className="border-b border-muted/20 mb-4 pb-1" />
                <ul className="text-base leading-relaxed text-muted-foreground ml-6">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2">
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Solutions */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">
                  Key Solutions We Deploy:
                </h4>
                <ul className="text-base leading-relaxed text-muted-foreground ml-6">
                  {partner.solutions.map((solution, i) => (
                    <li key={i} className="mb-2">
                      - {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success Metrics */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">
                  Success Metrics:
                </h4>
                <ul className="text-base leading-relaxed text-muted-foreground ml-6">
                  {partner.metrics.map((metric, i) => (
                    <li key={i} className="mb-2">
                      - {metric}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portal Link */}
              <Link 
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block py-2"
              >
                [{partner.portal}]
              </Link>
            </div>
          ))}
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Partnership Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-6 pb-2 border-b border-border">
            Partnership Philosophy
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">
              Our Partnership Philosophy
            </h3>
            <div className="border-b border-muted/20 mb-8 pb-2" />

            {/* Philosophy Sections */}
            <div className="ml-6">
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">
                  We Don't Chase Certifications
                </h4>
                <div className="border-b border-muted/20 mb-4 pb-1" />
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  We earn partnerships through real-world excellence. Every partner relationship is tested in production before we formalize it.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">
                  Direct Relationships Matter
                </h4>
                <div className="border-b border-muted/20 mb-4 pb-1" />
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  When you have a problem, we don't open tickets. We call our contacts. Real people who know us and prioritize your needs.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">
                  Quality Over Quantity
                </h4>
                <div className="border-b border-muted/20 mb-4 pb-1" />
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  Four strategic partners. That's it. Each one best-in-class. Each one proven. No compromises.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">
                  Your Advantage
                </h4>
                <div className="border-b border-muted/20 mb-4 pb-1" />
                <ul className="text-base leading-relaxed text-muted-foreground ml-6">
                  <li className="mb-2">✓ Enterprise pricing on day one</li>
                  <li className="mb-2">✓ Priority support always</li>
                  <li className="mb-2">✓ Beta access to innovations</li>
                  <li className="mb-2">✓ Direct vendor escalation</li>
                  <li className="mb-2">✓ Extended warranties</li>
                  <li>✓ Local spare parts</li>
                </ul>
              </div>
            </div>

            <p className="text-lg font-medium text-center italic">
              These aren't just logos on our website.<br />
              They're promises to you.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Bottom CTA */}
        <section className="text-center mb-12">
          <p className="text-xl font-medium mb-4">
            Want enterprise-grade solutions with startup agility?
          </p>

          <p className="text-base text-muted-foreground mb-8">
            Our partnerships make it possible.
          </p>

          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services/specifications"
              className="px-6 py-3 bg-transparent text-muted-foreground border border-muted-foreground rounded-md font-medium text-sm hover:bg-muted-foreground hover:text-background transition-colors"
            >
              View Technical Specifications
            </Link>
          </div>
        </section>

        <div className="h-px bg-border" />
      </div>
    </div>
  )
}