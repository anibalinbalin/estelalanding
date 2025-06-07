import Link from "next/link"
import { CheckIcon, ServerIcon, NetworkIcon, LockIcon, AlertTriangleIcon, EyeIcon, PhoneIcon } from "lucide-react"

export default function SecurityPage() {
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
            <span className="text-foreground">Security</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px] py-12 text-center">
          <h1 className="text-4xl min-[800px]:text-5xl min-[1000px]:text-6xl font-normal mb-6 text-foreground">
            Cloud & Security
          </h1>
          <p className="text-xl min-[800px]:text-2xl text-muted-foreground mb-2">
            Protection isn&apos;t paranoia. It&apos;s preparation.
          </p>
          <p className="text-lg min-[800px]:text-xl text-muted-foreground">
            We secure your data, your premises, and your peace of mind.
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
          
          {/* Endpoint Protection */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-medium mb-6 text-foreground">Endpoint Protection & EDR</h2>
            
            <div className="bg-muted rounded p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm text-muted-foreground whitespace-pre">
{`  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
  │  LAPTOP 🔒  │    │  DESKTOP 🔒 │    │  MOBILE 🔒  │
  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                            │
                    ┌───────▼────────┐
                    │   EDR PLATFORM │
                    │  ░░░░░░░░░░░░░  │
                    │  ░ DETECTION ░  │
                    │  ░ RESPONSE  ░  │
                    │  ░ HUNTING   ░  │
                    │  ░░░░░░░░░░░░░  │
                    └────────────────┘`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Real-time threat detection and blocking</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Behavioral analysis and machine learning</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Automated incident response</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Cross-platform device management</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Advanced threat hunting capabilities</span>
              </div>
            </div>
          </div>

          {/* Cloud Security */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-medium mb-6 text-foreground">Cloud Security Posture Management</h2>
            
            <div className="bg-muted rounded p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm text-muted-foreground whitespace-pre">
{`     AWS / Azure / GCP          Multi-Cloud Management
    ┌─────────────┐             ┌─────────────────────┐
    │ ☁️ WORKLOADS │ ←──────────→ │   SECURITY CONTROL  │
    │             │             │                     │
    │ • Apps      │             │ • Policy Engine     │
    │ • Data      │             │ • Compliance Check  │
    │ • Storage   │             │ • Config Assessment │
    │ • Network   │             │ • Risk Scoring      │
    └─────────────┘             └─────────────────────┘`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Multi-cloud security assessment</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Configuration drift detection</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Compliance automation (SOC2, ISO27001)</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Identity and access management</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Data loss prevention (DLP)</span>
              </div>
            </div>
          </div>

          {/* Physical Security */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-medium mb-6 text-foreground">Physical Security Systems</h2>
            
            <div className="bg-muted rounded p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm text-muted-foreground whitespace-pre">
{`  📹 CAMERAS          🚪 ACCESS CONTROL     🚨 ALARMS
     │                       │                   │
     └───────────┬───────────┼───────────┬───────┘
                 │           │           │
         ┌───────▼───────────▼───────────▼───────┐
         │      SECURITY MANAGEMENT CENTER       │
         │                                       │
         │  🖥️  Central Monitoring              │
         │  📱  Mobile Alerts                   │
         │  📊  Analytics & Reports             │
         │  🔄  Integration with IT Security    │
         └───────────────────────────────────────┘`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">IP camera systems and video analytics</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Smart card and biometric access control</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Intrusion detection and alarms</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Integrated security management platform</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mobile monitoring and remote control</span>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4 gap-6">
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <NetworkIcon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-medium text-foreground mb-2">Network Security</h3>
              <p className="text-sm text-muted-foreground">Firewalls, VPNs, and network monitoring</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <EyeIcon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-medium text-foreground mb-2">SIEM & SOC</h3>
              <p className="text-sm text-muted-foreground">24/7 security monitoring and incident response</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <LockIcon className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-medium text-foreground mb-2">Identity Management</h3>
              <p className="text-sm text-muted-foreground">SSO, MFA, and privileged access management</p>
            </div>
            
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <AlertTriangleIcon className="w-8 h-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-medium text-foreground mb-2">Vulnerability Management</h3>
              <p className="text-sm text-muted-foreground">Scanning, assessment, and remediation</p>
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

      {/* Cloud Security & Automation */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-6 min-[800px]:col-span-3 mb-4 min-[800px]:mb-0">
            <div className="relative overflow-hidden border border-border rounded-lg min-[600px]:rounded-xl bg-muted p-8">
              <div className="text-center text-muted-foreground">
                <ServerIcon className="w-16 h-16 mx-auto mb-4" />
                <p className="text-sm font-medium">Cloud Security Config</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 min-[800px]:col-span-3 mb-4 min-[800px]:mb-0">
            <div className="relative overflow-hidden border bg-muted border-border rounded-lg min-[600px]:rounded-xl p-8">
              <div className="text-center text-muted-foreground">
                <LockIcon className="w-16 h-16 mx-auto mb-4" />
                <p className="text-sm font-medium">Security Automation</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 min-[800px]:col-start-7 min-[1000px]:col-start-8 min-[800px]:col-span-6 min-[1000px]:col-span-5 min-[800px]:pl-10 min-[1000px]:pl-0">
            <h2 className="text-balance m-0 text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Cloud Security & Automation
            </h2>
            <ul className="list-none m-0 p-0 mt-6 mb-6">
              <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                <CheckIcon className="w-3 h-3 mr-2 shrink-0 text-green-600" />
                <div className="font-normal leading-[1.125rem] min-[800px]:leading-6 text-sm min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-muted-foreground">
                  Unified security management across cloud and on-premises infrastructure
                </div>
              </li>
              <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                <CheckIcon className="w-3 h-3 mr-2 shrink-0 text-green-600" />
                <div className="font-normal leading-[1.125rem] min-[800px]:leading-6 text-sm min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-muted-foreground">
                  Automated security policy deployment and compliance monitoring
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Integrated Security Operations */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="m-auto max-w-[1200px]">
          <h2 className="text-balance m-0 text-center text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mt-0 min-[800px]:mt-48">
            Integrated Security Operations
            <br className="hidden min-[800px]:block" />
            <span className="text-muted-foreground">Comprehensive Protection for Modern Threats</span>
          </h2>
        </div>
      </div>

      {/* Security Monitoring & Analytics */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
            <h2 className="mb-4 text-balance m-0 text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Security Monitoring & Analytics
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide">
                Advanced security information and event management (SIEM) solutions provide real-time visibility into your security posture with comprehensive logging and analysis.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden border bg-muted border-border col-span-12 min-[800px]:col-start-7 min-[1000px]:col-start-8 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <div className="relative items-center w-full flex h-full justify-center p-8">
              <div className="text-center text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-card rounded p-4 border">
                    <div className="text-2xl font-bold text-red-600">0</div>
                    <div className="text-xs">Active Threats</div>
                  </div>
                  <div className="bg-card rounded p-4 border">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-xs">Protected</div>
                  </div>
                </div>
                <p className="text-sm">Security Monitoring Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Risk Management */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-start-7 min-[1000px]:col-start-8 min-[800px]:col-span-6 min-[1000px]:col-span-5 mb-4 min-[800px]:mb-0 min-[800px]:order-1 pl-0">
            <h2 className="mb-4 text-balance m-0 text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Compliance & Risk Management
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide">
                Ensure regulatory compliance and manage security risks with automated assessments, policy enforcement, and comprehensive audit trails for industry standards.
              </p>
            </div>
          </div>
          <div className="relative col-start-1 overflow-hidden border bg-muted border-border col-span-12 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <div className="p-8 text-center text-muted-foreground">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-card rounded p-4 border">
                  <div className="text-lg font-bold text-blue-600">ISO 27001</div>
                  <div className="text-xs">Compliant</div>
                </div>
                <div className="bg-card rounded p-4 border">
                  <div className="text-lg font-bold text-green-600">SOC 2</div>
                  <div className="text-xs">Certified</div>
                </div>
              </div>
              <p className="text-sm">Compliance Management System</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Architecture & Best Practices */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[800px]:col-span-5 mb-4 min-[800px]:mb-0">
            <h2 className="mb-4 text-balance m-0 text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Security Architecture & Best Practices
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide">
                Comprehensive security architecture design with defense-in-depth strategies, zero-trust principles, and industry best practices implementation.
              </p>
            </div>
          </div>
          <div className="col-span-12 min-[800px]:col-start-7 min-[1000px]:col-start-8 min-[800px]:col-span-6 min-[1000px]:col-span-5 pl-0 min-[600px]:pl-10">
            <div className="flex flex-row items-start gap-4">
              <div className="mb-3 rounded p-2 text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20">
                <AlertTriangleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                  Proactive threat hunting and vulnerability management
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 mt-6 mb-6">
              <div className="mb-3 rounded p-2 text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20">
                <NetworkIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                  Multi-layered security controls with automated incident response
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Background Pattern */}
      <div className="w-full px-5 min-[600px]:px-10 mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
          {/* Background Pattern */}
          <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between opacity-10">
            {Array.from({ length: 17 }, (_, i) => (
              <div key={i} className="h-full w-[1px] bg-muted-foreground"></div>
            ))}
          </div>
          
          <div className="relative flex items-center justify-between gap-4 border p-4 bg-card border-border shadow-lg min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-lg min-[600px]:rounded-lg max-[399px]:flex-col">
            <div>
              <h2 className="text-balance m-0 text-foreground text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide max-[399px]:text-center">
                Secure your business today
                <br />
                <span className="text-muted-foreground">Professional security consultation</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-primary"
              >
                Get Security Assessment
              </Link>
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-outline"
              >
                Contact Security Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-20 min-[1000px]:mt-36 mb-20 min-[1000px]:mb-36">
        <div className="w-full px-5 min-[600px]:px-10">
          <div className="m-auto max-w-[1200px]">
            <h2 className="text-balance m-0 mb-12 text-foreground text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Security Services Overview
            </h2>
          </div>
        </div>
        <div className="w-full px-5 min-[600px]:px-10">
          <div className="py-8 m-auto max-w-[1200px] border bg-card border-border shadow-sm rounded-lg min-[600px]:rounded-xl">
            <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
              <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground">
                Security Monitoring
              </div>
              <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:!pl-0">
                24/7 SOC with real-time threat detection
              </div>
            </div>
            <div className="my-3 w-full h-[1px] border-b border-border"></div>
            <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
              <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground">
                Threat Intelligence
              </div>
              <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:!pl-0">
                Advanced threat hunting and analysis
              </div>
            </div>
            <div className="my-3 w-full h-[1px] border-b border-border"></div>
            <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
              <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground">
                Compliance Standards
              </div>
              <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:!pl-0">
                ISO 27001, SOC 2, GDPR, HIPAA
              </div>
            </div>
            <div className="my-3 w-full h-[1px] border-b border-border"></div>
            <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
              <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground">
                Response Time
              </div>
              <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:!pl-0">
                &lt; 15 minutes for critical incidents
              </div>
            </div>
            <div className="my-3 w-full h-[1px] border-b border-border"></div>
            <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
              <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground">
                Security Architecture
              </div>
              <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:!pl-0">
                Zero-trust with defense-in-depth
                <Link 
                  href="/services/security/specifications" 
                  className="text-green-600 hover:text-green-700 mt-4 flex items-center font-mono font-normal leading-4 text-xs tracking-wider uppercase"
                >
                  View detailed security specs
                  <svg width="12" height="12" className="text-green-600 ml-1 transform transition-transform">
                    <path d="M4 6l4-4v8z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full px-5 min-[600px]:px-10 mb-20">
        <div className="m-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl min-[1000px]:text-4xl font-medium mb-8 text-foreground">
              Ready to secure your infrastructure?
            </h2>
            
            <div className="flex flex-col min-[600px]:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-primary"
              >
                Get Security Assessment
              </Link>
              <Link 
                href="/company/work" 
                className="oxide-nav-button oxide-nav-button-outline"
              >
                View Security Case Studies
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm">
                Security Emergency? Call us: <a href="tel:+59822000000" className="text-foreground hover:underline">+598 2 200 0000</a>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              24/7 security incident response available.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}