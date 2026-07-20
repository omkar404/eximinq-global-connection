import TopBar from "../components/CloudDeskNoDue/TopBar";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskNoDue/Navbar";
import Hero from "../components/CloudDeskNoDue/Hero";
import Fees from "../components/CloudDeskNoDue/Fees";
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
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskNoDue/MainNavbar"; 
import { ModalEnroll } from "../components/CloudDeskNoDue/ModalEnroll"; 
import logo from "../assets/images/logo.png";

const CANONICAL_URL = "https://eximinq.in/services/no-due-certificate/";
const META_TITLE =
  "No Due Certificate Consultant India | DGFT NDC & DEL Removal | EXIMINQ";
const META_DESCRIPTION =
  "No Due Certificate consultant in India for DGFT NDC, IEC surrender, DEL removal, EPCG and Advance Authorisation closure, customs bond release and pending liability settlement.";
const OG_IMAGE_URL = `https://eximinq.in${logo}`;
const NO_DUE_SCHEMA = {
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
          name: "No Due Certificate",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${CANONICAL_URL}#service`,
      name: "No Due Certificate and DEL Removal Support",
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
        "DGFT No Due Certificate",
        "IEC Surrender Support",
        "DEL Removal",
        "Customs Bond Release",
      ],
      description: META_DESCRIPTION,
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do I need an NDC for my EPCG or Advance Authorisation license?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A No Due Certificate confirms that export obligations, administrative fees, late fees, penalties and pending liabilities linked to the IEC have been cleared.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get my bank guarantee back without a No Due Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Customs generally releases the bond or bank guarantee only after the licence cell and relevant recovery sections confirm that no dues remain.",
          },
        },
        {
          "@type": "Question",
          name: "Can a show cause notice block my NDC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Pending show cause notices, demands or adjudication matters can block NDC processing until the liability is settled or regularised.",
          },
        },
        {
          "@type": "Question",
          name: "Is NDC required for IEC surrender?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. IEC surrender usually requires confirmation that there are no incomplete export obligations or open authorisations against the IEC.",
          },
        },
      ],
    },
  ],
};

