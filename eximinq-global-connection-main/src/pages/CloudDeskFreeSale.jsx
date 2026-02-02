import { useState } from "react";
// import TopBar from "../components/CloudDeskFreeSale/TopBar";
import Navbar from "../components/CloudDeskFreeSale/Navbar";
import Hero from "../components/CloudDeskFreeSale/Hero";
import Fees from "../components/CloudDeskFreeSale/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Handshake,
  Pill,
  FlaskConical,
  Package,
  Info,
    FileText,
  ListChecks,
  Factory,
  Receipt,
  FileCheck
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFreeSale/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFreeSale/ModalEnroll";

const CloudDeskFreeSale = () => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is a Free Sale Certificate?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    A <strong>Free Sale Certificate (FSC)</strong>, also known as a Certificate of Free Sale (CFS), is a document issued by a national regulatory authority. It certifies that the product listed is manufactured in accordance with local laws, is freely sold in the domestic market of the exporting country (India), and is safe for human use.
                </p>
                
                <p className="mb-4">
                    Importing countries require this document to register the product with their own Health Ministry or Drug Controller before allowing import. It acts as a primary proof of quality and regulatory standing.
                </p>
            </div>
        </div>
    </section>


<section id="authorities" className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-cert-600 font-bold uppercase tracking-wider text-sm">
        Jurisdiction
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        Who Issues Your Certificate?
      </h2>
      <p className="text-slate-500 mt-2">
        The authority depends on the nature of your product.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CDSCO */}
      <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition group">
        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4
                        group-hover:bg-blue-600 transition">
          <Pill className="w-7 h-7 text-blue-600 group-hover:text-white" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">
          CDSCO (Central)
        </h3>
        <p className="text-sm text-slate-600">
          <strong>For Medical Devices & New Drugs:</strong> Issued by the Central
          Licensing Authority via the SUGAM portal for Class C & D devices and
          new drug molecules.
        </p>
      </div>

      {/* State FDA */}
      <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition group">
        <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4
                        group-hover:bg-green-600 transition">
          <FlaskConical className="w-7 h-7 text-green-600 group-hover:text-white" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">
          State Licensing Authority
        </h3>
        <p className="text-sm text-slate-600">
          <strong>For Generic Drugs & Cosmetics:</strong> Issued by the State FDA
          where the manufacturing unit is located. Required for Class A & B
          medical devices as well.
        </p>
      </div>

      {/* DGFT */}
      <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-orange-500 hover:shadow-xl transition group">
        <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4
                        group-hover:bg-orange-600 transition">
          <Package className="w-7 h-7 text-orange-600 group-hover:text-white" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">
          DGFT (Regional)
        </h3>
        <p className="text-sm text-slate-600">
          <strong>For General Goods:</strong> Issued for items <em>not</em> covered
          under the Drugs & Cosmetics Act (Engineering goods, consumer products,
          etc.).
        </p>
      </div>

    </div>

    {/* Ayush Note */}
    <div className="mt-12 bg-purple-50 border border-purple-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
      <h4 className="font-bold text-purple-800 text-lg mb-2 flex items-center justify-center gap-2">
        <Info className="w-5 h-5" />
        Note on Ayush
      </h4>
      <p className="text-sm text-purple-700">
        For Herbal, Ayurvedic, and Unani products, the FSC is issued by the
        Ministry of AYUSH or the respective State AYUSH Department.
      </p>
    </div>

  </div>
</section>

