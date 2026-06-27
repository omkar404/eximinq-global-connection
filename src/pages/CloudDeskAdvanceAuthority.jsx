import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import TopBar from "../components/CloudDeskAdvanceAuthority/TopBar";
import Navbar from "../components/CloudDeskAdvanceAuthority/Navbar";
import Hero from "../components/CloudDeskAdvanceAuthority/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,  
  CheckCheck,
  MapPin,
  Percent,
  Boxes,
  Clock,
  CheckCircle,
  FileText,
  FileSignature,
  Phone,
  Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskAdvanceAuthority/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskAdvanceAuthority/ModalEnroll";

const ADVANCE_AUTH_FAQS = [
  {
    question: "Who can apply for Advance Authorisation?",
    answer:
      "Manufacturer exporters and merchant exporters tied to supporting manufacturers can apply, subject to product eligibility, value addition norms, and DGFT documentation requirements.",
  },
  {
    question: "What can I import under the Advance Authorisation scheme?",
    answer:
      "Eligible inputs physically incorporated in the export product can be imported duty free, including raw materials, components, consumables, catalysts, fuel, oil, and packing materials, subject to the applicable norms and policy conditions.",
  },
  {
    question: "What is Advance Authorisation for Annual Requirement?",
    answer:
      "Advance Authorisation for Annual Requirement allows eligible exporters with a track record to obtain a licence based on projected annual needs instead of applying shipment by shipment, subject to DGFT conditions.",
  },
  {
    question: "What is the export obligation period under Advance Authorisation?",
    answer:
      "The standard export obligation period is generally 18 months from the date of issue of the authorisation, unless a specific policy condition or sector-specific relaxation applies.",
  },
  {
    question: "What documents are required for Advance Authorisation application?",
    answer:
      "Typical documents include IEC, RCMC, product details, input-output ratio, technical write-up, past export data where applicable, Bill of Materials, manufacturing flow details, and supporting declarations required on the DGFT portal.",
  },
  {
    question: "What happens if export obligation is not fulfilled?",
    answer:
      "If export obligation is not fulfilled, the duty saved along with applicable interest and penalties may become payable, and the authorisation can create DGFT and Customs compliance exposure until it is regularised or closed properly.",
  },
  {
    question: "Can I sell imported inputs in the domestic market?",
    answer:
      "No. Inputs imported under Advance Authorisation are generally subject to actual user condition and must be used in accordance with the licence and export obligation requirements.",
  },
  {
    question: "What is Appendix 4H or the consumption register?",
    answer:
      "The consumption register is the working record used to map imported inputs against production and exports. It becomes critical during redemption, EODC review, and any Customs or DGFT verification.",
  },
  {
    question: "Can I claim Duty Drawback together with Advance Authorisation?",
    answer:
      "The interaction between Advance Authorisation and Duty Drawback depends on the duty element and the exact benefit claimed. The structure must be reviewed carefully to avoid ineligible or overlapping claims.",
  },
];

const ELIGIBILITY_POINTS = [
  "Manufacturer exporters importing inputs for products meant for export.",
  "Merchant exporters tied to a supporting manufacturer with traceable input consumption.",
  "Exporters using notified SION or seeking ad-hoc norms where SION is unavailable.",
  "Businesses able to maintain value addition, actual user, and export obligation records.",
];

const DOCUMENTS_REQUIRED = [
  "IEC, RCMC, and valid DSC for DGFT portal filing.",
  "Product description, export product technical details, and manufacturing flow chart.",
  "Input-output ratio or Bill of Materials with wastage and yield details.",
  "SION reference or ad-hoc norms justification with technical annexures.",
  "Past export performance and annual requirement basis, where applicable.",
  "Undertakings, declarations, and supporting records required for redemption and EODC.",
];

const COMPLIANCE_RISKS = [
  "Wrong SION or incorrect input description causing DGFT or Customs objections.",
  "Failure to mention authorisation details correctly in shipping bills and export documents.",
  "Mismatch between Bills of Entry, consumption records, and export quantities.",
  "Missed export obligation timelines leading to duty, interest, and penalty exposure.",
];

const GOVERNMENT_REFERENCES = [
  {
    title: "DGFT Foreign Trade Policy and Chapter 4 benefits framework",
    url: "https://www.dgft.gov.in/CP/?opt=foreign-trade-policy-2023",
    detail:
      "Official policy framework for export promotion schemes, including Advance Authorisation.",
  },
  {
    title: "Handbook of Procedures for operational filing and redemption requirements",
    url: "https://www.dgft.gov.in/CP/?opt=handbook-of-procedure",
    detail:
      "Primary operating reference for application, fulfilment, and closure processes.",
  },
  {
    title: "DGFT public notices and trade notices",
    url: "https://www.dgft.gov.in/CP/?opt=public-notices",
    detail:
      "Useful for policy changes, procedural clarifications, and updated filing positions.",
  },
];

