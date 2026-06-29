import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  AlertTriangle,
  BookOpenCheck,
  CheckCheck,
  CheckCircle,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Facebook,
  FileSearch,
  FileText,
  Landmark,
  Linkedin,
  MapPin,
  Phone,
  ShieldCheck,
  Ship,
  Twitter,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskAdvanceAuthority/MainNavbar";
import AuditComplianceForm from "../components/CloudDeskComplianceAudit/auditcomplianceform";

const AUDIT_AREAS = [
  {
    title: "EPCG Compliance Audit",
    icon: ShieldCheck,
    description:
      "Review imports, installation evidence, export-obligation tracking, APR status, and redemption readiness before closure risks become a duty demand.",
  },
  {
    title: "Advance Authorisation Audit",
    icon: FileSearch,
    description:
      "Validate SION usage, input-output linkage, export-obligation support, EODC readiness, and gaps that may trigger a duty clawback.",
  },
  {
    title: "IGST and EGM Refund Audit",
    icon: CircleDollarSign,
    description:
      "Trace stuck refunds, shipping-bill mismatches, invoice transmission issues, EGM breaks, and gateway errors.",
  },
  {
    title: "Duty Drawback Audit",
    icon: FileText,
    description:
      "Check drawback eligibility, rate usage, BRC matching, and recovery risk where Customs may question past claims.",
  },
  {
    title: "DGFT Documentation Readiness",
    icon: BookOpenCheck,
    description:
      "Assess whether licences, annexures, supporting records, and portal evidence are ready for closure or departmental review.",
  },
  {
    title: "Customs Exposure Review",
    icon: Ship,
    description:
      "Identify valuation, classification, licence-use, and reconciliation patterns that may attract post-clearance scrutiny.",
  },
];

const AUDIT_ELIGIBILITY = [
  "Exporters or importers with active EPCG, Advance Authorisation, IGST refund, duty drawback, or licence-closure exposure.",
  "Businesses facing pending redemptions, blocked refunds, mismatched shipping-bill data, or incomplete DGFT records.",
  "Companies preparing for an internal review, Customs query, funding round, merger, or portfolio clean-up.",
  "Teams that want a preventive health check instead of waiting for a notice, audit memo, or recovery demand.",
];

const AUDIT_DOCUMENTS = [
  "Authorisations, licences, amendments, extensions, redemption history, and obligation-tracking sheets.",
  "Shipping bills, bills of entry, invoices, e-BRC or BRC status, GSTR data, and refund-support documents.",
  "Consumption records, installation certificates, APR support, bank communication, and reconciliation files.",
  "Prior notices, deficiency letters, working papers, representation drafts, and portal-error evidence.",
];

const AUDIT_RISKS = [
  "Licence conditions do not match the actual import, consumption, or export trail.",
  "Shipping-bill, invoice, e-BRC, GST, or ICEGATE data remains unreconciled.",
  "Export-obligation deadlines or APR and closure filings are missed.",
  "Refund or drawback claims lack the support needed during departmental review.",
];

const AUDIT_PROCESS = [
  ["Scope", "Map schemes, licences, refunds, and the highest-risk areas."],
  ["Collect", "Organise the core documents and transaction data."],
  ["Review", "Test records for gaps, mismatches, and unresolved obligations."],
  ["Prioritise", "Classify findings by urgency, value, and regulatory exposure."],
  ["Correct", "Execute reconciliations, filings, closures, or representations."],
];

const AUDIT_FAQS = [
  {
    question: "What is an import-export compliance audit?",
    answer:
      "It is a structured review of Customs, DGFT, export-incentive, refund, and supporting records to identify gaps or liabilities before they become disputes.",
  },
  {
    question: "When should a business get a compliance audit done?",
    answer:
      "The best time is before redemption, before a notice, before a refund issue becomes a recovery matter, or whenever management needs a clear view of unresolved exposure.",
  },
  {
    question: "Does the audit only cover EPCG and Advance Authorisation?",
    answer:
      "No. The scope can include IGST refunds, duty drawback, shipping-bill mismatches, DGFT records, Customs risks, and related banking dependencies.",
  },
  {
    question: "Can an audit help before a Customs notice arrives?",
    answer:
      "Yes. A preventive audit creates time for reconciliation, amendment, explanation, closure filing, or internal remediation before enforcement begins.",
  },
  {
    question: "What output does the client receive?",
    answer:
      "Clients receive a gap-based assessment, risk priorities, missing-document list, issue classification, and a practical corrective-action roadmap.",
  },
  {
    question: "Can EXIMINQ execute the corrective work too?",
    answer:
      "Yes. We can continue with redemption, refund correction, reconciliation, representation, or licence-regularisation work after the findings are agreed.",
  },
];

