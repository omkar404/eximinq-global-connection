import { useState } from "react";
// import TopBar from "../components/CloudDeskExportHouse/TopBar";
import Navbar from "../components/CloudDeskExportHouse/Navbar";
import Hero from "../components/CloudDeskExportHouse/Hero";
import Fees from "../components/CloudDeskExportHouse/Fees";
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
  Star,
  CheckCheck,
  FileSignature,
  Stamp,
  Truck,
  Warehouse,
  Medal,
  StepForward,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskExportHouse/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskExportHouse/ModalEnroll";

const CloudDeskExportHouse = () => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  const Stars = ({ count }) => (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
      ))}
    </div>
  );

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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is a Status Holder?
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Status Holder</strong> certificate is a recognition
              granted by the Government of India to exporters who have
              demonstrated leadership in international trade and have
              contributed to the country's foreign exchange earnings.
            </p>
            [Image of Star Export House Logo]
            <p className="mb-4">
              It is not just a badge of honor; it is a practical tool for ease
              of doing business. Exporters are categorized from{" "}
              <strong>One Star</strong> to <strong>Five Star</strong> based on
              their export performance (FOB value) over the current and previous
              three financial years.
            </p>
          </div>
        </div>
      </section>

      <section id="thresholds" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Eligibility Criteria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Export Performance Thresholds
            </h2>
            <p className="text-slate-500 mt-2">
              Based on FOB Value in US Dollars (Million).
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-white uppercase bg-brand-900">
                <tr>
                  <th className="px-6 py-4">Status Category</th>
                  <th className="px-6 py-4">Export Performance</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-brand-700">
                    One Star Export House
                  </td>
                  <td className="px-6 py-4 font-bold">USD 3 Million</td>
                  <td className="px-6 py-4">
                    <Stars count={1} />
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-brand-700">
                    Two Star Export House
                  </td>
                  <td className="px-6 py-4 font-bold">USD 15 Million</td>
                  <td className="px-6 py-4">
                    <Stars count={2} />
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-brand-700">
                    Three Star Export House
                  </td>
                  <td className="px-6 py-4 font-bold">USD 50 Million</td>
                  <td className="px-6 py-4">
                    <Stars count={3} />
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-brand-700">
                    Four Star Export House
                  </td>
                  <td className="px-6 py-4 font-bold">USD 200 Million</td>
                  <td className="px-6 py-4">
                    <Stars count={4} />
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-brand-700">
                    Five Star Export House
                  </td>
                  <td className="px-6 py-4 font-bold">USD 800 Million</td>
                  <td className="px-6 py-4">
                    <Stars count={5} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bonus Note */}
          <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-lg text-center max-w-4xl mx-auto">
            <h4 className="font-bold text-green-800 text-lg mb-2 flex justify-center items-center gap-2">
              <CheckCheck size={20} />
              Double Weightage Benefit
            </h4>
            <p className="text-sm text-green-700">
              MSME units, ISO certified units, and Agri/Fruit/Veg exporters get
              <strong> Double Weightage</strong>. Exporting{" "}
              <strong>$1.5 Million</strong> qualifies for One Star (1.5 × 2 = 3
              Million).
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold uppercase tracking-wider text-sm">
              Privileges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Why Become a Status Holder?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex gap-4 hover:bg-white/20 transition">
              <FileSignature size={32} className="text-gold-400 shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Bank Guarantee Waiver
                </h4>
                <p className="text-sm text-slate-300">
                  Exemption from furnishing Bank Guarantee (BG) for schemes like
                  Advance Authorisation and EPCG. Only a simple LUT is required.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex gap-4 hover:bg-white/20 transition">
              <Stamp size={32} className="text-gold-400 shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Self Certification</h4>
                <p className="text-sm text-slate-300">
                  Authority to self-certify the non-preferential Certificate of
                  Origin (CoO). No need to visit agencies for every shipment.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex gap-4 hover:bg-white/20 transition">
              <Truck size={32} className="text-gold-400 shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Faster Customs Clearance
                </h4>
                <p className="text-sm text-slate-300">
                  Preferential treatment and faster clearance at Customs. Often
                  treated as AEO-T1 equivalent for certain facilitations.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex gap-4 hover:bg-white/20 transition">
              <Warehouse size={32} className="text-gold-400 shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Export Warehousing</h4>
                <p className="text-sm text-slate-300">
                  Permission to establish Export Warehouses as per Department of
                  Revenue guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Application Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How to Apply?
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Audit</h3>
              <p className="text-sm text-slate-500">
                Compile export data (e-BRCs) for the current and last 3
                financial years.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Calculate</h3>
              <p className="text-sm text-slate-500">
                Apply double weightage for MSME / ISO eligible exports to meet
                threshold.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">File</h3>
              <p className="text-sm text-slate-500">
                Submit online application on DGFT portal with CA Certificate.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                <Medal size={28} className="text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Certify</h3>
              <p className="text-sm text-slate-500">
                DGFT issues the Status Holder Certificate electronically. Valid
                for 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

              {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
                    <section className="py-20 bg-white">
                      <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Star-Export-House?</h2>
                          <p className="text-slate-500">
                            Reaching $3 Million is only half the battle. Proving it to the DGFT's automated system is where the errors happen.
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Feature 1 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                              <AlertTriangle size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">1. The "Double Weightage" Optimization</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               If you are an MSME, a Manufacturing unit with <strong>ISO/BIS,</strong> or located in the North East, your exports count as 2x for the 1-Star Status. 
                               <strong>CloudDesk’s</strong>Weightage Calculator automatically identifies these <strong>"Bonus Points," </strong>
                               helping you achieve 1-Star Status with just $1.5 Million in actual exports instead of $3 Million.
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 2 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                              <CheckCircle size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">2. Automated Export Data Scrubbing</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               The <strong>DGFT portal</strong> auto-populates data from your <strong>Shipping Bills,</strong> but it often misses Service Exports or Deemed Exports. 
                               <strong>CloudDesk </strong>performs a Manual vs. System Audit to ensure every dollar of your foreign exchange is counted, preventing you from missing a star category by a <strong>few thousand dollars.</strong>
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 3 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                              <Building size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">3. Bank Guarantee (BG) Waiver Lock</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               The biggest benefit of Star Status is the 100% exemption from Bank Guarantees for <strong>DGFT schemes (EPCG, Advance Auth).</strong>
                               <strong>CloudDesk’s </strong>dashboard links your Status Certificate directly to your license applications, ensuring the "BG Waiver" is applied automatically so your capital stays in your bank, not blocked in a FD.
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 4 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                              <ShieldUser size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">4. Self-Certification Empowerment</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               For 3-Star Houses and above, you can self-certify your <strong>Certificate of Origin. </strong>
                               CloudDesk provides the digital template and compliance log for this, allowing you to ship goods without waiting for a Chamber of Commerce stamp.
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
                      What are the new 2026 thresholds for Star Status?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      "• One Star: US$ 3 Million
                       • Two Star: US$ 15 Million
                       • Three Star: US$ 50 Million
                       • Four Star: US$ 200 Million
                       • Five Star: US$ 800 Million"

                    </p>
                  </details>
      
                  {/* Question 2 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      Can I use my export performance from 5 years ago?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      No. You must show performance in at least 2 out of the last 4 years (including the current year). 
                      CloudDesk helps you pick the "Best 2 Years" to maximize your chances.
                    </p>
                  </details>
      
                  {/* Question 3 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      Does "Double Weightage" apply to all Star categories?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     No. Double weightage (counting $1 as $2) is strictly for achieving the One Star status. 
                     For Two Star and above, only actual FOB value is counted.
                    </p>
                  </details>
      
                  {/* Question 4 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      What is the "Bank Guarantee" benefit exactly?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     Normally, for schemes like EPCG, you must give the government a Bank Guarantee (100% of the duty saved). Status Holders are exempted 100% from this requirement (unless specifically flagged as a risk), saving you lakhs in bank commissions and blocked margins.
                    </p>
                  </details>
      
                  {/* Question 5 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                     Can a Star Export House establish its own Warehouse?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     Two Star Houses and above are permitted to establish export warehouses as per Dept. of Revenue guidelines. This is a game-changer for managing global supply chains.
                    </p>
                  </details>
      
                  {/* Question 6 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      What is the "Skilling & Mentorship" obligation?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     In 2026, Status Holders are expected to mentor new entrepreneurs. 
                     A 2-Star House must train 5 candidates annually, while a 5-Star House must train 50. CloudDesk helps you document this training to ensure your status remains valid during renewal.
                    </p>
                  </details>
      
                  {/* Question 7 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      How long is the certificate valid?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      It is valid for 5 years or until the end of the current Foreign Trade Policy, whichever is earlier. CloudDesk monitors the "Policy Sunset" dates so you don't lose your status during a policy transition.
                    </p>
                  </details>
      
                  {/* Question 8 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    What can lead to the cancellation of my Star Status?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     (1) Defaulting on an Export Obligation (EPCG/Advance Auth), (2) Mis-declaration of export values, (3) Fraudulent CA certificates. CloudDesk’s Audit Log keeps your records clean so you never face a "Show Cause Notice."
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
                  Status Holder
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP 2023 Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Notifications
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Weightage Criteria
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Certificate Validity
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

export default CloudDeskExportHouse;
