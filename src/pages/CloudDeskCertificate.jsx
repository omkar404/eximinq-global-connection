import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/CloudDeskCertificate/Navbar";
import Hero from "../components/CloudDeskCertificate/Hero";
import Fees from "../components/CloudDeskCertificate/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  ShieldUser,
  Phone,
  Mail,
  MapPin,
  Percent,
  Globe2,
  Handshake,
  CheckCircle,
  FileCheck,
  ShieldCheck,
  Clock3,
  Landmark,
  ArrowRight
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCertificate/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskCertificate/ModalEnroll";

const COO_FAQS = [
  {
    question: "What is a Certificate of Origin in exports?",
    answer:
      "A Certificate of Origin is a trade document that confirms the originating country of the exported goods. Import customs and overseas buyers use it to verify origin, determine duty treatment, and complete trade-compliance checks."
  },
  {
    question: "What is the difference between preferential and non-preferential Certificate of Origin?",
    answer:
      "A preferential Certificate of Origin is used when the shipment qualifies under a free trade agreement or similar treaty so the importer can claim lower or zero duty. A non-preferential Certificate of Origin is used as general proof of origin where no treaty preference is being claimed."
  },
  {
    question: "Who issues a Certificate of Origin in India?",
    answer:
      "Depending on the scheme and destination market, a Certificate of Origin may be issued through authorised export-promotion bodies, chambers of commerce, or the DGFT-linked common digital platform for preferential origin documentation."
  },
  {
    question: "Why are Rules of Origin important for Certificate of Origin filing?",
    answer:
      "Rules of Origin determine whether a product genuinely qualifies as originating in India under the relevant agreement. If the value addition, tariff-shift, or wholly obtained criteria are not met, the importer can lose the duty benefit and the exporter can face audit risk."
  },
  {
    question: "Can Certificate of Origin be issued after export?",
    answer:
      "Retrospective issuance may be possible in some cases depending on the agreement, the issuing authority, and the documentary trail. The file must still be reviewed carefully because late issuance can attract extra scrutiny."
  },
  {
    question: "What documents are usually needed for Certificate of Origin application?",
    answer:
      "Typical records include commercial invoice, packing list, shipping bill details, product description, HS code, manufacturer declaration, bill of lading or airway bill references, and supporting origin evidence depending on the agreement."
  },
  {
    question: "How long does Certificate of Origin processing take?",
    answer:
      "A clean non-preferential file can often move quickly, while preferential origin applications may require more review because treaty eligibility, issuing-agency rules, and origin criteria need to be validated before filing."
  },
  {
    question: "How does EXIMINQ help with Certificate of Origin services?",
    answer:
      "We support document review, FTA eligibility checks, Rules of Origin validation, portal filing support, issuing-agency coordination, discrepancy handling, and shipment-level compliance review before the Certificate of Origin is used by the importer."
  }
];

const COO_BENEFITS = [
  "Supports lower or zero import duty claims when the shipment qualifies under an FTA, CEPA, CECA, PTA, or similar arrangement.",
  "Improves buyer confidence by providing clean origin evidence aligned with invoice, packing list, and shipping documents.",
  "Reduces customs delays caused by incomplete origin declarations or mismatched exporter documentation.",
  "Creates a stronger audit trail when importer customs or banks ask for origin proof during trade verification."
];

const COO_ELIGIBILITY = [
  "Exporter has a valid IEC and a shipment requiring origin certification for customs clearance, treaty benefit, banking, or buyer compliance.",
  "Product origin can be supported through manufacturer records, sourcing evidence, or treaty-specific Rules of Origin criteria.",
  "Invoice, packing list, HS classification, and shipment references are ready for review before submission.",
  "Destination market or buyer specifically asks for either preferential or non-preferential origin proof."
];

const COO_DOCUMENTS = [
  "IEC, GST, PAN, company constitution documents, and authorised signatory details.",
  "Commercial invoice, packing list, purchase order, and shipping schedule.",
  "Shipping bill, bill of lading or airway bill, and destination-country shipment references.",
  "Product description, HS code, manufacturing or sourcing support, and exporter declaration.",
  "Agreement-specific origin support such as value-addition workings, supplier declarations, or product-wise origin justification where required."
];

