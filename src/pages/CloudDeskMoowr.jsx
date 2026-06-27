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
  Factory,
  FileCheck2,
  FileSearch,
  Landmark,
  Linkedin,
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
import QuickForm from "../components/CloudDeskMoowr/QuickForm";

const MOOWR_CORE_AREAS = [
  {
    title: "Bonded warehouse licensing under Section 58",
    description:
      "MOOWR begins with private bonded warehouse approval under the customs warehousing framework, including premises readiness, process design, and record discipline."
  },
  {
    title: "Manufacturing permission under Section 65",
    description:
      "The operational value of MOOWR comes from permission to manufacture or carry out other permitted operations in the bonded warehouse while keeping duty deferment benefits intact."
  },
  {
    title: "Duty deferment for raw materials and capital goods",
    description:
      "The scheme is commercially valuable because customs duty can be deferred until domestic clearance, while export-facing models can materially improve cash-flow efficiency."
  },
  {
    title: "Ongoing warehouse compliance and returns",
    description:
      "MOOWR is not only a registration step. The long-term advantage depends on inventory controls, customs process discipline, warehousing records, and return filing readiness."
  }
];

const BENEFITS = [
  "Improves working-capital efficiency by deferring customs duty instead of paying it upfront at import stage for qualifying warehousing and manufacturing operations.",
  "Supports domestic manufacturing, assembly, processing, and value-addition models without forcing a traditional export-obligation structure like some alternative schemes.",
  "Can work well for import-heavy manufacturers that need long-horizon duty deferment, flexible storage duration, and a warehouse-led production workflow.",
  "Creates strategic optionality for businesses comparing MOOWR against EPCG, Advance Authorisation, or a standard warehousing model."
];

const ELIGIBILITY_POINTS = [
  "Manufacturers, processors, assemblers, or businesses planning operations that can be run from a controlled private bonded warehouse environment.",
  "Businesses importing raw materials, components, or capital goods that want duty deferment integrated into their production and inventory model.",
  "Companies with identifiable premises, compliance controls, and operational readiness for customs-supervised warehousing and record maintenance.",
  "Importers and manufacturers that want a long-term customs strategy rather than a one-time licence filing approach."
];

const DOCUMENTS_REQUIRED = [
  "Entity documents, IEC, GST, PAN, authorised signatory records, and business profile details tied to the warehousing applicant.",
  "Premises address proof, ownership or lease records, layout plan, storage maps, process-flow note, and security-control details for the warehouse.",
  "Import and manufacturing profile, product list, capital-goods plan, bill-of-materials context, and proposed operational narrative for the bonded unit.",
  "Warehouse record-keeping controls, inventory discipline model, customs coordination documents, and any existing warehouse or compliance correspondence."
];

const PROCESS_STEPS = [
  {
    title: "Commercial feasibility and scheme comparison",
    detail:
      "We first check whether MOOWR is commercially stronger than EPCG, Advance Authorisation, or a non-bonded import structure based on imports, sales pattern, and manufacturing flow."
  },
  {
    title: "Premises and warehousing-readiness review",
    detail:
      "The warehouse or factory setup is checked for customs-facing practicality, including storage logic, process controls, and physical readiness."
  },
  {
    title: "Section 58 and Section 65 application support",
    detail:
      "The bonded warehouse licence and manufacturing permission workflow are organised into a structured filing set with practical compliance notes."
  },
  {
    title: "Implementation and customs process alignment",
    detail:
      "Post-approval support focuses on import flow, inventory discipline, ex-bond clearance logic, operational controls, and customs-facing execution."
  },
  {
    title: "Monthly returns, audit trail, and continuity",
    detail:
      "The real long-term value of MOOWR comes from clean warehouse accounting, return discipline, and documentation that can withstand future customs review."
  }
];

