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
  FileCheck2,
  FileSearch,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskERCMC/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskERCMC/ModalEnroll";
import QuickForm from "../components/CloudDeskERCMC/QuickForm";

const HIGHLIGHTS = [
  "e-RCMC consultant India",
  "DGFT e-RCMC filing, EPC mapping, and council-membership support",
  "FIEO, APEDA, EEPC, CHEMEXCIL, SEPC, and product-to-council guidance",
  "RCMC validity, renewal, subscription, and export-benefit readiness support"
];

const BENEFITS = [
  "Helps exporters identify the correct Export Promotion Council or Commodity Board instead of filing with the wrong body and losing time in application correction cycles.",
  "Supports DGFT portal filing, council-side documentation, membership logic, and product-to-council mapping so the e-RCMC is not treated like a basic one-click formality.",
  "Improves readiness for export benefits, status planning, and downstream DGFT workflows where a valid RCMC is often expected before real commercial usage begins.",
  "Reduces confusion around multi-product exports, FIEO versus sector-specific councils, renewal timelines, subscription continuity, and invalid-profile rejection risk."
];

const USE_CASES = [
  {
    title: "New exporter applying for first e-RCMC",
    description:
      "Useful for first-time exporters who already have an IEC and now need the correct council membership path, digital filing support, and a clear understanding of which product category drives the application."
  },
  {
    title: "Wrong EPC or product-council mismatch",
    description:
      "Relevant where the exporter is unsure whether APEDA, FIEO, EEPC, CHEMEXCIL, SEPC, Spices Board, or another council is the right fit based on actual export products and business model."
  },
  {
    title: "Multi-product or trader-exporter structure",
    description:
      "Important where one business handles more than one product category and needs advice on whether to hold multiple sectoral RCMCs or use a broader multi-product membership route."
  },
  {
    title: "Renewal, validity, or benefit-readiness concerns",
    description:
      "Useful where the issue is not first registration but renewal, annual subscription continuity, or ensuring a valid RCMC remains aligned with export incentive and DGFT usage requirements."
  }
];

const ELIGIBILITY_POINTS = [
  "Businesses with an active IEC that need e-RCMC registration through the correct Export Promotion Council or Commodity Board.",
  "Manufacturers, merchant exporters, and trader exporters who want to align product categories with the correct council before filing digitally on the DGFT system.",
  "Exporters preparing for DGFT benefit-linked workflows where a valid RCMC supports credibility, compliance, and operational continuity.",
  "Companies with multi-product export exposure, renewal needs, council-switch questions, or unclear membership structure across product lines."
];

const DOCUMENTS_REQUIRED = [
  "Active IEC details, entity information, product profile, GST registration details where applicable, and exporter identity records used in DGFT profile validation.",
  "Product description, HSN-based product positioning, export category details, and any supporting information needed to determine the correct EPC or board.",
  "Digital Signature or portal access readiness where required, turnover evidence if council fee structure or slab planning depends on business size, and prior membership history if renewal is involved.",
  "Any council communication, previous RCMC copy, rejection or deficiency messages, and subscription-related records for amendment, renewal, or correction cases."
];

const PROCESS_STEPS = [
  {
    title: "Council and product mapping review",
    detail:
      "We begin by reviewing the exporter’s product mix, export model, and DGFT profile so the correct Export Promotion Council or board path is identified before filing."
  },
  {
    title: "IEC and profile readiness check",
    detail:
      "The exporter’s base profile is checked to confirm whether the IEC and related details are in a condition that supports clean e-RCMC application movement."
  },
  {
    title: "Application and membership filing support",
    detail:
      "We support the DGFT-facing filing logic together with the council-membership side so the application is not approached as a disconnected portal exercise."
  },
  {
    title: "Deficiency response or correction",
    detail:
      "If the case involves product mismatch, missing information, renewal friction, or approval-side issues, the focus shifts to clarification and correction support."
  },
  {
    title: "Post-approval readiness",
    detail:
      "After approval, the objective is to ensure the exporter understands validity, annual membership expectations, and where the RCMC matters in related DGFT benefit workflows."
  }
];

