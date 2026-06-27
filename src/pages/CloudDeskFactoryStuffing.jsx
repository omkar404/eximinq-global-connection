import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
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
  Ship,
  TimerReset,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";
import QuickForm from "../components/CloudDeskFactoryStuffing/QuickForm";

const STUFFING_MODES = [
  {
    title: "Officer-supervised factory stuffing",
    description:
      "Customs or the authorised officer supervises examination, stuffing, and sealing at the factory or approved warehouse when the shipment profile or exporter process requires supervised handling.",
    points: [
      "Useful for exporters that need officer presence for a particular cargo profile or shipment condition.",
      "Supports supervised sealing, customs examination coordination, and documented container handover.",
      "Often relevant where self-sealing readiness is not yet fully established."
    ]
  },
  {
    title: "Self-sealing with RFID e-seal",
    description:
      "Eligible exporters can move toward self-sealing by aligning factory controls, document process, and RFID e-seal workflow so the container can move to port with lower procedural friction.",
    points: [
      "Reduces dependence on shipment-day officer coordination in suitable cases.",
      "Improves operational flexibility for regular exporters handling repeated container dispatches.",
      "Works best when premises controls, sealing discipline, and customs-facing documentation are properly organised."
    ]
  }
];

const BENEFITS = [
  "Reduces unnecessary cargo handling between factory, CFS, and terminal touchpoints, which lowers damage and coordination risk.",
  "Improves control over loading, stuffing, palletisation, and sealing at the exporter premises instead of depending entirely on third-party yard handling.",
  "Helps exporters shorten dispatch friction where self-sealing or approved stuffing workflow is properly structured and accepted.",
  "Supports stronger customs-process discipline for exporters managing repeat shipments, high-value cargo, or timing-sensitive export schedules."
];

const ELIGIBILITY_POINTS = [
  "Manufacturer exporters with identifiable stuffing premises and a controlled dispatch process.",
  "Exporters using owned, leased, or approved warehouse locations that can support secure container loading and sealing operations.",
  "Businesses with process discipline, shipment records, and practical readiness for factory-based customs export handling.",
  "Exporters that want to move from ad hoc shipment execution to a more reliable stuffing and sealing compliance model."
];

const DOCUMENTS_REQUIRED = [
  "IEC, GST, PAN, entity constitution records, and authorised signatory details linked to the exporter profile.",
  "Factory or warehouse address proof, layout plan, stuffing-area details, security controls, and operational process note.",
  "Export-product profile, shipment pattern summary, and supporting records that help explain why factory stuffing or self-sealing is being sought.",
  "Where applicable, RFID e-seal workflow details, vendor process mapping, internal sealing controls, and prior customs correspondence."
];

const PROCESS_STEPS = [
  {
    title: "Premises and shipment-process review",
    detail:
      "We first review the factory or warehouse setup, shipping pattern, stuffing controls, and whether officer-supervised stuffing or self-sealing is the more practical route."
  },
  {
    title: "Document pack preparation",
    detail:
      "The application set is organised with entity records, premises documents, process notes, layout details, and customs-facing declarations."
  },
  {
    title: "Customs permission and compliance alignment",
    detail:
      "We support the permission or procedural alignment needed so the stuffing process matches the customs and export-control expectations for the shipment workflow."
  },
  {
    title: "Shipment execution readiness",
    detail:
      "The stuffing-day workflow, sealing discipline, record trail, and terminal-movement path are aligned to reduce avoidable disruption."
  },
  {
    title: "Ongoing control and troubleshooting",
    detail:
      "Repeat exporters are supported with process discipline, practical issue handling, and related customs coordination as the stuffing model matures."
  }
];

