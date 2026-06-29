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
import { MainNavbar } from "../components/CloudDeskAdvanceAuthority/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskEDPMS/ModalEnroll";
import QuickForm from "../components/CloudDeskEDPMS/QuickForm";

const HIGHLIGHTS = [
  "EDPMS consultant India",
  "eBRC generation, IRM mapping, and shipping bill reconciliation support",
  "AD bank follow-up for open export entries, write-off, extension, and closure",
  "RBI, DGFT, and export proceeds compliance support for goods exporters"
];

const BENEFITS = [
  "Helps exporters identify why export proceeds are still open in EDPMS even after inward remittance is received, partially adjusted, or reconciled operationally.",
  "Supports cleaner coordination between exporter records, shipping bills, IRMs, AD bank updates, and DGFT-facing eBRC expectations so benefits and compliance are not lost together.",
  "Reduces caution-list and unresolved-export risk by reviewing unrealised export proceeds, delayed closure, short realisation, extension, write-off, and mapping errors before they become a larger banking problem.",
  "Creates a practical closure path for exporters who need both regulatory clarity and transaction-level follow-up instead of only a surface status check."
];

const USE_CASES = [
  {
    title: "Open shipping bills in EDPMS",
    description:
      "Useful where export proceeds are received but the shipping bill still appears open, unrealised, or unmatched because the IRM was not mapped properly or the AD bank has not updated the case correctly."
  },
  {
    title: "eBRC generation and DGFT linkage confusion",
    description:
      "Relevant where exporters need to understand the difference between EDPMS closure and eBRC generation, or where eBRC expectations are blocked by incomplete bank-side transaction mapping."
  },
  {
    title: "Short realisation, deduction, write-off, or extension",
    description:
      "Applies where export proceeds were received with deductions, only partly received, delayed, written off, or need extension support with the AD bank and documentary reasoning."
  },
  {
    title: "Caution-list and compliance-risk prevention",
    description:
      "Important where exporters want to prevent repeat non-realisation flags, banking restrictions, and unresolved FEMA-facing transaction exposure from building up across multiple shipments."
  }
];

const ELIGIBILITY_POINTS = [
  "Goods exporters with open EDPMS entries, unmatched IRMs, delayed closure, or export proceeds that do not reflect correctly against shipping bills.",
  "Businesses that need support for eBRC-related transaction readiness, especially where DGFT benefit claims or export incentives depend on correct realisation evidence.",
  "Exporters dealing with short realisation, bank charges, third-party remittance structure, extension requests, partial remittance, or write-off treatment.",
  "Companies facing banking follow-up, caution-list concern, or repeated transaction-level reconciliation problems across multiple export shipments."
];

const DOCUMENTS_REQUIRED = [
  "IEC details, shipping bill copies, export invoice set, port details, shipment dates, and the underlying export transaction trail.",
  "FIRC or equivalent inward remittance records, IRM references, bank advice, remittance breakup, deduction details, and realised amount evidence.",
  "Outstanding export bill list, AD bank correspondence, EDPMS screenshots, unrealised bill records, and any caution-list related communication.",
  "DGFT-side eBRC reference points, export incentive dependency details, extension or write-off papers, and any prior explanatory submissions."
];

const PROCESS_STEPS = [
  {
    title: "Transaction diagnosis",
    detail:
      "We begin by identifying whether the case is a straight IRM-mapping issue, a partial-remittance issue, a short-realisation problem, a delayed closure case, or a wider export-compliance risk."
  },
  {
    title: "Shipping bill and remittance reconciliation",
    detail:
      "The shipping bill, inward remittance, invoice values, deductions, and bank-side records are reviewed together so the true mismatch is understood before any follow-up begins."
  },
  {
    title: "AD bank action path",
    detail:
      "We define whether the matter requires bank-side mapping, object-code correction, short-realisation reasoning, extension request, write-off support, or updated transaction closure handling."
  },
  {
    title: "eBRC and downstream export-benefit readiness",
    detail:
      "Where relevant, we review how the transaction closure status affects eBRC availability and broader export incentive workflows tied to DGFT-facing proof of realisation."
  },
  {
    title: "Future transaction tightening",
    detail:
      "The goal is not only closing today’s open entries but improving document flow, bank coordination, and shipment-level discipline for future exports."
  }
];

const TIMELINE_POINTS = [
  "Initial EDPMS issue review usually begins within 1 to 3 working days once shipping bill and remittance records are available.",
  "Simple mapping or record-clarity matters often move faster than extension, write-off, or repeated short-realisation cases.",
  "Bank-side closure timing depends on the quality of exporter records, branch responsiveness, and whether the issue involves correction, explanation, or approval.",
  "Older unresolved export bills and multi-shipment reconciliation cases usually require a longer cleanup cycle than a single current shipment."
];

