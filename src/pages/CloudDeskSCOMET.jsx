import React, { useState } from "react";
import TopBar from "../components/CloudDeskSCOMET/TopBar";
import Navbar from "../components/CloudDeskSCOMET/Navbar";
import Hero from "../components/CloudDeskSCOMET/Hero";
import Fees from "../components/CloudDeskSCOMET/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle,
  FileSignature,
  FileCode2,
  ShoppingCart,
  IdCard,
  FileSearch, 
  FileCheck,
  FileText, 
  Users2, 
  CheckCheck,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskSCOMET/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskSCOMET/ModalEnroll";

const CloudDeskSCOMET = () => {
    const [showEnrollModal, setShowEnrollModal] = useState({
      open: false,
      type: null,
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
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is SCOMET?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>SCOMET</strong> stands for <strong>S</strong>pecial{" "}
              <strong>C</strong>hemicals, <strong>O</strong>rganisms,{" "}
              <strong>M</strong>aterials, <strong>E</strong>quipment and{" "}
              <strong>T</strong>echnologies. These are "dual-use" items, meaning
              they have civilian applications but can also be used for military
              purposes or in the production of Weapons of Mass Destruction
              (WMD).
            </p>
            <p className="mb-4">
              Under India's Foreign Trade Policy, the export of SCOMET items is
              either prohibited or permitted only under a license issued by the
              DGFT. This list is harmonized with global control regimes like the{" "}
              <strong>Wassenaar Arrangement</strong>,{" "}
              <strong>Australia Group</strong>, and{" "}
              <strong>Missile Technology Control Regime (MTCR)</strong>.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-8 rounded-r-lg">
              <h3 className="font-bold text-red-900 text-lg mb-2">
                <i className="fas fa-exclamation-triangle"></i> Mandatory
                Compliance
              </h3>
              <p className="text-sm">
                Exporting SCOMET items without a license is a serious offense
                under the Weapons of Mass Destruction and their Delivery Systems
                (Prohibition of Unlawful Activities) Act, leading to
                imprisonment and heavy fines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              SCOMET Categories (0-8)
            </h2>
            <p className="text-slate-500 mt-2">
              Identify where your product fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* <!-- Cat 0 & 1 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 0 & 1
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Nuclear & Chemicals
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Nuclear Materials & Equipment</li>
                <li>• Toxic Chemical Agents</li>
                <li>• Riot Control Agents</li>
              </ul>
            </div>

            {/* <!-- Cat 2 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 2
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Biological
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Micro-organisms (Viruses/Bacteria)</li>
                <li>• Toxins</li>
                <li>• Genetic Elements</li>
              </ul>
            </div>

            {/* <!-- Cat 3 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 3
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Materials
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• High Strength Alloys</li>
                <li>• Carbon Fibers</li>
                <li>• Material Processing Equipment</li>
              </ul>
            </div>

            {/* <!-- Cat 4 & 5 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 4 & 5
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Nuclear Related & Aerospace
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Equipment for Nuclear Activity</li>
                <li>• Aerospace Systems</li>
                <li>• Unmanned Aerial Vehicles (UAVs)</li>
              </ul>
            </div>

            {/* <!-- Cat 6 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 6
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Munitions List
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Arms, Ammunition</li>
                <li>• Armored Vehicles</li>
                <li>• Explosives & Propellants</li>
                <li>*Requires strict End User Certs</li>
              </ul>
            </div>

            {/* <!-- Cat 8 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Category 8
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Special Materials
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Electronics, Computers</li>
                <li>• Information Security (InfoSec)</li>
                <li>• Sensors and Lasers</li>
                <li>• Navigation & Avionics</li>
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
            Approval Workflow
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">The IMWG Process</h2>

          <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
            Unlike standard licenses, SCOMET applications are reviewed by an Inter-Ministerial Working Group (IMWG)
            comprising DGFT, MEA, DRDO, and other security agencies.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileSearch className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Classification</h3>
            <p className="text-sm text-slate-300">
              Technical mapping of item specifications to the exact SCOMET entry.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileCheck className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">EUC</h3>
            <p className="text-sm text-slate-300">
              Obtaining End User Certificate (EUC) from the foreign buyer (Appendix 2S).
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileText className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">ANF 2Q</h3>
            <p className="text-sm text-slate-300">
              Online filing of application ANF 2Q on the DGFT portal.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <Users2 className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">IMWG Review</h3>
            <p className="text-sm text-slate-300">
              Scrutiny by multiple ministries. Queries regarding end-use are common.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-white shadow-sm">
              <CheckCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">License</h3>
            <p className="text-sm text-slate-300">
              Issuance of export authorization (valid for 24 months).
            </p>
          </div>

        </div>
      </div>
    </section>

      <section id="compliance" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Documentation Checklist
              </h2>

              <p className="text-slate-600 mb-8">
                Precision is key. A single error in the End User Certificate can
                lead to immediate rejection.
              </p>

              <ul className="space-y-4">
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                  <FileSignature className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      End User Certificate (EUC)
                    </strong>
                    <span className="text-sm text-slate-500">
                      Must be on the official letterhead of the foreign buyer,
                      signed by authorized signatory.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                  <FileCode2 className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Technical Specifications
                    </strong>
                    <span className="text-sm text-slate-500">
                      Detailed drawings, chemical composition, or datasheets.
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <ShoppingCart className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Purchase Order
                    </strong>
                    <span className="text-sm text-slate-500">
                      Copy of the PO/Contract from the buyer.
                    </span>
                  </div>
                </li>

                {/* Item 4 */}
                <li className="flex items-start gap-3">
                  <IdCard className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Company Profile
                    </strong>
                    <span className="text-sm text-slate-500">
                      Profile of the foreign buyer and the consignee (if
                      different).
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE BOX */}
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="bg-white p-6 shadow-md rounded text-center">
                <h4 className="font-bold text-brand-900 mb-4">
                  GAEC (Global Authorization)
                </h4>

                <p className="text-sm text-slate-600 mb-6">
                  For exporters supplying SCOMET items to the same foreign
                  entity repeatedly (within Intra-Company transfers), the
                  <strong>
                    {" "}
                    Global Authorization for Intra-Company Transfer (GAICT)
                  </strong>{" "}
                  allows bulk approval for 3 years.
                </p>

                <a
                  href="#home" 
                  className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
                >
                  Check GAEC Eligibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">SCOMET isn't just paperwork; it’s a security clearance. CloudDesk ensures you don't end up on a global 'Denied Persons List'.</h2>
                    {/* <p className="text-slate-500">"• Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                    • Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. Technical Classification (The SCOMET Filter)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Many exporters don't even know their product is restricted<strong> (e.g., certain high-grade chemicals, drones, or specialized software).</strong> 
                          <strong>CloudDesk </strong>performs a Deep-Technical Audit of your product specifications against the<strong> 8 SCOMET categories </strong>to determine if you need a license.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. End-User Credibility Check</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Customs doesn't just look at the product; they look at the Buyer.<strong> CloudDesk </strong>conducts a Global Denied Party Screening.
                          We check your foreign buyer against<strong> UN, US, and Indian </strong>watchlists before you sign the contract, protecting you from<strong> "Accidental Proliferation."</strong>
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. IMWG Inter-Ministerial Coordination</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          SCOMET licenses aren't issued by<strong> DGFT </strong>alone. They are vetted by the<strong> Inter-Ministerial Working Group (IMWG), </strong>including representatives from<strong> Defence, Space, and Atomic Energy.</strong>
                          <strong>CloudDesk </strong>manages the high-level technical representations needed to convince these agencies that your export is for peaceful use.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. GAEC (Global Authorization) Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          For regular exporters of certain<strong> SCOMET items (like chemicals or electronics)</strong> to friendly nations, we help you secure the<strong> Global Authorisation for Intra-Company Transfers (GAEC).</strong> 
                          This allows you to export multiple times to pre-approved entities without applying for a fresh license every time.
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
                What are the main SCOMET Categories?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "There are 9 categories (0 to 8) covering:
                • Category 0: Nuclear materials.
                • Category 1: Toxic chemicals and agents.
                • Category 2: Micro-organisms/Toxins.
                • Category 3: Materials/Material Processing.
                • Category 5: Aerospace/Avionics.
                • Category 8: Special Electronics and Computers (The most common category for tech startups)."
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                My product is a simple commercial drone. Why is it under SCOMET?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Because the same drone can be modified for surveillance or payload delivery. In 2026, any hardware or software with "strategic encryption" or "precision navigation" likely falls under Category 5 or 8.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is software or technology also covered?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. SCOMET isn't just for physical goods. If you are "Transferring Technology" (via email, cloud, or training) to a foreign entity that falls under the SCOMET description, you need a license.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is an End-User Certificate (EUC)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               This is the most critical document. Your foreign buyer must provide an Appendix 10B (EUC), legally promising that they will not use the item for weapons and will not re-export it without Indian government permission.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I export SCOMET items to "Conflict Zones"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is extremely difficult. The IMWG rarely approves licenses for regions under UN embargo or active conflict. CloudDesk provides a Country-Risk Report before you begin the application.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if I export a SCOMET item without a license?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Under the Foreign Trade (Development & Regulation) Act and the WMD Act, 2005, the penalties include: (1) Heavy fines (into crores), (2) Imprisonment (up to life in some cases), and (3) Permanent cancellation of your IEC.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to get a SCOMET license?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Because of the inter-ministerial vetting, it takes 45 to 90 days. CloudDesk’s "Filing-Accuracy" protocol ensures your application isn't returned for queries, which is the #1 cause of further delays.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is "Catch-All" control?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Even if your item is NOT on the SCOMET list, if the government suspects it is intended for a WMD program, they can stop the shipment under "Catch-All" controls. CloudDesk helps you document the "Peaceful End-Use" to mitigate this risk.
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
                  SCOMET License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Restricted Export License
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
                  Appendix 3 (SCOMET)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EUC Format (Appx 2S)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT FAQs
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Wassenaar List
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

export default CloudDeskSCOMET;
