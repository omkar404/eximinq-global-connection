import TopBar from "../components/CloudDeskCustomsAdjudication/TopBar";
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
  FileText,
  Gavel,
  Scale,
  Clock,
  Tag,
  Calculator,
  Certificate,
  ShieldCheck,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCustomsAdjudication/MainNavbar";

const CloudDeskCustomsAdjudication = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Customs Adjudication?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Adjudication</strong> is the legal process by which a
              Departmental Authority (like a Joint Commissioner or Principal
              Commissioner) determines whether an importer/exporter has violated
              the Customs Act, 1962.
            </p>

            <p className="mb-4">
              It typically starts with a{" "}
              <strong>Show Cause Notice (SCN)</strong>, asking you to explain
              why duty should not be demanded or penalties imposed. This is
              followed by a written reply and a{" "}
              <strong>Personal Hearing (PH)</strong>. The process concludes with
              an <strong>Order-In-Original (OIO)</strong>, which can be accepted
              or appealed against.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-legal-600 font-bold uppercase tracking-wider text-sm">
              Legal Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How We Defend You
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-legal-600 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-legal-100 rounded-lg flex items-center justify-center text-legal-600 text-2xl mb-4">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                SCN Reply Drafting
              </h3>
              <p className="text-sm text-slate-600">
                We analyze allegations, study case laws, and draft a strong
                point-by-point rebuttal to the Show Cause Notice.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-600 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 text-2xl mb-4">
                <Gavel className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Personal Hearing
              </h3>
              <p className="text-sm text-slate-600">
                We present your case before the Adjudicating Authority, clarify
                technical issues, and argue for dropping proceedings.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-2xl mb-4">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Appeals</h3>
              <p className="text-sm text-slate-600">
                If the OIO goes against you, we file appeals with Commissioner
                (Appeals) or CESTAT to challenge the decision.
              </p>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg max-w-3xl mx-auto">
            <h4 className="font-bold text-red-900 text-lg mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              Critical Timeline
            </h4>
            <p className="text-sm text-red-800">
              You typically have <strong>30 days</strong> to reply to an SCN.
              Delay can result in an ex-parte order. Act fast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Common Dispute Areas
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Customs authorities often raise demands based on interpretation
                differences. We specialize in handling:
              </p>

              <ul className="space-y-4">
                {/* HS Code */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Tag className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Classification (HS Code)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Disputes where Customs claims a higher duty HS Code
                      applies.
                    </p>
                  </div>
                </li>

                {/* SVB */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Calculator className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Valuation (SVB)</h4>
                    <p className="text-xs text-slate-400">
                      Rejection of transaction value citing related party
                      transactions or undervaluation.
                    </p>
                  </div>
                </li>

                {/* FTA */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <ShieldCheck className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">FTA Denial</h4>
                    <p className="text-xs text-slate-400">
                      Denial of duty benefits due to questions on Country of
                      Origin (CAROTAR rules).
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="relative h-80 bg-white rounded-xl overflow-hidden shadow-2xl flex items-center justify-center text-center p-8">
              <div className="text-slate-800">
                <FileText className="text-legal-600 w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold">Document Audit</h3>
                <p className="text-sm text-slate-500 mt-2">
                  We review your Import Docs, Contracts, and Payment Trails to
                  build a solid defense.
                </p>
              </div>
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
                Can I attend the Personal Hearing myself?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180 w-5 h-5" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, you can. However, Customs Law is complex. Having a
                professional consultant or lawyer who understands the nuances of
                the Customs Act, Valuation Rules, and case precedents
                significantly improves your chances of a favorable outcome.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if I ignore the SCN?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180 w-5 h-5" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                If you fail to reply or appear for hearings (usually 3
                opportunities are given), the officer will pass an{" "}
                <strong>Ex-Parte Order</strong> based on available records,
                likely confirming the demand for duty and imposing maximum
                penalties.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can penalties be reduced?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180 w-5 h-5" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. Under Section 28 of the Customs Act, if you pay the duty
                along with interest and a reduced penalty (15% or 25%) within 30
                days of the SCN/Order, the proceedings can be concluded. We
                advise on whether to opt for this or contest the case.
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
            <ul class="space-y-2 text-sm">
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition">
                    Customs Act 1962
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    Valuation Rules
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    CESTAT Orders
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    Penalty Provisions
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
                  EU GSP Rules
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Invoice Declaration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  HS Code Finder
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Helpdesk
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
