import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Landmark,
  ScrollText,
  FileSearch,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Building2,
  Ship,
  BookOpenCheck,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";
import AuditComplianceForm from "../components/CloudDeskComplianceAudit/auditcomplianceform";

const AUDIT_KEY_POINTS = [
  "Transactional compliance audit for import, export, DGFT, customs, and refund workflows.",
  "Risk review across EPCG, Advance Authorisation, IGST refunds, duty drawback, e-BRC and shipping-bill data.",
  "Early detection of exposure before post-clearance audit, recovery notices, or licence-closure disputes escalate.",
  "Execution support after audit findings so corrective filings, closures, and representations can move quickly."
];

const AUDIT_AREAS = [
  {
    title: "EPCG Compliance Audit",
    icon: ShieldCheck,
    description:
      "Review EPCG imports, installation evidence, export obligation tracking, block-wise fulfilment, APR status, and redemption readiness before closure risks turn into duty demand."
  },
  {
    title: "Advance Authorisation Audit",
    icon: FileSearch,
    description:
      "Validate SION usage, input-output linkage, by-product accounting, export obligation support, EODC readiness, and closure gaps that can trigger duty clawback."
  },
  {
    title: "IGST and EGM Refund Audit",
    icon: CircleDollarSign,
    description:
      "Trace stuck IGST refunds, shipping-bill mismatch errors, invoice transmission issues, EGM breaks, and gateway errors that delay or block export refund realisation."
  },
  {
    title: "Duty Drawback Audit",
    icon: ScrollText,
    description:
      "Check drawback eligibility, rate usage, section selection, BRC and e-BRC matching, and refund recovery risk where customs may question past claims."
  },
  {
    title: "DGFT and Documentation Readiness",
    icon: BookOpenCheck,
    description:
      "Assess whether the licence file, authorisations, annexures, supporting records, and portal-side evidence are complete enough for closure, amendment, or departmental review."
  },
  {
    title: "Customs and Post-Clearance Exposure Review",
    icon: Ship,
    description:
      "Identify patterns that may attract customs scrutiny, including valuation issues, licence misuse, ineligible benefit claims, classification dependencies, or unresolved reconciliation gaps."
  }
];

const AUDIT_BENEFITS = [
  "Reduces the risk of show cause notices, refund recovery, export-obligation default, and delayed redemptions.",
  "Creates a clear gap list so corrective filings and representations can be prioritised before enforcement pressure builds.",
  "Improves board-level visibility for import-export compliance, contingent liability, and unresolved incentive exposure.",
  "Supports cleaner documentation for DGFT, ICEGATE, customs, bank, and audit-facing workflows."
];

const AUDIT_ELIGIBILITY = [
  "Exporters or importers with active EPCG, Advance Authorisation, IGST refund, duty drawback, or licence-closure exposure.",
  "Businesses facing pending redemptions, blocked refunds, mismatched shipping-bill data, or incomplete DGFT support records.",
  "Companies preparing for internal review, external audit, customs queries, or portfolio clean-up before a transaction, merger, or funding round.",
  "Teams that want a preventive compliance health check instead of waiting for a notice, audit memo, or recovery demand."
];

const AUDIT_DOCUMENTS = [
  "Authorisations, licences, redemption history, amendments, extension records, and obligation-tracking sheets.",
  "Shipping bills, bills of entry, invoice sets, e-BRC or BRC status, GSTR data, scroll references, and refund support documents.",
  "Consumption and production linkage records, installation certificates, APR support, bank communication, and reconciliation files.",
  "Prior notices, deficiency letters, internal working papers, representation drafts, and unresolved portal-error evidence."
];

const AUDIT_PROCESS = [
  {
    title: "Portfolio intake",
    detail:
      "We map the schemes, licences, refund buckets, and risk areas that matter most across the client's import-export history."
  },
  {
    title: "Data and document diagnostic",
    detail:
      "Core records are reviewed for missing support, mismatch patterns, unclosed obligations, refund blocks, and audit-trigger indicators."
  },
  {
    title: "Issue classification",
    detail:
      "Each gap is organised into operational, documentary, portal, customs, or DGFT risk so remediation can be prioritised correctly."
  },
  {
    title: "Corrective action roadmap",
    detail:
      "The client receives a practical closure plan that can include filings, reconciliations, representations, amendments, or strategic clean-up."
  },
  {
    title: "Execution support",
    detail:
      "Where needed, the audit is followed by service execution on closures, refund correction, representations, or licence regularisation."
  }
];

