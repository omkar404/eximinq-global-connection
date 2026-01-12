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
              <a
                href="https://in.linkedin.com/in/eximinq-cloud-desk?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eximinq Cloud Desk on LinkedIn"
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
