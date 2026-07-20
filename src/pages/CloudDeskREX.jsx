import TopBar from "../components/CloudDeskREX/TopBar";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskREX/Navbar";
import Hero from "../components/CloudDeskREX/Hero";
import Fees from "../components/CloudDeskREX/Fees";
import {
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
  IdCard,
  KeyRound,
  FileText,
  CheckCheck,
  Check,
  Wallet,
  Laptop,
  HandCoins,
  Truck,
  Infinity,
  AlertTriangle,
  Flag,
  Crown,
  Snowflake,
  Landmark,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskREX/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskREX/ModalEnroll";
import logo from "../assets/images/logo.png";

const CANONICAL_URL = "https://eximinq.in/services/rex-registration/";
const OG_IMAGE_URL = `https://eximinq.in${logo}`;

const rexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eximinq.in/#organization",
      name: "EXIMINQ Global Connections",
      url: "https://eximinq.in/",
      logo: OG_IMAGE_URL,
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: "REX Registration Consultant India",
      description:
        "REX registration consultant in India for EU GSP, Registered Exporter number, statement on origin, rules of origin review and duty-free export documentation.",
      isPartOf: { "@id": "https://eximinq.in/#website" },
      about: { "@id": `${CANONICAL_URL}#service` },
      breadcrumb: { "@id": `${CANONICAL_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eximinq.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://eximinq.in/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "REX Registration",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${CANONICAL_URL}#service`,
      name: "REX Registration",
      provider: { "@id": "https://eximinq.in/#organization" },
      areaServed: "India",
      serviceType: "Registered Exporter Number Registration",
      url: CANONICAL_URL,
      description:
        "REX registration support for exporters claiming EU GSP and self-certifying origin with statement on origin, HSN mapping, IEC review and local administrator coordination.",
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the REX System?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Registered Exporter system allows approved exporters to self-certify origin by placing a statement on origin on the invoice instead of obtaining Form A for each shipment.",
          },
        },
        {
          "@type": "Question",
          name: "Is REX mandatory for all exports to the EU?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "REX is required when an exporter wants to claim GSP preferential duty benefits for eligible shipments above EUR 6,000. Smaller shipments may be self-certified without a REX number.",
          },
        },
        {
          "@type": "Question",
          name: "How long does REX registration take?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After the application is complete and accepted by the relevant administrator, REX number generation commonly takes about 3 to 5 working days.",
          },
        },
      ],
    },
  ],
};

