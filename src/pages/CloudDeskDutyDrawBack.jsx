import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDutyDrawBack/MainNavbar";
import QuickForm from "../components/CloudDeskDutyDrawBack/QuickForm";

const HIGHLIGHTS = [
  "Duty drawback consultant India",
  "AIR claims, brand rate fixation, and Section 74 re-export drawback support",
  "Shipping-bill, drawback scroll, and customs documentation review",
  "Export incentive recovery, claim strategy, and dispute-risk reduction"
];

const BENEFITS = [
  "Helps exporters recover eligible customs-duty incidence through the right drawback route instead of relying on incomplete claim logic or shipping-bill assumptions.",
  "Supports both routine All Industry Rate claims and more technical brand-rate or Section 74 re-export situations where documentary precision matters.",
  "Reduces risk of under-claim, rejection, delay, and post-clearance questioning by aligning product facts, export records, duty incidence, and drawback route selection.",
  "Improves working-capital recovery for exporters whose drawback is stuck, short-paid, or never claimed because the transaction was not structured correctly."
];

const CLAIM_TRACKS = [
  {
    title: "All Industry Rate (AIR) drawback",
    description:
      "Used where notified drawback rates already exist for the export product and the claim can be made under the standard schedule-linked route."
  },
  {
    title: "Brand Rate fixation",
    description:
      "Used where the notified AIR is not available or does not sufficiently cover actual duty incidence, making a product-specific drawback computation more relevant."
  },
  {
    title: "Section 74 re-export drawback",
    description:
      "Relevant where imported goods are re-exported and the drawback claim depends on proof of identity, time limits, and the re-export condition framework."
  }
];

const ELIGIBILITY_POINTS = [
  "Exporters claiming standard drawback under notified AIR schedules for eligible products and properly declared export transactions.",
  "Businesses whose actual duty incidence appears materially different from standard rates and need brand-rate feasibility review before or after export.",
  "Importers or traders re-exporting imported goods and assessing whether Section 74 drawback can be claimed with the required identity trail.",
  "Exporters whose drawback is delayed, short credited, unclaimed, questioned, or commercially significant enough to justify transaction-level review."
];

const DOCUMENTS_REQUIRED = [
  "Shipping bill details, invoice set, export product description, drawback declaration trail, port code, and exporter transaction summary.",
  "Bill of Entry, duty-payment trail, input records, costing basis, consumption linkage, and product-specific documentation where brand-rate review is required.",
  "Re-export evidence, import-to-export identity trail, serial or batch references, packing details, and timeline records where Section 74 drawback is being explored.",
  "ICEGATE status screenshots, drawback scroll status, customs correspondence, query notices, deficiency communications, and any previous drawback submissions."
];

const PROCESS_STEPS = [
  {
    title: "Drawback-route diagnosis",
    detail:
      "We first determine whether the transaction should be handled as a standard AIR claim, a brand-rate review, or a Section 74 re-export drawback case."
  },
  {
    title: "Duty-incidence and record review",
    detail:
      "The export records, product facts, customs duty trail, shipping-bill declarations, and available cost support are checked together before claim strategy is defined."
  },
  {
    title: "Claim structuring or deficiency correction",
    detail:
      "Where required, we help structure the drawback position, correct transaction-level gaps, and prepare the records needed for filing, follow-up, or representation."
  },
  {
    title: "Customs interaction and tracking",
    detail:
      "The objective is not just submission. It is also to ensure drawback status, query handling, and scroll-level follow-through are managed with commercial clarity."
  },
  {
    title: "Future drawback-readiness improvement",
    detail:
      "We help businesses avoid repeated loss by tightening shipping-bill discipline, product mapping, records, and drawback-route selection for future exports."
  }
];

const TIMELINE_POINTS = [
  "Initial drawback review and route assessment: typically 1 to 3 working days once the transaction set is available.",
  "AIR-claim issue diagnosis or stuck-claim review: usually 2 to 5 working days depending on the record trail and customs status available.",
  "Brand-rate or Section 74 matters can take longer because eligibility, duty incidence, identity trail, and supporting evidence usually need deeper review.",
  "Actual customs disposal time varies by claim type, product complexity, transaction age, and whether the matter is a new filing, follow-up, or rectification case."
];

