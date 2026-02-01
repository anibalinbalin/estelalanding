'use client'

import { useLanguage } from '@/components/language-provider'
import { ModeToggle } from '@/components/ui/mode-toggle'
import {
  securityContent,
  infrastructureContent,
  developmentContent,
  consultingContent,
  contactContent
} from '@/lib/site-content'
import {
  AecidAscii,
  AparatoAscii,
  AvisaAscii,
  BoxAscii,
  CceAscii,
  CimarronAscii,
  DiagnosticoAscii,
  DominioAscii,
  DonobldulioAscii,
  Dsr360Ascii,
  EmbajadaAscii,
  FullcatAscii,
  LamayorAscii,
  MuecaAscii,
  OliveraAscii,
  OrbenAscii,
  OrientalAscii,
  PlataformaAscii,
  ProducrersAscii,
  SidleyjonesAscii,
  SodreAscii,
  TafirelAscii,
  UfilmsAscii,
  VerneAscii
} from '@/components/ascii-partners'

const partnerLogos = [
  { name: 'Don Obdulio', Component: DonobldulioAscii },
  { name: 'Aparato', Component: AparatoAscii },
  { name: 'SODRE', Component: SodreAscii },
  { name: 'DSR360', Component: Dsr360Ascii },
  { name: 'Sidley Jones', Component: SidleyjonesAscii },
  { name: 'Plataforma', Component: PlataformaAscii },
  { name: 'Producers', Component: ProducrersAscii },
  { name: 'Cimarrón', Component: CimarronAscii },
  { name: 'U Films', Component: UfilmsAscii },
  { name: 'Diagnóstico', Component: DiagnosticoAscii },
  { name: 'AECID', Component: AecidAscii },
  { name: 'CCE', Component: CceAscii },
  { name: 'Olivera', Component: OliveraAscii },
  { name: 'Tafirel', Component: TafirelAscii },
  { name: 'La Mayor', Component: LamayorAscii },
  { name: 'Oriental', Component: OrientalAscii },
  { name: 'Mueca', Component: MuecaAscii },
  { name: 'Verne', Component: VerneAscii },
  { name: 'Embajada', Component: EmbajadaAscii },
  { name: 'Avisa', Component: AvisaAscii },
  { name: 'Dominio', Component: DominioAscii },
  { name: 'Fullcat', Component: FullcatAscii },
  { name: 'Orben', Component: OrbenAscii },
  { name: 'Box', Component: BoxAscii },
]

