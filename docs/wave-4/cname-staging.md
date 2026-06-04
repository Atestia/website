# CNAME Staging — atestia.ai / tier4.org Domain Setup
**Updated: 2026-06-04**

The moment you buy `atestia.ai` and `tier4.org` and point DNS at the
GitHub Pages account, push these files to the appropriate repos.

---

## Repo 1: `Atestia/atestia.github.io`

**File:** `CNAME` (at repo root, no extension)

**Content:** (one line, no trailing newline)

```
atestia.ai
```

**Effect:** GitHub Pages serves the marketing site at
`https://atestia.ai/` instead of `https://atestia.github.io/`.

Push command:

```bash
cd /Users/devaccount/Lumiq-AI-Dashboard
echo -n "atestia.ai" > /tmp/atestia-cname/CNAME
cd /tmp/website-fix
cp /tmp/atestia-cname/CNAME .
git add CNAME
git commit -m "domain: point GitHub Pages to atestia.ai"
git push origin main
git push atestia-pages main
```

---

## DNS configuration at registrar

After domain purchase, add these DNS records at registrar (or in
Cloudflare DNS):

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| AAAA | @ | 2606:50c0:8000::153 | 3600 |
| AAAA | @ | 2606:50c0:8001::153 | 3600 |
| AAAA | @ | 2606:50c0:8002::153 | 3600 |
| AAAA | @ | 2606:50c0:8003::153 | 3600 |
| CNAME | www | atestia.github.io | 3600 |

These are GitHub's published Pages IPs (current as of 2026).

---

## Cloudflare email routing (recommended)

Sign up Cloudflare → add atestia.ai → enable Email Routing:

| Address | Routes to |
|---|---|
| hello@atestia.ai | sean@gmail.com |
| security@atestia.ai | sean@gmail.com |
| legal@atestia.ai | sean@gmail.com |
| charter@atestia.ai | sean@gmail.com |
| enterprise@atestia.ai | sean@gmail.com |
| status@atestia.ai | sean@gmail.com |
| partners@atestia.ai | sean@gmail.com |
| advisors@atestia.ai | sean@gmail.com |
| privacy@atestia.ai | sean@gmail.com |

Free tier supports 200 routes. Replace `sean@gmail.com` with whatever
mailbox you actually monitor.

---

## tier4.org separate repo (optional)

If you want `tier4.org` as a separate site (just the spec subset),
create a `Atestia/tier4.org` repo and serve only:
- /spec, /charter, /registry, /methodology pages
- + a redirect to atestia.ai for everything else

Pros: cleaner brand separation, signals "this isn't an Atestia-controlled
spec, it's a working-group spec."

Cons: more repos to maintain, plus need to handle the spec live link
inversion (the marketing site links to tier4.org/spec.html now).

**Recommendation: defer.** Use `tier4.atestia.ai` subdomain initially via a
Cloudflare rule that maps `tier4.atestia.ai/*` → `atestia.ai/tier4/*`.
Cleaner and one less repo.

---

## Verification after deploy

After CNAME + DNS propagation (~10 minutes to 1 hour):

```bash
# Verify DNS resolves
dig +short atestia.ai

# Verify Pages serves
curl -I https://atestia.ai/

# Verify the homepage renders identically
curl -s https://atestia.ai/ | head -50
```

If anything fails, check:
1. GitHub Pages settings → custom domain field shows "atestia.ai" with
   green checkmark.
2. DNS records propagated (use dnschecker.org).
3. SSL cert provisioned (GitHub auto-provisions via Let's Encrypt within
   1 hour of CNAME + DNS valid).
