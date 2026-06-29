import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/CloudDeskFreeSale/Navbar";
import Hero from "../components/CloudDeskFreeSale/Hero";
import Fees from "../components/CloudDeskFreeSale/Fees";
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
  Pill,
  FlaskConical,
  Package,
  Info,
  FileText,
  ListChecks,
  Factory,
  Receipt,
  FileCheck,
  Landmark,
  ArrowRight,
  ShieldCheck,
  Clock3
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFreeSale/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFreeSale/ModalEnroll";

const FSC_FAQS = [
  {
    question: "What is a Free Sale Certificate?",
    answer:
      "A Free Sale Certificate, also called Certificate of Free Sale, is a regulator-backed document confirming that a product is legally manufactured or marketed in India and is freely sold in the domestic market. Overseas regulators and buyers use it to assess whether the product can be registered or imported in their country."
  },
  {
    question: "Who issues a Free Sale Certificate in India?",
    answer:
      "The issuing authority depends on the product category. Pharmaceuticals, medical devices, cosmetics, food, AYUSH products, and general goods can fall under different authorities such as CDSCO, state licensing authorities, FSSAI-linked structures, AYUSH authorities, or DGFT-linked workflows depending on the product and destination requirement."
  },
  {
    question: "When is a Free Sale Certificate required for exports?",
    answer:
      "It is commonly required when the destination country asks for proof that the product is legally sold in India before registration, import approval, product listing, tender participation, or customs and ministry clearance."
  },
  {
    question: "Is a Free Sale Certificate the same as a Certificate of Origin?",
    answer:
      "No. A Certificate of Origin confirms where the product was made, while a Free Sale Certificate confirms that the product is legally sold or allowed in the domestic market of the exporting country."
  },
  {
    question: "What documents are usually needed for a Free Sale Certificate?",
    answer:
      "Typical records include manufacturing or marketing licence details, product list, label or packaging information, company documents, domestic sale support where relevant, and regulator-specific declarations depending on the product category."
  },
  {
    question: "Can a merchant exporter apply for a Free Sale Certificate?",
    answer:
      "Yes, but the filing often depends on manufacturer support, authority rules, and documentary linkage between the exporter and the licensed manufacturer or marketer."
  },
  {
    question: "Does a Free Sale Certificate need apostille or embassy legalization?",
    answer:
      "In many export destinations, yes. The certificate may need further attestation, apostille, or embassy legalization depending on the destination-country authority and the product registration process."
  },
  {
    question: "How does EXIMINQ help with Free Sale Certificate services?",
    answer:
      "We help identify the right authority, review product and licence alignment, prepare documents, support filing, and coordinate apostille or legalization where the destination market requires additional validation."
  }
];

const FSC_BENEFITS = [
  "Supports overseas product registration by proving the product is legally sold or allowed in India.",
  "Improves buyer and regulator confidence for pharmaceuticals, medical devices, cosmetics, food, AYUSH, and other controlled export categories.",
  "Reduces documentation friction where foreign ministries, importers, or registration agencies ask for regulator-backed proof of domestic market status.",
  "Strengthens export readiness when paired with proper labelling, licence mapping, and post-issue legalization support."
];

const FSC_ELIGIBILITY = [
  "Exporter or manufacturer has a product that is legally manufactured, marketed, or sold in India under the applicable domestic framework.",
  "A valid authority-linked document trail exists, such as licence, product approval, or domestic market support depending on the product category.",
  "The destination country, buyer, or registration authority specifically asks for a Free Sale Certificate or equivalent domestic market attestation.",
  "Product details, label information, and exporter-manufacturer relationship can be documented clearly for the chosen issuing authority."
];

const FSC_DOCUMENTS = [
  "Manufacturing licence, marketing authorisation, or product-category approval issued by the relevant Indian authority.",
  "Product list with exact brand name, generic name, model, composition, or specifications as applicable.",
  "Company incorporation documents, IEC, GST, and authorised signatory records.",
  "Label, artwork, or packaging details where authority or importing country review depends on product presentation.",
  "Domestic sale proof, invoices, declarations, or supporting manufacturer documentation where required by the issuing authority."
];

const FSC_TIMELINE = [
  {
    title: "Authority identification",
    detail:
      "We first confirm whether the product should move through CDSCO, state authority, AYUSH-related channels, DGFT-linked workflows, or another relevant path."
  },
  {
    title: "Licence and product mapping",
    detail:
      "The filing works only if the product details match the existing domestic licence or legal basis. We review this alignment before submission."
  },
  {
    title: "Document preparation",
    detail:
      "Required records are assembled in the format expected by the authority, including product lists, declarations, label support, and exporter-manufacturer linkages."
  },
  {
    title: "Application and scrutiny",
    detail:
      "The authority reviews the file and may check whether the product is lawfully sold, manufactured, or approved in India under the relevant domestic framework."
  },
  {
    title: "Issue and legalization support",
    detail:
      "After issue, we can support apostille, embassy legalization, and destination-facing document readiness where the importing country demands extra validation."
  }
];

