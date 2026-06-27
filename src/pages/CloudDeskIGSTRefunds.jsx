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
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIGSTRefunds/MainNavbar";
import QuickForm from "../components/CloudDeskIGSTRefunds/QuickForm";

const HIGHLIGHTS = [
  "IGST refund consultant India",
  "Shipping bill, GSTR-1, GSTR-3B, and ICEGATE mismatch support",
  "SB005, SB006, PFMS, EGM, and refund scroll issue handling",
  "Export refund recovery, withholding review, and compliance support"
];

const BENEFITS = [
  "Reduces refund delays caused by invoice mismatch, shipping bill errors, GSTR transmission issues, PFMS validation failures, and EGM-related problems.",
  "Helps exporters align GST return data, customs data, bank validation, and ICEGATE processing so refund recovery becomes faster and more predictable.",
  "Supports stuck refund analysis where businesses do not just need a status check, but need a document-led resolution path.",
  "Improves cash-flow recovery for exporters whose working capital is blocked because IGST refunds are withheld, rejected, or not transmitted correctly."
];

const ELIGIBILITY_POINTS = [
  "Exporters who shipped goods on payment of IGST and are waiting for automatic refund credit linked to shipping bill and GST return data.",
  "Businesses facing error codes such as SB005, SB006, PFMS rejection, EGM mismatch, invoice mismatch, invalid bank account mapping, or scroll-generation delay.",
  "Exporters that need help reconciling GSTR-1, GSTR-3B, shipping bill, port code, bank account, and ICEGATE refund status records.",
  "Businesses whose IGST refund is stuck, withheld, partially processed, or not reflected despite export completion and tax payment."
];

const DOCUMENTS_REQUIRED = [
  "Shipping bill details, shipping bill date, port code, invoice numbers, EGM details where available, and exporter transaction records.",
  "GSTR-1 and GSTR-3B filing details, IGST payment records, export invoice data, and any amendment history relevant to the refund mismatch.",
  "Bank account details, PFMS validation status, cancelled cheque or account proof where revalidation is required, and ICEGATE-linked account mapping records.",
  "Refund status screenshots, error-code screenshots, officer communication, scroll status details, and any corrective filing records already completed."
];

const PROCESS_STEPS = [
  {
    title: "Refund-status and mismatch diagnosis",
    detail:
      "We begin by identifying whether the issue is driven by GST return mismatch, shipping bill data error, EGM issue, PFMS rejection, refund scroll delay, or officer-side withholding."
  },
  {
    title: "Data reconciliation across GST and customs",
    detail:
      "The shipping bill, invoice, GSTR-1, GSTR-3B, port code, and bank details are checked together so the true blockage point is identified before corrective action."
  },
  {
    title: "Correction-path planning",
    detail:
      "We define the practical route: amendment, revalidation, ICEGATE correction, GST-side correction, supporting representation, or transaction-level documentation clean-up."
  },
  {
    title: "Follow-up and submission support",
    detail:
      "Where required, we support filing steps, supporting explanations, record submission, and structured follow-up with the relevant customs or GST touchpoint."
  },
  {
    title: "Recovery and future-risk reduction",
    detail:
      "The longer-term goal is not only current recovery but also better shipping bill discipline, GST filing accuracy, and refund-readiness for future export cycles."
  }
];

const TIMELINE_POINTS = [
  "Initial refund review and mismatch diagnosis: typically 1 to 3 working days depending on record availability.",
  "Reconciliation and correction-path planning: usually 2 to 5 working days once GST, customs, and bank records are complete.",
  "Resolution timeline varies based on whether the issue is system-led, amendment-led, PFMS-related, carrier-led, or requires officer-side intervention.",
  "Older pending refunds, repeated mismatch cases, and incomplete record trails can increase recovery time significantly."
];

const COMMON_ISSUES = [
  {
    code: "SB005",
    title: "Invoice mismatch",
    detail:
      "Invoice number, taxable value, or IGST amount does not match between shipping bill data and GST return data."
  },
  {
    code: "SB006",
    title: "EGM issue",
    detail:
      "Export General Manifest not filed correctly or shipment movement data is not aligned for automatic refund processing."
  },
  {
    code: "PFMS",
    title: "Bank validation failure",
    detail:
      "Bank account name, IFSC, or account validation fails, preventing refund credit even if the refund scroll is generated."
  },
  {
    code: "Scroll delay",
    title: "Refund not processed further",
    detail:
      "Data may be transmitted, but refund scroll generation, credit sequencing, or transmission continuity is delayed or interrupted."
  }
];

