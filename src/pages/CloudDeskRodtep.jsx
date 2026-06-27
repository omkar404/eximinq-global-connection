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
  ClipboardCheck,
  Coins,
  FileCheck2,
  FileSearch,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskRodtep/MainNavbar";
import QuickForm from "../components/CloudDeskRodtep/QuickForm";

const HIGHLIGHTS = [
  "RoDTEP consultant India",
  "Shipping-bill declaration, rate verification, and ICEGATE ledger support",
  "RoDTEP recovery, missed-scroll diagnosis, and scrip monetisation guidance",
  "AA, EPCG, EOU, drawback, and RoSCTL interaction review"
];

const BENEFITS = [
  "Helps exporters structure RoDTEP correctly at the shipping-bill stage so the benefit is not lost because of declaration, product-mapping, or workflow mistakes.",
  "Supports rate and cap validation before export so businesses do not rely on broad assumptions where product-specific remission logic materially affects margins.",
  "Reduces risk around missed credits, invalid expectations, and post-export confusion by aligning RoDTEP with ICEGATE ledger readiness, EGM completion, and incentive strategy.",
  "Improves commercial outcomes by reviewing whether the exporter should focus on RoDTEP alone, compare it with drawback or RoSCTL, or plan around AA, EPCG, or EOU conditions."
];

const USE_CASES = [
  {
    title: "RoDTEP claim planning before export",
    description:
      "For exporters who want to validate whether the product is appropriately positioned for RoDTEP, what rate and cap logic may apply, and what declaration discipline is required before shipping-bill filing."
  },
  {
    title: "Missed or delayed RoDTEP credits",
    description:
      "Useful where the shipment has moved but the exporter cannot see expected credit, the ledger is unclear, or the scroll and credit-generation process seems stuck."
  },
  {
    title: "RoDTEP and related-scheme comparison",
    description:
      "Relevant where the exporter is also dealing with Duty Drawback, RoSCTL, Advance Authorisation, EPCG, EOU, or other conditions that change the real commercial value of the RoDTEP path."
  },
  {
    title: "Scrip utilisation or monetisation strategy",
    description:
      "For exporters who have generated or expect to generate RoDTEP scrip value and need help using it properly, transferring it, or connecting it to wider customs-duty planning."
  }
];

const ELIGIBILITY_POINTS = [
  "Exporters shipping eligible products and evaluating whether embedded taxes not otherwise refunded can be remitted through the RoDTEP framework.",
  "Businesses that need transaction-level support for shipping-bill intent declaration, rate review, EGM completion dependency, and ICEGATE ledger readiness.",
  "Exporters comparing RoDTEP with related incentive routes such as drawback or RoSCTL, or assessing the practical effect of AA, EPCG, EOU, or other operating models.",
  "Businesses facing missed credits, rate confusion, ledger uncertainty, scrip questions, or recovery situations where the claim flow did not work the way operations expected."
];

const DOCUMENTS_REQUIRED = [
  "Shipping-bill details, invoice set, FOB value, product description, HSN position, port details, and the export transaction trail relevant to the RoDTEP claim flow.",
  "ICEGATE user and ledger status proof, EGM-linked records, available credit or scroll references, and any screenshots showing missed-credit, mismatch, or non-generation issues.",
  "Supporting export-commercial records used to review rate or cap expectations, including product-level facts, sector context, and scheme-choice assumptions where relevant.",
  "Any customs or operational correspondence, CHA working sheets, query records, or related scheme records if the matter overlaps with drawback, RoSCTL, AA, EPCG, or compliance review."
];

const PROCESS_STEPS = [
  {
    title: "Shipment and incentive diagnosis",
    detail:
      "We first review whether the case is about pre-export claim planning, a missed or delayed credit, a rate or cap misunderstanding, or a broader incentive-structure problem."
  },
  {
    title: "Declaration and data review",
    detail:
      "The shipping-bill position, product classification assumptions, transaction facts, and scheme-declaration discipline are checked together instead of in isolation."
  },
  {
    title: "Rate, cap, and eligibility interpretation",
    detail:
      "Where required, the exporter’s expected RoDTEP value is reviewed against the practical notified logic, product facts, and any surrounding scheme interaction."
  },
  {
    title: "ICEGATE and credit workflow support",
    detail:
      "We assess the downstream flow involving EGM completion, scroll progression, ledger visibility, and whether the benefit is commercially usable or requires recovery follow-through."
  },
  {
    title: "Recovery or future-transaction tightening",
    detail:
      "The objective is either to recover value where possible or to make the exporter’s next shipment set more accurate, bankable, and less vulnerable to incentive leakage."
  }
];

const TIMELINE_POINTS = [
  "Initial RoDTEP transaction review and issue diagnosis can usually begin within 1 to 3 working days once the export record set is available.",
  "Pre-export declaration and scheme-planning reviews are often faster than recovery or missed-credit matters because they do not depend on already-fractured transaction history.",
  "Recovery or delayed-credit situations may take longer because the issue can sit at classification, declaration, EGM, scroll, ledger, or inter-scheme decision level.",
  "Actual customs and system-side progression depends on export status, data quality, and whether the matter is preventive planning, post-export review, or a commercial recovery case."
];