const CloudDeskAdvanceAuthority = () => {
    const [showEnrollModal, setShowEnrollModal] = useState({
      open: false,
      type: "",
    });
  
    const handleEnrollmentSubmit = (formData) => {
      console.log("Enrollment Submitted:", formData);
  
      // TODO → send API call
      // axios.post("/api/enroll", formData)
  
      alert("Form submitted — check console for data.");
    };

  return (
    <>
    <Helmet>
  <title>
    Advance Authorisation Consultant India | DGFT License, SION & EODC Support | EXIMINQ
  </title>

  <meta
    name="description"
    content="Advance Authorisation consultant for DGFT licence application, SION fixation, annual requirement, export obligation tracking, redemption and EODC closure support across India."
  />

  <link
    rel="canonical"
    href="https://eximinq.in/services/advance-authorisation/"
  />

  <meta
    property="og:title"
    content="Advance Authorisation Consultant India | DGFT License, SION & EODC Support"
  />
  <meta
    property="og:description"
    content="Get expert support for Advance Authorisation application, SION or ad-hoc norms, duty-free import planning, export obligation tracking, and EODC redemption."
  />
  <meta
    property="og:url"
    content="https://eximinq.in/services/advance-authorisation/"
  />
  <meta property="og:type" content="article" />
  <meta
    name="keywords"
    content="advance authorisation consultant, advance authorisation scheme, DGFT advance authorisation, advance authorisation license, SION norms, ad hoc norms, export obligation, EODC, advance authorisation documents, annual requirement"
  />

    <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://eximinq.in/services/advance-authorisation/#webpage",
          "url": "https://eximinq.in/services/advance-authorisation/",
          "name": "Advance Authorisation Consultant India | DGFT License, SION & EODC Support | EXIMINQ",
          "description":
            "Advance Authorisation consultant for DGFT licence application, SION fixation, annual requirement, export obligation tracking, redemption and EODC closure support across India.",
          "inLanguage": "en-IN",
          "isPartOf": {
            "@type": "WebSite",
            "name": "EXIMINQ",
            "url": "https://eximinq.in"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://eximinq.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://eximinq.in/services/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Advance Authorisation",
              "item": "https://eximinq.in/services/advance-authorisation/"
            }
          ]
        },
        {
          "@type": "Service",
          "name": "Advance Authorisation Consultancy",
          "serviceType": "Advance Authorisation licence application, norms fixation and EODC support",
          "description":
            "Consultancy for Advance Authorisation scheme including DGFT application filing, SION or ad-hoc norms fixation, import planning, export obligation monitoring, redemption and EODC closure.",
          "provider": {
            "@type": "Organization",
            "name": "Eximinq Global Connections",
            "url": "https://eximinq.in"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "url": "https://eximinq.in/services/advance-authorisation/"
        },
        {
          "@type": "FAQPage",
          "mainEntity": ADVANCE_AUTH_FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    })}
  </script>
