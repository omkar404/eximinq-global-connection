# EPCG Scheme SEO Implementation

## Page

- URL: `/services/epcg-scheme`
- Component: `src/pages/CloudDeskZeroDuty.jsx`
- Supporting files:
  - `src/components/CloudDeskZeroDuty/Hero.jsx`
  - `src/components/CloudDeskZeroDuty/Navbar.jsx`
  - `src/config/seoConfig.js`

## Objective

This implementation strengthens the EPCG page for Google crawling, indexing, and ranking by aligning the page with high-intent EPCG search demand such as:

- `epcg scheme consultant`
- `epcg licence consultant india`
- `dgft epcg license`
- `epcg export obligation`
- `epcg eodc`
- `epcg redemption`
- `installation certificate epcg`

The goal is to make the page a stronger match for both informational and commercial search intent while keeping it conversion-oriented.

## Implemented SEO Improvements

### 1. Metadata optimization

Updated the page title to:

`EPCG Scheme Consultant India | DGFT EPCG License, Export Obligation & EODC Support | EXIMINQ`

Why it helps:

- Places the primary keyword near the front.
- Adds strong secondary entities: `DGFT`, `EPCG License`, `Export Obligation`, `EODC`.
- Improves topical clarity for Google and improves click-through potential.

Updated the meta description to focus on:

- EPCG licence application
- customs registration
- installation certificate
- export obligation tracking
- EODC redemption

Why it helps:

- Reinforces page relevance in the snippet shown in search results.
- Better matches high-intent user queries.

Added:

- `robots` directive: `index, follow, max-image-preview:large`
- `keywords` meta for internal consistency and legacy SEO completeness
- `twitter:card` metadata

### 2. Structured data

Added and improved JSON-LD schema:

- `WebPage`
- `BreadcrumbList`
- `Service`
- `FAQPage`

Why it helps:

- Makes page purpose easier for Google to classify.
- Strengthens eligibility for rich results and FAQ understanding.
- Reinforces page hierarchy and service intent.

### 3. Keyword-focused content depth

Expanded the main page content to naturally cover:

- EPCG scheme consultant
- DGFT EPCG licence
- EPCG eligibility
- EPCG benefits
- documents required for EPCG application
- EPCG process flow
- export obligation tracking
- installation certificate
- EPCG redemption
- EODC closure

Why it helps:

- Improves semantic relevance.
- Captures broader long-tail search queries.
- Reduces thin-content risk.

### 4. New topical sections added

Added:

- `Eligibility and Benefits`
- `Documents required for EPCG application and closure`
- `Timeline and process flow`
- `Government references, risk points, and related support`

Why it helps:

- Covers the next questions users ask after the initial search.
- Improves dwell time and topical authority.
- Gives Google more complete coverage of the EPCG entity cluster.

### 5. FAQ expansion

Replaced the older static FAQ content with a structured FAQ dataset covering:

- what EPCG is
- who can apply
- what can be imported
- export obligation
- document requirements
- non-fulfilment consequences
- installation certificate importance
- EODC and redemption support

Why it helps:

- Expands long-tail keyword coverage.
- Improves search intent satisfaction.
- Supports FAQ schema output.

### 6. Internal linking improvements

Strengthened internal linking on the page to related relevant URLs:

- `/services/advance-authorisation/`
- `/services/moowr-scheme/`
- `/services/eop-extension/`
- `/services/customs-adjudication`
- `/advance-authorization-redemption`
- `/epcg-redemption`
- `/foreign-trade-policy/regulatory-updates`
- `/foreign-trade-policy`

Why it helps:

- Helps Google discover related commercial and informational pages.
- Strengthens topical clustering around DGFT, EPCG, and export compliance.
- Distributes internal PageRank more efficiently.

### 7. Footer crawlability cleanup

Replaced placeholder footer links with real internal URLs.

Why it helps:

- Removes dead internal link opportunities.
- Gives crawlers real navigational paths instead of empty anchors.

### 8. E-E-A-T reinforcement

The page now communicates stronger expertise by explicitly covering:

- customs registration workflow
- machine nexus
- installation certificate compliance
- export obligation tracking
- EODC redemption
- common EPCG failure points

Why it helps:

- Makes the page feel more like a specialist service page than generic marketing copy.
- Better aligns with Google's quality expectations for compliance-heavy trade topics.

## Crawling, Indexing, and Ranking Impact

### Crawling

Google discovers this page through:

- internal site navigation
- sitemap inclusion
- contextual internal links from related service and policy pages

The implementation improves crawling by:

- adding more valid internal links
- avoiding empty placeholder anchors
- keeping clean HTML and stable route structure

### Indexing

Google indexes what it can clearly interpret. The implementation helps indexing through:

- more descriptive metadata
- stronger heading and section structure
- clearer service intent in both content and schema
- FAQ schema and breadcrumb schema

### Ranking

The ranking improvements are aimed at:

- exact-match EPCG service queries
- long-tail compliance queries
- comparison and process queries
- redemption and closure-related keywords

The strongest ranking levers implemented are:

- better keyword placement
- more complete topical coverage
- stronger internal linking
- richer structured data
- deeper commercial-intent content

## Technical SEO Notes

- Canonical remains pointed to `https://eximinq.in/services/epcg-scheme`
- Page stays indexable
- Schema is embedded directly in the route component
- Route already exists in app navigation and sitemap generation flow

## Recommended Next Steps

### High priority

- Add supporting internal links from more DGFT-heavy pages using anchor text such as:
  - `EPCG scheme consultant`
  - `EPCG export obligation support`
  - `EPCG redemption and EODC`
- Add one or two trust modules with real client outcomes, timelines, or anonymized case examples.
- Ensure any hero or section imagery uses precise EPCG-related alt text where applicable.

### Medium priority

- Add a short comparison block for `EPCG vs Advance Authorisation vs MOOWR`.
- Add a case-study or use-case section by industry.
- Monitor Search Console queries for emerging keyword opportunities and expand the copy accordingly.

### Low priority

- Add testimonial schema if the site has compliant, authentic testimonial content.
- Add supporting blog or update pages targeting:
  - `epcg installation certificate`
  - `epcg export obligation extension`
  - `epcg eodc process`
  - `epcg customs registration`

## Files Modified

- `src/pages/CloudDeskZeroDuty.jsx`
- `src/components/CloudDeskZeroDuty/Hero.jsx`
- `src/components/CloudDeskZeroDuty/Navbar.jsx`
- `src/config/seoConfig.js`
- `docs/seo/epcg-scheme-seo-implementation.md`
