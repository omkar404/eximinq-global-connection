import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskEOP/Navbar";
import Hero from "../components/CloudDeskEOP/Hero";
import Fees from "../components/CloudDeskEOP/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  ShieldUser,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Coins,
  Calculator,
  FileCheck,
  Clock3,
  ShieldCheck
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEOP/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskEOP/ModalEnroll";

const EOP_FAQS = [
  {
    question: "What is Export Obligation Period (EOP) extension?",
    answer:
      "EOP extension is the DGFT process used to extend the time available for fulfilling export obligation under schemes such as Advance Authorisation and EPCG, subject to policy conditions, composition fee, and documentary compliance."
  },
  {
    question: "Who needs an EOP extension?",
    answer:
      "Exporters who have not completed the prescribed export obligation within the original validity window of their Advance Authorisation or EPCG authorisation usually need to review EOP extension immediately before the default turns into duty and interest exposure."
  },
  {
    question: "Can EOP extension be requested after expiry?",
    answer:
      "Yes, late or post-expiry cases may still be reviewable depending on the scheme, timing, and policy conditions, but they can attract additional fee, scrutiny, or a more difficult regularisation path."
  },
  {
    question: "What is the composition fee in EOP extension?",
    answer:
      "Composition fee is the policy-prescribed charge payable for extending the export obligation period. The actual amount depends on the scheme, delay stage, and the current DGFT framework applicable to the authorisation."
  },
  {
    question: "Is EOP extension available for both Advance Authorisation and EPCG?",
    answer:
      "Yes, EOP extension is relevant to both Advance Authorisation and EPCG, but the extension structure, timelines, supporting conditions, and fee logic differ across the two schemes."
  },
  {
    question: "What documents are usually required for EOP extension?",
    answer:
      "Typical records include the authorisation copy, export-performance details, shipping-bill and e-BRC data, a shortfall summary, justification note, and proof of the applicable fee or supporting compliance documents required by DGFT."
  },
  {
    question: "Why is EOP extension better than waiting for default?",
    answer:
      "Because a valid extension pathway can be significantly cheaper and safer than allowing the authorisation to slip into full duty, interest, customs action, or delayed closure complications."
  },
  {
    question: "How does EXIMINQ help with EOP extension?",
    answer:
      "We support shortfall review, scheme-specific extension strategy, composition-fee planning, document preparation, DGFT filing, and alignment with the downstream redemption or closure workflow."
  }
];

const EOP_ELIGIBILITY = [
  "Advance Authorisation holders nearing or crossing the original 18-month export-obligation window.",
  "EPCG authorisation holders facing block-wise or overall export-obligation delay.",
  "Exporters with shipment delay, market disruption, project deferment, or compliance slippage that affects obligation fulfilment.",
  "Businesses needing a structured regularisation plan before customs duty and interest exposure escalates."
];

const EOP_DOCUMENTS = [
  "Authorisation copy and scheme details for Advance Authorisation or EPCG.",
  "Shipping-bill and export-performance summary showing fulfilled and pending obligation.",
  "e-BRC or realisation support records where required for the scheme review.",
  "Shortfall note, factual explanation, and timeline of delay or hardship.",
  "Composition-fee planning and supporting payment records where applicable.",
  "Related compliance records such as installation certificate, amendments, prior extension history, or customs alignment documents depending on the authorisation."
];

const EOP_TIMELINE = [
  {
    title: "Shortfall review",
    detail:
      "Measure the actual pending obligation, identify whether the case is still within the regular extension window, and decide whether a standard or escalation path is needed."
  },
  {
    title: "Scheme-specific strategy",
    detail:
      "Separate the case correctly as Advance Authorisation or EPCG because the timing, fee logic, and extension rules differ materially."
  },
  {
    title: "Document preparation",
    detail:
      "Compile the authorisation record, export evidence, shortfall note, and supporting explanation for the delay or regularisation requirement."
  },
  {
    title: "DGFT filing and fee handling",
    detail:
      "Submit the extension request with the correct composition-fee treatment and supporting records through the applicable DGFT service flow."
  },
  {
    title: "Follow-through to closure",
    detail:
      "After extension, continue export tracking and prepare for redemption or EODC closure instead of treating the extension as the end of the compliance process."
  }
];

const EOP_REFERENCES = [
  {
    label: "DGFT EPCG service portal with EO / block extension",
    href: "https://www.dgft.gov.in/CP/?opt=epcg"
  },
  {
    label: "DGFT Advance Authorisation portal with EO extension service",
    href: "https://www.dgft.gov.in/CP/?opt=adnavce-authorisation"
  },
  {
    label: "DGFT Handbook of Procedures 2023 reference",
    href: "https://content.dgft.gov.in/Website/dgftprod/e1cb52ea-0c3a-4c2a-8cd7-dd992e9bdc98/HBP_2023.pdf"
  }
];

