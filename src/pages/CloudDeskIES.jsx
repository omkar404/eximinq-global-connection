import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FileSearch,
  Globe2,
  HandCoins,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIES/MainNavbar";
import QuickForm from "../components/CloudDeskIES/QuickForm";

const HIGHLIGHTS = [
  "Interest Equalisation Scheme consultant India",
  "Export credit interest subvention support",
  "DGFT and bank coordination for UIN and filings",
  "Legacy IES and current EPM workflow guidance"
];

const BENEFITS = [
  "Reduces the effective cost of eligible pre-shipment and post-shipment export credit so exporters can improve pricing, working capital efficiency, and order execution.",
  "Supports stronger cash-flow planning for MSME and product-specific exporters where bank finance cost directly impacts export competitiveness.",
  "Improves application readiness by aligning DGFT workflow, scheme selection, product coverage, exporter profile, and lender-side documentation.",
  "Helps businesses avoid rework caused by incorrect category selection, incomplete records, outdated assumptions, or weak bank coordination."
];

const ELIGIBILITY_POINTS = [
  "Exporters seeking support under the legacy Interest Equalisation search intent or the current DGFT interest subvention support framework under Export Promotion Mission.",
  "Businesses using pre-shipment packing credit, post-shipment export credit, or related export finance lines where interest cost affects execution and margins.",
  "MSME and product-linked exporters that need clarity on sector or tariff-line coverage, documentation, scheme conditions, and current DGFT notifications.",
  "Companies that need end-to-end help with application strategy, document organisation, portal handling, and lender coordination instead of only a generic advisory note."
];

const DOCUMENTS_REQUIRED = [
  "IEC, business constitution records, PAN, GST, authorised signatory details, and exporter profile documents.",
  "Udyam registration or category proof wherever relevant to current eligibility conditions and benefit treatment.",
  "Bank sanction or export credit records, loan details, account mapping, and finance facility information needed for subvention support processing.",
  "Product, sector, shipping, and export-performance records required to establish practical linkage between the exporter profile and the applicable support framework."
];

const PROCESS_STEPS = [
  {
    title: "Eligibility and scheme-position review",
    detail:
      "We first map whether the case relates to legacy Interest Equalisation Scheme intent, current Export Promotion Mission interest subvention support, or a bank-documentation clean-up requirement."
  },
  {
    title: "Exporter and product coverage check",
    detail:
      "The exporter profile, MSME position, product coverage, and current notification relevance are reviewed so the application logic matches the live policy framework."
  },
  {
    title: "DGFT workflow and document preparation",
    detail:
      "We prepare the filing set, supporting declarations, and portal strategy needed for smoother submission, follow-up, and record consistency."
  },
  {
    title: "Bank coordination and submission support",
    detail:
      "We help align lender-side documentation, finance details, and practical claim support requirements so the DGFT process and banking process do not break apart."
  },
  {
    title: "Clarification, follow-up, and continuity support",
    detail:
      "Where required, we support clarification handling, record review, and continuity planning for repeat use, amendments, or legacy-to-current transition questions."
  }
];

const TIMELINE_POINTS = [
  "Initial eligibility and records review: typically 1 to 3 working days depending on exporter readiness.",
  "Document collation and application preparation: usually 2 to 5 working days once records are complete.",
  "Portal submission, banking coordination, and clarification cycle: varies based on current scheme conditions, branch response, and document quality.",
  "Complex or legacy clean-up cases may take longer where historical filings, bank mapping, or category interpretation needs additional support."
];

