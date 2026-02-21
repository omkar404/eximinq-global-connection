import { useState } from "react";
// import TopBar from "../components/CloudDeskHalal/TopBar";
import Navbar from "../components/CloudDeskHalal/Navbar";
import Hero from "../components/CloudDeskHalal/Hero";
import Fees from "../components/CloudDeskHalal/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  Phone,
  Mail,
  MapPin,
  Utensils,
  SprayCan,
  Pill,
  Truck,
  CheckCircle,
  Globe,
  Award,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskHalal/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskHalal/ModalEnroll";

const CloudDeskHalal = () => {
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
      {/* <TopBar /> */}
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
              What is Halal Certification?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Halal</strong> is an Arabic word meaning "Permissible".
              Halal Certification is a guarantee that the product—whether food,
              pharmaceutical, or cosmetic—is manufactured in compliance with
              Islamic Sharia law. This means it does not contain any "Haram"
              (forbidden) ingredients (like pork, alcohol, or blood) and is
              prepared using dedicated equipment free from contamination.
            </p>
            [Image of Halal Process Flowchart]
            <p className="mb-4">
              For exporters, this certificate acts as a{" "}
              <strong>Trade Passport</strong>. Countries like Saudi Arabia, UAE,
              Malaysia, and Indonesia enforce strict Halal regulations. Without
              a certificate from an accredited body, your shipment cannot clear
              customs in these nations.
            </p>
          </div>
        </div>
      </section>

      <section id="sectors" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-halal-600 font-bold uppercase tracking-wider text-sm">
              Industries Covered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Where is Halal Mandatory?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Food */}
            <div
              className="bg-white p-6 rounded-lg shadow border-t-4 border-green-600 
                          text-center hover:-translate-y-2 transition"
            >
              <div
                className="w-14 h-14 bg-green-100 rounded-full flex items-center 
                            justify-center mx-auto mb-4"
              >
                <Utensils className="text-green-800" size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2">Food & Beverages</h3>
              <p className="text-sm text-slate-600">
                Meat, dairy, snacks, confectionery, and processed foods.
              </p>
            </div>

            {/* Cosmetics */}
            <div
              className="bg-white p-6 rounded-lg shadow border-t-4 border-pink-500 
                          text-center hover:-translate-y-2 transition"
            >
              <div
                className="w-14 h-14 bg-pink-100 rounded-full flex items-center 
                            justify-center mx-auto mb-4"
              >
                <SprayCan className="text-pink-600" size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2">Cosmetics</h3>
              <p className="text-sm text-slate-600">
                Skincare, makeup, and personal care (no alcohol or animal fats).
              </p>
            </div>

            {/* Pharma */}
            <div
              className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500 
                          text-center hover:-translate-y-2 transition"
            >
              <div
                className="w-14 h-14 bg-blue-100 rounded-full flex items-center 
                            justify-center mx-auto mb-4"
              >
                <Pill className="text-blue-600" size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-slate-600">
                Medicines, vaccines, capsules (gelatin source verification).
              </p>
            </div>

            {/* Logistics */}
            <div
              className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500 
                          text-center hover:-translate-y-2 transition"
            >
              <div
                className="w-14 h-14 bg-orange-100 rounded-full flex items-center 
                            justify-center mx-auto mb-4"
              >
                <Truck className="text-orange-600" size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2">Halal Logistics</h3>
              <p className="text-sm text-slate-600">
                Warehousing and transport ensuring zero cross-contamination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="accreditation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Global Recognition Matters
              </h2>

              <p className="text-slate-600 mb-6">
                A certificate is only valuable if the importing country
                recognizes the Certification Body. We partner with top
                accredited agencies to ensure your certificate is valid
                globally.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <strong className="block text-slate-900">
                      JAKIM (Malaysia)
                    </strong>
                    <span className="text-xs text-slate-500">
                      Gold standard for Southeast Asia.
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <strong className="block text-slate-900">
                      MUI & BPJPH (Indonesia)
                    </strong>
                    <span className="text-xs text-slate-500">
                      Mandatory for the largest Halal market.
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <strong className="block text-slate-900">
                      GAC / ESMA (Gulf / UAE)
                    </strong>
                    <span className="text-xs text-slate-500">
                      Essential for UAE, Saudi Arabia, Qatar, Oman.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-halal-50 p-8 rounded-xl border border-halal-200 text-center">
              <Globe className="mx-auto text-green-600 mb-6" size={56} />

              <h3 className="text-xl font-bold text-brand-900 mb-2">
                i-CAS Recognition
              </h3>

              <p className="text-sm text-slate-600">
                In India, the Quality Council of India (QCI) through NABCB has
                launched the i-CAS (Indian Conformity Assessment Scheme) for
                Halal. We help you navigate these domestic guidelines,
                especially for meat exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Certification Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              4 Steps to Certification
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-accent-500"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-slate-300">
                Submit product list, ingredients, and process flow chart.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-accent-500"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Audit</h3>
              <p className="text-sm text-slate-300">
                Sharia auditors visit the factory to verify hygiene and raw
                materials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-accent-500"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Lab Test</h3>
              <p className="text-sm text-slate-300">
                Samples tested for non-halal DNA (porcine) and alcohol content.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
                            mx-auto mb-4 border-4 border-white"
              >
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Certificate</h3>
              <p className="text-sm text-slate-300">
                Issuance of Halal Certificate valid for 1–3 years (renewable).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees setShowEnrollModal={setShowEnrollModal} />

              {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
                    <section className="py-20 bg-white">
                      <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-slate-900 mb-2">The transition from "Private Halal" to "Government-Regulated Halal" is a minefield. CloudDesk is your bridge.</h2>
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
                              <h4 className="font-bold text-slate-900 mb-2">1. I-CAS Readiness Audit</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                The new DGFT mandate requires facilities to be certified by agencies accredited by the <strong>NABCB (National Accreditation Board for Certification Bodies).</strong>
                                <strong>CloudDesk </strong>performs a Pre-Assessment Audit to ensure your plant meets the <strong>I-CAS</strong> standards before the official auditors arrive, saving you from expensive re-audit fees.
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 2 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                              <CheckCircle size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">2. Ingredient & Cross-Contamination Filter.</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                Halal isn't just about slaughter; it’s about the entire supply chain <strong>(e.g., no alcohol-based cleaners or porcine-derived lubricants). </strong>
                                <strong>CloudDesk’s </strong>Supply Chain Scanner reviews your raw material MSDS sheets to ensure every single additive is 100% compliant with GSO 2055-1 and OIC/SMIIC standards.
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 3 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                              <Building size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">3. Country-Specific Mapping (BPJPH, JAKIM, SFDA):</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               A certificate for the UAE might not work for <strong> (BPJPH) </strong>or <strong>Malaysia (JAKIM)</strong> due to differing national standards. CloudDesk’s Global Recognition Engine identifies which certification body is recognized by your target country, ensuring your "Halal Passport" is valid at the port of destination.
                              </p>
                            </div>
                          </div>
              
                          {/* Feature 4 */}
                          <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                              <ShieldUser size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 mb-2">4. The "Consignment Certificate" Bridge:</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                               For meat exports, you need a <strong>certificate for every shipment.</strong> 
                               <strong>CloudDesk integrates</strong> with your shipping workflow to generate and verify these Consignment Certificates instantly, 
                               ensuring your container doesn't get rejected in Dubai or Doha due to a missing QR code.
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
                      Is Halal certification mandatory for all food exports?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     No. As of 2026, it is mandatory only for specified meat and meat products being exported to 15 specific countries (Bahrain, Bangladesh, Indonesia, Iran, Iraq, Jordan, Kuwait, Malaysia, Oman, Philippines, Qatar, Saudi Arabia, Singapore, Turkey, and UAE). For other products like cosmetics or plant-based foods, it is optional but highly recommended for market access.
                    </p>
                  </details>
      
                  {/* Question 2 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      What is "I-CAS Halal"?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     I-CAS stands for India Conformity Assessment Scheme. Developed by the Quality Council of India (QCI), it is the government-recognized framework that streamlines the Halal process. To export meat as "Halal," your facility must be certified under this specific scheme by an NABCB-accredited body.
                    </p>
                  </details>
      
                  {/* Question 3 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      Can I still use my local Jamat or private Halal certificate?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      For the 15 specified countries, a private certificate is no longer sufficient for meat exports. It must be a certificate issued under the I-CAS framework. However, for non-notified countries or non-meat products, private certifications are still accepted.
                    </p>
                  </details>
      
                  {/* Question 4 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                        Do cosmetics and pharmaceuticals need Halal certification?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     While not mandated by India's DGFT yet, countries like Indonesia have made Halal certification mandatory for all consumer goods (including cosmetics and fashion) starting in October 2026. CloudDesk helps you get ahead of this curve.
                    </p>
                  </details>
      
                  {/* Question 5 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      What are the "Haram" (prohibited) elements in non-meat products?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                   Common issues include alcohol (used in perfumes/sanitizers), gelatin (in capsules), and glycerin or stearic acid (if derived from non-Halal animal fats). CloudDesk helps you reformulate or find certified-Halal suppliers for these ingredients.
                    </p>
                  </details>
      
                  {/* Question 6 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      How much does Halal certification cost in 2026? 
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     "• 1-Year Cycle: Approx. ₹25,000 + ₹500 per product.
                      • 3-Year Cycle: Approx. ₹60,000 + ₹1,500 per product.
                      • Logo Usage: Often carries an additional annual fee (approx. ₹20,000).
                      • Note: Exporting meat also requires a 'Consignment Fee' of approx. ₹800–₹1,000 per shipment."

                    </p>
                  </details>
      
                  {/* Question 7 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                      How long does the process take?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     Typically 6 to 8 weeks. This includes document review, an on-site audit of your facility, and the final decision by the certification committee. CloudDesk’s "Fast-Track" service can reduce this to 4 weeks by ensuring "First-Time-Right" documentation.
                    </p>
                  </details>
      
                  {/* Question 8 */}
                  <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
                    <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                    What happens if I export "Halal" meat without the I-CAS certificate?
                      <ChevronDown
                        size={20}
                        className="text-brand-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
      
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                     Your shipment will be flagged as a Policy Violation at the Indian port. Even if it leaves India, it will be rejected or seized by the importing country’s Customs, leading to a 100% loss of cargo value and potential blacklisting of your IEC.
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
              <a
                href="https://in.linkedin.com/in/eximinq-cloud-desk?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eximinq Contact on LinkedIn"
                className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
              >
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
              <li>
                <a href="#" class="hover:text-white transition">
                  Food Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Cosmetics Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Pharma Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Meat Export License
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  JAKIM Standards
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  MUI Regulations
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Forbidden Ingredients
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Halal Logos Guide
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

export default CloudDeskHalal;