const FAQS = [
  {
    question: "What is IGST refund on exports?",
    answer:
      "IGST refund on exports is the refund of integrated tax paid on export of goods where the exporter has exported on payment of IGST and the shipping bill operates as the refund application under the applicable rule framework."
  },
  {
    question: "Why does an IGST refund get stuck?",
    answer:
      "Refunds commonly get stuck because of mismatch between GSTR-1 and shipping bill data, GSTR-3B issues, EGM problems, PFMS rejection, bank validation failure, invoice mismatch, or delayed transmission between GSTN and ICEGATE."
  },
  {
    question: "What is SB005 in IGST refund?",
    answer:
      "SB005 generally points to invoice mismatch between shipping bill details and GST return data. Even small inconsistencies in invoice number, taxable value, or IGST amount can block automatic processing."
  },
  {
    question: "Can IGST refund be recovered if it is already withheld?",
    answer:
      "Yes, many stuck or withheld cases can be recovered, but the resolution path depends on the exact reason for blockage, the quality of records, and whether correction is required on GST, customs, bank, or shipping data."
  },
  {
    question: "What records matter most in refund recovery?",
    answer:
      "Shipping bill details, GSTR-1, GSTR-3B, invoice records, EGM status, bank validation records, and ICEGATE or GST status evidence are usually the most important starting documents."
  },
  {
    question: "Why can this page rank for IGST refund keywords?",
    answer:
      "Because it is built around actual exporter search intent: refund eligibility, mismatch causes, error codes, shipping bill linkage, GST-ICEGATE reconciliation, timelines, official references, and practical recovery steps."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "CBIC Circular No. 131/1/2020-GST",
    href: "https://cbic-gst.gov.in/pdf/circular-131-1-2020-gst.pdf"
  },
  {
    label: "GST Portal advisory on refund process and transmission issues",
    href: "https://tutorial.gst.gov.in/downloads/news/igst_refunds_advisory_final_10th_june_2020.pdf"
  },
  {
    label: "ICEGATE Guidelines and advisories",
    href: "https://www.icegate.gov.in/guidelines"
  },
  {
    label: "CBIC Manual and Rules for export refund framework",
    href: "https://taxinformation.cbic.gov.in/view-pdf/1008021/ENG/Rules"
  },
  {
    label: "GST law and rules portal",
    href: "https://cbic-gst.gov.in/gst-goods-services-rates.html"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/gst-lut-filing",
    title: "GST LUT Filing Support",
    description:
      "Useful for exporters comparing refund-with-payment routes and LUT-based export compliance workflows."
  },
  {
    href: "/services/shipping-bill-filing",
    title: "Shipping Bill Filing Support",
    description:
      "Relevant where refund blockage is linked to shipping bill data quality, port code accuracy, or customs filing discipline."
  },
  {
    href: "/services/edpms-ebrc",
    title: "EDPMS and eBRC Support",
    description:
      "Helpful where refund and export-realisation records need to be reviewed together for broader export compliance."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Useful for businesses that want to identify recurring GST-customs process weaknesses causing refund delays."
  }
];