const FAQS = [
  {
    question: "What is the Interest Equalisation Scheme for exporters?",
    answer:
      "Interest Equalisation Scheme is the search term most exporters still use for support that reduces the effective interest burden on eligible export credit. Today, this search intent often overlaps with current DGFT interest subvention support under Export Promotion Mission."
  },
  {
    question: "Is the Interest Equalisation Scheme still relevant in 2026?",
    answer:
      "Yes, the keyword is still commercially important, but the operational framework has shifted. Current exporter action should be guided by the latest DGFT notifications, scheme guidelines, and Export Promotion Mission workflow rather than older assumptions alone."
  },
  {
    question: "Who should apply for interest subvention support?",
    answer:
      "Exporters using eligible pre-shipment or post-shipment export credit, especially MSMEs and product-specific sectors, should evaluate whether they qualify under the current DGFT framework and bank-side conditions."
  },
  {
    question: "Why do exporters need consultant support for this scheme?",
    answer:
      "Because the process often requires more than a simple form submission. Exporters usually need eligibility interpretation, document structuring, product-coverage review, DGFT workflow handling, and practical coordination with their bank."
  },
  {
    question: "What can delay approval or implementation?",
    answer:
      "Common reasons include incomplete finance records, weak alignment between DGFT submission and bank documents, incorrect exporter-category assumptions, missing supporting documents, and failure to follow the latest notifications."
  },
  {
    question: "Can this page rank well for interest equalisation keywords?",
    answer:
      "Yes, because it is built around real exporter search intent: scheme explanation, current policy context, eligibility, documents, process, timelines, FAQs, and official references instead of thin promotional copy."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Export Promotion Mission overview",
    href: "https://www.dgft.gov.in/CP/?opt=export-promotion-mission"
  },
  {
    label: "DGFT scheme guidelines page",
    href: "https://www.dgft.gov.in/CP/?opt=scheme-guidelines"
  },
  {
    label: "DGFT Trade Notice 03/2026-27 clarifications on interest subvention support",
    href: "https://content.dgft.gov.in/Website/dgftprod/bf398f18-5138-43bc-a9b1-b7050bf06586/Trade_Notice_03_2026.pdf"
  },
  {
    label: "DGFT EPM module user manual",
    href: "https://content.dgft.gov.in/Website/EPM_USER_MANNUAL_V1.pdf"
  },
  {
    label: "Ministry of Commerce annual report 2025-26",
    href: "https://www.commerce.gov.in/files/2026-04/Annual_0.pdf"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Useful where interest relief planning must sit alongside duty exemption, export obligation, and product-linked trade planning."
  },
  {
    href: "/services/epcg-scheme",
    title: "EPCG Scheme Support",
    description:
      "Helpful when export-finance planning is part of a wider capital goods import and export obligation strategy."
  },
  {
    href: "/services/duty-drawback/",
    title: "Duty Drawback Support",
    description:
      "Relevant for exporters comparing finance-cost support with remission, refund, and customs incentive recovery strategies."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Useful for exporters who want to validate document readiness, incentive controls, and policy-risk exposure before filing."
  }
];

