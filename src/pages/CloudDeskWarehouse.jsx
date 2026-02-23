import { useState } from "react";
// import TopBar from "../components/CloudDeskWarehouse/TopBar";
import Navbar from "../components/CloudDeskWarehouse/Navbar";
import Hero from "../components/CloudDeskWarehouse/Hero";
import Fees from "../components/CloudDeskWarehouse/Fees";
import {
  Check,
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
Warehouse, 
Lock, 
Factory,
  CalendarClock,
  Repeat,
  Tags,
  FileCheck,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskWarehouse/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskWarehouse/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskWarehouse = () => {
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

    <section id="types" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Classification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Types of Warehouse Licenses
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Type 1 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-8 border-t-4 border-brand-600 hover:shadow-xl transition">
            <Warehouse className="text-brand-600 mb-3" size={32} />
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              Public Bonded (Sec 57)
            </h3>
            <p className="text-sm text-slate-600">
              Licensed to store dutiable imported goods belonging to{" "}
              <strong>any importer</strong>. Operates as a commercial
              storage facility under Customs control.
            </p>
            <div className="mt-4 text-xs font-bold text-brand-700">
              Focus: 3PL &amp; Commercial Storage
            </div>
          </div>

          {/* Type 2 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-8 border-t-4 border-brand-800 hover:shadow-xl transition">
            <Lock className="text-brand-800 mb-3" size={32} />
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              Private Bonded (Sec 58)
            </h3>
            <p className="text-sm text-slate-600">
              Licensed only to store dutiable imported goods belonging
              to the <strong>license holder</strong>. Ideal for
              manufacturers or large distribution hubs.
            </p>
            <div className="mt-4 text-xs font-bold text-brand-800">
              Focus: Manufacturers &amp; Sole Importers
            </div>
          </div>

          {/* Type 3 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-8 border-t-4 border-green-600 hover:shadow-xl transition">
            <Factory className="text-green-600 mb-3" size={32} />
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              MOOWR (Sec 65)
            </h3>
            <p className="text-sm text-slate-600">
              Allows manufacturing or processing within the warehouse
              without paying duty upfront. Duty applies only on
              clearance.
            </p>
            <div className="mt-4 text-xs font-bold text-green-700">
              Focus: Duty-Deferred Manufacturing
            </div>
          </div>
        </div>
      </div>
    </section>


  <section id="bonded" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Advantages of a Customs Bonded Warehouse
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white text-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-brand-500 text-center">
            <CalendarClock className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">
              Duty Deferment
            </h3>
            <p className="text-sm text-slate-600">
              Pay customs duty only when goods are cleared
              for domestic consumption.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white text-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-brand-500 text-center">
            <Repeat className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">
              Duty-Free Re-Export
            </h3>
            <p className="text-sm text-slate-600">
              If goods are re-exported, no customs duty
              is payable at all.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white text-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-brand-500 text-center">
            <Tags className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">
              Value-Added Services
            </h3>
            <p className="text-sm text-slate-600">
              Minor processing, labeling, kitting,
              or assembly is permitted under bond.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white text-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-brand-500 text-center">
            <FileCheck className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">
              Simplified Compliance
            </h3>
            <p className="text-sm text-slate-600">
              Updated regulations simplify record-keeping
              and significantly reduce bank guarantee
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>


        <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Customs Procedure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Licensing Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              File the application online with the Principal Commissioner
              of Customs (PCC).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Verification</h3>
            <p className="text-sm text-slate-500">
              Customs officers inspect the premises for security,
              access control, and inventory systems.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Bond</h3>
            <p className="text-sm text-slate-500">
              Execute a Continuity Bond covering the potential
              customs duty value of stored goods.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">License</h3>
            <p className="text-sm text-slate-500">
              PCC issues the formal warehouse license
              (Form B / C / D), effective immediately.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Operation</h3>
            <p className="text-sm text-slate-500">
              Begin filing Bills of Entry (into Bond) and
              maintain daily statutory records.
            </p>
          </div>
        </div>
      </div>
    </section>

<Fees/>


{/* --- WHY CLOUDDESK SECTION (WAREHOUSE LICENSE) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Warehouse Licensing?</h2>
      <p className="text-slate-500">
        A warehouse is more than a shed; in 2026, it is a "Tax-Free Zone" if licensed correctly.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Duty Deferment (Section 58 - Private Bonded)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            We help you set up a <strong>Private Bonded Warehouse</strong>. This allows you to import bulk cargo and keep it in your facility <strong>without paying 100% Import Duty upfront</strong>. You only pay duty as and when you remove goods for sale. CloudDesk manages the <strong>Double Duty Bond</strong> and the digital ledger required by Customs.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. WDRA Accreditation (For Agri & Commodity)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you deal in commodities, we register you with the <strong>Warehousing Development and Regulatory Authority (WDRA)</strong>. This turns your warehouse receipts into <strong>Negotiable Instruments (e-NWRs)</strong>, allowing you to get instant bank funding against your stored inventory.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Manufacturing and Other Operations in Warehouse (MOOWR)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The <strong>MOOWR 2019/2026 scheme</strong> is a game-changer. CloudDesk licenses your warehouse as a <strong>"Manufacturing Unit"</strong> where you can import raw materials duty-free, manufacture, and only pay duty on the final product if sold in India — or <strong>zero duty if exported</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Hazardous & Temperature-Controlled Compliance</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            For chemicals or pharma, a standard license isn't enough. We manage the <strong>Fire Department NOC, Pollution Board CTE/CTO,</strong> and <strong>Industrial Safety (DISH) approvals</strong> specifically for specialized storage, ensuring you meet the 2026 safety mandates for <strong>"High-Risk Storage."</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (WAREHOUSE LICENSE) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the difference between Section 57 and Section 58 warehouses?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>Section 57 (Public):</strong> Operated by the government or authorized agencies (like CWC). Anyone can store goods here.<br />
          • <strong>Section 58 (Private):</strong> Your own facility licensed to store your imported goods without immediate duty payment.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long can I keep goods in a Bonded Warehouse?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the initial period is <strong>one year, extendable by the Commissioner</strong>. However, for capital goods (machinery), you can often store them until they are cleared for home consumption.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is GST applicable on Bonded Warehouse storage charges?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Storage and handling charges attract <strong>18% GST</strong>. However, the sale of goods within a bonded warehouse to another buyer is treated as a <strong>"no-supply" under Schedule III (Tax-Free)</strong> until the goods are cleared for home consumption.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need a separate FSSAI license for a warehouse?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. If you store food items, you must have an FSSAI Registration/License specifically for the <strong>"Storage/Warehouse" category</strong>. A manufacturing license is <strong>not enough</strong> for a standalone storage site.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Insurance" requirement for a license?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Customs and WDRA mandate that the warehouse must be insured for <strong>Fire, Flood, Theft, and Burglary</strong>. In 2026, the policy must also cover the <strong>Duty Amount of the stored goods</strong>, not just their value.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I perform "Value Addition" like labeling in a warehouse?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes, under <strong>Section 64 (Owner's Right)</strong>. You can sort, pack, or relabel goods in a bonded warehouse <strong>under Customs supervision</strong>. This is ideal for meeting <strong>LMPC (Legal Metrology)</strong> labeling requirements before final clearance.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens if I lose goods in a Bonded Warehouse?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You are liable to pay <strong>Full Duty + Interest + Penalties</strong>. The <strong>"Warehouse Keeper"</strong> is personally responsible for any shortage in the digital stock ledger.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Digital Bonded Ledger" in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, manual registers are illegal. You must maintain a <strong>Cloud-Based Inventory System</strong> that is accessible by Customs officers for <strong>real-time audits</strong>. CloudDesk provides the software integration for this ledger.
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
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Bonded Warehouse</a></li>
                    <li><a href="#" class="hover:text-white transition">MOOWR Scheme</a></li>
                    <li><a href="#" class="hover:text-white transition">General Warehousing</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Compliance</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Bond Forms (B/C/D)</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Act (Sec 57-65)</a></li>
                    <li><a href="#" class="hover:text-white transition">Site Security Norms</a></li>
                    <li><a href="#" class="hover:text-white transition">BG Reduction Rules</a></li>
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

export default CloudDeskWarehouse;