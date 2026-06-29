import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/CloudDeskDigitalSignatures/Navbar";
import Hero from "../components/CloudDeskDigitalSignatures/Hero";
import Fees from "../components/CloudDeskDigitalSignatures/Fees";
import { ModalEnroll } from "../components/CloudDeskDigitalSignatures/ModalEnroll";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  ShieldUser,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Ship,
  Info,
  ShieldCheck,
  FileCheck,
  RefreshCcw,
  Landmark,
  ArrowRight
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";

const DSC_FAQS = [
  {
    question: "What is a Class 3 Digital Signature Certificate?",
    answer:
      "A Class 3 Digital Signature Certificate is a secure digital identity credential issued to an individual or authorised signatory for legally signing online forms, filings, and regulated documents on government and enterprise portals."
  },
  {
    question: "Where is a DSC used in export and customs work?",
    answer:
      "A DSC is commonly used on DGFT, ICEGATE, GST, MCA, income-tax, e-tender, and other portals where secure identity validation, document signing, or encryption is required."
  },
  {
    question: "What is the difference between signing and encryption DSC?",
    answer:
      "Signing proves the identity of the signatory and the integrity of the document. Encryption protects the data so it can be securely read by the intended system or recipient. Some customs and tender workflows need both."
  },
  {
    question: "Is Class 2 DSC still valid for government portal filings?",
    answer:
      "No. Current portal workflows generally require Class 3 DSC standards for regulated digital signing and identity assurance."
  },
  {
    question: "Can the same DSC be used on DGFT, ICEGATE, GST, and MCA?",
    answer:
      "Yes, if the authorised signatory and portal-specific profile mapping are handled properly. The same individual DSC can often be used across multiple compliant roles, but the portal linkage and registration must still be completed correctly."
  },
  {
    question: "How long does it take to get a DSC?",
    answer:
      "Approval time depends on eKYC readiness, video verification, organisation documents, and provider process. Straightforward cases can move quickly, while entity-mapping issues or document mismatches can slow the workflow."
  },
  {
    question: "What documents are usually required for DSC issuance?",
    answer:
      "Typical documents include PAN, Aadhaar-linked mobile verification, email and phone details, photo identity support, and in organisation cases, authorisation records and business documents for the signatory."
  },
  {
    question: "How does EXIMINQ help with DSC services?",
    answer:
      "We help with Class 3 DSC issuance, token and document guidance, authorised-signatory validation, DGFT or ICEGATE mapping readiness, and renewal or replacement support where the live portal usage matters."
  }
];

const DSC_BENEFITS = [
  "Enables legally valid digital signing on DGFT, ICEGATE, GST, MCA, and other filing platforms.",
  "Improves continuity in export and customs workflows where portal access and digital authentication are mandatory.",
  "Reduces rejection risk caused by the wrong signatory profile, incomplete mapping, or weak document preparation.",
  "Supports faster onboarding for traders, companies, LLPs, proprietors, and authorised signatories handling multiple regulated portals."
];

const DSC_ELIGIBILITY = [
  "Individual or authorised signatory needs to sign, encrypt, or authenticate filings on government or trade portals.",
  "PAN, Aadhaar-linked verification, contact details, and signatory proof can be produced for the DSC application.",
  "Business entity records are available where the DSC is being issued for an organisation, LLP, company, or other legal entity.",
  "The applicant needs portal readiness for DGFT, ICEGATE, GST, MCA, e-tender, or related regulated digital workflows."
];

const DSC_DOCUMENTS = [
  "PAN card and Aadhaar-linked mobile verification for the applicant or authorised signatory.",
  "Email ID, mobile number, photograph, and identity details required during eKYC or video verification.",
  "Organisation records such as GST, incorporation proof, board resolution, authorisation letter, or signatory support where relevant.",
  "Existing token details, prior DSC data, or portal-mapping references in renewal, replacement, or migration cases."
];

