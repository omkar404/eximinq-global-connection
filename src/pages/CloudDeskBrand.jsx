import { useState } from "react";
// import TopBar from "../components/CloudDeskBrand/TopBar";
import Navbar from "../components/CloudDeskBrand/Navbar";
import Hero from "../components/CloudDeskBrand/Hero";
import Fees from "../components/CloudDeskBrand/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  HandCoins, 
  Globe,
  Package, 
  Bell,
  RegexIcon
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBrand/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskBrand/ModalEnroll";

const CloudDeskBrand = () => {
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
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Register a Trademark?
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            A <strong>Trademark</strong> distinguishes your goods and services
            from those of your competitors. It can be a word, logo, symbol, or
            even a sound. Registration under the{" "}
            <strong>Trade Marks Act, 1999</strong> gives you exclusive rights to
            use the mark and take legal action against infringement.
          </p>

          <p className="mb-4">
            Without registration, you only have common law rights which are
            harder to enforce. A registered trademark is an intangible asset
            that adds valuation to your company and builds customer trust.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          {/* Legal Protection */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <ShieldCheck
              size={40}
              className="mx-auto text-brand-500 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Legal Protection</h3>
            <p className="text-sm text-slate-500">
              Exclusive right to use the ®️ symbol. Deter copycats.
            </p>
          </div>

          {/* Asset Value */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <HandCoins
              size={40}
              className="mx-auto text-brand-500 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Asset Value</h3>
            <p className="text-sm text-slate-500">
              Trademarks can be sold, franchised, or licensed for royalties.
            </p>
          </div>

          {/* Global Priority */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Globe size={40} className="mx-auto text-brand-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Global Priority</h3>
            <p className="text-sm text-slate-500">
              Use Indian filing date as priority for international registration
              (Madrid Protocol).
            </p>
          </div>
        </div>
      </div>
    </section>


    <section id="classes" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Classification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Know Your Class (1–45)
          </h2>
          <p className="text-slate-500 mt-2">
            Trademarks are filed under specific classes of Goods &amp; Services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Goods */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-8 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Package size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Goods (Class 1–34)
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Physical Products
                </p>
              </div>
            </div>

            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span>Class 5</span>
                <span>Pharmaceuticals</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 9</span>
                <span>Electronics &amp; Software</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 25</span>
                <span>Clothing &amp; Footwear</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 30</span>
                <span>Food (Coffee, Rice, Spices)</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-8 border-yellow-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <Bell size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Services (Class 35–45)
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Business &amp; Professional
                </p>
              </div>
            </div>

            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span>Class 35</span>
                <span>Advertising, Business Mgmt</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 41</span>
                <span>Education &amp; Training</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 42</span>
                <span>IT Services &amp; Technology</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Class 43</span>
                <span>Restaurants &amp; Hotels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Not sure? Use our free search tool.
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 text-brand-600 font-bold hover:underline"
          >
            Help Me Choose Class
          </a>
        </div>
      </div>
    </section>

      <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold uppercase tracking-wider text-sm">
            Registration Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            From Filing to Certificate
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-2xl font-bold text-legal-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <p className="text-sm text-slate-400">
              Detailed search to ensure uniqueness.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-2xl font-bold text-legal-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-400">
              Application (TM-A) submission. Get TM Number instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-2xl font-bold text-legal-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Exam</h3>
            <p className="text-sm text-slate-400">
              Registry examines the mark. Objection may be raised.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-2xl font-bold text-legal-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Publish</h3>
            <p className="text-sm text-slate-400">
              Published in TM Journal for 4 months for opposition.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <RegexIcon size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Registered</h3>
            <p className="text-sm text-slate-400">
              Certificate issued. Valid for 10 years.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>

        <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I start using the ™️ symbol immediately?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Yes, as soon as we file the application and get the TM Application
              Number, you can use the <strong>™️</strong> symbol. You can use the{" "}
              <strong>®️</strong> symbol only after the Registration Certificate
              is issued (approx 6–12 months).
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What if my Trademark gets objected?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Objections are common. We will draft a legal reply (Examination
              Report Reply) addressing the concerns raised by the registry. If
              required, we also represent you in hearings.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Is the registration valid globally?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              No, trademark protection is territorial. An Indian trademark
              protects you only in India. However, you can use your Indian
              application as a basis to apply for international protection under
              the <strong>Madrid Protocol</strong>.
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
                    <li><a href="#" class="hover:text-white transition">Trademark Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Copyright Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">Design Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Legal Adjudication</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Class Search Tool</a></li>
                    <li><a href="#" class="hover:text-white transition">Public Search</a></li>
                    <li><a href="#" class="hover:text-white transition">Objection Codes</a></li>
                    <li><a href="#" class="hover:text-white transition">Journal Archive</a></li>
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

export default CloudDeskBrand;