const FAQS = [
  {
    question: "What is factory stuffing in exports?",
    answer:
      "Factory stuffing means export cargo is stuffed into the container at the exporter factory or approved warehouse instead of depending entirely on a CFS stuffing workflow."
  },
  {
    question: "What is self-sealing for export containers?",
    answer:
      "Self-sealing is a process where the eligible exporter seals the container under the applicable compliance framework, usually supported by stronger premises control and RFID e-seal workflow."
  },
  {
    question: "Who is eligible for factory stuffing support?",
    answer:
      "Manufacturer exporters, warehouse-based exporters, and businesses with controlled premises and repeat export operations are usually the most suitable candidates for factory stuffing or self-sealing alignment."
  },
  {
    question: "Do all exporters need officer supervision?",
    answer:
      "Not always. The right path depends on exporter readiness, shipment profile, premises control, and the practical compliance model applicable to that exporter."
  },
  {
    question: "Why is RFID e-seal readiness important?",
    answer:
      "RFID e-seal readiness improves traceability and supports a more modern self-sealing workflow where the exporter wants lower operational dependence on physical supervision."
  },
  {
    question: "Why can this page rank for factory stuffing keywords?",
    answer:
      "Because it is built to answer commercial and compliance intent together: permission strategy, self-sealing logic, documents, eligibility, customs process, and exporter decision-making questions."
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
    href: "/services/icegate-registration/",
    title: "ICEGATE Registration Support",
    description:
      "Useful when exporter process readiness, customs filing access, and shipment-document discipline need to improve together."
  },
  {
    href: "/services/ad-code-registration/",
    title: "AD Code Registration",
    description:
      "Important for exporters aligning banking, customs, and shipping-bill workflow before regular export movement starts."
  },
  {
    href: "/services/cha-services",
    title: "CHA and Customs Broker Services",
    description:
      "Helpful where stuffing support needs to work alongside live customs clearance, examination coordination, and port-side execution."
  },
  {
    href: "/services/inland-transportation",
    title: "Inland Transportation Support",
    description:
      "Relevant when factory stuffing is part of a larger exporter dispatch model involving trailer movement, container pickup, and timed terminal delivery."
  }
];

const HIGHLIGHTS = [
  "Factory stuffing consultant India",
  "Self-sealing and RFID e-seal workflow guidance",
  "Customs-facing documentation and permission support",
  "Operationally practical process for exporters and warehouses"
];