</Helmet>
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Advance Authorisation?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Text */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Advance Authorisation (AA) Scheme</strong> allows
              duty-free import of inputs (raw materials), which are physically
              incorporated in the export product. In addition to raw materials,
              fuel, oil, catalysts, and packaging materials required for
              production can also be allowed duty-free.
            </p>
            <p className="mb-4">
              The scheme operates on the principle that taxes/duties should not
              be exported. By waiving{" "}
              <strong>
                Basic Customs Duty (BCD), Social Welfare Surcharge (SWS), and
                IGST
              </strong>
              , the scheme makes Indian products competitive globally. However,
              it comes with an
              <strong> Export Obligation (EO)</strong> to export finished goods
              of a specified value and quantity.
            </p>
          </div>

          {/* Icon Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            {/* Card 1 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Percent className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Zero Duty</h3>
              <p className="text-sm text-slate-500">
                Complete waiver of BCD + SWS + IGST on eligible inputs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Boxes className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Physical Exports</h3>
              <p className="text-sm text-slate-500">
                Applicable for manufacturer exporters or merchant exporters tied
                to a supporting manufacturer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Clock className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">18 Months Validity</h3>
              <p className="text-sm text-slate-500">
                Standard period to fulfill the export obligation from the date
                of license issuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Eligibility and Planning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Who Should Apply for Advance Authorisation?
            </h2>
            <p className="text-slate-500 mt-3 max-w-3xl mx-auto">
              This page is designed for exporters searching for Advance
              Authorisation consultants, DGFT licence support, SION norms
              guidance, and a practical roadmap from application to redemption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Key eligibility checks
              </h3>
              <ul className="space-y-4 text-slate-600">
                {ELIGIBILITY_POINTS.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-900 rounded-2xl text-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                What makes this scheme valuable
              </h3>
              <div className="space-y-4 text-slate-100">
                <p>
                  Advance Authorisation helps reduce landed cost by allowing
                  duty-free import of eligible inputs used in export production.
                  That is why the page targets commercial search intent around
                  <strong> advance authorisation application</strong>,
                  <strong> DGFT consultant</strong>, and
                  <strong> export obligation support</strong>.
                </p>
                <p>
                  It is also a compliance-heavy scheme. Strong rankings depend
                  on showing real expertise around SION, ad-hoc norms, annual
                  requirement, actual user condition, and redemption rather than
                  generic promotional copy.
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
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Documents Required
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                Advance Authorisation Documents and Data Points
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Exporters frequently search for advance authorisation documents
                required before filing. In practice, approval quality depends on
                how well the application explains the input-output relationship,
                value addition, and policy basis for the claim.
              </p>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <ul className="space-y-3 text-slate-600">
                  {DOCUMENTS_REQUIRED.map((item) => (
                    <li key={item} className="flex gap-3">
                      <FileText className="text-brand-600 mt-1 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Compliance Risks
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                Common mistakes that trigger objections
              </h3>
              <div className="space-y-4">
                {COMPLIANCE_RISKS.map((risk) => (
                  <div
                    key={risk}
                    className="bg-red-50 border border-red-100 rounded-2xl p-5 text-slate-700"
                  >
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

    <section id="norms" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Technical Core
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Norm Fixation (SION)
          </h2>
          <p className="text-slate-500 mt-2">
            Determining how much input is allowed for your export output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE BLOCKS */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-500 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Standard Input Output Norms (SION)
              </h3>
              <p className="text-slate-600 text-sm">
                Pre-defined norms by DGFT. If your product falls under SION, the license is issued instantly based on these ratios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent-500 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Ad-hoc Norms (Self Ratification)
              </h3>
              <p className="text-slate-600 text-sm">
                If SION doesn't exist, we apply for Ad-hoc norms. We prepare technical data for consumption, wastage, and yield for Norms Committee approval.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Self Declaration (Advance Release)
              </h3>
              <p className="text-slate-600 text-sm">
                Get immediate license based on self-declaration while norms are being ratified — essential for urgent shipments.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <div className="bg-brand-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Why is Norm Fixation Critical?
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Wastage Limits:</strong> Incorrect wastage claims can result in heavy penalties during audits.
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Input Description:</strong> License description must match the Bill of Entry exactly to avoid customs objections.
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Value Addition:</strong> Minimum 15% value addition required. We calculate this precisely to ensure eligibility.
                  </span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <a
                  href="#redemption"
                  className="bg-white text-brand-900 font-bold py-3 px-6 rounded hover:bg-slate-100 transition"
                >
                  Consult an Expert
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>


      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              From Application to Closure
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-500">
                File online application on DGFT portal with valid RCMC and DSC.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Register the license at the Port of Registration (Customs).
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Import</h3>
              <p className="text-sm text-slate-500">
                Import inputs duty-free. Goods must be used in manufacturing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Export</h3>
              <p className="text-sm text-slate-500">
                Fulfill Export Obligation within 18 months. Mention License No
                on Shipping Bills.
              </p>
            </div>

            {/* Step 5 (with icon) */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
            text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCheck size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Redemption</h3>
              <p className="text-sm text-slate-500">
                Submit documents to DGFT to obtain EODC and close the file.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="timelines" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Timelines and References
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Timelines, Government References, and Related Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Practical compliance timeline
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Application stage:</strong> assess SION availability,
                  product description, wastage, value addition, and import plan
                  before filing.
                </p>
                <p>
                  <strong>Post-issue stage:</strong> register the licence,
                  manage imports, and maintain a clean trail between Bills of
                  Entry, production, and exports.
                </p>
                <p>
                  <strong>Export obligation stage:</strong> monitor quantity,
                  value, and time limits. If you are at risk of delay, review{" "}
                  <a
                    href="/services/eop-extension/"
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                  >
                    export obligation extension support
                  </a>{" "}
                  before the position becomes a penalty issue.
                </p>
                <p>
                  <strong>Closure stage:</strong> compile redemption records and
                  move toward{" "}
                  <a
                    href="/advance-authorization-redemption"
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                  >
                    Advance Authorisation redemption and EODC closure
                  </a>{" "}
                  to release pending liability cleanly.
                </p>
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
                    Related internal resources: compare this scheme with{" "}
                    <a href="/services/epcg-scheme" className="font-semibold underline underline-offset-4">
                      EPCG scheme
                    </a>
                    , review{" "}
                    <a href="/services/rodtep-scheme" className="font-semibold underline underline-offset-4">
                      RoDTEP scheme support
                    </a>
                    , or explore{" "}
                    <a href="/services/customs-adjudication" className="font-semibold underline underline-offset-4">
                      customs adjudication help
                    </a>{" "}
                    if the licence has already turned contentious.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="redemption" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Critical Compliance
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Redemption (EODC) Services
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Getting the license is easy; closing it is the hard part.
                Failure to submit proof of export results in heavy penalties and
                demand notices from Customs. We specialize in the{" "}
                <strong>Redemption</strong> process to get your{" "}
                <strong>Export Obligation Discharge Certificate (EODC)</strong>.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Need dedicated closure support for an existing license? Visit our{" "}
                <a
                  href="/advance-authorization-redemption"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  Advance Authorisation redemption and EODC closure service
                </a>{" "}
                for ANF 4F filing, value addition review, customs bond cancellation,
                and bank guarantee release.
              </p>

              {/* Checklist Box */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-brand-900 mb-4">
                  Our Closure Checklist:
                </h4>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Consolidation of Shipping Bills & e-BRCs.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Mapping of Import Bill of Entry vs Export.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    ANF-4F Application Filing.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Bond Cancellation at Customs.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE BOX */}
            <div
              className="relative h-80 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 
          flex items-center justify-center flex-col p-8 text-center text-white"
            >
              <FileSignature size={64} className="text-accent-400 mb-4" />

              <h3 className="text-2xl font-bold">Pending EODC?</h3>

              <p className="text-slate-300 mt-2">
                Don&apos;t let open licenses block your future benefits. We
                clear backlogs.
              </p>

              {/* <a
                href="#contact"
                className="mt-6 inline-block border border-white px-6 py-2 rounded 
              hover:bg-white hover:text-slate-900 transition"
              >
                Get Help Now
              </a> */}
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Pending_EODC",
                  })
                }
                className="mt-6 inline-block border border-white px-6 py-2 rounded 
              hover:bg-white hover:text-slate-900 transition"
              >
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Advance-Authorisation?</h2>
                    <p className="text-slate-500">
                        An AA license is a legal contract with the government. If you don't fulfill the 'Export Obligation,' the penalties are crushing. CloudDesk acts as your Compliance Shield.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. SION & Ad-hoc Norms Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Customs allows you to import based on <strong>SION (Standard Input-Output Norms). </strong>
                          But what if your product is new?<strong> CloudDesk</strong> specializes in Fixation of Ad-hoc Norms with the Norms Committee at <strong>DGFT,</strong> ensuring you get the maximum import entitlement for your specific manufacturing process.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. The "Pre-Import" Condition Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026, the <strong>"Pre-import" rule for IGST </strong>exemption is a minefield. 
                          <strong>CloudDesk </strong>ensures your import and export timelines are perfectly synced so you don't get hit with retrospective 
                          <strong>IGST </strong>demands and interest years later.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Real-Time "Obligation" Tracker</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         The biggest failure in AA is missing the<strong> Export Obligation (EO)</strong> deadline. <strong>CloudDesk </strong>provides a Live Consumption Ledger.
                         We track every gram of raw material imported against every unit exported, alerting you<strong> 6 months </strong>before the deadline if your EO is lagging.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. End-to-End Redemption (EODC)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Getting the<strong> license is only 10% </strong>of the work. The real battle is getting the <strong>Export Obligation Discharge Certificate (EODC).</strong>
                          We manage the entire redemption process—linking<strong> Shipping Bills to Bills </strong>of Entry—to ensure your bond is cancelled and your bank guarantee is released.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Advance Authorisation FAQs
          </h2>

          <div className="space-y-4">
            {ADVANCE_AUTH_FAQS.map((faq) => (
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

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
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

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/advance-authorisation/" className="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="/advance-authorization-redemption" className="hover:text-white transition">
                  Advance Authorisation Redemption
                </a>
              </li>
              <li>
                <a href="/services/epcg-scheme" className="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="/services/rodtep-rosctl-trading" className="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
              <li>
                <a href="/services/star-export-house" className="hover:text-white transition">
                  Star Export House
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  SION Norms List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Customs Notifications
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP 2023
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
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

        {/* COPYRIGHT */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
          © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
          DGFT.
        </div>
      </footer>
    </div>
    </>
  );
};

export default CloudDeskAdvanceAuthority;


