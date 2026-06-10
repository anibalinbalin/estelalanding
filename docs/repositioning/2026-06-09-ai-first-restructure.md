# Estela AI-First Repositioning — Restructure Proposal

Date: 2026-06-09
Status: Proposal — no code changes yet

## The thesis

This is an inversion, not a rebuild. Today AI is a sub-bullet under Development;
infra is the headline. After the migration, AI engineering is the headline and
infrastructure becomes a supporting capability with one sharp differentiator:
**private AI infrastructure** — client models and data running on metal Estela
controls, not a hyperscaler. The Estela Method, the voice, the design system,
and the bilingual structure all stay.

Positioning sentence (internal compass, not copy):

> Estela is an AI engineering firm. Small teams that build AI systems which
> keep working after the demo ends — and the private infrastructure to run
> them on.

---

## 1. New service taxonomy

### Current
| Order | Service | Role |
|---|---|---|
| 1 | Infrastructure | Headline (heaviest page, hardware catalog) |
| 2 | Security | MSP-flavored (SentinelOne, Synology, backups) |
| 3 | Development | AI lives here as a subsection |
| 4 | Consulting | Advisory |
| 5 | Specifications | Detail page |

### Proposed
| Order | Service | URL | Role |
|---|---|---|---|
| 1 | **AI Engineering** | `/services/ai` (new) | Flagship. Pipelines, agents, automation, AI-assisted development. |
| 2 | **Development** | `/services/development` | Custom software, with AI-assisted engineering as the default way of working. |
| 3 | **Private AI Infrastructure** | `/services/infrastructure` (rewritten) | GPU compute, self-hosted models, hybrid cloud. The infra heritage, re-aimed. |
| 4 | **Consulting** | `/services/consulting` | AI strategy + technology advisory. Mostly survives as-is with an AI lens. |
| 5 | **Security** | `/services/security` | Folded down to a supporting capability: data protection for AI workloads, compliance. |

Specifications (`/services/specifications`) stays as the detail page but its
content shifts to AI stack specifics (models, serving, GPUs) instead of
network gear.

Nav dropdown one-liners, matching the house voice (each needs an ES twin):

- AI Engineering — "The machine proposes. We decide." (already exists on the home page; promote it)
- Development — "Code that solves problems, not creates them." (keep)
- Private AI Infrastructure — "Your models, on metal we control."
- Consulting — "Answers to questions you haven't asked yet." (keep)
- Security — "What separates calm from chaos. Literally." (keep)

---

## 2. Page-by-page plan

### Home (`/`)
- **Hero headline** — keep: "The shortest path between the problem and the
  solution." It already works for AI; don't touch it.
- **Hero subline** — replace. Current: "Infrastructure automation, security
  hardening, and development services. REST APIs, CI/CD pipelines, and
  infrastructure-as-code deployments."
  Direction: lead with AI systems, close with the infra proof point.
  Candidate: "AI engineering and development. Pipelines, agents, and the
  private infrastructure to run them — built by people who answer for the
  results."
- **Section order** — move `AIPrinciplesSection` (Vibe Coder 001) up to be the
  first content section after TrustedBy. It's the most distinctive AI asset on
  the site; right now it's buried mid-page.
- Everything else (Method teasers, EstelaSpeed, SmallOverScale, Hands, etc.)
  stays — it's positioning-agnostic.

### `/services/ai` (NEW — flagship)
Promote the strongest existing copy to its own page and expand:
- Hero: "AI that works after the demo ends." / "IA que funciona cuando se
  apaga el proyector." (lifted from the Development page, where it's wasted
  as a sub-headline)
- Sections: AI engineering pipelines (document processing, QA automation,
  data routing, content generation — already enumerated in llms.txt),
  agentic automation, AI-assisted development practice, model selection &
  evaluation ("AI is a tool. We are the criteria.").
- Reuse `DevelopmentAsciiArt` / Vibe Coder visual language; the
  `components/ascii-logos/` work fits here.

### `/services/development` (trim + refocus)
- Loses the AI headline to the new AI page; becomes the custom-software page.
- Keep "Development with accountability." AI-assisted engineering stays as
  the *how*, not the *what*.