const DSC_TIMELINE = [
  {
    title: "Signatory review",
    detail:
      "We first confirm who should hold the DSC and whether the applicant is filing as an individual, proprietor, company signatory, LLP representative, or other authorised user."
  },
  {
    title: "Document and eKYC preparation",
    detail:
      "PAN, Aadhaar, photo, business records, and signatory support are aligned before the request moves into verification."
  },
  {
    title: "Video verification and issuance",
    detail:
      "The applicant completes the verification workflow required by the issuing process so the Class 3 DSC can be approved and made ready for use."
  },
  {
    title: "Token and installation readiness",
    detail:
      "The certificate is set up for practical usage, including token guidance where relevant and readiness for signing or encryption workflows."
  },
  {
    title: "Portal mapping support",
    detail:
      "DGFT, ICEGATE, GST, MCA, or other portal readiness is reviewed so the DSC is not just issued, but actually usable in the target workflow."
  }
];

const DSC_REFERENCES = [
  {
    label: "DGFT services portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "ICEGATE portal",
    href: "https://www.icegate.gov.in/"
  },
  {
    label: "Controller of Certifying Authorities",
    href: "https://cca.gov.in/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/icegate-registration/",
    title: "ICEGATE Registration",
    description:
      "Useful when DSC issuance must also be matched with ICEGATE profile setup and customs-filing readiness."
  },
  {
    href: "/services/ad-code-registration/",
    title: "AD Code Registration",
    description:
      "Relevant where customs or exporter workflows depend on both portal access and valid signatory-linked digital approval."
  },
  {
    href: "/services/e-sanchit-filing",
    title: "e-Sanchit Filing",
    description:
      "Important when document uploads, signing, and customs-facing digital execution need to work together."
  },
  {
    href: "/foreign-trade-policy/regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Track current policy and portal-side changes that may affect DSC usage across trade-compliance workflows."
  }
];

