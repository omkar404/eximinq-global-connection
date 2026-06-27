import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Box,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Landmark,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  TimerReset,
  Twitter,
  Facebook,
  Warehouse
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";
import QuickForm from "../components/CloudDeskWarehouse/QuickForm";

const LICENSE_TYPES = [
  {
    title: "Public bonded warehouse under Section 57",
    description:
      "A public bonded warehouse is generally relevant where warehousing services are offered for goods belonging to multiple importers under customs control and structured storage governance."
  },
  {
    title: "Private bonded warehouse under Section 58",
    description:
      "A private bonded warehouse is usually chosen by businesses that want to store their own imported goods with customs duty deferment and tighter control over warehousing operations."
  },
  {
    title: "Expansion path toward Section 65 operations",
    description:
      "Some businesses begin with bonded warehousing readiness and later assess whether manufacturing or other operations inside the warehouse make MOOWR-style progression commercially useful."
  }
];

const BENEFITS = [
  "Improves cash-flow management by deferring customs duty while imported goods remain warehoused under the applicable customs framework.",
  "Supports better inventory planning, dispatch timing, and bonded-storage control for importers managing high-value or recurring cargo.",
  "Helps businesses reduce customs friction by formalising storage, stock discipline, documentation, and warehouse governance.",
  "Creates a structured platform for wider customs strategy, including possible future alignment with bonded manufacturing or value-addition workflows where relevant."
];

const ELIGIBILITY_POINTS = [
  "Importers, distributors, manufacturers, or warehousing operators with a defined storage facility and a practical need for customs-bonded operations.",
  "Businesses that want Section 57 or Section 58 licensing based on whether the warehouse model is public-use or owner-specific.",
  "Applicants with premises control, security measures, operational documentation, and readiness for warehouse-level customs supervision.",
  "Businesses that want a long-term customs-storage structure rather than ad hoc port-side storage handling."
];

const DOCUMENTS_REQUIRED = [
  "Entity records, IEC, GST, PAN, authorised signatory details, and applicant business profile linked to the warehousing operation.",
  "Warehouse address proof, ownership or lease records, layout plan, access controls, storage maps, and site-security details.",
  "Proposed warehouse type, product profile, import pattern summary, and operating narrative that explains why customs-bonded storage is required.",
  "Insurance planning, stock-control process, recordkeeping method, and any warehouse-related regulatory or customs correspondence already available."
];

const PROCESS_STEPS = [
  {
    title: "Warehouse model and licence selection",
    detail:
      "We first determine whether the requirement is best suited to a public bonded warehouse, private bonded warehouse, or a broader customs-warehousing strategy with future expansion options."
  },
  {
    title: "Premises and compliance-readiness review",
    detail:
      "The site, security controls, storage logic, record processes, and customs-facing practicalities are reviewed before filing begins."
  },
  {
    title: "Application preparation and filing support",
    detail:
      "The filing set is organised with warehouse details, entity records, layout information, controls, and supporting declarations required for licensing."
  },
  {
    title: "Customs interaction and implementation support",
    detail:
      "Inspection readiness, clarification handling, and operational alignment are supported so the warehouse can move toward actual licensed use."
  },
  {
    title: "Post-approval control and continuity",
    detail:
      "The long-term value comes from stock discipline, warehousing records, reporting consistency, and customs-ready operating controls after approval."
  }
];

const FAQS = [
  {
    question: "What is a customs bonded warehouse licence?",
    answer:
      "A customs bonded warehouse licence allows goods to be stored under customs control with duty deferment subject to the applicable warehousing framework and compliance conditions."
  },
  {
    question: "What is the difference between Section 57 and Section 58 warehouses?",
    answer:
      "Section 57 is generally associated with public bonded warehousing models, while Section 58 is generally used for private bonded warehousing where the facility is tied to the license holder's own goods and operations."
  },
  {
    question: "Why do importers apply for a bonded warehouse licence?",
    answer:
      "Importers use bonded warehousing to defer customs duty, improve stock planning, manage high-value cargo more efficiently, and create a cleaner customs-storage structure."
  },
  {
    question: "Can a bonded warehouse licence support future MOOWR planning?",
    answer:
      "Yes. In many cases, private bonded warehousing becomes part of a broader customs strategy, especially where the business later evaluates manufacturing or other operations inside the warehouse."
  },
  {
    question: "What matters most after the licence is granted?",
    answer:
      "Operational controls matter most: stock discipline, warehouse records, inspection readiness, insurance alignment, reporting consistency, and ongoing customs-process compliance."
  },
  {
    question: "Why can this page rank for warehouse licence keywords?",
    answer:
      "Because it answers real user intent around warehouse type selection, bonded storage use cases, compliance expectations, customs interaction, and practical implementation instead of relying on a thin marketing page."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "ICEGATE Warehouse Licensing Manual",
    href: "https://www.icegate.gov.in/sites/default/files/2024-11/User%20Manual-Warehouse%20Licensing_v.1.07.pdf"
  },
  {
    label: "ICEGATE Warehouse Monthly Returns",
    href: "https://www.icegate.gov.in/guidelines/warehouse-related-modules/warehouse-monthly-returns"
  },
  {
    label: "ICEGATE Warehouse Module FAQ",
    href: "https://www.icegate.gov.in/guidelines/frequently-asked-questions-warehouse-module-april-4-2025"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/moowr-scheme/",
    title: "MOOWR Scheme Support",
    description:
      "Useful for businesses exploring whether private bonded warehousing should evolve into a bonded manufacturing or operations model."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Helpful where warehousing strategy should be reviewed together with customs controls, stock governance, and transaction-level compliance exposure."
  },
  {
    href: "/services/cha-services",
    title: "CHA and Customs Broker Services",
    description:
      "Relevant when warehouse licensing must connect smoothly with active customs clearance, import handling, and bonded movement execution."
  },
  {
    href: "/services/inland-transportation",
    title: "Inland Transportation Support",
    description:
      "Important where the bonded warehouse strategy also depends on reliable cargo movement between port, warehouse, and downstream customer or factory locations."
  }
];