const COMMON_ISSUES = [
  {
    title: "RoDTEP intent was not structured properly",
    detail:
      "Many exporters only discover the importance of transaction-level declaration discipline after export, when the benefit does not flow the way they expected."
  },
  {
    title: "Rate and cap assumptions were too broad",
    detail:
      "A headline rate is not enough. Product facts, notified logic, and cap realities can materially change the real value expected from the shipment."
  },
  {
    title: "ICEGATE or ledger visibility is unclear",
    detail:
      "The issue may not be the concept of eligibility at all. It may sit in downstream movement such as EGM completion, scroll processing, ledger readiness, or operational interpretation."
  },
  {
    title: "RoDTEP was evaluated without scheme interaction",
    detail:
      "The exporter may need RoDTEP to be reviewed together with drawback, RoSCTL, AA, EPCG, or EOU conditions to understand the best real commercial route."
  }
];

const FAQS = [
  {
    question: "What is the RoDTEP scheme?",
    answer:
      "RoDTEP is a remission framework intended to refund certain embedded duties and taxes on exported products that are not otherwise rebated through other mechanisms, subject to notified product logic and export compliance conditions."
  },
  {
    question: "How is RoDTEP claimed?",
    answer:
      "In practice, RoDTEP depends on correct shipping-bill declaration and downstream export-processing flow. The benefit is tied to transaction accuracy rather than a casual post-export assumption."
  },
  {
    question: "Is RoDTEP the same as Duty Drawback?",
    answer:
      "No. RoDTEP and Duty Drawback are different incentive frameworks with different logic, and many exporters need a transaction-level review before assuming which route gives the better or valid result."
  },
  {
    question: "Can RoDTEP be relevant along with AA, EPCG, or EOU operations?",
    answer:
      "Yes, but the practical commercial value and applicable route can change when other export-promotion conditions are involved, so the interaction should be reviewed carefully."
  },
  {
    question: "Why is my RoDTEP credit not visible?",
    answer:
      "The reason may sit at declaration, data quality, EGM completion, scroll movement, ledger visibility, or scheme-positioning level rather than in a single obvious error."
  },
  {
    question: "Can this page rank for RoDTEP keywords strongly?",
    answer:
      "Yes, because it targets actual exporter search intent around RoDTEP eligibility, rates, declaration workflow, ledger issues, scheme comparison, recovery problems, and transaction-level claim support."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "ICEGATE Portal",
    href: "https://www.icegate.gov.in/"
  },
  {
    label: "CBIC Customs Portal",
    href: "https://www.cbic.gov.in/"
  },
  {
    label: "ICEGATE Guidelines and Help Resources",
    href: "https://www.icegate.gov.in/guidelines"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/duty-drawback/",
    title: "Duty Drawback Support",
    description:
      "Useful where RoDTEP has to be compared with drawback strategy, route selection, and transaction structuring before or after export."
  },
  {
    href: "/services/shipping-bill-filing",
    title: "Shipping Bill Filing Support",
    description:
      "Relevant where RoDTEP success depends on declaration quality, scheme coding, shipment data discipline, and export-filing accuracy."
  },
  {
    href: "/services/igst-refund",
    title: "IGST Refund Support",
    description:
      "Helpful where the exporter needs broader export-incentive review across RoDTEP, GST-linked refund exposure, and customs-filing quality."
  },
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Important where exporters need RoDTEP to be evaluated alongside AA-based duty-saving strategy and export obligation planning."
  }
];

const SECTION_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#documents", label: "Documents" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" }
];