const GOVERNMENT_REFERENCES = [
  {
    title: "DGFT Services Portal",
    url: "https://www.dgft.gov.in/CP/",
    detail: "Official portal for authorisations, amendments, obligations, and closure workflows.",
  },
  {
    title: "ICEGATE Portal",
    url: "https://www.icegate.gov.in/",
    detail: "Official Customs gateway for shipping bills, bills of entry, EGM, and refund status.",
  },
  {
    title: "Central Board of Indirect Taxes and Customs",
    url: "https://www.cbic.gov.in/",
    detail: "Primary source for Customs notifications, circulars, and procedural guidance.",
  },
];

const CloudDeskComplianceAudit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const focusAuditForm = () => {
    document.getElementById("checklist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Import Export Compliance Audit Consultant India | EXIMINQ</title>
        <meta
          name="description"
          content="Import export compliance audit consultant for EPCG, Advance Authorisation, IGST refunds, duty drawback, DGFT records, and Customs exposure."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/compliance-audit" />
        <meta property="og:title" content="Import Export Compliance Audit Consultant India" />
        <meta
          property="og:description"
          content="Identify DGFT, Customs, licence, refund, and documentation risks before they become notices or recovery demands."
        />
        <meta property="og:url" content="https://eximinq.in/services/compliance-audit" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Import Export Compliance Audit",
                serviceType: "DGFT and Customs compliance health check",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in",
                },
                areaServed: { "@type": "Country", name: "India" },
                url: "https://eximinq.in/services/compliance-audit",
              },
              {
                "@type": "FAQPage",
                mainEntity: AUDIT_FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={false}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setShowEnrollModal={focusAuditForm}
        />

        <header className="bg-white shadow-sm sticky top-24 z-30">
          <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
            <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
              <a href="#about" className="hover:text-brand-600 transition">About Audit</a>
              <a href="#scope" className="hover:text-brand-600 transition">Audit Scope</a>
              <a href="#process" className="hover:text-brand-600 transition">Process</a>
              <a href="#checklist" className="hover:text-brand-600 transition">Audit Checklist</a>
            </div>
          </nav>
        </header>

        <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                PREVENTIVE COMPLIANCE REVIEW
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Compliance Risks{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  Before Authorities Do
                </span>
              </h1>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                A practical audit of EPCG, Advance Authorisation, IGST refunds,
                duty drawback, DGFT records, and Customs exposure—followed by a
                clear corrective-action plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <button
                  onClick={focusAuditForm}
                  className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
                >
                  Start Compliance Audit
                </button>
                <a
                  href="#scope"
                  className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
                >
                  View Audit Scope
                </a>
              </div>
            </div>
            <AuditComplianceForm />
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Is an Import Export Compliance Audit?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded" />
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                A compliance audit checks whether your import, export, licence,
                refund, and incentive records agree with each other and meet
                DGFT and Customs requirements.
              </p>
              <p className="mb-4">
                The goal is not only to produce a report. It is to identify
                missing evidence, mismatches, delayed closures, and financial
                exposure early enough to correct them.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              {[
                [ShieldCheck, "Preventive Review", "Find risks before a notice, recovery, or licence dispute."],
                [ClipboardCheck, "Transaction Testing", "Match portal records with the real document and data trail."],
                [Landmark, "Corrective Roadmap", "Turn every finding into a prioritised and executable next step."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <Icon className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="eligibility" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Eligibility and Planning</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Who Should Request a Compliance Audit?</h2>
              <p className="text-slate-500 mt-3 max-w-3xl mx-auto">
                The review is useful for businesses that need an accurate view of open trade-compliance exposure before it grows.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">A strong fit for</h3>
                <ul className="space-y-4 text-slate-600">
                  {AUDIT_ELIGIBILITY.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-900 rounded-2xl text-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-5">Why prevention matters</h3>
                <div className="space-y-4 text-slate-100">
                  <p>
                    Unresolved licences, unsupported claims, and transaction mismatches can remain quiet for years before they appear in a closure review or departmental query.
                  </p>
                  <p>
                    A preventive audit gives management time to collect evidence, correct records, file amendments, and plan financial exposure before deadlines or enforcement pressure remove those options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Documents Required</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">Records We Review</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The exact checklist depends on your schemes and risk areas. We begin with the records that prove entitlement, utilisation, fulfilment, and closure.
                </p>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <ul className="space-y-3 text-slate-600">
                    {AUDIT_DOCUMENTS.map((item) => (
                      <li key={item} className="flex gap-3">
                        <FileText className="text-brand-600 mt-1 shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Compliance Risks</span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">Common gaps that create exposure</h3>
                <div className="space-y-4">
                  {AUDIT_RISKS.map((risk) => (
                    <div key={risk} className="bg-red-50 border border-red-100 rounded-2xl p-5 text-slate-700">
                      <div className="flex gap-3">
                        <AlertTriangle className="text-red-600 mt-1 shrink-0" size={18} />
                        <p>{risk}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Audit Scope</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">One Review Across the Full Compliance Trail</h2>
              <p className="text-slate-500 mt-2">We focus the scope on the schemes, claims, and transactions that carry real risk.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AUDIT_AREAS.map(({ title, description, icon: Icon }) => (
                <div key={title} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-500">
                  <Icon className="w-10 h-10 text-brand-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Audit Lifecycle</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">From Risk Mapping to Corrective Action</h2>
            </div>
            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              {AUDIT_PROCESS.map(([title, text], index) => (
                <div key={title} className="text-center relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 shadow-sm ${index === AUDIT_PROCESS.length - 1 ? "bg-green-500 text-white border-white" : "bg-white text-brand-900 border-brand-200"}`}>
                    {index === AUDIT_PROCESS.length - 1 ? <CheckCheck size={28} /> : index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="references" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">References and Next Steps</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Official Sources and Related Support</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">What happens after the audit</h3>
                <div className="space-y-4 text-slate-600">
                  <p><strong>Immediate risks:</strong> isolate deadline-sensitive filings, notices, refund blocks, and closure exposures.</p>
                  <p><strong>Evidence gaps:</strong> build the missing document and reconciliation list around each finding.</p>
                  <p><strong>Corrective work:</strong> plan amendments, representations, redemptions, refund correction, or regularisation.</p>
                  <p><strong>Management view:</strong> maintain one clear tracker showing ownership, due dates, value, and status.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">Official sources</h3>
                <div className="space-y-5">
                  {GOVERNMENT_REFERENCES.map((reference) => (
                    <a key={reference.url} href={reference.url} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:bg-slate-50 transition">
                      <h4 className="font-bold text-slate-900 mb-1">{reference.title}</h4>
                      <p className="text-sm text-slate-600">{reference.detail}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Compliance Audit?</h2>
              <p className="text-slate-500">The audit combines specialist review with a practical system for closing every finding.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                [AlertTriangle, "Risk-Based Prioritisation", "We separate urgent financial and regulatory exposure from lower-priority documentation improvements.", "bg-red-100", "text-red-600"],
                [CheckCircle, "Scheme-Specific Review", "EPCG, Advance Authorisation, refunds, drawback, and Customs risks are tested against their own rules.", "bg-blue-100", "text-blue-600"],
                [Landmark, "Regulatory Context", "Findings are connected to the DGFT, ICEGATE, Customs, GST, and banking workflow that must resolve them.", "bg-green-100", "text-green-600"],
                [ShieldCheck, "Execution After Diagnosis", "Our team can continue from the audit into reconciliation, filing, closure, and representation work.", "bg-purple-100", "text-purple-600"],
              ].map(([Icon, title, text, bg, color], index) => (
                <div key={title} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className={`${bg} ${color} p-3 rounded-lg h-fit`}><Icon size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{index + 1}. {title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Compliance Audit FAQs</h2>
            <div className="space-y-4">
              {AUDIT_FAQS.map((faq) => (
                <details key={faq.question} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <ChevronDown size={20} className="text-brand-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
            <div>
              <a href="/" className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>
              <p className="text-sm mb-6">Your trusted partner for DGFT, Customs, and logistics compliance.</p>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                  <a href="/" aria-label={["LinkedIn", "Twitter", "Facebook"][index]} key={index} className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"><Icon size={18} /></a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/advance-authorisation/" className="hover:text-white transition">Advance Authorisation</a></li>
                <li><a href="/services/epcg-scheme" className="hover:text-white transition">EPCG Scheme</a></li>
                <li><a href="/services/igst-refund" className="hover:text-white transition">IGST Refund</a></li>
                <li><a href="/services/duty-drawback/" className="hover:text-white transition">Duty Drawback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Audit Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#scope" className="hover:text-white transition">DGFT Audit</a></li>
                <li><a href="#scope" className="hover:text-white transition">Customs Audit</a></li>
                <li><a href="#scope" className="hover:text-white transition">Refund Audit</a></li>
                <li><a href="#process" className="hover:text-white transition">Corrective Action</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="text-accent-500 shrink-0" size={18} /><span>708, B Wing, Pranik Chambers, Saki Naka, Mumbai 400072</span></li>
                <li className="flex items-center gap-3"><Phone className="text-accent-500" size={18} /><a href="tel:+917400096950">+91 74000 96950</a></li>
                <li className="flex items-center gap-3"><FileText className="text-accent-500" size={18} /><a href="mailto:clouddesk@eximinq.in">clouddesk@eximinq.in</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">© 2026 EXIMINQ Global Connections. All Rights Reserved.</div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskComplianceAudit;
