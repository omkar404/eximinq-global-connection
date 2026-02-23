// import TopBar from "../components/CloudDeskCustomsAdjudication/TopBar";
import Navbar from "../components/CloudDeskCustomsAdjudication/Navbar";
import Hero from "../components/CloudDeskCustomsAdjudication/Hero";
import Fees from "../components/CloudDeskCustomsAdjudication/Fees";
import {
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

{/* --- WHY CLOUDDESK SECTION (PRC) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Policy Relaxation ?</h2>
      <p className="text-slate-500">
        The PRC is a discretionary committee. You don't win on 'requests'; you win on 'Justification' and 'Public Interest'.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Drafting the "Genuine Hardship" Narrative</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The committee only acts if you prove that following the policy would cause <strong>"Genuine Hardship"</strong> due to reasons beyond your control (e.g., pandemic, war, sudden policy change, or massive system glitches). CloudDesk drafts a <strong>high-impact Statement of Facts</strong> that connects your struggle to the broader <strong>"Public Interest."</strong>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. ANF-2D Precision Filing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The application is filed via <strong>Ayaat Niryaat Form 2D</strong>. We ensure every Shipping Bill, e-BRC, and previous rejection letter is mapped. In 2026, the portal allows up to 10 attachments; we prioritize the most <strong>"lethal" evidence</strong> to ensure the committee sees the core issue first.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Personal Hearing (PH) Representation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If the case is complex, we request a Personal Hearing. In 2026, these are mostly conducted via <strong>video conferencing</strong>. We prepare your technical representative to answer the <strong>"Why should we break the rule for you?"</strong> question from the Director General.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Liaison with the "Policy-Z" Section</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Once the PRC minutes are published and your case is <strong>"Recommended,"</strong> the battle isn't over. We follow up with the <strong>Policy-Z section at DGFT HQ</strong> to ensure the formal <strong>"Policy Relaxation Order"</strong> is sent to your Regional RA so they can finally issue your license or EODC.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (PRC) --- */}
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
          Generally, yes. The decision of the Policy Relaxation Committee is communicated to the RA for implementation. If rejected, further legal recourse may involve filing a <strong>Writ Petition in the High Court</strong>, but administrative remedies within DGFT are usually exhausted at this stage.
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
          It refers to situations <strong>beyond the control of the exporter</strong>, such as natural calamities, sudden policy changes by foreign governments, or financial insolvency of the buyer. <strong>Mere negligence or ignorance of law</strong> is usually not considered genuine hardship.
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
          The PRC typically <strong>meets once a month</strong>. Once the application is complete and filed, it may take <strong>1–3 months</strong> to get listed for a meeting and receive the minutes.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What kind of cases does the PRC handle?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Common cases include:<br />
          • <strong>Extension of Export Obligation (EO) period</strong> after all regular extensions are exhausted.<br />
          • <strong>Revalidation of expired Duty Credit Scrips</strong> (MEIS/SEIS/RoDTEP).<br />
          • Acceptance of Shipping Bills where the <strong>"Intent to claim benefits"</strong> was marked "No" by mistake.<br />
          • <strong>Clubbing of licenses</strong> that don't meet the standard "same HSN" criteria.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is "Public Interest" in a PRC context?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If your failure to export causes <strong>massive job losses</strong>, or if a government system (like ICEGATE) was <strong>down during your deadline</strong>, the PRC considers relaxation to be in the "Public Interest."
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I apply to the PRC if I just forgot the deadline?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. <strong>Mere negligence is not "Genuine Hardship."</strong> You must show a reason that a "reasonable person" could not have avoided.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the fee for a PRC application in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>Fresh Application:</strong> ₹2,000.<br />
          • <strong>Review Application</strong> (if rejected once): ₹5,000.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long does a PRC decision take?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The committee usually meets <strong>once or twice a month</strong>. From filing to the publication of Minutes of the Meeting (MoM), it typically takes <strong>45 to 90 days</strong>.
        </p>
      </details>

      {/* FAQ 9 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I track my PRC case online?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Under <strong>"Submitted Applications"</strong> on the DGFT portal, you can see the <strong>"Life Cycle"</strong> of your PRC file.
        </p>
      </details>

      {/* FAQ 10 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          My case was "Deferred." What does that mean?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It means the committee wants <strong>more data or a clarification</strong>. You will receive a <strong>Deficiency Letter</strong>. You must respond within the stipulated time, or the case will be <strong>"Rejected"</strong> in the next meeting.
        </p>
      </details>

      {/* FAQ 11 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          If the PRC rejects my case, is it over?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You can file a <strong>Review Application</strong> (with the ₹5,000 fee) if you have <strong>new evidence</strong> that wasn't presented the first time. If the Review is also rejected, your only remaining option is a <strong>Writ Petition in the High Court</strong>.
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
