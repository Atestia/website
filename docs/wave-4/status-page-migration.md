# Status Page Migration — Instatus or Better Stack
**Updated: 2026-06-04**

The current static `/status.html` is honest about being launch-phase but
will not survive a vendor risk reviewer for long. A proper third-party
status page is required before any production Atestia Platform Enterprise
contract is signed.

---

## Provider comparison

| Provider | Monthly | Setup time | Pros | Cons |
|---|---|---|---|---|
| **Instatus** | $29 (Hobby) / $79 (Pro) | 15 min | Modern UI, fast, RSS + email + Slack subscribers, public status reports, incident communication templates | Less ecosystem than Statuspage |
| **Better Stack (Better Uptime)** | $25 (Free for 10 monitors) / $50 (Team) | 15 min | Bundled with uptime monitoring, great Slack integration, Status Pages included free | Slightly more complex UI |
| **Statuspage by Atlassian** | $79 (Hobby) / $349 (Team) | 30 min | Industry standard, recognized by procurement | Expensive, dated UI, slow |
| **Status.io** | $79 (Bronze) / $200 (Silver) | 20 min | Comparable to Statuspage | Smaller customer base |

**Recommendation: Better Stack.** $25/month, bundled with uptime
monitoring (saves a Datadog Synthetics line item), modern UI, and the
Free tier covers our launch-phase needs while we have 0 production
incidents to communicate.

Sean — sign up tonight if possible.

---

## Setup checklist (after signup)

### Step 1: Add monitors
- `https://atestia.ai/` (or atestia.github.io/ pre-CNAME) — HTTP GET, expect 200
- `https://www.npmjs.com/package/@atestia/tier4-mcp-server` — HTTP GET, expect 200
- `https://github.com/Atestia/tier4-mcp-server` — HTTP GET, expect 200

### Step 2: Define components
Mirror the existing /status.html sections:
- npm registry · @atestia/tier4-mcp-server
- GitHub repository · Atestia/tier4-mcp-server
- atestia.ai marketing site
- Tier-4 spec resolver
- (Q4 2026) Atestia Platform Enterprise API

### Step 3: Configure subscribers
- Email opt-in (collect via form)
- RSS feed
- Slack webhook (Atestia internal channel)
- Webhook to Vanta (for SOC 2 evidence on incident response)

### Step 4: Define incident templates
Pre-write templates for common incident classes so we can post within
minutes of an incident, not hours:
- Service unavailable
- Performance degradation
- Sub-processor outage (AWS / Cloudflare / etc.)
- Security incident (with breach notification timeline)
- Scheduled maintenance

### Step 5: Update marketing site
Replace `/status.html` with a thin landing that redirects to or embeds
`status.atestia.ai`. Pseudo-code:

```html
<meta http-equiv="refresh" content="0; url=https://status.atestia.ai/">
```

Or embed via iframe for in-site experience.

### Step 6: Update SIG Lite + CAIQ references
Update both questionnaire responses to reference the new third-party
status page URL. Removes the "static GitHub Pages status page is theater"
criticism.

### Step 7: Update Trust Center
Add a "Real-time service status" link on `/trust/index.html` pointing
to status.atestia.ai.

---

## First-month operational practice

The biggest credibility risk on a status page is "0 incidents reported"
when an incident clearly happened (e.g., a slow Cloudflare edge that
affected page load times).

**Practice:** Even for trivial issues, post:
- "Investigating" → "Identified" → "Monitoring" → "Resolved"

Five posts to a status page during the first month — even for 5-minute
incidents — establishes operational maturity that procurement reviewers
look for.

If we have zero real incidents in month 1, post a single "All systems
operational — Q3 2026 in review" monthly summary with uptime achieved.