const TIMELINE_POINTS = [
  "Initial council-identification and document review usually begins within 1 to 3 working days once the exporter’s product and profile records are shared.",
  "Straightforward first-time filings typically move faster than multi-product, mismatch, or correction-led matters.",
  "Approval timing depends on the relevant council, record quality, product clarity, and whether any council-side clarification is triggered.",
  "Renewal or amendment matters may be faster than new registrations unless there are unresolved subscription, profile, or mapping issues."
];

const COMMON_ISSUES = [
  {
    title: "Exporter is unsure which council applies",
    detail:
      "This is one of the biggest real-world search intents behind e-RCMC queries because the filing path depends on actual product and business structure, not just on the exporter’s broad industry label."
  },
  {
    title: "IEC exists, but profile readiness is weak",
    detail:
      "An IEC alone is not enough if the profile details, product positioning, or supporting records are not in a condition that supports clean filing."
  },
  {
    title: "Multi-product exports create council ambiguity",
    detail:
      "The exporter may need to decide between FIEO and sector-specific councils, or between a single route and multiple memberships, depending on commercial reality."
  },
  {
    title: "RCMC is treated only as a certificate, not a workflow asset",
    detail:
      "Businesses often underestimate how RCMC validity, membership continuity, and council selection affect later benefit use and export operations."
  }
];

const FAQS = [
  {
    question: "What is e-RCMC?",
    answer:
      "e-RCMC is the digital Registration Cum Membership Certificate workflow through which an exporter obtains membership with the relevant Export Promotion Council or Commodity Board under the DGFT framework."
  },
  {
    question: "Is RCMC mandatory for every exporter?",
    answer:
      "Not every export shipment stops without it, but a valid RCMC is often important where exporters want to align themselves properly with DGFT benefit-linked and council-linked workflows."
  },
  {
    question: "Can I apply for e-RCMC without an IEC?",
    answer:
      "No. A valid and active IEC is the base requirement because the e-RCMC process depends on exporter profile identity already existing within the DGFT ecosystem."
  },
  {
    question: "How do I know which EPC or board is correct?",
    answer:
      "The right council depends on your actual product category, export model, and whether you are better served by a sector-specific body or a broader multi-product route such as FIEO."
  },
  {
    question: "How long is an e-RCMC valid?",
    answer:
      "Validity generally follows the policy and council framework in force, but exporters should separately pay attention to annual membership and subscription continuity so the certificate remains operationally useful."
  },
  {
    question: "Can one exporter need more than one RCMC?",
    answer:
      "Yes, depending on the product mix, council-specific positioning, and whether the exporter uses multiple sectoral categories that make separate membership commercially or procedurally sensible."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "DGFT e-RCMC Resources",
    href: "https://www.dgft.gov.in/CP/?opt=e-rcmc"
  },
  {
    label: "Ministry of Commerce and Industry",
    href: "https://www.commerce.gov.in/"
  },
  {
    label: "FIEO",
    href: "https://www.fieo.org/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/import-export-code/",
    title: "IEC Registration Support",
    description:
      "Useful because IEC readiness is the foundation for e-RCMC filing and exporter identity on the DGFT side."
  },
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Relevant where exporters want RCMC readiness aligned with broader DGFT benefit usage and scheme planning."
  },
  {
    href: "/services/rodtep-scheme",
    title: "RoDTEP Support",
    description:
      "Helpful where exporters are preparing for incentive-linked workflows and want the right compliance groundwork around council registration."
  },
  {
    href: "/services/star-export-house",
    title: "Star Export House Support",
    description:
      "Important for exporters planning long-term DGFT positioning, recognition, and structured export-growth support."
  }
];

const SECTION_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#documents", label: "Documents" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" }
];