const CloudDeskFactoryStuffing = () => {
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
          Factory Stuffing Consultant India | Self Sealing Permission, RFID
          E-Seal & Customs Export Stuffing Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="Factory stuffing consultant in India for self sealing permission, RFID e-seal setup, customs export stuffing workflow, factory or warehouse approval, and officer-supervised container sealing support."
        />
        <meta
          name="keywords"
          content="factory stuffing consultant India, self sealing permission, RFID e-seal export, factory stuffing permission, customs self sealing, container stuffing at factory, exporter factory stuffing, officer supervised stuffing"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/factory-stuffing"
        />
        <meta
          property="og:title"
          content="Factory Stuffing Consultant India | Self Sealing Permission and RFID E-Seal Support"
        />
        <meta
          property="og:description"
          content="Get expert support for factory stuffing permission, self sealing workflow, RFID e-seal readiness, customs exporter process design, and officer-supervised stuffing support."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/factory-stuffing"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/factory-stuffing",
                url: "https://eximinq.in/services/factory-stuffing",
                name: "Factory Stuffing Consultant India | Self Sealing Permission, RFID E-Seal & Customs Export Stuffing Support | EXIMINQ",
                description:
                  "Factory stuffing consultant in India for self sealing permission, RFID e-seal setup, customs export stuffing workflow, factory or warehouse approval, and officer-supervised container sealing support.",
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
                    name: "Factory Stuffing",
                    item: "https://eximinq.in/services/factory-stuffing"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Factory Stuffing Consultant India",
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
                  "Factory stuffing permission, self sealing workflow, RFID e-seal setup, and customs export stuffing support",
                description:
                  "Professional support for factory stuffing permission, officer-supervised stuffing, self sealing readiness, RFID e-seal compliance, and exporter customs process alignment."
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
                <Factory className="h-4 w-4" />
                Factory stuffing, self-sealing, and customs execution support
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
                Factory Stuffing Consultant in India for Self Sealing, RFID
                E-Seal, and Customs Export Workflow Support
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                EXIMINQ helps exporters structure factory stuffing permission,
                officer-supervised stuffing, self-sealing readiness, and RFID
                e-seal process discipline so export containers move with better
                control, lower friction, and stronger customs alignment.
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
                  href="#eligibility-check"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Check Factory Stuffing Eligibility
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

            <div id="eligibility-check" className="lg:pt-4">
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
                ["methods", "Methods"],
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
                    ["methods", "Methods"],
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
            className="grid gap-8 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Factory Stuffing Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Why exporters move container stuffing closer to the factory
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Exporters searching for factory stuffing permission usually do
                not just want a form filing service. They want a workable model
                for cargo examination, stuffing, sealing, port movement, and
                customs acceptance that reduces delay without creating a new
                compliance risk. That is why this page focuses on the actual
                search intent behind keywords like <strong>factory stuffing
                consultant India</strong>, <strong>self sealing permission</strong>,
                <strong>RFID e-seal export</strong>, and{" "}
                <strong>customs self sealing support</strong>.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The objective is to help exporters decide whether they need
                officer-supervised stuffing, whether a self-sealing workflow is
                realistic, what documents are needed, and how to make the
                process commercially usable for repeat export operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Customs-ready process",
                  text: "Operational setup that aligns stuffing, sealing, and export movement with customs expectations."
                },
                {
                  icon: PackageCheck,
                  title: "Lower cargo handling risk",
                  text: "Fewer handoffs between warehouse, CFS, and terminal can reduce damage and control issues."
                },
                {
                  icon: TimerReset,
                  title: "Dispatch efficiency",
                  text: "A structured stuffing model can reduce avoidable shipment-day friction and coordination loss."
                },
                {
                  icon: CircleDollarSign,
                  title: "Commercial clarity",
                  text: "Exporters gain better control over execution cost, timing discipline, and process ownership."
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

          <section id="methods" className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Stuffing Methods
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Two practical routes: officer supervision or self-sealing
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The best route depends on the exporter profile, premises
                control, shipment pattern, and process maturity. Both paths need
                disciplined documentation and a customs-aware execution model.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {STUFFING_MODES.map((mode, index) => (
                <article
                  key={mode.title}
                  className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white">
                      {index + 1}
                    </span>
                    Stuffing route
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {mode.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {mode.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {mode.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                        <p className="text-sm leading-7 text-slate-600">{point}</p>
                      </div>
                    ))}
                  </div>
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
                  Why factory stuffing support matters for serious exporters
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  This is not only about saving a trip to the CFS. It is about
                  building a cleaner export-operating model where loading,
                  sealing, customs control, and shipment timing remain under
                  better commercial discipline.
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
                A step-by-step path from exporter review to stuffing execution
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Searchers comparing factory stuffing consultants usually want the
                real workflow, not just a marketing promise. This process
                section is designed to satisfy that intent while signalling
                topical completeness to Google.
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
                  Government and portal references
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Regulatory service pages perform better when they connect users
                to the governing institutions behind the process. These links
                strengthen trust, support E-E-A-T, and help users cross-check
                the export-control context.
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
                <Ship className="h-7 w-7 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  Related customs and exporter services
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Internal linking matters for crawling, ranking, and topical
                authority. These related services strengthen the export-logistics
                and customs cluster around factory stuffing search intent.
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
                Common questions exporters ask before moving to factory stuffing
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
                  Need a practical factory stuffing and self-sealing roadmap?
                </h2>
                <p className="mt-4 text-base leading-8 text-blue-50">
                  If your team wants help with customs process structuring,
                  stuffing permission strategy, RFID e-seal readiness, or repeat
                  shipment execution discipline, we can help you build a cleaner
                  exporter workflow without weakening compliance.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#eligibility-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Start Eligibility Check
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+917400096950"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Speak to an Expert
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
                Factory stuffing consultant for exporters that need practical
                self-sealing workflow, RFID e-seal support, customs process
                discipline, and shipment execution clarity.
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

export default CloudDeskFactoryStuffing;