const WHY_CLOUDDESK = [
  {
    title: "Correct signatory and portal alignment",
    text:
      "A DSC only creates value when the right person holds it and the target portal accepts it. We review the signatory path first so DGFT, ICEGATE, and related workflows are built on the correct identity.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "Combo use-case planning",
    text:
      "Some users only discover later that customs, tender, or encryption use cases need more than a basic signing workflow. We help structure the request so the certificate fits the real operational requirement from the start.",
    icon: ShieldCheck,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Renewal, replacement, and continuity support",
    text:
      "A missing token, expired DSC, or broken signatory trail can stop filings immediately. We help reduce continuity risk by planning issuance, renewal, and replacement around live portal usage.",
    icon: RefreshCcw,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Trade-workflow readiness",
    text:
      "Exporters and customs users do not need a DSC in isolation. They need a DSC that works inside DGFT, ICEGATE, GST, MCA, and filing workflows. We optimise for actual portal usability, not certificate issuance alone.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskDigitalSignatures = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: ""
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);
    alert("Form submitted - check console for data.");
  };

  return (
    <>
      <Helmet>
        <title>
          Class 3 DSC Consultant India | Digital Signature for DGFT, ICEGATE,
          GST & MCA | EXIMINQ
        </title>

        <meta
          name="description"
          content="Class 3 DSC consultant in India for DGFT, ICEGATE, GST, MCA, e-tender, signatory mapping, token support, issuance, renewal, and customs-ready digital signature workflows."
        />
        <meta
          name="keywords"
          content="Class 3 DSC consultant, digital signature certificate India, DSC for DGFT, DSC for ICEGATE, Class 3 digital signature, DSC renewal, DSC token, DGFT digital signature, customs digital signature"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/dsc-services/"
        />

        <meta
          property="og:title"
          content="Class 3 DSC Consultant India | Digital Signature for DGFT, ICEGATE, GST & MCA"
        />
        <meta
          property="og:description"
          content="Get end-to-end Class 3 DSC support for DGFT, ICEGATE, GST, MCA, token setup, renewal, and portal-ready digital signing workflows."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/dsc-services/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/dsc-services/",
                url: "https://eximinq.in/services/dsc-services/",
                name:
                  "Class 3 DSC Consultant India | Digital Signature for DGFT, ICEGATE, GST & MCA | EXIMINQ",
                description:
                  "Class 3 DSC consultant in India for DGFT, ICEGATE, GST, MCA, e-tender, signatory mapping, token support, issuance, renewal, and customs-ready digital signature workflows.",
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
                    name: "DSC Services",
                    item: "https://eximinq.in/services/dsc-services/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Class 3 Digital Signature Consultancy",
                serviceType:
                  "Digital signature issuance, renewal, token support, and portal mapping",
                description:
                  "Consulting support for Class 3 DSC issuance, renewal, signatory review, token readiness, and usage on DGFT, ICEGATE, GST, MCA, and related regulated platforms.",
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
                mainEntity: DSC_FAQS.map((item) => ({
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
                Secure Trade Identity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Class 3 Digital Signature Support for Trade, Tax, and Portal
                Compliance
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                The intent behind searches like <strong>Class 3 DSC</strong>,{" "}
                <strong>DSC for DGFT</strong>, and{" "}
                <strong>DSC for ICEGATE</strong> is straightforward: users need
                a legally valid digital signature that actually works on the
                target portal without delaying filings.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  A <strong>Class 3 Digital Signature Certificate</strong> is a
                  secure digital identity used for regulated signing,
                  verification, and encryption on government and enterprise
                  portals. In trade workflows, it commonly becomes essential for
                  DGFT, ICEGATE, customs-linked filings, GST, MCA, income tax,
                  and e-tender usage.
                </p>
                <p>
                  For exporters and customs users, the challenge is not just
                  certificate issuance. It is choosing the correct signatory,
                  preparing the right identity trail, and ensuring the DSC can
                  be mapped and used where the actual filing happens.
                </p>
                <p>
                  That is why strong SEO for this page must cover issuance,
                  renewal, token support, signatory readiness, and portal-side
                  usability rather than stopping at generic digital signature
                  language.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Search-Intent Topics This Page Covers
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Class 3 DSC consultant in India",
                    "DSC for DGFT, ICEGATE, GST, and MCA",
                    "Signing and encryption use cases",
                    "DSC issuance, renewal, replacement, and token readiness",
                    "Authorised-signatory and portal-mapping support",
                    "Customs and trade filing continuity"
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

        <section id="use-cases" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Portal Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Common DSC Workflows for Business and Trade Users
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div
                id="dgft"
                className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden group hover:-translate-y-2 transition duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-3xl">
                      <Globe size={36} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        DSC for DGFT
                      </h3>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        Exporter and licence workflows
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Useful for IEC, licence, amendment, redemption, and other
                    foreign-trade workflows where the authorised signatory must
                    authenticate filings on the DGFT platform.
                  </p>

                  <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                    <strong>Common use cases:</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                      <li>IEC application or modification</li>
                      <li>Advance Authorisation and EPCG workflows</li>
                      <li>RoDTEP and related scheme filings</li>
                      <li>Exporter profile and related signatory approvals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="icegate"
                className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden group hover:-translate-y-2 transition duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl">
                      <Ship size={36} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        DSC for ICEGATE and Customs
                      </h3>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        Customs and document workflows
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Relevant for customs-linked digital execution where secure
                    signing, mapping, and filing continuity matter across the
                    ICEGATE ecosystem.
                  </p>

                  <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                    <strong>Common use cases:</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                      <li>e-Sanchit document support</li>
                      <li>Bill of Entry or Shipping Bill workflows</li>
                      <li>AD Code and customs-linked signatory usage</li>
                      <li>Portal-side digital identity readiness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center gap-3 max-w-3xl mx-auto">
              <Info className="text-blue-600" size={22} />
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> portal users often need one digital
                identity that fits multiple regulated systems. The issuance path
                should therefore be planned around real usage instead of just
                immediate certificate delivery.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why the Right DSC Setup Matters
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                A DSC affects filing continuity, signatory validity, and whether
                trade and tax workflows can actually move on time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {DSC_BENEFITS.map((benefit) => (
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
                  Who Typically Needs Class 3 DSC Support
                </h2>
                <p className="text-slate-600 leading-8">
                  This page becomes stronger in search when it clearly identifies
                  who needs the service and which documents or signatory path
                  should exist before the application starts.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
                <ul className="space-y-4">
                  {DSC_ELIGIBILITY.map((item) => (
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
                Documents Commonly Needed for Class 3 DSC Issuance
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {DSC_DOCUMENTS.map((item) => (
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
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                How to Get a Class 3 Digital Signature
              </h2>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              {DSC_TIMELINE.map((step, index) => (
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
        </section>

        <Fees setShowEnrollModal={setShowEnrollModal} />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for DSC Services?
              </h2>
              <p className="text-slate-500">
                A digital signature is only useful when the identity, token, and
                target portal all work together without blocking your filing.
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
                    <div className={`p-3 rounded-lg h-fit ${item.tone}`}>
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
                  Authority References, Renewal Risk, and Portal Readiness
                </h2>
                <p className="text-slate-300 leading-8 mb-6">
                  DSC services are high-trust because they affect legal digital
                  execution. The page should make it clear that issuance,
                  signatory logic, and portal usability all matter together.
                </p>

                <div className="space-y-4">
                  {[
                    "The wrong signatory or weak organisational authorisation can break the issuance or portal-mapping process.",
                    "Token expiry, loss, or renewal delay can stop urgent DGFT or customs filings.",
                    "A DSC that is issued correctly can still fail operationally if the target portal mapping is not completed properly.",
                    "Users should plan DSC usage around live workflows such as DGFT, ICEGATE, GST, MCA, or tender submissions."
                  ].map((risk) => (
                    <div key={risk} className="flex gap-3">
                      <Info className="w-5 h-5 text-accent-400 shrink-0 mt-1" />
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
                  {DSC_REFERENCES.map((reference) => (
                    <a
                      key={reference.href}
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
                    >
                      <div className="flex gap-3">
                        <Landmark className="w-5 h-5 text-accent-400 shrink-0 mt-1" />
                        <span className="text-slate-100">
                          {reference.label}
                        </span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions About Class 3 DSC
            </h2>

            <div className="space-y-4">
              {DSC_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center gap-4">
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      className="text-brand-500 transition-transform group-open:rotate-180 shrink-0"
                    />
                  </summary>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
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
                Related Services and Portal-Readiness Pages
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

        <section id="contact" className="bg-gradient-to-br from-brand-900 to-[#164e96] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 bg-white rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="bg-brand-700 text-white p-10 lg:p-14">
                <span className="text-accent-300 font-bold uppercase tracking-wider text-sm">
                  Conversion-Focused CTA
                </span>
                <h2 className="text-4xl font-bold mt-3 mb-5">
                  Need a Class 3 DSC That Actually Works on Your Portal?
                </h2>
                <p className="text-blue-100 text-lg leading-8 mb-8">
                  We help businesses get the right signatory, the right
                  certificate configuration, and the right readiness for DGFT,
                  ICEGATE, GST, MCA, and other regulated workflows.
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
                  Start Your DSC Request
                </h3>
                <p className="text-slate-600 leading-7 mb-8">
                  Use the application flow below or speak to our team first if
                  you need help with renewal, signatory selection, token issues,
                  or portal mapping.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() =>
                      setShowEnrollModal({
                        open: true,
                        type: "DSC_ENROLL"
                      })
                    }
                    className="rounded-2xl bg-brand-700 text-white font-bold py-4 px-6 hover:bg-brand-800 transition"
                  >
                    Apply for Class 3 DSC
                  </button>
                  <a
                    href="#documents"
                    className="rounded-2xl border border-slate-300 text-slate-900 font-bold py-4 px-6 hover:bg-slate-50 transition text-center"
                  >
                    Review Document Checklist
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-600">
                  Best for: exporters, importers, businesses, directors, LLP
                  signatories, and professionals who need reliable Class 3 DSC
                  issuance with portal-side readiness.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-brand-900 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4 block">
                EXIMINQ
              </Link>
              <p className="text-sm mb-6">
                Your partner for DSC, DGFT, customs, and digital trade
                compliance.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                  aria-label="X"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#overview" className="hover:text-white transition">
                    Why DSC?
                  </a>
                </li>
                <li>
                  <a href="#dgft" className="hover:text-white transition">
                    DGFT DSC
                  </a>
                </li>
                <li>
                  <a href="#icegate" className="hover:text-white transition">
                    ICEGATE DSC
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition">
                    Process
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Related Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/services/icegate-registration/"
                    className="hover:text-white transition"
                  >
                    ICEGATE Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ad-code-registration/"
                    className="hover:text-white transition"
                  >
                    AD Code Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/e-sanchit-filing"
                    className="hover:text-white transition"
                  >
                    e-Sanchit Filing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foreign-trade-policy/regulatory-updates"
                    className="hover:text-white transition"
                  >
                    Regulatory Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div id="contact">
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-accent-400 mt-0.5" />
                  <a href="tel:+917400096950" className="hover:text-white">
                    +91 74000 96950
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-accent-400 mt-0.5" />
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="hover:text-white break-all"
                  >
                    clouddesk@eximinq.in
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent-400 mt-0.5" />
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

export default CloudDeskDigitalSignatures;
