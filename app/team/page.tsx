'use client'

import Link from 'next/link'

// Define the team principles for the new section
const teamPrinciples = [
  {
    title: 'A Small, Dedicated Core',
    description: 'We are intentionally small. This ensures every project benefits from the direct involvement and deep focus of our most experienced minds.'
  },
  {
    title: 'Masters of Translation',
    description: 'We thrive on making the complex clear, bridging the gap between intricate technology and tangible human needs.'
  },
  {
    title: 'Directly Accountable',
    description: 'You engage directly with the experts shaping your solution. No layers, no handoffs—just clear communication and unwavering ownership.'
  },
  {
    title: 'Senior Expertise, Universally Applied',
    description: 'Every aspect of your project is handled by seasoned professionals. We don\'t delegate core thinking or critical tasks.'
  },
  {
    title: 'Principled in Practice',
    description: 'Our work is guided by deep-seated beliefs in transparency, craftsmanship, and technology that truly serves people.'
  },
  {
    title: 'Augmented by Curated Specialists',
    description: 'When a unique challenge requires niche expertise beyond our core, we seamlessly integrate trusted, specialized talent—always directed by our central team.'
  }
];

const clientBenefits = [
  'Unfiltered access to senior expertise.',
  'Clear, direct, and efficient communication.',
  'Solutions designed and built by the same dedicated minds.',
  'Agility and responsiveness without bureaucratic overhead.',
  'A true partnership focused on your specific outcomes.'
];

const teamMembers = [
  {
    name: 'Peter Johnson',
    role: 'Co-founder, CEO',
    image: 'https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=88&q=95&auto=format&dpr=2'
  },
  {
    name: 'Aníbal Barrera', 
    role: 'Founder & Technical Director',
    image: 'https://webassets.linear.app/images/ornj730p/production/dff9dd98ea36ac93a38ef6405abc866dda659f68-492x492.jpg?w=88&q=95&auto=format&dpr=2'
  },
  {
    name: 'Alfonso Martinez',
    role: 'Co-founder, CTO', 
    image: 'https://webassets.linear.app/images/ornj730p/production/4d081a7a9ee2575014ab150f2d74cc3e2266a937-300x300.jpg?w=88&q=95&auto=format&dpr=2'
  },
  {
    name: 'Nahuel Rodriguez',
    role: 'Head of Engineering',
    image: 'https://webassets.linear.app/images/ornj730p/production/c5229881e58cfb3a30c31b036e2965f9f327dcc8-512x512.png?w=88&q=95&auto=format&dpr=2'
  },
  {
    name: 'Pablo Garcia',
    role: 'Head of Product',
    image: 'https://webassets.linear.app/images/ornj730p/production/e522be49c136f6b81a1c5cb3aa7b2075f78404c0-1305x1444.jpg?w=88&q=95&auto=format&dpr=2'
  }
];

export default function EstelaTeamPage() { // Renamed component for clarity
  // Updated founding year and introductory text
  const foundingYear = 2011;
  const experienceDuration = new Date().getFullYear() - foundingYear; // Calculates years of experience

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header - Adjusted for "Our Team" */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
            Company / Our Team 
          </p>
          <h1 className="text-4xl font-normal leading-tight mb-4">
            The Estela Team
          </h1>
          {/* Opening Statement */}
          <p className="text-lg leading-relaxed mb-6">
            Estela is a collective of dedicated experts, intentionally structured for direct impact and deep collaboration. We believe that true solutions emerge when seasoned professionals work in concert, free from traditional hierarchies and focused purely on the challenge at hand. This is not just how we work; it&apos;s who we are.
          </p>
          {/* You can add a sentence about founding year here if desired, e.g.: */}
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            For over {experienceDuration} years, this philosophy has guided our approach to every partnership.
          </p>
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Our Approach to Teamwork & Expertise */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-8 pb-2 border-b border-border">
            Our Approach to Teamwork & Expertise
          </h2>
          {/* Optional: Mention core team members here if you choose */}
          <p className="text-base leading-relaxed text-muted-foreground mb-10"> 
            Our core team—Peter, Aníbal, Alfonso, Nahuel, and Pablo—operates on the following shared principles:
            {/* Or a more general statement if not listing names: 
                "Our team operates on the following shared principles:" 
            */}
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {teamPrinciples.map((principle, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium mb-3">
                  {principle.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-8 pb-2 border-b border-border">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative rounded-md overflow-hidden w-fit mb-5">
                  <img 
                    width="88" 
                    height="88" 
                    src={member.image}
                    alt={member.name}
                    className="w-[88px] h-[88px] object-cover border border-border/20 rounded-md"
                  />
                </div>
                <span className="text-base font-medium leading-relaxed mb-1">
                  {member.name}
                </span>
                <span className="text-base leading-relaxed text-muted-foreground">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* What This Means For You (Client Benefits) */}
        <section className="mb-16">
          <h2 className="text-2xl font-normal mb-8 pb-2 border-b border-border">
            What This Means For You
          </h2>
          <ul className="space-y-4 text-base leading-relaxed text-muted-foreground list-disc list-inside">
            {clientBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>
        
        <div className="h-px bg-border mb-16" />

        {/* Optional: Closing Philosophical Statement */}
        <section className="mb-16 text-center">
           <p className="text-xl italic leading-relaxed text-muted-foreground">
            &ldquo;Technology with soul, delivered by a team with conviction.&rdquo;
            {/* Or: "We build with clarity, operate with integrity, and partner for the long term." */}
           </p>
        </section>

        <div className="h-px bg-border mb-12" />

        {/* Bottom CTA (Kept from your original structure) */}
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
              Start the Conversation
            </Link>
            <Link 
              href="/work" // Or perhaps "/method" or "/services" depending on what you want to link here
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