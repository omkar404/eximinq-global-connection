import TopBar from "../components/CloudDeskDutyDrawBack/TopBar";
import Navbar from "../components/CloudDeskDutyDrawBack/Navbar";
import Hero from "../components/CloudDeskDutyDrawBack/Hero";
import Fees from "../components/CloudDeskDutyDrawBack/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  FileSignature,
  SearchCheck,
  Table,
  Scroll,
  FileSearch,
  CheckCircle,
  FileSpreadsheet,
  Receipt,
  FileOutput,
  PackageOpen,
  Wrench,
  Coins,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDutyDrawBack/MainNavbar";

const CloudDeskDutyDrawBack = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FileSearch className="w-10 h-10 text-accent-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Duty Drawback?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Content */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Duty Drawback (DBK)</strong> is a refund of Customs Duty
              and Central Excise Duty paid on raw materials, components, and
              packaging materials used in the manufacture of export goods. It
              ensures that Indian exports remain competitive by nullifying the
              cascading effect of taxes.
            </p>

            <p className="mb-4">
              There are two main types for exporters:
              <br />
              1. <strong>All Industry Rate (AIR):</strong> A standard fixed
              percentage notified by the government for common products.
              <br />
              2. <strong>Brand Rate:</strong> A special rate fixed for a
              specific exporter when the AIR is low (less than 80% of actual
              duty paid) or does not exist for the product.
            </p>
          </div>
        </div>
      </section>

      <section id="brand-rate" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Rule 6 & 7
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Brand Rate Fixation
              </h2>

              <p className="text-slate-600 mb-6">
                Is your actual duty incidence higher than the standard All
                Industry Rate? Don't settle for less. We help you apply for a{" "}
                <em>Brand Rate</em> to recover the actual duty paid on your
                inputs.
              </p>

              {/* WHEN TO APPLY BOX */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-500 mb-4">
                <h4 className="font-bold text-brand-900 mb-2">
                  When to Apply?
                </h4>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2 mt-1" />
                    When AIR is "Nil" for your product.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2 mt-1" />
                    When AIR covers less than 80% of duties paid.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2 mt-1" />
                    For highly specialized, non-standard goods.
                  </li>
                </ul>
              </div>

              <a
                href="#home"
                className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded hover:bg-brand-700 transition"
              >
                Apply for Brand Rate
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Documents for Brand Rate
              </h3>

              <ul className="space-y-4 text-sm text-slate-600">
                {/* Item 1 */}
                <li className="flex gap-3">
                  <FileSpreadsheet className="text-brand-500 w-5 h-5 mt-1" />
                  <div>
                    <strong className="block text-slate-800">
                      Data Sheet (DBK-I / II / III)
                    </strong>
                    <span>
                      Detailed consumption & wastage data certified by Chartered
                      Engineer.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex gap-3">
                  <Receipt className="text-brand-500 w-5 h-5 mt-1" />
                  <div>
                    <strong className="block text-slate-800">
                      Original Import Bills
                    </strong>
                    <span>
                      Bills of Entry showing duty payment for raw materials.
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex gap-3">
                  <FileOutput className="text-brand-500 w-5 h-5 mt-1" />
                  <div>
                    <strong className="block text-slate-800">
                      Export Proofs
                    </strong>
                    <span>
                      Shipping Bills (EP Copy) and Bank Realization Certificates
                      (e-BRC).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="section74" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Re-Export Refund
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Section 74 Drawback
            </h2>

            <p className="text-slate-300 mt-2">
              Refund of duty paid on imported goods which are re-exported "as
              such".
            </p>
          </div>

          {/* TWO CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CASE 1 */}
            <div className="bg-brand-800 rounded-xl p-8 border border-brand-700 hover:border-accent-500 transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">98% Refund</h3>
                <PackageOpen className="text-accent-400 w-10 h-10" />
              </div>

              <p className="text-slate-300 text-sm mb-6">
                Applicable when goods are re-exported without being used. E.g.,
                Wrong shipment received, or quality rejection before use.
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 w-4 h-4 mr-2 mt-0.5" />
                  Goods identified easily by serial no.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 w-4 h-4 mr-2 mt-0.5" />
                  Re-export within 2 years of import payment.
                </li>
              </ul>
            </div>

            {/* CASE 2 */}
            <div className="bg-brand-800 rounded-xl p-8 border border-brand-700 hover:border-accent-500 transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  Reduced Refund
                </h3>
                <Wrench className="text-accent-400 w-10 h-10" />
              </div>

              <p className="text-slate-300 text-sm mb-6">
                Applicable when goods have been used after import before
                re-export. The refund percentage drops based on the duration of
                use.
              </p>

              <div className="bg-brand-900 p-3 rounded text-xs">
                <div className="flex justify-between mb-1">
                  <span>0–3 Months Use:</span>
                  <span>95% Refund</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span>3–6 Months Use:</span>
                  <span>85% Refund</span>
                </div>

                <div className="flex justify-between">
                  <span>6–12 Months Use:</span>
                  <span>70% Refund</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Execution
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Claim Process
            </h2>
          </div>

          {/* 4 STEPS */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-slate-500">
                File application with Principal Commissioner of Customs
                (Drawback Cell) within 3 months of export.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Verification</h3>
              <p className="text-sm text-slate-500">
                Customs verifies input consumption, wastage norms, and original
                duty payment proofs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Letter</h3>
              <p className="text-sm text-slate-500">
                Issuance of Brand Rate Letter specifying the eligible drawback
                amount per unit.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-2xl font-bold text-white mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <Coins className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">Disbursal</h3>
              <p className="text-sm text-slate-500">
                Amount credited directly to the exporter's bank account linked
                with ICEGATE.
              </p>
            </div>
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
              EXIMINQ Cloud Desk: Your trusted partner for DGFT, Customs, and
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
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Drawback
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IGST Refund
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  MOOWR Scheme
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
                  Drawback Schedule
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Rule 6 Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Section 74 Rules
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Depreciation Chart
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
  );
};

export default CloudDeskDutyDrawBack;