const WHY_CLOUDDESK = [
  {
    title: "Shortfall-first diagnosis",
    text:
      "Many exporters ask for an EOP extension before measuring the real shortfall. We review the obligation gap first so the strategy is based on numbers, not assumption.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "Advance Authorisation and EPCG separation",
    text:
      "EOP logic is not identical across schemes. We separate the case correctly at the start because composition fee, timing, and compliance consequences differ between Advance Authorisation and EPCG.",
    icon: ShieldCheck,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Composition fee planning",
    text:
      "Extension is often far cheaper than default, but only if the filing path is chosen correctly and in time. We help structure the fee and timing around the policy framework in force for the authorisation.",
    icon: Coins,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Extension-to-closure continuity",
    text:
      "An extension is not the finish line. We align the request with the later redemption or EODC workflow so the file moves toward closure instead of repeating the same risk later.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskEOP = () => {
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
          EOP Extension Consultant India | Export Obligation Period Extension
          for Advance Authorisation and EPCG | EXIMINQ
        </title>

        <meta
          name="description"
          content="EOP extension consultant in India for Advance Authorisation and EPCG. Get help with export obligation period extension, composition fee planning, DGFT filing, and default-risk regularisation."
        />
        <meta
          name="keywords"
          content="EOP extension consultant, export obligation period extension, advance authorisation EOP extension, EPCG EOP extension, DGFT EO extension, composition fee DGFT, export obligation extension India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/eop-extension/" />

        <meta
          property="og:title"
          content="EOP Extension Consultant India | Export Obligation Extension for Advance Authorisation and EPCG"
        />
        <meta
          property="og:description"
          content="Get end-to-end EOP extension support for Advance Authorisation and EPCG, including composition-fee planning, DGFT filing, and shortfall regularisation."
        />
        <meta property="og:url" content="https://eximinq.in/services/eop-extension/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/eop-extension/",
                url: "https://eximinq.in/services/eop-extension/",
                name:
                  "EOP Extension Consultant India | Export Obligation Period Extension for Advance Authorisation and EPCG | EXIMINQ",
                description:
                  "EOP extension consultant in India for Advance Authorisation and EPCG. Get help with export obligation period extension, composition fee planning, DGFT filing, and default-risk regularisation.",
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
                    name: "EOP Extension",
                    item: "https://eximinq.in/services/eop-extension/"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/eop-extension/#service",
                name: "Export Obligation Period Extension Consultancy",
                serviceType:
                  "Advance Authorisation and EPCG EOP extension, composition fee planning, and DGFT filing support",
                description:
                  "Consultancy for export obligation period extension under Advance Authorisation and EPCG, including shortfall review, composition fee planning, and DGFT filing support.",
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
                  url: "https://eximinq.in/services/eop-extension/"
                }
              },
              {
                "@type": "FAQPage",
                mainEntity: EOP_FAQS.map((item) => ({
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

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What is Export Obligation Period extension?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded" />
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                Every export-linked authorisation comes with a defined{" "}
                <strong>Export Obligation Period (EOP)</strong>. For Advance
                Authorisation, the export obligation period is commonly tied to
                an 18-month framework, while EPCG runs on a different
                multi-year structure with its own extension rules, timing, and
                compliance implications.
              </p>
              <p className="mb-4">
                Searchers looking for an <strong>EOP extension consultant</strong>,{" "}
                <strong>Advance Authorisation EOP extension</strong>, or{" "}
                <strong>EPCG export obligation extension</strong> usually have
                a practical problem already: delay, shortfall, missed block
                performance, or growing fear of customs duty and interest.
              </p>
              <p className="mb-4">
                This page is therefore built as a complete EOP resource that
                explains extension eligibility, composition-fee logic,
                documents, process flow, official references, and the difference
                between extending a file and allowing it to default.
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
                  Who should review EOP extension immediately?
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  EOP extension becomes relevant the moment export performance
                  begins to slip against licence timelines. The strongest SEO
                  opportunity on this page is to meet that urgent intent with
                  practical answers before the file moves from delay into
                  default.
                </p>

                <div className="mt-8 grid gap-4">
                  {EOP_ELIGIBILITY.map((item) => (
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
                  Why exporters act before default
                </h3>
                <p className="mt-3 text-slate-600">
                  The commercial purpose of EOP extension is simple: protect the
                  licence from becoming a far more expensive customs and
                  interest problem.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Lower cost than duty-plus-interest regularisation in many cases.",
                    "Keeps the authorisation on a manageable compliance path.",
                    "Buys time to complete exports or structure the next filing step.",
                    "Supports eventual redemption or EODC closure instead of collapse into default."
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-white p-5 border border-slate-200">
                  <p className="text-sm text-slate-600">
                    Related scheme pages for users comparing next steps:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a href="/services/advance-authorisation/" className="text-brand-700 underline underline-offset-4">
                      Advance Authorisation
                    </a>
                    <a href="/services/epcg-scheme" className="text-brand-700 underline underline-offset-4">
                      EPCG Scheme
                    </a>
                    <a href="/advance-authorization-redemption" className="text-brand-700 underline underline-offset-4">
                      AA redemption
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Scheme Rules
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Advance Authorisation vs EPCG extension logic
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Advance Authorisation
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mb-6">
                    EOP review is commonly time-sensitive and document-heavy.
                  </p>

                  <ul className="space-y-4 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        Extension planning depends on the applicable DGFT
                        framework, authorisation status, and whether the case is
                        still within the regular extension window.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        Composition fee and late-handling logic should be
                        assessed before the request is filed.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        Strong export evidence and shortfall explanation matter
                        more when the file is close to or past expiry.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">EPCG</h3>
                  <p className="text-sm font-semibold text-slate-500 mb-6">
                    Overall EO and block-wise issues must be treated carefully.
                  </p>

                  <ul className="space-y-4 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        EPCG extension strategy often needs separate attention to
                        block-wise and overall obligation timing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        Installation certificate status, prior amendments, and
                        customs alignment can affect downstream closure.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1" size={18} />
                      <span>
                        Extension should be planned as part of the later EODC
                        closure path, not as a standalone fix.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
                Documents required for EOP extension
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Strong rankings come from content that answers the next user
                question completely. Most exporters searching for EOP extension
                want the filing path and required records on one page.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {EOP_DOCUMENTS.map((item) => (
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
                EOP extension process flow
              </h2>
              <p className="text-slate-300 mt-2">
                Step-by-step route from shortfall review to extension filing and
                closure planning.
              </p>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              {EOP_TIMELINE.map((item, index) => (
                <div key={item.title} className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                    {index + 1}
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
                  Policy references and extension risk points
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Google rewards pages that demonstrate expertise and connect
                  users to trustworthy sources. We therefore surface the
                  official DGFT service routes and policy reference documents
                  relevant to EOP extension.
                </p>
                <div className="mt-8 space-y-4">
                  {EOP_REFERENCES.map((item) => (
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
                  Common EOP problems we solve
                </h3>
                <div className="mt-6 space-y-5 text-sm text-slate-700">
                  <p>
                    <strong>Late shortfall detection:</strong> when the exporter
                    realises the obligation gap too close to expiry.
                  </p>
                  <p>
                    <strong>Wrong scheme assumptions:</strong> when Advance
                    Authorisation and EPCG extension rules are treated as if
                    they are identical.
                  </p>
                  <p>
                    <strong>Weak documentary support:</strong> when exports,
                    shortfall logic, or supporting compliance records are not
                    organised well enough for the filing.
                  </p>
                  <p>
                    <strong>No closure plan after extension:</strong> when the
                    extension request is filed without thinking about the later
                    redemption or EODC stage.
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600">
                    Related pages that strengthen this topic cluster:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a href="/services/advance-authorisation/" className="text-brand-700 underline underline-offset-4">
                      Advance Authorisation
                    </a>
                    <a href="/services/epcg-scheme" className="text-brand-700 underline underline-offset-4">
                      EPCG Scheme
                    </a>
                    <a href="/epcg-redemption" className="text-brand-700 underline underline-offset-4">
                      EPCG redemption
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
                Why CloudDesk for EOP extension support?
              </h2>
              <p className="text-slate-500">
                Export obligation extension is not just a formality. It is a
                timing, numbers, and compliance problem that needs the right
                structure before default hardens.
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
              EOP Extension FAQs
            </h2>

            <div className="space-y-4">
              {EOP_FAQS.map((item) => (
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
                  <a href="/services/eop-extension/" className="hover:text-white transition">
                    EOP Extension
                  </a>
                </li>
                <li>
                  <a href="/advance-authorization-redemption" className="hover:text-white transition">
                    AA Redemption
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/epcg-redemption" className="hover:text-white transition">
                    EPCG redemption
                  </a>
                </li>
                <li>
                  <a href="/foreign-trade-policy/regulatory-updates" className="hover:text-white transition">
                    DGFT updates
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

export default CloudDeskEOP;
