import { useState } from "react";
import TopBar from "../components/CloudDeskAEOCertificate/TopBar";
import Navbar from "../components/CloudDeskAEOCertificate/Navbar";
import Hero from "../components/CloudDeskAEOCertificate/Hero";
import Fees from "../components/CloudDeskAEOCertificate/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  Percent,
  FileText,
  Wallet,
  FileCheck,
  Scale,
  Banknote,
  BadgeCheck,
  PackageOpen,
  ArrowDownUp,
  ShieldCheck,
  FileBadge,
  Factory,
  PackageIcon,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskAEOCertificate/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskAEOCertificate/ModalEnroll";

const CloudDeskAEOCertificate = () => {
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
              What is the MOOWR Scheme?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>
                MOOWR (Manufacturing and Other Operations in Warehouse
                Regulations)
              </strong>{" "}
              is a flagship scheme by the Government of India under Section 65
              of the Customs Act, 1962. It aims to boost the "Make in India"
              initiative by allowing importers to set up a{" "}
              <strong>Private Bonded Warehouse</strong> within their factory
              premises.
            </p>
            <p className="mb-4">
              Under this scheme, manufacturers can import raw materials and
              capital goods (machinery){" "}
              <strong>without paying Customs Duty</strong> at the time of
              import. The duty is deferred until the finished goods are cleared
              for the domestic market. If the finished goods are exported, the
              deferred duty on inputs is <strong>fully remitted</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Advantage India
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Why Choose MOOWR?
            </h2>
          </div>

          {/* BENEFIT CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-600 hover:shadow-xl transition">
              <Wallet className="text-brand-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Duty Deferment
              </h3>
              <p className="text-slate-600 text-sm">
                No duty payment on import of Capital Goods and Raw Materials.
                Duty is payable only when finished goods are sold in India.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-xl transition">
              <Percent className="text-green-500 mb-4" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                No Interest Liability
              </h3>
              <p className="text-slate-600 text-sm">
                No interest is charged on deferred duty, even for years,
                provided the materials are used for manufacturing.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 hover:shadow-xl transition">
              <FileCheck className="text-accent-500 mb-4" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                No Export Obligation
              </h3>
              <p className="text-slate-600 text-sm">
                Unlike EPCG/Advance Authorization, MOOWR has no export targets.
                You can sell 100% domestically without restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              MOOWR vs Traditional Schemes
            </h2>
            <p className="text-slate-500 mt-2">
              Why MOOWR is superior for modern manufacturing.
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600 border border-slate-200">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  <th className="px-6 py-4 border-r">Feature</th>
                  <th className="px-6 py-4 border-r text-brand-700 font-bold">
                    MOOWR Scheme
                  </th>
                  <th className="px-6 py-4 border-r">EPCG Scheme</th>
                  <th className="px-6 py-4">Advance Authorization</th>
                </tr>
              </thead>

              <tbody>
                {/* ROW 1 */}
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <Banknote size={16} className="text-brand-600" />
                    Import Duty
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    Deferred (Zero Upfront)
                  </td>
                  <td className="px-6 py-4 border-r">Zero (Conditional)</td>
                  <td className="px-6 py-4">Zero (Inputs only)</td>
                </tr>

                {/* ROW 2 */}
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <BadgeCheck size={16} className="text-brand-600" />
                    Export Obligation
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    NONE
                  </td>
                  <td className="px-6 py-4 border-r">6 Times Duty Saved</td>
                  <td className="px-6 py-4">Value Addition Required</td>
                </tr>

                {/* ROW 3 */}
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <PackageOpen size={16} className="text-brand-600" />
                    Capital Goods
                  </td>
                  <td className="px-6 py-4 border-r">Allowed</td>
                  <td className="px-6 py-4 border-r">Allowed</td>
                  <td className="px-6 py-4">Not Allowed</td>
                </tr>

                {/* ROW 4 */}
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <Scale size={16} className="text-brand-600" />
                    IGST Payment
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    Deferred
                  </td>
                  <td className="px-6 py-4 border-r">Exempted (Pre-Import)</td>
                  <td className="px-6 py-4">Exempted</td>
                </tr>

                {/* ROW 5 */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <ArrowDownUp size={16} className="text-brand-600" />
                    Depreciation
                  </td>
                  <td className="px-6 py-4 border-r">
                    Allowed on Capital Goods
                  </td>
                  <td className="px-6 py-4 border-r">Not Applicable</td>
                  <td className="px-6 py-4">Not Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Implementation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Steps to Establish Bonded Warehouse
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* STEP 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              mx-auto mb-4 border-4 border-accent-500"
              >
                <FileText className="text-brand-900" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-slate-300">
                File common application online via ICEGATE (Annexure A).
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              mx-auto mb-4 border-4 border-accent-500"
              >
                <ShieldCheck className="text-brand-900" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Permission</h3>
              <p className="text-sm text-slate-300">
                Principal Commissioner grants permission under Section 65.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              mx-auto mb-4 border-4 border-accent-500"
              >
                <FileBadge className="text-brand-900" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Bonding</h3>
              <p className="text-sm text-slate-300">
                Execute a Triple Duty Bond with Customs covering liability.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              mx-auto mb-4 border-4 border-accent-500"
              >
                <PackageIcon className="text-brand-900" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Import</h3>
              <p className="text-sm text-slate-300">
                Start importing goods duty-free into the warehouse.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
              mx-auto mb-4 border-4 border-white"
              >
                <Factory className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Manufacture</h3>
              <p className="text-sm text-slate-300">
                Carry out operations. Clear final goods as per demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees />


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Moowr-Scheme?</h2>
                    <p className="text-slate-500">
                      MOOWR turns your factory into a 'Legal Customs Vault.' CloudDesk ensures the keys always turn smoothly.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. "Infinite" Duty Deferral Setup</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Unlike Advance Authorisation, <strong>MOOWR </strong>has no fixed export obligation and no time limit for duty deferral. 
                          <strong>CloudDesk</strong> architects your licensing so that you only pay duty if and when you sell to the <strong>domestic market (DTA).</strong> If you export, the duty is waived forever.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. The Single-Point Approval Engine</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Getting a <strong>MOOWR license </strong>involves both a Bonded <strong>Warehouse License </strong>(Sec 58) and Permission for Manufacturing (Sec 65). <strong>CloudDesk</strong> handles the dual-application process, ensuring your factory layout, security protocols, and bond execution are approved by the Commissioner in one go.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Digital Inventory-Bond Sync</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The biggest compliance hurdle is the <strong>Triple-Column Ledger (Input, Process, Output).</strong>
                          <strong>CloudDesk’s </strong>Bonded-Inventory Module automates this ledger, ensuring your raw material consumption matches your <strong>export/domestic sales perfectly,</strong> making your monthly returns "Audit-Proof."
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. GST-Customs Financial Mapping</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          While Customs duty is deferred, <strong>IGST rules are complex under MOOWR.</strong>
                         <strong>CloudDesk </strong>performs a Tax-Optimization Audit to ensure you aren't accidentally blocking your GST credits while trying to save on Customs duty.
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
                What exactly is the MOOWR Scheme?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It allows you to import capital goods and raw materials into a bonded warehouse (your factory) without paying BCD (Basic Customs Duty) or IGST. You only pay these taxes when you clear the finished goods into the Indian domestic market. If you export the finished goods, you pay zero duty.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How is MOOWR better than an EOU (Export Oriented Unit) or SEZ?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "• No Export Obligation: Unlike EOUs, there is no ""Net Foreign Exchange"" (NFE) requirement.
                 • No Location Restriction: Unlike SEZs, you can set up a MOOWR unit anywhere in India.
                 • Ease of Exit: Exiting MOOWR is significantly simpler than exiting an SEZ or EOU."

              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a time limit for keeping goods in the MOOWR warehouse?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. You can keep raw materials or capital goods in the bonded premises indefinitely without paying duty until they are "cleared" for domestic consumption.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Who can apply for a MOOWR license?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Any person (Proprietorship, Partnership, or Company) who has been granted a license under Section 58 of the Customs Act for a bonded warehouse and intends to carry out manufacturing or other operations under Section 65.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What are the "Security" requirements for a MOOWR factory?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Your premises must be secure. Requirements include: (1) Strong physical boundaries, (2) 24/7 CCTV surveillance with a 30-day backup, and (3) Digital record-keeping of all entry and exit. CloudDesk provides a Security Checklist to ensure you meet these before the inspector arrives.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Do I need a separate IEC for MOOWR? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               No. You use your existing IEC. However, your ICEGATE ID must be mapped to the specific Bonded Warehouse Code generated after your license is approved.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What happens when I sell my product in India (DTA)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               You must file an Ex-Bond Bill of Entry and pay the deferred BCD and IGST on the raw materials used in that product. There is no interest charged on the deferred duty if paid at the time of clearance.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I transfer goods from one MOOWR unit to another?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. Inter-unit transfers are permitted without payment of duty, making it an excellent scheme for companies with multiple manufacturing stages across different locations.
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
                  MOOWR Consultancy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  AEO Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorization
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
                  Section 65 Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bond Format
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Monthly Return Format
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FAQ on MOOWR
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

export default CloudDeskAEOCertificate;
