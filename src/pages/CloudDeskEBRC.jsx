import TopBar from "../components/CloudDeskEBRC/TopBar";
import Navbar from "../components/CloudDeskEBRC/Navbar";
import Hero from "../components/CloudDeskEBRC/Hero";
import Fees from "../components/CloudDeskEBRC/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  XCircle,
  Link2,
  Award,
  Eraser,
  Leaf,
  Bone,
  Dog,
  Briefcase,
  FlaskRound,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEBRC/MainNavbar";

const CloudDeskEBRC = () => {
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
              Why is Quarantine Mandatory?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              To protect India's agriculture and biodiversity, the government
              enforces strict biosecurity measures on the import of biological
              materials.
            </p>
            <p className="mb-4">
              <strong>Plant Quarantine (PQ):</strong> Regulated by the
              Directorate of Plant Protection, Quarantine & Storage (DPPQS).
              Mandates that imports of plants/fruits do not carry exotic pests
              or diseases.
              <br />
              <strong>Animal Quarantine (AQ):</strong> Regulated by DAHD (Dept
              of Animal Husbandry & Dairying). Ensures that imported
              animals/products are free from diseases like Bird Flu or Foot &
              Mouth Disease.
            </p>
          </div>
        </div>
      </section>

      <section id="plant" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
              Agriculture & Flora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Plant Quarantine (PQMS)
            </h2>
            <p className="text-slate-500 mt-2">
              Compliance under Plant Quarantine Order, 2003.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Import Permit
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Mandatory <strong>Import Permit</strong> must be obtained{" "}
                <em>before</em> shipment for restricted items like Seeds,
                Saplings, and certain Fruits.
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Pre-Arrival
              </span>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Phytosanitary Cert (PSC)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                For Exporters: We arrange inspection of cargo and issuance of
                the
                <strong> Phytosanitary Certificate </strong>
                required by the destination country customs.
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                For Exports
              </span>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Release Order (IR)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Upon arrival, goods are inspected. If pest-free, an
                <strong> Import Release Order </strong>
                is generated on PQMS for Customs clearance.
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Post-Arrival
              </span>
            </div>
          </div>

          {/* Note Box */}
          <div className="mt-8 bg-green-50 border border-green-200 p-4 rounded-lg flex items-center gap-3 max-w-3xl mx-auto">
            <Leaf className="text-green-600 text-xl" size={22} />
            <p className="text-sm text-green-800">
              <strong>Note:</strong> Wood Packaging Material (Pallets/Crates)
              must be fumigated and marked <strong>ISPM-15</strong> to avoid
              quarantine penalties.
            </p>
          </div>
        </div>
      </section>

      <section id="animal" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Livestock & Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Animal Quarantine (AQCS)
            </h2>
            <p className="text-slate-500 mt-2">
              Compliance under Livestock Importation Act.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">
                Sanitary Import Permit (SIP)
              </h3>

              <p className="text-slate-600 mb-6">
                For importing high-risk items like Meat, Egg Products, Milk
                Products, Pet Food, and Animal Feed, obtaining a{" "}
                <strong>Sanitary Import Permit (SIP)</strong> from DGFT/DAHD is
                mandatory before shipping.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                <h4 className="font-bold text-sm text-slate-800 mb-2">
                  Pet Imports (Dog/Cat)
                </h4>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-500 w-4 h-4" />
                    NOC required from AQCS 7 days prior to arrival.
                  </li>

                  <li className="flex items-center gap-2">
                    <Check className="text-brand-500 w-4 h-4" />
                    Vaccination Record & Microchip mandatory.
                  </li>

                  <li className="flex items-center gap-2">
                    <Check className="text-brand-500 w-4 h-4" />
                    Owner Transfer of Residence rules apply.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side product grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-brand-100 transition">
                <Bone className="text-3xl text-brand-600 mb-2 mx-auto" />
                <h4 className="font-bold">Meat Products</h4>
              </div>

              <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-brand-100 transition">
                <Dog className="text-3xl text-brand-600 mb-2 mx-auto" />
                <h4 className="font-bold">Pet Food</h4>
              </div>

              <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-brand-100 transition">
                <Briefcase className="text-3xl text-brand-600 mb-2 mx-auto" />
                <h4 className="font-bold">Leather/Hides</h4>
              </div>

              <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-brand-100 transition">
                <FlaskRound className="text-3xl text-brand-600 mb-2 mx-auto" />
                <h4 className="font-bold">Biologicals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Clearance Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Step-by-Step Approval
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
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-300">
                File application on PQMS (Plants) or SIP Portal (Animals) with
                IEC.
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
              <h3 className="text-lg font-bold mb-2">Documents</h3>
              <p className="text-sm text-slate-300">
                Submit Health Certificate, Country of Origin, and Invoice.
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
              <h3 className="text-lg font-bold mb-2">Inspection</h3>
              <p className="text-sm text-slate-300">
                Quarantine Officer inspects cargo at the port. Samples drawn.
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
              <h3 className="text-lg font-bold mb-2">Testing</h3>
              <p className="text-sm text-slate-300">
                Lab analysis for pests (PQ) or diseases (AQ).
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-2xl font-bold text-white mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Release</h3>
              <p className="text-sm text-slate-300">
                NOC / Import Release Order issued for Customs Clearance.
              </p>
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
                Is Fumigation mandatory for all wood packaging?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, under ISPM-15 standards, all wooden pallets and crates must
                be fumigated and marked with the IPPC logo at the country of
                origin. If not, Indian PQ authorities will order fumigation at
                the port (with penalty) or deportation.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I bring my pet dog to India as cargo?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, but it requires a DGFT Import License unless you are
                transferring residence to India (in which case, up to 2 pets are
                allowed as baggage with an AQCS NOC).
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if pests are found during inspection?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                If quarantine pests are found, the consignment may be subjected
                to fumigation/treatment. If the pest is a critical quarantine
                species not present in India, the shipment will be destroyed or
                deported.
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
                  Plant Quarantine (PQ)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Animal Quarantine (AQ)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Import Permit
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Phytosanitary Cert
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
                  Restricted Plant List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Pet Import Rules
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Fumigation Norms
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  PQMS User Manual
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

export default CloudDeskEBRC;
