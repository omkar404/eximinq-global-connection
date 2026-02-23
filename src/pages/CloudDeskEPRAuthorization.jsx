// import TopBar from "../components/CloudDeskEPRAuthorization/TopBar";
import Navbar from "../components/CloudDeskEPRAuthorization/Navbar";
import Hero from "../components/CloudDeskEPRAuthorization/Hero";
import Fees from "../components/CloudDeskEPRAuthorization/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle,
  HardHat,
  FlaskConical,
  Laptop,
  Footprints,
  Baby,
  BatteryCharging,
  Factory,
  FileSpreadsheet,
  Phone,
  Mail,
  MapPin,
  CircleDot,
  BottleWine,
  Repeat,
  Calculator,
  Upload,
  Recycle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEPRAuthorization/MainNavbar";

const CloudDeskEPRAuthorization = () => {
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
              What is Extended Producer Responsibility?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Extended Producer Responsibility (EPR)</strong> places the
              responsibility of managing product waste on the Producer,
              Importer, and Brand Owner (PIBO). The core idea is "Polluter
              Pays". If you introduce plastic packaging, electronics, batteries,
              or tyres into the Indian market, you are responsible for their
              collection and recycling at the end of their life cycle.
            </p>
            [Image of Circular Economy Diagram]
            <p className="mb-4">
              Compliance is mandatory under various Waste Management Rules
              notified by the Ministry of Environment, Forest and Climate Change
              (MoEFCC). The Central Pollution Control Board (CPCB) monitors this
              through a centralized online portal. Non-compliance attracts heavy
              Environmental Compensation (fines) and stops imports.
            </p>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Mandatory Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Which EPR Applies to You?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* E-Waste */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:shadow-xl transition group">
              <div
                className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 
                            text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition"
              >
                <Laptop className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Waste</h3>
              <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                E-Waste Management Rules, 2016
              </p>
              <p className="text-sm text-slate-600">
                For importers/producers of IT equipment, electronics, solar
                panels, and medical devices. Targets depend on sales history.
              </p>
            </div>

            {/* Plastic Waste */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-500 hover:shadow-xl transition group">
              <div
                className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4 
                            text-yellow-600 text-2xl group-hover:bg-yellow-600 group-hover:text-white transition"
              >
                <BottleWine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Plastic Packaging
              </h3>
              <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                PWM Rules, 2016 (Amended)
              </p>
              <p className="text-sm text-slate-600">
                Applies to Category I–IV packaging. Nearly all importers
                bringing packed goods fall under this compliance.
              </p>
            </div>

            {/* Battery Waste */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition group">
              <div
                className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 
                            text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition"
              >
                <BatteryCharging className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Battery Waste
              </h3>
              <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                BW Management Rules, 2022
              </p>
              <p className="text-sm text-slate-600">
                Covers Lead Acid, Li-ion, and button cells. Applies to
                manufacturers and importers of products containing batteries.
              </p>
            </div>

            {/* Waste Tyres */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-slate-700 hover:shadow-xl transition group">
              <div
                className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mb-4 
                            text-slate-700 text-2xl group-hover:bg-slate-700 group-hover:text-white transition"
              >
                <CircleDot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Waste Tyres
              </h3>
              <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                Hazardous Waste Rules
              </p>
              <p className="text-sm text-slate-600">
                For importers of new or waste tyres. Requires buying EPR
                certificates from recyclers to meet mandatory recycling targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Regulated Industries
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The list of mandatory products is expanding rapidly. Check if
                your product falls under these major categories currently under
                Quality Control Orders (QCOs).
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Steel & Iron */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <HardHat className="text-accent-400 w-5 h-5" />
                  <span>Steel & Iron</span>
                </div>

                {/* Chemicals */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <FlaskConical className="text-accent-400 w-5 h-5" />
                  <span>Chemicals</span>
                </div>

                {/* Electronics */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Laptop className="text-accent-400 w-5 h-5" />
                  <span>Electronics</span>
                </div>

                {/* Footwear */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Footprints className="text-accent-400 w-5 h-5" />
                  <span>Footwear</span>
                </div>

                {/* Toys */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Baby className="text-accent-400 w-5 h-5" />
                  <span>Toys</span>
                </div>

                {/* Batteries */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <BatteryCharging className="text-accent-400 w-5 h-5" />
                  <span>Batteries</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Special Focus: FMCS
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                <strong>
                  Foreign Manufacturers Certification Scheme (FMCS)
                </strong>{" "}
                allows overseas factories to use the ISI mark.
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Requires Authorized Indian Representative (AIR).
                </li>

                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Mandatory Factory Visit by BIS Officers.
                </li>

                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Performance Guarantee Bond required.
                </li>
              </ul>

              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-accent-500 text-brand-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition"
                >
                  Appoint Indian Rep
                </a>
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
              Compliance Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Steps to Compliance
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Sign Up</h3>
              <p className="text-sm text-slate-500">
                Create account on CPCB portal using GST/PAN.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Fill PIBO application, upload sales/import data.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Certificate</h3>
              <p className="text-sm text-slate-500">
                Receive EPR Registration Certificate (valid 1–5 years).
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Fulfill</h3>
              <p className="text-sm text-slate-500">
                Collect waste or buy EPR credits from recyclers.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-2xl font-bold text-white mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Returns</h3>
              <p className="text-sm text-slate-500">
                File quarterly & annual returns to confirm targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="targets" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Managing Targets & Credits
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Meeting physical collection targets is difficult for most
                importers. The government allows{" "}
                <strong>EPR Credit Trading</strong>. You can buy certificates
                from authorized recyclers to offset your liability.
              </p>

              <div className="bg-brand-800 p-6 rounded-lg border border-brand-700">
                <h4 className="font-bold text-lg mb-4 text-accent-400">
                  Our Solutions:
                </h4>

                <ul className="space-y-4">
                  {/* Credit Exchange */}
                  <li className="flex items-start gap-3">
                    <Repeat className="mt-1 w-5 h-5" />
                    <div>
                      <strong className="block text-white">
                        Credit Exchange
                      </strong>
                      <span className="text-sm text-slate-400">
                        We connect you with certified recyclers to purchase
                        valid EPR credits at best market rates.
                      </span>
                    </div>
                  </li>

                  {/* Liability Assessment */}
                  <li className="flex items-start gap-3">
                    <Calculator className="mt-1 w-5 h-5" />
                    <div>
                      <strong className="block text-white">
                        Liability Assessment
                      </strong>
                      <span className="text-sm text-slate-400">
                        Accurate calculation of plastic/e-waste obligation using
                        import invoices.
                      </span>
                    </div>
                  </li>

                  {/* Return Filing */}
                  <li className="flex items-start gap-3">
                    <Upload className="mt-1 w-5 h-5" />
                    <div>
                      <strong className="block text-white">
                        Return Filing
                      </strong>
                      <span className="text-sm text-slate-400">
                        Timely filing of quarterly returns to avoid CPCB
                        notices.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Box */}
            <div className="relative h-80 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center text-center p-8">
              <div>
                <Recycle className="text-green-500 w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">
                  Don't have a Recycling Plant?
                </h3>
                <p className="text-slate-400 mt-2">
                  No problem. Buy credits and stay compliant.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block bg-white text-brand-900 font-bold py-2 px-6 rounded hover:bg-slate-200 transition"
                >
                  Buy Credits
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* --- WHY CLOUDDESK SECTION (EPR) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Epr-Authorization?</h2>
      <p className="text-slate-500">
        
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Plastic Waste EPR (PIBOs)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under the <strong>Plastic Waste Management (Amendment) Rules, 2024/2026</strong>, all Producers, Importers, and Brand Owners (PIBOs) must register across four categories: <strong>Rigid plastics, Flexible packaging, Multi-layered plastic packaging,</strong> and <strong>Compostable plastics</strong>. CloudDesk manages the <strong>"Plastic Credit" purchases</strong> from authorized recyclers on the CPCB portal to offset your import weight, ensuring you hit your <strong>100% collection targets</strong> before the June 30th return deadline.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. E-Waste & Electronics EPR</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Applicable to all <strong>Electrical and Electronic Equipment (EEE)</strong> listed in Schedule I — covering IT, Telecom, Consumer Electronics, and now Medical Devices. A <strong>RoHS self-declaration</strong> is mandatory alongside the EPR plan. In 2026, collection targets have risen to <strong>70% of average life-cycle sales</strong>. CloudDesk calculates these complex targets so you don't over-purchase credits.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Battery Waste EPR</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Covers all battery types — <strong>Lead-acid, Lithium-ion, Nickel-cadmium</strong> — regardless of shape, volume, or use (EVs, Portables, Industrial). The 2026 rules mandate recovery of specific materials like <strong>Lithium, Cobalt, and Lead</strong>. CloudDesk verifies that your recycling partner is <strong>CPCB-authorized for your specific battery chemistry</strong> — a common mistake that leads to certificate rejection.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (EPR) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Who needs EPR?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Any entity <strong>Importing, Manufacturing, or Selling</strong> products under their own brand that generate plastic, electronic, or battery waste. If you import a laptop, you need <strong>E-Waste EPR</strong> (for the device) and <strong>Plastic EPR</strong> (for the packaging).
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I clear Customs without EPR in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. Customs authorities now verify EPR registration numbers in real-time. Missing EPR leads to <strong>"Environmental Compensation" (EC)</strong> fines starting at <strong>₹1 Lakh</strong> and scaling to <strong>₹1 Crore</strong>.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long is the registration valid?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Initial registration is typically valid for <strong>5 years</strong>, with mandatory <strong>annual returns</strong> and <strong>quarterly data updates</strong>.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I have to physically collect the waste?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. Most importers fulfill their "Responsibility" by buying <strong>EPR Certificates (Credits)</strong> from CPCB-registered recyclers. CloudDesk facilitates these trades on the official portal.
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
                  E-Waste EPR
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Plastic EPR
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Battery EPR
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  BIS Registration
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
                  CPCB Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Recycler List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPR Rules 2022
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Plastic Categories
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

export default CloudDeskEPRAuthorization;
