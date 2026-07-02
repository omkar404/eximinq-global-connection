import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/CloudDeskImporters/Navbar";
import Hero from "../components/CloudDeskImporters/Hero";
import Fees from "../components/CloudDeskImporters/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  HardHat,
  Magnet,
  Layers,
  Flame,
  Scroll,
  Cpu,
  ArrowRight,
  Headphones,
  FileCheck,
  ShieldCheck,
  Clock3,
  Landmark
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskImporters/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskImporters/ModalEnroll";

const IMS_FAQS = [
  {
    question: "What is import management registration in India?",
    answer:
      "Import management registration is the importer-side compliance process used for goods covered under DGFT monitoring systems such as SIMS, PIMS, NFMIMS, CIMS, and other product-specific regimes. It is generally required before customs clearance and, in many cases, before arrival timelines expire."
  },
  {
    question: "Is import management registration mandatory before import?",
    answer:
      "For covered products, yes. The importer must usually complete the applicable monitoring registration within the prescribed timeline, otherwise customs clearance can be delayed and the shipment may face policy-compliance complications."
  },
  {
    question: "What is the difference between SIMS, PIMS, NFMIMS, and CIMS?",
    answer:
      "These are product-specific import monitoring systems. SIMS generally covers notified steel items, PIMS covers notified paper items, NFMIMS covers notified non-ferrous items such as copper and aluminium, and CIMS covers notified coal categories. The exact product coverage depends on current DGFT notifications and ITC(HS) mapping."
  },
  {
    question: "Why is HS code mapping important in import management registration?",
    answer:
      "The registration requirement depends on the exact ITC(HS) classification. A small HSN or ITC(HS) mismatch can push the importer into the wrong monitoring category or make the registration unusable at the time of bill-of-entry filing."
  },
  {
    question: "What documents are required for import monitoring registration?",
    answer:
      "Typical records include IEC details, product description, ITC(HS) code, supplier invoice, quantity, CIF value, expected arrival details, port details, and other product-specific declarations depending on the notified system."
  },
  {
    question: "How long is an import monitoring registration valid?",
    answer:
      "Validity depends on the notified system and the underlying policy framework. Importers should always align registration timing with the current DGFT notification and shipment plan rather than assuming one validity rule for every regime."
  },
  {
    question: "Can one registration cover multiple consignments?",
    answer:
      "That depends on the specific monitoring system and the notified conditions. Some registrations are consignment-linked, while others may allow broader usage within a defined validity framework. The filing approach should be checked case by case."
  },
  {
    question: "How does EXIMINQ help with import management registration?",
    answer:
      "We help importers identify the applicable monitoring system, validate ITC(HS) mapping, prepare product data, complete filing, review shipment timing, and reduce customs delays caused by policy-condition mistakes."
  }
];

const IMS_BENEFITS = [
  "Prevents avoidable customs delay caused by missing or incorrect product-specific monitoring registration.",
  "Improves shipment readiness by aligning invoice data, ITC(HS) mapping, and expected arrival timing before filing.",
  "Reduces compliance risk where goods are notified under SIMS, PIMS, NFMIMS, CIMS, or other import-monitoring frameworks.",
  "Supports cleaner coordination between importer, CHA, finance team, and supplier before the bill of entry is filed."
];

const IMS_ELIGIBILITY = [
  "Importer has goods that fall under a notified DGFT import monitoring system or related prior-registration requirement.",
  "IEC, invoice, product description, quantity, CIF value, and expected shipment details are available for pre-filing review.",
  "The product classification can be mapped accurately to the relevant ITC(HS) code and policy condition.",
  "The shipment still has enough time for valid prior registration before customs or arrival-based compliance issues arise."
];

const IMS_DOCUMENTS = [
  "IEC, PAN, GST, and importer profile details linked to the DGFT portal workflow.",
  "Supplier invoice, product description, quantity, country of origin, and CIF or shipment value details.",
  "ITC(HS) code mapping and item-wise product specifications where the monitoring regime depends on precise classification.",
  "Port of import, expected date of arrival, bill-of-lading or shipment references, and any product-specific declarations required by the notified system."
];

const IMS_TIMELINE = [
  {
    title: "Product and policy screening",
    detail:
      "We first identify whether the product is covered under SIMS, PIMS, NFMIMS, CIMS, CHIMS, or another notified import-monitoring regime."
  },
  {
    title: "ITC(HS) and invoice alignment",
    detail:
      "Importer invoice data, classification, quantity, and shipment details are checked so the registration fits the bill-of-entry workflow cleanly."
  },
  {
    title: "Timeline and arrival planning",
    detail:
      "The filing is timed around the relevant prior-registration rules so the shipment is not exposed to avoidable late-filing risk."
  },
  {
    title: "Portal filing and registration capture",
    detail:
      "The applicable import monitoring registration is prepared and filed with the correct importer data, product references, and value details."
  },
  {
    title: "Customs-use readiness",
    detail:
      "After registration, the record is kept ready for CHA and customs usage so the number and product data can be used properly during clearance."
  }
];

