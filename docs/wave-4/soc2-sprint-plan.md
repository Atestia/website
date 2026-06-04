# SOC 2 Type 1 Sprint Plan — Atestia
**Target completion:** Q1 2027 audit window
**Sprint kickoff:** Q3 2026
**Budget:** $15-25K (vendor + auditor combined)

---

## Backwards-planned timeline

```
Q1 2027 (Jan-Mar)  →  Type 1 audit window
   ↑ 30 days
Q4 2026 (Oct-Dec)  →  Audit-readiness letter from vendor
   ↑ 90 days
Q3 2026 (Jul-Sep)  →  Vanta or Drata vendor signup + sprint kickoff
   ↑ 30 days
Q2 2026 (Apr-Jun) →  Vendor selection complete (TODAY: June 4)
```

## Phase 1: Vendor selection (June 2026, ~2 weeks)

### Vanta vs Drata

**Vanta:**
- 7,500+ customers, more mature platform
- Stronger AI/ML governance addon (ISO 42001 + EU AI Act)
- Native integrations: AWS, GitHub, Linear, Slack, Vercel, Stripe
- Pricing: ~$10K/yr for SOC 2 baseline + readiness
- Trust report public-facing tool (good for customer-facing trust hub)

**Drata:**
- Comparable feature parity, slightly more workflow-driven
- Pricing similar
- 9 LITRG Trust Center capability

**Recommendation: Vanta.** The Trust Report customer-facing tool is exactly
what Atestia needs to display to bank InfoSec teams during pre-sales SIG
review. Sean: sign up before end of June 2026.

## Phase 2: Sprint setup (July 2026, 4 weeks)

1. **Connect Vanta to all infrastructure** (AWS, GitHub, npm, Cloudflare).
2. **Define control scope.** SOC 2 Type 1 baseline covers SOC 2 Trust
   Services Criteria CC1-CC9 (Security, Confidentiality). We will NOT
   include Availability, Processing Integrity, or Privacy in Type 1;
   those can be added in Type 2.
3. **Designate control owners.** Initially all owned by Sean (Founder/CEO)
   until CISO hire. Vanta tracks who attests to each control monthly.

## Phase 3: Control implementation (July-September 2026, 12 weeks)

Vanta will auto-detect or flag gaps in:

### CC1 — Control Environment
- Code of conduct ✅ (post on internal docs)
- Board of directors structure (Atestia Inc. is a wholly-owned subsidiary
  of FuteurCredX Inc.)
- Conflict of interest policy ✅

### CC2 — Communication and Information
- Internal security policies ✅ (write 5-page version of each: AUP, IRP, BCP)
- Vendor management ✅ (already documented in /trust/subprocessors.html)
- Communication with employees ✅ (Slack as primary)

### CC3 — Risk Assessment
- Annual risk register update
- Fraud risk assessment
- Vendor risk management

### CC4 — Monitoring Activities
- Internal audit cadence (Vanta auto-monitors)
- Continuous controls monitoring (Vanta core competency)
- Vulnerability scanning (Snyk + Trivy already in CI)

### CC5 — Control Activities
- Documented control framework (Vanta generates from selections)
- Segregation of duties for production access
- Change management ✅ (already mature: PR + CI gating)

### CC6 — Logical and Physical Access
- IAM ✅ (Clerk + SAML for Enterprise)
- MFA ✅ (required for all admin)
- Logical access reviews quarterly (Vanta automates)
- Physical access (N/A — remote-first; AWS data centers inherited)

### CC7 — System Operations
- Backup procedures ✅ (RDS auto + S3 cross-region)
- DR/BC plan documented
- Incident response runbook (Vanta has template)

### CC8 — Change Management
- SDLC documented (already via SDLC.md + tier4-mcp-server CONTRIBUTING.md)
- PR review required ✅
- Production deployment gating ✅

### CC9 — Risk Mitigation
- Vendor risk register
- Incident response capability (need to engage IR retainer per Wave 4)

## Phase 4: Mock audit (October 2026, 4 weeks)

Vanta will offer a "readiness review" via a partnered auditor before
formal audit kickoff. We use this to identify and close any remaining gaps.

## Phase 5: Type 1 audit window (Q1 2027)

Engage one of:
- **Big 4 (Deloitte / EY / KPMG / PwC):** $20-30K, strongest brand for
  Tier-1 customers
- **Boutique (A-LIGN, Schellman, Lemon Tree):** $8-15K, faster turnaround
- **Vanta-partner auditor:** $5-10K, simplest workflow

**Recommendation: Schellman.** Best price-quality ratio for SOC 2 work,
recognized brand for procurement reviewers.

## Phase 6: Public posting

Once Type 1 report issues:
1. Update `/trust/index.html` from "SOC 2 Type 1 in progress" to
   "SOC 2 Type 1 issued [date]"
2. Update Vanta Trust Report
3. Update SIG Lite + CAIQ
4. Update enterprise MSA template to reference the report by date

## Phase 7: Type 2 observation window (Q1-Q3 2027)

Type 2 requires 6 months of operational evidence. Vanta continues
automated collection. Type 2 audit window: Q3 2027. Type 2 report issued:
Q4 2027.

This places us at SOC 2 Type 2 in time for the Q3-Q4 2027 Series A close
target on the roadmap.
