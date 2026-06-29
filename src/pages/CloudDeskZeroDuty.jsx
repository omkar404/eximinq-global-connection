import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskZeroDuty/Navbar";
import Hero from "../components/CloudDeskZeroDuty/Hero";
import Fees from "../components/CloudDeskZeroDuty/Fees";
import { ModalEnroll } from "../components/CloudDeskZeroDuty/ModalEnroll";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCheck,
  Factory,
  Cog,
  HandCoins,
  PackageCheck,
  CheckCircle,
  BadgePercent,
  Clock,
  ArrowDownCircle,
  TrendingUp,
  FileCheck,
  Stamp,
  PlaneTakeoff,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskZeroDuty/MainNavbar";

const EPCG_FAQS = [
  {
    question: "What is the EPCG scheme?",
    answer:
      "The Export Promotion Capital Goods scheme allows eligible exporters to import capital goods at concessional or zero customs duty against a future export obligation under the Foreign Trade Policy."
  },
  {
    question: "Who is eligible to apply for an EPCG licence?",
    answer:
      "Manufacturer exporters, merchant exporters tied to supporting manufacturers, and service providers earning foreign exchange can generally apply, subject to product conditions, policy provisions, and DGFT compliance requirements."
  },
  {
    question: "What can be imported under EPCG?",
    answer:
      "Capital goods for pre-production, production, and post-production can be covered, including machinery, spares, tools, jigs, fixtures, dies, moulds, and in some cases specialised software or technology linked to export activity."
  },
  {
    question: "What is the export obligation under EPCG?",
    answer:
      "The specific export obligation is linked to the customs duty saved and must be fulfilled within the applicable obligation period. The exact computation depends on the authorisation terms, policy period, and any concession available to the exporter."
  },
  {
    question: "What documents are required for EPCG application?",
    answer:
      "Typical documents include IEC, PAN, GST details, machine technical literature, proforma invoice, nexus justification, export profile, digital authorisations, and other declarations or certificates required by DGFT and customs."
  },
  {
    question: "Why is the installation certificate important?",
    answer:
      "The installation certificate helps prove that imported capital goods were installed at the declared premises within the prescribed timeline, making it a critical compliance checkpoint before redemption and EODC closure."
  },
  {
    question: "What happens if export obligation is not fulfilled?",
    answer:
      "Non-fulfilment can trigger demand for saved duty, applicable interest, customs complications, and difficulty in obtaining EODC closure. Early review, extension strategy, or corrective filings are important before defaults escalate."
  },
  {
    question: "How does EXIMINQ help with EPCG redemption and EODC?",
    answer:
      "We support licence planning, customs registration, installation certificate coordination, shipping bill and e-BRC reconciliation, block-wise export obligation tracking, extension strategy, and final redemption documentation for EODC closure."
  }
];

const EPCG_ELIGIBILITY = [
  "Manufacturer exporters importing machinery for direct use in export production.",
  "Merchant exporters backed by supporting manufacturers and documented production linkage.",
  "Service providers earning foreign exchange, such as hospitality, healthcare, logistics, and eligible service sectors.",
  "Exporters planning technology upgrades, plant expansion, or productivity improvements with identifiable export commitments."
];

const EPCG_BENEFITS = [
  "Zero or concessional customs duty on eligible capital goods imports.",
  "Improved manufacturing capacity, productivity, and technology modernisation.",
  "Ability to preserve working capital otherwise blocked in import duty outflow.",
  "Structured redemption path through export obligation planning and EODC closure."
];

const EPCG_DOCUMENTS = [
  "IEC, PAN, GST, and entity constitution documents.",
  "Product profile, export history, and projected export obligation plan.",
  "Proforma invoice, technical literature, machinery catalogue, and specifications.",
  "Nexus note connecting the capital goods to the export product or service.",
  "Authorised signatory details, declarations, and digital filing support records.",
  "Post-approval files such as customs registration papers, installation certificate, shipping bills, and e-BRC reconciliation."
];