const IMS_REFERENCES = [
  {
    label: "DGFT services portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "DGFT ITC(HS) and policy resources",
    href: "https://www.dgft.gov.in/CP/?opt=itc-hs"
  },
  {
    label: "DGFT Handbook of Procedures reference",
    href: "https://content.dgft.gov.in/Website/dgftprod/e1cb52ea-0c3a-4c2a-8cd7-dd992e9bdc98/HBP_2023.pdf"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/ad-code-registration/",
    title: "AD Code Registration",
    description:
      "Relevant where importer-exporter banking and customs record alignment are part of the broader clearance workflow."
  },
  {
    href: "/services/icegate-registration/",
    title: "ICEGATE Registration",
    description:
      "Useful when customs-facing digital access, filing readiness, and profile setup need to work alongside import-monitoring compliance."
  },
  {
    href: "/services/moowr-scheme/",
    title: "MOOWR Scheme",
    description:
      "Important for import-heavy businesses that are also planning warehouse or duty-optimisation structures."
  },
  {
    href: "/foreign-trade-policy/regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Track current policy changes, import notifications, and product-specific compliance updates affecting monitored imports."
  }
];

const WHY_CLOUDDESK = [
  {
    title: "Pre-shipment compliance timing",
    text:
      "Import monitoring registration is often not difficult because of the form. It becomes difficult when timing is missed. We align the registration with the shipment plan so the importer does not discover the requirement only when customs filing begins.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "ITC(HS) and product-description control",
    text:
      "A wrong item description or code can put the importer into the wrong monitoring regime. We review the product and classification logic before filing so the registration works in the real customs workflow.",
    icon: ShieldCheck,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Product-specific regime matching",
    text:
      "Steel, paper, non-ferrous metals, coal, and electronics do not sit under one generic process. We identify the correct regime first, then structure the registration around the actual product and policy requirement.",
    icon: FileCheck,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Importer, CHA, and customs coordination",
    text:
      "The registration only creates value when it can be used cleanly during bill-of-entry preparation and customs clearance. We therefore optimise for downstream usability, not just registration completion.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskImporters = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: ""
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>
          Import Management Registration Consultant India | SIMS, PIMS,
          NFMIMS, CIMS & DGFT Import Monitoring Support | EXIMINQ
        </title>

        <meta
          name="description"
          content="Import management registration consultant in India for SIMS, PIMS, NFMIMS, CIMS, CHIMS, ITC(HS) mapping, shipment-timing review, and DGFT import monitoring compliance support."
        />
        <meta
          name="keywords"
          content="import management registration consultant, import monitoring registration India, SIMS registration consultant, PIMS registration consultant, NFMIMS consultant, CIMS registration, DGFT import monitoring system, import compliance registration"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/import-management-registration/"
        />

        <meta
          property="og:title"
          content="Import Management Registration Consultant India | SIMS, PIMS, NFMIMS & CIMS Support"
        />
        <meta
          property="og:description"
          content="Get end-to-end import management registration support for SIMS, PIMS, NFMIMS, CIMS, shipment timing, ITC(HS) mapping, and DGFT compliance."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/import-management-registration/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/import-management-registration/",
                url: "https://eximinq.in/services/import-management-registration/",
                name:
                  "Import Management Registration Consultant India | SIMS, PIMS, NFMIMS, CIMS & DGFT Import Monitoring Support | EXIMINQ",
                description:
                  "Import management registration consultant in India for SIMS, PIMS, NFMIMS, CIMS, CHIMS, ITC(HS) mapping, shipment-timing review, and DGFT import monitoring compliance support.",
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
                    item: "https://eximinq.in/services/"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Import Management Registration",
                    item: "https://eximinq.in/services/import-management-registration/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Import Management Registration Consultancy",
                serviceType:
                  "DGFT import monitoring and prior-registration support",
                description:
                  "Registration support for SIMS, PIMS, NFMIMS, CIMS, CHIMS, and other import monitoring systems, including ITC(HS) review and shipment-timing compliance.",
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
                mainEntity: IMS_FAQS.map((item) => ({
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
        <MainNavbar setShowEnrollModal={setShowEnrollModal} />
        <Navbar setShowEnrollModal={setShowEnrollModal} />
        <Hero setShowEnrollModal={setShowEnrollModal} />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          onSubmit={handleEnrollmentSubmit}
        />

        <section id="overview" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Import Compliance Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Import Management Registration for Product-Specific DGFT
                Monitoring Systems
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                The intent behind searches like{" "}
                <strong>import management registration consultant</strong>,{" "}
                <strong>SIMS registration</strong>, and{" "}
                <strong>DGFT import monitoring system</strong> is practical:
                importers want the right registration in time so the shipment
                clears without policy-side friction.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  <strong>Import management registration</strong> is the
                  working compliance layer used when notified products are
                  covered under a monitoring or prior-registration system before
                  import into India. These frameworks are commonly linked to
                  product category, ITC(HS) code, shipment timing, and DGFT
                  policy notifications.
                </p>
                <p>
                  The commercial problem is not just portal filing. It is
                  identifying the correct monitoring regime, preparing the
                  product data accurately, and filing within the required
                  timeline so customs clearance is not disrupted at the bill of
                  entry stage.
                </p>
                <p>
                  Importers searching for support usually need help with{" "}
                  <strong>SIMS</strong>, <strong>PIMS</strong>,{" "}
                  <strong>NFMIMS</strong>, <strong>CIMS</strong>, or another
                  notified registration process. The right filing strategy
                  depends on product classification, shipment readiness, and
                  notification-based policy conditions.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Search-Intent Topics This Page Covers
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Import management registration consultant in India",
                    "SIMS, PIMS, NFMIMS, CIMS, and CHIMS support",
                    "ITC(HS) mapping and product-coverage checks",
                    "Prior-registration and shipment-timing review",
                    "Importer document checklist and compliance workflow",
                    "Customs-use readiness for monitored imports"
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="systems" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Monitoring Regimes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Common Import Management Registration Categories
              </h2>
              <p className="text-slate-500 mt-2">
                Product-specific registration depends on the notified regime and
                correct ITC(HS) mapping.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-slate-800 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Steel (SIMS)
                  </h3>
                  <HardHat className="text-slate-400 text-2xl group-hover:text-slate-800 transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Used for notified iron and steel imports where monitoring
                  compliance depends on correct product classification and timely
                  prior registration.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      type: "Steel_Import_NOC_SIMS"
                    })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Get SIMS Support <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-orange-600 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Copper (NFMIMS)
                  </h3>
                  <Magnet className="text-orange-400 text-2xl group-hover:text-orange-600 transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Relevant where notified non-ferrous copper items fall under
                  the DGFT monitoring framework and need compliant prior
                  registration.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Copper_NFMIMS" })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Register Copper <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-slate-400 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Aluminium (NFMIMS)
                  </h3>
                  <Layers className="text-slate-300 text-2xl group-hover:text-slate-500 transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Used for notified aluminium items where import monitoring is
                  linked to the exact product code and shipment particulars.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Aluminium_NFMIMS" })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Register Aluminium <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-black group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Coal (CIMS)
                  </h3>
                  <Flame className="text-slate-400 text-2xl group-hover:text-black transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Relevant for notified coal categories where importer-side
                  monitoring registration must be handled before customs-facing
                  documentation is completed.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Coal_CIMS" })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Get CIMS Support <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-blue-400 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Paper (PIMS)
                  </h3>
                  <Scroll className="text-blue-300 text-2xl group-hover:text-blue-500 transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Used where notified paper products are covered under the paper
                  import monitoring framework and shipment values must be filed
                  correctly.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Paper_PIMS" })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Get PIMS Support <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-green-500 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    Chips and Electronics (CHIMS)
                  </h3>
                  <Cpu className="text-green-300 text-2xl group-hover:text-green-500 transition" />
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Useful when notified electronics or chip-related products fall
                  under a dedicated import-monitoring requirement with
                  product-wise control.
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Chip_CHIMS" })
                  }
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                >
                  Register Chips <ArrowRight size={12} className="ml-1" />
                </button>
              </div>

              <div className="bg-brand-900 rounded-xl shadow-sm p-6 text-white flex flex-col justify-center items-center text-center lg:col-span-3">
                <Headphones className="text-4xl text-accent-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-xs text-slate-300 mb-4">
                  Not sure which monitoring regime applies to your product or HS
                  code?
                </p>
                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      type: "NEED_HELP"
                    })
                  }
                  className="bg-white text-brand-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-accent-400 transition"
                >
                  Contact Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Proper Import Management Registration Matters
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                For monitored products, the registration supports customs
                readiness, policy compliance, and shipment timing discipline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {IMS_BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-accent-400 shrink-0 mt-1" />
                    <p className="text-slate-100 leading-7">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="eligibility" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Eligibility and Fit
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                  Who Needs Import Management Registration Support
                </h2>
                <p className="text-slate-600 leading-8">
                  This page is strongest for search when it clearly answers who
                  needs the service, what data must be prepared, and when the
                  filing becomes operationally critical.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
                <ul className="space-y-4">
                  {IMS_ELIGIBILITY.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <ShieldUser className="w-5 h-5 text-brand-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Documents Required
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Documents Commonly Needed for Import Monitoring Registration
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {IMS_DOCUMENTS.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="flex gap-3">
                    <FileCheck className="w-5 h-5 text-brand-600 shrink-0 mt-1" />
                    <p className="text-slate-700 leading-7">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Filing Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Import Management Registration Process Flow
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {IMS_TIMELINE.map((step, index) => (
                <article
                  key={step.title}
                  className="bg-slate-50 rounded-3xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 font-bold flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-7">
                    {step.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Fees setShowEnrollModal={setShowEnrollModal} />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for Import Management Registration?
              </h2>
              <p className="text-slate-500">
                Import monitoring is manageable when product mapping, timing,
                and customs use are handled before the shipment becomes urgent.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {WHY_CLOUDDESK.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div
                      className={`p-3 rounded-lg h-fit ${item.tone}`}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="references" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
                  Trust and E-E-A-T
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
                  Government References, Timing Risks, and Customs Readiness
                </h2>
                <p className="text-slate-300 leading-8 mb-6">
                  Import management registration is a policy-sensitive service.
                  The page should make it clear that the workflow depends on
                  notified product coverage, correct ITC(HS) mapping, and
                  timeline discipline before clearance.
                </p>

                <div className="space-y-4">
                  {[
                    "A product can fall into the wrong monitoring category if ITC(HS) classification is not checked carefully.",
                    "Late prior registration can weaken customs readiness and create avoidable shipment delay.",
                    "Shipment values, quantity, and invoice details must align with the eventual customs filing trail.",
                    "The correct monitoring regime should be identified before portal filing so the importer does not rely on unusable registration data."
                  ].map((risk) => (
                    <div key={risk} className="flex gap-3">
                      <Clock3 className="w-5 h-5 text-accent-400 shrink-0 mt-1" />
                      <p className="text-slate-200">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-5">
                  Official and Useful References
                </h3>
                <div className="space-y-4">
                  {IMS_REFERENCES.map((reference) => (
                    <a
                      key={reference.href}
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
                    >
                      <div className="flex gap-3">
                        <Landmark className="w-5 h-5 text-accent-400 shrink-0 mt-1" />
                        <span className="text-slate-100">{reference.label}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0 text-accent-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Frequently Asked Questions About Import Management Registration
              </h2>
            </div>

            <div className="space-y-4">
              {IMS_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center gap-4">
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      className="text-brand-500 transition-transform shrink-0 group-open:rotate-180"
                    />
                  </summary>

                  <p className="text-sm text-slate-600 mt-4 leading-7">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Internal Linking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Related Services and Compliance Pages
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:border-brand-300 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mt-3 leading-7">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-600 shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <footer className="bg-slate-950 text-slate-300 py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">EXIMINQ</h3>
                <p className="text-sm leading-7">
                  DGFT, customs, and trade-compliance support for importers and
                  exporters across India.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Useful Links</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/services" className="hover:text-white">
                      Service Directory
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/foreign-trade-policy"
                      className="hover:text-white"
                    >
                      Foreign Trade Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/foreign-trade-policy/regulatory-updates"
                      className="hover:text-white"
                    >
                      Regulatory Updates
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">
                  Related Services
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      to="/services/icegate-registration/"
                      className="hover:text-white"
                    >
                      ICEGATE Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ad-code-registration/"
                      className="hover:text-white"
                    >
                      AD Code Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/moowr-scheme/"
                      className="hover:text-white"
                    >
                      MOOWR Scheme
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/customs-adjudication"
                      className="hover:text-white"
                    >
                      Customs Adjudication
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Phone className="w-4 h-4 shrink-0 mt-1" />
                    <a href="tel:+917400096950" className="hover:text-white">
                      +91 74000 96950
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-4 h-4 shrink-0 mt-1" />
                    <a
                      href="mailto:clouddesk@eximinq.in"
                      className="hover:text-white break-all"
                    >
                      clouddesk@eximinq.in
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 shrink-0 mt-1" />
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">
                © 2026 EXIMINQ. Import monitoring and DGFT compliance support
                for Indian importers.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition"
                  aria-label="X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskImporters;