const CloudDeskIGSTRefunds = () => {
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
          IGST Refund Consultant India | Export Refund Recovery, Shipping Bill
          and GST Mismatch Resolution | EXIMINQ
        </title>
        <meta
          name="description"
          content="IGST refund consultant in India for export refund recovery, shipping bill and GST mismatch resolution, SB005, SB006, PFMS, EGM issues, refund scroll delays, ICEGATE coordination, and stuck IGST refund support."
        />
        <meta
          name="keywords"
          content="igst refund consultant India, igst refund export, shipping bill mismatch refund, SB005 error solution, SB006 refund issue, PFMS refund rejection, stuck igst refund, icegate igst refund support"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/igst-refund" />
        <meta
          property="og:title"
          content="IGST Refund Consultant India | Export Refund Recovery and Mismatch Resolution"
        />
        <meta
          property="og:description"
          content="Get expert support for stuck IGST export refunds, shipping bill and GST mismatch correction, PFMS validation issues, EGM errors, and refund recovery."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/igst-refund"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/igst-refund",
                url: "https://eximinq.in/services/igst-refund",
                name: "IGST Refund Consultant India | Export Refund Recovery, Shipping Bill and GST Mismatch Resolution | EXIMINQ",
                description:
                  "IGST refund consultant in India for export refund recovery, shipping bill and GST mismatch resolution, SB005, SB006, PFMS, EGM issues, refund scroll delays, ICEGATE coordination, and stuck IGST refund support.",
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
                    name: "IGST Refund",
                    item: "https://eximinq.in/services/igst-refund"
                  }
                ]
              },
              {
                "@type": "Service",
                serviceType: "IGST refund recovery and export mismatch resolution",
                name: "IGST Refund Consultant India",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: "India",
                url: "https://eximinq.in/services/igst-refund",
                description:
                  "Consulting support for IGST export refund recovery, shipping bill and GST mismatch correction, PFMS issues, EGM issues, refund status analysis, and ICEGATE-linked refund support."
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
                Export Refund Recovery
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                IGST Refund Consultant India for Export Refund Recovery and
                Shipping Bill Mismatch Resolution
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/95">
                We help exporters recover stuck IGST refunds by diagnosing
                shipping bill mismatch, GSTR-1 and GSTR-3B transmission issues,
                PFMS rejection, EGM problems, refund scroll delays, and
                ICEGATE-linked refund blockages.
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
                  Check Refund Case
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
              ["#issues", "Common Issues"],
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
                A current SEO page for exporters trying to recover stuck IGST refunds
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Searchers looking for an <strong>IGST refund consultant</strong>{" "}
                  are usually not looking for a textbook explanation. They want
                  to know why the refund is blocked, whether the problem sits in
                  shipping bill data, GSTR filing, bank validation, EGM status,
                  or ICEGATE transmission, and what steps actually unlock the
                  money.
                </p>
                <p>
                  This page is written around that real search intent. It
                  combines eligibility, process, timelines, common error
                  patterns, official references, and practical recovery logic so
                  the content is more useful for exporters and stronger for
                  Google indexing and ranking.
                </p>
                <p>
                  Instead of remaining a narrow error-code page, it now targets
                  broader commercial intent around export refund recovery, GST
                  and customs reconciliation, working-capital release, and
                  future refund-readiness.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: ReceiptText,
                  title: "Refund recovery intent",
                  text: "Built for exporters who need blocked money released, not just a generic refund explanation."
                },
                {
                  icon: Landmark,
                  title: "GST and customs linkage",
                  text: "Explains how shipping bill, GST returns, bank validation, and ICEGATE transmission work together in refund processing."
                },
                {
                  icon: ClipboardCheck,
                  title: "Mismatch-resolution focus",
                  text: "Covers practical issue resolution across SB005, SB006, PFMS, EGM, and scroll-related delays."
                },
                {
                  icon: ShieldCheck,
                  title: "Trust and indexability",
                  text: "Adds stronger metadata, FAQ schema, breadcrumb schema, and official-reference-backed content depth."
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
                Why exporters pursue structured IGST refund recovery support
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <CheckCircle2 className="text-emerald-600" size={22} />
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="issues" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Common Issues
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Typical reasons an IGST export refund gets stuck
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {COMMON_ISSUES.map((issue) => (
                <div
                  key={issue.code}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                      {issue.code}
                    </span>
                    <Target className="text-blue-700" size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {issue.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {issue.detail}
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
                Who should review IGST refund status right now
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                This page is aimed at businesses that already exported on
                payment of IGST and need clarity on refund blockages, mismatch
                reasons, correction routes, and actual recovery strategy.
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
                Typical resolution flow
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
                How we handle IGST refund diagnosis and recovery support
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
              Government references that strengthen accuracy and E-E-A-T
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This page is intentionally aligned with official GST, CBIC, and
              ICEGATE resources so exporters and search engines both see a
              trustworthy, current, and practically useful refund-recovery page.
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
                  Internal linking helps Google understand that IGST refund
                  recovery connects with GST compliance, shipping bill quality,
                  export documentation, and wider trade compliance workflows.
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
                Common search questions around IGST refund on exports
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
                  Want a practical review of your stuck IGST refund case?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
                  We help exporters move from status confusion to a usable
                  refund-recovery strategy. If your team needs mismatch
                  diagnosis, correction-path guidance, or refund escalation
                  support, we can review the case and define the next action
                  path.
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
                    text: "Exporters with automatic refund blockage, invoice mismatch, PFMS rejection, EGM issues, or scroll delay."
                  },
                  {
                    icon: ReceiptText,
                    label: "Search intent covered",
                    text: "IGST refund, export refund recovery, SB005 solution, shipping bill mismatch, PFMS validation, and ICEGATE refund support."
                  },
                  {
                    icon: Target,
                    label: "Value delivered",
                    text: "Stronger diagnosis, faster corrective action, and reduced future refund disruption through better filing discipline."
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
                Export consulting support for DGFT, customs, GST, refund
                recovery, and implementation-heavy trade operations across
                India.
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
                  <span>India-focused GST and export refund consulting support</span>
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

export default CloudDeskIGSTRefunds;
