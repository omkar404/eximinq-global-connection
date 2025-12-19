import TopBar from "../components/CloudDeskWarehousing/TopBar";
import Navbar from "../components/CloudDeskWarehousing/Navbar";
import Hero from "../components/CloudDeskWarehousing/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  TrainFront,
  Weight,
  Train,
  MapPinned,
  ShieldCheck,
  Hourglass,
  Boxes,
  Tags,
  HandGrab,
  Warehouse,
  Check,
  Anchor,
  Ship,
  Waves,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskWarehousing/MainNavbar";

const CloudDeskWarehousing = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              More Than Just Storage
            </h2>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-lg 
              flex items-center justify-center text-2xl mb-6 
              group-hover:bg-indigo-600 group-hover:text-white transition"
              >
                <Boxes size={34} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Inventory Management
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Real-time tracking of stock levels (WMS). FIFO/LIFO management
                for perishable and non-perishable goods ensuring zero pilferage.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg 
              flex items-center justify-center text-2xl mb-6 
              group-hover:bg-orange-600 group-hover:text-white transition"
              >
                <Tags size={34} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Labeling & Kitting
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Value added services including MRP sticking, repacking, shrink
                wrapping, and kitting before final distribution to the market.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-green-100 text-green-600 rounded-lg 
              flex items-center justify-center text-2xl mb-6 
              group-hover:bg-green-600 group-hover:text-white transition"
              >
                <HandGrab size={34} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Cross-Docking
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Direct transfer of goods from inbound vehicles to outbound
                transportation with minimal or no storage time, increasing
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bonded" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Choose Your Type
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Bonded vs General Warehousing
            </h2>
            <p className="text-slate-500 mt-2">
              Select the right facility based on your duty payment strategy.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Bonded Warehouse */}
            <div className="bg-white rounded-2xl shadow-lg border-t-8 border-brand-600 overflow-hidden">
              <div className="bg-brand-50 p-8 border-b border-brand-100">
                <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6" /> Customs Bonded
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Ideal for High Duty Imports
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {/* Point 1 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Duty Deferment
                      </strong>
                      <span className="text-sm text-slate-500">
                        Store imported goods without paying customs duty
                        immediately. Pay only when you clear goods for home
                        consumption.
                      </span>
                    </div>
                  </li>

                  {/* Point 2 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Re-Export Benefits
                      </strong>
                      <span className="text-sm text-slate-500">
                        If goods are re-exported, no import duty is payable at
                        all. Ideal for transit hubs.
                      </span>
                    </div>
                  </li>

                  {/* Point 3 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Cash Flow Management
                      </strong>
                      <span className="text-sm text-slate-500">
                        Save working capital by delaying duty payments until you
                        have a buyer.
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="block w-full bg-brand-600 text-white text-center font-bold py-3 rounded hover:bg-brand-700 transition"
                  >
                    Enquire Bonded Space
                  </a>
                </div>
              </div>
            </div>

            {/* General Warehouse */}
            <div
              className="bg-white rounded-2xl shadow-lg border-t-8 border-accent-500 overflow-hidden"
              id="general"
            >
              <div className="bg-orange-50 p-8 border-b border-orange-100">
                <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-3">
                  <Warehouse className="w-6 h-6" /> General / 3PL
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Ideal for Distribution & E-commerce
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {/* Point 1 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Flexible Storage
                      </strong>
                      <span className="text-sm text-slate-500">
                        Short-term or long-term storage for duty-paid goods. Pay
                        only for the pallet space utilized.
                      </span>
                    </div>
                  </li>

                  {/* Point 2 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Distribution Hub
                      </strong>
                      <span className="text-sm text-slate-500">
                        Strategic location to split bulk cargo and distribute to
                        various cities in India.
                      </span>
                    </div>
                  </li>

                  {/* Point 3 */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check size={12} />
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        Compliance Services
                      </strong>
                      <span className="text-sm text-slate-500">
                        MRP labeling, stickering, and repackaging as per Indian
                        legal metrology standards.
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="block w-full bg-accent-500 text-brand-900 text-center font-bold py-3 rounded hover:bg-accent-600 transition"
                  >
                    Enquire General Space
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Strategic Port Proximity
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Location is everything in logistics. Our warehouses are situated
                within 20–50 km of major ports, minimizing transport costs and
                ensuring quick turnaround times.
              </p>

              <div className="space-y-4">
                {/* Nhava Sheva */}
                <div className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Nhava Sheva (JNPT)</h4>
                    <p className="text-xs text-slate-400">
                      Warehouses in Panvel, Uran & Bhiwandi
                    </p>
                  </div>
                </div>

                {/* Mundra */}
                <div className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Mundra Port</h4>
                    <p className="text-xs text-slate-400">
                      Warehouses in Gandhidham & SEZ Zones
                    </p>
                  </div>
                </div>

                {/* Chennai */}
                <div className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chennai Port</h4>
                    <p className="text-xs text-slate-400">
                      Warehouses in Red Hills & Ennore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE MAP BOX */}
            <div className="relative h-96 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                <MapPinned className="text-slate-600 w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold text-slate-400">
                  Pan India Network
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Connecting all major industrial hubs.
                </p>

                {/* Placeholder text — replace with actual image */}
                <span className="mt-6 text-xs text-slate-600 italic">
                  [India Logistics Network Map Placeholder]
                </span>
              </div>
            </div>
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
                  Bonded Warehousing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  3PL Services
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Inventory Management
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Transportation
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
                  Bhiwandi / Panvel
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
                  Delhi NCR
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

export default CloudDeskWarehousing;