const COMMON_ISSUES = [
  {
    title: "Payment received but shipping bill still open",
    detail:
      "This often points to missing IRM mapping, incorrect linkage, or incomplete bank-side closure rather than absence of payment itself."
  },
  {
    title: "eBRC expected but records are not transaction-ready",
    detail:
      "Exporters sometimes treat eBRC and EDPMS as the same step, but the underlying bank and shipping-bill alignment still has to be correct."
  },
  {
    title: "Short realisation or deduction is not documented properly",
    detail:
      "Bank charges, partial remittance, exchange variation, or commercial deduction may be commercially understood but not properly reflected in closure records."
  },
  {
    title: "Too many old open entries have accumulated",
    detail:
      "Once unresolved bills pile up, the exporter is no longer solving a single exception and instead needs structured reconciliation and banking follow-up."
  }
];

const FAQS = [
  {
    question: "What is EDPMS in exports?",
    answer:
      "EDPMS is the banking and export-monitoring framework used to track whether export proceeds are realised against shipping bills within the permitted timeline and whether those transactions are closed correctly."
  },
  {
    question: "What is the difference between EDPMS and eBRC?",
    answer:
      "EDPMS is the monitoring and closure framework around export realisation, while eBRC is the DGFT-facing proof or digital evidence of export proceeds realisation used in broader export-benefit contexts."
  },
  {
    question: "Why is my shipping bill still open after payment was received?",
    answer:
      "The most common reasons are IRM mapping gaps, bank-side non-updation, deduction handling issues, short-realisation mismatch, or incomplete transaction-level closure."
  },
  {
    question: "Can EDPMS issues affect export incentives?",
    answer:
      "Yes. If export proceeds are not reflected properly, it can affect eBRC-dependent workflows, broader compliance comfort, and the exporter’s ability to demonstrate clean realisation records."
  },
  {
    question: "Can partial payment or deduction still be closed?",
    answer:
      "Often yes, but the case usually needs correct reasoning, supporting records, and AD bank-side treatment for short realisation, bank charges, or approved adjustment logic."
  },
  {
    question: "When is extension or write-off relevant?",
    answer:
      "Extension is relevant where proceeds are delayed but still expected, while write-off becomes relevant where part or all of the export receivable will not be realised and needs compliant banking treatment."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "Reserve Bank of India",
    href: "https://www.rbi.org.in/"
  },
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
  }
];

const RELATED_LINKS = [
  {
    href: "/services/igst-refund",
    title: "IGST Refund Support",
    description:
      "Useful where export proceeds and banking records sit alongside GST refund dependency, shipping bill accuracy, and broader export-document reconciliation."
  },
  {
    href: "/services/rodtep-scheme",
    title: "RoDTEP Support",
    description:
      "Relevant where exporters need incentive-side guidance together with clean export transaction records and reliable downstream proof of realisation."
  },
  {
    href: "/services/gst-lut-filing",
    title: "GST LUT Filing Support",
    description:
      "Helpful where exporters want cleaner zero-rated export compliance, LUT discipline, and transaction readiness aligned with banking and customs records."
  },
  {
    href: "/services/import-export-code/",
    title: "IEC and DGFT Profile Support",
    description:
      "Important where exporter profile maintenance, DGFT access, and transaction record quality all affect the speed of export-document resolution."
  }
];

const SECTION_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#documents", label: "Documents" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" }
];