const EPCG_TIMELINE = [
  {
    title: "Pre-application review",
    detail:
      "Validate eligibility, machine nexus, duty-saving estimate, export capacity, and the practical feasibility of meeting export obligation before filing."
  },
  {
    title: "DGFT filing and approval",
    detail:
      "Prepare the EPCG application, draft the technical narrative, file through DGFT, and handle clarifications tied to machinery or export-product linkage."
  },
  {
    title: "Customs registration and import",
    detail:
      "Register the authorisation with customs, complete bond or bank-guarantee steps where applicable, and clear the capital goods under the EPCG licence."
  },
  {
    title: "Installation and export tracking",
    detail:
      "Obtain the installation certificate, map the machine to operations, and track shipping bills, e-BRCs, and block-wise obligation fulfilment."
  },
  {
    title: "Redemption and EODC closure",
    detail:
      "Compile export proof, reconcile duty saved versus fulfilled obligation, file the closure set, and coordinate customs release after EODC issuance."
  }
];

const EPCG_GOVERNMENT_REFERENCES = [
  {
    label: "DGFT EPCG scheme guidance",
    href: "https://www.dgft.gov.in/CP/?opt=epcg"
  },
  {
    label: "Foreign Trade Policy and Handbook of Procedures",
    href: "https://www.dgft.gov.in/CP/?opt=handbook-procedures"
  },
  {
    label: "DGFT regulatory updates and policy notices",
    href: "/foreign-trade-policy/regulatory-updates"
  }
];

const COVERAGE_CARDS = [
  {
    title: "Pre-Production",
    icon: Factory,
    border: "border-indigo-500",
    text: "text-indigo-600",
    description: "Goods required before actual manufacturing starts.",
    items: ["Diesel Generator sets", "Transformers", "Effluent treatment plants", "Storage racks"]
  },
  {
    title: "Production",
    icon: Cog,
    border: "border-accent-500",
    text: "text-accent-600",
    description: "Core machinery used for manufacturing export products.",
    items: ["CNC machines and lathes", "Processing plants", "Textile looms", "Injection moulding machines"]
  },
  {
    title: "Post-Production",
    icon: PackageCheck,
    border: "border-green-500",
    text: "text-green-600",
    description: "Equipment needed for finishing, packing, and testing.",
    items: ["Packaging machinery", "Testing equipment and labs", "Quality control tools", "Barcode printers"]
  }
];

