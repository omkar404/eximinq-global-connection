import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  FileSearch,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Ship,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";
import QuickForm from "../components/CloudDeskSVB/QuickForm";

const RELATED_PARTY_SIGNALS = [
  {
    title: "Parent-subsidiary or group control",
    description:
      "Imports between related corporate entities are often examined to determine whether the relationship influenced the declared transaction value."
  },
  {
    title: "Common directors or management",
    description:
      "Common control, overlapping officers, or management influence may trigger valuation scrutiny when goods are imported from related suppliers."
  },
  {
    title: "Exclusive distributor or sole-agent structure",
    description:
      "Where one party is the sole distributor, concessionaire, or agent of the other, customs may look closely at pricing and supporting commercial arrangements."
  },
  {
    title: "Transfer-pricing and assistance linkages",
    description:
      "Licence fees, royalty, technical-assistance charges, and group pricing models may require explanation and documentary support in an SVB review."
  }
];

const SERVICE_AREAS = [
  {
    title: "SVB applicability review",
    description:
      "We review whether the importer's structure, supplier relationship, and pricing arrangement create an SVB filing or related-party valuation exposure."
  },
  {
    title: "Questionnaire and annexure support",
    description:
      "Support for initial declarations, valuation questionnaires, transfer-pricing explanations, commercial agreements, and documentary response strategy."
  },
  {
    title: "Related-party valuation defence",
    description:
      "We help explain why the declared value should be accepted, what adjustments may be relevant, and how to present pricing evidence coherently."
  },
  {
    title: "EDD and provisional-assessment strategy",
    description:
      "Where provisional assessment or deposit exposure arises, we help structure the response, track exposure, and move toward closure and refund readiness."
  },
  {
    title: "Final-order follow-up and post-order compliance",
    description:
      "Assistance on change reporting, renewal or no-change declarations where needed, and practical compliance after the initial valuation order."
  },
  {
    title: "Connected customs litigation support",
    description:
      "If the case expands into customs adjudication, valuation disputes, or recovery exposure, the documentation trail is aligned for the next stage."
  }
];

const BENEFITS = [
  "Reduces the risk of weak questionnaire replies, inconsistent transfer-pricing narratives, and avoidable valuation loading.",
  "Improves the quality of customs-facing documentation before the file turns into a prolonged provisional-assessment issue.",
  "Helps importers organise agreements, royalty arrangements, pricing support, and entity-relationship evidence in a way customs can evaluate clearly.",
  "Supports faster movement toward final assessment, clarity on valuation treatment, and better preparedness for future imports."
];

const ELIGIBILITY_POINTS = [
  "Importers sourcing from parent entities, subsidiaries, associate enterprises, joint ventures, or other related foreign suppliers.",
  "Businesses where royalty, licence fees, technical know-how, or post-import commercial arrangements may affect the import-valuation analysis.",
  "Companies already facing a questionnaire, related-party query, provisional assessment, or valuation clarification from customs.",
  "Teams that want preventive review before a related-party import structure becomes a recurring customs risk."
];

const DOCUMENTS_REQUIRED = [
  "Corporate structure charts, shareholding details, board relationships, and documents showing the nature of the importer-supplier relationship.",
  "Import invoices, bills of entry, pricing schedules, distribution agreements, royalty or licence agreements, and technical-service arrangements.",
  "Transfer-pricing documentation, benchmarking notes, group policy documents, and commercial rationale for the related-party pricing model.",
  "Prior customs correspondence, questionnaire replies, valuation orders, deposit records, and any refund or reassessment trail linked to the file."
];

