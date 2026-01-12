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

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Cloud Desk: Your trusted partner for DGFT, Customs, and
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
