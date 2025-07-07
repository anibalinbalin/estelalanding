'use client'

import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    infrastructureSize: '',
    primaryChallenge: '',
    howDidYouHear: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <main className="mt-10 min-[1100px]:mt-24">
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto flex max-w-[1200px] flex-col items-center">
          <div className="mb-4 min-[1000px]:mb-8 text-center">
            <span className="text-[var(--content-tertiary-p3)] text-sm tracking-wider uppercase font-[GT_America_Mono,monospace]">
              Estela / Contact
            </span>
          </div>
          
          <h1 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-4xl min-[800px]:text-4xl min-[1000px]:text-[3.25rem] font-normal min-[800px]:font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[2.625rem] min-[800px]:leading-[2.625rem] min-[1000px]:leading-[3.625rem] tracking-normal min-[800px]:tracking-normal min-[1000px]:tracking-normal">
            Contact
          </h1>
          <p className="text-center text-[var(--content-secondary-p3)] text-lg mt-4 max-w-2xl">
            Let&apos;s start a conversation.
          </p>
        </div>
      </div>
      
      <div className="mb-16">
        <div className="my-6 min-[800px]:my-10">
          <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)]"></div>
        </div>
      </div>

      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px]">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
                Get Started
              </h2>
              <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-6"></div>
              
              <p className="text-[var(--content-secondary-p3)] mb-8">
                Tell us about your infrastructure challenges.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Current infrastructure size
                  </label>
                  <select
                    name="infrastructureSize"
                    value={formData.infrastructureSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="less-than-50">Less than 50 users</option>
                    <option value="50-200">50-200 users</option>
                    <option value="200-plus">200+ users</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Primary challenge
                  </label>
                  <select
                    name="primaryChallenge"
                    value={formData.primaryChallenge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  >
                    <option value="">Select challenge</option>
                    <option value="performance">Performance issues</option>
                    <option value="security">Security concerns</option>
                    <option value="scaling">Scaling difficulties</option>
                    <option value="integration">Integration problems</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors"
                  >
                    <option value="">Select source</option>
                    <option value="referral">Referral</option>
                    <option value="web-search">Web search</option>
                    <option value="partner">Partner recommendation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[var(--content-raise-p3)] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg text-[var(--content-raise-p3)] focus:outline-none focus:border-[var(--content-accent-p3)] transition-colors resize-vertical"
                  />
                </div>
                
                <div className="flex flex-col gap-2 text-center">
                  <button
                    type="submit"
                    className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)] w-full"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            
            {/* What happens next */}
            <div>
              <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
                What happens next?
              </h2>
              <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-6"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[var(--content-raise-p3)] font-medium mb-2">Within 4 hours:</h3>
                  <p className="text-[var(--content-secondary-p3)]">
                    We acknowledge your message and review your needs
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[var(--content-raise-p3)] font-medium mb-2">Within 24 hours:</h3>
                  <p className="text-[var(--content-secondary-p3)]">
                    We schedule a consultation call at your convenience
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[var(--content-raise-p3)] font-medium mb-2">Within 48 hours:</h3>
                  <p className="text-[var(--content-secondary-p3)]">
                    You receive our initial assessment and recommendations
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-[var(--content-raise-p3)] font-medium mb-4">Your consultation includes:</h3>
                <ul className="text-[var(--content-secondary-p3)] space-y-2 list-none">
                  <li>- 60-90 minute deep dive into your challenges</li>
                  <li>- Infrastructure assessment</li>
                  <li>- Opportunity identification</li>
                  <li>- No-obligation recommendations</li>
                  <li>- Clear next steps</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)] my-16"></div>
          
          {/* Direct Contact Section */}
          <section className="mb-16">
            <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
              Prefer Direct Contact?
            </h2>
            <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Email */}
              <div>
                <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">Email</h3>
                <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4"></div>
                <a href="mailto:hola@este.la" className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)] font-medium text-lg">
                  hola@este.la
                </a>
                <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                  We respond to all emails within 4 business hours.<br />
                  Real responses from real people who know technology.
                </p>
              </div>
              
              {/* Phone */}
              <div>
                <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">Phone</h3>
                <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4"></div>
                <a href="tel:+59822xxxxxx" className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)] font-medium text-lg">
                  +598 2 XXX XXXX
                </a>
                <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                  Monday - Friday: 9:00 - 18:00 UYT<br />
                  Emergency support: 24/7 for existing clients<br /><br />
                  Yes, we actually answer our phones.
                </p>
              </div>
              
              {/* WhatsApp */}
              <div>
                <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">WhatsApp</h3>
                <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4"></div>
                <a href="https://wa.me/5989xxxxxxx" className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)] font-medium text-lg">
                  +598 9X XXX XXX
                </a>
                <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                  For quick questions and urgent matters.<br />
                  Business hours response guaranteed.
                </p>
              </div>
              
            </div>
          </section>
          
          <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)] my-16"></div>
          
          {/* Location & Support Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Visit Us */}
              <div>
                <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
                  Visit Us
                </h2>
                <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-6"></div>
                
                <div className="text-[var(--content-secondary-p3)] space-y-1 mb-6">
                  <p className="text-[var(--content-raise-p3)] font-medium">Estela Technology Solutions</p>
                  <p>[Street Address]</p>
                  <p>[Neighborhood]</p>
                  <p>Montevideo, Uruguay</p>
                  <p>CP XXXXX</p>
                </div>
                
                <div className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] rounded-lg p-6 mb-6">
                  <p className="text-[var(--content-secondary-p3)] text-center">
                    [Interactive Map]
                  </p>
                </div>
                
                <div className="text-[var(--content-secondary-p3)] text-sm space-y-1">
                  <p>Parking available</p>
                  <p>Accessible entrance</p>
                  <p>Coffee always ready</p>
                </div>
              </div>
              
              {/* For Existing Clients */}
              <div>
                <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
                  For Existing Clients
                </h2>
                <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-6"></div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">Support Portal</h3>
                    <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4"></div>
                    <a href="#" className="inline-block bg-[var(--content-accent-p3)] text-white py-2 px-4 rounded-lg font-medium hover:bg-[var(--content-accent-secondary-p3)] transition-colors">
                      Access Client Portal →
                    </a>
                    <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                      Submit tickets, view documentation, check system status
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[var(--content-raise-p3)] text-lg font-medium mb-4">Emergency Support</h3>
                    <div className="h-[1px] w-[100px] border-b border-[var(--stroke-default-p3)] mb-4"></div>
                    <a href="tel:+5989xxxxxxx" className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)] font-medium text-lg">
                      +598 9X XXX XXX
                    </a>
                    <p className="text-[var(--content-secondary-p3)] mt-4 text-sm">
                      24/7 for critical issues<br />
                      Direct line to on-call engineer
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
          
          <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)] my-16"></div>
          
          {/* Bottom Section */}
          <section className="mb-16">
            <div className="text-center">
              <h2 className="text-[var(--content-raise-p3)] text-2xl font-medium mb-2">
                Not ready to talk yet?
              </h2>
              <div className="h-[1px] w-[200px] border-b border-[var(--stroke-default-p3)] mb-6 mx-auto"></div>
              
              <p className="text-[var(--content-secondary-p3)] mb-8">
                That&apos;s fine. Good decisions take time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="/method" className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] text-[var(--content-raise-p3)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-secondary-p3)] transition-colors">
                  Read Our Method
                </a>
                <a href="/company/work" className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] text-[var(--content-raise-p3)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-secondary-p3)] transition-colors">
                  View Our Work
                </a>
                <a href="/company/team" className="bg-[var(--surface-tertiary-p3)] border border-[var(--stroke-default-p3)] text-[var(--content-raise-p3)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-secondary-p3)] transition-colors">
                  Meet Our Team
                </a>
              </div>
              
              <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)] my-8"></div>
              
              <div className="space-y-4">
                <p className="text-[var(--content-secondary-p3)]">
                  The first conversation is always free.
                </p>
                <p className="text-[var(--content-secondary-p3)]">
                  The coffee is too.
                </p>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </main>
  )
}