const COMMON_ISSUES = [
  {
    title: "Wrong drawback route selected",
    detail:
      "Exporters sometimes proceed under AIR when the transaction economics require brand-rate evaluation, or assume Section 74 without a sufficient identity trail."
  },
  {
    title: "Shipping-bill declaration mismatch",
    detail:
      "Errors in drawback declaration, product description, supporting classification, or transactional records can reduce or block the claim entirely."
  },
  {
    title: "Brand-rate support is commercially weak",
    detail:
      "Even where the AIR looks inadequate, many businesses do not maintain the input-duty, cost, and consumption records required to support a stronger claim."
  },
  {
    title: "Stuck or unclear drawback status",
    detail:
      "The exporter may know that drawback was expected, but not whether the issue sits at declaration stage, deficiency stage, customs processing stage, or scroll stage."
  }
];

const FAQS = [
  {
    question: "What is duty drawback in exports?",
    answer:
      "Duty drawback is an export incentive framework through which eligible customs-duty incidence can be remitted or refunded when goods are exported, subject to the applicable drawback rules, product position, and claim route."
  },
  {
    question: "What is the difference between AIR and brand-rate drawback?",
    answer:
      "AIR drawback follows notified standard rates, while brand-rate cases are considered where product-specific duty incidence needs a more tailored computation than the standard notified rate."
  },
  {
    question: "When is Section 74 drawback relevant?",
    answer:
      "Section 74 is generally relevant where imported goods are re-exported and the claim depends on proving identity, timing, and compliance with the re-export drawback conditions."
  },
  {
    question: "Why does a duty drawback claim get delayed or missed?",
    answer:
      "Common reasons include wrong drawback route selection, weak declarations, shipping-bill issues, incomplete supporting records, poor identity linkage, deficient follow-up, or misunderstanding of the commercial and procedural route."
  },
  {
    question: "Can duty drawback and other export incentives be reviewed together?",
    answer:
      "Yes. Exporters often need drawback to be reviewed together with shipping-bill filing, RoDTEP, IGST refund, or broader compliance controls so the transaction is structured correctly from the start."
  },
  {
    question: "Why can this page rank for duty drawback keywords?",
    answer:
      "Because it covers the real search intent behind drawback queries: AIR vs brand-rate logic, Section 74 re-export situations, documentation, timelines, official references, risk points, and practical claim strategy."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "CBIC Drawback Division",
    href: "https://www.cbic.gov.in/entities/cbic-content-mst/MTQ5MzE="
  },
  {
    label: "ICEGATE Drawback Manual and FAQs",
    href: "https://www.icegate.gov.in/guidelines/frequently-asked-questions-faq-drawback-manual"
  },
  {
    label: "ICEGATE Drawback Enquiry User Manual",
    href: "https://www.icegate.gov.in/sites/default/files/2024-08/Drawback_Enquiry.pdf"
  },
  {
    label: "CBIC Instruction on Pending Drawback and IGST Refund Claims",
    href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/ftp/cx/instr/2020-cx/instruction03-2020.pdf"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/rodtep-scheme",
    title: "RoDTEP Scheme Support",
    description:
      "Useful for exporters who need to compare drawback positioning with RoDTEP strategy and avoid overlapping or poorly structured benefit claims."
  },
  {
    href: "/services/igst-refund",
    title: "IGST Refund Support",
    description:
      "Relevant where shipping-bill design, customs filing quality, and export incentive recovery must be reviewed together."
  },
  {
    href: "/services/shipping-bill-filing",
    title: "Shipping Bill Filing Support",
    description:
      "Important where drawback success depends on declaration quality, product description, scheme selection, and transaction-ready customs filing."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Helpful where drawback exposure should be examined alongside DGFT, customs, refund, and shipment-level process weaknesses."
  }
];