// Build unified content from page exports
const content = {
  en: {
    // Section Headers
    sectionServices: "Services",
    sectionInfra: "Infrastructure & Networks",
    sectionSecurity: "Managed Security",
    sectionDev: "Development & AI",
    sectionConsulting: "Consulting & Support",
    sectionMethod: "Method",
    sectionCompany: "Company",
    sectionAbout: "About",
    sectionPrinciples: "Principles",
    sectionWork: "Our Work",
    sectionPartners: "Partners",
    sectionTeam: "Team",
    sectionContact: "Contact",

    // Hero
    heroTitle: "The shortest path between the problem and the solution",
    heroSubtitle: "The Greeks invented logic, geometry, and a god for every need. We apply the first two to build solutions. From the third—the gods, not the needs—we kept only the marble, which requires no updates.",
    heroSubtitleTech: "Infrastructure automation, security hardening, and development services. REST APIs, CI/CD pipelines, and infrastructure-as-code deployments.",

    // Services - Infrastructure (from page)
    infraTitle: infrastructureContent.en.title,
    infraSubtitle: `${infrastructureContent.en.subtitle1} ${infrastructureContent.en.subtitle2}`,
    vmTitle: infrastructureContent.en.vmTitle,
    vmDesc: infrastructureContent.en.vmDesc,
    vmFeatures: [infrastructureContent.en.vmFeat1, infrastructureContent.en.vmFeat2, infrastructureContent.en.vmFeat3, infrastructureContent.en.vmFeat4, infrastructureContent.en.vmFeat5],
    netTitle: infrastructureContent.en.netTitle,
    netDesc: infrastructureContent.en.netDesc,
    postTitle: infrastructureContent.en.postTitle,
    postDesc: infrastructureContent.en.postDesc,
    postFeatures: [infrastructureContent.en.postFeat1, infrastructureContent.en.postFeat2, infrastructureContent.en.postFeat3, infrastructureContent.en.postFeat4],
    secCamTitle: infrastructureContent.en.secTitle,
    secCamDesc: infrastructureContent.en.secDesc,
    wifiTitle: infrastructureContent.en.wifiTitle,
    wifiDesc: infrastructureContent.en.wifiDesc,

    // Security (from page)
    securityTitle: securityContent.en.title,
    securitySubtitle: securityContent.en.subtitle,
    secOpsTitle: securityContent.en.secOpsTitle,
    secOpsFeatures: [securityContent.en.secOps1, securityContent.en.secOps2, securityContent.en.secOps3, securityContent.en.secOps4, securityContent.en.secOps5],
    pillar1: `${securityContent.en.pillar1Title} - ${securityContent.en.pillar1Desc}`,
    pillar2: `${securityContent.en.pillar2Title} - ${securityContent.en.pillar2Desc}`,
    pillar3: `${securityContent.en.pillar3Title} - ${securityContent.en.pillar3Desc}`,
    backupTitle: securityContent.en.backupTitle,
    backupDesc: securityContent.en.backupDesc,
    // Storage section (was missing from machine-view!)
    storageTitle: securityContent.en.storageTitle,
    storageFeatures: [securityContent.en.storage1, securityContent.en.storage2, securityContent.en.storage3, securityContent.en.storage4, securityContent.en.storage5],
    sentinelTitle: securityContent.en.sentinelTitle,
    sentinelDesc: securityContent.en.sentinelDesc,
    wasabiTitle: securityContent.en.wasabiTitle,
    wasabiDesc: securityContent.en.wasabiDesc,
    synologyTitle: securityContent.en.synologyTitle,
    synologyDesc: securityContent.en.synologyDesc,

    // Development (from page)
    devTitle: developmentContent.en.title,
    devSubtitle: developmentContent.en.subtitle,
    devSectionTitle: developmentContent.en.sectionTitle,
    devSectionDesc: developmentContent.en.sectionDesc,

    // Consulting (from page)
    consultingTitle: consultingContent.en.title,
    consultingSubtitle: consultingContent.en.subtitle,
    consultingSectionTitle: consultingContent.en.sectionTitle,
    consultingPara1: consultingContent.en.para1,
    consultingPara2: consultingContent.en.para2,
    consultingAdvantages: [consultingContent.en.adv1, consultingContent.en.adv2, consultingContent.en.adv3, consultingContent.en.adv4],

    // Specifications
    specsTitle: "Technical Specifications",
    specsSubtitle: "Hardware and software specifications for our standard deployments.",
    specsSections: [
      {
        title: "Compute Infrastructure",
        cards: [
          { title: "Specifications", specs: ["Processor: 2x AMD EPYC 9354 (32 cores each)", "Total Cores: 64 physical / 128 threads", "Memory: 512GB - 2TB DDR5-4800 ECC", "Storage Bays: 8x 2.5\" NVMe U.2", "Network: 4x 25GbE + 2x 100GbE SFP28", "Power Supply: Redundant 1100W Platinum", "Form Factor: 2U Rack Mount"] },
          { title: "VMware vSphere 8.0", specs: ["Hypervisor: ESXi 8.0 Update 2", "Management: vCenter Server 8.0", "Features: vMotion, DRS, HA, vSAN", "Max VMs/Host: 1,024", "Max vCPU/VM: 768", "Max RAM/VM: 24TB"] }
        ]
      },
      {
        title: "Storage Systems",
        cards: [
          { title: "Synology FS6400 FlashStation", specs: ["Drive Bays: 24x 2.5\" NVMe SSD", "Max Capacity: 384TB (24x 16TB)", "Memory: 32GB DDR4 ECC (exp. 512GB)", "Cache: Up to 1TB NVMe read/write", "Network: 4x 25GbE + 2x 10GbE", "Protocols: SMB, AFP, NFS, iSCSI, FTP", "RAID Support: SHR, Basic, JBOD, 0, 1, 5, 6, 10", "Performance: 650K+ IOPS / 10GB/s throughput"] },
          { title: "Synology SA3610 ActiveProtect", specs: ["Drive Bays: 12x 3.5\" SATA/SAS", "Max Capacity: 240TB (12x 20TB)", "Memory: 16GB DDR4 ECC (exp. 64GB)", "Cache Slots: 2x M.2 NVMe (up to 960GB each)", "Network: 4x 10GbE RJ45", "Expansion: Up to 2x RX1217 (36 bays total)", "Performance: 226K IOPS / 5.5GB/s sequential"] },
          { title: "Synology RS2423+ RackStation", specs: ["Drive Bays: 12x 3.5\"/2.5\" SATA", "Max Capacity: 240TB (12x 20TB)", "Memory: 8GB DDR4 (exp. 32GB)", "Network: 4x 1GbE RJ45", "Features: Active Backup, Snapshots, Cloud Sync, Encryption"] }
        ]
      },
      {
        title: "Network Infrastructure",
        cards: [
          { title: "UniFi Dream Machine Special Edition", specs: ["Throughput: 10 Gbps IDS/IPS", "WAN Ports: 2x 10G SFP+ / 1x 2.5GbE RJ45", "LAN Ports: 8x GbE RJ45 with PoE+", "Storage: 128GB SSD + HDD bay", "Features: Firewall, VPN, VLAN (4096), Traffic Analytics"] },
          { title: "UniFi Switch Pro 48 PoE", specs: ["Ports: 48x GbE RJ45 PoE+", "SFP+ Ports: 4x 10G SFP+", "PoE Budget: 600W (IEEE 802.3at/af/bt)", "Switching: 176 Gbps non-blocking", "Features: Layer 3 routing, Link aggregation, Port isolation"] },
          { title: "UniFi U7 Pro WiFi 7", specs: ["Standards: WiFi 7 (802.11be)", "Bands: Tri-band 2.4/5/6 GHz", "Throughput: 11.5 Gbps aggregate", "Clients: 300+ concurrent", "Coverage: 6,000 sq ft", "Features: Band steering, Guest portal, VLAN per SSID, AI optimization"] }
        ]
      },
      {
        title: "Security & Monitoring",
        cards: [
          { title: "SentinelOne Singularity Platform", specs: ["Protection: AI-powered XDR", "Detection: < 1ms threat identification", "Response: Automated remediation", "Coverage: Windows, macOS, Linux, Cloud", "Features: Behavioral AI, EDR + EPP, Storyline, 1-click rollback"] },
          { title: "UniFi Protect AI Camera Systems", specs: ["AI Cameras: G5 Pro with Smart Detection", "Resolution: 4K (3840 x 2160) @ 30fps", "Detection: Person, Vehicle, License plate, Package", "Storage: Local NVR + cloud backup", "Retention: 30-90 days continuous", "Features: Smart motion zones, Privacy masking, Event notifications"] }
        ]
      }
    ],

    // Method - Introduction
    methodTitle: "The Estela Method",
    methodSubtitle: "Technology Integration with Soul",
    methodIntro1: "There is a lost art of building technology systems that actually work for people.",
    methodIntro2: "To bring back the human element, these are the foundational ideas that guide everything we do at Estela.",

    // Method Introduction Detail
    methodIntroTitle: "The Art of Translation",
    methodIntroLead: "The art of true interpretation lies in making the complex clear. This is our practice: we translate the intricate world of technology into human-centric solutions.",
    methodIntroLostArt: {
      title: "The Lost Art",
      paragraphs: [
        "In Greek mythology, Hermes served as the messenger between the divine and mortal realms. He didn't just carry messages; he translated meaning across worlds that couldn't understand each other.",
        "Today's technology landscape suffers from the same divide. On one side: servers, protocols, frameworks, and endless acronyms. On the other: people trying to run businesses, serve customers, and make a difference.",
        "Most IT companies speak only technology. They deliver solutions that work for machines but confound humans. They optimize for specifications, not experiences.",
        "We chose a different path."
      ]
    },
    methodIntroTranslation: {
      title: "The Translation Imperative",
      paragraphs: [
        "The best infrastructure is like a good translation: the reader forgets they're reading one. If they think about the translator, the translator failed.",
        "Consider the editor who needs to open massive After Effects files. He doesn't care about the NAS RAID configuration. He just wants to open files fast and meet deadlines.",
        "Translation is disappearing. If the message arrives clear, no one remembers the messenger."
      ]
    },
    methodIntroPhilosophy: {
      title: "Our Translation Philosophy",
      intro: "We practice translation at every level:",
      items: [
        { title: "Technical to Practical", description: "We transform '10Gb fiber backbone with link aggregation' into 'your files open in seconds, not minutes.'" },
        { title: "Complex to Simple", description: "We convert intricate network diagrams into clear benefits: 'work from anywhere, securely.'" },
        { title: "Problem to Solution", description: "We translate 'our system keeps crashing' into 'here's how we ensure that never happens again.'" },
        { title: "Present to Future", description: "We interpret current limitations as tomorrow's capabilities, building systems that grow with you." }
      ]
    },
    methodIntroWhatThisMeans: {
      title: "What this means for the client",
      paragraphs: [
        "We don't sell technology. Technology is the means, not the product. The product is your problem disappearing.",
        "We don't install servers. We create infrastructure that accelerates your work - and that you can happily ignore because it works."
      ]
    },
    methodEmerges: {
      title: "The Method Emerges",
      intro: "Our method isn't about following trends or implementing the latest tools. It's about understanding what actually matters: your people, your work, your growth.",
      listIntro: "This method emerged from:",
      items: [
        { title: "50+ successful implementations", description: "Each one teaching us something new about translation" },
        { title: "Countless hours of listening", description: "Before we speak technology, we think alongside you" },
        { title: "A belief that small teams build better", description: "Fewer translators mean clearer communication" },
        { title: "The intersection of art and engineering", description: "Because the best systems balance beauty and function" }
      ]
    },
    journeyAhead: {
      title: "The Journey Ahead",
      intro: "In the following chapters, we'll explore how this translation philosophy shapes everything we do:",
      items: [
        "Our Principles that ensure we never lose sight of the human element.",
        "Our Implementation approach that builds without breaking what works.",
        "Our Practices that maintain excellence day after day.",
        "Our Philosophy that connects art to modern infrastructure."
      ],
      conclusion: "Each element reflects our core belief: technology should adapt to people, not the other way around."
    },

    // Method Principles Detail
    methodPrinciplesTitle: "Core Principles",
    methodPrinciplesSubtitle: "Five ideas that sound simple until you try to apply them.",
    methodPrinciples: [
      { number: "2.1", title: "Small Teams, Deep Impact", content: "We're six. Not five - too few. Not seven - that already needs meetings about meetings. Research agrees." },
      { number: "2.2", title: "Technology Serves People", content: "Every technical decision answers one question: does this save someone time? If the answer is 'it depends,' that's also a no." },
      { number: "2.3", title: "Built to Last, Designed to Evolve", content: "If it's temporary, it's not a solution. It's debt." },
      { number: "2.4", title: "Radical Transparency", content: "Your infrastructure is yours. With or without us." },
      { number: "2.5", title: "The Beauty of Simplicity", content: "Complexity is easy. Anyone can add. The hard part is knowing what to remove." }
    ],

    // Method Implementation Detail
    methodImplementationTitle: "How We Work",
    methodImplementationLead: "Our proven methodology for turning complex problems into simple solutions.",
    methodImplementationPhases: [
      { number: "3.1", title: "Understanding", intro: "We don't start with solutions. We start with questions.", content: ["Shadow your team for a day", "Map your actual workflows (not the ideal ones)", "Identify pain points and possibilities", "Document everything"], time: "Time: 1-2 days" },
      { number: "3.2", title: "Architecture", intro: "Design the system that fits reality.", content: ["Create detailed blueprints", "Plan for today and tomorrow", "Choose tools that talk to each other", "Design for your team's skill level"], time: "Time: 1-2 weeks" },
      { number: "3.3", title: "Implementation", intro: "Build without breaking what works.", content: ["Staged rollouts, no big bangs", "Test with users in test bed", "Document as we build", "Train as we go"], time: "Time: 2-8 weeks (depending on scope)" },
      { number: "3.4", title: "Evolution", intro: "Technology is never 'done.'", content: ["Regular health checks", "Proactive improvements", "Continuous education", "Grow with your needs"], time: "Time: Ongoing" }
    ],

    // Method Practices Detail
    methodPracticesTitle: "Our Practices",
    methodPracticesLead: "Daily operational excellence through proven methods and consistent execution.",
    methodPractices: [
      { number: "4.1", title: "The 24-Hour Rule", intro: "Our Rapid Response Pledge", description: "Most IT problems compound with time. A small network hiccup becomes a cascade failure. A confused user becomes a frustrated team.", subsection: { title: "How It Works:", items: ["Issues tracked from first contact", "Immediate attention", "Diagnosis and action plan", "Clear communication", "Post-incident review"] }, conclusion: "Critical issues demand immediate attention. You'll connect directly with a core team member who understands your setup." },
      { number: "4.2", title: "Documentation as Art", intro: "Documentation should illuminate, not intimidate.", description: "Industry standard is to document for compliance. We document so someone actually reads it.", subsection: { title: "Our Approach:", items: ["Visual diagrams that show, not tell", "Quick reference guides for daily tasks", "Video walkthroughs for complex procedures", "Searchable knowledge base, not binders", "Regular updates based on real questions"] }, conclusion: "Documentation should empower, not overwhelm." },
      { number: "4.3", title: "The Weekly Pulse", intro: "Short, regular check-ins keep systems healthy.", description: "Systems warn before they fail. We listen.", subsection: { title: "Our Weekly Routine:", items: ["Automated system health reports every morning", "15-minute review call every Wednesday", "Proactive optimization recommendations", "Trend analysis and capacity planning", "Clear action items with priorities"] }, conclusion: "The best problems are the ones that never happen." },
      { number: "4.4", title: "Vendor Relationships", intro: "Direct relationships with Lenovo, UniFi, Synology, and SentinelOne.", description: "Your problems become our problems. No runaround.", subsection: { title: "Our Direct Approach:", items: ["Named contacts at every partner company", "Direct escalation paths for critical issues", "Regular technical briefings on new products", "Beta access for testing and validation", "Guaranteed response times in partner agreements"] }, conclusion: "These relationships took years to build. They save you hours every time something goes wrong." },
      { number: "4.5", title: "Knowledge Transfer", intro: "Our goal is to build your team's capability, not create reliance.", description: "Some providers cultivate ignorance. We cultivate independence.", subsection: { title: "How We Transfer Knowledge:", items: ["Hands-on training during implementation", "Regular lunch-and-learn sessions", "Quick reference materials for your team", "Escalation procedures clearly defined", "Annual capability assessments"] }, conclusion: "True partnership means growing together." }
    ],

    // Method Philosophy Detail
    methodPhilosophyTitle: "Our Philosophy",
    methodPhilosophyLead: "The why behind the how.",
    methodPhilosophyHexagon: { title: "5.1 The Hexagon Principle", intro: "Pythagoras devoted his life to numbers. Euclid, to shapes. We reached the hexagon by the shortest path: a headcount.", p1: "And since we mentioned Euclid..." },
    methodPhilosophyHistory: { title: "5.2 Learning from History", intro: "Grace Hopper simplified computing. Euclid, geometry. We borrow from both.", p1: "Technology changes. Human nature doesn't.", hopper: { title: "From Grace Hopper", quote: "'The most dangerous phrase in the language is we've always done it this way.'", text: "She invented the compiler because she hated repeating herself. So do we." }, euclid: { title: "From Euclid", text: "From few axioms, infinite truths. That's how we build: from fundamentals." }, bauhaus: { title: "From the Bauhaus Movement", text: "The useful can be beautiful. The beautiful, useful." }, conclusion: "Great innovations connect what seemed disconnected." },
    methodPhilosophyArt: { title: "5.3 The Art Connection", intro: "The Renaissance understood something: the whole matters as much as the detail.", p1: "Art and technology: two ways of creating order.", conclusion: "Art teaches you to see. Technology, to think." },
    methodPhilosophyResults: { title: "5.4 Results, Not Reports", intro: "We measure success with one metric: Does your technology make your daily work better?", p1: "The difference isn't in the specs. It's in never having to think about them.", conclusion: "That's the only result that matters.", coda: "Hexagons, history, art, results. Scattered in appearance. Coherent in practice." },

    // Company - About
    aboutHero: "Technology at the service of your business. Not the other way around.",
    missionTitle: "Our Mission",
    missionQuote: '"Technology should be invisible when it works and obvious when it doesn\'t."',
    missionFounded: "Nearly a decade proving the obvious: that solving tech problems doesn't have to be one more.",
    whatWeDo: "What We Do: We design, build, and maintain technology that works. Infrastructure, security, custom development. No unnecessary adjectives.",
    howDifferent: "How We're Different: No account executives. No middle managers. Direct relationship between the problem and whoever solves it.",
    whyExist: "Why We Exist: The industry turned 'consulting' into a synonym for costs and complications. We prefer the original definition: helping solve problems.",
    whoServe: "Who We Serve: Companies that prefer results to presentations. And solutions to promises.",
    principles: {
      techServes: "Technology Serves Business: We start with your objectives, not our favorite technologies. Form follows function.",
      excellence: "Excellence Over Scale: Quality over quantity. Depth over breadth. Fewer clients, better service.",
      reality: "Reality Over Marketing: We promise less than we can deliver. We deliver more than we promise.",
      longTerm: "Long-term Over Quick Wins: We build to last. Today's solution shouldn't become tomorrow's problem."
    },

    // Company - About Values
    valuesTitle: "Our Values",
    valuesIntro: "Principles are constraints. Values are guides. One defines what we don't do. The other, where we aim.",
    valuesWarning: "Sometimes these values pull in opposite directions. That's normal. Prudence decides which weighs more at any given moment.",
    values: [
      { title: "Candor", description: "The truth discomforts. Lies, more so. We prefer the former." },
      { title: "Courage", description: "Contrarian when needed, never for sport." },
      { title: "Curiosity", description: "We know a lot. Not enough. That gap keeps us up." },
      { title: "Diversity", description: "The best ideas rarely come from people who think alike." },
      { title: "Empathy", description: "Hard to solve a problem we don't understand. Hard to understand without listening." },
      { title: "Humor", description: "We take the work seriously. Ourselves, less so." },
      { title: "Optimism", description: "We know everything that can go wrong. Still, we believe it'll go right." },
      { title: "Resilience", description: "Interesting problems don't give up easily. Neither do we." },
      { title: "Responsibility", description: "There's life outside the office. We honor it." },
      { title: "Rigor", description: "We're not satisfied that it works. We want to know why." },
      { title: "Teamwork", description: "No one here succeeds alone. No one here fails alone." },
      { title: "Versatility", description: "Specialization is necessary. Adaptation, inevitable." }
    ],

    // Company - Work
    workHero: "Our work speaks for us. Though sometimes we speak too.",
    projects: [
      {
        client: "Teatro Solís",
        title: "Theater A/V Control System",
        year: "2023",
        category: "Infrastructure",
        duration: "3 months",
        challenge: "The theater's controls couldn't keep up with modern lighting and sound systems. Think: trying to run a Tesla on a Model T dashboard.",
        solution: "We built networked lighting controls with touch interfaces and remote capabilities. Now the tech actually works with the art, not against it.",
        technologies: ["Networked Lighting", "Touch Screen", "Remote Control Systems", "A/V Integration"],
        results: ["Faster show changeovers—now they can host international productions", "Remote control capabilities for flexible operation", "Support for modern lighting/sound effects", "Simplified controls (fewer buttons, less confusion)"]
      },
      {
        client: "U Films",
        title: "Post-Production Infrastructure Build",
        year: "2023-2024",
        category: "Infrastructure",
        duration: "12 months (ongoing)",
        challenge: "Building a production studio from scratch while wrestling with building network restrictions and firewall constraints. Oh, and major clients demanding security certifications.",
        solution: "We engineered a precise VPN solution and negotiated parallel access paths. Sometimes the hardest problems are half-technical, half-diplomatic.",
        technologies: ["VPN", "Storage/Backup Systems", "High-Speed Networking", "Security Compliance"],
        results: ["Now working with clients who actually require security certifications", "Significant improvements in editing and rendering workflows", "Secure client data handling", "Parallel infrastructure in testing phase"]
      },
      {
        client: "Diagnóstico",
        title: "Laboratory Data Security & Integration",
        year: "2021-2024",
        category: "Infrastructure & Compliance",
        duration: "3 years (ongoing)",
        challenge: "Medical lab with patient data requirements, system integration needs, backup demands, and ISO 9001 compliance. The fun stuff.",
        solution: "We implemented NAS-based integration policies with Active Directory, automated immutable backups, and phased network redundancy. Because lab data isn't something you want to \"oops.\"",
        technologies: ["Synology NAS", "ISO 9001 Framework", "Automated Backup", "Integration Policies"],
        results: ["ISO 9001 compliance achieved", "Reduced internal system downtime to outsiders", "Faster result turnaround times"]
      }
    ],

    // Company - Partners
    partnersHero: "Proven in production. Certified later.",
    partners: ["Lenovo (Business Partner Since 2015)", "UniFi (Enterprise Installer Since 2018)", "Synology (Gold Partner Since 2016)", "Acronis (Cloud Partner Since 2017)", "SentinelOne (Partner Since 2022)"],
    partnersPhilosophy: {
      title: "How We Choose Partners",
      items: [
        { title: "We Call. We Don't Ticket.", description: "When there's a problem, we dial a number. We don't fill out a form." },
        { title: "Few. The Best.", description: "Few partners. The ones we'd choose again." }
      ],
      advantageTitle: "What the Client Gets",
      advantages: ["Support that answers. Always.", "Beta access. Before others.", "We escalate to the manufacturer. Direct."]
    },

    // Company - Team
    teamHero: "Who we are. The people behind the projects. No stock photos.",
    teamText: "Instead of the usual corporate copy: Those who do. No euphemisms.",
    teamMembers: ["Peter Del Prestito", "Pablo Ferreira", "Alfonso LaRosa", "Nahuel Gonzalez", "Aníbal Ramos", "D. Esteban Echániz"],

    // Trusted By (after hero)
    trustedByTitle: "Companies we've built with",

    // Company - Clients
    sectionClients: "Clients",
    clientsHero: "Companies we've built with",
    clients: ["Don Obdulio", "Aparato", "SODRE", "DSR360", "Sidley Jones", "Plataforma", "Producers", "Cimarrón", "U Films", "Diagnóstico", "AECID", "CCE", "Olivera", "Tafirel", "La Mayor", "Oriental", "Mueca", "Verne", "Embajada", "Avisa", "Dominio", "Fullcat", "Orben", "Box"],

    // Contact (from page)
    contactTitle: contactContent.en.title,
    contactSubtitle: contactContent.en.subtitle,
    contactIntro: contactContent.en.intro,
    contactBullets: [contactContent.en.bullet1, contactContent.en.bullet2, contactContent.en.bullet3],
    contactEmail: "hola@este.la",

    // Homepage Sections
    velocityTitle: "Solutions for problems that don't exist yet",
    velocitySubtitle: "We anticipate the unexpected—which, once anticipated, ceases to be so. We design systems that last. We implement changes that transform. We keep calm when the server doesn't.",
    velocityFeatures: [
      { title: "Networks & Servers", description: "VMware and Proxmox virtualization, UniFi networking, Synology storage, 10Gb LANs, redundant power." },
      { title: "Complete Protection", description: "SentinelOne XDR, UniFi Protect cameras, Synology backup infrastructure: redundancy and recovery." },
      { title: "Custom Development", description: "Next.js apps, process automation, AI integration. Modern solutions that transform how you work." }
    ],
    principlesHomeTitle: "We have principles—and we apply them",
    principlesHomeSubtitle: "Sounds obvious. But in a world where corporate values get drafted at team retreats and forgotten in the parking lot, keeping your own is almost an act of rebellion. We choose depth. We choose permanence. We choose consistency.",
    principleHome1: { title: "Outsiders who think like insiders", description: "Sounds like a contradiction. It is. But we prefer productive contradictions to sterile coherences. We design as if it were ours. We care for it as if we lived there. Technological peace of mind isn't sold—it's built." },
    principleHome2: { title: "We don't collect clients", description: "We build alliances. The difference: clients are served; allies are cared for. Emergencies aren't opportunities—they're commitments. And commitments here are kept even when no one is watching." },
    speedTitle: "Depth, not speed",
    speedDescription: "Speed impresses. Depth endures. Our work keeps working long after no one remembers who built it.",
    ctaTitle: "We have opinions. Also reasons.",
    ctaSubtitle: "The combination, we're told, is uncommon. That's also an opinion.",
    closingQuote: "Polyphemus had size, strength, and one eye—which turned out to be insufficient. Odysseus had wit, few men, and a plan. We chose the second path. No meetings about meetings. No departments to delegate. Six people who solve. Because the solution was never about being bigger—it was about thinking better.",
    smallScaleTitle: "We study the Renaissance—and not for the academic credit",
    smallScaleFeatures: [
      "We read philosophy because a system without human context is a machine with pretensions.",
      "Because we've learned: the magic happens at this size. Your project doesn't get transferred.",
      "Your relationship doesn't get 'managed.' You get us. All of us. Always."
    ],
    testNumbersTitle: "Empirical evidence",
    testMetrics: [
      { title: "100%", description: "Complete retention. Small sample, consistent result." },
      { title: "Meetings", description: "Necessary: few. Unnecessary: none. Those that could've been an email: were an email." },
      { title: "Founding team", description: "Same team since 2012. Turnover is a concept we know only by hearsay." },
      { title: "Criteria", description: "Selective admission. It's not arrogance; it's arithmetic." }
    ],
    footerTagline: "When technology and knowledge converge",
    footerDescription: "Eager for the new. Devoted to what works.",
    footerAddress: "21 de Setiembre, 3015. 802 | Montevideo, Punta del Este, Uruguay",
    footerPhone: "+598 27113184"
  },
  es: {
    // Section Headers
    sectionServices: "Servicios",
    sectionInfra: "Infraestructura y Redes",
    sectionSecurity: "Seguridad Gestionada",
    sectionDev: "Desarrollo e IA",
    sectionConsulting: "Consultoría y Soporte",
    sectionMethod: "Método",
    sectionCompany: "Empresa",
    sectionAbout: "Sobre Nosotros",
    sectionPrinciples: "Principios",
    sectionWork: "Nuestro Trabajo",
    sectionPartners: "Socios",
    sectionTeam: "Equipo",
    sectionContact: "Contacto",

    // Hero
    heroTitle: "El camino más corto entre el problema y la solución",
    heroSubtitle: "Los griegos inventaron la lógica, la geometría y un dios para cada necesidad. Nosotros aplicamos las dos primeras para construir soluciones. De la tercera categoría —los dioses, no las necesidades— conservamos solo el mármol, que no requiere actualizaciones.",
    heroSubtitleTech: "Automatización de infraestructura, hardening de seguridad, y servicios de desarrollo. APIs REST, pipelines CI/CD, e infraestructura como código.",

    // Services - Infrastructure (from page)
    infraTitle: infrastructureContent.es.title,
    infraSubtitle: `${infrastructureContent.es.subtitle1} ${infrastructureContent.es.subtitle2}`,
    vmTitle: infrastructureContent.es.vmTitle,
    vmDesc: infrastructureContent.es.vmDesc,
    vmFeatures: [infrastructureContent.es.vmFeat1, infrastructureContent.es.vmFeat2, infrastructureContent.es.vmFeat3, infrastructureContent.es.vmFeat4, infrastructureContent.es.vmFeat5],
    netTitle: infrastructureContent.es.netTitle,
    netDesc: infrastructureContent.es.netDesc,
    postTitle: infrastructureContent.es.postTitle,
    postDesc: infrastructureContent.es.postDesc,
    postFeatures: [infrastructureContent.es.postFeat1, infrastructureContent.es.postFeat2, infrastructureContent.es.postFeat3, infrastructureContent.es.postFeat4],
    secCamTitle: infrastructureContent.es.secTitle,
    secCamDesc: infrastructureContent.es.secDesc,
    wifiTitle: infrastructureContent.es.wifiTitle,
    wifiDesc: infrastructureContent.es.wifiDesc,

    // Security (from page)
    securityTitle: securityContent.es.title,
    securitySubtitle: securityContent.es.subtitle,
    secOpsTitle: securityContent.es.secOpsTitle,
    secOpsFeatures: [securityContent.es.secOps1, securityContent.es.secOps2, securityContent.es.secOps3, securityContent.es.secOps4, securityContent.es.secOps5],
    pillar1: `${securityContent.es.pillar1Title} - ${securityContent.es.pillar1Desc}`,
    pillar2: `${securityContent.es.pillar2Title} - ${securityContent.es.pillar2Desc}`,
    pillar3: `${securityContent.es.pillar3Title} - ${securityContent.es.pillar3Desc}`,
    backupTitle: securityContent.es.backupTitle,
    backupDesc: securityContent.es.backupDesc,
    // Storage section (was missing from machine-view!)
    storageTitle: securityContent.es.storageTitle,
    storageFeatures: [securityContent.es.storage1, securityContent.es.storage2, securityContent.es.storage3, securityContent.es.storage4, securityContent.es.storage5],
    sentinelTitle: securityContent.es.sentinelTitle,
    sentinelDesc: securityContent.es.sentinelDesc,
    wasabiTitle: securityContent.es.wasabiTitle,
    wasabiDesc: securityContent.es.wasabiDesc,
    synologyTitle: securityContent.es.synologyTitle,
    synologyDesc: securityContent.es.synologyDesc,

    // Development (from page)
    devTitle: developmentContent.es.title,
    devSubtitle: developmentContent.es.subtitle,
    devSectionTitle: developmentContent.es.sectionTitle,
    devSectionDesc: developmentContent.es.sectionDesc,

    // Consulting (from page)
    consultingTitle: consultingContent.es.title,
    consultingSubtitle: consultingContent.es.subtitle,
    consultingSectionTitle: consultingContent.es.sectionTitle,
    consultingPara1: consultingContent.es.para1,
    consultingPara2: consultingContent.es.para2,
    consultingAdvantages: [consultingContent.es.adv1, consultingContent.es.adv2, consultingContent.es.adv3, consultingContent.es.adv4],

    // Specifications
    specsTitle: "Especificaciones Técnicas",
    specsSubtitle: "Especificaciones de hardware recientes.",
    specsSections: [
      {
        title: "Workstation",
        cards: [
          { title: "Specifications", specs: ["Processor: 2x AMD EPYC 9354 (32 cores each)", "Total Cores: 64 physical / 128 threads", "Memory: 512GB - 2TB DDR5-4800 ECC", "Storage Bays: 8x 2.5\" NVMe U.2", "Network: 4x 25GbE + 2x 100GbE SFP28", "Power Supply: Redundant 1100W Platinum", "Form Factor: 2U Rack Mount"] },
          { title: "VMware vSphere 8.0", specs: ["Hipervisor: ESXi 8.0 Update 2", "Gestión: vCenter Server 8.0", "Características: vMotion, DRS, HA, vSAN", "Max. VMs/Host: 1,024", "Max. vCPU/VM: 768", "Max. RAM/VM: 24TB"] }
        ]
      },
      {
        title: "Sistemas de Almacenamiento",
        cards: [
          { title: "Synology FS6400 FlashStation", specs: ["Bahías de Discos: 24x 2.5\" NVMe SSD", "Capacidad Máxima: 384TB (24x 16TB)", "Memoria: 32GB DDR4 ECC (exp. a 512GB)", "Caché: Hasta 1TB NVMe de lectura/escritura", "Red: 4x 25GbE + 2x 10GbE", "Protocolos: SMB, AFP, NFS, iSCSI, FTP", "Soporte RAID: SHR, Basic, JBOD, 0, 1, 5, 6, 10", "Rendimiento: +650K IOPS / 10GB/s de transferencia"] },
          { title: "Synology SA3610 ActiveProtect", specs: ["Bahías de Discos: 12x 3.5\" SATA/SAS", "Capacidad Máxima: 240TB (12x 20TB)", "Memoria: 16GB DDR4 ECC (exp. a 64GB)", "Ranuras de Caché: 2x M.2 NVMe (hasta 960GB cada una)", "Red: 4x 10GbE RJ45", "Expansión: Hasta 2x RX1217 (36 bahías en total)", "Rendimiento: 226K IOPS / 5.5GB/s secuencial"] },
          { title: "Synology RS2423+ RackStation", specs: ["Bahías de Discos: 12x 3.5\"/2.5\" SATA", "Capacidad Máxima: 240TB (12x 20TB)", "Memoria: 8GB DDR4 (exp. a 32GB)", "Red: 4x 1GbE RJ45", "Características: Active Backup, Snapshots, Cloud Sync, Cifrado"] }
        ]
      },
      {
        title: "Infraestructura de Red",
        cards: [
          { title: "UniFi Dream Machine Special Edition", specs: ["Rendimiento: 10 Gbps con IDS/IPS", "Puertos WAN: 2x 10G SFP+ / 1x 2.5GbE RJ45", "Puertos LAN: 8x GbE RJ45 con PoE+", "Almacenamiento: 128GB SSD + bahía para HDD", "Características: Firewall, VPN, VLAN (4096), Análisis de tráfico"] },
          { title: "UniFi Switch Pro 48 PoE", specs: ["Puertos: 48x GbE RJ45 PoE+", "Puertos SFP+: 4x 10G SFP+", "Presupuesto PoE: 600W (IEEE 802.3at/af/bt)", "Capacidad de Conmutación: 176 Gbps sin bloqueo", "Características: Ruteo Layer 3, Link aggregation, Aislamiento de puertos"] },
          { title: "UniFi U7 Pro WiFi 7", specs: ["Estándares: WiFi 7 (802.11be)", "Bandas: Tri-banda 2.4/5/6 GHz", "Rendimiento: 11.5 Gbps agregado", "Clientes: +300 concurrentes", "Cobertura: 6,000 sq ft", "Características: Band steering, Portal de invitados, VLAN por SSID, Optimización AI"] }
        ]
      },
      {
        title: "Seguridad y Monitoreo",
        cards: [
          { title: "SentinelOne Singularity Platform", specs: ["Protección: XDR potenciado por IA", "Detección: Identificación de amenazas en < 1ms", "Respuesta: Remediación automatizada", "Cobertura: Windows, macOS, Linux, Cloud", "Características: Behavioral AI, EDR + EPP, Storyline, Rollback con 1-click"] },
          { title: "Sistemas de Cámaras UniFi Protect AI", specs: ["Cámaras AI: G5 Pro con Detección Inteligente", "Resolución: 4K (3840 x 2160) @ 30fps", "Detección: Personas, Vehículos, Matrículas, Paquetes", "Almacenamiento: NVR local + respaldo en la nube", "Retención: 30-90 días de grabación continua", "Características: Zonas de movimiento inteligentes, Máscaras de privacidad, Notificaciones de eventos"] }
        ]
      }
    ],

    // Method
    methodTitle: "El Método Estela",
    methodSubtitle: "",
    methodIntro1: "En algún momento, la tecnología dejó de servir a las personas para exigir que las personas la sirvieran.",
    methodIntro2: "Estos capítulos recogen lo que guía nuestro trabajo.",

    // Method Introduction Detail
    methodIntroTitle: "El Arte de la Traducción",
    methodIntroLead: "Hacer claro lo complejo es un arte. Hacer complejo lo claro, en cambio, cualquiera puede. Nosotros elegimos lo primero.",
    methodIntroLostArt: {
      title: "Un Arte Perdido",
      paragraphs: [
        "En la mitología griega, Hermes servía como mensajero entre los dioses y los mortales. No solo entregaba mensajes; los traducía. Sin él, Zeus habría seguido gritando en griego antiguo. Los humanos habrían asentido igual - uno no contradice al que tiene los rayos.",
        "Hoy Olympus fabrica cámaras y el único rayo es el flash, pero la confusión persiste. De un lado: técnicos hablando en acrónimos. Del otro: el resto. La mayoría de las empresas de IT solo hablan técnico. Nosotros también - pero solo cuando es estrictamente necesario."
      ]
    },
    methodIntroTranslation: {
      title: "El Imperativo de Traducir",
      paragraphs: [
        "La mejor infraestructura es como una buena traducción: el lector olvida que está leyendo una. Si piensa en el traductor, el traductor falló.",
        "Considere al editor que necesita abrir archivos de After pesadísimos. No le interesa la configuración RAID del NAS. Solo le interesa abrir los archivos rápido y cumplir plazos.",
        "Traducir es desaparecer. Si el mensaje llega claro, nadie recuerda al mensajero."
      ]
    },
    methodIntroPhilosophy: null,
    methodIntroWhatThisMeans: {
      title: "Lo que esto significa para el cliente",
      paragraphs: [
        "No vendemos tecnología. La tecnología es el medio, no el producto. El producto es que su problema desaparezca.",
        "No instalamos servidores. Creamos infraestructura que acelera su trabajo - y que usted puede ignorar tranquilamente porque funciona."
      ]
    },
    methodEmerges: null,
    journeyAhead: {
      title: null,
      intro: "Lo que sigue es el cómo. Esto fue el porqué.",
      items: null,
      conclusion: null
    },

    // Method Principles Detail
    methodPrinciplesTitle: "Principios Fundamentales",
    methodPrinciplesSubtitle: "Cinco ideas que suenan simples hasta que uno intenta aplicarlas.",
    methodPrinciples: [
      { number: "2.1", title: "Seis", content: "Somos seis. No cinco, que era poco. No siete, que ya requería reuniones sobre reuniones. Los estudios coinciden." },
      { number: "2.2", title: "Tecnología con propósito", content: "Cada decisión técnica responde a una pregunta: ¿esto le ahorra tiempo a alguien? Si la respuesta es 'depende', también es no." },
      { number: "2.3", title: "Sin parches", content: "Si es temporal, no es solución. Es deuda." },
      { number: "2.4", title: "Sin dependencias", content: "Su infraestructura es suya. Con o sin nosotros." },
      { number: "2.5", title: "Nada que sobre", content: "La complejidad es fácil. Cualquiera puede agregar. Lo difícil es saber qué quitar." }
    ],

    // Method Implementation Detail
    methodImplementationTitle: "Cómo Trabajamos",
    methodImplementationLead: "Una cuerda bien afinada no hace ruido - hace música. Nuestra metodología para convertir problemas diarios en soluciones escalables.",
    methodImplementationPhases: [
      { number: "3.1", title: "Entendimiento", intro: "No empezamos con soluciones. Empezamos con preguntas.", content: ["Observar a su equipo por un día", "Mapear sus flujos de trabajo reales (no los ideales)", "Identificar problemas y posibilidades", "Documentar todo"], time: "Tiempo: 1-2 días" },
      { number: "3.2", title: "Arquitectura", intro: "Diseñar el sistema que se ajusta a la realidad.", content: ["Crear líneas de tiempo claras", "Planificar a largo plazo", "Elegir herramientas que se comuniquen entre sí", "Diseñar los cambios de forma progresiva"], time: "Tiempo: 1-2 semanas" },
      { number: "3.3", title: "Implementación", intro: "Construir sin romper lo que funciona.", content: ["Desarrollos por etapas", "Probar con usuarios en test bed", "Ir documentando mientras avanzamos", "Enseñar sobre la marcha"], time: "Tiempo: 2-8 semanas (según el alcance)" },
      { number: "3.4", title: "Evolución", intro: "La tecnología nunca está 'terminada'.", content: ["Chequeos regulares", "Mejoras proactivas", "Transmitir nuevos cambios", "Crecer con las necesidades de la empresa"], time: "Tiempo: Continuo" }
    ],

    // Method Practices Detail
    methodPracticesTitle: "Nuestras Prácticas",
    methodPracticesLead: "Lo que repetimos hasta que deja de ser esfuerzo y empieza a ser reflejo.",
    methodPractices: [
      { number: "4.1", title: "Respuesta Inmediata", intro: "Porque lo urgente no puede esperar.", description: "Los problemas técnicos no mejoran solos. Empeoran. Nuestra velocidad existe para evitar que eso pase.", subsection: { title: "Cómo Funciona:", items: ["Problemas rastreados desde el primer contacto", "Atención inmediata", "Diagnóstico y plan de acción", "Comunicación clara", "Revisión post-incidente"] }, conclusion: "La urgencia ajena es urgencia propia." },
      { number: "4.2", title: "Claridad", intro: "La buena documentación es la que alguien abre dos veces.", description: "El estándar del rubro es documentar para cumplir. Nosotros documentamos para que alguien lo lea.", subsection: { title: "Nuestro Enfoque:", items: ["Diagramas que muestran, no describen", "Guías de referencia rápida para tareas diarias", "Videos para procedimientos complejos", "Base de conocimiento buscable, no carpetas", "Actualizaciones basadas en preguntas reales"] }, conclusion: "" },
      { number: "4.3", title: "Atención", intro: "Mirar seguido para actuar temprano.", description: "Los sistemas avisan antes de fallar. Nosotros escuchamos.", subsection: { title: "Nuestra Rutina:", items: ["Recomendaciones proactivas de optimización", "Puntos de acción claros con prioridades"] }, conclusion: "" },
      { number: "4.4", title: "Relaciones", intro: "Conocemos nombres.", description: "Socios estratégicos, les dicen. Nosotros les decimos por el nombre.", subsection: { title: "Nuestra forma:", items: ["Rutas de escalamiento ágiles", "Briefings técnicos sobre nuevos productos", "Acceso beta para pruebas"] }, conclusion: "" },
      { number: "4.5", title: "Saber", intro: "Preferimos clientes que sepan. Nos hacen mejores preguntas.", description: "Algunos proveedores cultivan ignorancia. Nosotros, independencia.", subsection: { title: "Cómo Transferimos:", items: ["Materiales de referencia", "Evaluaciones anuales"] }, conclusion: "" }
    ],

    // Method Philosophy Detail
    methodPhilosophyTitle: "Nuestra Filosofía",
    methodPhilosophyLead: "El porqué detrás del cómo.",
    methodPhilosophyHexagon: { title: "5.1 El Hexágono", intro: "Pitágoras dedicó su vida a los números. Euclides, a las formas. Nosotros llegamos al hexágono por el camino más corto: contarnos.", p1: "Y ya que mencionamos a Euclides..." },
    methodPhilosophyHistory: { title: "5.2 Aprendiendo de la Historia", intro: "Grace Hopper simplificó la computación. Euclides, la geometría. Nosotros tomamos prestado de los dos.", p1: "La tecnología cambia. La naturaleza humana, no.", hopper: { title: "De Grace Hopper", quote: "'La frase más peligrosa del lenguaje es siempre lo hemos hecho así.'", text: "Inventó el compiler porque odiaba repetirse. Nosotros también." }, euclid: { title: "De Euclides", text: "De pocos axiomas, infinitas verdades. Así construimos: desde lo fundamental." }, bauhaus: { title: "Del Movimiento Bauhaus", text: "Lo útil puede ser bello. Lo bello, útil." }, conclusion: "Las grandes innovaciones conectan lo que parecía desconectado." },
    methodPhilosophyArt: { title: "5.3 La Conexión Artística", intro: "El Renacimiento entendió algo: el todo importa tanto como el detalle.", p1: "Arte y tecnología: dos formas de crear orden.", conclusion: "El arte enseña a ver. La tecnología, a pensar." },
    methodPhilosophyResults: { title: "5.4 Resultados, No Informes", intro: "Medimos el éxito con una sola métrica: ¿La tecnología hace mejor su trabajo diario?", p1: "La diferencia no está en las especificaciones. Está en que nunca tengas que pensar en ellas.", conclusion: "Ese es el único resultado que importa.", coda: "Hexágonos, historia, arte, resultados. Disperso en apariencia. Coherente en práctica." },

    // Company - About
    aboutHero: "Tecnología al servicio de su empresa. No al revés.",
    missionTitle: "Nuestra misión",
    missionQuote: '"La tecnología debe ser invisible cuando funciona y evidente cuando no."',
    missionFounded: "Casi una década demostrando lo obvio: que resolver problemas tecnológicos no tiene por qué ser uno más.",
    whatWeDo: "Qué hacemos: Diseñamos, construimos y mantenemos tecnología que funciona. Infraestructura, seguridad, desarrollo a medida. Sin adjetivos innecesarios.",
    howDifferent: "En qué nos diferenciamos: Sin ejecutivos de cuenta. Sin gestores intermedios. Relación directa entre el problema y quien lo resuelve.",
    whyExist: "Por qué existimos: La industria convirtió 'consultoría' en sinónimo de costos y complicaciones. Nosotros preferimos la definición original: ayudar a resolver problemas.",
    whoServe: "A quiénes servimos: Empresas que prefieren resultados a presentaciones. Y soluciones a promesas.",
    principles: {
      techServes: "La tecnología al servicio de la empresa: Empezamos por sus objetivos, no por nuestras tecnologías favoritas. La forma sigue a la función.",
      excellence: "Excelencia sobre escala: Calidad sobre cantidad. Profundidad sobre amplitud. Menos clientes, mejor servicio.",
      reality: "Realidad sobre marketing: Prometemos menos de lo que podemos. Entregamos más de lo que prometemos.",
      longTerm: "Largo plazo sobre soluciones temporales: Construimos para durar. La solución de hoy no debe convertirse en el problema de mañana."
    },

    // Company - About Values
    valuesTitle: "Nuestros Valores",
    valuesIntro: "Los principios son restricciones. Los valores son guías. Unos definen lo que no hacemos. Otros, hacia dónde apuntamos.",
    valuesWarning: "A veces estos valores tiran en direcciones opuestas. Eso es normal. La prudencia decide cuál pesa más en cada momento.",
    values: [
      { title: "Franqueza", description: "La verdad incomoda. La mentira, más. Preferimos la primera." },
      { title: "Coraje", description: "Contrarios cuando hace falta, nunca por deporte." },
      { title: "Curiosidad", description: "Sabemos mucho. No suficiente. Esa brecha nos desvela." },
      { title: "Diversidad", description: "Las mejores ideas rara vez vienen de gente que piensa igual." },
      { title: "Empatía", description: "Difícil resolver un problema que no entendemos. Difícil entender sin escuchar." },
      { title: "Humor", description: "Nos tomamos el trabajo en serio. A nosotros mismos, menos." },
      { title: "Optimismo", description: "Sabemos todo lo que puede salir mal. Aun así, creemos que saldrá bien." },
      { title: "Resiliencia", description: "Los problemas interesantes no se rinden fácil. Nosotros tampoco." },
      { title: "Responsabilidad", description: "Hay vida fuera de la oficina. La honramos." },
      { title: "Rigor", description: "No nos conformamos con que funcione. Queremos saber por qué." },
      { title: "Trabajo en equipo", description: "Nadie aquí triunfa solo. Nadie aquí fracasa solo." },
      { title: "Versatilidad", description: "La especialización es necesaria. La adaptación, inevitable." }
    ],

    // Company - Work
    workHero: "Nuestro trabajo habla por nosotros. Aunque a veces también hablamos nosotros.",
    projects: [
      {
        client: "Teatro Solís",
        title: "Sistema de Control A/V del Teatro",
        year: "2023",
        category: "Infraestructura",
        duration: "3 meses",
        challenge: "Los controles del teatro no podían manejar los sistemas nuevos de iluminación y sonido.",
        solution: "Se implementaron controles de iluminación por red con un equipo touch y remote control.",
        technologies: ["Iluminación en Red", "Touch Screen", "Sistemas de Control Remoto", "Integración A/V"],
        results: ["Sistema más rápido en cambios de espectáculos. Permitiendo obras de nivel internacional.", "Capacidades de control remoto.", "Soporte para efectos modernos de iluminación/sonido", "Control simplificado reduciendo necesidades de personal técnico"]
      },
      {
        client: "U Films",
        title: "Construcción de Infraestructura de Post-Producción",
        year: "2023-2024",
        category: "Infraestructura",
        duration: "12 meses (en curso)",
        challenge: "Dejar operativo la productora con las restricciones de red en el edificio existente —limitaciones de firewall para cumplir con los requerimientos de seguridad de clientes externos.",
        solution: "Implementamos una solución VPN precisa y se negociaron accesos particulares paralelos.",
        technologies: ["VPN", "Sistemas de Almacenamiento/Respaldo", "Redes de Alta Velocidad", "Cumplimiento de Seguridad"],
        results: ["Habilitó trabajo con clientes importantes que requieren certificaciones de seguridad.", "Mejoras significativas en los workflows de edición y renders.", "Manejo seguro de datos del cliente.", "Infraestructura paralela en fase de pruebas."]
      },
      {
        client: "Diagnóstico",
        title: "Seguridad e Integración de Datos de Laboratorio",
        year: "2021-2024",
        category: "Infraestructura y Cumplimiento",
        duration: "3 años (en curso)",
        challenge: "Requerimientos del laboratorio para manejo de datos, integración de sistemas, respaldos y cumplimiento con ISO 9001.",
        solution: "Implementamos políticas de integración en el NAS con el AD, sistemas de respaldo automatizados, inmutables, y diseño de redundancia de red por etapas.",
        technologies: ["Synology NAS", "Marco ISO 9001", "Respaldo Automatizado", "Políticas de Integración"],
        results: ["Cumplimiento ISO 9001.", "Reducción del tiempo de inactividad del sistema interno a personas externas al laboratorio.", "Mayor agilidad en tiempos de entrega de resultados"]
      }
    ],

    // Company - Partners
    partnersHero: "Probados en producción. Certificados después.",
    partners: ["Lenovo (Business Partner desde 2015)", "UniFi (Enterprise Installer desde 2018)", "Synology (Gold Partner desde 2016)", "Acronis (Cloud Partner desde 2017)", "SentinelOne (Partner desde 2022)"],
    partnersPhilosophy: {
      title: "Cómo Elegimos Socios",
      items: [
        { title: "Llamamos. No Ticketeamos.", description: "Cuando hay un problema, marcamos un número. No llenamos un formulario." },
        { title: "Pocos. Los Mejores.", description: "Pocos socios. Los que elegiríamos de nuevo." }
      ],
      advantageTitle: "Lo que el cliente obtiene",
      advantages: ["Soporte que contesta. Siempre.", "Acceso beta. Antes que otros.", "Escalamos al fabricante. Directo."]
    },

    // Company - Team
    teamHero: "Quiénes somos. Las personas detrás de los proyectos. Sin fotos de stock.",
    teamText: "En lugar del texto corporativo de rigor: Los que hacen. Sin eufemismos.",
    teamMembers: ["Peter Del Prestito", "Pablo Ferreira", "Alfonso LaRosa", "Nahuel Gonzalez", "Aníbal Ramos", "D. Esteban Echániz"],

    // Trusted By (after hero)
    trustedByTitle: "Nuestras referencias no son solo bibliográficas",

    // Company - Clients
    sectionClients: "Clientes",
    clientsHero: "Nuestras referencias no son solo bibliográficas",
    clients: ["Don Obdulio", "Aparato", "SODRE", "DSR360", "Sidley Jones", "Plataforma", "Producers", "Cimarrón", "U Films", "Diagnóstico", "AECID", "CCE", "Olivera", "Tafirel", "La Mayor", "Oriental", "Mueca", "Verne", "Embajada", "Avisa", "Dominio", "Fullcat", "Orben", "Box"],

    // Contact (from page)
    contactTitle: contactContent.es.title,
    contactSubtitle: contactContent.es.subtitle,
    contactIntro: contactContent.es.intro,
    contactBullets: [contactContent.es.bullet1, contactContent.es.bullet2, contactContent.es.bullet3],
    contactEmail: "hola@este.la",

    // Homepage Sections
    velocityTitle: "Soluciones para problemas que aún no existen",
    velocitySubtitle: "Anticipamos lo imprevisto —que, una vez previsto, deja de serlo. Diseñamos sistemas que perduran. Implementamos cambios que transforman. Mantenemos la calma cuando el servidor no la mantiene.",
    velocityFeatures: [
      { title: "Redes y Servidores", description: "Virtualización VMware y Proxmox, redes UniFi, almacenamiento Synology, LANs de 10Gb, energía redundante." },
      { title: "Protección Completa", description: "SentinelOne XDR, cámaras UniFi Protect, almacenamiento duplicado en infraestructura Synology: redundancia y recuperación." },
      { title: "Desarrollo Personalizado", description: "Aplicaciones Next.js, automatización de procesos, integración de IA. Soluciones modernas que transforman la forma de trabajar." }
    ],
    principlesHomeTitle: "Tenemos principios —y los aplicamos",
    principlesHomeSubtitle: "Suena evidente, pero en un mundo donde los valores empresariales se redactan en asados corporativos y se olvidan en el estacionamiento, mantener los propios es casi un acto de rebeldía. Elegimos profundidad. Elegimos permanencia. Elegimos consistencia.",
    principleHome1: { title: "Externos que piensan como internos", description: "Suena a contradicción. Lo es. Pero preferimos las contradicciones productivas a las coherencias estériles. Diseñamos como si fuera nuestro. Cuidamos como si viviéramos ahí. La tranquilidad tecnológica no se vende —se construye." },
    principleHome2: { title: "No coleccionamos clientes", description: "Construimos alianzas. La diferencia: a los clientes se los atiende; a los aliados se los cultiva. Las urgencias no son oportunidades —son compromisos. Y los compromisos, aquí, se cumplen incluso cuando nadie está mirando." },
    speedTitle: "Profundidad, no velocidad",
    speedDescription: "La velocidad impresiona. La profundidad perdura. Nuestro trabajo sigue funcionando cuando ya nadie se acuerda quién lo hizo.",
    ctaTitle: "Tenemos opiniones. También razones.",
    ctaSubtitle: "La combinación, nos dicen, es infrecuente. Eso también es una opinión.",
    closingQuote: "Polifemo tenía tamaño, fuerza y un ojo —que resultó ser insuficiente. Odiseo tenía ingenio, pocos hombres y un plan. Elegimos el segundo camino. Sin reuniones sobre reuniones. Sin departamentos que deleguen. Seis personas que resuelven. Porque la solución nunca estuvo en ser más grandes —estuvo en pensar mejor.",
    smallScaleTitle: "Estudiamos el Renacimiento —y no por el crédito académico",
    smallScaleFeatures: [
      "Leemos filosofía porque un sistema sin contexto humano es una máquina con pretensiones.",
      "Porque hemos aprendido: la magia sucede en este tamaño. Tu proyecto no se transfiere.",
      "Tu relación no se 'gestiona.' Nos tienes a nosotros. A todos nosotros. Siempre."
    ],
    testNumbersTitle: "Evidencia empírica",
    testMetrics: [
      { title: "100%", description: "Retención completa. La muestra es pequeña, pero el resultado es consistente." },
      { title: "Reuniones", description: "Las necesarias: pocas. Las innecesarias: ninguna. Las que podrían haber sido un email: fueron un email." },
      { title: "Equipo fundador", description: "El mismo equipo desde 2012. La rotación es un concepto que conocemos de oídas." },
      { title: "Criterio", description: "Admisión selectiva. No es arrogancia; es solamente aritmética." }
    ],
    footerTagline: "Cuando la tecnología y el conocimiento convergen",
    footerDescription: "Ávidos de lo nuevo. Devotos de lo que funciona.",
    footerAddress: "21 de Setiembre, 3015. 802 | Montevideo, Punta del Este, Uruguay",
    footerPhone: "+598 27113184"
  }
}