const FSC_REFERENCES = [
  {
    label: "CDSCO portal and regulatory resources",
    href: "https://cdsco.gov.in/opencms/opencms/en/Home/"
  },
  {
    label: "DGFT services portal",
    href: "https://www.dgft.gov.in/CP/"
  },
  {
    label: "FSSAI portal",
    href: "https://foscos.fssai.gov.in/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/certificate-of-origin/",
    title: "Certificate of Origin",
    description:
      "Useful when destination-country documentation requires both origin proof and domestic market proof."
  },
  {
    href: "/services/cdsco-compliance",
    title: "CDSCO Compliance",
    description:
      "Relevant for exporters of regulated medical or pharmaceutical products where regulator-side alignment matters before FSC filing."
  },
  {
    href: "/services/fssai-licensing",
    title: "FSSAI Licensing",
    description:
      "Important where food-product export readiness depends on the domestic food-compliance trail."
  },
  {
    href: "/foreign-trade-policy/regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Track policy and compliance updates that may affect export documentation and product registration workflows."
  }
];

const WHY_CLOUDDESK = [
  {
    title: "Correct authority routing",
    text:
      "Free Sale Certificate work starts with a routing problem. Different products belong to different authorities, and filing with the wrong one wastes time. We identify the correct authority path before the file is built.",
    icon: AlertTriangle,
    tone: "bg-red-100 text-red-600"
  },
  {
    title: "Product-to-licence alignment",
    text:
      "Most FSC delays happen because the product description used for export does not match the underlying Indian licence or approval trail. We review the wording, label basis, and product list before submission.",
    icon: ShieldCheck,
    tone: "bg-blue-100 text-blue-600"
  },
  {
    title: "Regulator and exporter coordination",
    text:
      "Some cases require manufacturer records, merchant-exporter support, or additional declarations. We coordinate the file so the authority sees a complete and defensible domestic market trail.",
    icon: FileCheck,
    tone: "bg-green-100 text-green-600"
  },
  {
    title: "Apostille and legalization readiness",
    text:
      "The real value of the FSC appears when it can be accepted abroad. We therefore plan for apostille, embassy, and destination-country documentary expectations instead of treating issuance as the last step.",
    icon: ShieldUser,
    tone: "bg-purple-100 text-purple-600"
  }
];

