import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  AlertTriangle,
  Building,
  CheckCircle,
  ChevronDown,
  Clock,
  Facebook,
  FileCheck2,
  FileSearch,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  Twitter
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEDPMS/MainNavbar";
import Navbar from "../components/CloudDeskEDPMS/Navbar";
import Hero from "../components/CloudDeskEDPMS/Hero";
import Fees from "../components/CloudDeskEDPMS/Fees";
import { ModalEnroll } from "../components/CloudDeskEDPMS/ModalEnroll";

const BENEFITS = [
  "Identify why export proceeds are still open in EDPMS even after inward remittance has been received.",
  "Coordinate exporter records, shipping bills, IRMs, AD bank updates, and DGFT-facing eBRC requirements.",
  "Reduce caution-list and unresolved-export risk by reviewing delayed closure, short realisation, extension, and write-off cases.",
  "Create a practical closure path with transaction-level follow-up instead of only a surface status check."
];

const USE_CASES = [
  {
    title: "Open shipping bills in EDPMS",
    description:
      "Useful where payment is received but the shipping bill still appears open, unrealised, or unmatched because the IRM was not mapped correctly."
  },
  {
    title: "eBRC generation and DGFT linkage",
    description:
      "Relevant where eBRC generation is blocked because the underlying bank-side transaction mapping is incomplete."
  },
  {
    title: "Short realisation or deduction",
    description:
      "Applies where export proceeds were received with deductions, partial payment, bank charges, or write-off requirements."
  },
  {
    title: "Caution-list risk prevention",
    description:
      "Important for exporters who want to prevent repeat non-realisation flags and banking restrictions across multiple shipments."
  }
];

const DOCUMENTS_REQUIRED = [
  "IEC details, shipping bill copies, export invoice set, port details, shipment dates, and export transaction trail.",
  "FIRC or equivalent inward remittance records, IRM references, bank advice, remittance breakup, and realised amount evidence.",
  "Outstanding export bill list, AD bank correspondence, EDPMS screenshots, unrealised bill records, and caution-list communication.",
  "DGFT-side eBRC reference points, export incentive dependency details, extension or write-off papers, and prior submissions."
];

const PROCESS_STEPS = [
  {
    title: "Transaction diagnosis",
    detail:
      "We identify whether the case is an IRM-mapping issue, partial-remittance issue, short-realisation problem, delayed closure case, or wider export-compliance risk."
  },
  {
    title: "Shipping bill and remittance reconciliation",
    detail:
      "Shipping bill, inward remittance, invoice value, deductions, and bank-side records are reviewed together before follow-up starts."
  },
  {
    title: "AD bank action path",
    detail:
      "We define whether the matter needs bank-side mapping, object-code correction, short-realisation reasoning, extension, write-off, or updated closure handling."
  },
  {
    title: "eBRC readiness",
    detail:
      "Where relevant, we review how EDPMS closure affects eBRC availability and export incentive workflows tied to proof of realisation."
  },
  {
    title: "Future transaction tightening",
    detail:
      "The aim is not only to close current open entries but also to improve document flow and bank coordination for future exports."
  }
];

const COMMON_ISSUES = [
  "Payment received but shipping bill still shows open.",
  "IRM exists but is not mapped with the correct shipping bill.",
  "eBRC is expected but bank records are not transaction-ready.",
  "Short realisation, bank charges, or deductions are not documented properly.",
  "Old open export bills have accumulated across many shipments."
];