<section id="documents" className="py-20 bg-brand-900 text-white">
  <div className="container mx-auto px-4">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Required Documentation
        </h2>

        <p className="text-slate-300 mb-8 leading-relaxed">
          To obtain an FSC, you must prove that you hold a valid license to
          manufacture and sell the product in India.
        </p>

        <ul className="space-y-4">

          {/* Manufacturing License */}
          <li className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-accent-400 mt-1" />
            <div>
              <strong className="block text-white">
                Manufacturing License
              </strong>
              <span className="text-sm text-slate-400">
                Valid license copy (Form 25/28) listing the products.
              </span>
            </div>
          </li>

          {/* Product List */}
          <li className="flex items-start gap-3">
            <ListChecks className="w-6 h-6 text-accent-400 mt-1" />
            <div>
              <strong className="block text-white">
                Product List
              </strong>
              <span className="text-sm text-slate-400">
                List of products for which FSC is required, matching the license.
              </span>
            </div>
          </li>

          {/* GMP */}
          <li className="flex items-start gap-3">
            <Factory className="w-6 h-6 text-accent-400 mt-1" />
            <div>
              <strong className="block text-white">
                GMP Certificate
              </strong>
              <span className="text-sm text-slate-400">
                Good Manufacturing Practice certificate (often mandatory).
              </span>
            </div>
          </li>

          {/* Market Standing */}
          <li className="flex items-start gap-3">
            <Receipt className="w-6 h-6 text-accent-400 mt-1" />
            <div>
              <strong className="block text-white">
                Market Standing
              </strong>
              <span className="text-sm text-slate-400">
                Proof of domestic sales (Invoices) to show “Free Sale”.
              </span>
            </div>
          </li>

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">

        <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
          Attestation Services
        </h3>

        <p className="text-sm text-slate-600 mb-6">
          An FSC issued in India is often not valid abroad until it is legalized.
          We handle the full chain:
        </p>

        <div className="space-y-2">

          {[
            "Notary Public",
            "Home Department / SDM",
            "MEA Apostille",
            "Embassy Legalization",
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
            Request Legalization
          </a>
        </div>

      </div>

    </div>
  </div>
</section>


<section id="process" className="py-20 bg-white">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
        Workflow
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        How to Obtain FSC
      </h2>
    </div>

    {/* Steps */}
    <div className="relative grid md:grid-cols-4 gap-8 step-connector">

      {/* Step 1 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                        text-2xl font-bold text-brand-900 mx-auto mb-4 
                        border-4 border-cert-200 shadow-sm">
          1
        </div>
        <h3 className="text-lg font-bold mb-2">Prepare</h3>
        <p className="text-sm text-slate-500">
          Collate Manufacturing License, Product List, and applicable fees.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                        text-2xl font-bold text-brand-900 mx-auto mb-4 
                        border-4 border-cert-200 shadow-sm">
          2
        </div>
        <h3 className="text-lg font-bold mb-2">Apply</h3>
        <p className="text-sm text-slate-500">
          File online on SUGAM (CDSCO) or submit to the respective State Authority.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                        text-2xl font-bold text-brand-900 mx-auto mb-4 
                        border-4 border-cert-200 shadow-sm">
          3
        </div>
        <h3 className="text-lg font-bold mb-2">Scrutiny</h3>
        <p className="text-sm text-slate-500">
          Drug Inspector verifies license validity and product approval status.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                        text-white mx-auto mb-4 border-4 border-white shadow-sm">
          <Check className="w-8 h-8 stroke-[3]" />
        </div>
        <h3 className="text-lg font-bold mb-2">Grant</h3>
        <p className="text-sm text-slate-500">
          FSC issued. Validity usually aligns with the Manufacturing License.
        </p>
      </div>

    </div>
  </div>
</section>

<Fees/>


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
                              <li><a href="#" class="hover:text-white transition">CDSCO Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Free Sale Certificate</a></li>
                    <li><a href="#" class="hover:text-white transition">Apostille Services</a></li>
                    <li><a href="#" class="hover:text-white transition">Embassy Legalization</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Medical Device Rules</a></li>
                    <li><a href="#" class="hover:text-white transition">State FDA List</a></li>
                    <li><a href="#" class="hover:text-white transition">DGFT Notifications</a></li>
                    <li><a href="#" class="hover:text-white transition">MEA Guidelines</a></li>
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

export default CloudDeskFreeSale;