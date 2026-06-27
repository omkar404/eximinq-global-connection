# EDPMS and eBRC SEO Implementation

## Page

- URL: `/services/edpms-ebrc`
- Component: `src/pages/CloudDeskEDPMS.jsx`
- Supporting files:
  - `src/components/CloudDeskEDPMS/QuickForm.jsx`
  - `src/components/CloudDeskEDPMS/MainNavbar.jsx`
  - `src/config/seoConfig.js`

## Objective

This implementation rebuilds the EDPMS and eBRC service page into a stronger SEO-focused exporter support page designed to improve crawling, indexing, topical authority, and conversion quality for searches such as:

- `EDPMS consultant India`
- `eBRC consultant India`
- `EDPMS closure support`
- `export proceeds reconciliation`
- `IRM mapping shipping bill`
- `open shipping bill in EDPMS`
- `short realisation export proceeds`
- `AD bank EDPMS follow up`

The page now targets real exporter intent around unresolved export proceeds, open shipping bills, eBRC readiness, bank-side closure, extension, write-off, and transaction-level reconciliation instead of functioning as an older mixed-format landing page.

## Implemented SEO Improvements

### 1. Metadata optimization

Updated the page title to:

`EDPMS and eBRC Consultant India | Export Proceeds Reconciliation, IRM Mapping and AD Bank Closure Support | EXIMINQ`

Why it helps:

- leads with strong high-intent keywords
- covers both EDPMS and eBRC entities clearly
- adds secondary relevance through `export proceeds reconciliation`, `IRM mapping`, and `AD bank closure support`

Updated the meta description to cover:

- export proceeds reconciliation
- IRM mapping
- open shipping bill closure
- short realisation
- extension
- write-off
- AD bank follow-up
- DGFT-linked export compliance support

Why it helps:

- improves search snippet relevance
- widens semantic coverage around real exporter problems
- gives Google a clearer understanding of the page scope

Added:

- `robots` directive: `index, follow, max-image-preview:large`
- stronger keyword coverage
- `og` and `twitter` metadata
- canonical tag aligned to the live route

### 2. Full SEO-first page rebuild

The older EDPMS page was replaced with a clearer master service page focused on exporter search intent and transaction-level use cases.

Why it helps:

- reduces clutter from the older landing-page structure
- improves topic depth and readability
- strengthens the page as the main target for EDPMS and eBRC queries

### 3. Structured data

Added JSON-LD schema:

- `WebPage`
- `BreadcrumbList`
- `Service`
- `FAQPage`

Why it helps:

- improves Google’s understanding of page purpose and hierarchy
- reinforces that the route is a specialised export compliance service page
- supports stronger semantic parsing during crawling and indexing

### 4. Content depth and keyword coverage

Expanded the page to naturally cover:

- EDPMS
- eBRC
- export proceeds reconciliation
- shipping bill closure
- IRM mapping
- short realisation
- write-off
- extension
- unrealised export bills
- AD bank follow-up
- caution-list risk

Why it helps:

- expands short-tail and long-tail relevance
- better satisfies informational and commercial search intent
- reduces the chance of the page being treated as thin or generic

### 5. Search-intent sections added

Added:

- `Overview`
- `Use Cases`
- `Benefits`
- `Common Problems`
- `Eligibility`
- `Documents`
- `Process`
- `Timelines`
- `Government References`
- `Related Services`
- `FAQs`
- `Conversion CTA`

Why it helps:

- creates a fuller topic footprint
- improves query coverage across the exporter journey
- increases the chance of ranking for adjacent long-tail searches

### 6. E-E-A-T improvement

The new page demonstrates stronger experience and expertise through:

- transaction-level explanation of shipping bill and IRM mapping issues
- clearer differentiation between EDPMS and eBRC
- practical extension, write-off, and short-realisation framing
- official RBI, DGFT, ICEGATE, and CBIC references

Why it helps:

- improves perceived expertise and usefulness
- supports trust on a high-stakes compliance page
- better aligns with Google’s quality expectations for service pages

### 7. Internal linking strategy

Added internal relevance paths to:

- `/services/igst-refund`
- `/services/rodtep-scheme`
- `/services/gst-lut-filing`
- `/services/import-export-code/`

Why it helps:

- strengthens topical clustering across export compliance and banking workflows
- improves crawl discovery
- helps Google understand the relationship between EDPMS and adjacent exporter services

### 8. Conversion-focused UX without weakening SEO

Implemented:

- strong keyword-led hero section
- visible quick form
- sticky section navigation
- readable sectioned content
- clear phone and contact CTAs

Why it helps:

- supports engagement and lead quality
- reduces bounce risk
- improves commercial usefulness while keeping the HTML highly crawlable

## Crawling, Indexing, and Ranking Impact

### Crawling

The page is easier for Googlebot to process because:

- the canonical route is explicit
- the page content is primarily crawlable HTML
- internal links and section links improve contextual discovery

### Indexing

Indexing potential improves because:

- the route now has stronger uniqueness
- metadata, canonical, and schema are aligned
- the page is more comprehensive and differentiated than the previous version

### Ranking

Ranking potential improves because:

- the page better satisfies true exporter intent around EDPMS and eBRC support
- keyword coverage is broader and more natural
- FAQ, process, and issue sections capture long-tail query patterns
- related-service links strengthen the surrounding topical authority

## Technical SEO Notes

- canonical URL aligned to the live route
- `og:url` aligned to the live route
- richer JSON-LD added for semantic clarity
- route already exists in `reactSnap.include`
- route already exists in `public/sitemap.xml`
- content uses clean sectioning and accessible HTML hierarchy

## Content Strategy Improvements

The page now answers the questions a real exporter asks:

- what EDPMS actually is
- how it differs from eBRC
- why a shipping bill remains open after payment
- how IRM mapping affects closure
- when short realisation, deduction, extension, or write-off becomes relevant
- how AD bank follow-up changes the actual outcome
- how unresolved proceeds affect compliance and export benefit readiness

This gives the page a stronger topical footprint than a short sales-oriented landing page.

## Recommended Next Steps

### High priority

- verify the built HTML contains the updated title, description, canonical, and FAQ schema
- request indexing in Google Search Console after deployment
- strengthen internal links pointing to this page from IGST, LUT, IEC, and export-compliance content

### Medium priority

- add exporter case examples or anonymised scenario blocks for stronger experience signals
- add breadcrumb UI if not already available through the shared layout
- monitor clicks and impressions for terms around `EDPMS closure`, `eBRC consultant`, and `IRM mapping`

### Low priority

- consider supporting media such as process diagrams or export-flow visuals with descriptive alt text
- expand supporting cluster content around export proceeds, remittance issues, and banking documentation

## Verification Summary

After implementation, the page should be validated for:

- route-level metadata in prerendered HTML
- canonical tag correctness
- presence of JSON-LD blocks
- route inclusion in the build output
- internal-link crawl paths from related services