const COO_TIMELINE = [
  {
    title: "Shipment and agreement review",
    detail:
      "We first identify whether the shipment needs a preferential or non-preferential Certificate of Origin and whether a treaty benefit is realistically claimable."
  },
  {
    title: "Rules of Origin validation",
    detail:
      "For treaty-based filings, we review origin criteria such as wholly obtained, tariff shift, or value-addition logic before the file reaches the issuing workflow."
  },
  {
    title: "Document alignment",
    detail:
      "Invoice, packing list, HS code, exporter declaration, and transport references are aligned so the origin certificate does not conflict with the shipment record."
  },
  {
    title: "Portal or issuing-agency filing",
    detail:
      "The application is prepared and submitted through the relevant chamber, export-promotion body, or digital platform based on the type of Certificate of Origin needed."
  },
  {
    title: "Approval and post-issue support",
    detail:
      "Once approved, we support certificate download, discrepancy correction, buyer communication, and audit-ready record keeping for later customs verification."
  }
];

const COO_REFERENCES = [
  {
    label: "DGFT Certificate of Origin services portal",
    href: "https://www.dgft.gov.in/CP/?opt=certificate-of-origin"
  },
  {
    label: "DGFT Handbook of Procedures reference",
    href: "https://content.dgft.gov.in/Website/dgftprod/e1cb52ea-0c3a-4c2a-8cd7-dd992e9bdc98/HBP_2023.pdf"
  },
  {
    label: "DGFT trade-policy and services index",
    href: "https://www.dgft.gov.in/CP/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/rex-registration",
    title: "REX Registration",
    description:
      "Useful when exports to relevant markets require self-certification or linked origin declarations."
  },
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation",
    description:
      "Related when exporters are planning duty-saving structures alongside origin and export-document strategy."
  },
  {
    href: "/services/epcg-scheme",
    title: "EPCG Scheme",
    description:
      "Helpful for capital-goods import planning where export compliance and treaty-facing documents also matter."
  },
  {
    href: "/foreign-trade-policy/regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Track policy notifications, trade-circular changes, and compliance updates that may affect origin filing and export documentation."
  }
];