const WHY_CLOUDDESK = [
  {
    title: "Capital-saved valuation audit",
    text:
      "The export obligation is directly linked to the duty saved. We model the practical obligation before filing so you can decide whether EPCG, MOOWR, or another structure is commercially smarter.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "Nexus and technical certificate management",
    text:
      "To import a machine duty-free, you must prove nexus between the machine and the export output. We coordinate technical descriptions and certification support so the filing is defensible before DGFT and customs.",
    icon: CheckCircle,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Six-year export obligation radar",
    text:
      "EPCG rarely fails at application stage. It fails later through missed block-wise tracking, wrong shipping bill treatment, or delayed compliance. We help monitor the obligation before it becomes a customs and interest problem.",
    icon: Building,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Redemption and bank-guarantee release support",
    text:
      "The final outcome is clean EODC closure, customs bond cancellation, and collateral release. We reconcile shipping bills, e-BRCs, installation proof, and licence history so the redemption pack is closure-ready.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CLOSURE_SUPPORT = [
  {
    title: "Customs registration and debit alignment",
    text:
      "If imports were handled at multiple ports, the customs licence cell entries, installation certificates, and debit records need to reconcile before closure. We handle that workflow under this core EPCG page."
  },
  {
    title: "EOP extension and default management",
    text:
      "When the obligation window slips, the real work is EOP extension, shortfall computation, clubbing analysis, and evidence assembly before a demand hardens into duty plus interest."
  },
  {
    title: "EODC retrieval and BG release",
    text:
      "The end-state is clean closure: EODC issuance, customs bond cancellation, and bank-guarantee release so fresh trade benefits are not blocked by an old EPCG licence."
  }
];

const CloudDeskZeroDuty = () => {
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
          EPCG Scheme Consultant India | DGFT EPCG License, Export Obligation
          & EODC Support | EXIMINQ
        </title>

        <meta
          name="description"
          content="EPCG scheme consultant in India for DGFT EPCG licence application, customs registration, installation certificate, export obligation tracking, EODC redemption, and closure support."
        />
        <meta
          name="keywords"
          content="EPCG scheme consultant, EPCG licence consultant India, DGFT EPCG licence, EPCG export obligation, EPCG EODC, EPCG redemption, installation certificate EPCG, customs registration EPCG"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://eximinq.in/services/epcg-scheme/" />

        <meta
          property="og:title"
          content="EPCG Scheme Consultant India | DGFT EPCG License & EODC Support"
        />
        <meta
          property="og:description"
          content="Get end-to-end EPCG consulting for licence filing, customs registration, installation certificate, export obligation management, and EODC closure."
        />
        <meta property="og:url" content="https://eximinq.in/services/epcg-scheme/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/epcg-scheme/",
                url: "https://eximinq.in/services/epcg-scheme/",
                name:
                  "EPCG Scheme Consultant India | DGFT EPCG License, Export Obligation & EODC Support | EXIMINQ",
                description:
                  "EPCG scheme consultant in India for DGFT EPCG licence application, customs registration, installation certificate, export obligation tracking, EODC redemption, and closure support.",
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
                    name: "EPCG Scheme",
                    item: "https://eximinq.in/services/epcg-scheme/"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/epcg-scheme#service",
                name: "EPCG Scheme Consultancy",
                serviceType:
                  "EPCG licence application, compliance, redemption and EODC support",
                description:
                  "Consultancy for DGFT EPCG application, export obligation planning, customs registration, installation certificate coordination, extension strategy, and EODC redemption.",
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
                  url: "https://eximinq.in/services/epcg-scheme/"
                }
              },
              {
                "@type": "FAQPage",
                mainEntity: EPCG_FAQS.map((item) => ({
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
          onSubmit={handleEnrollmentSubmit}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
        />

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What is the EPCG scheme?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded" />
            </div>

            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                The <strong>Export Promotion Capital Goods (EPCG) Scheme</strong>{" "}
                is one of the most important DGFT schemes for manufacturers,
                merchant exporters, and eligible service providers that want to
                import capital goods with major customs-duty savings while
                expanding export capacity.
              </p>
              <p className="mb-4">
                Searchers looking for an <strong>EPCG scheme consultant</strong>,{" "}
                <strong>DGFT EPCG licence support</strong>, or{" "}
                <strong>EPCG export obligation help</strong> usually need more
                than a filing agent. They need planning for duty saved, machine
                nexus, customs registration, installation certificate
                timelines, export obligation tracking, and final{" "}
                <strong>EODC redemption</strong>.
              </p>
              <p className="mb-4">
                This page is therefore built as a complete EPCG resource for
                applicants comparing eligibility, document requirements,
                benefits, process steps, risk points, and closure support
                before they apply under the Foreign Trade Policy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
                <Factory className="text-brand-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Any Sector</h3>
                <p className="text-sm text-slate-500">
                  Manufacturer and merchant exporters can both qualify under the
                  right structure.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
                <Cog className="text-brand-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Capital Goods Focus</h3>
                <p className="text-sm text-slate-500">
                  Covers machinery, spares, moulds, dies, fixtures, tools, and
                  related equipment.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
                <HandCoins className="text-brand-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Service Providers</h3>
                <p className="text-sm text-slate-500">
                  Eligible service sectors earning foreign exchange may also use
                  EPCG for technology upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="eligibility" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                  Eligibility and Benefits
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Who should apply for an EPCG licence?
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  If your business is planning a technology upgrade, new plant
                  line, or high-value equipment import linked to future
                  exports, the EPCG scheme can materially reduce landed cost.
                  Businesses researching EPCG also want to know whether the
                  later compliance burden is worth the duty saved. This section
                  addresses that exact search intent.
                </p>

                <div className="mt-8 grid gap-4">
                  {EPCG_ELIGIBILITY.map((item) => (
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
                  Why exporters choose EPCG
                </h3>
                <p className="mt-3 text-slate-600">
                  Businesses evaluating EPCG versus Advance Authorisation or
                  MOOWR usually want to understand cash-flow relief, export
                  planning flexibility, and long-term compliance effort.
                </p>
                <div className="mt-6 space-y-4">
                  {EPCG_BENEFITS.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgePercent className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-white p-5 border border-slate-200">
                  <p className="text-sm text-slate-600">
                    Comparing schemes before you commit?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a
                      href="/services/advance-authorisation/"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      Advance Authorisation support
                    </a>
                    <a
                      href="/services/moowr-scheme/"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      MOOWR comparison
                    </a>
                    <a
                      href="/services/eop-extension/"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      EOP extension help
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coverage" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Scope
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                What can you import under EPCG?
              </h2>
              <p className="text-slate-500 mt-2">
                Comprehensive coverage across the production lifecycle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {COVERAGE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`bg-white rounded-xl shadow-md p-8 border-t-4 ${card.border} hover:shadow-xl transition`}
                  >
                    <Icon className={`w-12 h-12 ${card.text} mb-4`} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">{card.description}</p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Documentation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Documents required for EPCG application and closure
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Most EPCG applicants want a single page that covers both the
                initial filing records and the later compliance evidence needed
                for redemption. This section is designed for that exact search
                intent.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {EPCG_DOCUMENTS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

        <section id="obligation" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
                  The Commitment
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Understanding export obligation in EPCG
                </h2>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  To enjoy the zero-duty or reduced-duty benefit, you must
                  fulfil the prescribed export obligation. In real EPCG work,
                  the challenge is not just the formula. It is the long tail of
                  customs execution, installation proof, shipping-bill tagging,
                  and block-wise follow-through.
                </p>

                <div className="bg-brand-800 p-6 rounded-lg border border-brand-700 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <BadgePercent className="w-4 h-4 text-accent-400" />
                      Obligation concept
                    </span>

                    <span className="text-xl font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent-400" />
                      Duty-saved linked
                    </span>
                  </div>

                  <div className="w-full bg-brand-900 rounded-full h-2 mb-4">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: "100%" }} />
                  </div>

                  <p className="text-xs text-slate-400">
                    The exact obligation should always be read from the
                    authorisation terms, policy conditions, and product context.
                  </p>
                </div>

                <div className="bg-brand-800 p-6 rounded-lg border border-brand-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent-400" />
                      Compliance reality
                    </span>

                    <span className="text-xl font-bold text-white">
                      Multi-year tracking
                    </span>
                  </div>

                  <ul className="text-xs text-slate-400 space-y-1 mt-2">
                    <li>Track imports, installation, and exports as one chain.</li>
                    <li>Review block-wise progress before shortfall hardens.</li>
                    <li>Prepare extension or redemption evidence early.</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative">
                  <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                    Domestic sourcing angle
                  </h3>

                  <p className="text-sm text-slate-600 mb-4">
                    Businesses often compare imported capital goods versus
                    domestic procurement because the decision affects both duty
                    planning and the long-term export-obligation burden.
                  </p>

                  <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-100">
                    <div>
                      <span className="block text-xs font-bold text-green-800">
                        Strategic planning matters
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        Scheme selection before filing
                      </span>
                    </div>

                    <ArrowDownCircle className="text-green-500 w-8 h-8" />
                  </div>

                  <p className="text-xs text-slate-500 mt-4">
                    The best outcome often comes from scheme comparison before
                    the licence is filed, not after default begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timelines" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Timeline and Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                EPCG process flow from application to EODC closure
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                This section is designed to satisfy both informational and
                commercial search intent: users researching the EPCG process
                can understand the workflow and then move directly into enquiry
                or document preparation.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
              {EPCG_TIMELINE.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Lifecycle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                License lifecycle overview
              </h2>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  <FileCheck className="w-7 h-7 text-brand-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Apply</h3>
                <p className="text-sm text-slate-500">
                  File the EPCG application on the DGFT portal with the right
                  technical and nexus narrative.
                </p>
              </div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  <Stamp className="w-7 h-7 text-brand-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Register</h3>
                <p className="text-sm text-slate-500">
                  Register the licence with customs and complete the bond or
                  bank-guarantee steps where applicable.
                </p>
              </div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  <PackageCheck className="w-7 h-7 text-brand-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Import</h3>
                <p className="text-sm text-slate-500">
                  Clear the capital goods, install them, and preserve the
                  compliance trail from day one.
                </p>
              </div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  <PlaneTakeoff className="w-7 h-7 text-brand-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Export</h3>
                <p className="text-sm text-slate-500">
                  Track shipping bills, e-BRCs, and block-wise fulfilment so
                  the obligation remains closure-ready.
                </p>
              </div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                  <CheckCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Redeem</h3>
                <p className="text-sm text-slate-500">
                  Submit the redemption pack with installation and export proof
                  to obtain EODC closure.
                </p>
              </div>
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
                  Policy references, risk points, and related EPCG support
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Google rewards pages that demonstrate expertise and connect
                  users to trustworthy sources. We therefore surface the
                  official policy context, common compliance pain points, and
                  related service pages that users usually need next.
                </p>
                <div className="mt-8 space-y-4">
                  {EPCG_GOVERNMENT_REFERENCES.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="block rounded-2xl border border-slate-200 bg-white p-5 text-brand-700 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                    >
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">
                  Common EPCG issues we solve
                </h3>
                <div className="mt-6 space-y-5 text-sm text-slate-700">
                  <p>
                    <strong>Weak nexus documentation:</strong> when the machine
                    description, export product mapping, or technical logic is
                    too thin to withstand scrutiny.
                  </p>
                  <p>
                    <strong>Installation certificate delays:</strong> when the
                    post-import compliance window is missed or the certificate
                    trail is incomplete.
                  </p>
                  <p>
                    <strong>Shipping bill and e-BRC mismatch:</strong> when
                    redemption stalls because exports were not properly tagged or
                    reconciled against the licence.
                  </p>
                  <p>
                    <strong>Export shortfall:</strong> when block-wise or final
                    obligation appears likely to slip and an EOP extension or
                    corrective strategy is needed.
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600">
                    Related services for stronger topical authority:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a
                      href="/services/customs-adjudication"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      Customs adjudication support
                    </a>
                    <a
                      href="/advance-authorization-redemption"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      Advance Authorisation redemption
                    </a>
                    <a
                      href="/epcg-redemption"
                      className="text-brand-700 underline underline-offset-4"
                    >
                      EPCG closure and EODC audit
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
                Why CloudDesk for EPCG scheme support?
              </h2>
              <p className="text-slate-500">
                EPCG is rarely lost at the application stage. It is usually
                lost in duty calculations, customs execution, export tagging, or
                closure documentation.
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
              EPCG Scheme FAQs
            </h2>

            <div className="space-y-4">
              {EPCG_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    {item.question}
                    <ChevronDown
                      size={20}
                      className="text-brand-500 transition-transform group-open:rotate-180"
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

        <section id="epcg-closure-support" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Consolidated Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                EPCG licence closure, customs cell work, and EODC recovery
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                We consolidated related EPCG support intent into this page so
                Google and users find one authoritative guide for application,
                compliance, and closure work instead of fragmented weak URLs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {CLOSURE_SUPPORT.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.text}</p>
                </div>
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
                  <a href="/services/epcg-scheme" className="hover:text-white transition">
                    EPCG Scheme
                  </a>
                </li>
                <li>
                  <a
                    href="/services/advance-authorisation/"
                    className="hover:text-white transition"
                  >
                    Advance Authorisation
                  </a>
                </li>
                <li>
                  <a href="/services/rodtep-scheme" className="hover:text-white transition">
                    RoDTEP Scheme
                  </a>
                </li>
                <li>
                  <a href="/services/star-export-house" className="hover:text-white transition">
                    Status Holder Certificate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/services/customs-adjudication"
                    className="hover:text-white transition"
                  >
                    Customs and technical support
                  </a>
                </li>
                <li>
                  <a
                    href="/foreign-trade-policy/regulatory-updates"
                    className="hover:text-white transition"
                  >
                    DGFT Public Notices
                  </a>
                </li>
                <li>
                  <a href="/services/eop-extension/" className="hover:text-white transition">
                    EOP Extension
                  </a>
                </li>
                <li>
                  <a href="/foreign-trade-policy" className="hover:text-white transition">
                    FTP 2023 Guidelines
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

export default CloudDeskZeroDuty;