const CloudDeskNoDue = () => {
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
          {JSON.stringify(NO_DUE_SCHEMA)}
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
                What is a No Due Certificate?
              </h2>
              <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
              <p className="mb-4">
                A <strong>No Due Certificate (NDC)</strong> is an official
                document issued by the Regional Authority of DGFT confirming
                that the firm has no pending export obligations, unredeemed
                licenses, or unpaid penalties against its Import Export Code
                (IEC).
              </p>
              <p className="mb-4">
                <br />
                It acts as a "Clean Chit" from the government. It is crucial
                when a company wants to <strong>surrender its IEC</strong> to
                close down business, or when it wants to remove its name from
                the <strong>Denied Entity List (DEL)</strong> to resume
                import-export activities.
              </p>
            </div>
          </div>
        </section>

        <section id="scenarios" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Blacklist Removal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Denied Entity List (DEL)
              </h2>
              <p className="text-slate-500 mt-2">
                Is your IEC blocked? We can help you reinstate it.
              </p>
            </div>

            {/* Boxes */}
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Box 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-red-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Ban className="text-red-500 w-7 h-7" /> Why are you on DEL?
                </h3>

                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 mt-1" />
                    <span>
                      Non-fulfillment of Export Obligation against Advance
                      Authorisation or EPCG.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 mt-1" />
                    <span>
                      Failure to submit installation certificates or redemption
                      documents on time.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 mt-1" />
                    <span>
                      Non-payment of penalties imposed under FTDR Act.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-green-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-7 h-7" /> How to Exit
                  DEL?
                </h3>

                <ol className="space-y-4 text-slate-600 list-decimal list-inside font-medium">
                  <li>Identify all open/pending files causing the block.</li>
                  <li>Submit proof of export (EODC) for those files.</li>
                  <li>
                    Pay applicable Customs Duty + Interest for unfulfilled
                    portion.
                  </li>
                  <li>Pay penalty (if Adjudication Order is passed).</li>
                  <li>
                    File request for <strong>Refusal Order Withdrawal</strong>.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-brand-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Required Documents
                </h2>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  To obtain an NDC, we must close every single open file in the
                  DGFT system.
                </p>

                <ul className="space-y-4">
                  {/* Item 1 */}
                  <li className="flex items-start gap-3">
                    <FileText className="text-accent-400 w-6 h-6 mt-1" />
                    <div>
                      <strong className="block text-white">
                        Original Licenses
                      </strong>
                      <span className="text-sm text-slate-400">
                        Copies of all old Advance/EPCG licenses.
                      </span>
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="flex items-start gap-3">
                    <Receipt className="text-accent-400 w-6 h-6 mt-1" />
                    <div>
                      <strong className="block text-white">
                        Payment Challans
                      </strong>
                      <span className="text-sm text-slate-400">
                        Proof of Duty/Interest payment for unfulfilled
                        obligations.
                      </span>
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="flex items-start gap-3">
                    <MailOpen className="text-accent-400 w-6 h-6 mt-1" />
                    <div>
                      <strong className="block text-white">
                        Show Cause Notices
                      </strong>
                      <span className="text-sm text-slate-400">
                        Copies of any SCN or Adjudication Orders received.
                      </span>
                    </div>
                  </li>

                  {/* Item 4 */}
                  <li className="flex items-start gap-3">
                    <FileSignature className="text-accent-400 w-6 h-6 mt-1" />
                    <div>
                      <strong className="block text-white">Affidavit</strong>
                      <span className="text-sm text-slate-400">
                        Indemnity bond stating no other liabilities exist.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl text-center">
                <ScrollText className="text-brand-600 w-20 h-20 mx-auto mb-6" />

                <h3 className="text-xl font-bold mb-2">IEC Surrender</h3>

                <p className="text-sm text-slate-600 mb-6">
                  Closing your business? You must surrender your IEC online. The
                  system will only allow surrender if there are no open
                  authorizations.
                </p>

                {/* <a
                  href="#home"
                  className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition"
                >
                  Start Surrender Process
                </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_Surrender",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Surrender Process
          </button>                
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Resolution Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Path to Compliance
              </h2>
            </div>

            {/* Steps */}
            <div className="relative grid md:grid-cols-4 gap-8 step-connector">
              {/* Step 1 */}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Audit</h3>
                <p className="text-sm text-slate-500">
                  We scan the DGFT server to list all "Live" authorizations
                  against your IEC.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Regularize</h3>
                <p className="text-sm text-slate-500">
                  We file EODC applications for each open license or pay duties
                  to close them.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Application</h3>
                <p className="text-sm text-slate-500">
                  File request for DEL removal or No Due Certificate to the RA.
                </p>
              </div>

              {/* Step 4 (Check Icon) */}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Clearance</h3>
                <p className="text-sm text-slate-500">
                  Name removed from DEL list and NDC issued. IEC becomes
                  operational.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Fees setShowEnrollModal={setShowEnrollModal}/>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Why CloudDesk for No-Due-Certificate?
              </h2>
              <p className="text-slate-500">
                Getting an NDC is like an audit. CloudDesk ensures your records
                are so clean that the certificate is a formality.
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
                    1. DGFT License NDC (The EODC Link)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before the DGFT issues an{" "}
                    <strong>
                      Export Obligation Discharge Certificate (EODC),
                    </strong>{" "}
                    they often require an internal NDC from their accounts
                    department.
                    <strong>CloudDesk </strong>manages this{" "}
                    <strong>inter-departmental follow-up, </strong>ensuring that
                    any old
                    <strong>
                      {" "}
                      "Composition Fees" or "Interest" from 5 years ago{" "}
                    </strong>
                    are settled so your closure isn't blocked.
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
                    2. Customs Bond & BG Release NDC
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To get your<strong> Bank Guarantee (BG) </strong>back from
                    Customs, the License Cell requires an NDC from the
                    Assessment Group and the Recovery Cell. We perform a
                    <strong> "Liability Sweep," </strong>checking for any
                    <strong> "Stuck" demands or "Show Cause Notices" </strong>
                    linked to your IEC, and resolving them to secure the NDC.
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
                    3. Shipping Line & CFS No Dues
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When importing, the port won't let your truck out without an
                    NDC from the Shipping Line
                    <strong> (confirming freight is paid) </strong>and the CFS
                    (confirming storage/ground rent is paid).
                    <strong>CloudDesk’s </strong>Real-Time Settlement team
                    ensures these payments are cleared and the NDCs are pushed
                    to the Port Gate system instantly.
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
                    4. The "Exit Audit" for IEC Closure
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If you are winding up a business, you need an NDC from both
                    <strong> Customs and GST </strong>departments to cancel your
                    IEC.
                    <strong>CloudDesk manages this "Exit Audit," </strong>
                    ensuring your final returns are filed and all
                    <strong> "Duty-Free" authorizations </strong>are officially
                    surrendered.
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
                  Why do I need an NDC for my EPCG/AA license?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  The NDC proves that you have not only fulfilled the "Export Obligation" but have also paid any administrative fees, late fees, or penalties that might have been levied during the 6-year license tenure.
                </p>
              </details>

              {/* Question 2 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Can I get my Bank Guarantee back without an NDC?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Customs will only "Cancel" the bond and release the BG once the License Cell issues a "Closure Order," which is contingent upon an NDC from the Fine & Penalty (F&P) section.
                </p>
              </details>

              {/* Question 3 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  How long does it take to get a No Due Certificate from Customs?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  If your records are clear, it takes 7–15 working days. If there are pending "Queries" or unpaid "Demands," it can take months. CloudDesk’s Pre-Check identifies these demands before you apply.
                </p>
              </details>

              {/* Question 4 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  What is a "Shipping Line NDC"?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  It is a digital or physical document issued by the carrier (e.g., Maersk, MSC) confirming that ocean freight, local charges, and "Detention" (if any) are paid. Without this, you cannot get the Delivery Order (DO).
                </p>
              </details>

              {/* Question 5 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Does a CFS issue an NDC for every container?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The CFS NDC (or "Pass-out") confirms that handling, scanning, and "Demurrage" (storage) charges are settled. CloudDesk integrates these payments into your dashboard for one-click clearance.
                </p>
              </details>

              {/* Question 6 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  I want to close my IEC. Do I need an NDC?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. You must prove to the DGFT that there are no "Incomplete Export Obligations" linked to your IEC. If you have open licenses, you must either fulfill them or "Regularize" them (pay duty + interest) to get the NDC.
                </p>
              </details>

              {/* Question 7 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  Can a "Show Cause Notice" block my NDC? 
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Absolutely. Even an unproven notice will block your NDC. CloudDesk helps you file an "Ad-hoc Bond" or resolve the notice through the Adjudication process to clear the path for the NDC.
                </p>
              </details>

              {/* Question 8 */}
              <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                  What is an "Internal NDC" in a large company?
                  <ChevronDown
                    size={20}
                    className="text-brand-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  For large corporates, the EXIM department must provide an NDC to the Finance department before an "Export Incentive" is booked as profit. CloudDesk provides the Compliance Report that serves as this internal NDC.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50" aria-labelledby="related-no-due-services">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Related DGFT Closure Support
              </span>
              <h2
                id="related-no-due-services"
                className="text-3xl md:text-4xl font-bold text-slate-900 mt-2"
              >
                Services Often Needed With No Due Certificate
              </h2>
              <p className="text-slate-600 mt-3">
                Connect NDC processing with licence redemption, DEL removal,
                customs adjudication, and export proceeds reconciliation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {[
                {
                  title: "EPCG Scheme Closure",
                  desc: "Export obligation tracking, installation certificate review, and EODC closure support.",
                  href: "/services/epcg-scheme/",
                },
                {
                  title: "Advance Authorisation",
                  desc: "Input consumption reconciliation, SION review, and licence redemption documentation.",
                  href: "/services/advance-authorisation/",
                },
                {
                  title: "Customs Adjudication",
                  desc: "Show cause notice reply, personal hearing preparation, and demand resolution support.",
                  href: "/services/customs-adjudication/",
                },
                {
                  title: "EDPMS and eBRC",
                  desc: "IRM mapping, eBRC reconciliation, and AD bank follow-up for export proceeds.",
                  href: "/services/edpms-ebrc/",
                },
                {
                  title: "CA Certification",
                  desc: "Export turnover and redemption certificate support for DGFT filings.",
                  href: "/services/ca-certification-export-import/",
                },
                {
                  title: "DGFT Services",
                  desc: "Licence applications, amendments, closure filings, and export-import compliance support.",
                  href: "/services/",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
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
            <a href="/" className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

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
                <a href="#scenarios" className="hover:text-white transition">
                  DEL Removal
                </a>
              </li>
              <li>
                <a href="/services/import-export-code/" className="hover:text-white transition">
                  IEC Update
                </a>
              </li>
              <li>
                <a href="/services/epcg-scheme/" className="hover:text-white transition">
                  EODC Redemption
                </a>
              </li>
              <li>
                <a href="/services/customs-adjudication/" className="hover:text-white transition">
                  Legal Adjudication
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  DEL List Check
                </a>
              </li>
              <li>
                <a href="/tools/duty-calculator-finder/" className="hover:text-white transition">
                  Penalty Calculator
                </a>
              </li>
              <li>
                <a href="/foreign-trade-policy/regulatory-updates/" className="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
              <li>
                <a href="/foreign-trade-policy/" className="hover:text-white transition">
                  Amnesty Scheme
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

export default CloudDeskNoDue;