const AUDIT_FAQS = [
  {
    question: "What is an import-export compliance audit?",
    answer:
      "An import-export compliance audit is a structured review of customs, DGFT, export incentive, refund, and supporting documentation records to identify gaps, liabilities, or closure risks before regulators or counterparties raise them."
  },
  {
    question: "When should a business get a compliance audit done?",
    answer:
      "The right time is before redemption, before a notice, before a refund escalates into recovery, or whenever management wants visibility into unresolved trade-compliance exposure."
  },
  {
    question: "Does this audit only cover EPCG and Advance Authorisation?",
    answer:
      "No. The scope can include EPCG, Advance Authorisation, IGST refunds, duty drawback, shipping-bill mismatches, DGFT documentation, and related customs or banking dependencies."
  },
  {
    question: "Can a compliance audit help before a customs notice arrives?",
    answer:
      "Yes. A preventive audit is most useful when it identifies exposure early enough for reconciliation, explanation, amendment, closure filing, or internal remediation before the issue hardens into an enforcement matter."
  },
  {
    question: "What kind of output does a client receive?",
    answer:
      "Clients typically receive a gap-based assessment, risk priorities, missing-document list, issue classification, and recommended next steps for closure or corrective action."
  },
  {
    question: "Will the audit also help with execution after findings?",
    answer:
      "Yes. The compliance-audit page is designed around both diagnosis and execution, so related service support can follow for redemptions, representations, refund recovery issues, or scheme clean-up."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Services Portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "ICEGATE Portal",
    href: "https://www.icegate.gov.in/"
  },
  {
    label: "CBIC",
    href: "https://www.cbic.gov.in/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Useful when audit findings point to SION usage gaps, EODC closure risk, or export-obligation issues."
  },
  {
    href: "/services/epcg-scheme",
    title: "EPCG Scheme Support",
    description:
      "Relevant where the audit identifies EPCG block fulfilment, installation, or redemption exposure."
  },
  {
    href: "/services/igst-refund",
    title: "IGST Refund Support",
    description:
      "Useful for shipping-bill mismatch, refund transmission, EGM, or pending-scroll correction cases."
  },
  {
    href: "/services/duty-drawback/",
    title: "Duty Drawback Support",
    description:
      "Helpful when the review shows drawback eligibility, BRC matching, or refund-recovery vulnerabilities."
  }
];

