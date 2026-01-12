import React, { useState } from "react";
import TopBar from "../components/CloudDeskMarine/TopBar";
import Navbar from "../components/CloudDeskMarine/Navbar";
import Hero from "../components/CloudDeskMarine/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Ship,
  CheckCheck,
  MapPin,
  Truck,
  FileCheck,
  Ruler,
  Rotate3D,
  Zap,
  FlameKindling,
  HardHat,
  Car,
  Projector,
  FlagIcon,
    Phone,
  Mail,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskMarine/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskMarine/ModalEnroll";

const CloudDeskMarine = () => {
    const [showEnrollModal, setShowEnrollModal] = useState({
      open: false,
      type: "",
    });
  
    const handleEnrollmentSubmit = (formData) => {
      console.log("Enrollment Submitted:", formData);
  
      // TODO → send API call
      // axios.post("/api/enroll", formData)
  
      alert("Form submitted — check console for data.");
    };
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Understanding Project Cargo
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Project Cargo</strong> refers to the transportation of
              large, heavy, high-value, or complex pieces of equipment that
              cannot fit into standard containers. This includes{" "}
              <strong>Over Dimensional Cargo (ODC)</strong>, which exceeds the
              standard dimensions of road/rail infrastructure.
            </p>
            <p className="mb-4">
              Moving such cargo requires not just a truck, but precise
              engineering. It involves detailed <strong>Route Surveys</strong>{" "}
              to check bridge strength and overhead wire clearance, obtaining
              special road permits, and often chartering specialized{" "}
              <strong>Breakbulk Vessels</strong> or Aircraft.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Specialized Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-brand-600 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-600 group-hover:text-white transition">
                <MapPin size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Route Survey
              </h3>
              <p className="text-sm text-slate-600">
                Technical feasibility study of the transport route. We identify
                choke points, bridge load limits, and turning radiuses to ensure
                the cargo can pass safely.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-accent-500 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-accent-500 group-hover:text-white transition">
                <Truck size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Hydraulic Axles
              </h3>
              <p className="text-sm text-slate-600">
                Deployment of Goldhofer/Volvo hydraulic modular trailers. These
                distribute the weight of super-heavy loads evenly to protect
                road infrastructure.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-green-500 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                <Ship size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Breakbulk Chartering
              </h3>
              <p className="text-sm text-slate-600">
                Booking space on Breakbulk or RORO vessels for cargo that cannot
                be containerized. We handle hook-to-hook operations at the port.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-red-500 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition">
                <FileCheck size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Project Registration
              </h3>
              <p className="text-sm text-slate-600">
                Assistance with registering Project Imports under Heading 98.01
                of Customs Tariff to avail concessional duty rates for setting
                up new plants.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-purple-500 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                <Ruler size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Lashing & Chocking
              </h3>
              <p className="text-sm text-slate-600">
                Industrial-grade packaging and securing of cargo on Flat Racks
                or Open Tops. Certified lashing to prevent movement during
                high-sea transit.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-blue-500 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <Rotate3D size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Civil Works
              </h3>
              <p className="text-sm text-slate-600">
                Temporary bypass construction, strengthening of bridges, or
                removal of obstacles (signboards/wires) to facilitate movement
                of ODC convoys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sectors" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industries We Serve
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Project logistics is vital for core industries. We have
                successfully executed complex movements for India's leading
                infrastructure and energy sectors.
              </p>

              <ul className="space-y-4">
                {/* Power & Energy */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Zap className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Power & Energy</h4>
                    <p className="text-xs text-slate-400">
                      Transformers, Turbines, Wind Blades.
                    </p>
                  </div>
                </li>

                {/* Oil & Gas */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <FlameKindling className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Oil & Gas</h4>
                    <p className="text-xs text-slate-400">
                      Distillation Columns, Pipes, Drilling Rigs.
                    </p>
                  </div>
                </li>

                {/* Infrastructure */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <HardHat className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Infrastructure</h4>
                    <p className="text-xs text-slate-400">
                      Cranes, Earth Movers, Tunnel Borers.
                    </p>
                  </div>
                </li>

                {/* Automotive */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <Car className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Automotive</h4>
                    <p className="text-xs text-slate-400">
                      Press Lines, Assembly Robots, Paint Shops.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side Box */}
            <div className="relative h-96 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center">
              <div className="text-center p-8">
                <Projector className="text-slate-600 w-20 h-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-400">
                  Project Gallery
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Showcasing our heavy lifts.
                </p>
                <span className="text-xs text-slate-600">
                  [Image of Heavy Machinery being loaded onto a ship]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Execution Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              The Project Lifecycle
            </h2>
          </div>

          {/* Steps */}
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
              <h3 className="text-lg font-bold mb-2">Survey</h3>
              <p className="text-sm text-slate-500">
                Route reconnaissance and method statement creation.
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
              <h3 className="text-lg font-bold mb-2">Plan</h3>
              <p className="text-sm text-slate-500">
                Engineering drawings, lifting plans, and permit applications.
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
              <h3 className="text-lg font-bold mb-2">Mobilize</h3>
              <p className="text-sm text-slate-500">
                Deployment of cranes, hydraulic axles, and manpower.
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
              <h3 className="text-lg font-bold mb-2">Move</h3>
              <p className="text-sm text-slate-500">
                Executed with police escorts and pilot vehicles.
              </p>
            </div>

            {/* Step 5 – Lucide FlagCheckered */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                        mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <FlagIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Deliver</h3>
              <p className="text-sm text-slate-500">
                Unloading at foundation and final handover.
              </p>
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
                  Route Survey
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Heavy Lift Transport
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Breakbulk Shipping
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Project Registration
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
                  Hydraulic Axles
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Low Bed Trailers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Flat Rack Containers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Open Top Containers
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

export default CloudDeskMarine;
