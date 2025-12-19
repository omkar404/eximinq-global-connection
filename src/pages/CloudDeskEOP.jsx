import { useState } from "react";
// import TopBar from "../components/CloudDeskEOP/TopBar";
import Navbar from "../components/CloudDeskEOP/Navbar";
import Hero from "../components/CloudDeskEOP/Hero";
import Fees from "../components/CloudDeskEOP/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Coins,
  Calculator,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEOP/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskEOP/ModalEnroll";

const CloudDeskEOP = () => {
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Extend EOP?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              Every export license comes with a fixed{" "}
              <strong>Export Obligation Period (EOP)</strong>. For Advance
              Authorisation, it is typically 18 months. For EPCG, it is 6 years.
            </p>
            [Image of EOP Timeline Diagram]
            <p className="mb-4">
              If you fail to complete the export obligation within this time,
              you are liable to pay Customs Duty + Interest (15%). However, the
              Foreign Trade Policy allows for an{" "}
              <strong>Extension of EOP</strong> upon payment of a Composition
              Fee. This is far cheaper than paying the duty with interest.
            </p>
          </div>
        </div>
      </section>

      <section id="types" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Scheme Rules
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Extension Criteria
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Advance Authorisation */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Advance Authorisation
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  Original EOP: 18 Months
                </p>

                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    <span>
                      <strong>1st Extension (6 Months):</strong> Allowed by
                      paying Composition Fee of 0.5% of unfulfilled EO value.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    <span>
                      <strong>2nd Extension (6 Months):</strong> Allowed by
                      paying Composition Fee of 0.5% (Total 12 months extension
                      possible).
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-500 mt-1" size={18} />
                    <span>
                      Further extension requires approaching the{" "}
                      <strong>Policy Relaxation Committee (PRC)</strong>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* EPCG Scheme */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  EPCG Scheme
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  Original EOP: 6 Years
                </p>

                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    <span>
                      <strong>Block-wise Extension:</strong> If Block 1 target
                      (4 years) is missed, it can be regularized by paying a 2%
                      fee.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    <span>
                      <strong>Overall Extension:</strong> One extension of up to
                      2 years may be granted.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Coins className="text-accent-500 mt-1" size={18} />
                    <span>
                      <strong>Fee:</strong> 2% of proportionate duty saved
                      amount on unfulfilled EO.
                    </span>
                  </li>
                </ul>

                {/* CTA */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fees" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Composition Fee Structure
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The cost of extension is calculated based on the unfulfilled
                export value. It is critical to calculate this accurately to
                avoid rejection by the Regional Authority (RA).
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-bold text-accent-400">Advance License</h4>
                  <p className="text-sm">
                    0.5% of the shortfall in FOB value of Export Obligation.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-bold text-accent-400">EPCG License</h4>
                  <p className="text-sm">
                    2% of the proportionate duty saved amount corresponding to
                    unfulfilled EO.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl text-center">
              <Calculator className="mx-auto text-brand-600 mb-6" size={56} />

              <h3 className="text-xl font-bold mb-2">Example Calculation</h3>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                <strong>Advance Auth Shortfall:</strong> ₹ 1 Crore
                <br />
                <strong>Extension Fee (0.5%):</strong> ₹ 50,000
                <br />
                <span className="text-xs text-red-500">
                  (vs Duty + Interest which could be ₹ 30 Lakhs+)
                </span>
              </p>

              {/* CTA */}
              <a
                href="#contact"
                class="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition"
              >
                Get Precise Calculation
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
            DGFT Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Audit</h3>
            <p className="text-sm text-slate-500">
              Determine total exports completed versus obligation pending.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Fee Payment</h3>
            <p className="text-sm text-slate-500">
              Calculate and pay the composition fee on the DGFT portal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              File the amendment request online for EOP extension.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
                            mx-auto mb-4 border-4 border-white shadow-sm">
              <Check className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Approval</h3>
            <p className="text-sm text-slate-500">
              Regional Authority approves and updates license validity in DGFT.
            </p>
          </div>

        </div>
      </div>
    </section>

    <Fees/>

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
                    <li><a href="#" class="hover:text-white transition">Advance Authorisation</a></li>
                    <li><a href="#" class="hover:text-white transition">EPCG Scheme</a></li>
                    <li><a href="#" class="hover:text-white transition">EODC Redemption</a></li>
                    <li><a href="#" class="hover:text-white transition">Clubbing of Licenses</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                                  <li><a href="#" class="hover:text-white transition">Fee Calculator</a></li>
                    <li><a href="#" class="hover:text-white transition">Public Notices</a></li>
                    <li><a href="#" class="hover:text-white transition">Policy Circulars</a></li>
                    <li><a href="#" class="hover:text-white transition">Amnesty Scheme</a></li>
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

export default CloudDeskEOP;
