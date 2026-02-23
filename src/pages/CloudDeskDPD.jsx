import { useState } from "react";
// import TopBar from "../components/CloudDeskDPD/TopBar";
import Navbar from "../components/CloudDeskDPD/Navbar";
import Hero from "../components/CloudDeskDPD/Hero";
import Fees from "../components/CloudDeskDPD/Fees";
import {
  Check,
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
  IndianRupee,
  Hourglass,
  Truck,
  CheckCircle, 
  FileText,
  FileCheck, 
  Link2, 
  Wallet
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDPD/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskDPD/ModalEnroll";

const CloudDeskDPD = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Direct Port Delivery?</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    <strong>Direct Port Delivery (DPD)</strong> is an initiative by Indian Customs to facilitate Ease of Doing Business. Traditionally, import containers are moved from the Port Terminal to a <strong>Container Freight Station (CFS)</strong>, where customs clearance takes place. This adds handling costs and delays (4-7 days).
                </p>
                
                <p className="mb-4">
                    Under DPD, the importer files the Bill of Entry in advance (before vessel arrival) and pays the duty. The container is then picked up directly from the terminal within 48 hours of landing, bypassing the CFS entirely.
                </p>
            </div>
        </div>
    </section>


    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Key Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Why Switch to DPD?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Huge Cost Savings
            </h3>
            <p className="text-sm text-slate-600">
              Save ₹ 8,000 to ₹ 15,000 per TEU by avoiding CFS handling charges,
              ground rent, and transportation to CFS.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Hourglass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Faster Clearance
            </h3>
            <p className="text-sm text-slate-600">
              Reduce dwell time from 7–9 days to just 48 hours. Goods reach your
              factory faster, improving inventory turnover.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brand-500 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4 text-brand-600">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Direct Control
            </h3>
            <p className="text-sm text-slate-600">
              Importers have direct control over transportation. You arrange
              your own trailer to pick up from the port, reducing dependency on
              CFS.
            </p>
          </div>
        </div>

        {/* AEO Notice */}
        <div className="mt-12 bg-brand-900 text-white p-6 rounded-lg text-center max-w-4xl mx-auto">
          <h4 className="font-bold text-lg mb-2">
            Are you an AEO Client?
          </h4>
          <p className="text-sm text-slate-300">
            Authorized Economic Operators (Tier 1, 2, 3) get{" "}
            <strong>Automatic DPD Status</strong>. You just need to activate the
            code with the terminals.
          </p>
        </div>
      </div>
    </section>


        <section id="eligibility" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-port-900 mb-6">
              Who Can Apply?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Customs grants DPD permission based on volume and compliance track
              record.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <strong className="block text-slate-800">
                    AEO Status Holders
                  </strong>
                  <span className="text-sm text-slate-500">
                    Tier 1, 2, and 3 clients are automatically eligible.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <strong className="block text-slate-800">
                    Volume Importers
                  </strong>
                  <span className="text-sm text-slate-500">
                    Importers with clear track record and consistent volume
                    (varies by port).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <strong className="block text-slate-800">
                    Advance Bill of Entry
                  </strong>
                  <span className="text-sm text-slate-500">
                    Willingness to file BE and pay duty <em>before</em> vessel
                    berthing.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <strong className="block text-slate-800">
                    FCL Cargo Only
                  </strong>
                  <span className="text-sm text-slate-500">
                    Only Full Container Loads (FCL) are eligible. LCL still goes
                    to CFS.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-port-50 rounded-xl p-8 border border-port-100">
            <h3 className="text-xl font-bold text-port-900 mb-4 border-b border-port-200 pb-4">
              Required Documents
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                Request Letter to Commissioner of Customs
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                IEC Copy &amp; GST Registration
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                Last 3 Years Import Volume Data
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                Authorization Letter for CHA
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                PD Account Opening Form (with Terminal)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
            Implementation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-port-800 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-port-600 shadow-sm">
              <FileCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Permission</h3>
            <p className="text-sm text-slate-400">
              Apply to Customs for DPD permission letter. Receive approval.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-port-800 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-port-600 shadow-sm">
              <Link2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Code Mapping</h3>
            <p className="text-sm text-slate-400">
              Register DPD Code with Port Terminals (e.g., BMCT, GTI, NSICT).
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-port-800 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-port-600 shadow-sm">
              <Wallet className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">PD Account</h3>
            <p className="text-sm text-slate-400">
              Open Pre-Deposit Account with terminals for handling charges.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Active</h3>
            <p className="text-sm text-slate-400">
              Instruct Liners to file IGM with DPD Code. Start clearing!
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Dpd-Registration"?</h2>
                    <p className="text-slate-500">
                          DPD is about speed, but one documentation error can send your cargo back to the expensive CFS lane. CloudDesk ensures you stay in the fast lane.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. "First-Time Right" Registration</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Getting <strong>DPD </strong>permission requires a clean track record and specific volume commitments<strong> (or AEO status).</strong>
                          <strong>CloudDesk </strong>manages the DPD Application with the<strong> Commissioner of Customs, </strong>ensuring your<strong> "Financial Solvency" and "Compliance History" </strong>are presented flawlessly for immediate approval.
                         </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Terminal-Specific "DPD Code" Setup</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong>DPD </strong>isn't universal; you need to be registered at specific terminals<strong> (like JNPCT, GTI, or NSIGT).</strong>
                          <strong> CloudDesk </strong>handles the Terminal-Level Registration and ensures your IEC is mapped to the port’s<strong> "DPD Directory," </strong>allowing the cranes to move your container to the DPD area automatically.

                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. The 48-Hour Clearance Sprint</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong>DPD cargo </strong>must be cleared within 48 hours, or it is forcefully moved to a <strong>CFS, </strong>incurring double charges. 
                          <strong>CloudDesk’s DPD </strong>Control Tower tracks your vessel's arrival and ensures your<strong> "Advanced Bill of Entry" and "Duty Payment" </strong>are completed before the ship berths.

                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Integrated DPD Transportation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                              Traditional transporters often struggle with <strong>port-terminal pickups.</strong> 
                              <strong>CloudDesk </strong>provides a <strong>DPD-Authorized </strong>Fleet that is pre-registered with the terminal gate systems, ensuring your container moves from the<strong> "Hook to the Hook-up" </strong>without waiting for manual gate-passes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    Who is eligible for DPD registration?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               In 2026, eligibility is primarily based on: (1) AEO (T1, T2, or T3) status holders, or (2) Importers with a minimum volume of 25-50 TEUs (containers) per year at a specific port. CloudDesk helps SMEs get DPD by leveraging their AEO T1 certification.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is DPD available at all Indian ports?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is most active at major ports like Nhava Sheva (JNPT), Mundra, Hazira, and Chennai. Each port has its own "DPD Cell" which CloudDesk liaises with on your behalf.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does DPD registration expire?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                DPD permission is typically valid as long as your IEC and AEO status are active. However, you must file a "DPD Renewal/Continuance" declaration annually to confirm your volume and compliance.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How much money can I save with DPD?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                On average, DPD saves between ₹8,000 to ₹20,000 per container by eliminating CFS handling charges, ground rent, and secondary transportation costs. For a company importing 10 containers a month, that’s over ₹1.5 Lakhs in pure profit saved.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "72-Hour Rule"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  If you do not pick up your container from the port terminal within 48 to 72 hours (depending on the port), the terminal "evacuates" it to a designated CFS. You then lose the DPD benefit and pay full CFS charges. CloudDesk’s Alert System prevents this evacuation.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I use DPD for LCL (Less than Container Load) shipments?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  No. DPD is only for FCL (Full Container Load) shipments because the entire container is delivered to a single importer. LCL cargo must go to a CFS for "de-stuffing" and sorting.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is a "DPD Code"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  It is a unique identification number assigned to your company by the Port Terminal. You must mention this code in your Bill of Entry to inform Customs and the Terminal that the container is meant for Direct Delivery.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What if my cargo needs "Physical Examination"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Even DPD cargo can be marked for examination by the RMS. In such cases, the examination is done at a special DPD Area within the port or at a nearby "DPD-Speed" facility, rather than a general CFS, maintaining the speed of delivery.
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
                      <li><a href="#" class="hover:text-white transition">DPD Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">AEO Certification</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Clearance</a></li>
                    <li><a href="#" class="hover:text-white transition">Freight Forwarding</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                     <li><a href="#" class="hover:text-white transition">Public Notice (DPD)</a></li>
                    <li><a href="#" class="hover:text-white transition">Terminal Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition">Advance BE Rules</a></li>
                    <li><a href="#" class="hover:text-white transition">CFS vs DPD Cost</a></li>
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

export default CloudDeskDPD;