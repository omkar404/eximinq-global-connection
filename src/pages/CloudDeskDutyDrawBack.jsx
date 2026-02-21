import TopBar from "../components/CloudDeskDutyDrawBack/TopBar";
import Navbar from "../components/CloudDeskDutyDrawBack/Navbar";
import Hero from "../components/CloudDeskDutyDrawBack/Hero";
import Fees from "../components/CloudDeskDutyDrawBack/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
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
      {/* <TopBar /> */}
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


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Duty-Drawback?</h2>
                    <p className="text-slate-500">
                      Standard drawbacks are easy. Specialized drawbacks are a battle. CloudDesk is your 'Special Ops' for stuck funds.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. Section 74: The 98% Refund Strategy</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         If you imported<strong> goods, paid duty, </strong>and are now re-exporting them<strong> (because they were defective or the order was cancelled), </strong>you are entitled to a 98% refund of the original duty under Section 74. 
                         <strong>CloudDesk </strong>manages the<strong> "Identity Correlation"—proving </strong>to Customs that the goods going out are the exact same ones that came in.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Brand Rate Fixation (Section 75)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          If the<strong> "All Industry Rate" (AIR) </strong>for your product is 1%, but your actual <strong>duty paid on raw materials is 5%,</strong> you are losing money. <strong>CloudDesk </strong>handles Brand Rate Fixation. 
                          We file the <strong>application within 90 days </strong>of export, providing the<strong> cost-data </strong>and consumption sheets to secure a customized,<strong> higher drawback rate </strong>for your specific brand.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. The "Stuck Drawback" Rescue</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          "Is your drawback showing as<strong>""Pending at EGM"" or ""Query Raised""?</strong> 
                          <strong> CloudDesk’s Drawback </strong>Recovery Unit performs a <strong>""Status Audit."" </strong>We find the specific officer holding the file and resolve queries like:
                           o Non-receipt of <strong>BRC/e-BRC.</strong>
                           o Weight/Value Mismatch.
                           o <strong>EGM (Export General Manifest) </strong>errors."

                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Identity Verification for Re-exports</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The #1 reason Section<strong> 74 claims </strong>fail is<strong> "Lack of Identification." </strong>
                          <strong>CloudDesk </strong>ensures that at the time of import, the goods are<strong> "examined for re-export," </strong>and 
                          we manage the Customs Supervision during the re-export stuffing to ensure your 98% refund is undisputed.
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
                What is Section 74 Duty Drawback?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is a refund of 98% of the import duty paid if the goods are re-exported. The goods must be identifiable and exported within 2 years of payment of duty (extensions are possible but difficult).
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I get a refund if I used the goods in India?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes, but the rate drops. If the goods were "used" before being re-exported, the 98% refund is reduced based on a sliding scale (e.g., if used for 3–6 months, you might only get 75% back).
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What if I re-export only a part of the shipment?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You can claim a "Pro-rata" drawback. CloudDesk helps you map the specific serial numbers or batch numbers from the original Bill of Entry to the new Shipping Bill.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               When should I apply for a Brand Rate?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Apply if the All Industry Rate (AIR) is less than 80% of the actual duty you paid on inputs. It's essentially a request for a "Fair Refund" based on your actual costs.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              How long does it take to fix a Brand Rate?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              It usually takes 3 to 6 months as it involves verification by the Central Excise/Customs Commissioner. However, you can claim the "Provisional Drawback" in the meantime.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Why is my drawback stuck at "Scroll Generation"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               This usually means the system is waiting for the Bank Account Validation or the EGM to be filed by the shipping line. CloudDesk triggers a "Scroll Push" request once the technical errors are fixed.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is a "Drawback Query"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               An officer can flag your shipment if they suspect the "Export Value" is artificially inflated to get more drawback. We provide the Market Value Justification to close these queries.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I claim drawback if I am an EOU or SEZ unit?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              No. Since these units don't pay duty on inputs, they aren't entitled to a "drawback" of duty. They must rely on other schemes like RoDTEP.
              </p>
            </details>
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
