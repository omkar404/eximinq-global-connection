import { useState } from "react";
// import TopBar from "../components/CloudDeskFactoryStuffing/TopBar";
import Navbar from "../components/CloudDeskCertifiedGovernment/Navbar";
import Hero from "../components/CloudDeskCertifiedGovernment/Hero";
import Fees from "../components/CloudDeskFactoryStuffing/Fees";
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
  ShieldCheck, 
  Wifi,
  Truck,
  IndianRupee,
  FileText,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFactoryStuffing/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFactoryStuffing/ModalEnroll";

const CloudDeskFactoryStuffing = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Factory Stuffing?</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    Traditionally, export goods are sent to the port/CFS, unloaded, examined by Customs, and then stuffed into containers. This increases the risk of damage, theft, and delays.
                </p>
                
                <p className="mb-4">
                    <strong>Factory Stuffing Permission (FSP)</strong> allows exporters to stuff goods into containers directly at their own factory or warehouse. Once sealed, the container goes straight to the port terminal for loading onto the vessel, bypassing the CFS examination (subject to RMS).
                </p>
            </div>
        </div>
    </section>


    <section id="methods" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Clearance Modes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Two Ways to Stuff
          </h2>
          <p className="text-slate-500 mt-2">
            Choose the method that suits your volume and status.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Officer Supervision */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Officer Supervision
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    Excise / GST Officer
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                A Central Excise or Customs Officer visits your factory on the day
                of stuffing. They examine the cargo, supervise the loading, and
                seal the container with a One-Time Bottle Seal.
              </p>

              <ul className="text-sm text-slate-600 space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Ideal for high-value / sensitive cargo.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  MOT (Merchant Overtime) charges apply.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Requires advance booking of officer.
                </li>
              </ul>
            </div>
          </div>

          {/* Self Sealing */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-100 text-accent-700 rounded-full flex items-center justify-center font-bold">
                  <Wifi size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    RFID Self Sealing
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    The Modern Standard
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                The exporter stuffs the container and seals it themselves using
                an <strong>RFID e-Seal</strong> purchased from approved vendors.
                No officer presence is required. Data is uploaded to the cloud.
              </p>

              <ul className="text-sm text-slate-600 space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Mandatory for most exporters now.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  24x7 stuffing convenience.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  One-time permission from Customs required.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="benefits" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Opt for Factory Stuffing?
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Moving from Dock Stuffing to Factory Stuffing is the single biggest
              upgrade you can make to your logistics supply chain.
            </p>

            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-logistics-800 flex items-center justify-center text-accent-400 border border-logistics-700">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Cargo Safety</h4>
                  <p className="text-sm text-slate-400">
                    Minimal handling reduces breakage. You control the lashing
                    and chocking quality.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-logistics-800 flex items-center justify-center text-accent-400 border border-logistics-700">
                  <Truck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Speed</h4>
                  <p className="text-sm text-slate-400">
                    Container goes directly to port gate. No waiting in queue at
                    CFS.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-logistics-800 flex items-center justify-center text-accent-400 border border-logistics-700">
                  <IndianRupee size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Cost Savings</h4>
                  <p className="text-sm text-slate-400">
                    Save on CFS ground rent, labor charges, and handling fees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-logistics-900 border-b pb-4">
              Document Checklist
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                Request Letter to Asst. Commissioner (Exports)
              </li>
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                GST Registration &amp; IEC Copy
              </li>
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                Ownership Proof / Rent Agreement of Factory
              </li>
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                Layout Plan of the Premises
              </li>
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                Previous 3 Years Export Performance
              </li>
              <li className="flex items-start">
                <FileText className="mr-2 text-brand-600 mt-0.5" size={16} />
                NOC from Jurisdictional GST Range
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


        <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Approval Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Getting the Permission
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-logistics-900 mx-auto mb-4 border-4 border-logistics-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              File application with the Customs House (Port of Export) with all
              documents.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-logistics-900 mx-auto mb-4 border-4 border-logistics-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Verification</h3>
            <p className="text-sm text-slate-500">
              Customs verifies GST compliance and may request a site verification
              report.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-logistics-900 mx-auto mb-4 border-4 border-logistics-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Letter (LOI)</h3>
            <p className="text-sm text-slate-500">
              Customs issues a &quot;One Time Permission&quot; letter for
              Self-Sealing.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold mb-2">Registration</h3>
            <p className="text-sm text-slate-500">
              Register the permission with the EDI system and start using RFID
              seals.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Factory-Stuffing?</h2>
                    <p className="text-slate-500">
                          Stuffing at the factory is a privilege, not a right. CloudDesk ensures your facility meets the high-security standards Customs demands.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. Self-Sealing Authorization</h4> 
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026,<strong> physical Customs </strong>supervision during stuffing is rare.<strong> It has been replaced by Self-Sealing. </strong>
                          <strong>CloudDesk </strong>manages the application to the jurisdictional Principal<strong> Commissioner/Commissioner </strong>of Customs, ensuring your factory is "authorized" for self-sealing under the latest CBIC circulars.
                         </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. RFID e-Seal Integration</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Once authorized, you cannot use a simple lead seal. You must use an<strong> ISO 17712 compliant RFID e-Seal.</strong> 
                          <strong>CloudDesk </strong>provides an integrated portal to<strong> buy, register, </strong>and activate these <strong>seals, ensuring the "Seal Number" and "Time Stamp" </strong>are automatically pushed to the ICEGATE Shipping Bill.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. The "Zero-Examination" Protocol</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Factory-stuffed containers are less likely to be opened at the port if the digital data is clean. 
                          <strong>CloudDesk’s Stuffing </strong>Checklist ensures your<strong> "Container Load Plan" and "Weight Declaration" </strong>match your invoice perfectly, helping you secure<strong> Direct Port Entry (DPE).</strong>
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Logistics Sync (Empty-to-Gate)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The biggest headache is timing the arrival of the empty container with your production schedule. 
                          <strong>CloudDesk’s </strong>Trailer Tracker coordinates the pick-up of the empty box from the yard and its timely arrival at your<strong> factory, minimizing "Trailer Standing Charges."</strong>
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
                What is "Factory Stuffing"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               It is the process where the exporter brings an empty shipping container to their own premises (factory or warehouse), loads the cargo, and seals it there. The container then goes directly to the port for loading onto the ship.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Who is eligible for Self-Sealing/Factory Stuffing?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                In 2026, eligibility is open to: (1) AEO Status Holders, (2) Exporters who were previously granted factory stuffing permission under the old Excise regime, and (3) New exporters who obtain a one-time permission from the Customs Commissioner based on their factory's security and volume.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does a Customs Officer need to be present?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Under the "Self-Sealing" initiative, the exporter is responsible for stuffing and sealing. However, the data from the RFID e-Seal must be transmitted to Customs electronically.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is an RFID e-Seal?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is a high-security bolt seal with a built-in RFID chip. It stores the Shipping Bill number, Date/Time of sealing, and Container number. CloudDesk’s software allows you to "Write" this data onto the seal using a simple mobile app.

              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I buy any RFID seal from the market?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. You must use seals from Customs-approved vendors only. Using an unapproved seal will lead to the container being diverted to a CFS for 100% examination at the port.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How much can I save by stuffing at my factory?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              You save on: (1) CFS Handling Charges (₹5,000–₹12,000 per container), (2) Double handling of goods, and (3) Transit damage (since the goods are packed once and stay undisturbed).
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the biggest risk of Factory Stuffing?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  If the container is marked for "Examination" at the port (due to an RMS alert), the port officers will cut your seal. You then have to pay for a new seal and port-side handling. CloudDesk’s Risk-Profiler identifies "High-Risk" shipments before they leave your factory to minimize this.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can LCL cargo be factory stuffed?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Factory stuffing is strictly for FCL (Full Container Load). If you have less than a container load, your goods must go to a CFS to be consolidated with other exporters' cargo.
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
                    <li><a href="#" class="hover:text-white transition">Factory Stuffing</a></li>
                    <li><a href="#" class="hover:text-white transition">RFID E-Seals</a></li>
                    <li><a href="#" class="hover:text-white transition">AEO Certification</a></li>
                    <li><a href="#" class="hover:text-white transition">DPD Registration</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                   <li><a href="#" class="hover:text-white transition">Circular 26/2017</a></li>
                    <li><a href="#" class="hover:text-white transition">Self-Sealing SOP</a></li>
                    <li><a href="#" class="hover:text-white transition">RFID Vendor List</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Public Notices</a></li>
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

export default CloudDeskFactoryStuffing;