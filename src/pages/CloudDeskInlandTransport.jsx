import React, { useState } from "react";
import TopBar from "../components/CloudDeskInlandTransport/TopBar";
import Navbar from "../components/CloudDeskInlandTransport/Navbar";
import Hero from "../components/CloudDeskInlandTransport/Hero";
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
  Truck,
  Factory,
  PackageSearch,
  Snowflake,
  CarTaxiFront,
  Car,
  TrainFront,
  Weight,
  Train,
  MapPinned,
  ShieldCheck,
  Hourglass,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskInlandTransport/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskInlandTransport/ModalEnroll";

const CloudDeskInlandTransport = () => {
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
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Movement Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Logistics Beyond Borders
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 
              group-hover:bg-blue-600 group-hover:text-white transition"
              >
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Container Transport
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Seamless movement of 20ft and 40ft containers between Ports,
                CFS, and Factories. We handle empty repo and laden movement.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl mb-6 
              group-hover:bg-orange-600 group-hover:text-white transition"
              >
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Factory Stuffing
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Placement of empty containers at your factory for direct
                stuffing. We ensure drivers are trained to handle customs
                sealing procedures efficiently.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition">
              <div
                className="w-14 h-14 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-2xl mb-6 
              group-hover:bg-red-600 group-hover:text-white transition"
              >
                <PackageSearch className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ODC / Project Cargo
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Specialized hydraulic axle and low-bed trailers for Over
                Dimensional Cargo (ODC) and heavy machinery that cannot fit in
                standard containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Our Strength
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Versatile Fleet Options
            </h2>
            <p className="text-slate-500 mt-2">
              Right vehicle for every cargo type.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fleet 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition">
              <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
                <CarTaxiFront size={72} strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-brand-900">40ft High Bed</h4>
                <p className="text-xs text-slate-500 mt-1">
                  For standard 40ft/HQ Containers. Max Payload: 28 MT.
                </p>
              </div>
            </div>

            {/* Fleet 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition">
              <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
                <Truck size={72} strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-brand-900">20ft Skeleton</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Lightweight chassis for heavy 20ft Containers. Max Payload: 30
                  MT.
                </p>
              </div>
            </div>

            {/* Fleet 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition">
              <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
                <Car size={72} strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-brand-900">LCL Canter</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Closed body trucks (14ft/17ft/20ft) for loose cargo and LCL
                  shipments.
                </p>
              </div>
            </div>

            {/* Fleet 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition">
              <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
                <Snowflake size={72} strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-brand-900">Reefer Truck</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Temperature controlled vehicles for pharma & perishables
                  (Genset equipped).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rail" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Multimodal Rail Solutions
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                For long-distance inland movement (e.g., Delhi to Mumbai Port),
                Rail Freight is more cost-effective and eco-friendly than Road
                transport. We coordinate with CONCOR and Private Train Operators
                (PTOs) for seamless rake movement.
              </p>

              <ul className="space-y-4">
                {/* Point 1 */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0 border border-brand-600">
                    <TrainFront size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ICD Connectivity</h4>
                    <p className="text-sm text-slate-400">
                      Connecting inland depots (ICD Tughlakabad, ICD Dadri,
                      etc.) to gateway ports.
                    </p>
                  </div>
                </li>

                {/* Point 2 */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0 border border-brand-600">
                    <Weight size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Heavy Haulage</h4>
                    <p className="text-sm text-slate-400">
                      Ideal for heavy commodities like Steel, Scrap, and Stone.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE Placeholder Box */}
            <div className="relative h-80 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center">
              <div className="text-center p-8">
                <Train size={64} className="text-slate-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-400">
                  Rail Network Map
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Connecting North & Central India to Ports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            The EXIMINQ Advantage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="p-6">
              <MapPinned size={48} className="text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Live GPS Tracking</h3>
              <p className="text-sm text-slate-600">
                Know exactly where your cargo is. Real-time updates via our
                Contact portal.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="p-6">
              <ShieldCheck size={48} className="text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Safety Compliance</h3>
              <p className="text-sm text-slate-600">
                Drivers trained in defensive driving. Vehicles compliant with
                port safety norms.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="p-6">
              <Hourglass size={48} className="text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">On-Time Delivery</h3>
              <p className="text-sm text-slate-600">
                We understand 'Gate Cut-off'. Our planning ensures your
                container never misses the vessel.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">A truck is a black box unless it’s connected to your dashboard. CloudDesk brings transparency to the road.</h2>
                    {/* <p className="text-slate-500">"• Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                    • Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. GPS-Locked Security (Live Tracking)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         In 2026, "I'll call the driver" is not a status update. Every<strong> CloudDesk-partnered vehicle </strong>is equipped with<strong> GPS and E-Lock integration.</strong> 
                         You can see exactly where your container is on the highway, with automated alerts for unauthorized stops or route deviations, critical for high-value cargo.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2.Multimodal Rail-Road Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          For long-distance inland movement<strong> (e.g., Ludhiana to Mundra),</strong> road transport can be 30% more expensive than rail.<strong> CloudDesk’s </strong>Multimodal Planner compares road vs. <strong>CONCOR (Rail) </strong>schedules and costs, giving you the fastest and cheapest route to the coast.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. The "Empty-Return" Strategy</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          One of the biggest hidden costs is the<strong> "Empty Repositioning" </strong>fee for containers. <strong>CloudDesk </strong>uses a<strong> Circular Logistics Network, matching </strong>your export container needs with incoming imports in your<strong>area, slashing "Empty Container" </strong> transport costs by up to 20%.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. E-Way Bill & Fastag Automation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          We eliminate the paperwork at the<strong> checkpost. CloudDesk Auto-Generates </strong>E-Way Bills and manages Fastag balances for your fleet, 
                          ensuring your trucks move through toll plazas and state borders without stopping for manual payments or document checks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "Inland Haulage" (IHC)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is the cost and process of moving a container from an Inland Container Depot (ICD) to a Gateway Sea Port (or vice versa) via rail or road.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the difference between a "Trailer" and a "Truck"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "• Trucks: Used for ""Loose Cargo"" (LCL or domestic).
                 • Trailers: Specialized vehicles (20ft/40ft) designed specifically to carry international shipping containers. CloudDesk only uses certified trailers for FCL movement to ensure cargo safety."

              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I use my own transport for export/import?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, provided the vehicle is registered and the driver has a valid "Gate Pass" for the Port or ICD. However, most exporters use CloudDesk’s Verified Fleet because our drivers are pre-vetted for Port-Security protocols.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is GST applicable on inland transportation for exports?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              No. As of 2026, under GST law, the service of transporting goods from India to a place outside India (and the inland leg thereof) is exempt/zero-rated, provided specific conditions are met. CloudDesk ensures your transporters issue "Zero-Rated" invoices correctly.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What are "Detention Charges" in inland transport?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               If your factory takes too long to load/unload a truck (typically more than 6–12 hours), the transporter charges a "Waiting Fee" per day. CloudDesk’s Loading-Dock Manager helps you track these times to avoid unnecessary penalties.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does the "Per Ton" rate include toll and parking?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Usually, no. Tolls (Fastag) and Green Taxes are charged on actuals. CloudDesk provides an "All-Inclusive" Quote that covers freight, tolls, and documentation to give you a final landed cost.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What is "Transit Insurance"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               While your marine insurance covers the sea leg, you need Inland Transit Insurance (Road/Rail) to cover accidents, theft, or fire during the land journey. CloudDesk bundles this with your transport booking for peace of mind.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is "Direct Port Entry" (DPE)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               DPE allows factory-stuffed containers to go directly to the port without stopping at a CFS (Container Freight Station). CloudDesk’s DPE-Certified Fleet saves you 24–48 hours in the export cycle.
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
                  Road Transportation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Rail Logistics
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  ODC Movement
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Factory Stuffing
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
                  Delhi / NCR
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

export default CloudDeskInlandTransport;
