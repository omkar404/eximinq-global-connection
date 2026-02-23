import { useState } from "react";
// import TopBar from "../components/CloudDeskFertilizer/TopBar";
import Navbar from "../components/CloudDeskFertilizer/Navbar";
import Hero from "../components/CloudDeskFertilizer/Hero";
import Fees from "../components/CloudDeskFertilizer/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  ShieldUser, 
  Phone,
  Mail,
  MapPin,
  Leaf,
  Droplet,
  Sprout,
  Recycle,
  FlaskConical,
  AlertTriangle,
  Warehouse,
  GraduationCap,
  Handshake,
  FileText,
  ClipboardCheck,
  IdCard,
  CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFertilizer/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFertilizer/ModalEnroll";

const CloudDeskFertilizer = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why is a License Mandatory?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    Under the <strong>Essential Commodities Act, 1955</strong>, the Government of India regulates the sale, price, and quality of fertilizers through the <strong>Fertilizer Control Order (FCO), 1985</strong>.
                </p>
                [Image of Fertilizer Supply Chain]
                <p className="mb-4">
                    Any person intending to import fertilizers for sale in India must obtain an <strong>Authorization Letter / Registration Certificate</strong> from the Controller of Fertilizers (Central/State). Additionally, all import transactions must be reported on the <strong>Integrated Fertiliser Management System (iFMS)</strong> for subsidy and movement tracking.
                </p>
            </div>
        </div>
    </section>


  <section id="categories" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-agri-600 font-bold uppercase tracking-wider text-sm">
            Product Scope
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Regulated Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Standard Fertilizers */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Standard Fertilizers
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Listed in Schedule I of FCO. Includes Urea, DAP, MOP, SSP, and NPK
              complexes. Requires standard lab testing for quality compliance.
            </p>
          </div>

          {/* Water Soluble */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Droplet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                100% Water Soluble
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Specialty fertilizers used for drip irrigation (e.g., Potassium
              Nitrate, Calcium Nitrate). High purity standards apply.
            </p>
          </div>

          {/* Bio-stimulants */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-accent-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600">
                <Sprout size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Bio-stimulants
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              <strong>New Mandate:</strong> Seaweed extracts, Amino acids,
              Humic acid. Requires provisional registration (Form G) and
              efficacy data.
            </p>
          </div>

          {/* Organic */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-brand-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                <Recycle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Organic / Bio
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Bio-fertilizers (Rhizobium, Azotobacter) and Organic Manures.
              Must meet strict heavy metal limits.
            </p>
          </div>

          {/* Micronutrients */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Micronutrients
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Zinc, Iron, Boron, etc. Mixtures of micronutrients require
              specific state-level approvals.
            </p>
          </div>

          {/* Non-Standard */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Non-Standard
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Fertilizers not listed in FCO Schedule I. Require special
              permission (Clause 20) for import, usually for R&D.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section id="documents" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documentation Checklist
            </h2>

            <p className="text-slate-300 mb-8 leading-relaxed">
              To obtain the Import Authorization (Form A1/A2), you must
              demonstrate the capability to store and test the material.
            </p>

            <ul className="space-y-4">

              {/* Storage Facility */}
              <li className="flex items-start gap-3">
                <Warehouse className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Storage Facility
                  </strong>
                  <span className="text-sm text-slate-400">
                    Proof of ownership or rent agreement of a godown.
                  </span>
                </div>
              </li>

              {/* Lab Analysis */}
              <li className="flex items-start gap-3">
                <FlaskConical className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Lab Analysis Report
                  </strong>
                  <span className="text-sm text-slate-400">
                    Certificate of Analysis (COA) from the foreign supplier.
                  </span>
                </div>
              </li>

              {/* Technical Staff */}
              <li className="flex items-start gap-3">
                <GraduationCap className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Technical Staff
                  </strong>
                  <span className="text-sm text-slate-400">
                    Details of qualified person (B.Sc Agri / Chemistry)
                    responsible for quality.
                  </span>
                </div>
              </li>

              {/* Form O */}
              <li className="flex items-start gap-3">
                <Handshake className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Form O
                  </strong>
                  <span className="text-sm text-slate-400">
                    Certificate of Source from the manufacturer / supplier.
                  </span>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
              Bio-stimulant Focus
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              New rules require:
              <br />1. Heavy Metal Analysis
              <br />2. Toxicity Report
              <br />3. Efficacy Data from ICAR / State Agri Universities
            </p>

            <a
              href="#contact"
              className="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-600 transition"
            >
              Register Bio-stimulant
            </a>
          </div>

        </div>
      </div>
    </section>


        <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Filing Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileText size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              File application with Directorate of Agriculture (State / Central)
              along with challan fee.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <ClipboardCheck size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Inspection</h3>
            <p className="text-sm text-slate-500">
              Agriculture Inspector visits the storage premises for verification.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <IdCard size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">iFMS</h3>
            <p className="text-sm text-slate-500">
              Register on iFMS portal to obtain Importer ID
              (mandatory for customs).
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Grant</h3>
            <p className="text-sm text-slate-500">
              License issued (Form A2). Valid for 3–5 years depending on
              state rules.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Fertiliser-Import-License?</h2>
                    <p className="text-slate-500">
                        Fertiliser import is a 'Chemical Audit' by the government. CloudDesk ensures your technical specs match the Indian National Standards.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. FCO Specification Mapping</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          India only allows fertilisers that meet the exact specifications listed in the<strong> Fertiliser Control Order (FCO).</strong>
                          <strong>CloudDesk </strong>performs a Pre-Import Lab Analysis of your product's <strong>chemical composition (Nitrogen, Phosphorus, Potassium levels) </strong>to ensure it doesn't get rejected and destroyed at the port for being<strong> "Non-Standard."</strong>                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. State Trading Enterprise (STE) Liaison</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Major fertilisers like Urea can only be imported through<strong> STEs (like MMTC, STC, or IPL).</strong> For 
                          <strong>"Non-Urea" fertilisers (DAP, MOP, NPK), CloudDesk </strong>handles the Industrial Entrepreneur Memorandum<strong> (IEM) </strong>and the necessary registrations with the DoF to ensure you are recognized as an authorized importer.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Mandatory Port Sampling & Lab Testing</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Every shipment of fertiliser is sampled by a<strong> Fertiliser Inspector </strong>at the port. 
                          <strong>CloudDesk’s </strong>on-ground team coordinates with the <strong>Central Fertiliser Quality </strong>Control and Training Institute (CFQC&TI) labs to fast-track testing, preventing heavy demurrage while waiting for "Pass" certificates.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Specialized "Bio & Organic" Fast-Track</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026, there is a massive push for<strong> Organic and Bio-fertilisers.</strong> 
                          <strong>CloudDesk </strong>manages the specialized registration for<strong>Bio-stimulants and Organic Manures, </strong>which require different<strong> safety data sheets (SDS) </strong>and toxicological reports compared to chemical fertilisers.
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
                Can any company import fertilisers into India?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. You must be registered under the Fertiliser Control Order (FCO). You need a Certificate of Manufacture/Registration from the State Agriculture Department or the Central Government, depending on the type of fertiliser.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What is the difference between "Restricted" and "Free" fertiliser imports?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               "• Urea: Restricted. Can only be imported through designated State Trading Enterprises.
                • Complex Fertilisers (DAP/MOP/NPK): Generally ""Free"" but subject to strict FCO specifications and mandatory registration with the Department of Fertilisers."
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Do I need a license for "Growth Regulators" or "Bio-stimulants"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. As per the 2021 amendment to the FCO, all bio-stimulants must be registered. You cannot import them as "Plant Growth Promoters" anymore without a valid FCO registration number.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What happens if the fertiliser fails the lab test at the port?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               It is declared "Non-Standard." You will be forced to either re-export the entire cargo at your own cost or it will be seized and destroyed. CloudDesk’s Technical Verification service is designed specifically to prevent this.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Are there restrictions on the heavy metal content?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The FCO has strict limits on Lead (Pb), Cadmium (Cd), and Arsenic (As). If your fertiliser exceeds these parts-per-million (PPM) limits, it is banned.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a Customs Duty on fertilisers?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Most fertilisers attract a 5% Basic Customs Duty (BCD) and 5% GST. However, rates can vary for specialized organic fertilisers.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can an importer claim the government subsidy?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Generally, subsidies are paid to manufacturers/importers who are registered under the Nutrient Based Subsidy (NBS) scheme. To claim this, you must have your own storage godowns and a point-of-sale (POS) tracking system. CloudDesk helps you set up the iFMS (Integrated Fertiliser Management System) for subsidy tracking.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What documents are needed for Customs clearance?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                (1) FCO Registration Certificate, (2) Analysis Report from the supplier, (3) Bill of Lading, (4) Commercial Invoice, and (5) Pre-shipment Inspection Certificate (for certain types).
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
                    <li><a href="#" className="hover:text-white transition">Import License (FCO)</a></li>
                    <li><a href="#" className="hover:text-white transition">Bio-stimulant Reg</a></li>
                    <li><a href="#" className="hover:text-white transition">Plant Quarantine</a></li>
                    <li><a href="#" className="hover:text-white transition">iFMS Management</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">FCO 1985 PDF</a></li>
                    <li><a href="#" className="hover:text-white transition">Schedule I List</a></li>
                    <li><a href="#" className="hover:text-white transition">Bio-stimulant Guidelines</a></li>
                    <li><a href="#" className="hover:text-white transition">Subsidy Policy</a></li>
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

export default CloudDeskFertilizer;


// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Search, 
//   Globe, 
//   Shield, 
//   Activity, 
//   ChevronRight, 
//   FileText, 
//   CheckCircle2, 
//   AlertTriangle, 
//   Truck, 
//   Menu, 
//   X,
//   ArrowRight,
//   BarChart3,
//   Calculator,
//   Lock,
//   Clock,
//   User,
//   Phone,
//   Settings,
//   Cpu,
//   FlaskConical,
//   Leaf,
//   Layers,
//   Zap,
//   Plane,
//   ShoppingCart
// } from 'lucide-react';

// // --- Components ---

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [placeholder, setPlaceholder] = useState("Search HSN Code...");
//   const placeholderOptions = ["Search HSN Code...", "Check Duty Rates...", "Track License Status...", "Find Notification 12/2024..."];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % placeholderOptions.length;
//       setPlaceholder(placeholderOptions[index]);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <nav
//   className={`fixed w-full z-50 transition-all duration-300 ${
//     isScrolled
//       ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 py-3'
//       : 'bg-transparent py-5'
//   }`}
// >

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 group cursor-pointer">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center relative overflow-hidden">
//             <span className="text-white font-bold text-xl relative z-10">Q</span>
//             <div className="absolute inset-0 bg-white/20 blur-md rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-white font-bold text-xl tracking-tight leading-none">EXIMINQ</span>
//             <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Contact</span>
//           </div>
//         </div>

//         {/* Smart Search - Desktop */}
//         <div className="hidden md:flex flex-1 max-w-lg mx-8">
//           <div className="relative w-full group">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-4 w-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full leading-5 bg-slate-800/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-slate-800 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-all duration-300"
//               placeholder={placeholder}
//             />
//             <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//               <span className="text-xs text-slate-500 border border-slate-600 rounded px-1.5 py-0.5">⌘K</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Actions */}
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
//             <span className="text-xs text-slate-300 font-medium">DGFT System Online</span>
//           </div>
//           <button className="text-slate-300 hover:text-white font-medium text-sm transition-colors">Login</button>
//           <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5">
//             Get Early Access
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="text-slate-300 hover:text-white">
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Ticker = () => {
//   return (
//     <div className="bg-slate-950 border-b border-slate-800 py-2 overflow-hidden relative flex z-40">
//       <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
//       <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      
//       <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 text-xs font-mono">
//         <span className="text-slate-400">USD/INR: <span className="text-emerald-400 font-bold">₹84.50</span> <span className="text-emerald-500">▲ 0.2%</span></span>
//         <span className="text-slate-400">EUR/INR: <span className="text-red-400 font-bold">₹91.20</span> <span className="text-red-500">▼ 0.1%</span></span>
//         <span className="text-slate-400">DGFT: <span className="text-cyan-400">Notif 12/2024 Released</span></span>
//         <span className="text-slate-400">Customs: <span className="text-orange-400">IGCR Monthly Return Due</span></span>
//         <span className="text-slate-400">Container Index: <span className="text-emerald-400">$1,850</span></span>
//         {/* Duplicate for seamless loop */}
//         <span className="text-slate-400">USD/INR: <span className="text-emerald-400 font-bold">₹84.50</span> <span className="text-emerald-500">▲ 0.2%</span></span>
//         <span className="text-slate-400">EUR/INR: <span className="text-red-400 font-bold">₹91.20</span> <span className="text-red-500">▼ 0.1%</span></span>
//         <span className="text-slate-400">DGFT: <span className="text-cyan-400">Notif 12/2024 Released</span></span>
//         <span className="text-slate-400">Customs: <span className="text-orange-400">IGCR Monthly Return Due</span></span>
//       </div>
//     </div>
//   );
// };

// const Hero = () => {
//   const [role, setRole] = useState("Importers");
//   const roles = ["Importers", "Exporters", "CHAs", "Logistics"];

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % roles.length;
//       setRole(roles[index]);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-[90vh] flex flex-col pt-24 overflow-hidden bg-[#0a192f]">
//       {/* Abstract Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
//         {/* Grid lines */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
//         <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center relative z-10">
//         <div className="text-center max-w-4xl mx-auto">
//           <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-8 border border-slate-700 backdrop-blur-sm animate-fade-in-up">
//             <span className="flex h-2 w-2 relative">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//             </span>
//             <span className="text-cyan-300 text-xs font-semibold tracking-wide uppercase">AI-Powered Trade Intelligence</span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
//             Trade Compliance for <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 inline-block min-w-[300px]">
//               {role}
//             </span>
//           </h1>
          
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
//             The control tower for your global trade. Automate DGFT filings, track customs clearance, and audit compliance in real-time.
//           </p>

//           <div className="max-w-2xl mx-auto bg-slate-800/80 p-2 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md flex flex-col md:flex-row gap-2">
//             <div className="flex-1 relative">
//               <input 
//                 type="text" 
//                 placeholder="Enter HSN Code, Notification No, or Keyword..." 
//                 className="w-full h-12 bg-slate-900/50 rounded-xl px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-transparent focus:border-cyan-500/50 transition-all"
//               />
//               <div className="absolute right-3 top-3.5">
//                 <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">AI Search</span>
//               </div>
//             </div>
//             <button className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
//               Analyze
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           <div className="mt-12 flex items-center justify-center space-x-8 text-slate-500 text-sm">
//             <span>Trusted by 500+ Businesses</span>
//             <div className="h-4 w-px bg-slate-700"></div>
//             <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-emerald-500" /> ISO 27001 Certified</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Floating UI Elements (Decorative) */}
//       <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
//         <div className="bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl max-w-xs">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-xs text-slate-400">Advance License</span>
//             <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Active</span>
//           </div>
//           <div className="w-full bg-slate-700 h-1.5 rounded-full mb-2 overflow-hidden">
//             <div className="bg-cyan-500 h-1.5 rounded-full w-[75%] animate-load-bar"></div>
//           </div>
//           <div className="flex justify-between text-xs text-slate-300">
//             <span>Export Obligation</span>
//             <span>75% Met</span>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-1/4 right-10 hidden lg:block animate-float-delayed">
//         <div className="bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl max-w-xs">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
//               <AlertTriangle className="w-4 h-4 text-orange-500" />
//             </div>
//             <div>
//               <div className="text-sm font-semibold text-slate-200">Compliance Alert</div>
//               <div className="text-xs text-slate-400">RoDTEP rate changed for Ch. 73</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const BentoGrid = () => {
//   return (
//     <section className="py-24 bg-slate-950 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Services & Tools</h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//             Everything you need to manage <br className="hidden sm:block" />
//             <span className="text-blue-500">Cross-Border Trade</span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
//           {/* Card 1: DGFT Consultancy - Large */}
//           <div className="md:col-span-2 md:row-span-2 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10"></div>
//             <div className="p-8 h-full flex flex-col relative z-20">
//               <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                 <FileText className="w-6 h-6" />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">DGFT & Customs Consultancy</h3>
//               <p className="text-slate-400 mb-8 max-w-sm">Expert filing, license tracking & renewals. From IEC to Advance Authorisation closure.</p>
              
//               <div className="mt-auto space-y-3">
//                 {['Advance Authorisation', 'EPCG Scheme', 'RoDTEP Scrips', 'Import Monitoring (SIMS)', 'Certificate of Origin (COO)'].map((item, i) => (
//                   <div key={i} className="flex items-center text-slate-300 bg-slate-800/50 p-3 rounded-lg backdrop-blur-sm border border-slate-700/50 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
//                     <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3" />
//                     <span className="text-sm">{item}</span>
//                     <ChevronRight className="w-4 h-4 ml-auto text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Background graphic */}
//             <div className="absolute right-[-20%] bottom-[-10%] w-[80%] h-[80%] opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-700">
//                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//                   <path fill="#0F62FE" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.1C81.5,4.2,70.2,14.5,60.8,24.1C51.4,33.7,43.9,42.6,35.1,51.5C26.3,60.4,16.2,69.3,4.9,71.2C-6.4,73.1,-18.9,68,-30.9,60.8C-42.9,53.6,-54.4,44.3,-63.4,32.7C-72.4,21.1,-78.9,7.2,-78.2,-6.4C-77.5,-20,-69.6,-33.3,-59.2,-43.8C-48.8,-54.3,-35.9,-62,-22.6,-66.6C-9.3,-71.2,4.4,-72.7,17.4,-72.4L44.7,-76.4Z" transform="translate(100 100)" />
//                </svg>
//             </div>
//           </div>

//           {/* Card 2: CloudDesk SaaS - Wide */}
//           <div className="md:col-span-2 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
//              <div className="p-6 h-full flex flex-col relative z-20">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
//                       CloudDesk SaaS <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">New</span>
//                     </h3>
//                     <p className="text-sm text-slate-400 mt-1">Trade compliance on autopilot.</p>
//                   </div>
//                   <div className="w-10 h-10 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
//                     <Activity className="w-5 h-5" />
//                   </div>
//                 </div>
                
//                 {/* Mock Dashboard UI */}
//                 <div className="flex-1 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 mt-2 group-hover:bg-slate-800 transition-colors">
//                   <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700">
//                     <div className="h-2 w-16 bg-slate-600 rounded"></div>
//                     <div className="h-2 w-8 bg-emerald-500 rounded"></div>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
//                         <div className="h-1.5 w-24 bg-slate-600 rounded"></div>
//                       </div>
//                       <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                        <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 rounded-full bg-orange-400"></div>
//                         <div className="h-1.5 w-20 bg-slate-600 rounded"></div>
//                       </div>
//                       <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
//                     </div>
//                   </div>
//                   <div className="mt-4 flex gap-2">
//                     <div className="h-8 w-full bg-slate-700/50 rounded flex items-center justify-center text-[10px] text-slate-400">View Analytics</div>
//                   </div>
//                 </div>
//              </div>
//           </div>

//           {/* Card 3: Compliance Tools */}
//           <div className="md:col-span-1 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
//              <div className="p-6 h-full flex flex-col justify-between">
//                 <div>
//                    <div className="w-10 h-10 bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
//                       <Calculator className="w-5 h-5" />
//                    </div>
//                    <h3 className="text-lg font-bold text-white">Duty Calculator</h3>
//                    <p className="text-xs text-slate-400 mt-2">Calculate BCD, SWS & IGST instantly.</p>
//                 </div>
//                 <div className="mt-4 pt-4 border-t border-slate-800">
//                   <div className="flex items-center justify-between text-slate-300 text-sm group-hover:text-emerald-400 transition-colors cursor-pointer">
//                     <span>Try Now</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//              </div>
//           </div>

//           {/* Card 4: Audit & Risk */}
//           <div className="md:col-span-1 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
//              <div className="p-6 h-full flex flex-col justify-between">
//                 <div>
//                    <div className="w-10 h-10 bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-400 mb-4">
//                       <Shield className="w-5 h-5" />
//                    </div>
//                    <h3 className="text-lg font-bold text-white">Risk Audit</h3>
//                    <p className="text-xs text-slate-400 mt-2">Identify compliance gaps before customs does.</p>
//                 </div>
//                 <div className="mt-4 pt-4 border-t border-slate-800">
//                   <div className="flex items-center justify-between text-slate-300 text-sm group-hover:text-orange-400 transition-colors cursor-pointer">
//                     <span>Start Audit</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//              </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const ComparisonSection = () => {
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const containerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMove = (clientX) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
//       const percentage = (x / rect.width) * 100;
//       setSliderPosition(percentage);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) handleMove(e.clientX);
//   };

//   const handleTouchMove = (e) => {
//     handleMove(e.touches[0].clientX);
//   };

//   return (
//     <section className="py-24 bg-slate-950 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
//         <h2 className="text-3xl font-bold text-white mb-4">Chaos vs. Control</h2>
//         <p className="text-slate-400">See the difference organized compliance makes.</p>
//       </div>

//       <div className="max-w-5xl mx-auto px-4">
//         <div 
//           ref={containerRef}
//           className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-2xl border border-slate-700"
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onMouseLeave={() => setIsDragging(false)}
//           onMouseMove={handleMouseMove}
//           onTouchMove={handleTouchMove}
//         >
//           {/* RIGHT SIDE (CloudDesk - Optimized) */}
//           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
//              {/* New Tech Background Image */}
//              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
             
//              <div className="relative z-10 text-center p-8">
//                 <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400 backdrop-blur-sm border border-emerald-500/30">
//                   <CheckCircle2 className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">EXIMINQ CloudDesk</h3>
//                 <ul className="text-left text-slate-200 space-y-4 mt-8 max-w-xs mx-auto font-medium">
//                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>Automated License Tracking</li>
//                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>Digital Document Vault</li>
//                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>Real-time Notifications</li>
//                 </ul>
//              </div>
//              {/* Decorative UI Overlay */}
//              <div className="absolute top-10 right-10 opacity-20 transform rotate-12">
//                 <div className="w-64 h-80 bg-blue-500 rounded-xl blur-3xl"></div>
//              </div>
//           </div>

//           {/* LEFT SIDE (Manual - Chaos) - Clipped */}
//           <div 
//             className="absolute inset-0 bg-slate-200 border-r-4 border-white flex items-center justify-center overflow-hidden"
//             style={{ left: `${sliderPosition}%` }}
//           >
//              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
//              <div className="relative z-10 text-center p-8 w-full max-w-5xl mx-auto" style={{ minWidth: '100%' }}>
//                {/* Center content manually based on width to keep it static-looking while clipping happens */}
//                 <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
//                   <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
//                     <X className="w-8 h-8" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-800 mb-2">Traditional Filing</h3>
//                   <ul className="text-left text-slate-600 space-y-4 mt-8 max-w-xs mx-auto">
//                     <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Missed Deadlines</li>
//                     <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Lost Paperwork</li>
//                     <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Customs Penalties</li>
//                   </ul>
//                 </div>
//              </div>
//           </div>

//           {/* Slider Handle */}
//           <div 
//             className="absolute top-0 bottom-0 w-10 bg-transparent -ml-5 flex items-center justify-center pointer-events-none"
//             style={{ left: `${sliderPosition}%` }}
//           >
//             <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
//               <div className="flex gap-1">
//                  <div className="w-0.5 h-4 bg-slate-400"></div>
//                  <div className="w-0.5 h-4 bg-slate-400"></div>
//               </div>
//             </div>
//           </div>
          
//           {/* Instruction Label */}
//            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur text-white text-xs px-3 py-1 rounded-full pointer-events-none">
//             Drag to compare
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const SegmentSection = () => {
//   const [activeTab, setActiveTab] = useState('importer');

//   const content = {
//     importer: {
//       title: "Streamlined Customs Clearance",
//       desc: "Stop overpaying duties. Our automated HSN classification and exemption notification finder ensures you pay exactly what you owe, and not a rupee more.",
//       features: ["Duty Calculator with latest cess", "IGCR Monthly Returns", "Bond/BG Management"],
//       stat: "Avg. 15% Duty Saved"
//     },
//     exporter: {
//       title: "Maximize Export Incentives",
//       desc: "Never miss a claim. From RoDTEP to Drawback, we track every shipping bill to ensure your incentives are realized and credited to your ledger.",
//       features: ["RoDTEP & RoSCTL Filing", "e-BRC Realization Tracking", "Advance Auth Closure"],
//       stat: "100% Claim Ratio"
//     },
//     logistics: {
//       title: "Logistics Coordination",
//       desc: "Bridge the gap between freight forwarders and customs. Real-time container tracking merged with customs release status updates.",
//       features: ["Container Tracking", "Detention Calculator", "Port Delay Alerts"],
//       stat: "30% Faster Turnaround"
//     }
//   };

//   return (
//     <section className="py-24 bg-[#0a192f]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-white mb-6">Tailored for your Trade</h2>
//           <div className="inline-flex bg-slate-800/80 rounded-full p-1 backdrop-blur border border-slate-700">
//             {['importer', 'exporter', 'logistics'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeTab === tab 
//                     ? 'bg-blue-600 text-white shadow-lg' 
//                     : 'text-slate-400 hover:text-white'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}s
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[400px]">
//           {/* Background Pattern */}
//           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
//           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
//             <div className="flex-1 space-y-6">
//               <h3 className="text-3xl font-bold text-white transition-all duration-300 animate-fade-in">{content[activeTab].title}</h3>
//               <p className="text-slate-400 text-lg leading-relaxed">{content[activeTab].desc}</p>
              
//               <ul className="space-y-4 mt-6">
//                 {content[activeTab].features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-slate-300">
//                     <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400">
//                       <CheckCircle2 className="w-3 h-3" />
//                     </div>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-8 text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-2 group">
//                 Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="flex-1 w-full flex justify-center">
//               <div className="bg-slate-800/80 backdrop-blur border border-slate-600 p-8 rounded-2xl w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105">
//                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
//                     {content[activeTab].stat}
//                  </div>
//                  <p className="text-slate-400">Performance Metric</p>
//                  <div className="mt-6 h-2 w-full bg-slate-700 rounded-full overflow-hidden">
//                     <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[85%] animate-load-bar"></div>
//                  </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const IndustriesSection = () => {
//   const industries = [
//     {
//       title: "Pharmaceuticals",
//       icon: <Activity className="w-6 h-6 text-white" />,
//       desc: "Critical cold-chain clearance & regulatory approvals.",
//       tags: ["ADC NOC", "Advance License", "Cold Chain"],
//       color: "bg-rose-500",
//       shadowColor: "shadow-rose-500/20"
//     },
//     {
//       title: "Engineering & Auto",
//       icon: <Settings className="w-6 h-6 text-white" />,
//       desc: "Capital goods import at 0% duty under EPCG.",
//       tags: ["EPCG Scheme", "SION Fixation", "Project Imports"],
//       color: "bg-blue-600",
//       shadowColor: "shadow-blue-600/20"
//     },
//     {
//       title: "Electronics & IT",
//       icon: <Cpu className="w-6 h-6 text-white" />,
//       desc: "Mandatory registration for wireless & digital goods.",
//       tags: ["BIS (CRS)", "WPC (ETA)", "E-Waste (EPR)"],
//       color: "bg-cyan-500",
//       shadowColor: "shadow-cyan-500/20"
//     },
//     {
//       title: "Chemicals",
//       icon: <FlaskConical className="w-6 h-6 text-white" />,
//       desc: "Handling hazardous cargo & dual-use licensing.",
//       tags: ["SCOMET", "Haz-Waste", "Anti-Dumping"],
//       color: "bg-amber-500",
//       shadowColor: "shadow-amber-500/20"
//     },
//     {
//       title: "Textiles",
//       icon: <Layers className="w-6 h-6 text-white" />,
//       desc: "Maximizing rebates on export of garments.",
//       tags: ["RoSCTL", "Duty Drawback", "Fabric Sourcing"],
//       color: "bg-violet-500",
//       shadowColor: "shadow-violet-500/20"
//     },
//     {
//       title: "Food & Agro",
//       icon: <Leaf className="w-6 h-6 text-white" />,
//       desc: "Perishable cargo clearance with FSSAI compliance.",
//       tags: ["FSSAI", "Phytosanitary", "Quota Mgmt"],
//       color: "bg-emerald-500",
//       shadowColor: "shadow-emerald-500/20"
//     },
//     {
//       title: "Solar & Renewables",
//       icon: <Zap className="w-6 h-6 text-white" />,
//       desc: "Project imports for power plants & ALMM compliance.",
//       tags: ["Project Import", "ALMM", "Bose Exemptions"],
//       color: "bg-yellow-500",
//       shadowColor: "shadow-yellow-500/20"
//     },
//     {
//       title: "Defense & Aerospace",
//       icon: <Plane className="w-6 h-6 text-white" />,
//       desc: "Handling SCOMET licensing for dual-use technology.",
//       tags: ["SCOMET", "End User Cert", "Restricted Items"],
//       color: "bg-slate-600",
//       shadowColor: "shadow-slate-600/20"
//     },
//     {
//       title: "E-Commerce",
//       icon: <ShoppingCart className="w-6 h-6 text-white" />,
//       desc: "Simplified clearance for courier & postal exports.",
//       tags: ["CSB-V Filing", "PEMS", "Return Mgmt"],
//       color: "bg-indigo-500",
//       shadowColor: "shadow-indigo-500/20"
//     }
//   ];

//   return (
//     <section className="py-24 bg-slate-950 relative border-t border-slate-900">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-white mb-4">Industries We Empower</h2>
//             <p className="text-slate-400 max-w-2xl mx-auto">
//               Specialized compliance workflows designed for the unique regulatory challenges of your sector.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {industries.map((item, idx) => (
//               <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1">
//                 <div className="flex items-start justify-between mb-6">
//                    <div
//   className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} shadow-lg ${item.shadowColor}`}
// >

//                       {item.icon}
//                    </div>
//                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                 <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
//                 <div className="flex flex-wrap gap-2">
//                    {item.tags.map((tag, tIdx) => (
//                       <span key={tIdx} className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-md">
//                         {tag}
//                       </span>
//                    ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//        </div>
//     </section>
//   )
// }

// const StatsBar = () => {
//   return (
//     <section className="bg-blue-600 py-12">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
//              <div>
//                 <div className="text-4xl font-bold text-white mb-1">500+</div>
//                 <div className="text-blue-200 text-sm uppercase tracking-wide">Businesses</div>
//              </div>
//              <div>
//                 <div className="text-4xl font-bold text-white mb-1">₹200Cr</div>
//                 <div className="text-blue-200 text-sm uppercase tracking-wide">Duty Saved</div>
//              </div>
//              <div>
//                 <div className="text-4xl font-bold text-white mb-1">12k+</div>
//                 <div className="text-blue-200 text-sm uppercase tracking-wide">Licenses Issued</div>
//              </div>
//              <div>
//                 <div className="text-4xl font-bold text-white mb-1">0</div>
//                 <div className="text-blue-200 text-sm uppercase tracking-wide">Penalties</div>
//              </div>
//           </div>
//        </div>
//     </section>
//   )
// }

// const Footer = () => {
//   return (
//     <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
//           <div className="col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">Q</span>
//               </div>
//               <span className="text-white font-bold text-xl">EXIMINQ</span>
//             </div>
//             <p className="text-slate-400 max-w-xs mb-6">
//               The modern operating system for global trade. We replace chaos with compliance.
//             </p>
//             <div className="flex space-x-4">
//                {/* Social placeholders */}
//                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors">in</div>
//                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors">x</div>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-white font-semibold mb-4">Platform</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li className="hover:text-cyan-400 cursor-pointer">CloudDesk SaaS</li>
//               <li className="hover:text-cyan-400 cursor-pointer">Duty Calculator</li>
//               <li className="hover:text-cyan-400 cursor-pointer">HSN Search</li>
//               <li className="hover:text-cyan-400 cursor-pointer">Pricing</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-4">Compliance</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li className="hover:text-cyan-400 cursor-pointer">DGFT Services</li>
//               <li className="hover:text-cyan-400 cursor-pointer">Customs Clearance</li>
//               <li className="hover:text-cyan-400 cursor-pointer">BIS Registration</li>
//               <li className="hover:text-cyan-400 cursor-pointer">AEO Certification</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 74000 96950</li>
//               <li className="flex items-center gap-2">clouddesk@eximinq.in</li>
//               <li className="flex items-center gap-2 mt-4 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Support Online</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500">
//           <div>© 2025 EXIMINQ CloudDesk. All rights reserved.</div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <span className="hover:text-white cursor-pointer">Privacy Policy</span>
//             <span className="hover:text-white cursor-pointer">Terms of Service</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // --- Main App Component ---

// const App = () => {
//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30">
//       <Navbar />
//       <Ticker />
//       <Hero />
//       <BentoGrid />
//       <ComparisonSection />
//       <SegmentSection />
//       <IndustriesSection />
//       <StatsBar />
//       <Footer />
      
//       {/* Global CSS for Animations */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 6s ease-in-out 3s infinite;
//         }

//         @keyframes load-bar {
//            0% { width: 0%; }
//            100% { width: 75%; }
//         }
//         .animate-load-bar {
//            animation: load-bar 1.5s ease-out forwards;
//         }
        
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;