const CloudDeskComplianceAudit = () => {
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
          Import Export Compliance Audit Consultant India | EPCG, Advance
          Authorisation, IGST & Duty Drawback Risk Review | EXIMINQ
        </title>
        <meta
          name="description"
          content="Import export compliance audit consultant in India for EPCG, Advance Authorisation, IGST refunds, duty drawback, DGFT records, customs exposure, and transactional health-check support."
        />
        <meta
          name="keywords"
          content="import export compliance audit, customs compliance audit India, DGFT compliance audit, EPCG audit, advance authorisation audit, IGST refund audit, duty drawback audit, transactional audit exporter"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/compliance-audit"
        />
        <meta
          property="og:title"
          content="Import Export Compliance Audit Consultant India | EPCG, Advance Authorisation, IGST & Duty Drawback Risk Review"
        />
        <meta
          property="og:description"
          content="Get a forensic import-export compliance audit for EPCG, Advance Authorisation, IGST refunds, duty drawback, customs exposure, and DGFT documentation gaps."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/compliance-audit"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/compliance-audit",
                url: "https://eximinq.in/services/compliance-audit",
                name: "Import Export Compliance Audit Consultant India | EPCG, Advance Authorisation, IGST & Duty Drawback Risk Review | EXIMINQ",
                description:
                  "Import export compliance audit consultant in India for EPCG, Advance Authorisation, IGST refunds, duty drawback, DGFT records, customs exposure, and transactional health-check support.",
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
                    name: "Compliance Audit",
                    item: "https://eximinq.in/services/compliance-audit"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Import Export Compliance Audit",
                serviceType:
                  "Transactional compliance audit for DGFT, customs, export incentives, refunds, and licence closure",
                description:
                  "Consulting support for import-export compliance audit, DGFT and customs health checks, EPCG and Advance Authorisation review, IGST and drawback risk assessment, and execution planning after findings.",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                }
              },
              {
                "@type": "FAQPage",
                mainEntity: AUDIT_FAQS.map((item) => ({
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

      <div className="bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setShowEnrollModal={() => {}}
        />

        <header className="pt-28 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2">
                Import Export Compliance Audit
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                DGFT and Customs Risk Review
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  Import Export Compliance Audit for DGFT, Customs, EPCG,
                  Advance Authorisation, IGST and Drawback Workflows
                </h1>
                <p className="mt-6 text-lg text-slate-200 max-w-3xl leading-8">
                  This page is built for businesses searching for{" "}
                  <strong>import export compliance audit</strong>,{" "}
                  <strong>customs compliance audit</strong>,{" "}
                  <strong>DGFT transactional audit</strong>, or a deeper{" "}
                  <strong>export-import health check</strong> before a notice,
                  recovery, or licence-closure problem escalates.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#checklist"
                    className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition"
                  >
                    Start Compliance Audit Checklist
                  </a>
                  <a
                    href="#scope"
                    className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10 transition"
                  >
                    Review Audit Scope
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-2xl">
                <h2 className="text-2xl font-bold mb-5">
                  What This Audit Helps You Detect
                </h2>
                <ul className="space-y-4">
                  {AUDIT_KEY_POINTS.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>

        <nav className="sticky top-24 z-30 bg-white/95 backdrop-blur border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl py-4 flex flex-wrap gap-6 text-sm font-bold text-slate-600">
            <a href="#overview" className="hover:text-blue-700 transition">
              Overview
            </a>
            <a href="#scope" className="hover:text-blue-700 transition">
              Scope
            </a>
            <a href="#benefits" className="hover:text-blue-700 transition">
              Benefits
            </a>
            <a href="#process" className="hover:text-blue-700 transition">
              Process
            </a>
            <a href="#references" className="hover:text-blue-700 transition">
              References
            </a>
            <a href="#faqs" className="hover:text-blue-700 transition">
              FAQs
            </a>
          </div>
        </nav>

        <section id="overview" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div className="space-y-5 text-slate-600 leading-8">
                <span className="text-blue-700 font-bold uppercase tracking-[0.24em] text-xs">
                  Search Intent Match
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  A Compliance Audit Is Not Just a Report. It Is a Preventive
                  Risk-Control Layer.
                </h2>
                <p>
                  Businesses rarely search for a compliance audit as an abstract
                  concept. They search because a refund is stuck, an EPCG
                  closure is delayed, an Advance Authorisation file looks weak,
                  drawback recovery risk is building, or management wants to
                  understand how much exposure is sitting inside the trade
                  portfolio.
                </p>
                <p>
                  For that reason, this page is deliberately structured around
                  the commercial intent behind terms like{" "}
                  <strong>import export compliance audit</strong>,{" "}
                  <strong>customs compliance audit India</strong>,{" "}
                  <strong>EPCG audit</strong>,{" "}
                  <strong>advance authorisation audit</strong>, and{" "}
                  <strong>IGST refund audit</strong>.
                </p>
                <p>
                  The objective is to help decision-makers identify risk early,
                  clean the documentation trail, quantify exposure, and convert
                  findings into corrective action before regulators, banks, or
                  internal auditors force the issue.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Best-Fit Use Cases
                </h3>
                <div className="space-y-4">
                  {[
                    "Pending EPCG redemption or block-wise fulfilment uncertainty",
                    "Advance Authorisation closure risk or SION mismatch concern",
                    "IGST refunds blocked due to shipping-bill or EGM issues",
                    "Duty drawback recovery or BRC-matching vulnerability",
                    "Board-level need for an import-export compliance health check"
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-blue-700 font-bold uppercase tracking-[0.24em] text-xs">
                Audit Scope
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                Audit Modules Built Around Real Import-Export Exposure
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {AUDIT_AREAS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-blue-300 font-bold uppercase tracking-[0.24em] text-xs">
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Benefits of a Preventive Import Export Compliance Audit
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {AUDIT_BENEFITS.map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-slate-100 leading-7">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="eligibility" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-[2rem] border border-slate-200 p-8 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-blue-700" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Who Should Consider This Audit
                  </h2>
                </div>
                <div className="space-y-4">
                  {AUDIT_ELIGIBILITY.map((item) => (
                    <div key={item} className="flex gap-3 text-slate-700">
                      <ClipboardCheck className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 p-8 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-6 h-6 text-blue-700" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Documents Commonly Reviewed
                  </h2>
                </div>
                <div className="space-y-4">
                  {AUDIT_DOCUMENTS.map((item) => (
                    <div key={item} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-blue-700 font-bold uppercase tracking-[0.24em] text-xs">
                Process Flow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                How the Compliance Audit Typically Moves
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {AUDIT_PROCESS.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-100 bg-white mx-auto flex items-center justify-center text-2xl font-black text-blue-700 shadow-sm mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-6">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="references" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
              <div>
                <span className="text-blue-700 font-bold uppercase tracking-[0.24em] text-xs">
                  E-E-A-T and Trust
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-5">
                  Authority Signals That Strengthen This Page
                </h2>
                <div className="space-y-5 text-slate-600 leading-8">
                  <p>
                    Compliance-audit content performs better when it shows it
                    understands the actual risk architecture behind export and
                    import operations: licence closure, refund recovery,
                    customs-facing mismatches, and documentation quality.
                  </p>
                  <p>
                    This page therefore ties the audit service back to the
                    systems and authorities users actually deal with, including
                    DGFT, ICEGATE, and CBIC-linked customs workflows.
                  </p>
                  <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                      <p className="text-amber-900">
                        Delayed audits often become expensive audits. Once the
                        issue reaches recovery, notice, or enforcement stage,
                        the remediation window usually narrows and the record
                        burden increases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Official Reference Points
                </h3>
                <div className="space-y-4">
                  {GOVERNMENT_REFERENCES.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:border-blue-300 transition"
                    >
                      <div className="flex gap-3">
                        <Landmark className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
                        <span className="text-slate-800">{item.label}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-700 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions About Compliance Audit
            </h2>
            <div className="space-y-4">
              {AUDIT_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 group shadow-sm"
                >
                  <summary className="cursor-pointer font-bold text-slate-800 flex justify-between gap-4 items-center">
                    <span>{item.question}</span>
                    <ChevronDown className="w-5 h-5 text-blue-700 transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-blue-700 font-bold uppercase tracking-[0.24em] text-xs">
                Internal Linking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                Related Services That Support Audit Findings
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 hover:border-blue-300 hover:bg-white transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AuditComplianceForm />

        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
              <div className="p-10 lg:p-14 bg-blue-700/30">
                <span className="text-blue-200 font-bold uppercase tracking-[0.24em] text-xs">
                  Conversion-Focused CTA
                </span>
                <h2 className="text-4xl font-bold mt-3 mb-5">
                  Need an Audit Before the Department Raises the Question?
                </h2>
                <p className="text-slate-100 leading-8 text-lg mb-8">
                  Use the checklist above to begin the review. We help
                  businesses diagnose licence, customs, refund, and
                  documentation exposure before it becomes a larger commercial
                  problem.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">Call us</p>
                      <a href="tel:+917400096950" className="font-bold text-2xl">
                        +91 74000 96950
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">Email support</p>
                      <a
                        href="mailto:clouddesk@eximinq.in"
                        className="font-bold text-2xl break-all"
                      >
                        clouddesk@eximinq.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-14">
                <h3 className="text-3xl font-bold mb-5">
                  Why This SEO Structure Is Stronger
                </h3>
                <div className="space-y-4 text-slate-200 leading-7">
                  <div className="flex gap-3">
                    <Clock3 className="w-5 h-5 text-blue-300 shrink-0 mt-1" />
                    <p>
                      The page now covers the full buyer journey: risk signal,
                      scope, eligibility, documents, process, FAQs, references,
                      and next action.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-300 shrink-0 mt-1" />
                    <p>
                      Structured data, better metadata, and stronger internal
                      links improve crawlability and make the service easier for
                      Google to classify.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-1" />
                    <p>
                      Content depth is now aligned to high-intent commercial and
                      problem-solving queries instead of a thin audit teaser.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10 max-w-6xl">
            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4 block">
                EXIMINQ
              </Link>
              <p className="text-sm leading-7">
                Audit-led support for DGFT, customs, refund, and trade
                compliance workflows.
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#overview" className="hover:text-white transition">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#scope" className="hover:text-white transition">
                    Audit Scope
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">Related Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/services/advance-authorisation/"
                    className="hover:text-white transition"
                  >
                    Advance Authorisation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/epcg-scheme"
                    className="hover:text-white transition"
                  >
                    EPCG Scheme
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/igst-refund"
                    className="hover:text-white transition"
                  >
                    IGST Refund
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/duty-drawback/"
                    className="hover:text-white transition"
                  >
                    Duty Drawback
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone size={18} className="text-blue-300 mt-0.5 shrink-0" />
                  <a href="tel:+917400096950" className="hover:text-white">
                    +91 74000 96950
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-blue-300 mt-0.5 shrink-0" />
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="hover:text-white break-all"
                  >
                    clouddesk@eximinq.in
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="text-blue-300 mt-0.5 shrink-0" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskComplianceAudit;
