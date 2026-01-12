import { useState } from "react";
import TopBar from "../components/CloudDeskMarine/TopBar";
import Navbar from "../components/CloudDeskMarine/Navbar";
import Hero from "../components/CloudDeskMarine/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Check,
  Ship,
  Waves,
  ShieldAlert,
  CheckCheck,
  Phone,
  Mail,
  MapPin,
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
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why is Marine Insurance Essential?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Description */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              International shipping involves inherent risks—from rough seas and
              handling damages to theft and piracy. Carrier liability is often
              limited (e.g., $500 per package), which is rarely enough to cover
              the actual value of your goods.
            </p>

            <p className="mb-4">
              <strong>General Average</strong> is a maritime principle where{" "}
              <em>all</em> parties in a sea venture proportionally share any
              losses resulting from a voluntary sacrifice of part of the ship or
              cargo to save the whole in an emergency. Without insurance, you
              could be liable for huge costs even if your cargo is safe.
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            {/* Rough Handling */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Ship className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Rough Handling</h3>
              <p className="text-sm text-slate-500">
                Protection against breakage, denting, or crushing during
                loading/unloading.
              </p>
            </div>

            {/* Water Damage */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Waves className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Water Damage</h3>
              <p className="text-sm text-slate-500">
                Coverage for damage caused by sea water ingress or rain during
                transit.
              </p>
            </div>

            {/* Theft & Pilferage */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <ShieldAlert className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Theft & Pilferage</h3>
              <p className="text-sm text-slate-500">
                Covers non-delivery of entire package or theft of contents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clauses" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Institute Cargo Clauses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Choose Your Coverage Level
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Clause A */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Institute Cargo Clause (A)
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wide">
                  “All Risk” Policy
                </p>
                <p className="text-slate-600 text-sm mb-6">
                  Provides the widest coverage. Covers all risks of loss or
                  damage except those specifically excluded (e.g., wilful
                  misconduct, war).
                </p>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Fire &
                    Explosion
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Theft &
                    Pilferage
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Breakage &
                    Leakage
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Sea/Fresh Water
                    Damage
                  </li>
                </ul>
              </div>
            </div>

            {/* Clause B */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-yellow-500 hover:shadow-xl transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Institute Cargo Clause (B)
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wide">
                  “Basic Plus” Policy
                </p>
                <p className="text-slate-600 text-sm mb-6">
                  Covers specific named perils. More comprehensive than C but
                  less than A. Good for goods not prone to theft but susceptible
                  to water damage.
                </p>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Fire &
                    Explosion
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Overturning /
                    Derailment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Entry of Sea
                    Water
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Total Loss of
                    Package
                  </li>
                </ul>
              </div>
            </div>

            {/* Clause C */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-slate-400 hover:shadow-xl transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Institute Cargo Clause (C)
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wide">
                  “Minimum” Policy
                </p>
                <p className="text-slate-600 text-sm mb-6">
                  Restricted coverage against major casualties only. Commonly
                  used for bulk cargo (scrap, coal, ore) where minor damage is
                  acceptable.
                </p>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Fire &
                    Explosion
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Vessel
                    Stranding / Sinking
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> Collision
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500 w-4 h-4" /> General Average
                    Sacrifice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="claims" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Hassle-Free Claims Process
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Notify</h3>
              <p className="text-sm text-slate-300">
                Report the damage immediately. Capture photos and videos as
                evidence.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Survey</h3>
              <p className="text-sm text-slate-300">
                A licensed surveyor inspects the cargo and assesses the loss.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Document</h3>
              <p className="text-sm text-slate-300">
                Submit Claim Form, Invoice, BL, and monetary claim letter lodged
                with carrier.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
            mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Settlement</h3>
              <p className="text-sm text-slate-300">
                Claim approved and compensation transferred to your bank
                quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I insure my goods for more than the invoice value?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, it is standard practice to insure for{" "}
                <em>110% of the CIF value</em>
                (Cost + Insurance + Freight). The additional 10% covers
                incidental expenses and anticipated profit.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does Marine Insurance cover War and Strikes?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Standard ICC clauses exclude War and Strikes. You can add{" "}
                <strong>Institute War Clauses</strong> and
                <strong> Institute Strikes Clauses</strong> as optional riders
                for complete protection.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is an "Open Policy"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                If you ship frequently, an <strong>Open Policy</strong> covers
                all your shipments automatically for a year (up to a limit). You
                only need to declare shipments periodically instead of obtaining
                individual certificates each time.
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
                  Single Transit Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Open Marine Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Freight Forwarding
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Customs Clearance
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

export default CloudDeskMarine;
