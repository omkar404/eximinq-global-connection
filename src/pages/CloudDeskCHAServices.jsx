import TopBar from "../components/CloudDeskCHAServices/TopBar";
import Navbar from "../components/CloudDeskCHAServices/Navbar";
import Hero from "../components/CloudDeskCHAServices/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Lock,
  Search,
  Warehouse,
  Stamp,
  FlaskConical,
  Truck,
  CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCHAServices/MainNavbar";

const CloudDeskCHAServices = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              On-Ground Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Core CHA Activities
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-indigo-600 group-hover:text-white transition"
              >
                <Search size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Physical Examination
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                We coordinate with the Shed Appraiser for physical verification
                of cargo. Our team ensures packages are opened, inspected, and
                repacked safely in the presence of Customs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-orange-600 group-hover:text-white transition"
              >
                <Warehouse size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Factory Stuffing
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                For exporters, we arrange GST officers for supervision of
                container stuffing at your factory premises, ensuring seamless
                sealing and movement.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-green-600 group-hover:text-white transition"
              >
                <Stamp size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                OOC Generation
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                We resolve queries from the Docks Appraiser and secure the Gate
                Pass for delivery after OOC (Out of Charge).
              </p>
            </div>

            {/* Service 4 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-blue-600 group-hover:text-white transition"
              >
                <Lock size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Self Sealing
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Guidance on One-Time Permission for Self-Sealing. We help you
                use RFID e-Seals to bypass port examination.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-red-600 group-hover:text-white transition"
              >
                <FlaskConical size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                FSSAI / PQ / AQ
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Coordination with FSSAI, Plant Quarantine, and Animal Quarantine
                departments for sampling and NOCs.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center text-2xl mb-6
              group-hover:bg-gray-600 group-hover:text-white transition"
              >
                <Truck size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Dock Stuffing
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Arranging labour and equipment for stuffing at CFS for exporters
                who cannot stuff at factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ports" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Boots on the Ground
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                A CHA is only as good as their presence at the port. We have
                dedicated field teams stationed at all major gateways to handle
                emergencies and ensure compliance.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Port 1 */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-400 text-xl" />
                  <div>
                    <h4 className="font-bold">Nhava Sheva (JNPT)</h4>
                    <span className="text-xs text-slate-400">Team of 15+</span>
                  </div>
                </div>

                {/* Port 2 */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-400 text-xl" />
                  <div>
                    <h4 className="font-bold">Mundra Port</h4>
                    <span className="text-xs text-slate-400">Team of 10+</span>
                  </div>
                </div>

                {/* Port 3 */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-400 text-xl" />
                  <div>
                    <h4 className="font-bold">Mumbai Air Cargo</h4>
                    <span className="text-xs text-slate-400">
                      24/7 Operations
                    </span>
                  </div>
                </div>

                {/* Port 4 */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-400 text-xl" />
                  <div>
                    <h4 className="font-bold">Delhi Air Cargo</h4>
                    <span className="text-xs text-slate-400">
                      Specialized Team
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-accent-500 text-brand-900 font-bold px-4 py-2 rounded-lg shadow-lg">
                99% Success Rate
              </div>

              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Common Issues We Resolve
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-sm">
                    <strong>Query Response:</strong> Drafting technical replies
                    to Assessment Officer queries regarding value or
                    classification.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-sm">
                    <strong>First Check Exam:</strong> Handling cases where
                    customs orders 100% examination before assessment.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-sm">
                    <strong>Bond/BG Submission:</strong> Physical submission of
                    Bond and Bank Guarantee to the Bond Section.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Clearance Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              From Docs to Delivery
            </h2>
          </div>

          {/* STEPS */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* STEP 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Checklist</h3>
              <p className="text-sm text-slate-500">
                Document verification and submission of Bill of Entry/Shipping
                Bill checklist.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Assessment</h3>
              <p className="text-sm text-slate-500">
                Answering officer queries. Duty payment by client upon
                assessment.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Examination</h3>
              <p className="text-sm text-slate-500">
                Registration of goods at shed. Physical inspection by Shed
                Appraiser.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">OOC / LEO</h3>
              <p className="text-sm text-slate-500">
                Out of Charge (Import) or Let Export Order (Export) granted in
                system.
              </p>
            </div>

            {/* STEP 5 — ICON STEP */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
            mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Delivery</h3>
              <p className="text-sm text-slate-500">
                Gate Pass generation and handing over cargo to transporter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            CHA vs Freight Forwarder
          </h2>

          <div className="space-y-4">
            {/* ITEM 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does a CHA handle transport?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Strictly speaking, a CHA's role ends at customs clearance.
                However, at EXIMINQ, we offer integrated services, meaning we
                can arrange the transporter to pick up goods once our CHA team
                clears them.
              </p>
            </details>

            {/* ITEM 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is physical presence mandatory for all shipments?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                If your shipment is routed through the Green Channel (RMS),
                physical examination is waived. However, a CHA is still needed
                to register the goods at the shed and generate the OOC/Gate
                Pass.
              </p>
            </details>

            {/* ITEM 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is Factory Stuffing Permission?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is a permission granted by Customs allowing exporters to pack
                containers at their own factory under the supervision of a
                Central Excise officer, rather than at the port. We help obtain
                this permission.
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
              <li>
                <a href="#" class="hover:text-white transition">
                  Import Clearance
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Export Clearance
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Factory Stuffing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Freight Forwarding
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
                  Nhava Sheva
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Mundra
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Chennai
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Air Cargo (DEL/BOM)
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

export default CloudDeskCHAServices;