const CloudDeskERCMC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: ""
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>
          e-RCMC Consultant India | DGFT Registration, EPC Mapping and Export
          Promotion Council Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="e-RCMC consultant in India for DGFT registration, EPC mapping, FIEO and sectoral council selection, renewal, validity, annual subscription, multi-product exporter support, and export benefit readiness."
        />
        <meta
          name="keywords"
          content="e-RCMC consultant India, RCMC registration India, DGFT e-RCMC registration, EPC mapping consultant, FIEO RCMC, APEDA RCMC, EEPC RCMC, export promotion council registration, RCMC renewal support"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/e-rcmc-registration"
        />
        <meta
          property="og:title"
          content="e-RCMC Consultant India | DGFT Registration and EPC Mapping Support"
        />
        <meta
          property="og:description"
          content="Get support for e-RCMC registration, DGFT filing, correct EPC selection, FIEO and council mapping, renewal, and export benefit readiness."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/e-rcmc-registration"
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
                  "https://eximinq.in/services/e-rcmc-registration#webpage",
                url: "https://eximinq.in/services/e-rcmc-registration",
                name: "e-RCMC Consultant India | EXIMINQ",
                description:
                  "Support for DGFT e-RCMC registration, EPC mapping, council selection, renewal, and export benefit readiness.",
                inLanguage: "en-IN"
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://eximinq.in/services/e-rcmc-registration#breadcrumb",
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
                    name: "e-RCMC Registration",
                    item: "https://eximinq.in/services/e-rcmc-registration"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id":
                  "https://eximinq.in/services/e-rcmc-registration#service",
                name: "e-RCMC Registration Support",
                serviceType: "e-RCMC consultant",
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
                  "Support for DGFT e-RCMC registration, Export Promotion Council mapping, product-to-council identification, renewal, subscription continuity, and export benefit readiness."
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://eximinq.in/services/e-rcmc-registration#faq",
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
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setShowEnrollModal={setShowEnrollModal}
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          onSubmit={handleEnrollmentSubmit}
        />

        <main className="overflow-hidden">
          <section className="bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_38%),linear-gradient(135deg,#f0fdf4_0%,#ffffff_45%,#eff6ff_100%)] pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-8">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  DGFT e-RCMC, EPC Mapping, FIEO and Sectoral Council Support
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                  e-RCMC Consultant India for DGFT Registration and Export
                  Promotion Council Mapping
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                  Get structured support for e-RCMC registration, correct EPC
                  selection, DGFT filing, renewal, subscription continuity, and
                  export-benefit readiness across India.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {HIGHLIGHTS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#quick-check"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                  >
                    Find the Right Council
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Speak With an e-RCMC Expert
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <Phone className="h-4 w-4 text-emerald-600" />
                      Call Us
                    </div>
                    <a href="tel:+917400096950" className="hover:text-emerald-700">
                      +91 74000 96950
                    </a>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <Mail className="h-4 w-4 text-emerald-600" />
                      Email
                    </div>
                    <a
                      href="mailto:clouddesk@eximinq.in"
                      className="hover:text-emerald-700"
                    >
                      clouddesk@eximinq.in
                    </a>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      Coverage
                    </div>
                    <p>India-wide support for DGFT e-RCMC, EPC selection, and renewal workflows.</p>
                  </div>
                </div>
              </div>

              <div id="quick-check" className="self-start">
                <div className="rounded-[28px] border border-slate-200 bg-white/95 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                  <QuickForm />
                </div>
              </div>
            </div>
          </section>

          <section className="sticky top-[76px] z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 md:px-8">
              {SECTION_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section id="overview" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                  <Target className="h-4 w-4" />
                  Service Overview
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Why exporters search for e-RCMC registration support
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Exporters usually reach this page when they already know that
                    an IEC alone is not enough for their next stage of trade
                    growth. They need the right council relationship, the right
                    product mapping, and a valid DGFT-facing e-RCMC path that
                    supports export benefits, policy workflows, and long-term
                    exporter positioning.
                  </p>
                  <p>
                    This page is built to rank for high-intent searches around{" "}
                    <strong>e-RCMC consultant India</strong>,{" "}
                    <strong>RCMC registration</strong>,{" "}
                    <strong>DGFT e-RCMC</strong>,{" "}
                    <strong>EPC mapping</strong>,{" "}
                    <strong>FIEO RCMC</strong>, and{" "}
                    <strong>APEDA or EEPC council selection</strong> because
                    those are the real exporter decisions behind the query.
                  </p>
                  <p>
                    It also addresses the deeper commercial question: not just
                    how to obtain the certificate, but how to choose the correct
                    council structure so the business does not lose time, pay the
                    wrong membership, or weaken its benefit readiness later.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.18em]">
                      Outcome Focus
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-emerald-900">
                    Correct council identification, cleaner DGFT filing, lower
                    rejection risk, and better alignment with downstream export
                    benefit and compliance workflows.
                  </p>
                </div>
                <div className="rounded-[28px] border border-sky-200 bg-sky-50 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3 text-sky-700">
                    <Landmark className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.18em]">
                      Search Intent Covered
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-sky-900">
                    e-RCMC registration, RCMC renewal, council selection, FIEO
                    versus sectoral EPC, product mapping, subscription continuity,
                    and exporter benefit readiness.
                  </p>
                </div>
                <div className="rounded-[28px] border border-violet-200 bg-violet-50 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3 text-violet-700">
                    <BookOpenCheck className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.18em]">
                      E-E-A-T Angle
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-violet-900">
                    The page uses practical exporter decision points, official
                    references, and related DGFT service links to improve
                    expertise and trust signals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  What this page helps exporters solve
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  These use cases make the page more complete for both real users
                  and Google’s indexing systems.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {USE_CASES.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Use Case
                    </div>
                    <h3 className="text-xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                  <BadgeCheck className="h-4 w-4" />
                  Key Benefits
                </div>
                <div className="space-y-4">
                  {BENEFITS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-600" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-700">
                  <FileSearch className="h-4 w-4" />
                  Common Problems
                </div>
                <div className="space-y-5">
                  {COMMON_ISSUES.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="eligibility" className="bg-slate-950 py-16 text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Eligibility and ideal fit
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  This section captures decision-stage user intent and strengthens
                  the page’s topical completeness.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="documents" className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Documents and records typically required
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Deeper document coverage improves usefulness and makes the page
                  more complete for indexation.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-start gap-3">
                      <FileCheck2 className="mt-1 h-5 w-5 flex-none text-emerald-600" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Process flow for e-RCMC registration and council mapping
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  A clear process section helps users and search engines
                  understand the actual service workflow.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-5">
                {PROCESS_STEPS.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-black text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    <CalendarClock className="h-4 w-4" />
                    Expected Timelines
                  </div>
                  <div className="space-y-4">
                    {TIMELINE_POINTS.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <ReceiptText className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                        <p className="text-sm leading-7 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    <ClipboardCheck className="h-4 w-4" />
                    Government and ecosystem references
                  </div>
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    Official reference links strengthen trust and help position
                    the page inside the correct DGFT and export ecosystem.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {GOVERNMENT_REFERENCES.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Related services that strengthen this page’s internal SEO cluster
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Internal linking helps Google understand that this page belongs
                  to a wider DGFT and exporter-readiness service cluster.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {RELATED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-emerald-50 p-3 text-emerald-700">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-emerald-700">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="faqs" className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-4 md:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Frequently asked questions on e-RCMC registration
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  FAQ depth improves long-tail coverage and supports stronger
                  semantic understanding.
                </p>
              </div>
              <div className="space-y-5">
                {FAQS.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm"
                  >
                    <h3 className="text-lg font-black text-slate-950">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[linear-gradient(135deg,#022c22_0%,#065f46_55%,#1d4ed8_100%)] py-16 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  <Sparkles className="h-4 w-4" />
                  Ready to identify the correct council?
                </div>
                <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
                  Get structured support for e-RCMC registration, council
                  selection, renewal, and export benefit readiness.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                  If you are unsure which EPC applies, need a clean DGFT filing
                  path, or want to keep your RCMC aligned with your export plans,
                  we can help you move faster with fewer corrections.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                <a
                  href="tel:+917400096950"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  Call +91 74000 96950
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  Book an e-RCMC Review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CloudDeskERCMC;
