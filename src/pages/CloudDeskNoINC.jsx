import TopBar from "../components/CloudDeskNoINC/TopBar";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskNoINC/Navbar";
import Hero from "../components/CloudDeskNoINC/Hero";
import Fees from "../components/CloudDeskNoINC/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  Phone,
  Mail,
  MapPin,
  Ban,
  AlertCircle,
  CheckCircle,
  FileText,
  Receipt,
  MailOpen,
  FileSignature,
  ScrollText,
  Check,
  FileUp,
  FileSpreadsheet,
  FileCheck,
  Banknote,
  Award,
  ThumbsDown,
  Wrench,
  Monitor,
  Info,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskNoINC/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskNoINC/ModalEnroll";
import logo from "../assets/images/logo.png";

const CANONICAL_URL = "https://eximinq.in/services/no-incentive-certificate/";
const META_TITLE =
  "No Incentive Certificate Consultant India | Returned Goods & Re-Import | EXIMINQ";
const META_DESCRIPTION =
  "No Incentive Certificate consultant in India for returned goods, re-import clearance, non-availment certificate, RoDTEP and drawback reversal, IGST refund verification and customs documentation.";
const OG_IMAGE_URL = `https://eximinq.in${logo}`;
const NO_INCENTIVE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eximinq.in/#organization",
      name: "Eximinq Global Connections",
      url: "https://eximinq.in/",
      logo: OG_IMAGE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-74000-96950",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: META_TITLE,
      description: META_DESCRIPTION,
      isPartOf: {
        "@id": "https://eximinq.in/#website",
      },
      inLanguage: "en-IN",
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
          name: "No Incentive Certificate",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${CANONICAL_URL}#service`,
      name: "No Incentive Certificate for Returned Goods",
      url: CANONICAL_URL,
      image: OG_IMAGE_URL,
      provider: {
        "@id": "https://eximinq.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "No Incentive Certificate",
        "Non-Availment Certificate",
        "Returned Goods Re-Import Support",
        "Export Benefit Reversal",
      ],
      description: META_DESCRIPTION,
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a No Incentive Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A No Incentive Certificate confirms that no export incentives such as RoDTEP, duty drawback, IGST refund or scrip benefits were claimed for specified shipping bills or goods.",
          },
        },
        {
          "@type": "Question",
          name: "When is a No Incentive Certificate required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is commonly required for returned goods, re-import clearance, Section 74 drawback, benefit reversal, licence closure and cases where customs needs proof of non-availment.",
          },
        },
        {
          "@type": "Question",
          name: "What if RoDTEP or drawback was automatically credited?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The credited benefit generally needs to be reversed or surrendered with applicable interest before a No Incentive Certificate can be issued.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a self-declaration instead of a No Incentive Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For low-risk cases a self-declaration or CA certificate may be accepted, but high-value re-imports and refunds often require customs or DGFT verification.",
          },
        },
      ],
    },
  ],
};

