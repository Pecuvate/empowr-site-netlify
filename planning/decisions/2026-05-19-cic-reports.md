# ADR: CIC Annual Report Approach

**Date:** 2026-05-19
**Status:** Accepted

---

## Decision

CIC 34 Annual Reports on the `/impact` page link directly to the official filing on the CIC Regulator / Companies House website. No PDFs are hosted on the Empowr site.

## Alternatives considered

- Host PDFs in the `public/` folder
- Host PDFs on a CDN
- Embed reports inline

## Why this was chosen

- The CIC Regulator filing is the authoritative public record. Linking directly to it is more credible for funders and partners than a self-hosted copy — there is no question of whether the document has been altered.
- Eliminates ongoing maintenance: no PDFs to update, replace, or version-manage.
- Reduces site weight.
- If a report is updated or corrected at the Regulator, the site automatically benefits without any intervention.

## Trade-offs

- Relies on the CIC Regulator site remaining stable and accessible. Accepted: it is a UK government-operated site and the risk of it being unavailable is low.
- The user experience takes the visitor off-site to read the report. Accepted: funders who want to verify a CIC filing expect to do this through official channels anyway.

## Implementation note

All report URLs are stored in `src/lib/links.ts` under a `CIC_REPORTS` object keyed by year. The `/impact` page reads from this object — never hardcodes URLs directly.
