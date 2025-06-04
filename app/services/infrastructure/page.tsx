import Link from "next/link"
import { CheckIcon, ShieldIcon, WifiIcon, HardDriveIcon, CableIcon, PhoneIcon } from "lucide-react"

export default function InfrastructurePage() {
  return (
    <div className="w-full mt-[2.5rem]">
      {/* Breadcrumb */}
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px] py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Estela</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px] py-12 text-center">
          <h1 className="text-4xl min-[800px]:text-5xl min-[1000px]:text-6xl font-normal mb-6 text-foreground">
            Infrastructure & Networks
          </h1>
          <p className="text-xl min-[800px]:text-2xl text-muted-foreground mb-2">
            The foundation of everything digital.
          </p>
          <p className="text-lg min-[800px]:text-xl text-muted-foreground">
            We build networks that never make you think about networks.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-5 min-[600px]:px-10 mb-16">
        <div className="m-auto max-w-[1200px]">
          <div className="h-[1px] w-full border-b border-border"></div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px] space-y-12">
          
          {/* Enterprise Network Architecture */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-medium mb-6 text-foreground">Enterprise Network Architecture</h2>
            
            <div className="bg-muted rounded p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm text-muted-foreground whitespace-pre">
{`  ┌──────────────┐      ┌──────────────┐
  │   INTERNET   │      │   USERS      │
  └──────┬───────┘      └──────┬───────┘
         │                     │
         └──────┬──────────────┘
                │
         ┌──────▼───────┐
         │  UniFi Dream │
         │  Machine SE  │
         └──────┬───────┘
                │
    ┌───────────┴────────────┐
    │                        │
 ┌──▼───┐  ┌──▼───┐  ┌──▼───┐
 │VLAN  │  │VLAN  │  │VLAN  │  Network
 │Admin │  │Users │  │Guest │  Segmentation
 └──────┘  └──────┘  └──────┘`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">UniFi deployment and management</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">VLAN segmentation and security</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Guest networks with captive portals</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Multi-site VPN connections</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Bandwidth optimization</span>
              </div>
            </div>
          </div>

          {/* Server Infrastructure */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-medium mb-6 text-foreground">Server Infrastructure</h2>
            
            <div className="bg-muted rounded p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm text-muted-foreground whitespace-pre">
{`     Physical Layer          Virtualization
    ┌─────────────┐         ┌─────────────┐
    │ ████████████│         │┌───┐┌───┐┌───┐│
    │ ████████████│  ────►  ││VM1││VM2││VM3││
    │ ████████████│         │└───┘└───┘└───┘│
    │ Bare Metal  │         │   vSphere     │
    └─────────────┘         └─────────────┘`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">VMware vSphere environments</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Bare metal server deployment</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Hybrid cloud architectures</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Load balancing and redundancy</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Performance monitoring</span>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4 gap-6">
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <HardDriveIcon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-medium text-foreground mb-2">Storage Solutions</h3>
              <p className="text-sm text-muted-foreground">NAS, SAN, and cloud storage integration</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <CableIcon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-medium text-foreground mb-2">Structured Cabling</h3>
              <p className="text-sm text-muted-foreground">Cat6A, fiber optic, and data center cabling</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <WifiIcon className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-medium text-foreground mb-2">Wireless Networks</h3>
              <p className="text-sm text-muted-foreground">Enterprise WiFi 6E and mesh solutions</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <ShieldIcon className="w-8 h-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-medium text-foreground mb-2">Network Security</h3>
              <p className="text-sm text-muted-foreground">Firewalls, VPNs, and threat protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-5 min-[600px]:px-10 my-20">
        <div className="m-auto max-w-[1200px]">
          <div className="h-[1px] w-full border-b border-border"></div>
        </div>
      </div>

      {/* Real World Example - Case Study */}
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px]">
          <h2 className="text-3xl min-[1000px]:text-4xl font-medium mb-2 text-foreground text-center">
            Real World Example
          </h2>
          <div className="h-[1px] w-full border-b border-border mb-12"></div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-medium mb-6 text-foreground">
              Case Study: Architecture Firm Transformation
            </h3>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Challenge:</h4>
                <p className="text-muted-foreground mb-4">
                  50 designers sharing 4K files across 3 floors
                </p>
                <p className="text-muted-foreground mb-6">
                  20+ minute file access times killing productivity
                </p>
                
                <h4 className="text-lg font-medium mb-4 text-foreground">Our Solution:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">10Gb backbone network throughout building</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Synology NAS with NVMe cache acceleration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">UniFi switching with link aggregation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Future-proof structured cabling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Results:</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border border-border rounded-lg p-4 text-center bg-muted">
                    <div className="text-3xl font-bold text-green-600 mb-1">30 seconds</div>
                    <div className="text-sm text-muted-foreground">File Access</div>
                    <div className="text-xs text-muted-foreground">(was 20 min)</div>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center bg-muted">
                    <div className="text-3xl font-bold text-blue-600 mb-1">99.99%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                    <div className="text-xs text-muted-foreground">Achieved</div>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center bg-muted">
                    <div className="text-3xl font-bold text-purple-600 mb-1">5x</div>
                    <div className="text-sm text-muted-foreground">Faster Work</div>
                    <div className="text-xs text-muted-foreground">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-5 min-[600px]:px-10 my-20">
        <div className="m-auto max-w-[1200px]">
          <div className="h-[1px] w-full border-b border-border"></div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full px-5 min-[600px]:px-10 mb-20">
        <div className="m-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl min-[1000px]:text-4xl font-medium mb-8 text-foreground">
              Ready to build infrastructure that just works?
            </h2>
            
            <div className="flex flex-col min-[600px]:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-primary"
              >
                Get Started
              </Link>
              <Link 
                href="/company/work" 
                className="oxide-nav-button oxide-nav-button-outline"
              >
                See More Case Studies
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm">
                Questions? Call us: <a href="tel:+59822000000" className="text-foreground hover:underline">+598 2 200 0000</a>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              We actually answer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}