# Penetration Test — Request for Proposal (RFP)
**Date issued:** 2026-06-04
**Issuer:** Atestia, Inc. (operated by FuteurCredX Inc.)
**Contact:** security@atestia.ai
**Engagement budget:** $8-15K (executive-summary-grade)

---

## 1. Engagement objective

Atestia is preparing for SOC 2 Type 1 audit kickoff (Q4 2026) and first
production customer pilots. We need an independent third-party penetration
test executive summary that we can:

1. Reference in vendor risk questionnaires (SIG Lite, CAIQ v4.0.3) under
   the "external pen test" question.
2. Share with prospective enterprise customers under NDA.
3. Use as control evidence in our SOC 2 readiness binder (CC8).

We are not seeking exhaustive depth-first testing for this engagement; we
are seeking professional, defensible coverage of the most attackable
surfaces of the platform.

## 2. Scope of test

### In-scope

1. **MCP server API.** The npm-distributed `@atestia/tier4-mcp-server`
   stdio interface. Tests should cover: authentication boundary, input
   validation (JSON-RPC payloads), command injection in tool parameters,
   path traversal in file-based operations.

2. **Cryptographic capture path.** SHA-256 hash chain integrity, hash
   collision attack surface, time-of-check-to-time-of-use bugs in
   lineage record sealing.

3. **Customer KMS BYOK integration.** Tests against the customer-revoke
   path: graceful denial of new requests, no leakage of cached plaintext
   in error paths.

4. **Multi-tenant isolation** (Atestia Platform Enterprise, when deployed).
   Cross-tenant data access tests, tenant ID injection, KMS key boundary
   integrity.

5. **Supply chain.** npm package signing, dependency tree review,
   SLSA-level review of build pipeline. We want guidance on what we
   would need to reach SLSA Level 3.

6. **S3 Object Lock immutability claims.** Verification that lineage
   records written to S3 with Object Lock + KMS cannot be modified by
   an attacker who has gained AWS account access.

### Out-of-scope

- The marketing site (atestia.github.io / atestia.ai). Static content,
  no auth, no customer data.
- Customer agent platforms (Bedrock, Claude Desktop, LangChain) — these
  are upstream vendor responsibilities.
- AI-specific vulnerabilities (prompt injection of the vendor LLM)
  — Atestia captures vendor model output; we do not modify it.

## 3. Test environment

- A dedicated AWS account, staged with synthetic customer data and a
  pre-deployed tenant configuration that mirrors what an Enterprise
  customer would see.
- Atestia engineering on call during the test window for clarifications
  and credential resets.

## 4. Deliverables

1. **Executive summary** (1-2 pages) suitable for sharing with prospective
   customers under NDA. No findings details beyond severity counts.
2. **Full technical report** under NDA, including:
   - Methodology
   - All findings with CVSS scores
   - Reproduction steps
   - Remediation recommendations
   - Validation criteria
3. **Retest** of any critical-severity findings (within 30 days of remediation).

## 5. Quotation request

Please provide:
- Pricing for the scope above
- Estimated timeline (calendar weeks from kickoff to executive summary
  delivery)
- Team composition (number + seniority of testers)
- Sample executive summary from a comparable engagement
- References from 1-2 fintech / regulated-industry SaaS clients

## 6. Vendor preferences

We are seeking quotes from:
- Cobalt (Cobalt.io)
- Bishop Fox
- NCC Group
- TrustedSec
- Rapid7
- Doyensec (specialist in modern API security)

Please confirm your interest and availability by **2026-06-25**.

## 7. Confidentiality

This RFP and any quotation received are confidential. Bidders must execute
NDA before receiving test environment credentials.

## 8. Contact

**Sean Kuesia**
Founder, Atestia
security@atestia.ai
