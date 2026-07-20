import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../components/CloudDeskDutyPayment/Navbar";
import Hero from "../components/CloudDeskDutyPayment/Hero";
import Fees from "../components/CloudDeskDutyPayment/Fees";
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
  Check,
  FileText,
  CheckCircle,
  Calculator,
  Wallet,
  Info,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDutyPayment/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskDutyPayment/ModalEnroll";
import logo from "../assets/images/logo.png";

const CANONICAL_URL = "https://eximinq.in/services/duty-payment-ecl/";
const META_TITLE =
  "Duty Payment ECL Consultant India | ICEGATE Challan & Customs Duty Support | EXIMINQ";
const META_DESCRIPTION =
  "Duty Payment ECL consultant in India for ICEGATE challan generation, Electronic Cash Ledger top-up, customs duty payment, interest calculation, wallet reconciliation and refund tracking.";
const OG_IMAGE_URL = `https://eximinq.in${logo}`;
const FAQ_ITEMS = [
  {
    question: "Can I get a refund of the balance in my ECL?",
    answer:
      "Yes, any unutilized balance in the Electronic Cash Ledger can be refunded to your registered bank account by filing a refund application on the ICEGATE portal.",
  },
  {
    question: "Does ECL work on weekends and holidays?",
    answer:
      "The ICEGATE portal is available 24/7. However, NEFT and RTGS transfers depend on banking hours. Netbanking top-ups are usually faster for supported banks.",
  },
  {
    question: "Can I pay duty for multiple Bills of Entry at once?",
    answer:
      "Yes. You can top up a lump sum amount and select multiple pending challans for payment from the ECL wallet when sufficient balance is available.",
  },
  {
    question: "What is the Electronic Cash Ledger?",
    answer:
      "The Electronic Cash Ledger is a digital account on ICEGATE where importers deposit money in advance to pay customs duties, taxes, interest and fees.",
  },
];
const DUTY_PAYMENT_SCHEMA = {
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
          name: "Duty Payment ECL",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${CANONICAL_URL}#service`,
      name: "Duty Payment ECL Consultant India",
      url: CANONICAL_URL,
      description: META_DESCRIPTION,
      provider: {
        "@id": "https://eximinq.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "ICEGATE ECL top-up",
        "Customs duty challan generation",
        "Bill of Entry duty payment",
        "ECL reconciliation",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const CloudDeskDutyPayment = () => {
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

<Helmet defer={false}>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">
          {JSON.stringify(DUTY_PAYMENT_SCHEMA)}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Electronic Cash Ledger (ECL)?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Electronic Cash Ledger (ECL)</strong> is a virtual
              wallet maintained on the ICEGATE portal. It was introduced to
              facilitate the payment of Customs Duty, Interest, Penalty, and
              other fees in a simplified manner.
            </p>
            <p className="mb-4">
              Instead of paying individual challans directly via bank (which
              often faced gateway failures), importers now "Top-Up" their ECL
              wallet using NEFT/RTGS. Once funds are in the wallet, they can be
              utilized to pay multiple Bill of Entry challans instantly with a
              single click.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Payment Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Comprehensive Duty Services
            </h2>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Duty Calculation
              </h3>
              <p className="text-sm text-slate-600">
                Accurate calculation of Basic Customs Duty (BCD), Social Welfare
                Surcharge (SWS), and IGST based on the latest notifications and
                FTA benefits.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wallet size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ECL Wallet Management
              </h3>
              <p className="text-sm text-slate-600">
                We generate the Mandate Form for NEFT/RTGS, guide you on topping
                up the wallet, and track the credit reflection in the ICEGATE
                portal.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <FileText size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Interest Payment
              </h3>
              <p className="text-sm text-slate-600">
                If duty is not paid within the specified time (usually same day
                or next day of assessment), interest accrues. We help calculate
                and pay this interest to release cargo.
              </p>
            </div>
          </div>

          {/* IMPORTANT RULE BOX */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-blue-800 text-lg mb-2 flex justify-center items-center gap-2">
              <Info className="text-blue-600" size={20} />
              Important Rule
            </h4>
            <p className="text-sm text-blue-700">
              Customs Duty must be paid within <strong>24 hours</strong> of the
              Bill of Entry being returned to the importer for payment. Delay
              attracts interest @<strong> 15% p.a.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              How to Pay
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              ECL Payment Workflow
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Generate Mandate</h3>
              <p className="text-sm text-slate-300">
                Create a NEFT/RTGS mandate form on ICEGATE for the required
                amount.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Transfer</h3>
              <p className="text-sm text-slate-300">
                Transfer funds from your bank to the beneficiary (RBI/Customs)
                using the mandate details.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Wallet Credit</h3>
              <p className="text-sm text-slate-300">
                Funds reflect in your ECL wallet usually within 1–2 hours.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 border-4 border-white"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Pay Challan</h3>
              <p className="text-sm text-slate-300">
                Select the specific Bill of Entry challan and authorize payment
                from the wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees setShowEnrollModal={setShowEnrollModal}/>
                  
        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Detuty-Payment-Ecl?</h2>
                    <p className="text-slate-500">
                    Money stuck in a digital wallet is money not working for your business. CloudDesk ensures your ECL is optimized for speed, not just storage.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. "Instant-Clearance" Wallet Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Traditional bank transfers <strong>(NEFT/RTGS) </strong>to ICEGATE can take hours to reflect. 
                          <strong>CloudDesk’s ECL Bridge</strong> monitors your ledger balance in real-time. 
                          <strong>We ensure your </strong>wallet is topped up before your Bill of Entry hits the <strong>"Payment" stage, allowing </strong>for one-click instant duty payment and immediate <strong>"Out of Charge" (OOC).</strong>
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2.Challan-to-Ledger Auto-Mapping</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The biggest headache in 2026 is <strong>mapping specific Bill </strong>of Entry (BoE) numbers to your ECL balance. 
                          <strong>CloudDesk Automates the Mapping.</strong> Our system identifies which BoE is pending, calculates the<strong> exact duty + interest,</strong> and executes the transfer from your ECL to the Customs department with zero manual entry.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Interest & Penalty Prevention</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Customs interest starts ticking the moment a BoE is assessed. <strong>CloudDesk’s Interest-Timer </strong>calculates the potential cost of delay and sends a <strong>"High-Priority" </strong>alert to your finance team to authorize the ECL payment before the midnight interest deadline.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Balance Liquidity & Refund Tracking</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Exporters often have <strong>"dead money"</strong> sitting in their ECL after a transaction.<strong> CloudDesk </strong>provides a One-Touch Refund Utility. 
                          If you have an excess balance, we handle the digital application to refund that money back to your primary bank account, keeping your working capital liquid.
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
            Common Payment Queries
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I get a refund of the balance in my ECL?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, any unutilized balance in the Electronic Cash Ledger can be
                refunded to your registered bank account by filing a refund
                application on the ICEGATE portal.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does ECL work on weekends/holidays?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The ICEGATE portal is available 24/7. However, NEFT/RTGS
                transfers depend on banking hours. If you use Netbanking
                (available for select banks), the top-up is usually instant even
                on holidays.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I pay duty for multiple Bills of Entry at once?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, this is the main advantage of ECL. You can top up a lump
                sum amount and then select multiple challans to pay them
                simultaneously from the wallet balance.
              </p>
            </details>

              {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the Electronic Cash Ledger (ECL)?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The ECL is a digital account on the ICEGATE portal where importers can deposit money in advance. This money can then be used to pay Customs duties, taxes, and fees for any number of shipments.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is it mandatory to use ECL for all duty payments?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. As of 2026, all major EDI ports require payments to be routed through the ECL. Direct bank-to-challan payments are being phased out in favor of this "Wallet" system to ensure transparency and faster reconciliation.
              </p>
            </details>

              {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I use the balance in my GST Electronic Cash Ledger to pay Customs duty?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. The GST Ledger (GSTN) and Customs Ledger (ICEGATE) are separate systems. You must deposit money specifically into the Customs ECL to clear your imports.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               How do I "Top Up" my ECL?

                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You can deposit funds via Internet Banking, NEFT, or RTGS by generating an E-Challan on the ICEGATE portal. CloudDesk generates these top-up challans for you based on your upcoming shipment projections.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What happens if I pay more than the required duty?

                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The excess money stays in your ECL "Wallet." You can either use it for your next shipment or apply for a Digital Refund through the portal.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Can I pay duty for multiple Bills of Entry at once?

                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The ECL allows you to select multiple pending challans and pay them in a single batch, provided you have a sufficient balance in your ledger.
              </p>
            </details>

          {/* FAQ 10 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               My bank debited the money, but the ECL balance isn't showing. What now?

                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This is a common "Bank-to-Portal Sync" error. CloudDesk’s Transaction Recovery Tool pings the ICEGATE API to force-refresh your status. We also provide the "Transaction Reference Number" (TRN) required to raise a ticket with the helpdesk.
              </p>
            </details>

          {/* FAQ 11 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Does money in the ECL earn interest?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Money kept in the Customs ECL does not earn any interest. It is strictly a non-interest-bearing deposit for duty payment purposes.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Related Customs Services
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Keep Your Import Clearance Moving
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bill of Entry Filing",
                href: "/services/bill-of-entry-filing/",
                copy: "Prepare import declarations, HS code details and duty payment records.",
              },
              {
                title: "ICEGATE Registration",
                href: "/services/icegate-registration/",
                copy: "Set up portal access, digital signing and customs user credentials.",
              },
              {
                title: "CHA Services",
                href: "/services/cha-services/",
                copy: "Coordinate broker support for customs queries, duty payment and OOC.",
              },
              {
                title: "e-Sanchit Filing",
                href: "/services/e-sanchit-filing/",
                copy: "Upload supporting documents and link IRNs to import declarations.",
              },
              {
                title: "IGST Refund",
                href: "/services/igst-refund/",
                copy: "Resolve export refund mismatches, scroll delays and ICEGATE issues.",
              },
              {
                title: "Shipping Bill Filing",
                href: "/services/shipping-bill-filing/",
                copy: "File export declarations with scheme, incentive and compliance checks.",
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
                <a href="#home" className="hover:text-white transition">
                  Duty Payment
                </a>
              </li>
              <li>
                <a href="/services/bill-of-entry-filing/" className="hover:text-white transition">
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="/services/igst-refund/" className="hover:text-white transition">
                  IGST Refund
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition">
                  Interest Calculation
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/e-sanchit-filing/" className="hover:text-white transition">
                  ECL User Manual
                </a>
              </li>
              <li>
                <a href="/foreign-trade-policy/customsrates/" className="hover:text-white transition">
                  Exchange Rates
                </a>
              </li>
              <li>
                <a href="/tools/duty-calculator-finder" className="hover:text-white transition">
                  Duty Calculator
                </a>
              </li>
              <li>
                <a href="/services/ad-code-registration/" className="hover:text-white transition">
                  Banking Partners
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

export default CloudDeskDutyPayment;
