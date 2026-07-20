import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/CloudDeskBarcode/Navbar";
import Hero from "../components/CloudDeskBarcode/Hero";
import Fees from "../components/CloudDeskBarcode/Fees";
import {
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Store,
  Globe,
  Ban,
  Barcode ,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBarcode/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskBarcode/ModalEnroll";

const CANONICAL_URL = "https://eximinq.in/services/barcode-registration/";
const META_TITLE =
  "Barcode Registration Consultant India | GS1 GTIN EAN UPC Barcodes | EXIMINQ";
const META_DESCRIPTION =
  "Barcode registration consultant in India for GS1 India registration, GTIN, EAN-13, UPC, DataKart setup, SKU planning, barcode generation, retail listing, and export product identification.";
const OG_IMAGE_URL = "https://eximinq.in/logo512.png";
const FAQ_ITEMS = [
  {
    question: "What is GS1 barcode registration?",
    answer:
      "GS1 barcode registration gives your company globally unique product identification numbers such as GTINs, which are used for retail, ecommerce, inventory, and export supply chains.",
  },
  {
    question: "Do I need a barcode to sell on Amazon or Flipkart?",
    answer:
      "Most marketplaces and modern retailers require valid GTIN, EAN, or UPC identifiers for product listing, billing, inventory tracking, and catalog verification.",
  },
  {
    question: "What documents are needed for barcode registration in India?",
    answer:
      "Common documents include company registration details, PAN, GST certificate, address proof, turnover details, product or SKU information, and authorized signatory details.",
  },
  {
    question: "How many barcodes should I apply for?",
    answer:
      "The required barcode package depends on the number of SKUs, product variants, sizes, flavors, colors, bundles, and future product expansion plans.",
  },
  {
    question: "Can barcode details be used for exports?",
    answer:
      "Yes. GS1 GTINs are globally recognized and help international buyers, retailers, and logistics partners identify products across supply chains.",
  },
];

const CloudDeskBarcode = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
    // source: "services/barcode-registration",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

      // TODO → send API call
      // axios.post("/api/enroll", formData)

    alert("Form submitted - check console for data.")
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eximinq.in/#organization",
        name: "EXIMINQ Global Connections",
        url: "https://eximinq.in/",
        logo: "https://eximinq.in/logo512.png",
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: META_TITLE,
        description: META_DESCRIPTION,
        isPartOf: { "@id": "https://eximinq.in/#website" },
        about: { "@id": `${CANONICAL_URL}#service` },
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
            name: "Barcode Registration",
            item: CANONICAL_URL,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CANONICAL_URL}#service`,
        name: "Barcode Registration Consultant",
        url: CANONICAL_URL,
        image: OG_IMAGE_URL,
        description: META_DESCRIPTION,
        provider: { "@id": "https://eximinq.in/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: [
          "GS1 barcode registration",
          "GTIN registration",
          "EAN-13 barcode generation",
          "UPC barcode support",
          "DataKart product setup",
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
  
  return (
    <div className="bg-slate-50 text-slate-800">
      <Helmet defer={false}>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
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
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why GS1 Barcodes?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    <strong>GS1 (Global Standards 1)</strong> is the only authorized body globally to issue unique identification numbers. In India, <strong>GS1 India</strong> manages this.
                </p>
                
                <p className="mb-4">
                    The barcode you see on products is a visual representation of a <strong>GTIN (Global Trade Item Number)</strong>. Most retail products use a 13-digit number called <strong>EAN-13</strong>. This number is unique to your product variant (SKU) worldwide. Without this, major marketplaces like Amazon or Reliance Retail will not list your product.
                </p>
            </div>
        </div>
    </section>


    <section id="coverage" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Unlock Market Access
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* E-Commerce */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-orange-500 hover:shadow-xl transition text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:scale-110 transition">
              <ShoppingCart size={32} strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Online Selling
            </h3>
            <p className="text-sm text-slate-600">
              Mandatory for listing on Amazon, Flipkart, Google Shopping,
              and BigBasket. It acts as the unique Product ID.
            </p>
          </div>

          {/* Retail */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition">
              <Store size={32} strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Modern Trade
            </h3>
            <p className="text-sm text-slate-600">
              Supermarkets like Reliance, DMart, and Spencer&apos;s require
              barcodes for automated billing and inventory tracking.
            </p>
          </div>

          {/* Export */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 transition">
              <Globe size={32} strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Global Export
            </h3>
            <p className="text-sm text-slate-600">
              International buyers demand GTINs to ensure supply chain
              visibility and traceability across borders.
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 bg-red-50 border border-red-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-red-900 text-lg mb-2 flex items-center justify-center gap-2">
            <Ban size={20} />
            Avoid Cheap Resellers
          </h4>
          <p className="text-sm text-red-800">
            Do not buy cheap barcodes from third-party resellers. They are
            often recycled or fake, leading to delisting from Amazon.
            Always register directly with GS1 India.
          </p>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
            Registration Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            How to Get Barcodes
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-scan-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Apply</h3>
            <p className="text-sm text-slate-400">
              Submit application with PAN, GST, and Balance Sheet.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-scan-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Payment</h3>
            <p className="text-sm text-slate-400">
              Pay Registration Fee + Security Deposit to GS1 India.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-scan-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Allocation</h3>
            <p className="text-sm text-slate-400">
              GS1 allocates a specific number series (GCP) to your company.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Barcode size={30} strokeWidth={2.2} />
            </div>
            <h3 className="text-lg font-bold mb-2">Generate</h3>
            <p className="text-sm text-slate-400">
              Login to DataKart portal, add product details, and generate
              barcode images.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees setShowEnrollModal={setShowEnrollModal} />

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
              <a href="https://www.linkedin.com/company/eximinq/" aria-label="EXIMINQ on LinkedIn" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/eximinq" aria-label="EXIMINQ on X" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/eximinq" aria-label="EXIMINQ on Facebook" className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="/services/barcode-registration/" className="hover:text-white transition">Barcode Registration</a></li>
                    <li><a href="/services/trademark-registration" className="hover:text-white transition">Trademark Registration</a></li>
                    <li><a href="/services/fssai-licensing" className="hover:text-white transition">Brand & Food Compliance</a></li>
                    <li><a href="/services/fssai-licensing" className="hover:text-white transition">FSSAI License</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="/services/barcode-registration/#fees" className="hover:text-white transition">GS1 Fee Structure</a></li>
                    <li><a href="/services/barcode-registration/#process" className="hover:text-white transition">DataKart Guide</a></li>
                    <li><a href="/services/barcode-registration/#about" className="hover:text-white transition">GTIN Verification</a></li>
                    <li><a href="/services/barcode-registration/#coverage" className="hover:text-white transition">Barcode Types (EAN/UPC)</a></li>
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
  );
};

export default CloudDeskBarcode;
