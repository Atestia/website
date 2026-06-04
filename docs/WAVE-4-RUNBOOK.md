# Wave 4 — Structural Trust Runbook

Wave 4 builds the externally-verifiable trust posture that Tier-1 banks
require but that I (Claude) cannot complete without your wallet and your
network. This document captures everything ready-to-execute so you can
work through it sequentially.

Status as of: **2026-06-04**

---

## What I COMPLETED in Wave 4 (solo)

### 1. Penetration test scope document (RFP-ready)
Draft penetration test scope-of-work ready for vendor outreach. See
`/docs/wave-4/pen-test-rfp.md`. Includes test scope (API, auth, tenant
isolation, KMS revocation path, supply chain, IDOR on lineage records),
deliverables, NDA boilerplate.

### 2. SOC 2 Type 1 sprint timeline
Backwards-planned timeline from a Q4 2026 audit-completion target back to
today. See `/docs/wave-4/soc2-sprint-plan.md`. Includes:
- Vanta or Drata vendor selection criteria
- Control baseline (CC1-CC9 SOC 2 categories)
- Evidence-collection cadence
- Auditor selection (Big 4 vs boutique)

### 3. Advisor outreach templates
Three role-specific cold-email templates ready to send. See
`/docs/wave-4/advisor-outreach.md`. Covers:
- Former Tier-1 bank Head of MRM
- Former OCC examiner (Senior Examiner level)
- Big-4 Model Risk Advisory partner

### 4. CNAME files pre-staged for atestia.ai purchase
Ready to push `CNAME` content to the website repo the moment you point
DNS. See `/docs/wave-4/cname-staging.md`.

### 5. Instatus / Better Stack signup checklist
Status page provider selection criteria + onboarding steps. See
`/docs/wave-4/status-page-migration.md`.

---

## What YOU need to do (sequence + budget)

### 🚨 Week 1 (this week) — $0-100, ~4 hours of your time

1. **Revoke npm token `npm_8ZWE...`** — still pending from earlier session.
   - 5 minutes. Go to https://www.npmjs.com/settings/atestia/tokens.

2. **Buy `atestia.ai`** + `atestia.io` + `tier4.org`
   - 30 minutes. ~$50/year via Namecheap or Cloudflare Registrar.
   - Then point them at Cloudflare DNS.

3. **Cloudflare email routing**
   - 30 minutes. Set up `hello@`, `security@`, `legal@`, `charter@`,
     `enterprise@`, `status@`, `partners@`, `advisors@` to forward to your
     personal Gmail until the team grows.

4. **Apply CNAME to the new repo + remove the old `/website/` URL**
   - 5 minutes. Push a `CNAME` file with `atestia.ai` content to repo
     root after DNS points to `Atestia.github.io`.

### 📋 Week 2-3 — $1,200-2,500 spend, ~6 hours of your time

5. **Sign up for Instatus** ($29/mo) or Better Stack ($25/mo)
   - 30 minutes. Configure 1 synthetic monitor against the npm endpoint
     and 1 against the marketing site.
   - Update `/status.html` to redirect to `status.atestia.ai`.

6. **Appoint EU Article 27 representative**
   - 30 minutes. Sign up with VeraSafe ($1,200/yr) or Prighter ($2,400/yr).
   - Update `/legal/privacy.html` to remove "EU/UK representative TBD Q3
     2026" and replace with the named representative.

7. **Apply EU DPO mention** to Privacy + DPA
   - 30 minutes after #6 lands.

### 💸 Week 4-8 — $25-50K spend, requires legal counsel

8. **Engage Vanta or Drata for SOC 2 Type 1 sprint**
   - Budget: $15-25K total (vendor + auditor combined).
   - Target: SOC 2 Type 1 readiness letter by Q4 2026, audit by Q1 2027.

9. **Commission independent pen test**
   - Budget: $8-15K for executive-summary-grade test.
   - Vendors: Cobalt, Bishop Fox, NCC Group, TrustedSec.

10. **Stripe Atlas Delaware 501(c)(6) WG filing**
    - Budget: $500-1,000 for Atlas + IRS Form 1024 + state Delaware fees.
    - Sean — start by selecting Working Group's executive director (you?).

### 🤝 Week 1-12 — networking, takes time

11. **Get 1-3 advisors publicly named** with photos + LinkedIns
    - Target profiles per templates in `/docs/wave-4/advisor-outreach.md`.
    - Updates `/company/about.html` once any advisor commits in writing.

12. **Get 1 design-partner bank publicly named**
    - This is the highest-leverage credibility move possible.
    - Even an anonymized "$30B regional bank" reference with permission to
      describe deployment specifics moves the entire credibility needle.

13. **File USPTO trademarks** for ATESTIA + TIER-4 + TIER-4-CONFORMANT
    - Budget: $250-350 per mark × 3 marks = ~$1,000.
    - Counsel optional but recommended (~$1,500).

---

## Once Wave 4 is complete (full set)

The site moves from **6.5/10** (designer audit at start of session) to
**8.5/10** (designer audit target). The MRM, CISO, Procurement, and
Skeptical-Analyst persona objections all fall to acceptable levels:

| Persona | Before Wave 1 | After Wave 1-3 | After Wave 4 |
|---|---|---|---|
| **MRM Head** | Reject at intake (fabricated claims) | Advance to InfoSec review | Approve pilot conversation |
| **CISO** | Reject SIG (no SOC 2, contradictions) | Pre-approve pending pen test | Approve SIG |
| **Procurement** | Reject (no entity, no phone, no logos) | Pass intake | Approve with redlines |
| **Skeptical Analyst** | Publishes negative piece | Neutral / interested | Could write positive piece |
| **Designer (Tier-1 CTO test)** | Cookie-cutter Tailwind smell | Compiled CSS, signature page elements | Indistinguishable from Stripe-tier |

---

## Final commit + audit gate

After Wave 4 items 1-7 land (week 1-3, ~$1.5K spend, 12 hours of your time),
I will re-run the 5-persona audit. If P0 issues are below 3 across all 5
personas, we ship the launch announcement.

Items 8-13 are pre-sales-cycle prep, not launch blockers.

---

## My recommendation on sequencing

1. **Tonight, before bed**: revoke npm token (#1), buy domains (#2).
2. **Tomorrow morning**: Cloudflare email routing (#3), CNAME push (#4).
3. **Tomorrow afternoon**: Sign up for Instatus, configure synthetic
   monitor (#5).
4. **End of week**: Appoint EU Article 27 rep (#6), close on Vanta/Drata
   vendor selection.
5. **Start sending advisor outreach emails immediately** (#11) — those
   conversations take 4-8 weeks and need to be running in parallel with
   everything else.

After step 7 lands, the site is a credible Tier-2 / Regional bank pilot
target. After step 8 (SOC 2 in flight) + step 11 (1+ advisor named), the
site becomes a credible Tier-1 pilot target.