export function MachineView() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className="machine-view">
      <article className="machine-content">
        {/* Header */}
        <h1># Estela</h1>
        <p>{t.heroTitle}</p>
        <p>{t.heroSubtitle}</p>
        <p className="machine-muted">{t.heroSubtitleTech}</p>

        {/* Trusted By */}
        <h3>### {t.trustedByTitle}</h3>
        <div className="grid grid-cols-3 gap-12 my-8">
          {partnerLogos.map(({ name, Component }) => (
            <div key={name} className="flex items-center justify-center">
              <Component className="text-[5px] leading-[5px] font-mono text-foreground" />
            </div>
          ))}
        </div>

        {/* Developer Velocity Section */}
        <h3>### {t.velocityTitle}</h3>
        <p>{t.velocitySubtitle}</p>
        {t.velocityFeatures.map((f, i) => (
          <p key={i}>- <strong>{f.title}:</strong> {f.description}</p>
        ))}

        {/* Estela Principles */}
        <h3>### {t.principlesHomeTitle}</h3>
        <p>{t.principlesHomeSubtitle}</p>
        <h4>#### {t.principleHome1.title}</h4>
        <p>{t.principleHome1.description}</p>
        <h4>#### {t.principleHome2.title}</h4>
        <p>{t.principleHome2.description}</p>

        {/* Estela Speed */}
        <h3>### {t.speedTitle}</h3>
        <p>{t.speedDescription}</p>

        {/* CTA Section */}
        <h3>### {t.ctaTitle}</h3>
        <p className="machine-muted">{t.ctaSubtitle}</p>

        {/* Closing Section (Odysseus) */}
        <h3>### {t.closingQuote}</h3>

        {/* Small Over Scale */}
        <h3>### {t.smallScaleTitle}</h3>
        {t.smallScaleFeatures.map((f, i) => (
          <p key={i}>- {f}</p>
        ))}

        {/* Test Numbers */}
        <h3>### {t.testNumbersTitle}</h3>
        {t.testMetrics.map((m, i) => (
          <p key={i}>- <strong>{m.title}:</strong> {m.description}</p>
        ))}

        {/* Services */}
        <h2>## {t.sectionServices}</h2>

        <h3>### {t.sectionInfra}</h3>
        <p><strong>{t.infraTitle}</strong></p>
        <p>{t.infraSubtitle}</p>

        <h4>#### {t.vmTitle}</h4>
        <p>{t.vmDesc}</p>
        <ul>
          {t.vmFeatures.map((f, i) => <li key={i}>- {f}</li>)}
        </ul>

        <h4>#### {t.netTitle}</h4>
        <p>{t.netDesc}</p>

        <h4>#### {t.postTitle}</h4>
        <p>{t.postDesc}</p>
        <ul>
          {t.postFeatures.map((f, i) => <li key={i}>- {f}</li>)}
        </ul>

        <h4>#### {t.secCamTitle}</h4>
        <p>{t.secCamDesc}</p>

        <h4>#### {t.wifiTitle}</h4>
        <p>{t.wifiDesc}</p>

        <h3>### {t.sectionSecurity}</h3>
        <p><strong>{t.securityTitle}</strong></p>
        <p className="machine-muted">{t.securitySubtitle}</p>

        <h4>#### {t.secOpsTitle}</h4>
        <ul>
          {t.secOpsFeatures.map((f, i) => <li key={i}>- {f}</li>)}
        </ul>

        <p>- {t.pillar1}</p>
        <p>- {t.pillar2}</p>
        <p>- {t.pillar3}</p>

        <h4>#### {t.backupTitle}</h4>
        <p>{t.backupDesc}</p>

        <h4>#### {t.storageTitle}</h4>
        <ul>
          {t.storageFeatures.map((f: string, i: number) => <li key={i}>- {f}</li>)}
        </ul>

        <h4>#### {t.sentinelTitle}</h4>
        <p>{t.sentinelDesc}</p>

        <h4>#### {t.wasabiTitle}</h4>
        <p>{t.wasabiDesc}</p>

        <h4>#### {t.synologyTitle}</h4>
        <p>{t.synologyDesc}</p>

        <h3>### {t.sectionDev}</h3>
        <p><strong>{t.devTitle}</strong></p>
        <p className="machine-muted">{t.devSubtitle}</p>
        <h4>#### {t.devSectionTitle}</h4>
        <p>{t.devSectionDesc}</p>

        <h3>### {t.sectionConsulting}</h3>
        <p><strong>{t.consultingTitle}</strong></p>
        <p className="machine-muted">{t.consultingSubtitle}</p>
        <h4>#### {t.consultingSectionTitle}</h4>
        <p>{t.consultingPara1}</p>
        <p>{t.consultingPara2}</p>
        <ul>
          {t.consultingAdvantages.map((a, i) => <li key={i}>- {a}</li>)}
        </ul>

        {/* Technical Specifications */}
        <h3>### {t.specsTitle}</h3>
        <p className="machine-muted">{t.specsSubtitle}</p>
        {t.specsSections.map((section, si) => (
          <div key={si}>
            <h4>#### {section.title}</h4>
            {section.cards.map((card, ci) => (
              <div key={ci}>
                <p><strong>{card.title}</strong></p>
                <ul>
                  {card.specs.map((spec, spi) => <li key={spi}>- {spec}</li>)}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Method */}
        <h2>## {t.sectionMethod}</h2>
        <p><strong>{t.methodTitle}</strong></p>
        {t.methodSubtitle && <p className="machine-muted">{t.methodSubtitle}</p>}
        <p>{t.methodIntro1}</p>
        <p>{t.methodIntro2}</p>

        {/* Method Introduction */}
        <h3>### {t.methodIntroTitle}</h3>
        <p>{t.methodIntroLead}</p>
        <h4>#### {t.methodIntroLostArt.title}</h4>
        {t.methodIntroLostArt.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <h4>#### {t.methodIntroTranslation.title}</h4>
        {t.methodIntroTranslation.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        {t.methodIntroPhilosophy && (
          <>
            <h4>#### {t.methodIntroPhilosophy.title}</h4>
            <p>{t.methodIntroPhilosophy.intro}</p>
            {t.methodIntroPhilosophy.items.map((item, i) => (
              <p key={i}>- <strong>{item.title}:</strong> {item.description}</p>
            ))}
          </>
        )}
        <h4>#### {t.methodIntroWhatThisMeans.title}</h4>
        {t.methodIntroWhatThisMeans.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        {t.methodEmerges && (
          <>
            <h4>#### {t.methodEmerges.title}</h4>
            <p>{t.methodEmerges.intro}</p>
            <p><strong>{t.methodEmerges.listIntro}</strong></p>
            {t.methodEmerges.items.map((item, i) => (
              <p key={i}>- <strong>{item.title}:</strong> {item.description}</p>
            ))}
          </>
        )}
        {t.journeyAhead && (
          <>
            {t.journeyAhead.title && <h4>#### {t.journeyAhead.title}</h4>}
            <p>{t.journeyAhead.intro}</p>
            {t.journeyAhead.items && (
              <ul>
                {t.journeyAhead.items.map((item, i) => <li key={i}>- {item}</li>)}
              </ul>
            )}
            {t.journeyAhead.conclusion && <p>{t.journeyAhead.conclusion}</p>}
          </>
        )}

        {/* Method Principles */}
        <h3>### {t.methodPrinciplesTitle}</h3>
        <p className="machine-muted">{t.methodPrinciplesSubtitle}</p>
        {t.methodPrinciples.map((principle, i) => (
          <div key={i}>
            <h4>#### {principle.number} {principle.title}</h4>
            <p>{principle.content}</p>
          </div>
        ))}

        {/* Method Implementation */}
        <h3>### {t.methodImplementationTitle}</h3>
        <p>{t.methodImplementationLead}</p>
        {t.methodImplementationPhases.map((phase, i) => (
          <div key={i}>
            <h4>#### {phase.number} {phase.title}</h4>
            <p><strong>{phase.intro}</strong></p>
            <ul>
              {phase.content.map((item, j) => <li key={j}>- {item}</li>)}
            </ul>
            <p className="machine-muted">{phase.time}</p>
          </div>
        ))}

        {/* Method Practices */}
        <h3>### {t.methodPracticesTitle}</h3>
        <p>{t.methodPracticesLead}</p>
        {t.methodPractices.map((practice, i) => (
          <div key={i}>
            <h4>#### {practice.number} {practice.title}</h4>
            <p><strong>{practice.intro}</strong></p>
            <p>{practice.description}</p>
            <p><strong>{practice.subsection.title}</strong></p>
            <ul>
              {practice.subsection.items.map((item, j) => <li key={j}>- {item}</li>)}
            </ul>
            {practice.conclusion && <p>{practice.conclusion}</p>}
          </div>
        ))}

        {/* Method Philosophy */}
        <h3>### {t.methodPhilosophyTitle}</h3>
        <p>{t.methodPhilosophyLead}</p>

        <h4>#### {t.methodPhilosophyHexagon.title}</h4>
        <p>{t.methodPhilosophyHexagon.intro}</p>
        <p>{t.methodPhilosophyHexagon.p1}</p>

        <h4>#### {t.methodPhilosophyHistory.title}</h4>
        <p>{t.methodPhilosophyHistory.intro}</p>
        <p>{t.methodPhilosophyHistory.p1}</p>
        <p><strong>{t.methodPhilosophyHistory.hopper.title}</strong></p>
        <p><em>{t.methodPhilosophyHistory.hopper.quote}</em></p>
        <p>{t.methodPhilosophyHistory.hopper.text}</p>
        <p><strong>{t.methodPhilosophyHistory.euclid.title}</strong></p>
        <p>{t.methodPhilosophyHistory.euclid.text}</p>
        <p><strong>{t.methodPhilosophyHistory.bauhaus.title}</strong></p>
        <p>{t.methodPhilosophyHistory.bauhaus.text}</p>
        <p>{t.methodPhilosophyHistory.conclusion}</p>

        <h4>#### {t.methodPhilosophyArt.title}</h4>
        <p>{t.methodPhilosophyArt.intro}</p>
        <p>{t.methodPhilosophyArt.p1}</p>
        <p>{t.methodPhilosophyArt.conclusion}</p>

        <h4>#### {t.methodPhilosophyResults.title}</h4>
        <p>{t.methodPhilosophyResults.intro}</p>
        <p>{t.methodPhilosophyResults.p1}</p>
        <p><em>{t.methodPhilosophyResults.conclusion}</em></p>
        <p>{t.methodPhilosophyResults.coda}</p>

        {/* Company */}
        <h2>## {t.sectionCompany}</h2>

        <h3>### {t.sectionAbout}</h3>
        <p><strong>{t.aboutHero}</strong></p>
        <h4>#### {t.missionTitle}</h4>
        <p>{t.missionQuote}</p>
        <p>{t.missionFounded}</p>
        <p>- {t.whatWeDo}</p>
        <p>- {t.howDifferent}</p>
        <p>- {t.whyExist}</p>
        <p>- {t.whoServe}</p>
        <h4>#### {t.sectionPrinciples}</h4>
        <p>- {t.principles.techServes}</p>
        <p>- {t.principles.excellence}</p>
        <p>- {t.principles.reality}</p>
        <p>- {t.principles.longTerm}</p>

        {/* Values */}
        <h4>#### {t.valuesTitle}</h4>
        <p>{t.valuesIntro}</p>
        <p className="machine-muted">{t.valuesWarning}</p>
        {t.values.map((value, i) => (
          <p key={i}>- <strong>{value.title}:</strong> {value.description}</p>
        ))}

        <h3>### {t.sectionWork}</h3>
        <p><strong>{t.workHero}</strong></p>
        {t.projects.map((p, i) => (
          <div key={i}>
            <h4>#### {p.client} - {p.title} ({p.year})</h4>
            <p className="machine-muted">{p.category} · {p.duration}</p>
            <p><strong>Challenge:</strong> {p.challenge}</p>
            <p><strong>Solution:</strong> {p.solution}</p>
            <p><strong>Technologies:</strong> {p.technologies.join(", ")}</p>
            <p><strong>Results:</strong></p>
            <ul>
              {p.results.map((r, j) => <li key={j}>- {r}</li>)}
            </ul>
          </div>
        ))}

        <h3>### {t.sectionPartners}</h3>
        <p><strong>{t.partnersHero}</strong></p>
        <ul>
          {t.partners.map((p, i) => <li key={i}>- {p}</li>)}
        </ul>
        <h4>#### {t.partnersPhilosophy.title}</h4>
        {t.partnersPhilosophy.items.map((item, i) => (
          <div key={i}>
            <p><strong>{item.title}</strong></p>
            <p>{item.description}</p>
          </div>
        ))}
        <p><strong>{t.partnersPhilosophy.advantageTitle}</strong></p>
        <ul>
          {t.partnersPhilosophy.advantages.map((a, i) => <li key={i}>- {a}</li>)}
        </ul>

        <h3>### {t.sectionTeam}</h3>
        <p><strong>{t.teamHero}</strong></p>
        <p>{t.teamText}</p>
        <p>{t.teamMembers.join(", ")}</p>

        {/* Contact */}
        <h2>## {t.sectionContact}</h2>
        <p><strong>{t.contactTitle}</strong></p>
        {t.contactSubtitle && <p className="machine-muted">{t.contactSubtitle}</p>}
        <p>{t.contactIntro}</p>
        <ul>
          {t.contactBullets.map((b, i) => <li key={i}>- {b}</li>)}
        </ul>
        <p>Email: {t.contactEmail}</p>

        {/* Footer */}
        <hr />
        <p className="machine-muted">{t.footerTagline}</p>
        <p>{t.footerDescription}</p>
        <p>{t.footerAddress}</p>
        <p>{t.footerPhone}</p>
      </article>
      <ModeToggle />
    </div>
  )
}
