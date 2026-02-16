// import TopBar from "../components/CloudDeskMarine/TopBar";
import { useState } from "react";
import Navbar from "../components/CloudDeskMarine/Navbar";
import Hero from "../components/CloudDeskMarine/Hero";
import Fees from "../components/CloudDeskMarine/Fees";
import { ModalEnroll } from "../components/CloudDeskMarine/ModalEnroll";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
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
import { MainNavbar } from "../components/CloudDeskMarine/MainNavbar";

const CloudDeskMarine = () => {
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
              What is EPCG Scheme?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Export Promotion Capital Goods (EPCG) Scheme</strong>
              facilitates the import of capital goods at{" "}
              <strong>Zero Customs Duty</strong>.
            </p>
            <p className="mb-4">
              Exporters must fulfill an <strong>Export Obligation (EO)</strong>{" "}
              equal to 6× the duty saved within 6 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Factory className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Any Sector</h3>
              <p className="text-sm text-slate-500">
                Manufacturer & Merchant Exporters both eligible.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Cog className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">All Machinery</h3>
              <p className="text-sm text-slate-500">
                Covers capital goods, spares, moulds, dies, fixtures & tools.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <HandCoins className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Service Providers</h3>
              <p className="text-sm text-slate-500">
                Hotels, hospitals & logistics earning foreign exchange also
                eligible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              What Can You Import?
            </h2>
            <p className="text-slate-500 mt-2">
              Comprehensive coverage across the production lifecycle.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pre-Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-xl transition">
              <Factory className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pre-Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Goods required before the actual manufacturing starts.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "Diesel Generator (DG) Sets",
                  "Transformers",
                  "Effluent Treatment Plants",
                  "Storage Racks",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition">
              <Cog className="w-12 h-12 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Core machinery required for manufacturing the export product.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "CNC Machines / Lathes",
                  "Processing Plants",
                  "Textile Looms",
                  "Injection Moulding Machines",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition">
              <PackageCheck className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Post-Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Equipment required for finishing, packing, and testing.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "Packaging Machinery",
                  "Testing Equipment / Labs",
                  "Quality Control Tools",
                  "Barcode Printers",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="obligation" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
                The Commitment
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding Export Obligation
              </h2>

              <p className="text-slate-300 mb-6 leading-relaxed">
                To enjoy Zero Duty benefits, you must fulfill an Export
                Obligation (EO). Failure to do so results in repayment of saved
                duty plus high interest.
              </p>

              {/* Total Obligation Box */}
              <div className="bg-brand-800 p-6 rounded-lg border border-brand-700 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-accent-400" />
                    Total Obligation
                  </span>

                  <span className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent-400" />6 × Duty
                    Saved
                  </span>
                </div>

                <div className="w-full bg-brand-900 rounded-full h-2 mb-4">
                  <div
                    className="bg-accent-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>

                <p className="text-xs text-slate-400">
                  Must be fulfilled in Foreign Currency (Free Foreign Exchange).
                </p>
              </div>

              {/* Time Period Box */}
              <div className="bg-brand-800 p-6 rounded-lg border border-brand-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-400" />
                    Time Period
                  </span>

                  <span className="text-xl font-bold text-white">6 Years</span>
                </div>

                <ul className="text-xs text-slate-400 space-y-1 mt-2">
                  <li>• Block 1 (1st – 4th Year): Minimum 50% EO</li>
                  <li>• Block 2 (5th – 6th Year): Remaining Balance</li>
                </ul>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative">
                <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                  Domestic Sourcing Benefit
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  If you procure capital goods from domestic manufacturers
                  instead of importing, the EO reduces by 25%.
                </p>

                <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-100">
                  <div>
                    <span className="block text-xs font-bold text-green-800">
                      Reduced EO
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      4.5 × Duty Saved
                    </span>
                  </div>

                  <ArrowDownCircle className="text-green-500 w-8 h-8" />
                </div>

                <p className="text-xs text-slate-500 mt-4">
                  *Supports the “Make in India” initiative.
                </p>
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
              Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              License Lifecycle
            </h2>
          </div>

          {/* STEPS */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <FileCheck className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-500">
                File ANF 5A on DGFT portal. Submit Nexus Certificate if
                required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <Stamp className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Register license at Customs Port. Execute Bond/BG.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <PackageCheck className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Import</h3>
              <p className="text-sm text-slate-500">
                Clear goods at 0% Duty. Install machinery at factory within 6
                months.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <PlaneTakeoff className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Export</h3>
              <p className="text-sm text-slate-500">
                Start production and export goods. Mention EPCG License on
                Shipping Bills.
              </p>
            </div>

            {/* Step 5 - Final */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <CheckCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Redemption</h3>
              <p className="text-sm text-slate-500">
                Submit Installation Certificate and Export Proofs to get EODC.
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
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Status Holder Certificate
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
                  Chartered Engineer List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Average Export Performance
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP 2023 Guidelines
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

export default CloudDeskMarine;
