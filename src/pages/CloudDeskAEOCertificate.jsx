import { useState } from "react";
// import TopBar from "../components/CloudDeskAeoCertification/TopBar";
import Navbar from "../components/CloudDeskAeoCertification/Navbar";
import Hero from "../components/CloudDeskAeoCertification/Hero";
import Fees from "../components/CloudDeskAeoCertification/Fees";
import {
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
  CheckCircle,
  FileBadge,
  Shield,
  Star,
  Truck,
  CalendarCheck,
  Percent,
  SearchCheck,
  CheckCheck,
  FileText,
  UploadCloud,
  Building2,
  CircleCheckBig,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskAeoCertification/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskAeoCertification/ModalEnroll";

const CloudDeskAeoCertification = () => {
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
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal}/>

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
              What is Authorized Economic Operator (AEO)?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Authorized Economic Operator (AEO)</strong> is a trade
              facilitation program led by the World Customs Organization (WCO)
              and Indian Customs. It certifies a business as a "secure and
              reliable" trading partner.
            </p>
            <p className="mb-4">
              In simple terms, AEO is like a <strong>VIP status</strong> for
              Importers, Exporters, and Logistics partners. Once certified,
              Customs treats your shipments with higher trust, resulting in
              faster clearance, fewer physical examinations, and financial perks
              like deferred duty payment.
            </p>
          </div>
        </div>
      </section>

      <section id="tiers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              AEO Tiers & Eligibility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AEO T1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-slate-400 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="text-slate-500" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T1
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  Document Based
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    For Importers/Exporters
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Verification of Documents only
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    No Physical Site Audit required
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Grant of status in ~30 days
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO T2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-accent-500 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Shield className="text-yellow-700" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T2
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                  Gold Standard
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Requires Physical Site Verification
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Needs T1 or 3+ years experience
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Deferred Duty Payment enabled
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    High Safety & Security Standards
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO T3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-emerald-600 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Star className="text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T3
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
                  Platinum Status
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Highest Level Accreditation
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Must hold T2 for 2+ years
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Zero Bank Guarantee
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    ID Cards for Key Personnel
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO LO */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Truck className="text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO LO
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded">
                  Logistics Operators
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    For CHA, Freight Forwarders, Liners
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Strict Security Protocols required
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Bank Guarantee Waiver for transshipment
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Preferential treatment at customs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Why Apply?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Key Business Benefits
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <Truck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Direct Port Delivery</h3>
              <p className="text-sm text-slate-500">
                Skip the CFS. Cargo reaches your factory directly, reducing
                logistics costs drastically.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <CalendarCheck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Deferred Duty</h3>
              <p className="text-sm text-slate-500">
                Delay duty payment (T2/T3 benefit) to improve working capital
                and cash flow.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <Percent className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lower BG</h3>
              <p className="text-sm text-slate-500">
                Get 50% to 100% reduction in Bank Guarantee requirements under
                various schemes.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <SearchCheck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Less Scrutiny</h3>
              <p className="text-sm text-slate-500">
                Reduced inspections and Green Channel clearance for faster cargo
                movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Certification Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Steps to AEO Status
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <CheckCheck size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Gap Analysis</h3>
              <p className="text-sm text-slate-300">
                We audit your current SOPs against AEO security standards.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Documentation</h3>
              <p className="text-sm text-slate-300">
                Preparation of SOP manuals, security policy, and Annexures.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <UploadCloud size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Online Filing</h3>
              <p className="text-sm text-slate-300">
                Submission of application on the AEO India portal.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <Building2 size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Site Audit</h3>
              <p className="text-sm text-slate-300">
                Customs Officers visit your premises for physical verification
                (T2/LO).
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-white mx-auto mb-4 border-4 border-white"
              >
                <CircleCheckBig size={34} />
              </div>
              <h3 className="text-lg font-bold mb-2">Certification</h3>
              <p className="text-sm text-slate-300">
                Issuance of AEO Certificate valid for 3 to 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees setShowEnrollModal={setShowEnrollModal} />

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">AEO is a 100-page audit of your company’s soul. CloudDesk ensures there are zero "Red Flags" before the Customs team arrives.</h2>
                    {/* <p className="text-slate-500">"       Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                           Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. The "Pre-Audit" Diagnostic</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                        <strong> AEO rejection</strong> blacklists you from re-applying for a year. 
                        <strong>CloudDesk</strong> performs a Gap Analysis of your <strong>financial solvency, safety standards, and cargo security. </strong>
                         We identify weaknesses—like an expired fire <strong>NOC or a missing CCTV</strong> angle—and fix them before we submit the application to the <strong>AEO Cell.</strong>
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Tier-Advancement Roadmap</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Most companies stop at Tier <strong>1. CloudDesk creates a Progression Path.</strong> 
                          We help you move from <strong>T1 (Document-based) to T2 (Physical-site verification) and finally T3 (3 years of T2 status),</strong> 
                          unlocking progressively higher benefits like 100% bank guarantee waivers and deferred duty payments.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Global MRA Integration</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          India has <strong>Mutual Recognition Agreements (MRAs)</strong> with countries like the<strong> US, Korea, and UAE. </strong>
                          <strong>CloudDesk ensures your AEO status</strong> is mapped to these international partners, so your cargo gets <strong>"VIP Treatment" </strong>at the foreign port, not just in India.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Real-Time Compliance Monitoring</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                        <strong>  AEO </strong>status can be revoked for a single legal violation. <strong>CloudDesk’s </strong>Compliance Shield monitors your <strong>IEC, GST, and ICEGATE 24/7.</strong>
                          If a show-cause notice is issued, we alert you instantly to resolve it before it compromises your AEO standing.
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
                What is the difference between AEO Tier 1, 2, and 3?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               "Tier 1 (T1): Document-based. No physical site visit. Best for SMEs.
                Tier 2 (T2): Requires a physical site audit by Customs. Higher benefits.
                Tier 3 (T3): The highest level. Only for those who have held T2 for 3 years (or 2 years for T2 holders who are also T1).
                AEO-LO: For ChAs, Logistics Providers, and Warehouse Owners."

              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long do I need to be in business to apply for AEO?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You must have handled at least 25 documents (Bills of Entry or Shipping Bills) in the last financial year and have been in business for at least 3 financial years.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a fee for AEO certification?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The government does not charge a fee for AEO certification. However, the costs involved are related to upgrading your security (CCTV, Fencing) and hiring consultants like CloudDesk to manage the complex documentation.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "Bank Guarantee (BG) Waiver" benefit?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              "This is the #1 reason to get AEO.
               AEO T1: 50% BG waiver.
               AEO T2: 100% BG waiver.
               AEO T3: 100% BG waiver.
               This saves you lakhs in bank commission and blocked capital."

              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "Deferred Duty Payment"? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Reserved for AEO T2 and T3 holders. You don't pay duty for every shipment. Instead, you pay in batches twice a month. It’s like a 15-day interest-free loan from the government on every import.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does AEO status speed up my clearance?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. AEO holders are granted "Direct Port Delivery" (DPD) and "Direct Port Entry" (DPE) by default. Your cargo moves through the Green Channel, meaning minimal physical examination and immediate "Out of Charge.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long is the AEO certificate valid?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               "• AEO T1 & T2: Valid for 3 years.
                  AEO T3: Valid for 5 years.
                  AEO LO: Valid for 3 years.
                  CloudDesk manages your AEO Renewal 6 months before expiry to ensure zero downtime in your benefits."

              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can my AEO status be suspended?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, if you are involved in a Customs offense (smuggling, mis-declaration) or if your financial solvency fails. CloudDesk’s Solvency Tracker ensures your balance sheets meet the AEO criteria year after year.
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
                  AEO Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Shipping Bill Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Payment
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
                  AEO Circulars
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  SOP Templates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Security Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Client Success Stories
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

export default CloudDeskAeoCertification;