const CloudDeskEDPMS = () => {
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
          EDPMS and eBRC Consultant India | Export Proceeds Reconciliation, IRM
          Mapping and AD Bank Closure Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="EDPMS and eBRC consultant in India for export proceeds reconciliation, IRM mapping, open shipping bill closure, short realisation, extension, write-off, AD bank follow-up, and DGFT-linked export compliance support."
        />
        <meta
          name="keywords"
          content="EDPMS consultant India, eBRC consultant India, export proceeds reconciliation, IRM mapping, shipping bill closure, AD bank export compliance, short realisation, EDPMS closure support, eBRC generation support"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/edpms-ebrc" />
        <meta
          property="og:title"
          content="EDPMS and eBRC Consultant India | Export Proceeds Reconciliation Support"
        />
        <meta
          property="og:description"
          content="Get support for EDPMS closure, eBRC readiness, IRM mapping, short realisation, AD bank follow-up, and export proceeds reconciliation."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/edpms-ebrc"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/edpms-ebrc#webpage",
                url: "https://eximinq.in/services/edpms-ebrc",
                name: "EDPMS and eBRC Consultant India | EXIMINQ",
                description:
                  "Support for EDPMS closure, IRM mapping, eBRC readiness, open shipping bill reconciliation, and export proceeds compliance.",
                inLanguage: "en-IN"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://eximinq.in/services/edpms-ebrc#breadcrumb",
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
                    name: "EDPMS and eBRC",
                    item: "https://eximinq.in/services/edpms-ebrc"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/edpms-ebrc#service",
                name: "EDPMS and eBRC Support",
                serviceType: "EDPMS consultant",
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
                  "Support for export proceeds reconciliation, IRM mapping, open shipping bill closure, AD bank follow-up, extension, write-off, and eBRC-linked export compliance workflows."
              },
              {
                "@type": "FAQPage",
                "@id": "https://eximinq.in/services/edpms-ebrc#faq",
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

      <div className="advance-service-page min-h-screen bg-slate-50 text-slate-900">
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
          <section className="advance-service-hero bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_38%),linear-gradient(135deg,#eff6ff_0%,#ffffff_45%,#ecfeff_100%)] pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-8">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  EDPMS, eBRC, IRM Mapping, AD Bank Closure
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                  EDPMS and eBRC Consultant India for Export Proceeds
                  Reconciliation and Shipping Bill Closure
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                  Resolve open export entries, unmatched IRMs, delayed closure,
                  short realisation, extension, write-off, and eBRC-related
                  export compliance issues with a transaction-first support
                  workflow built for Indian exporters.
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
                    Check My EDPMS Status
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                  >
                    Speak With an Export Compliance Expert
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <Phone className="h-4 w-4 text-sky-600" />
                      Call Us
                    </div>
                    <a href="tel:+917400096950" className="hover:text-sky-700">
                      +91 74000 96950
                    </a>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <Mail className="h-4 w-4 text-sky-600" />
                      Email
                    </div>
                    <a
                      href="mailto:clouddesk@eximinq.in"
                      className="hover:text-sky-700"
                    >
                      clouddesk@eximinq.in
                    </a>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <MapPin className="h-4 w-4 text-sky-600" />
                      Coverage
                    </div>
                    <p>India-wide exporter support for DGFT, banking, and customs-linked reconciliation matters.</p>
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
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
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
                  Why exporters search for EDPMS closure and eBRC support
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Exporters usually discover EDPMS problems only after a
                    shipment is commercially complete but the banking trail is
                    still unresolved. Payment may have arrived, but the shipping
                    bill remains open, the inward remittance is not mapped
                    correctly, the deduction logic is unclear, or the exporter
                    realises that eBRC expectations depend on cleaner
                    transaction-level reconciliation than operations assumed.
                  </p>
                  <p>
                    This page is built to rank for high-intent searches around{" "}
                    <strong>EDPMS consultant India</strong>,{" "}
                    <strong>eBRC support</strong>,{" "}
                    <strong>shipping bill closure</strong>,{" "}
                    <strong>IRM mapping</strong>,{" "}
                    <strong>short realisation</strong>, and{" "}
                    <strong>AD bank export compliance</strong> because those are
                    the real business situations exporters face.
                  </p>
                  <p>
                    It also serves commercial and compliance intent at the same
                    time. Users searching for EDPMS are not always looking for a
                    definition. They are often looking for a resolution path
                    that covers bank follow-up, documentary logic, export
                    proceeds closure, extension, write-off, and DGFT-facing
                    readiness.
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
                    Clear closure logic for open entries, cleaner bank
                    coordination, lower caution-list risk, and stronger export
                    proceeds documentation for future shipments.
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
                    EDPMS closure, eBRC generation support, IRM mapping, export
                    proceeds reconciliation, extension, write-off, unrealised
                    bills, and AD bank follow-up.
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
                    The page uses practical exporter problems, transaction-level
                    workflow explanations, official references, and related
                    service links to improve expertise and trust signals.
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
                  These use cases expand the page beyond a thin service pitch and
                  align it to the different ways exporters actually search for
                  EDPMS and eBRC help.
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
                  This section is written to capture both search relevance and
                  decision-stage clarity for exporters comparing whether this
                  support is actually for their case.
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
                  Stronger documentation depth improves user usefulness and also
                  makes the page more complete for Google’s indexing systems.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-start gap-3">
                      <FileCheck2 className="mt-1 h-5 w-5 flex-none text-sky-600" />
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
                  Process flow for EDPMS closure and eBRC support
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  A defined process section helps both users and search engines
                  understand the workflow depth behind the service.
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
                    the page inside the correct export, banking, DGFT, and
                    customs context.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {GOVERNMENT_REFERENCES.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
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
                  Internal links help Google understand that this page belongs to
                  a broader export compliance and incentive ecosystem, not an
                  isolated thin page.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {RELATED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-sky-50 p-3 text-sky-700">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-sky-700">
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
                  Frequently asked questions on EDPMS and eBRC
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  FAQ depth improves long-tail coverage and supports potential
                  rich-result interpretation when Google decides to use it.
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

          <section className="bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_55%,#0f766e_100%)] py-16 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  <Sparkles className="h-4 w-4" />
                  Ready to reconcile open export entries?
                </div>
                <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
                  Get structured support for EDPMS closure, eBRC readiness,
                  shipping bill reconciliation, and AD bank follow-up.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                  If you are dealing with unrealised export bills, open entries,
                  remittance mapping issues, short realisation, or pending
                  banking closure, we can help you build a cleaner path forward.
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
                  Book an EDPMS Review
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

export default CloudDeskEDPMS;