const FAQS = [
  {
    question: "What is EDPMS in exports?",
    answer:
      "EDPMS is the export monitoring framework used to track whether export proceeds are realised against shipping bills within the permitted timeline and closed correctly."
  },
  {
    question: "What is the difference between EDPMS and eBRC?",
    answer:
      "EDPMS is the monitoring and closure framework for export realisation. eBRC is the DGFT-facing proof of export proceeds realisation."
  },
  {
    question: "Why is my shipping bill still open after payment was received?",
    answer:
      "Common reasons include missing IRM mapping, bank-side non-updation, deduction handling issues, short-realisation mismatch, or incomplete transaction closure."
  },
  {
    question: "Can EDPMS issues affect export incentives?",
    answer:
      "Yes. If export proceeds are not reflected properly, eBRC-dependent workflows and export benefit documentation can be affected."
  },
  {
    question: "Can partial payment or deduction still be closed?",
    answer:
      "Often yes, but the case usually needs correct reasoning, supporting records, and AD bank-side treatment for short realisation, bank charges, or approved adjustment logic."
  },
  {
    question: "When is extension or write-off relevant?",
    answer:
      "Extension is relevant when proceeds are delayed but expected. Write-off is relevant when part or all of the export receivable will not be realised and needs compliant banking treatment."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    title: "Reserve Bank of India",
    url: "https://www.rbi.org.in/",
    detail: "Primary ecosystem reference for banking and export proceeds monitoring."
  },
  {
    title: "DGFT Portal",
    url: "https://www.dgft.gov.in/CP/",
    detail: "Useful for DGFT-linked eBRC and export benefit workflows."
  },
  {
    title: "ICEGATE Portal",
    url: "https://www.icegate.gov.in/",
    detail: "Relevant for shipping bill and customs-side export record references."
  }
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
        <link rel="canonical" href="https://eximinq.in/services/edpms-ebrc/" />
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
          content="https://eximinq.in/services/edpms-ebrc/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/edpms-ebrc/#webpage",
                url: "https://eximinq.in/services/edpms-ebrc/",
                name: "EDPMS and eBRC Consultant India | EXIMINQ",
                description:
                  "Support for EDPMS closure, IRM mapping, eBRC readiness, open shipping bill reconciliation, and export proceeds compliance.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@type": "WebSite",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://eximinq.in/services/edpms-ebrc/#breadcrumb",
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
                    item: "https://eximinq.in/services/"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EDPMS and eBRC",
                    item: "https://eximinq.in/services/edpms-ebrc/"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/edpms-ebrc/#service",
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
                url: "https://eximinq.in/services/edpms-ebrc/",
                description:
                  "Support for export proceeds reconciliation, IRM mapping, open shipping bill closure, AD bank follow-up, extension, write-off, and eBRC-linked export compliance workflows."
              },
              {
                "@type": "FAQPage",
                "@id": "https://eximinq.in/services/edpms-ebrc/#faq",
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
          setShowEnrollModal={setShowEnrollModal}
        />
        <Navbar />
        <Hero />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          onSubmit={handleEnrollmentSubmit}
        />

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What is EDPMS and eBRC?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>

            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                <strong>EDPMS</strong> is the export proceeds monitoring
                framework used to track whether export payments are realised
                against shipping bills and closed correctly through the
                authorised dealer bank.
              </p>
              <p className="mb-4">
                <strong>eBRC</strong> is the DGFT-facing proof of export
                realisation. If IRM mapping, shipping bill reconciliation, short
                realisation, or bank-side closure is incomplete, exporters can
                face open entries, incentive delays, and caution-list risk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                <Landmark className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Bank Coordination</h3>
                <p className="text-sm text-slate-500">
                  Follow-up with AD bank records, IRM mapping, and closure
                  requirements.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                <ReceiptText className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Shipping Bill Closure</h3>
                <p className="text-sm text-slate-500">
                  Match export invoices, realisation evidence, deductions, and
                  shipping bill data.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                <ShieldCheck className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Compliance Shield</h3>
                <p className="text-sm text-slate-500">
                  Reduce unresolved export bill exposure and future caution-list
                  risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="caution" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Export Proceeds Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Common EDPMS Problems We Help Resolve
              </h2>
              <p className="text-slate-500 mt-3 max-w-3xl mx-auto">
                This page is built for exporters facing open shipping bills,
                pending eBRC generation, IRM mismatch, short realisation, and
                bank-side export closure issues.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Key benefits
                </h3>
                <ul className="space-y-4 text-slate-600">
                  {BENEFITS.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-900 rounded-2xl text-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-5">
                  Why this matters for exporters
                </h3>
                <div className="space-y-4 text-slate-100">
                  <p>
                    EDPMS issues are rarely just a portal problem. They usually
                    involve a mismatch between commercial records, shipping
                    bills, bank remittance data, and DGFT expectations.
                  </p>
                  <p>
                    A clean closure path protects future shipments, supports
                    eBRC readiness, and gives management a clear view of which
                    export proceeds are still unresolved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Use Cases
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                  Where EDPMS and eBRC Support Is Needed
                </h2>
                <div className="grid gap-5">
                  {USE_CASES.map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 rounded-2xl border border-slate-200 p-6"
                    >
                      <h3 className="font-bold text-lg text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Documents Required
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                  Records We Usually Review
                </h3>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <ul className="space-y-4 text-slate-600">
                    {DOCUMENTS_REQUIRED.map((item) => (
                      <li key={item} className="flex gap-3">
                        <FileCheck2 className="text-brand-600 mt-1 shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                EDPMS Closure and eBRC Readiness Flow
              </h2>
              <p className="text-slate-500 mt-2">
                A practical workflow for identifying the issue and moving it
                toward closure.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-200 -z-0"></div>
              <div className="grid md:grid-cols-5 gap-8 relative z-10">
                {PROCESS_STEPS.map((step, index) => (
                  <div key={step.title} className="text-center relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Common issues that trigger delays
                </h3>
                <div className="space-y-4">
                  {COMMON_ISSUES.map((issue) => (
                    <div
                      key={issue}
                      className="bg-red-50 border border-red-100 rounded-2xl p-5 text-slate-700"
                    >
                      <div className="flex gap-3">
                        <AlertTriangle className="text-red-600 mt-1 shrink-0" size={18} />
                        <p>{issue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Official sources and useful next pages
                </h3>
                <div className="space-y-5">
                  {GOVERNMENT_REFERENCES.map((reference) => (
                    <a
                      key={reference.url}
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:bg-slate-50 transition"
                    >
                      <h4 className="font-bold text-slate-900 mb-1">{reference.title}</h4>
                      <p className="text-sm text-slate-600">{reference.detail}</p>
                    </a>
                  ))}

                  <div className="rounded-xl bg-brand-900 text-white p-5">
                    <p className="text-sm text-slate-100 leading-relaxed">
                      Related internal resources: review{" "}
                      <a href="/services/igst-refund" className="font-semibold underline underline-offset-4">
                        IGST refund support
                      </a>
                      ,{" "}
                      <a href="/services/rodtep-scheme" className="font-semibold underline underline-offset-4">
                        RoDTEP scheme support
                      </a>
                      , and{" "}
                      <a href="/services/gst-lut-filing/" className="font-semibold underline underline-offset-4">
                        GST LUT filing
                      </a>{" "}
                      for stronger export compliance continuity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for EDPMS and eBRC?
              </h2>
              <p className="text-slate-500">
                EDPMS closure is a banking, export-document, and compliance
                exercise. CloudDesk helps structure the file before follow-up.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100">
                <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">1. Open Entry Diagnosis</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We identify the exact reason an export entry is unresolved,
                    instead of treating every case as the same bank follow-up.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                  <FileSearch size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">2. IRM and Shipping Bill Mapping</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We review the transaction trail so realisation evidence can
                    be matched with the correct export records.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">3. Extension and Write-Off Guidance</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Delayed or partly realised proceeds need correct reasoning,
                    documentation, and bank-side treatment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">4. AD Bank Follow-Up Pack</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We help prepare a cleaner follow-up path so the bank has the
                    right information to act on the case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Fees setShowEnrollModal={setShowEnrollModal} />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              EDPMS and eBRC FAQs
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className="text-brand-500 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
            <div>
              <a href="/" className="text-2xl font-bold text-white mb-4 block">
                EXIMINQ
              </a>
              <p className="text-sm mb-6">
                EXIMINQ Contact: Your trusted partner for DGFT, Customs, banking,
                and logistics compliance.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/eximinq" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://www.facebook.com/" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/edpms-ebrc/" className="hover:text-white transition">EDPMS and eBRC</a></li>
                <li><a href="/services/igst-refund" className="hover:text-white transition">IGST Refund</a></li>
                <li><a href="/services/rodtep-scheme" className="hover:text-white transition">RoDTEP Scheme</a></li>
                <li><a href="/services/advance-authorisation/" className="hover:text-white transition">Advance Authorisation</a></li>
                <li><a href="/services/epcg-scheme" className="hover:text-white transition">EPCG Scheme</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/gst-lut-filing/" className="hover:text-white transition">GST LUT Filing</a></li>
                <li><a href="/services/duty-drawback" className="hover:text-white transition">Duty Drawback</a></li>
                <li><a href="/services/import-export-code/" className="hover:text-white transition">IEC Management</a></li>
                <li><a href="/services/ad-code-registration/" className="hover:text-white transition">AD Code Registration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-brand-500" />
                  +917400096950
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-brand-500" />
                  clouddesk@eximinq.in
                </li>
                <li className="flex gap-3 items-center">
                  <MapPin size={18} className="text-brand-500" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
            © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
            DGFT, RBI, ICEGATE, or any government authority.
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskEDPMS;