const CloudDeskFreeSale = () => {
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
          Free Sale Certificate Consultant India | FSC for Export, CDSCO, DGFT
          & State Authority Support | EXIMINQ
        </title>

        <meta
          name="description"
          content="Free Sale Certificate consultant in India for FSC issuance, CDSCO and state-authority routing, DGFT support, document review, apostille, and export product registration readiness."
        />
        <meta
          name="keywords"
          content="free sale certificate consultant, FSC certificate India, certificate of free sale export India, CDSCO free sale certificate, DGFT free sale certificate, free sale certificate for export, free sale certificate consultant India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/free-sale-certificate/"
        />

        <meta
          property="og:title"
          content="Free Sale Certificate Consultant India | FSC for Export, CDSCO, DGFT & State Authority Support"
        />
        <meta
          property="og:description"
          content="Get end-to-end Free Sale Certificate support for export products, authority routing, domestic-licence review, and legalization readiness."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/free-sale-certificate/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/free-sale-certificate/",
                url: "https://eximinq.in/services/free-sale-certificate/",
                name:
                  "Free Sale Certificate Consultant India | FSC for Export, CDSCO, DGFT & State Authority Support | EXIMINQ",
                description:
                  "Free Sale Certificate consultant in India for FSC issuance, CDSCO and state-authority routing, DGFT support, document review, apostille, and export product registration readiness.",
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
                    name: "Free Sale Certificate",
                    item: "https://eximinq.in/services/free-sale-certificate/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Free Sale Certificate Consultancy",
                serviceType:
                  "FSC issuance, authority routing, and export-document support",
                description:
                  "Consulting support for Free Sale Certificate issuance from the relevant Indian authority, including product-lifecycle review, domestic-licence alignment, and legalization readiness.",
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
                mainEntity: FSC_FAQS.map((item) => ({
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
                Export Documentation and Product Registration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Free Sale Certificate Support for Products Entering Global
                Markets
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                The intent behind searches like{" "}
                <strong>free sale certificate consultant</strong>,{" "}
                <strong>certificate of free sale</strong>, and{" "}
                <strong>FSC for export</strong> is direct: exporters need proof
                that the product is legally sold in India so overseas regulators
                or buyers can process import and registration.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  A <strong>Free Sale Certificate (FSC)</strong>, also called a{" "}
                  <strong>Certificate of Free Sale</strong>, is a regulator-side
                  document used to show that the product is legally sold,
                  manufactured, or marketed in India under the applicable
                  domestic framework.
                </p>
                <p>
                  Destination-country authorities often ask for it before
                  allowing product registration, market access, customs release,
                  ministry approval, or buyer onboarding. The actual issuing
                  authority depends on the product category and the compliance
                  trail behind it.
                </p>
                <p>
                  The real challenge is not just obtaining a certificate. It is
                  making sure the product description, domestic licence, product
                  list, and exporter documentation are all aligned so the FSC is
                  accepted abroad without avoidable objections.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Search-Intent Topics This Page Covers
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Free Sale Certificate consultant in India",
                    "FSC for exports and overseas product registration",
                    "CDSCO, state-authority, AYUSH, food, and DGFT routing",
                    "Documents required for Free Sale Certificate",
                    "Apostille and legalization support",
                    "Difference between FSC and Certificate of Origin"
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

        <section id="authorities" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-cert-600 font-bold uppercase tracking-wider text-sm">
                Authority Mapping
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Which Authority May Issue Your Free Sale Certificate
              </h2>
              <p className="text-slate-500 mt-2">
                The issuing authority depends on the product category, domestic
                compliance basis, and destination-country requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition group">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <Pill className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  CDSCO and Central Drug-Regulator Workflows
                </h3>
                <p className="text-sm text-slate-600">
                  Often relevant for regulated pharmaceutical and medical-device
                  product categories where the domestic regulatory status must be
                  evidenced clearly before export-side registration abroad.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition group">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition">
                  <FlaskConical className="w-7 h-7 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  State Licensing Authorities and Local Regulators
                </h3>
                <p className="text-sm text-slate-600">
                  Common where the domestic licence basis sits with a state
                  regulator, especially for cosmetics, drugs, certain devices,
                  or locally regulated manufacturing categories.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-orange-500 hover:shadow-xl transition group">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition">
                  <Package className="w-7 h-7 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  DGFT and General-Goods Documentation Routes
                </h3>
                <p className="text-sm text-slate-600">
                  Relevant for products that do not sit inside the stricter
                  drug-or-device framework but still need documentary support for
                  overseas market access and export compliance.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-purple-50 border border-purple-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
              <h4 className="font-bold text-purple-800 text-lg mb-2 flex items-center justify-center gap-2">
                <Info className="w-5 h-5" />
                AYUSH and Food Note
              </h4>
              <p className="text-sm text-purple-700">
                Herbal, Ayurvedic, food, nutraceutical, or other specialised
                categories can involve different domestic regulatory paths. The
                authority should be identified from the product’s actual Indian
                compliance trail before filing.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why a Free Sale Certificate Matters in Export Workflows
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                The FSC supports product registration, regulator confidence, and
                international market entry where domestic legal-sale status must
                be proven.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {FSC_BENEFITS.map((benefit) => (
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
                  Who Typically Needs Free Sale Certificate Support
                </h2>
                <p className="text-slate-600 leading-8">
                  This page performs best in search when it answers whether the
                  exporter has the correct domestic compliance foundation and
                  whether the destination market actually needs an FSC.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
                <ul className="space-y-4">
                  {FSC_ELIGIBILITY.map((item) => (
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
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Required Documentation
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  The strongest FSC applications are built on licence clarity,
                  exact product mapping, and destination-facing documentation
                  discipline.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-brand-600 mt-1" />
                    <div>
                      <strong className="block text-slate-900">
                        Licence or approval basis
                      </strong>
                      <span className="text-sm text-slate-600">
                        Manufacturing, marketing, or category-specific domestic
                        approval records from the relevant Indian authority.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <ListChecks className="w-6 h-6 text-brand-600 mt-1" />
                    <div>
                      <strong className="block text-slate-900">
                        Product list
                      </strong>
                      <span className="text-sm text-slate-600">
                        Exact product names, variants, strengths, compositions,
                        models, or specifications as applicable.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Factory className="w-6 h-6 text-brand-600 mt-1" />
                    <div>
                      <strong className="block text-slate-900">
                        Manufacturer or marketer support
                      </strong>
                      <span className="text-sm text-slate-600">
                        Useful where the exporter is not the manufacturer or
                        where the authority requires manufacturer-backed
                        declarations.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Receipt className="w-6 h-6 text-brand-600 mt-1" />
                    <div>
                      <strong className="block text-slate-900">
                        Market-status support
                      </strong>
                      <span className="text-sm text-slate-600">
                        Domestic sale proof, declaration, or related records
                        where the authority or destination needs evidence of free
                        sale or legal market status.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                  Apostille and Legalization Support
                </h3>

                <p className="text-sm text-slate-600 mb-6">
                  Many destinations require the issued FSC to be further
                  attested, apostilled, or legalized before it is accepted for
                  product registration or import processing.
                </p>

                <div className="space-y-2">
                  {[
                    "Notary or supporting attestation where needed",
                    "State or SDM-level movement if applicable",
                    "MEA apostille support",
                    "Embassy legalization where destination-country rules require it"
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 p-2 bg-slate-50 rounded"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand-600 font-bold hover:underline"
                  >
                    <FileCheck className="w-4 h-4" />
                    Request Legalization Support
                  </a>
                </div>
              </div>
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
                How to Obtain a Free Sale Certificate
              </h2>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 step-connector">
              {FSC_TIMELINE.map((step, index) => (
                <div key={step.title} className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-cert-200 shadow-sm">
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
                Why CloudDesk for Free Sale Certificates?
              </h2>
              <p className="text-slate-500">
                An FSC works best when the authority path, product wording, and
                domestic compliance records are aligned before the file is
                submitted.
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
                  Authority References, Market-Entry Risk, and Filing Discipline
                </h2>
                <p className="text-slate-300 leading-8 mb-6">
                  Free Sale Certificate is a trust-sensitive export document.
                  The page should make it clear that the workflow depends on the
                  correct Indian authority, valid domestic compliance basis, and
                  destination-country expectations.
                </p>

                <div className="space-y-4">
                  {[
                    "The wrong authority choice can cause delays even before document scrutiny begins.",
                    "Product descriptions used for export must align with the domestic licence or approval trail.",
                    "Some destinations need apostille or legalization after issue, so exporters should plan beyond the initial certificate.",
                    "Merchant-exporter cases may need stronger manufacturer linkage and additional documentary support."
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
                  {FSC_REFERENCES.map((reference) => (
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
              Frequently Asked Questions About Free Sale Certificate
            </h2>

            <div className="space-y-4">
              {FSC_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200 group"
                >
                  <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center gap-4">
                    <span>{item.question}</span>
                    <ChevronDown
                      className="text-brand-500 transition-transform group-open:rotate-180 shrink-0"
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

        <section id="contact" className="bg-gradient-to-br from-brand-900 to-[#164e96] py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 bg-white rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="bg-brand-700 text-white p-10 lg:p-14">
                <span className="text-accent-300 font-bold uppercase tracking-wider text-sm">
                  Conversion-Focused CTA
                </span>
                <h2 className="text-4xl font-bold mt-3 mb-5">
                  Need a Free Sale Certificate for Overseas Product Registration?
                </h2>
                <p className="text-blue-100 text-lg leading-8 mb-8">
                  We help exporters identify the right authority, validate the
                  domestic compliance trail, and prepare the file for issue and
                  downstream legalization if needed.
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
                  Start Your FSC Request
                </h3>
                <p className="text-slate-600 leading-7 mb-8">
                  Use the application flow below or speak to our team first if
                  you need help identifying the right regulator or legalization
                  path for the destination market.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() =>
                      setShowEnrollModal({
                        open: true,
                        type: "FSC_ENROLL"
                      })
                    }
                    className="rounded-2xl bg-brand-700 text-white font-bold py-4 px-6 hover:bg-brand-800 transition"
                  >
                    Apply for Free Sale Certificate
                  </button>
                  <a
                    href="#documents"
                    className="rounded-2xl border border-slate-300 text-slate-900 font-bold py-4 px-6 hover:bg-slate-50 transition text-center"
                  >
                    Review Document Checklist
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-600">
                  Best for: pharmaceuticals, medical devices, cosmetics, food,
                  AYUSH, and other products that need regulator-backed domestic
                  market proof before international sale or registration.
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
                  Regulatory, DGFT, and export-compliance support for Indian
                  exporters entering global markets.
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
                      to="/services/certificate-of-origin/"
                      className="hover:text-white"
                    >
                      Certificate of Origin
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/cdsco-compliance"
                      className="hover:text-white"
                    >
                      CDSCO Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/fssai-licensing"
                      className="hover:text-white"
                    >
                      FSSAI Licensing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ca-certification-export-import"
                      className="hover:text-white"
                    >
                      Export Documentation Support
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
                © 2026 EXIMINQ. Free Sale Certificate support for Indian
                exporters.
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

export default CloudDeskFreeSale;