const CloudDeskNoINC = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted - check console for data.");
  };
  return (
    <>
      <Helmet defer={false}>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXIMINQ" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify(NO_INCENTIVE_SCHEMA)}
        </script>
      </Helmet>
      <div className="bg-slate-50 text-slate-800">
        {/* Dynamic Sections */}
        {/* <TopBar /> */}
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why is this Certificate Mandatory?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                When Indian goods are re-imported, they are treated as fresh
                imports and attract Customs Duty. However, under{" "}
                <strong>Notification No. 158/95-Cus</strong>, re-import is
                allowed duty-free if the exporter can prove that they have not
                retained any export benefits.
              </p>
              <p className="mb-4">
                The <strong>No Incentive Certificate</strong> serves as proof
                that benefits like Duty Drawback, RoDTEP, or IGST Refund were
                either never claimed or have been refunded to the government
                with interest. Without this, you will have to pay full import
                duty on your own goods.
              </p>
            </div>
          </div>
        </section>

        <section id="scenarios" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                When Do You Need It?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Case 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                  <ThumbsDown size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Rejection
                </h3>
                <p className="text-sm text-slate-600">
                  Buyer rejects the cargo due to quality issues or damage. Goods
                  are returned to India for replacement or scrap.
                </p>
              </div>

              {/* Case 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <Wrench size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Repair &amp; Return
                </h3>
                <p className="text-sm text-slate-600">
                  Machinery or equipment sent abroad for repairs or Indian goods
                  returning for repairs under warranty.
                </p>
              </div>

              {/* Case 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  <Monitor size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Exhibition Goods
                </h3>
                <p className="text-sm text-slate-600">
                  Samples sent for trade fairs or exhibitions returning unsold.
                  Proof of re-import within 6 months is required.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
              <h4 className="font-bold text-yellow-800 text-lg mb-2 flex items-center justify-center gap-2">
                <Info size={20} /> Time Limit
              </h4>
              <p className="text-sm text-yellow-700">
                Re-import must generally happen within <strong>3 years</strong>{" "}
                of export to claim benefit. For Nepal/Bhutan, it's 10 years.
              </p>
            </div>
          </div>
        </section>

<section id="documents" className="py-20 bg-brand-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Required Documents
        </h2>
        <p className="text-slate-300 mb-8 leading-relaxed">
          To issue the certificate, Customs needs to verify the original
          export details.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FileUp className="text-accent-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <strong className="block text-white">Original Export Invoice</strong>
              <span className="text-sm text-slate-400">And Packing List.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FileSpreadsheet className="text-accent-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <strong className="block text-white">
                Shipping Bill (Export Promotion Copy)
              </strong>
              <span className="text-sm text-slate-400">
                Showing the claim status (Drawback/RoDTEP).
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FileCheck className="text-accent-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <strong className="block text-white">Rejection Correspondence</strong>
              <span className="text-sm text-slate-400">
                Email or Letter from buyer stating reason for return.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Banknote className="text-accent-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <strong className="block text-white">Challan (TR-6)</strong>
              <span className="text-sm text-slate-400">
                Proof of refunding incentives (if already claimed) with interest.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
        <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
          Identity Verification
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Customs may ask for a <strong>Chartered Engineer Certificate</strong>{" "}
          to verify that the re-imported goods are the exact same ones that
          were exported (checking Serial Numbers/Marks).
        </p>
        <a
          href="#contact"
          className="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-700 transition"
        >
          Arrange Inspection
        </a>
      </div>
    </div>
  </div>
</section>

<section id="process" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
        Workflow
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        Steps to Certification
      </h2>
    </div>

    <div className="relative grid md:grid-cols-4 gap-8 step-connector">
      {/* Step 1 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
          1
        </div>
        <h3 className="text-lg font-bold mb-2">Refund</h3>
        <p className="text-sm text-slate-500">
          If you received Drawback/IGST refund, pay it back to Customs via Challan.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
          2
        </div>
        <h3 className="text-lg font-bold mb-2">Application</h3>
        <p className="text-sm text-slate-500">
          Submit request to the Assistant Commissioner (Exports) at the port of export.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
          3
        </div>
        <h3 className="text-lg font-bold mb-2">Verification</h3>
        <p className="text-sm text-slate-500">
          Officer verifies ledger to confirm incentives were reversed or not taken.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-2">Issuance</h3>
        <p className="text-sm text-slate-500">
          Certificate issued. Present this to the Import Appraiser for duty-free clearance.
        </p>
      </div>
    </div>
  </div>
</section>

        <Fees setShowEnrollModal={setShowEnrollModal} />

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for No-Incentive-Certificate?
              </h2>
              <p className="text-slate-500">
                A No Incentive Certificate is a 'Negative Declaration' that requires positive proof. CloudDesk audits your shipping history to ensure your claim is 100% truthful.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    1. Cross-Scheme Audit (The Anti-Double Dipping Check)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before Customs issues a Section 74{" "}
                    <strong>
                      Export Obligation Discharge Certificate (EODC),
                    </strong>{" "}
                    (98% Duty Refund), they require an NIC from the DGFT and the GST department confirming you haven't claimed RoDTEP, Drawback (AIR), or IGST refunds on that specific shipment. 
                    <strong>CloudDesk </strong>performs a Cross-Porta{" "}
                    <strong>l Reconciliation to ensure no "Automatic"  </strong> benefits were credited to your ledger.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    2. Regularization Support (AA/EPCG)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If you are<strong> "Surrendering" </strong>a license because you couldn't meet the Export Obligation, you must prove you didn't use the license for any exports. 
                    <strong>CloudDesk </strong>obtains the NIC from the Jurisdictional Customs Port, certifying that no shipping bills were tagged against that license, allowing for a smooth closure.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    3. IGST & Drawback Conflict Resolution
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sometimes, the system accidentally credits a<strong> Drawback </strong>amount even if you didn't ask for it. 
                    This blocks other<strong> higher-value refunds.</strong><strong> CloudDesk </strong>manages the Drawback Re-payment process to<strong> "Reverse" </strong>
                    the benefit and secure an NIC so you can claim your primary refund.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                  <ShieldUser size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    4. Bank & FEMA Compliance
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    For certain specialized financial transactions or<strong> FEMA regularizations,</strong> banks require a certificate stating no government incentives were received for a particular inward remittance.
                    We manage the<strong> CA Certification and government liaison </strong>to provide this<strong> "Clean Bill of Health."</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>

            {/* FAQ Items */}
            <div className="space-y-4">
              {/* Question 1 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  What exactly is a "No Incentive Certificate"?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    It is a formal declaration from an authority (Customs or DGFT) stating that for a particular set of Shipping Bills or a particular License, no export incentives (like RoDTEP, Drawback, or Scrips) have been claimed or disbursed.
                </p>
              </details>

              {/* Question 2 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  When is an NIC mandatory?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                • When claiming Section 74 Drawback (Re-exports).
                • When Regularizing/Closing an Advance Authorisation or EPCG license where no exports were made.
                • When applying for a Brand Rate Fixation (to prove you haven't taken the All Industry Rate).
                </p>
              </details>

              {/* Question 3 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Can I self-declare an NIC?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  In some cases, a Self-Declaration + CA Certificate works. However, for high-value refunds, Customs will insist on an EDI-generated NIC from the ICEGATE system or a manual one from the DGFT.
                </p>
              </details>

              {/* Question 4 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  How does CloudDesk verify "Non-Availment"?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  We scan your Electronic Duty Credit Ledger (EDCL) on ICEGATE and your E-BRC list on the DGFT portal. If a benefit was granted, we help you surrender it (with interest, if applicable) to get the NIC.
                </p>
              </details>

              {/* Question 5 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  What if RoDTEP was automatically scrolled in my Shipping Bill?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    This is a common 2026 problem. Even if you didn't "ask" for it, the system might have processed it. To get an NIC, you must first refund the RoDTEP amount to the government. We manage this "Benefit Reversal" process.
                </p>
              </details>

              {/* Question 6 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Does the NIC mention the specific amount?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  No. An NIC usually certifies that no benefit has been availed
                  under a named scheme for the relevant shipping bill and date.
                </p>
              </details>

              {/* Question 7 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Is there an expiry for a No Incentive Certificate?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  The certificate itself doesn't expire, but it must be submitted to the requesting authority (like the Drawback Department) within their specific filing window (usually 30–90 days).
                </p>
              </details>

              {/* Question 8 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Can I get an NIC for "Deemed Exports"?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Yes. If you are a domestic supplier to an EOU/SEZ and the buyer is claiming the benefits, you need to provide an NIC to prove you haven't claimed them, ensuring the buyer’s claim is valid.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Related Returned Goods & Incentive Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Services Often Needed With No Incentive Certificate
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "No Due Certificate",
                  href: "/services/no-due-certificate/",
                  copy: "Resolve pending liabilities and obtain DGFT or customs clearance certificates.",
                },
                {
                  title: "Customs Adjudication",
                  href: "/services/customs-adjudication/",
                  copy: "Prepare replies and representation for customs notices and benefit disputes.",
                },
                {
                  title: "Duty Drawback",
                  href: "/services/duty-drawback/",
                  copy: "Review drawback claims, reversals, Section 74 cases and incentive recovery.",
                },
                {
                  title: "RoDTEP Scheme",
                  href: "/services/rodtep-scheme/",
                  copy: "Verify RoDTEP credits, rates, caps and reversal requirements for export bills.",
                },
                {
                  title: "IGST Refund",
                  href: "/services/igst-refund/",
                  copy: "Fix refund mismatches, scroll delays and shipping bill GST reconciliation issues.",
                },
                {
                  title: "CA Certification",
                  href: "/services/ca-certification-export-import/",
                  copy: "Get CA-backed certificates for export turnover, incentives and compliance records.",
                },
              ].map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="block bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.copy}
                  </p>
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
              <a href="/" className="text-2xl font-bold text-white mb-4 block">
                EXIMINQ
              </a>

              <p className="text-sm mb-6">
                EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
                Logistics compliance.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/eximinq/"
                  aria-label="EXIMINQ on LinkedIn"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/eximinq"
                  aria-label="EXIMINQ on X"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com/eximinq"
                  aria-label="EXIMINQ on Facebook"
                  className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    Re-import Clearance
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition">
                    Benefit Reversal
                  </a>
                </li>
                <li>
                  <a href="#documents" className="hover:text-white transition">
                    Returned Goods Docs
                  </a>
                </li>
                <li>
                  <a
                    href="/services/customs-adjudication/"
                    className="hover:text-white transition"
                  >
                    Customs Support
                  </a>
                </li>
              </ul>
            </div>

            {/* OTHER SERVICES */}
            <div>
              <h4 className="text-white font-bold mb-6">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/services/no-due-certificate/"
                    className="hover:text-white transition"
                  >
                    No Due Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="/services/duty-drawback/"
                    className="hover:text-white transition"
                  >
                    Duty Drawback
                  </a>
                </li>
                <li>
                  <a
                    href="/services/rodtep-scheme/"
                    className="hover:text-white transition"
                  >
                    RoDTEP Scheme
                  </a>
                </li>
                <li>
                  <a
                    href="/services/igst-refund/"
                    className="hover:text-white transition"
                  >
                    IGST Refund
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

export default CloudDeskNoINC;