const HIGHLIGHTS = [
  "Warehouse licence consultant India",
  "Section 57 and Section 58 bonded warehouse support",
  "Duty deferment and customs storage strategy",
  "Warehouse controls, records, and inspection readiness"
];

const CloudDeskWarehouse = () => {
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
          Warehouse Licence Consultant India | Public and Private Bonded
          Warehouse Registration, Section 57 and Section 58 Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="Warehouse licence consultant in India for public and private bonded warehouse registration, Section 57 and Section 58 support, customs duty deferment, warehouse compliance, controls, records, and implementation guidance."
        />
        <meta
          name="keywords"
          content="warehouse licence consultant India, bonded warehouse registration, section 57 warehouse, section 58 warehouse licence, customs bonded warehouse consultant, warehouse licence customs India, public bonded warehouse, private bonded warehouse"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/warehouse-license"
        />
        <meta
          property="og:title"
          content="Warehouse Licence Consultant India | Public and Private Bonded Warehouse Support"
        />
        <meta
          property="og:description"
          content="Get expert support for public and private bonded warehouse registration, Section 57 and Section 58 licensing, customs storage planning, and warehouse compliance."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/warehouse-license"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/warehouse-license",
                url: "https://eximinq.in/services/warehouse-license",
                name: "Warehouse Licence Consultant India | Public and Private Bonded Warehouse Registration, Section 57 and Section 58 Support | EXIMINQ",
                description:
                  "Warehouse licence consultant in India for public and private bonded warehouse registration, Section 57 and Section 58 support, customs duty deferment, warehouse compliance, controls, records, and implementation guidance.",
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
                    name: "Warehouse Licence",
                    item: "https://eximinq.in/services/warehouse-license"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Warehouse Licence Consultant India",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                serviceType:
                  "Public and private bonded warehouse licensing, Section 57 and Section 58 customs support, and warehouse implementation guidance",
                description:
                  "Professional support for bonded warehouse registration, customs storage strategy, compliance controls, stock governance, and long-term bonded warehouse implementation."
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

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <MainNavbar />

        <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
                <Warehouse className="h-4 w-4" />
                Bonded warehouse licensing, duty deferment, and customs storage
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
                Warehouse Licence Consultant in India for Public and Private
                Bonded Warehouse Registration
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                EXIMINQ helps importers, warehouse operators, and manufacturers
                structure Section 57 and Section 58 warehouse licensing so
                customs duty deferment, storage controls, records, and
                inspection readiness work as a practical bonded-warehouse system.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#feasibility-check"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Check Licence Feasibility
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Process Flow
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div id="feasibility-check" className="lg:pt-4">
              <QuickForm />
            </div>
          </div>
        </header>

        <div
          className={`sticky top-[72px] z-30 border-b transition ${
            scrolled
              ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
              : "border-slate-100 bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-3 lg:px-10">
            <div className="hidden flex-wrap items-center gap-3 md:flex">
              {[
                ["overview", "Overview"],
                ["types", "Types"],
                ["benefits", "Benefits"],
                ["eligibility", "Eligibility"],
                ["documents", "Documents"],
                ["process", "Process"],
                ["references", "References"],
                ["faqs", "FAQs"]
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900"
              >
                Jump to section
                <ChevronDown
                  className={`h-4 w-4 transition ${isMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMenuOpen && (
                <div className="mt-2 space-y-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                  {[
                    ["overview", "Overview"],
                    ["types", "Types"],
                    ["benefits", "Benefits"],
                    ["eligibility", "Eligibility"],
                    ["documents", "Documents"],
                    ["process", "Process"],
                    ["references", "References"],
                    ["faqs", "FAQs"]
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={`#${href}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl space-y-20 px-6 py-16 lg:px-10">
          <section
            id="overview"
            className="grid gap-8 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Warehouse Licence Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Why warehouse licence pages rank better when they answer real
                customs-storage intent
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Searchers looking for a <strong>warehouse licence consultant
                India</strong>, <strong>bonded warehouse registration</strong>,
                or <strong>Section 58 warehouse licence</strong> want much more
                than a definition. They want to know which licence type fits
                their business, how customs duty deferment works, what controls
                are expected, what records matter after approval, and whether
                the warehouse can support a broader customs strategy later.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                That is why this page is built around the actual decision points
                behind bonded warehousing: public versus private model, customs
                supervision, storage governance, stock discipline, inspection
                readiness, and long-term implementation practicality.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: CircleDollarSign,
                  title: "Duty deferment",
                  text: "A bonded warehouse structure matters because it can materially improve customs-duty timing and cash-flow planning."
                },
                {
                  icon: Lock,
                  title: "Storage control",
                  text: "Warehouse licensing is not just a permit; it is a governance structure for customs-controlled inventory."
                },
                {
                  icon: Box,
                  title: "Inventory discipline",
                  text: "Long-term success depends on records, stock movement clarity, and customs-facing accountability."
                },
                {
                  icon: ShieldCheck,
                  title: "Inspection readiness",
                  text: "Search intent is strongest where a page explains how the warehouse remains practically customs-ready after approval."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200"
                >
                  <item.icon className="h-8 w-8 text-blue-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="types" className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Licence Types
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                The three warehouse-licensing paths users usually need to
                understand
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This section improves ranking potential by directly addressing
                the classification intent behind warehouse-license search
                queries.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {LICENSE_TYPES.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
                >
                  <Warehouse className="h-8 w-8 text-blue-700" />
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="benefits"
            className="rounded-[32px] bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 p-8 text-white shadow-xl lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Benefits
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  Why importers and warehouse operators evaluate bonded licensing
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  The strongest ranking opportunity for this page comes from
                  explaining why warehouse licensing is commercially useful, not
                  just legally necessary.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur"
                  >
                    <BadgeCheck className="h-6 w-6 text-emerald-300" />
                    <p className="mt-4 text-sm leading-7 text-slate-100">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="eligibility"
            className="grid gap-8 lg:grid-cols-[1fr_1fr]"
          >
            <article className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  Eligibility indicators
                </h2>
              </div>
              <div className="mt-6 space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-500" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article
              id="documents"
              className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-3">
                <FileCheck2 className="h-7 w-7 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  Documents typically required
                </h2>
              </div>
              <div className="mt-6 space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ClipboardCheck className="mt-1 h-5 w-5 flex-none text-blue-700" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section
            id="process"
            className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Process Flow
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                A step-by-step path from warehouse evaluation to bonded
                implementation
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This structure is designed to satisfy the exact questions Google
                users ask when they move from browsing to real warehouse
                planning.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
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
            className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <article className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <BookOpenCheck className="h-7 w-7 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  Government and system references
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                These live warehouse-system references strengthen trust and help
                align the page with actual customs warehousing workflows.
              </p>

              <div className="mt-6 space-y-3">
                {GOVERNMENT_REFERENCES.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <span className="flex items-center gap-3">
                      <Landmark className="h-5 w-5 text-blue-700" />
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <PackageCheck className="h-7 w-7 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  Related customs and warehousing services
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Internal linking helps search engines understand this page as
                part of a wider bonded-storage, customs, and trade-operations
                cluster.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {RELATED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-blue-700" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </article>
          </section>

          <section
            id="faqs"
            className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Common warehouse licence questions importers and operators ask
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <FileSearch className="mt-1 h-5 w-5 flex-none text-blue-700" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                  Conversion-Focused CTA
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  Need the right bonded warehouse structure before you scale
                  imports?
                </h2>
                <p className="mt-4 text-base leading-8 text-blue-50">
                  If your team wants help choosing the right warehouse licence,
                  structuring customs storage controls, or building a bonded
                  warehouse model that can actually run without compliance
                  friction, we can help you plan it properly.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#feasibility-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Start Feasibility Check
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+917400096950"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Speak to a Warehouse Expert
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.7fr_0.8fr] lg:px-10">
            <div>
              <h2 className="text-2xl font-bold text-white">EXIMINQ</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Warehouse licence consultant for businesses that need public or
                private bonded warehousing, customs storage strategy, warehouse
                controls, and long-term bonded-operations support.
              </p>
              <div className="mt-6 flex items-center gap-4 text-slate-400">
                <a
                  href="https://www.linkedin.com/company/eximinq/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-800 p-3 transition hover:border-slate-600 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/eximinq"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-800 p-3 transition hover:border-slate-600 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/eximinq"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-800 p-3 transition hover:border-slate-600 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Related Services
              </h3>
              <div className="mt-5 space-y-3">
                {RELATED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </h3>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 text-blue-300" />
                  <a href="tel:+917400096950" className="hover:text-white">
                    +91 74000 96950
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-blue-300" />
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="hover:text-white"
                  >
                    clouddesk@eximinq.in
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-blue-300" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskWarehouse;