const CloudDeskREX = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: ""
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted - check console for data.")
  }
  return (

<>

<Helmet defer={false}>
        <title>REX Registration Consultant India | Registered Exporter Number for EU GSP | EXIMINQ</title>
        <meta
          name="description"
          content="REX registration consultant in India for EU GSP exports, Registered Exporter number, statement on origin, rules of origin review, HSN mapping and duty-free export documentation."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="REX Registration Consultant India | EXIMINQ" />
        <meta
          property="og:description"
          content="Get REX number support for EU GSP exports, statement on origin, HSN mapping and rules of origin compliance."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXIMINQ" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="REX Registration Consultant India | EXIMINQ" />
        <meta
          name="twitter:description"
          content="Registered Exporter number support for EU GSP, self-certified origin statements and preferential export documentation."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(rexSchema)}</script>
      </Helmet>
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal}/>
      <Hero setShowEnrollModal={setShowEnrollModal}/>

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is REX System?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Registered Exporter (REX)</strong> system is a system
              of self-certification of origin of goods by exporters. It
              facilitates exports to countries under the{" "}
              <strong>Generalised System of Preferences (GSP)</strong> scheme
              (mainly EU).
            </p>
            [Image of REX Workflow Diagram]
            <p className="mb-4">
              Under this system, the physical "Certificate of Origin Form A"
              issued by agencies (like EIA) has been replaced. Instead,
              exporters register once on the REX portal, obtain a{" "}
              <strong>REX Number</strong>, and simply print a "Statement on
              Origin" on their own commercial invoice. This statement allows the
              buyer to claim duty concessions.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Why Register?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Advantages of REX
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandCoins className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Zero Cost per Shipment
              </h3>
              <p className="text-sm text-slate-600">
                Unlike traditional CoO which costs ₹ 600-1000 per shipment,
                self-certification is free. You save significant documentation
                costs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-blue-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Faster Clearance
              </h3>
              <p className="text-sm text-slate-600">
                No need to wait for agency signatures. Simply print the
                statement on your invoice and dispatch the goods immediately.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Infinity className="text-purple-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Lifetime Validity
              </h3>
              <p className="text-sm text-slate-600">
                The REX Registration Number is valid indefinitely unless
                revoked. It does not require annual renewal.
              </p>
            </div>
          </div>

          {/* Warning Section */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg max-w-3xl mx-auto">
            <h4 className="font-bold text-red-900 text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="text-red-500 w-5 h-5" />
              Mandatory Rule
            </h4>
            <p className="text-sm text-red-800">
              For consignment values <strong>above € 6,000</strong>, REX
              Registration is MANDATORY to claim GSP benefits in the EU. Without
              a REX Number, the buyer will have to pay full import duty.
            </p>
          </div>
        </div>
      </section>

      <section id="countries" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Countries Accepting REX
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The REX system is primarily used by the European Union GSP
                scheme, but other nations have also adopted it for ease of
                trade.
              </p>

              <ul className="space-y-4">
                {/* EU */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Flag className="text-accent-400 text-2xl w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">
                      European Union (27 Countries)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Germany, France, Italy, Netherlands, etc.
                    </p>
                  </div>
                </li>

                {/* UK */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Crown className="text-accent-400 text-2xl w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">United Kingdom</h4>
                    <p className="text-xs text-slate-400">
                      Under UK GSP (Enhanced Framework).
                    </p>
                  </div>
                </li>

                {/* Switzerland & Norway */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Snowflake className="text-accent-400 text-2xl w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Switzerland & Norway</h4>
                    <p className="text-xs text-slate-400">
                      EFTA countries accepting self-certification.
                    </p>
                  </div>
                </li>

                {/* Turkey */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Landmark className="text-accent-400 text-2xl w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Turkey</h4>
                    <p className="text-xs text-slate-400">
                      For GSP preferential imports.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Box */}
            <div className="relative bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Statement on Origin
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                This is the exact text you must print on your invoice:
              </p>

              <div className="bg-slate-100 p-4 rounded border border-slate-300 font-mono text-xs text-slate-700 leading-relaxed italic">
                "The exporter of the products covered by this document (customs
                authorization No ... <strong>[REX Number]</strong> ...) declares
                that, except where otherwise clearly indicated, these products
                are of ... <strong>[Origin]</strong> ... preferential origin
                according to rules of origin of the Generalised System of
                Preferences of the European Union."
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-slate-500 block mb-2">
                  *Format may vary slightly for UK/Switzerland.
                </span>
                <a
                  href="#contact"
                  className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
                >
                  Get Registration
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              DGFT Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Registration Process
            </h2>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-slate-500">
                File online application on DGFT portal with IEC and DSC.
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
              <h3 className="text-lg font-bold mb-2">Selection</h3>
              <p className="text-sm text-slate-500">
                Select Local Administrator (Export Inspection Agency / DGFT RA).
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
              <h3 className="text-lg font-bold mb-2">Approval</h3>
              <p className="text-sm text-slate-500">
                Nodal officer verifies details. No physical visit usually
                required.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Generation</h3>
              <p className="text-sm text-slate-500">
                12-Digit REX Number generated (e.g., INREX1234567890).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees setShowEnrollModal={setShowEnrollModal}/>


{/* --- WHY CLOUDDESK SECTION (REX) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for REX Registration?</h2>
      <p className="text-slate-500">
        REX replaces the old 'Form A' with a Statement on Origin. If your statement is wrong, the EU Customs will seize the cargo.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Transition to Self-Certification</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The old days of getting a "Form A" stamped by an agency for every shipment are over. Once you have a REX number, you simply type a specific <strong>Statement on Origin</strong> on your commercial invoice. CloudDesk provides the <strong>Exact Legal Text</strong> required for 2026 compliance, ensuring your buyer's duty benefit is never rejected.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Pre-Registration Audit</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            To get a REX number, you must prove you understand the <strong>Rules of Origin (RoO)</strong>. CloudDesk performs a <strong>"GSP Compliance Check"</strong> on your manufacturing process to ensure your product actually qualifies as "Indian" under the EU's <strong>2026 value-addition norms</strong>.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Local Administrator Liaison</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In India, REX is administered by agencies like the <strong>Export Inspection Council (EIC)</strong> and DGFT. CloudDesk manages the application on the <strong>EU's REX Portal</strong> and coordinates with the local Indian office for physical verification (if required) to ensure your number is issued within <strong>7 days</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. The "REX Database" Sync</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your REX number must be <strong>"Active"</strong> in the EU's central database. If it's <strong>"Pending" or "Suspended,"</strong> your shipment will be blocked. CloudDesk monitors your <strong>REX Status</strong> and ensures your profile is updated with the latest HSN codes and production details.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (REX) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the REX System?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is a system of certification of origin based on a principle of <strong>Self-Certification</strong>. Exporters who are "Registered" can certify the origin of their goods themselves via a <strong>"Statement on Origin"</strong> on the invoice.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is REX mandatory for all exports to the EU?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is mandatory for shipments where you want to claim <strong>GSP (Preferential) duty benefits</strong> and the value exceeds <strong>€6,000</strong>. For shipments below €6,000, any exporter can self-certify without a REX number.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does REX apply to the UK?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the UK uses the <strong>DCTS (Developing Countries Trading Scheme)</strong>. While similar to REX, it has its own registration requirements. CloudDesk manages both <strong>REX (EU/Switzerland/Norway)</strong> and <strong>DCTS (UK)</strong> registrations.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long does it take to get a REX number?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Once the application is submitted on the EU portal and approved by the local Indian agency (like EIC), the number is generated in <strong>3–5 working days</strong>.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Statement on Origin"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is a specific piece of text that <strong>MUST be on your invoice</strong>. Example: <em>"The exporter [REX Number] of the products covered by this document declares that, except where otherwise clearly indicated, these products are of Indian preferential origin."</em>
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need a REX number for every product?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. <strong>One REX number covers your entire IEC</strong>. However, you must list all the HSN Sections you intend to export in your REX application. CloudDesk helps you <strong>"Future-Proof"</strong> your application by including relevant HSNs.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does the REX registration expire?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No, the REX registration has <strong>no expiry date</strong>. However, it can be revoked if you fail to <strong>maintain records for 3 years</strong> or if an "Origin Audit" proves your goods don't meet the value-addition criteria.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What if I make a mistake in my REX statement?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If the EU Customs finds a discrepancy, they will deny the duty benefit to your buyer and charge the <strong>Full MFN Duty plus penalties</strong>. CloudDesk provides a <strong>Statement Validator</strong> to ensure every invoice is perfect.
        </p>
      </details>
    </div>
  </div>
</section>


      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Related Export Documentation
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Services Exporters Often Need With REX
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Certificate of Origin",
                text: "Preferential and non-preferential COO support for export shipments.",
                href: "/services/certificate-of-origin/",
              },
              {
                title: "GST LUT Filing",
                text: "Annual LUT filing for exports without IGST payment.",
                href: "/services/gst-lut-filing/",
              },
              {
                title: "Shipping Bill Filing",
                text: "Customs export declaration and shipment filing support.",
                href: "/services/shipping-bill-filing/",
              },
              {
                title: "RoDTEP Scheme",
                text: "RoDTEP claim support for eligible export incentives.",
                href: "/services/rodtep-scheme/",
              },
              {
                title: "IEC Update",
                text: "IEC modification and profile update support for exporters.",
                href: "/services/import-export-code/",
              },
              {
                title: "All Export Services",
                text: "Explore DGFT, Customs and export compliance services.",
                href: "/services/",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:border-brand-300 hover:shadow-md transition"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a href="/" className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
            </p>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/eximinq/" aria-label="EXIMINQ LinkedIn" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/eximinq" aria-label="EXIMINQ X" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/eximinq" aria-label="EXIMINQ Facebook" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/rex-registration/" className="hover:text-white transition">
                  REX Registration
                </a>
              </li>
              <li>
                <a href="/services/certificate-of-origin/" className="hover:text-white transition">
                  Certificate of Origin
                </a>
              </li>
              <li>
                <a href="/services/ad-code-registration/" className="hover:text-white transition">
                  AD Code Registration
                </a>
              </li>
              <li>
                <a href="/services/import-export-code/" className="hover:text-white transition">
                  IEC Update
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefits" className="hover:text-white transition">
                  EU GSP Rules
                </a>
              </li>
              <li>
                <a href="#countries" className="hover:text-white transition">
                  Invoice Declaration
                </a>
              </li>
              <li>
                <a href="/tools/hs-code-finder/" className="hover:text-white transition">
                  HS Code Finder
                </a>
              </li>
              <li>
                <a href="/contact-us/" className="hover:text-white transition">
                  DGFT Helpdesk
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

export default CloudDeskREX;