const PROCESS_STEPS = [
  {
    title: "Relationship and pricing diagnostic",
    detail:
      "We first map the related-party structure, commercial model, agreements, and likely customs valuation questions before preparing the filing strategy."
  },
  {
    title: "Document and questionnaire build-out",
    detail:
      "Core agreements, pricing records, transfer-pricing support, and customs-facing explanations are organised into a coherent response pack."
  },
  {
    title: "Valuation-position defence",
    detail:
      "The declared value is supported through factual explanation, agreement analysis, and commercially consistent narrative across the record set."
  },
  {
    title: "Customs follow-up and clarification handling",
    detail:
      "We support deficiency handling, hearing preparation, clarifications, and progression toward a final valuation view."
  },
  {
    title: "Closure, continuity, and post-order readiness",
    detail:
      "After the order stage, we help track ongoing compliance, declarations, and import-process discipline so future related-party imports stay aligned."
  }
];

const FAQS = [
  {
    question: "What is SVB in customs?",
    answer:
      "SVB stands for Special Valuation Branch, a customs function that examines related-party import transactions to determine whether the relationship influenced the declared transaction value."
  },
  {
    question: "Who needs SVB support?",
    answer:
      "Importers buying from parent companies, subsidiaries, group entities, associated enterprises, or other related suppliers often need SVB review, filing support, or a related-party valuation strategy."
  },
  {
    question: "Does every related-party import automatically lead to valuation loading?",
    answer:
      "No. The key issue is whether the relationship influenced the price. Strong documentation, pricing rationale, and coherent questionnaire responses matter significantly."
  },
  {
    question: "What documents are usually important in an SVB matter?",
    answer:
      "Corporate structure details, distribution or supply agreements, pricing schedules, royalty arrangements, transfer-pricing support, and customs import records are usually central."
  },
  {
    question: "Can EXIMINQ help with questionnaire replies and follow-up?",
    answer:
      "Yes. We can support applicability review, questionnaire drafting, documentary collation, valuation-position explanation, and follow-up through clarification and order stages."
  },
  {
    question: "Why is an SEO-rich SVB page important for ranking?",
    answer:
      "Because users searching for SVB consultant, related-party import valuation, SVB questionnaire support, or EDD-related customs help need more than a short landing page. The page must fully answer their commercial and compliance intent."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "CBIC",
    href: "https://www.cbic.gov.in/"
  },
  {
    label: "ICEGATE",
    href: "https://www.icegate.gov.in/"
  },
  {
    label: "CBIC Tax Information Portal",
    href: "https://taxinformation.cbic.gov.in/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/customs-adjudication",
    title: "Customs Adjudication Support",
    description:
      "Relevant where valuation disputes escalate into notice, hearing, or formal customs litigation support."
  },
  {
    href: "/services/icegate-registration/",
    title: "ICEGATE and Customs Process Support",
    description:
      "Useful when importer profile, filing discipline, and customs-process readiness need to improve around the valuation workflow."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Helpful where related-party valuation issues are part of a wider customs, DGFT, or refund-risk review."
  },
  {
    href: "/services/ca-certification-export-import",
    title: "CA Certification and Trade Support",
    description:
      "Useful where financial support, declarations, or structured documentation may be needed alongside the customs valuation file."
  }
];

