import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskDFIA/Navbar";
import Hero from "../components/CloudDeskDFIA/Hero";
import Fees from "../components/CloudDeskDFIA/Fees";
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
  HandCoins,
  ShieldCheck,
  Boxes,
  AlertCircle,
  Handshake,
  FileCheck,
  Scale,
  ArrowRightLeft
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDFIA/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskDFIA/ModalEnroll";

const DFIA_FAQS = [
  {
    question: "What is Duty Free Import Authorisation (DFIA)?",
    answer:
      "DFIA is a DGFT duty-remission scheme that generally allows duty-free import of specified inputs against eligible exports, subject to policy conditions, SION linkage, and transferability endorsement requirements."
  },
  {
    question: "What is the main difference between DFIA and Advance Authorisation?",
    answer:
      "Advance Authorisation is usually used as a non-transferable import-linked scheme, while DFIA is typically discussed as a post-export benefit tied to notified SION and later transferability endorsement. The practical strategy depends on your export model, input profile, and timing."
  },
  {
    question: "Who can apply for a DFIA licence?",
    answer:
      "DFIA is generally relevant for manufacturer exporters and merchant exporters tied to supporting manufacturers where the export product matches notified SION and the policy conditions are met."
  },
  {
    question: "Why is SION so important for DFIA?",
    answer:
      "DFIA works around Standard Input Output Norms. If the export product and input combination do not fit the notified SION structure, the DFIA route becomes difficult or unavailable."
  },
  {
    question: "What is the value-addition requirement in DFIA?",
    answer:
      "DFIA is subject to minimum value-addition conditions under the policy framework. In current DGFT guidance, minimum value addition of 20 percent is a key reference point for DFIA planning."
  },
  {
    question: "Is DFIA transferable?",
    answer:
      "Transferability is one of the most commercially important DFIA features. However, the licence becomes practically valuable only after the transferability endorsement process is completed in line with the policy and supporting documents."
  },
  {
    question: "Does DFIA cover only Basic Customs Duty?",
    answer:
      "Current DGFT references describe DFIA as a scheme centred around Basic Customs Duty relief for eligible inputs. The wider tax and import treatment should always be checked against the current policy and customs framework for the specific transaction."
  },
  {
    question: "How does EXIMINQ help with DFIA?",
    answer:
      "We support SION validation, export mapping, DFIA application preparation, transferability documentation, value-addition review, and related trade-compliance strategy so exporters can either use or monetise the licence efficiently."
  }
];

const DFIA_ELIGIBILITY = [
  "Manufacturer exporters with export products mapped to notified SION.",
  "Merchant exporters backed by supporting manufacturers and proper production linkage.",
  "Exporters seeking a post-export duty-benefit structure instead of a pre-import operational model.",
  "Businesses with consistent input-output patterns where transferability can create a practical secondary value."
];

const DFIA_BENEFITS = [
  "Potential duty-saving value on eligible imported inputs under the policy framework.",
  "Transferability creates monetisation potential after compliance is completed.",
  "Useful for exporters with standardised input structures governed by notified SION.",
  "Can turn export performance into a tradeable business asset when structured correctly."
];

const DFIA_DOCUMENTS = [
  "IEC, PAN, GST, constitution documents, and authorised signatory details.",
  "Shipping bill details, export product mapping, and supporting export records.",
  "e-BRC and foreign-exchange realisation evidence where applicable.",
  "SION linkage support showing the export product and eligible input relationship.",
  "Application data for DFIA file number or transferable DFIA workflow under the current DGFT system.",
  "Transferability support set, declarations, and corrective records where endorsements or amendments are needed."
];

const DFIA_TIMELINE = [
  {
    title: "Pre-check and SION validation",
    detail:
      "Validate whether the export product fits notified SION and whether DFIA is commercially stronger than Advance Authorisation or another scheme."
  },
  {
    title: "Export execution and record hygiene",
    detail:
      "Ensure the export side is documented correctly because transferability and later value depend on the quality of the shipping-bill and export-compliance trail."
  },
  {
    title: "DFIA application filing",
    detail:
      "Prepare the DGFT filing with correct product mapping, export references, supporting-manufacturer logic, and documentary evidence."
  },
  {
    title: "Transferability endorsement",
    detail:
      "Obtain the endorsement that converts the licence into a more usable or monetisable trade instrument, subject to the policy conditions."
  },
  {
    title: "Use, transfer, or amendment support",
    detail:
      "Once issued, the licence may be used strategically, transferred, or amended depending on business need and the compliance history."
  }
];

const DFIA_REFERENCES = [
  {
    label: "DGFT Advance Authorisation and DFIA services portal",
    href: "https://www.dgft.gov.in/CP/?opt=adnavce-authorisation"
  },
  {
    label: "DGFT SION reference",
    href: "https://www.dgft.gov.in/CP/sion"
  },
  {
    label: "DGFT DFIA FAQ reference",
    href: "https://content.dgft.gov.in/Website/dgftprod/c4b23dcb-d511-4f57-a9ef-5f932a2bd8ee/DGFT%20FAQs%20-%20Transferable%20DFIA%20v1.0.pdf"
  }
];

