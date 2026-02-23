import { useState } from "react";
// import TopBar from "../components/CloudDeskIEM/TopBar";
import Navbar from "../components/CloudDeskIEM/Navbar";
import Hero from "../components/CloudDeskIEM/Hero";
import Fees from "../components/CloudDeskIEM/Fees";
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
  UserPlus,
  FileEdit,
  CreditCard,
  SearchCheck,
  FileCheck2,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIEM/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskIEM/ModalEnroll";

const CloudDeskIEM = () => {
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
                <h2 className="text-3xl font-bold text-industry-900 mb-4">What is IEM?</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    The <strong>Industrial Entrepreneur Memorandum (IEM)</strong> is a registration required for industrial undertakings in India that are <strong>not</strong> covered under the Compulsory Licensing provisions of the Industries (Development and Regulation) Act, 1951, and have investments exceeding the MSME threshold.
                </p>
                [Image of IEM Classification Diagram]
                <p className="mb-4">
                    It is filed with the <strong>Department for Promotion of Industry and Internal Trade (DPIIT)</strong>. IEM serves as a statistical data point for the government but acts as a crucial identity document for the business to obtain bank loans, import capital goods, and apply for state incentives.
                </p>
            </div>
        </div>
    </section>

    <section id="parts" className="py-20 bg-industry-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Two-Stage Filing</span>
                <h2 className="text-3xl md:text-4xl font-bold text-industry-900 mt-2">The IEM Process</h2>
                <p className="text-slate-500 mt-2">IEM is filed in two distinct stages of your business lifecycle.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* <!-- Part A --> */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-600 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-3xl font-bold">A</div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">IEM Part A</h3>
                            <p className="text-sm font-semibold text-slate-500">Intent to Manufacture</p>
                        </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Filed <strong>before</strong> setting up the industry. It signifies your intention to establish a new industrial undertaking, expand an existing unit, or manufacture a new product.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-3 mb-8">
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Required for Land Allotment</li>
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Required for Project Financing</li>
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Validates Investment Proposal</li>
                    </ul>
                    <a href="#contact" className="block w-full bg-brand-600 text-white text-center font-bold py-3 rounded hover:bg-brand-700 transition">File Part A</a>
                </div>

                {/* <!-- Part B --> */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-accent-500 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-accent-100 text-accent-700 rounded-full flex items-center justify-center text-3xl font-bold">B</div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">IEM Part B</h3>
                            <p className="text-sm font-semibold text-slate-500">Commencement of Production</p>
                        </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Filed <strong>after</strong> commercial production has started. It updates the actual investment figures and production capacity. This acts as the final registration.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-3 mb-8">
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Proof of Operational Status</li>
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Essential for Export Incentives</li>
                        <li><i className="fas fa-check text-green-500 mr-2"></i> Required for State Subsidy Claims</li>
                    </ul>
                    <a href="#contact" className="block w-full bg-accent-500 text-industry-900 text-center font-bold py-3 rounded hover:bg-accent-600 transition">File Part B</a>
                </div>
            </div>
            
            <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
                <h4 className="font-bold text-blue-900 text-lg mb-2"><i className="fas fa-info-circle mr-2"></i> Note on Amendments</h4>
                <p className="text-sm text-blue-800">Any modification to IEM Part A (like change in location, company name, or capacity) must be filed as an amendment request before Part B is filed.</p>
            </div>
        </div>
    </section>


    <section id="documents" class="py-20 bg-brand-900 text-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Required Documentation</h2>
                    <p class="text-slate-300 mb-8 leading-relaxed">
                        Accurate documentation is key to avoiding queries from DPIIT. The list varies slightly for Part A and Part B.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="bg-brand-800 p-4 rounded-lg border-l-4 border-accent-400">
                            <h4 class="font-bold text-lg mb-2">For Part A</h4>
                            <ul class="text-sm text-slate-400 space-y-1">
                                <li>• Certificate of Incorporation / MOA / AOA</li>
                                <li>• Authorization Letter for Signatory</li>
                                <li>• Brief Project Report (Investment & Product Details)</li>
                            </ul>
                        </div>
                        <div class="bg-brand-800 p-4 rounded-lg border-l-4 border-green-500">
                            <h4 class="font-bold text-lg mb-2">For Part B</h4>
                            <ul class="text-sm text-slate-400 space-y-1">
                                <li>• Copy of IEM Part A Acknowledgement</li>
                                <li>• Date of Commencement of Commercial Production</li>
                                <li>• Actual Investment in Plant & Machinery (CA Certified)</li>
                                <li>• Pollution Control Board (PCB) Consent</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-white text-slate-800 rounded-xl p-8 shadow-2xl border border-gray-200">
                    <h3 class="text-xl font-bold mb-4 text-industry-900 border-b pb-4">Licensing Exception</h3>
                    <p class="text-sm text-slate-600 mb-6">
                        <strong>Important:</strong> If your industry falls under the "Compulsory Licensing" list (e.g., Defense, Explosives, Hazardous Chemicals), you cannot file IEM. You must apply for an <strong>Industrial License (IL)</strong> instead.
                    </p>
                    <a href="#contact" class="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-industry-700 transition">
                        Check IL Applicability
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
            G2B Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-industry-900 mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <UserPlus className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Profile</h3>
            <p className="text-sm text-slate-500">
              Create User Profile on DPIIT G2B Portal with DSC.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <FileEdit className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Drafting</h3>
            <p className="text-sm text-slate-500">
              Fill Part A/B form. Map NIC Codes for products.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <CreditCard className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Payment</h3>
            <p className="text-sm text-slate-500">
              Pay government fee (approx ₹ 1,000) online.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <SearchCheck className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Scrutiny</h3>
            <p className="text-sm text-slate-500">
              DPIIT verifies details. Queries raised if any.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <FileCheck2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Ack</h3>
            <p className="text-sm text-slate-500">
              IEM Acknowledgement issued instantly upon approval.
            </p>
          </div>
        </div>
      </div>
    </section>


{/* --- WHY CLOUDDESK SECTION (IEM) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for IEM Registration?</h2>
      <p className="text-slate-500">
        IEM is a 'Declaration' that becomes a 'Permission.' If your NIC codes are wrong, your future expansions will be blocked.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Strategic NIC Code Mapping</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your IEM is linked to specific <strong>NIC (National Industrial Classification) Codes</strong>. CloudDesk ensures your codes are perfectly aligned with your actual production and the <strong>Foreign Direct Investment (FDI) Policy</strong>. A mismatch here can block <strong>foreign funding or export incentives</strong>.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Two-Phase Compliance (Part A & B)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            We manage the full lifecycle. <strong>Part A</strong> is filed when you intend to set up the unit (the "Planning" phase). <strong>Part B</strong> is filed once you commence commercial production (the "Execution" phase). CloudDesk ensures Part B is filed within the mandatory <strong>6-month window</strong> of starting production.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Industrial License (IL) Filter</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Some industries (defense, hazardous chemicals, tobacco) still require a <strong>mandatory Industrial License</strong>. CloudDesk performs a <strong>Regulatory Filter</strong> to see if you can use the simple IEM route or if you must go through the rigorous <strong>IL Licensing process</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. G2B Portal Mastery</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The <strong>DPIIT's G2B (Government to Business) portal</strong> is the only way to file in 2026. We handle the digital signatures, document uploads (MoA/AoA, Land docs), and the tracking of the <strong>Acknowledgment Number</strong> — which is your de-facto license number.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (IEM) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Who needs to file an IEM?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Any industrial undertaking that: (1) is <strong>NOT an MSME</strong> (i.e., investment in plant/machinery &gt; ₹50 Crore), (2) is in the <strong>"Non-Licensed" sector</strong> (most manufacturing), and (3) is not covered under the MSMED Act.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can an MSME file an IEM?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. MSMEs must register under <strong>Udyam</strong>. If an MSME grows and crosses the <strong>₹50Cr/₹250Cr limit</strong>, they must transition from Udyam to IEM.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is IEM required for Service-based industries?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. IEM is strictly for <strong>Industrial Undertakings (Manufacturing/Processing)</strong>. Services usually fall under Shop &amp; Establishment or Udyam (for service MSMEs).
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          When should I file IEM Part A?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          As soon as you have <strong>"Taken Effective Steps"</strong> to set up the unit — this means you have acquired land, placed orders for machinery, or secured financing.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the deadline for filing Part B?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must file Part B (Commencement of Production) within <strong>6 months of starting commercial operations</strong>. Failure to do so can lead to the <strong>cancellation of your Part A acknowledgment</strong>.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What if my investment amount changes from Part A to Part B?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          This is common. Part B allows you to report the <strong>actual final investment and employment figures</strong>. CloudDesk manages the <strong>"Variation Analysis"</strong> to ensure the deviation is within acceptable limits.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is IEM a "Certificate of Origin"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. IEM is an <strong>industrial license</strong>. However, a copy of your IEM is often required by the DGFT when you apply for a <strong>Certificate of Origin or Export Incentives</strong>.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What are the fees for IEM registration in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The government fee is currently <strong>₹1,000 for Part A</strong>. There is <strong>no fee for Part B</strong>, but professional management is key to ensuring the data matches your GST and Income Tax filings.
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
                    <li><a href="#" class="hover:text-white transition">IEM Part A</a></li>
                    <li><a href="#" class="hover:text-white transition">IEM Part B</a></li>
                    <li><a href="#" class="hover:text-white transition">Industrial License</a></li>
                    <li><a href="#" class="hover:text-white transition">Udyam Registration</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">NIC Code List</a></li>
                    <li><a href="#" class="hover:text-white transition">DPIIT Manual</a></li>
                    <li><a href="#" class="hover:text-white transition">Compulsory Lic. List</a></li>
                    <li><a href="#" class="hover:text-white transition">Investment Limit</a></li>
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

export default CloudDeskIEM;