const WHY_CLOUDDESK = [
  {
    title: "FTA and duty-benefit screening before filing",
    text:
      "Many exporters file a Certificate of Origin because the buyer asks for it, without confirming whether the shipment actually qualifies for treaty benefit. We screen the commercial value of the filing first so the exporter is not paying for unusable origin paperwork.",
    icon: Percent,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Rules of Origin validation",
    text:
      "A preferential Certificate of Origin becomes risky when the origin claim is weak. We review product origin logic, classification, supplier support, and value-addition positioning before the claim reaches the importer or customs authority.",
    icon: ShieldCheck,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Shipment-document consistency",
    text:
      "Customs issues often start with mismatches between the certificate, invoice, packing list, and shipment record. We align the working file so the importer sees one coherent compliance trail instead of conflicting paperwork.",
    icon: FileCheck,
    tone: "bg-amber-100 text-amber-600"
  },
  {
    title: "Importer-facing risk reduction",
    text:
      "The commercial objective is not just certificate issuance. It is successful use of the certificate by the overseas buyer. We therefore optimise for approval, clarity, and downstream customs acceptance rather than form completion alone.",
    icon: Globe2,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskCertificate = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);
    alert("Form submitted - check console for data.");
  };

  return (
    <>
      <Helmet>
        <title>
          Certificate of Origin Consultant India | Preferential and
          Non-Preferential COO Services | EXIMINQ
        </title>
        <meta
          name="description"
          content="Certificate of Origin consultant in India for preferential and non-preferential COO, Rules of Origin review, FTA eligibility checks, DGFT filing support, and exporter document compliance."
        />
        <meta
          name="keywords"
          content="certificate of origin consultant, COO consultant India, preferential certificate of origin, non preferential certificate of origin, DGFT certificate of origin, rules of origin consultant, FTA certificate of origin India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/certificate-of-origin/"
        />
        <meta
          property="og:title"
          content="Certificate of Origin Consultant India | Preferential and Non-Preferential COO Services"
        />
        <meta
          property="og:description"
          content="Get end-to-end Certificate of Origin support for preferential and non-preferential COO, FTA eligibility, Rules of Origin validation, and digital filing assistance."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/certificate-of-origin/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/certificate-of-origin/",
                url: "https://eximinq.in/services/certificate-of-origin/",
                name:
                  "Certificate of Origin Consultant India | Preferential and Non-Preferential COO Services | EXIMINQ",
                description:
                  "Certificate of Origin consultant in India for preferential and non-preferential COO, Rules of Origin review, FTA eligibility checks, DGFT filing support, and exporter document compliance.",
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
                    name: "Certificate of Origin",
                    item: "https://eximinq.in/services/certificate-of-origin/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Certificate of Origin Consultancy",
                serviceType:
                  "Preferential and non-preferential Certificate of Origin support",
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
                  "Certificate of Origin consulting for FTA eligibility, Rules of Origin validation, documentation review, and issuing-platform support for exporters in India."
              },
              {
                "@type": "FAQPage",
                mainEntity: COO_FAQS.map((item) => ({
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
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />

        <section id="overview" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Certificate of Origin Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Certificate of Origin Support for Exporters Who Need Accuracy,
                Not Just Issuance
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                The core search intent behind{" "}
                <strong>certificate of origin consultant</strong>,{" "}
                <strong>preferential certificate of origin</strong>, and{" "}
                <strong>non-preferential certificate of origin</strong> queries
                is simple: exporters want the correct origin document, filed the
                right way, so the buyer can actually use it.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  A <strong>Certificate of Origin</strong> is a shipment-linked
                  trade document that confirms the country of origin of exported
                  goods. It is used by overseas customs, importers, banks, and
                  compliance teams to validate origin, assess tariff treatment,
                  and support import clearance.
                </p>
                <p>
                  Where the shipment qualifies under a trade agreement, a{" "}
                  <strong>preferential Certificate of Origin</strong> can help
                  the importer claim lower or zero customs duty. Where no treaty
                  preference is involved, a{" "}
                  <strong>non-preferential Certificate of Origin</strong> still
                  acts as essential documentary proof of origin.
                </p>
                <p>
                  For exporters, the real risk is not whether a form can be
                  submitted. It is whether the origin claim stands up when the
                  importer, chamber, or customs authority compares the
                  certificate with the invoice, HS code, and Rules of Origin
                  requirements. That is where disciplined pre-filing review
                  matters.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Search-Intent Topics This Page Covers
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Certificate of Origin consultant in India",
                    "Preferential and non-preferential COO",
                    "DGFT Certificate of Origin filing support",
                    "Rules of Origin and FTA eligibility checks",
                    "Documents required for Certificate of Origin",
                    "Timeline, issuing agencies, and audit risks"
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

        <section id="types" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Preferential vs Non-Preferential
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Choose the Right Certificate of Origin Route
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white rounded-3xl border border-green-100 shadow-sm p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <Percent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Preferential Certificate of Origin
                    </h3>
                    <p className="text-sm text-slate-500">
                      Used when the shipment qualifies for treaty-based duty
                      benefit
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-7 mb-4">
                  This route is generally used when the export falls under an
                  FTA, PTA, CEPA, CECA, or similar agreement and the product can
                  satisfy the applicable <strong>Rules of Origin</strong>. The
                  importer may then claim reduced or zero import duty.
                </p>

                <div className="rounded-2xl bg-green-50 border border-green-200 p-4 text-sm text-green-900">
                  Common use case: when the buyer specifically wants treaty
                  benefit and the shipment origin must be defensible under the
                  agreement.
                </div>
              </article>

              <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <Globe2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Non-Preferential Certificate of Origin
                    </h3>
                    <p className="text-sm text-slate-500">
                      Used for general proof of origin without treaty preference
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-7 mb-4">
                  This route is used when the buyer, customs authority, or bank
                  needs origin confirmation but no specific tariff concession is
                  being claimed under a treaty. It remains a critical export
                  document for documentary and compliance purposes.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-800">
                  Common use case: when the shipment needs country-of-origin
                  proof for import clearance, documentary collection, or buyer
                  compliance checks.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why a Properly Filed Certificate of Origin Matters
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                A Certificate of Origin affects duty savings, shipment
                acceptance, importer confidence, and audit survivability. It is
                not just an exporter-side formality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {COO_BENEFITS.map((benefit) => (
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
                  Who Should Apply for Certificate of Origin Support
                </h2>
                <p className="text-slate-600 leading-8">
                  The page should rank best when it solves exporter intent
                  clearly. That means explaining who actually needs the service,
                  what records must already exist, and when treaty-origin review
                  becomes commercially important.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
                <ul className="space-y-4">
                  {COO_ELIGIBILITY.map((item) => (
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
                Documents Commonly Needed for Certificate of Origin Filing
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {COO_DOCUMENTS.map((item) => (
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

        <section id="agreements" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Agreements and Markets
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Common Trade-Agreement Context for Preferential COO
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Exporters often want to know whether a shipment can move under a
                specific agreement and whether a COO claim is worth pursuing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "India-UAE CEPA",
                  text:
                    "Relevant for shipments where preferential access depends on treaty-eligible origin and proper exporter documentation."
                },
                {
                  name: "AIFTA and ASEAN-linked trade",
                  text:
                    "Frequently relevant for exporters shipping into ASEAN markets where origin qualification affects landed cost."
                },
                {
                  name: "SAFTA and regional treaty flows",
                  text:
                    "Useful where regional tariff preference and documentary proof of origin are part of buyer expectations."
                },
                {
                  name: "APTA and other notified arrangements",
                  text:
                    "Important where customs benefit depends on correct agreement selection and defensible product-origin logic."
                },
                {
                  name: "Australia and other CEPA or ECTA routes",
                  text:
                    "Relevant when treaty benefit exists but the exporter still needs to validate origin criteria before the buyer claims preference."
                },
                {
                  name: "General non-treaty export markets",
                  text:
                    "Even where no preference is claimed, non-preferential COO can still be mandatory for customs, banking, or buyer onboarding."
                }
              ].map((item) => (
                <article
                  key={item.name}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-5 h-5 text-brand-600" />
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-7">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Filing Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Certificate of Origin Process Flow
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {COO_TIMELINE.map((step, index) => (
                <article
                  key={step.title}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
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
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Why EXIMINQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Why Exporters Use CloudDesk for Certificate of Origin Filing
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {WHY_CLOUDDESK.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 p-7 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.tone}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-7">{item.text}</p>
                    </div>
                  </article>
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
                  Government References, Timelines, and Risk Points
                </h2>
                <p className="text-slate-300 leading-8 mb-6">
                  Certificate of Origin is a trust-sensitive trade-compliance
                  service. The page should make it obvious that the workflow is
                  grounded in official systems, issuing protocols, and
                  shipment-level compliance discipline.
                </p>

                <div className="space-y-4">
                  {[
                    "Treaty-origin claims should be validated before promising duty benefit to the importer.",
                    "HS classification mismatch can weaken a preferential-origin filing even when the exporter believes the product is eligible.",
                    "Retrospective or urgent cases need cleaner explanation and record support because they can attract extra scrutiny.",
                    "Document consistency across invoice, packing list, shipping bill, and certificate remains a high-impact risk area."
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
                  {COO_REFERENCES.map((reference) => (
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
                Frequently Asked Questions About Certificate of Origin
              </h2>
            </div>

            <div className="space-y-4">
              {COO_FAQS.map((item) => (
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
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                These contextual links strengthen crawl paths, semantic
                clustering, and user navigation around export benefits,
                compliance, and origin documentation.
              </p>
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

        <section id="contact" className="bg-gradient-to-br from-brand-900 to-[#164e96] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 bg-white rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="bg-brand-700 text-white p-10 lg:p-14">
                <span className="text-accent-300 font-bold uppercase tracking-wider text-sm">
                  Conversion-Focused CTA
                </span>
                <h2 className="text-4xl font-bold mt-3 mb-5">
                  Need the Right Certificate of Origin for Your Shipment?
                </h2>
                <p className="text-blue-100 text-lg leading-8 mb-8">
                  We help exporters choose the correct COO route, validate FTA
                  eligibility, and keep the shipment documents aligned so the
                  importer can actually use the certificate without friction.
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

              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Start Your Certificate of Origin Request
                </h3>
                <p className="text-slate-600 leading-7 mb-8">
                  Use the application options below for preferential or
                  non-preferential filing support, or speak to our team before
                  submission if your buyer is claiming treaty duty benefit.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() =>
                      setShowEnrollModal({
                        open: true,
                        type: "PREFERENTIAL_COO"
                      })
                    }
                    className="rounded-2xl bg-brand-700 text-white font-bold py-4 px-6 hover:bg-brand-800 transition"
                  >
                    Apply for Preferential COO
                  </button>
                  <button
                    onClick={() =>
                      setShowEnrollModal({
                        open: true,
                        type: "NON_PREFERENTIAL_COO"
                      })
                    }
                    className="rounded-2xl border border-slate-300 text-slate-900 font-bold py-4 px-6 hover:bg-slate-50 transition"
                  >
                    Apply for Non-Preferential COO
                  </button>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-600">
                  Best for: exporters handling first-time treaty shipments,
                  multi-country buyer requests, chamber-origin discrepancies, or
                  shipment files that need a stronger compliance review before
                  issue.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-300 py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">EXIMINQ</h3>
                <p className="text-sm leading-7">
                  Export compliance, DGFT support, customs advisory, and
                  certificate workflows for Indian importers and exporters.
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
                      to="/services/rex-registration"
                      className="hover:text-white"
                    >
                      REX Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/advance-authorisation/"
                      className="hover:text-white"
                    >
                      Advance Authorisation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/epcg-scheme"
                      className="hover:text-white"
                    >
                      EPCG Scheme
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/rodtep-scheme"
                      className="hover:text-white"
                    >
                      RoDTEP Scheme
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
                © 2026 EXIMINQ. Certificate of Origin consulting for exporters
                in India.
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

export default CloudDeskCertificate;