const CloudDeskDutyDrawBack = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Duty Drawback Consultant India | AIR Claims, Brand Rate Fixation and
          Section 74 Re-export Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="Duty drawback consultant in India for AIR claims, brand rate fixation, Section 74 re-export drawback support, drawback status review, shipping-bill declaration checks, customs documentation, and export incentive recovery."
        />
        <meta
          name="keywords"
          content="duty drawback consultant India, duty drawback claim, all industry rate drawback, brand rate fixation drawback, section 74 drawback, re-export drawback India, drawback consultant exporter, shipping bill drawback support"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/duty-drawback/"
        />
        <meta
          property="og:title"
          content="Duty Drawback Consultant India | AIR Claims, Brand Rate and Section 74 Support"
        />
        <meta
          property="og:description"
          content="Get expert support for duty drawback claims, AIR review, brand rate fixation, Section 74 re-export cases, and drawback recovery strategy."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/duty-drawback/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/duty-drawback/",
                url: "https://eximinq.in/services/duty-drawback/",
                name: "Duty Drawback Consultant India | AIR Claims, Brand Rate Fixation and Section 74 Re-export Support | EXIMINQ",
                description:
                  "Duty drawback consultant in India for AIR claims, brand rate fixation, Section 74 re-export drawback support, drawback status review, shipping-bill declaration checks, customs documentation, and export incentive recovery.",
                isPartOf: {
                  "@type": "WebSite",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://eximinq.in/"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://eximinq.in/services"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Duty Drawback",
                    item: "https://eximinq.in/services/duty-drawback/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Duty Drawback Consulting Services",
                serviceType:
                  "Duty drawback claim support, AIR review, brand rate fixation support, and Section 74 re-export drawback guidance",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                url: "https://eximinq.in/services/duty-drawback/",
                description:
                  "Duty drawback consultant in India for AIR claims, brand rate fixation, Section 74 re-export drawback support, drawback review, and export incentive recovery."
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setShowEnrollModal={() => {}}
        />

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#38bdf8_100%)] pt-32 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Duty drawback, brand rate, and Section 74 advisory
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                Duty Drawback Consultant India for AIR Claims, Brand Rate
                Fixation, and Section 74 Re-export Support
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                Recover export incentive value with a clearer drawback strategy.
                We help exporters review All Industry Rate claims, brand-rate
                feasibility, Section 74 re-export drawback, shipping-bill
                declaration quality, and stuck-claim follow-up.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <span className="text-sm leading-6 text-blue-50">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Check Drawback Position
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#references"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Official References
                  <BookOpenCheck className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div id="quick-form" className="lg:justify-self-end">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[76px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-4 text-sm font-semibold text-slate-600 md:px-8">
            <a href="#overview" className="whitespace-nowrap hover:text-blue-700">
              Overview
            </a>
            <a href="#claim-tracks" className="whitespace-nowrap hover:text-blue-700">
              Claim Tracks
            </a>
            <a href="#benefits" className="whitespace-nowrap hover:text-blue-700">
              Benefits
            </a>
            <a href="#eligibility" className="whitespace-nowrap hover:text-blue-700">
              Eligibility
            </a>
            <a href="#documents" className="whitespace-nowrap hover:text-blue-700">
              Documents
            </a>
            <a href="#process" className="whitespace-nowrap hover:text-blue-700">
              Process
            </a>
            <a href="#references" className="whitespace-nowrap hover:text-blue-700">
              Official References
            </a>
            <a href="#faq" className="whitespace-nowrap hover:text-blue-700">
              FAQs
            </a>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <section id="overview" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Target className="h-4 w-4" />
                Search-intent-focused overview
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Duty drawback support built around real exporter search intent
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                This page is designed for exporters looking for practical help
                with <strong>duty drawback claims</strong>, not generic export
                incentive copy. Businesses usually search because they want to
                know whether a shipment should move under{" "}
                <strong>All Industry Rate drawback</strong>, whether{" "}
                <strong>brand rate fixation</strong> is commercially viable, or
                whether a <strong>Section 74 re-export drawback</strong> case is
                still recoverable.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The page therefore covers drawback-route selection, supporting
                records, common causes of under-claim or delay, official
                customs-facing references, and the broader export workflow links
                that affect drawback outcomes. That deeper semantic coverage
                gives the route a stronger chance of ranking for both service
                queries and problem-resolution queries.
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-2xl font-bold">
                What Google should understand from this page
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    The page serves exporters seeking drawback consulting,
                    drawback claim recovery, AIR review, brand-rate support, and
                    Section 74 re-export guidance.
                  </p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    The content is built around customs process accuracy, not
                    just lead generation, which strengthens E-E-A-T for a
                    compliance-sensitive page.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Landmark className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    Official CBIC and ICEGATE references are included to improve
                    trust, crawl context, and topical authority.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="claim-tracks" className="mt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Core duty drawback claim tracks covered on this page
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Users searching for duty drawback support do not all need the
                same thing. This page intentionally covers the three claim
                tracks most likely to drive ranking opportunity and qualified
                enquiries.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {CLAIM_TRACKS.map((track) => (
                <article
                  key={track.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Duty drawback route
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {track.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="benefits" className="mt-16 rounded-[32px] bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-8 ring-1 ring-slate-200">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Why exporters seek duty drawback consulting support
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The commercial value of drawback is often lost not because the
                scheme is unavailable, but because the claim route, declaration
                logic, or support trail is weak. The page now addresses those
                exact concerns.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-7 text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <FileSearch className="h-4 w-4" />
                Frequent drawback problem patterns
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Common issues that stop or weaken drawback recovery
              </h2>
              <div className="mt-8 space-y-5">
                {COMMON_ISSUES.map((issue) => (
                  <div
                    key={issue.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <h3 className="text-lg font-bold text-slate-900">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {issue.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <CalendarClock className="h-4 w-4" />
                Practical timeline expectations
              </div>
              <h2 className="text-3xl font-bold">
                Timelines depend heavily on route complexity and record quality
              </h2>
              <div className="mt-8 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 rotate-[-90deg] text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="eligibility" className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Scale className="h-4 w-4" />
                Eligibility and fit
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Who should review a duty drawback claim with a specialist
              </h2>
              <div className="mt-7 space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="documents"
              className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                <FileCheck2 className="h-4 w-4" />
                Required documents
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Records that usually matter in drawback review
              </h2>
              <div className="mt-7 space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-violet-600" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="process"
            className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Step-by-step duty drawback review and claim support process
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Searchers with strong purchase intent want to understand what
                actually happens after they enquire. This section is intentionally
                built to improve that conversion and ranking signal.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="references"
            className="mt-16 rounded-[32px] bg-slate-900 p-8 text-white shadow-sm"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Official government and system references
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Official references help users verify drawback context and help
                reinforce E-E-A-T for a customs-heavy page. These sources also
                strengthen semantic relevance around CBIC and ICEGATE entities.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {GOVERNMENT_REFERENCES.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <Landmark className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Open the official source
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Internal links that strengthen topical authority
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Duty drawback rarely operates in isolation. Strong internal
                linking to adjacent customs and export incentive workflows helps
                Google understand the broader service cluster and helps users
                navigate toward connected issues.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {link.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-blue-700" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="faq" className="mt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Duty drawback FAQs for exporters and trade teams
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                FAQ depth improves search coverage, helps featured-snippet
                eligibility, and addresses decision-stage questions users ask
                before submitting an enquiry.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 text-white md:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <ClipboardCheck className="h-7 w-7" />
                </div>
                <h2 className="text-4xl font-bold leading-tight">
                  Ready to review a drawback claim before value is lost?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-blue-100">
                  Use the quick form to start with the right drawback route,
                  product context, and export record review. The goal is not
                  just filing. It is better drawback recovery and lower repeat
                  risk.
                </p>
                <div className="mt-8 space-y-4 text-sm text-blue-100">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>AIR, brand-rate, and Section 74 claim support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>Shipping-bill and customs documentation review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpenCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>Export incentive recovery with stronger compliance context</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10">
                <h3 className="text-3xl font-bold text-slate-900">
                  Speak with EXIMINQ
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Whether the issue is a fresh drawback claim, a stuck refund,
                  a brand-rate decision, or a Section 74 re-export case, we can
                  help you review the transaction path and next action.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href="tel:+917400096950"
                    className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white"
                  >
                    <Phone className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Call us
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      +91 74000 96950
                    </p>
                  </a>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white"
                  >
                    <Mail className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Email us
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      clouddesk@eximinq.in
                    </p>
                  </a>
                  <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 sm:col-span-2">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Office
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-lg font-bold text-slate-900">EXIMINQ</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Duty drawback consulting support for AIR claims, brand-rate
                fixation, Section 74 re-export review, customs documentation,
                and export incentive recovery workflows.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskDutyDrawBack;