const FAQS = [
  {
    question: "What is the MOOWR scheme?",
    answer:
      "MOOWR refers to the Manufacture and Other Operations in Warehouse Regulations framework, which allows manufacturing or permitted operations in a bonded warehouse with customs duty deferment benefits."
  },
  {
    question: "Is MOOWR only for exporters?",
    answer:
      "No. MOOWR is often attractive because it does not depend on a classic export-obligation model. It can also be relevant where domestic clearance forms part of the commercial plan."
  },
  {
    question: "What approvals are generally involved in a MOOWR setup?",
    answer:
      "A practical MOOWR implementation usually involves bonded warehouse licensing under Section 58 and permission for manufacturing or other operations under Section 65, supported by operational and compliance readiness."
  },
  {
    question: "How is MOOWR different from Advance Authorisation or EPCG?",
    answer:
      "Advance Authorisation and EPCG are licence-driven schemes tied to different commercial and compliance structures, while MOOWR is warehouse-led and is often chosen for long-term duty deferment and manufacturing flexibility."
  },
  {
    question: "Is there a time limit for storing goods in a MOOWR unit?",
    answer:
      "One reason businesses evaluate MOOWR seriously is its warehousing flexibility compared with many other import-benefit structures, but implementation should still be designed around the current customs process and compliance requirements."
  },
  {
    question: "Why can this page rank for MOOWR keywords?",
    answer:
      "Because it is built to answer real user intent around bonded warehouse setup, Section 58 and 65 approvals, duty deferment, monthly returns, and scheme comparison instead of using a shallow promotional page."
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
    href: "/services/epcg-scheme",
    title: "EPCG Scheme Support",
    description:
      "Useful when the business is comparing capital-goods import strategy, export obligation impact, and long-term customs cost structure."
  },
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Relevant for businesses deciding between licence-led duty exemption and warehouse-led duty deferment."
  },
  {
    href: "/services/warehouse-license",
    title: "Warehouse Licence Support",
    description:
      "Important where the warehousing foundation itself needs structured support before a larger MOOWR implementation can work properly."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Helpful where MOOWR planning needs to be linked to customs controls, inventory records, and broader trade-compliance governance."
  }
];

const HIGHLIGHTS = [
  "MOOWR consultant India",
  "Section 58 bonded warehouse and Section 65 manufacturing support",
  "Duty deferment strategy for import-heavy manufacturing",
  "Warehouse returns, controls, and customs process alignment"
];