const CloudDeskRodtep = () => {
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
          RoDTEP Consultant India | Claim Strategy, Rate Verification, ICEGATE
          Ledger and Recovery Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="RoDTEP consultant in India for shipping-bill declaration review, rate and cap verification, ICEGATE ledger support, missed-credit diagnosis, RoDTEP recovery, and export incentive strategy."
        />
        <meta
          name="keywords"
          content="RoDTEP consultant India, RoDTEP scheme, RoDTEP claim support, RoDTEP rate verification, ICEGATE RoDTEP ledger, RoDTEP recovery, RoDTEP consultant exporter, RoDTEP vs drawback"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/rodtep-scheme"
        />
        <meta
          property="og:title"
          content="RoDTEP Consultant India | Claim Strategy, Rate Verification and ICEGATE Support"
        />
        <meta
          property="og:description"
          content="Get expert support for RoDTEP claims, declaration review, rate verification, ICEGATE ledger issues, missed credits, and recovery strategy."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/rodtep-scheme"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/rodtep-scheme#webpage",
                url: "https://eximinq.in/services/rodtep-scheme",
                name: "RoDTEP Consultant India | EXIMINQ",
                description:
                  "RoDTEP consultant in India for claim strategy, declaration review, rate verification, ICEGATE ledger support, and RoDTEP recovery matters.",
                inLanguage: "en-IN"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://eximinq.in/services/rodtep-scheme#breadcrumb",
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
                    name: "RoDTEP Scheme",
                    item: "https://eximinq.in/services/rodtep-scheme"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/rodtep-scheme#service",
                name: "RoDTEP Scheme Support",
                serviceType: "RoDTEP consultant",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                description:
                  "Support for RoDTEP declaration planning, rate verification, ICEGATE ledger review, missed-credit diagnosis, and related export incentive strategy.",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "INR"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://eximinq.in/services/rodtep-scheme#faq",
                mainEntity: FAQS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1d4b] via-[#1d4ed8] to-[#0f766e] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.12),_transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Export incentive planning, claim support, and recovery review
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
                RoDTEP Consultant in India for Claim Strategy, Rate
                Verification, ICEGATE Ledger Support, and Recovery Cases
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100/90">
                Strengthen your RoDTEP claim flow before export, review missed
                credits after export, and align RoDTEP with drawback, RoSCTL,
                AA, EPCG, and broader incentive strategy.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <p className="text-sm leading-6 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50"
                >
                  Start RoDTEP Review
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#faqs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            <div
              id="quick-form"
              className="rounded-[32px] border border-white/15 bg-white/95 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur"
            >
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[84px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-4 md:px-6 lg:px-8">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <section
            id="overview"
            className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <Target className="h-4 w-4" />
                Service Overview
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Why RoDTEP needs transaction-level strategy, not guesswork
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  RoDTEP is not just a general exporter benefit label. In
                  practical operations, it depends on product position,
                  declaration discipline, shipment facts, and the downstream
                  credit flow that exporters and customs-facing teams actually
                  need to manage correctly.
                </p>
                <p>
                  Many businesses lose value not because RoDTEP is unavailable,
                  but because it was evaluated too casually, declared poorly, or
                  not reviewed alongside related schemes such as drawback,
                  RoSCTL, Advance Authorisation, EPCG, or EOU conditions.
                </p>
                <p>
                  This page is built as a stronger master RoDTEP service page
                  for exporters who need claim planning, recovery review, ledger
                  visibility support, and a clearer commercial strategy around
                  export incentives.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] bg-gradient-to-br from-emerald-50 to-cyan-50 p-7 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-3 text-emerald-700">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Key Benefits
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {BENEFITS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] bg-slate-900 p-7 text-white shadow-sm">
                <div className="flex items-center gap-3 text-cyan-200">
                  <Coins className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Incentive Context
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  RoDTEP works best when viewed as part of an export incentive
                  system, not as a standalone label disconnected from filing
                  quality, customs workflow, or product-level economics.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <Building2 className="h-4 w-4" />
              Use Cases
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {USE_CASES.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <ShieldCheck className="h-4 w-4" />
                Common Issues
              </div>
              <div className="mt-6 space-y-5">
                {COMMON_ISSUES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="eligibility"
              className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <ClipboardCheck className="h-4 w-4" />
                Eligibility
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Who usually needs RoDTEP support
              </h2>
              <ul className="mt-6 space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="documents"
            className="mt-14 rounded-[30px] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-sm"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              <FileCheck2 className="h-4 w-4" />
              Required Documents
            </div>
            <h2 className="mt-4 text-3xl font-bold">
              Records typically reviewed for RoDTEP support
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {DOCUMENTS_REQUIRED.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-slate-100/90">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="process"
            className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <BookOpenCheck className="h-4 w-4" />
              Step-by-Step Process
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Practical RoDTEP review and support workflow
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-5">
              {PROCESS_STEPS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-sm font-bold text-blue-700">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <CalendarClock className="h-4 w-4" />
                Timelines
              </div>
              <ul className="mt-6 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <Landmark className="h-4 w-4" />
                Official References
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The page is strengthened with primary ecosystem references so
                users and search engines can connect RoDTEP support with the
                actual DGFT, customs, and ICEGATE environment.
              </p>
              <div className="mt-6 space-y-4">
                {GOVERNMENT_REFERENCES.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <FileSearch className="h-4 w-4" />
              Related Services
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section
            id="faqs"
            className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <BadgeCheck className="h-4 w-4" />
              FAQs
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Common questions about RoDTEP
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {FAQS.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[32px] bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-600 p-8 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Conversion CTA
                </div>
                <h2 className="mt-4 text-3xl font-bold">
                  Need RoDTEP claim planning, missed-credit diagnosis, or
                  incentive strategy support?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50">
                  We review the shipment, declaration, rate assumptions, ledger
                  status, and related-scheme interaction so your RoDTEP
                  decisions are commercially stronger and technically cleaner.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-white">
                  <a
                    href="tel:+917400096950"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4" />
                    +91 74000 96950
                  </a>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" />
                    clouddesk@eximinq.in
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3">
                    <MapPin className="h-4 w-4" />
                    Mumbai, India
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50"
                >
                  Start With Quick Form
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Speak With Our Team
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CloudDeskRodtep;