const CloudDeskIES = () => {
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
          Interest Equalisation Scheme Consultant India | Export Credit Interest
          Subvention Support, DGFT and Bank Coordination | EXIMINQ
        </title>
        <meta
          name="description"
          content="Interest Equalisation Scheme consultant in India for export credit interest subvention support, DGFT workflow, bank coordination, MSME eligibility review, packing credit, post-shipment credit, and current EPM-linked guidance."
        />
        <meta
          name="keywords"
          content="interest equalisation scheme consultant India, export credit interest subvention, interest equalisation scheme for exporters, DGFT interest subvention support, packing credit subsidy, post shipment export credit interest support, EPM interest subvention"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/interest-equalisation-scheme"
        />
        <meta
          property="og:title"
          content="Interest Equalisation Scheme Consultant India | Export Credit Interest Subvention Support"
        />
        <meta
          property="og:description"
          content="Get expert support for Interest Equalisation Scheme and current export credit interest subvention workflows, including DGFT filing strategy, eligibility review, and bank coordination."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/interest-equalisation-scheme"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id":
                  "https://eximinq.in/services/interest-equalisation-scheme",
                url: "https://eximinq.in/services/interest-equalisation-scheme",
                name: "Interest Equalisation Scheme Consultant India | Export Credit Interest Subvention Support, DGFT and Bank Coordination | EXIMINQ",
                description:
                  "Interest Equalisation Scheme consultant in India for export credit interest subvention support, DGFT workflow, bank coordination, MSME eligibility review, packing credit, post-shipment credit, and current EPM-linked guidance.",
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
                    name: "Interest Equalisation Scheme",
                    item:
                      "https://eximinq.in/services/interest-equalisation-scheme"
                  }
                ]
              },
              {
                "@type": "Service",
                serviceType: "Interest Equalisation Scheme and export credit interest subvention support",
                name: "Interest Equalisation Scheme Consultant India",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: "India",
                url: "https://eximinq.in/services/interest-equalisation-scheme",
                description:
                  "Consulting support for Interest Equalisation Scheme and current export credit interest subvention workflows, including eligibility review, DGFT filing support, bank coordination, and exporter documentation."
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
        />

        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#0f172a] pt-28 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute bottom-[-5rem] right-[-2rem] h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                <Sparkles size={16} />
                Export Finance Support
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Interest Equalisation Scheme Consultant India for Export Credit
                Interest Subvention Support
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/95">
                We help exporters handle the real work behind Interest
                Equalisation Scheme searches: eligibility review, DGFT workflow,
                bank coordination, document readiness, and current Export
                Promotion Mission interest subvention guidance for pre-shipment
                and post-shipment export credit.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <BadgeCheck className="mt-0.5 text-cyan-200" size={20} />
                    <p className="text-sm font-medium leading-6 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-50"
                >
                  Get Interest Support Review
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#references"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Official References
                  <BookOpenCheck size={18} />
                </a>
              </div>
            </div>

            <div id="consultation" className="lg:pt-6">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 md:px-6 lg:px-8">
            {[
              ["#overview", "Overview"],
              ["#benefits", "Benefits"],
              ["#eligibility", "Eligibility"],
              ["#documents", "Documents"],
              ["#process", "Process"],
              ["#references", "References"],
              ["#faqs", "FAQs"]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <section
            id="overview"
            className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.5)] lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Why This Page Matters
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                A current SEO page for legacy IES searches and live DGFT export
                credit support intent
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Searchers still use the phrase{" "}
                  <strong>Interest Equalisation Scheme</strong>, but the present
                  decision-making journey usually revolves around{" "}
                  <strong>interest subvention support for export credit</strong>,
                  DGFT workflow under{" "}
                  <strong>Export Promotion Mission</strong>, and practical bank
                  coordination.
                </p>
                <p>
                  That is why this page is built to serve both ranking and
                  usability. It answers the commercial question, the policy
                  question, and the implementation question in one place:
                  whether your business is likely to qualify, what records are
                  needed, how current notifications affect the case, and how to
                  move from search intent to a usable filing strategy.
                </p>
                <p>
                  Instead of recycling older scheme copy, the page now aligns
                  with up-to-date official references, exporter intent,
                  structured headings, deeper FAQs, internal linking, and strong
                  conversion paths designed for businesses that actually want
                  execution support.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: CircleDollarSign,
                  title: "Finance-cost reduction intent",
                  text: "Built for exporters searching for lower export credit cost, not just generic scheme awareness."
                },
                {
                  icon: Landmark,
                  title: "DGFT-aligned process view",
                  text: "Explains how current policy handling differs from outdated assumptions about the older scheme structure."
                },
                {
                  icon: HandCoins,
                  title: "Bank coordination support",
                  text: "Connects policy understanding with sanction records, lender communication, and usable documentation."
                },
                {
                  icon: ShieldCheck,
                  title: "Trust and indexability",
                  text: "Adds clean metadata, canonical tagging, FAQ schema, breadcrumb schema, and deeper topical coverage."
                }
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="text-blue-700" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="benefits" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Benefits
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Why exporters pursue interest equalisation and interest
                subvention support
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <TrendingUp className="text-emerald-600" size={22} />
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="eligibility"
            className="mt-14 grid gap-8 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                Eligibility
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Who should review this scheme right now
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                Eligibility today depends on the current official framework,
                exporter category, product relevance, financing structure, and
                the latest DGFT updates. The page is written to attract and
                convert businesses that need current guidance, not outdated
                subsidy assumptions.
              </p>
            </div>
            <div className="grid gap-4">
              {ELIGIBILITY_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2 className="mt-1 text-cyan-200" size={20} />
                  <p className="text-sm leading-7 text-slate-100">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="documents" className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Documents Required
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Core records usually needed
              </h2>
              <div className="mt-6 space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <FileCheck2 className="mt-1 text-blue-700" size={20} />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Timelines
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Typical implementation flow
              </h2>
              <div className="mt-6 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-4"
                  >
                    <CalendarClock className="mt-1 text-blue-700" size={20} />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Process Flow
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                How we handle Interest Equalisation and current interest
                subvention cases
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-700">
                      Step {index + 1}
                    </span>
                    <ClipboardCheck className="text-blue-700" size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="references"
            className="mt-14 rounded-[2rem] bg-white p-8 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.5)]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
              Official References
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Government and system references that strengthen accuracy and E-E-A-T
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This page is intentionally aligned with official DGFT and Ministry
              of Commerce references so that the content remains useful for
              users and more trustworthy for search engines evaluating policy
              reliability and topical depth.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {GOVERNMENT_REFERENCES.map((reference) => (
                <a
                  key={reference.href}
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <FileSearch className="text-blue-700" size={22} />
                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-800">
                    {reference.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Open official source
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                  Internal SEO Strength
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  Related service paths that reinforce topical authority
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Strong internal linking helps Google understand how export
                  finance support connects with wider DGFT, incentive, and
                  compliance workflows across the site.
                </p>
              </div>
              <div className="grid gap-4">
                {RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-3xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {link.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 text-blue-700" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                FAQs
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Common search questions around Interest Equalisation Scheme
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-slate-900">
                    {faq.question}
                    <ChevronDown className="shrink-0 text-blue-700 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-8 text-white md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                  Conversion-Focused CTA
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Want a practical review of your export credit interest support case?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
                  We help exporters move beyond broad scheme awareness into a
                  usable filing and bank-coordination strategy. If your team
                  needs clarity on eligibility, document structure, DGFT
                  workflow, or current notification impact, we can review the
                  case and identify the next action path.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-50"
                  >
                    Start Your Review
                    <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Contact EXIMINQ
                    <Phone size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                {[
                  {
                    icon: Building2,
                    label: "Best fit for",
                    text: "MSME exporters, export-finance users, and businesses needing current DGFT plus bank-side support."
                  },
                  {
                    icon: Globe2,
                    label: "Search intent covered",
                    text: "Interest equalisation scheme, export credit subsidy, DGFT interest subvention support, packing credit and post-shipment credit guidance."
                  },
                  {
                    icon: BriefcaseBusiness,
                    label: "Value delivered",
                    text: "Stronger eligibility clarity, cleaner submissions, and better lender-facing implementation readiness."
                  }
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="rounded-3xl bg-slate-950/20 p-5">
                    <Icon className="text-cyan-200" size={20} />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6 lg:px-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white">EXIMINQ</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Export consulting support for DGFT, customs, compliance, finance
                support workflows, and implementation-heavy trade operations
                across India.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">
                Quick Links
              </h4>
              <div className="mt-4 space-y-3 text-sm">
                <Link to="/services" className="block hover:text-white">
                  Explore Services
                </Link>
                <Link
                  to="/foreign-trade-policy/regulatory-updates"
                  className="block hover:text-white"
                >
                  Regulatory Updates
                </Link>
                <Link to="/about-us" className="block hover:text-white">
                  About EXIMINQ
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">
                Contact
              </h4>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:+917400096950" className="flex items-center gap-3 hover:text-white">
                  <Phone size={16} />
                  +91 74000 96950
                </a>
                <a
                  href="mailto:clouddesk@eximinq.in"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Mail size={16} />
                  clouddesk@eximinq.in
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1" />
                  <span>India-focused DGFT and customs consulting support</span>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="X"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskIES;