const CloudDeskMoowr = () => {
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
          MOOWR Scheme Consultant India | Bonded Warehouse, Section 58 and
          Section 65 Manufacturing Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="MOOWR scheme consultant in India for bonded warehouse licensing, Section 58 and Section 65 approvals, duty deferment strategy, warehouse compliance, monthly returns, and customs implementation support."
        />
        <meta
          name="keywords"
          content="MOOWR consultant India, MOOWR scheme consultant, bonded warehouse consultant, section 58 warehouse licence, section 65 manufacturing permission, MOOWR registration, duty deferment scheme India, customs bonded manufacturing"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/moowr-scheme/"
        />
        <meta
          property="og:title"
          content="MOOWR Scheme Consultant India | Bonded Warehouse and Section 65 Manufacturing Support"
        />
        <meta
          property="og:description"
          content="Get expert support for MOOWR setup, Section 58 bonded warehouse licensing, Section 65 manufacturing permission, duty deferment planning, and warehouse compliance."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/moowr-scheme/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/moowr-scheme/",
                url: "https://eximinq.in/services/moowr-scheme/",
                name: "MOOWR Scheme Consultant India | Bonded Warehouse, Section 58 and Section 65 Manufacturing Support | EXIMINQ",
                description:
                  "MOOWR scheme consultant in India for bonded warehouse licensing, Section 58 and Section 65 approvals, duty deferment strategy, warehouse compliance, monthly returns, and customs implementation support.",
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
                    name: "MOOWR Scheme",
                    item: "https://eximinq.in/services/moowr-scheme/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "MOOWR Scheme Consultant India",
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
                  "Bonded warehouse licensing, Section 58 and Section 65 approvals, duty deferment planning, and MOOWR implementation support",
                description:
                  "Professional support for MOOWR setup, customs bonded warehouse implementation, manufacturing permission, warehouse compliance, and long-term duty deferment planning."
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
                Bonded warehouse manufacturing and duty deferment strategy
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
                MOOWR Scheme Consultant in India for Bonded Warehouse Setup,
                Section 58 Licensing, and Section 65 Manufacturing Support
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                EXIMINQ helps importers and manufacturers evaluate, structure,
                and implement MOOWR so bonded warehousing, customs duty
                deferment, manufacturing permission, warehouse returns, and
                ongoing compliance work as one commercially usable system.
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
                  Check MOOWR Feasibility
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
                MOOWR Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Why MOOWR ranks well when the page answers both customs and
                commercial intent
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Searchers looking for <strong>MOOWR consultant India</strong>,
                <strong> bonded warehouse setup</strong>, or{" "}
                <strong>Section 65 manufacturing permission</strong> are not
                looking for generic scheme definitions alone. They want to know
                whether MOOWR is better than EPCG or Advance Authorisation,
                whether it fits their import model, what approvals are involved,
                how duty deferment works, and what ongoing warehouse compliance
                will look like in practice.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                That is why this page is built around real commercial decision
                points: bonded warehouse licensing, manufacturing permission,
                customs process discipline, monthly returns, inventory controls,
                and long-term operating viability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: CircleDollarSign,
                  title: "Duty deferment logic",
                  text: "Strong relevance for businesses that want working-capital relief and customs-cost efficiency at scale."
                },
                {
                  icon: Factory,
                  title: "Manufacturing flexibility",
                  text: "Useful for import-led assembly, production, and value-addition models that need a warehouse-based customs structure."
                },
                {
                  icon: Box,
                  title: "Inventory discipline",
                  text: "MOOWR success depends on controls, records, and warehouse accounting that remain customs-ready over time."
                },
                {
                  icon: ShieldCheck,
                  title: "Long-term compliance",
                  text: "The real SEO and conversion strength comes from explaining implementation, not just registration."
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

          <section className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Core MOOWR Areas
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                The four areas that define a successful MOOWR implementation
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A page can only rank sustainably for MOOWR keywords if it
                explains not just the scheme benefit, but the actual operating
                pillars behind it.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {MOOWR_CORE_AREAS.map((area, index) => (
                <article
                  key={area.title}
                  className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white">
                      {index + 1}
                    </span>
                    Core area
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {area.description}
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
                  Why manufacturers compare MOOWR seriously against other schemes
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  The strongest search-intent angle for MOOWR is commercial
                  decision-making. Users want to know whether the scheme creates
                  real cash-flow, warehousing, and manufacturing advantages for
                  their operating model.
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
                A step-by-step path from MOOWR evaluation to live warehouse
                operation
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This section is designed to satisfy the exact questions Google
                users ask when they move from browsing the scheme to planning an
                actual implementation.
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
                MOOWR pages are stronger when they connect users to actual
                warehouse-system documentation and current customs workflow
                references.
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
                  Related scheme and compliance services
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Internal linking helps Google understand this page as part of a
                wider customs, warehousing, and duty-optimization cluster.
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
                Common MOOWR questions importers and manufacturers ask
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
                  Need a commercially workable MOOWR roadmap for your imports?
                </h2>
                <p className="mt-4 text-base leading-8 text-blue-50">
                  If your team wants to compare MOOWR with other customs-benefit
                  structures, build a bonded manufacturing workflow, or align
                  warehouse compliance for a live implementation, we can help
                  you structure it properly from the start.
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
                  Speak to a MOOWR Expert
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
                MOOWR consultant for manufacturers and importers that need a
                bonded warehouse structure, duty deferment strategy, customs
                process control, and long-term warehouse compliance support.
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

export default CloudDeskMoowr;