const CloudDeskSVB = () => {
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
          SVB Consultant India | Special Valuation Branch, Related Party Import
          Valuation & Questionnaire Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="SVB consultant in India for Special Valuation Branch cases, related party import valuation, questionnaire replies, provisional assessment strategy, and customs valuation support."
        />
        <meta
          name="keywords"
          content="svb consultant India, special valuation branch consultant, related party import valuation, customs valuation related party, svb questionnaire support, provisional assessment customs, import valuation consultant, EDD refund support"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/svb-registration"
        />
        <meta
          property="og:title"
          content="SVB Consultant India | Special Valuation Branch & Related Party Import Valuation Support"
        />
        <meta
          property="og:description"
          content="Get expert support for Special Valuation Branch matters, related-party import valuation, questionnaire handling, provisional assessment strategy, and customs clarification response."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/svb-registration"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/svb-registration",
                url: "https://eximinq.in/services/svb-registration",
                name: "SVB Consultant India | Special Valuation Branch, Related Party Import Valuation & Questionnaire Support | EXIMINQ",
                description:
                  "SVB consultant in India for Special Valuation Branch cases, related party import valuation, questionnaire replies, provisional assessment strategy, and customs valuation support.",
                isPartOf: {
                  "@type": "WebSite",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://eximinq.in"
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
                    name: "SVB Registration",
                    item: "https://eximinq.in/services/svb-registration"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "SVB Registration and Related Party Import Valuation Support",
                serviceType: "Special Valuation Branch Consulting",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                description:
                  "Consulting support for related-party import valuation, SVB questionnaire replies, documentary review, provisional-assessment strategy, and customs valuation defence."
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

      <div className="min-h-screen bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={scrolled}
          setScrolled={setScrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_28%),linear-gradient(135deg,#0f172a_0%,#1e293b_42%,#0f766e_100%)] pt-32 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-8 top-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
            <div className="pt-4">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
                <BadgeCheck className="h-4 w-4" />
                Special Valuation Branch and Related Party Import Support
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                SVB Consultant India for Special Valuation Branch, Related Party
                Import Valuation, and Customs Questionnaire Support
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
                Get expert help on related-party import valuation, SVB
                applicability, questionnaire replies, provisional-assessment
                exposure, and customs-facing documentation for valuation defence.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Related-party import valuation review and pricing-position support",
                  "Questionnaire, annexure, and documentary-response preparation",
                  "Guidance on provisional assessment, EDD exposure, and order-stage readiness",
                  "Support for connected customs compliance and adjudication risk"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cyan-50 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#risk-check"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5"
                >
                  Start the SVB Risk Check
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Understand the Process
                </a>
              </div>
            </div>

            <div id="risk-check" className="lg:pt-8">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 text-sm font-medium text-slate-600 lg:px-8">
            {[
              ["overview", "Overview"],
              ["signals", "Related Party Signals"],
              ["scope", "Scope"],
              ["benefits", "Benefits"],
              ["documents", "Documents"],
              ["process", "Process"],
              ["references", "References"],
              ["faqs", "FAQs"]
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Search-Intent Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                A strong SVB page must answer both valuation risk and filing intent
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Users searching for an <strong>SVB consultant</strong>,
                  <strong> Special Valuation Branch support</strong>, or
                  <strong> related-party import valuation help</strong> usually
                  have a live customs problem, not a generic research need. They
                  want to know whether their related-party pricing can be
                  defended, what documents matter, and how to respond without
                  worsening their exposure.
                </p>
                <p>
                  This page is now structured around that exact search intent. It
                  explains what SVB means in customs practice, where related-party
                  import structures become risky, what documents are usually
                  important, and how importers can move from applicability review
                  to final-order readiness.
                </p>
                <p>
                  For Google, this improves semantic depth and commercial
                  relevance. For users, it makes the page substantially more
                  useful than a short landing page with only surface-level
                  wording.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: Scale,
                  title: "Valuation relevance",
                  detail:
                    "Targets high-intent searches around related-party import valuation, customs pricing scrutiny, and SVB questionnaire response support."
                },
                {
                  icon: ShieldCheck,
                  title: "Risk reduction",
                  detail:
                    "Explains how stronger documentation and structured pricing narrative reduce the chance of weak responses and avoidable valuation disputes."
                },
                {
                  icon: Ship,
                  title: "Practical customs context",
                  detail:
                    "Connects the page to live import workflows, provisional assessment, and customs clarification stages instead of generic consulting copy."
                }
              ].map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signals" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Related Party Indicators
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Common structures that push importers into SVB scrutiny
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Google rewards pages that directly answer entity-specific user
                questions. On this page, that means clearly describing the
                importer-supplier relationships and commercial arrangements that
                typically create valuation review.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {RELATED_PARTY_SIGNALS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Service Scope
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                Special Valuation Branch support is more than filing one form
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                A stronger ranking page should show depth across applicability,
                questionnaire logic, pricing defence, customs communication, and
                post-order continuity. That is the commercial intent behind the
                search, and the page now reflects it.
              </p>
            </div>

            <div className="grid gap-4">
              {SERVICE_AREAS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <FileSearch className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex items-center gap-3 text-slate-900">
                <CircleDollarSign className="h-6 w-6 text-emerald-700" />
                <h2 className="text-2xl font-semibold">Why importers need this early</h2>
              </div>
              <div className="space-y-4">
                {BENEFITS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex items-center gap-3 text-slate-900">
                <FileCheck2 className="h-6 w-6 text-emerald-700" />
                <h2 className="text-2xl font-semibold">Who should use this service</h2>
              </div>
              <div className="space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Documents and Evidence
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Related-party valuation is won or lost on documentation quality
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A page targeting first-page search performance has to address the
              real operational question: what documents matter? This section
              improves both search completeness and user confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {DOCUMENTS_REQUIRED.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="leading-7 text-slate-600">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Process Flow
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                The strongest SVB pages explain the path from risk to resolution
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="references" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Government References
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
                Trust signals matter more in customs valuation topics
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Search engines and users both need to see that the page is
                anchored in real customs context. Official-reference links help
                strengthen authority without turning the page into copied legal
                text.
              </p>
            </div>

            <div className="grid gap-4">
              {GOVERNMENT_REFERENCES.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <div className="flex items-center gap-3 text-slate-900">
                    <Landmark className="h-5 w-5 text-emerald-700" />
                    <span className="text-lg font-semibold">{item.label}</span>
                  </div>
                  <p className="mt-3 break-all text-sm text-slate-500">
                    {item.href}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    Open reference
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Questions importers ask before they respond to an SVB matter
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-slate-900">
                    <span>{faq.question}</span>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Related Services
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
              Internal links that strengthen customs and valuation topical authority
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Strong internal links help Google understand that this page belongs
              to a coherent customs-compliance cluster rather than standing alone
              as a thin service page.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {RELATED_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                <div className="flex items-center gap-3 text-slate-900">
                  <BookOpenCheck className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-xl font-semibold">{link.title}</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-600">{link.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Explore related service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#111827_0%,#0f172a_40%,#065f46_100%)] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Conversion-Focused CTA
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                Need a defensible customs valuation position for related-party imports?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                We can help review the relationship structure, pricing model,
                agreements, and customs-facing evidence before the file becomes
                harder to control.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    title: "Call us",
                    detail: "+91 74000 96950"
                  },
                  {
                    icon: Mail,
                    title: "Email us",
                    detail: "clouddesk@eximinq.in"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    detail: "Mumbai, India"
                  },
                  {
                    icon: BriefcaseBusiness,
                    title: "Use case",
                    detail: "SVB, related-party import valuation, and customs clarification support"
                  }
                ].map(({ icon: Icon, title, detail }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-300" />
                      <span className="font-semibold text-white">{title}</span>
                    </div>
                    <p className="text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold">What this page now does better for SEO</h3>
              <div className="mt-5 space-y-4 text-slate-200">
                {[
                  "Targets commercial-intent keywords such as SVB consultant, Special Valuation Branch support, related-party import valuation, and SVB questionnaire help.",
                  "Adds real depth with applicability signals, document requirements, process flow, FAQs, government references, and related-service linking.",
                  "Improves crawlability and page clarity with canonical, schema, cleaner content structure, and stronger internal semantic clustering."
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <a
                href="#risk-check"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Start the SVB risk check
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 py-10 text-slate-300">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-lg font-semibold text-white">EXIMINQ Global Connections</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                Search-focused customs, DGFT, and trade-compliance support for
                importers and exporters who need clearer documentation,
                stronger execution, and better regulatory outcomes.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://www.linkedin.com",
                  label: "LinkedIn",
                  icon: Linkedin
                },
                {
                  href: "https://x.com",
                  label: "X",
                  icon: Twitter
                },
                {
                  href: "https://www.facebook.com",
                  label: "Facebook",
                  icon: Facebook
                }
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-emerald-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskSVB;
