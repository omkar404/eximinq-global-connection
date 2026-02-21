// import TopBar from "../components/CloudDeskCustomsAdjudication/TopBar";
import Navbar from "../components/CloudDeskCustomsAdjudication/Navbar";
import Hero from "../components/CloudDeskCustomsAdjudication/Hero";
import Fees from "../components/CloudDeskCustomsAdjudication/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCustomsAdjudication/MainNavbar";

const CloudDeskCustomsAdjudication = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is the Policy Relaxation Committee?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>DGFT</strong> (Directorate General of Foreign Trade)
              operates strictly according to the Foreign Trade Policy (FTP).
              Regional Authorities (RAs) have limited powers and cannot deviate
              from the policy text.
            </p>
            <p className="mb-4">
              However, <strong>Para 2.58</strong> of the FTP empowers the DGFT
              to relax any provision of the policy in cases of{" "}
              <strong>"Genuine Hardship"</strong> or{" "}
              <strong>"Public Interest"</strong>. The{" "}
              <strong>Policy Relaxation Committee (PRC)</strong>, chaired by the
              DGFT in New Delhi, is the body authorized to consider such
              requests. It is often the last resort for exporters to save their
              licenses from cancellation or heavy penalties.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-legal-600 font-bold uppercase tracking-wider text-sm">
              Common Disputes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              When Should You Approach PRC?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Case 1 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-legal-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                EO Period Extension
              </h3>
              <p className="text-sm text-slate-600">
                When the standard Export Obligation period (plus extensions
                allowed at RA level) has expired, but you have valid reasons
                (like global recession, factory strike, or court orders) for
                non-fulfillment.
              </p>
            </div>

            {/* <!-- Case 2 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Clubbing of Licenses
              </h3>
              <p className="text-sm text-slate-600">
                Request to club two or more Advance Authorisations or EPCG
                licenses that do not strictly meet the clubbing criteria (e.g.,
                different ports of registration or issued under different policy
                periods).
              </p>
            </div>

            {/* <!-- Case 3 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Excess Import
              </h3>
              <p className="text-sm text-slate-600">
                Regularization of excess inputs imported duty-free by mistake,
                or imports made after the validity of the license has expired.
              </p>
            </div>

            {/* <!-- Case 4 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-accent-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                EODC Rejection
              </h3>
              <p className="text-sm text-slate-600">
                If the RA rejects your redemption application due to technical
                mismatch in Shipping Bills (e.g., Description mismatch or unit
                quantity code errors).
              </p>
            </div>

            {/* <!-- Case 5 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Late Document Submission
              </h3>
              <p className="text-sm text-slate-600">
                Condonation of delay in submitting the Installation Certificate
                for EPCG or export documents for Advance Authorisation beyond
                the prescribed time limit.
              </p>
            </div>

            {/* <!-- Case 6 --> */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pre-Import Condition
              </h3>
              <p className="text-sm text-slate-600">
                Issues related to the violation of "Pre-import" conditions in
                Advance Authorisation where inputs were used replenishment basis
                instead of actual user.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Roadmap to Relief
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              The Representation Process
            </h2>
            <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
              Success in PRC depends entirely on how well "Genuine Hardship" is
              proven. A simple letter is not enough.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Analysis</h3>
              <p className="text-sm text-slate-300">
                Review of the Rejection Letter from RA and identifying the
                lapse.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Drafting</h3>
              <p className="text-sm text-slate-300">
                Preparation of ANF-2D and a detailed petition proving hardship.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Filing</h3>
              <p className="text-sm text-slate-300">
                Online submission to DGFT HQ with application fee (₹ 2,000).
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Meeting</h3>
              <p className="text-sm text-slate-300">
                Personal Hearing at Udyog Bhawan (if required) to argue the
                case.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm">
                <Check size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Order</h3>
              <p className="text-sm text-slate-300">
                PRC issues minutes. RA implements the decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is the PRC decision final?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Generally, yes. The decision of the Policy Relaxation Committee
                is communicated to the RA for implementation. If rejected,
                further legal recourse may involve filing a Writ Petition in the
                High Court, but administrative remedies within DGFT are usually
                exhausted at this stage.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What constitutes "Genuine Hardship"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It refers to situations beyond the control of the exporter, such
                as natural calamities, sudden policy changes by foreign
                governments, or financial insolvency of the buyer. Mere
                negligence or ignorance of law is usually not considered genuine
                hardship.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take for a decision?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The PRC typically meets once a month. Once the application is
                complete and filed, it may take 1–3 months to get listed for a
                meeting and receive the minutes.
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
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition">
                    PRC Appeal
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    SCN Reply
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    Personal Hearing
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    DGFT Liaison
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP Para 2.58
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  PRC Meeting Minutes
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  ANF 2D Form
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Public Notices
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

export default CloudDeskCustomsAdjudication;