const DFIA_RISK_POINTS = [
  "Wrong or weak SION mapping that makes the product-input relationship indefensible.",
  "Poor export-document alignment, especially when later transferability depends on documentary precision.",
  "Value-addition assumptions made too late in the export cycle.",
  "Expectation mismatch between licence issuance and actual transferability value in the market."
];

const WHY_CLOUDDESK = [
  {
    title: "High-precision SION mapping",
    text:
      "DFIA is only commercially useful when the export product fits the notified SION framework cleanly. We review the product-input logic early so the scheme is chosen on evidence, not assumption.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "Value-addition planning before filing",
    text:
      "A DFIA strategy can fail on economics even when the paperwork looks fine. We review the value-addition structure and export model before the file is pushed into a weak configuration.",
    icon: Scale,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Transferability-focused execution",
    text:
      "The commercial upside of DFIA depends on whether the licence becomes truly transferable and market-usable. We therefore optimise for downstream value, not just initial filing completion.",
    icon: ArrowRightLeft,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Import-benefit and monetisation strategy",
    text:
      "Some exporters want to use the licence; others want to monetise it. We support the compliance structure around both paths so the DFIA does not remain a dormant entitlement.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskDFIA = () => {
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
          DFIA Licence Consultant India | Duty Free Import Authorisation,
          Transferability & SION Support | EXIMINQ
        </title>

        <meta
          name="description"
          content="DFIA licence consultant in India for Duty Free Import Authorisation, SION mapping, transferable DFIA filing, value-addition review, and post-export trade benefit strategy."
        />
        <meta
          name="keywords"
          content="DFIA licence consultant, Duty Free Import Authorisation consultant, transferable DFIA, DGFT DFIA, DFIA SION, DFIA value addition, DFIA licence India, DFIA transferability endorsement"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/dfia-license/" />

        <meta
          property="og:title"
          content="DFIA Licence Consultant India | Transferable DFIA, SION & Post-Export Benefit Support"
        />
        <meta
          property="og:description"
          content="Get end-to-end DFIA consulting for SION validation, post-export filing, value-addition review, and transferability strategy under the DGFT framework."
        />
        <meta property="og:url" content="https://eximinq.in/services/dfia-license/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/dfia-license/",
                url: "https://eximinq.in/services/dfia-license/",
                name:
                  "DFIA Licence Consultant India | Duty Free Import Authorisation, Transferability & SION Support | EXIMINQ",
                description:
                  "DFIA licence consultant in India for Duty Free Import Authorisation, SION mapping, transferable DFIA filing, value-addition review, and post-export trade benefit strategy.",
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
                    name: "DFIA License",
                    item: "https://eximinq.in/services/dfia-license/"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/dfia-license#service",
                name: "DFIA Consultancy",
                serviceType:
                  "Duty Free Import Authorisation, SION mapping, transferability and post-export compliance support",
                description:
                  "Consultancy for DFIA planning, SION validation, post-export application support, transferability review, and trade-benefit strategy.",
                provider: {
                  "@type": "Organization",
                  name: "Eximinq Global Connections",
                  url: "https://eximinq.in"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  url: "https://eximinq.in/services/dfia-license/"
                }
              },
              {
                "@type": "FAQPage",
                mainEntity: DFIA_FAQS.map((item) => ({
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

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What is Duty Free Import Authorisation?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded" />
            </div>

            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                <strong>Duty Free Import Authorisation (DFIA)</strong> is a
                DGFT scheme associated with post-export trade benefits for
                products covered under notified <strong>SION</strong>. For many
                exporters, the attraction is not only duty relief on eligible
                inputs but also the possibility of later transferability.
              </p>
              <p className="mb-4">
                Searchers looking for a <strong>DFIA licence consultant</strong>,{" "}
                <strong>transferable DFIA support</strong>, or{" "}
                <strong>Duty Free Import Authorisation help</strong> usually
                need more than an application filer. They need scheme selection,
                SION validation, value-addition review, document strategy, and
                realistic advice on whether the licence will become genuinely
                usable or marketable.
              </p>
              <p className="mb-4">
                This page is therefore built as a complete DFIA resource for
                exporters comparing scheme structure, eligibility, benefits,
                documents, transferability workflow, risk points, and next-step
                compliance actions.
              </p>
            </div>
          </div>
        </section>

        <section id="eligibility" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Eligibility and Fit
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Who should consider DFIA?
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  DFIA is most useful when the exporter’s product and input
                  pattern fit notified SION and when post-export transferability
                  has genuine economic value. The strongest SEO opportunity for
                  this page is matching that business intent with practical
                  answers before the wrong scheme is chosen.
                </p>

                <div className="mt-8 grid gap-4">
                  {DFIA_ELIGIBILITY.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">
                  Why exporters choose DFIA
                </h3>
                <p className="mt-3 text-slate-600">
                  The appeal of DFIA usually sits at the intersection of export
                  execution, transferability, and secondary value generation.
                </p>
                <div className="mt-6 space-y-4">
                  {DFIA_BENEFITS.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-white p-5 border border-slate-200">
                  <p className="text-sm text-slate-600">
                    Comparing DFIA with other DGFT routes?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a
                      href="/services/advance-authorisation/"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      Advance Authorisation support
                    </a>
                    <a
                      href="/services/epcg-scheme"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      EPCG scheme support
                    </a>
                    <a
                      href="/services/rodtep-scheme"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      RoDTEP strategy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Key Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Why choose DFIA?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <HandCoins size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Transferable value
                </h3>
                <p className="text-sm text-slate-600">
                  The real attraction of DFIA is that compliance can translate
                  into a licence with secondary commercial value instead of a
                  one-time internal duty-saving event.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500 hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <ShieldCheck size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Post-export strategy
                </h3>
                <p className="text-sm text-slate-600">
                  DFIA is often evaluated by exporters who want a post-export
                  path instead of committing to a pre-import structure from day
                  one.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-500 hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                  <Boxes size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  SION-based predictability
                </h3>
                <p className="text-sm text-slate-600">
                  Where the export product cleanly fits notified SION, DFIA can
                  provide a more structured route for exporters with stable
                  input-output patterns.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
              <h4 className="font-bold text-yellow-800 text-lg mb-2 flex items-center justify-center gap-2">
                <AlertCircle size={20} />
                Important planning point
              </h4>
              <p className="text-sm text-yellow-700">
                DFIA works best when the scheme is chosen deliberately. Weak
                SION alignment, casual value-addition assumptions, or confusion
                with Advance Authorisation can make the file technically valid
                but commercially poor.
              </p>
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Documentation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Documents required for DFIA filing and transferability
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Strong rankings come from pages that answer the next question
                comprehensively. Most DFIA applicants want one page that covers
                both the filing records and the later transferability evidence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {DFIA_DOCUMENTS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex gap-3">
                    <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
                Lifecycle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                DFIA process flow from export to transferability
              </h2>
              <p className="text-slate-300 mt-2">
                Step-by-step view of the compliance and monetisation path.
              </p>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              {DFIA_TIMELINE.map((item, index) => (
                <div key={item.title} className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                    {index === 4 ? <Handshake size={28} /> : index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="references" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Government References
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Policy references and common DFIA risk points
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Google rewards pages that demonstrate expertise and connect
                  users to trustworthy sources. We therefore surface the
                  official policy context and practical risk points that matter
                  before a DFIA strategy is chosen.
                </p>
                <div className="mt-8 space-y-4">
                  {DFIA_REFERENCES.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block rounded-2xl border border-slate-200 bg-white p-5 text-brand-700 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                    >
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">
                  Common DFIA issues we solve
                </h3>
                <div className="mt-6 space-y-4">
                  {DFIA_RISK_POINTS.map((item) => (
                    <div key={item} className="flex gap-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600">
                    Related pages that strengthen this topic cluster:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a
                      href="/services/advance-authorisation/"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      Advance Authorisation
                    </a>
                    <a
                      href="/services/epcg-scheme"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      EPCG Scheme
                    </a>
                    <a
                      href="/foreign-trade-policy/regulatory-updates"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      DGFT updates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Fees setShowEnrollModal={setShowEnrollModal} />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for DFIA licence support?
              </h2>
              <p className="text-slate-500">
                A DFIA licence is only as valuable as the strength of its SION
                fit, transferability path, and downstream commercial usability.
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
                    <div className={`${item.tone} p-3 rounded-lg h-fit`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              DFIA Licence FAQs
            </h2>

            <div className="space-y-4">
              {DFIA_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    {item.question}
                    <ChevronDown
                      className="text-brand-500 transition-transform group-open:rotate-180"
                      size={20}
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

        <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
            <div>
              <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

              <p className="text-sm mb-6">
                EXIMINQ Contact: Your trusted partner for DGFT, customs, and
                trade-compliance execution.
              </p>

              <div className="flex gap-4">
                <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                  <Linkedin size={18} />
                </a>
                <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                  <Twitter size={18} />
                </a>
                <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/services/advance-authorisation/" className="hover:text-white transition">
                    Advance Authorisation
                  </a>
                </li>
                <li>
                  <a href="/services/epcg-scheme" className="hover:text-white transition">
                    EPCG Scheme
                  </a>
                </li>
                <li>
                  <a href="/services/dfia-license" className="hover:text-white transition">
                    DFIA License
                  </a>
                </li>
                <li>
                  <a href="/services/rodtep-scheme" className="hover:text-white transition">
                    RoDTEP Scheme
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.dgft.gov.in/CP/sion" className="hover:text-white transition" target="_blank" rel="noreferrer noopener">
                    SION reference
                  </a>
                </li>
                <li>
                  <a href="/services/customs-adjudication" className="hover:text-white transition">
                    Customs support
                  </a>
                </li>
                <li>
                  <a href="/foreign-trade-policy" className="hover:text-white transition">
                    FTP guidelines
                  </a>
                </li>
                <li>
                  <a href="/foreign-trade-policy/regulatory-updates" className="hover:text-white transition">
                    DGFT notifications
                  </a>
                </li>
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
            © 2026 EXIMINQ CloudDesk. All rights reserved. Not affiliated with
            DGFT.
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskDFIA;