### `/services/infrastructure` (rewrite — biggest cut)
Currently 561 lines of hardware catalog. Reframe as **Private AI
Infrastructure**:
- **Keep, re-aimed:** VMs/bare metal/hybrid cloud → "GPU compute and private
  model hosting"; storage → "fast storage for datasets and model weights";
  networking → high-bandwidth interconnect for AI workloads; the
  data-sovereignty angle (clients nervous about data leaving their walls).
- **Cut entirely:** WiFi 7 access points, PTZ surveillance cameras, UniFi
  Protect, guest networks/captive portals, post-production workstation
  builds. This is the MSP catalog content that most contradicts an AI-company
  identity.
- New hero direction: "AI runs on hardware. Ours." / sub: "Self-hosted models,
  GPU compute, and hybrid architectures for companies whose data can't leave
  the building."

### `/services/security` (demote + reframe)
- Trim the product-brochure tone (SentinelOne/Wasabi/Synology name-dropping).
- Reframe around what an AI client cares about: data protection for training
  and inference, access control, compliance (the Diagnóstico ISO 9001 story
  is the proof), backup/immutability for datasets.
- Keep "The complex, simplified. The critical, solved."

### `/services/consulting` (light touch)
- Survives nearly as-is. Add AI strategy explicitly: model/vendor selection,
  build-vs-buy, "optimization audits" become "AI-readiness audits" alongside.
- The consultare/soportare joke stays. Obviously.

### `/method/*` (no changes)
All five subpages are positioning-agnostic and arguably fit AI work better
than infra work ("Technology should be invisible when it works and obvious
when it doesn't"). Leave untouched in phase 1. Optional later: one paragraph
in Practices about how the method governs AI-assisted engineering.

### `/company/work` (reframe, then grow)
All three case studies are categorized "Infrastructure". Without new content
the page undercuts the new story. Two moves:
1. Re-categorize honestly: Teatro Solís → "Systems Integration"; U Films →
   "Secure Infrastructure"; Diagnóstico → "Data & Compliance". The Diagnóstico
   story already reads as a data-engineering/compliance story — lean into it.
2. Add at least one AI case study (even an internal one: the Estela GPU box,
   an AI pipeline built for a client, or the este.la site itself as an
   AI-assisted build). An AI-first site with zero AI work shown is the
   weakest point of the whole migration — flag this as a content dependency.

### `/company/about`, `/company/team`, `/company/partners`
- About: hero stays ("Technology at the service of your business. Not the
  other way around." — works perfectly for AI). Review ContentSection copy
  for "infrastructure firm" self-descriptions; adjust mission line to lead
  with AI engineering.
- Partners: review the partner list — UniFi/Synology-type logos read MSP.
  Either trim or add AI-stack partners (Anthropic, NVIDIA, etc. as
  applicable).

### Metadata + llms.txt + SEO
- `app/layout.tsx` metadata description: currently "Cuando la tecnología y el
  conocimiento convergen" — keep the poetry but add an AI-forward description
  per-page via metadata exports.
- `public/llms.txt`: rewrite the one-line summary to "AI engineering and
  technology consulting firm…", reorder Services to match the new taxonomy,
  update "What Estela Does" to lead with AI, add the private-AI-infrastructure
  differentiator. Keep the guardrails section.
- Redirects: none needed if URLs are kept (`/services/development` and
  `/services/infrastructure` keep their paths; only `/services/ai` is new).

---

## 3. What gets cut (summary)

- Hardware catalog on the infrastructure page: WiFi APs, cameras,
  surveillance, captive portals, workstation builds (~300+ lines).
- Security page product brochure tone (keep capabilities, drop the
  reseller framing).
- Hero subline's "REST APIs, CI/CD pipelines, infrastructure-as-code"
  laundry list.
- "Infrastructure" as the first word a visitor reads about services.

## 4. What stays untouched

- The Estela Method (all 5 pages), the voice, the design system, dark theme,
  Three.js hero, bilingual EN/ES structure, Vibe Coder 001 (gets promoted),
  contact flow, footer.

## 5. Suggested phasing

1. **Phase 1 — Inversion (one PR):** hero subline, nav taxonomy + order,
   new `/services/ai` page, home section reorder, llms.txt + metadata.
2. **Phase 2 — Rewrites:** infrastructure page → Private AI Infrastructure;
   security page trim; consulting AI additions; development refocus.
3. **Phase 3 — Proof:** work page re-categorization + first AI case study;
   about/partners review.

Every copy change ships EN + ES together — the site is fully bilingual and
half-translated pages would be worse than the old positioning.
