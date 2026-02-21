// import TopBar from "../components/CloudDeskDigitalSignatures/TopBar";
import Navbar from "../components/CloudDeskDigitalSignatures/Navbar";
import Hero from "../components/CloudDeskDigitalSignatures/Hero";
import Fees from "../components/CloudDeskDigitalSignatures/Fees";
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
  Check,
  Globe,
  Ship,
  Info,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";

const CloudDeskDigitalSignatures = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              One Key, Multiple Uses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Specialized DSC Solutions
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* DGFT DSC */}
            <div
              id="dgft"
              className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden group hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-3xl">
                    <Globe size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      DSC for DGFT
                    </h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      Previously Class 2
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Specifically encrypted for the DGFT portal. Essential for all
                  Foreign Trade Policy related applications.
                </p>

                <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                  <strong>Mandatory For:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                    <li>New IEC Application / Modification</li>
                    <li>Advance Authorisation / EPCG License</li>
                    <li>RoDTEP / MEIS Scrip Applications</li>
                    <li>RCMC Registration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ICEGATE DSC */}
            <div
              id="icegate"
              className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden group hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl">
                    <Ship size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      DSC for ICEGATE
                    </h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      Class 3 (Signing + Encrypt)
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Required for all Customs related activities. Must be
                  registered on the ICEGATE website before use.
                </p>

                <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                  <strong>Mandatory For:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                    <li>e-Sanchit Document Upload</li>
                    <li>AD Code Registration</li>
                    <li>IGST Refund Scroll verification</li>
                    <li>Bill of Entry / Shipping Bill signing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center gap-3 max-w-3xl mx-auto">
            <Info className="text-blue-600" size={22} />
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Effective Jan 2021, Class 2 DSCs are
              discontinued. All new issuances are <strong>Class 3</strong>,
              which covers both DGFT and ICEGATE requirements with higher
              security.
            </p>
          </div>
        </div>
      </section>

      <Fees />


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Dsc-Services?</h2>
                    <p className="text-slate-500">
                      Your DSC is a legal power of attorney in a USB stick. If you lose the token or the password, your business stops.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. The "One-Token" Solution</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          We provide Class 3 Combo<strong> (Signing + Encryption) DSCs. </strong>While <strong>"Signing" </strong>is enough for<strong> GST/ITR, "Encryption"</strong> is mandatory for e-Tenders and <strong>ICEGATE.</strong> 
                          <strong>CloudDesk </strong>ensures you get the <strong>"Combo" </strong>so you never have to buy a second token when you decide to bid for a government contract.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Specialized DGFT & Customs Mapping</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          A common mistake in 2026: Buying a generic <strong>DSC </strong>and expecting it to work on<strong> DGFT.</strong> For exporters, the DSC must be mapped to your<strong> IEC (Import Export Code) and PAN.</strong> 
                          <strong>CloudDesk </strong>handles the <strong>Aadhaar-based eKYC </strong>and Video Verification to ensure your DSC is<strong> "DGFT-Ready" and "ICEGATE-Active" </strong>within 24 hours.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. FIPS-Compliant Hardware</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026,<strong> cheap, non-branded USB </strong>tokens are often blocked by<strong> government firewalls.</strong> 
                          We provide only FIPS 140-2 Level 2 compliant crypto-tokens<strong> (like ProxKey or HyperPKI),</strong> which are mandatory for all high-security Indian portals.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Remote Identity Validation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          You don't need to visit our office. Our <strong>Cloud-Verify </strong>system allows you to complete your mandatory 30-second video recording and <strong>mobile OTP verification </strong>from your smartphone, even if you are traveling.
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
                Is Class 2 DSC still valid in 2026?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. All Class 2 certificates have expired or been discontinued. You must upgrade to Class 3 for all government portals, including GST, Income Tax, MCA, and DGFT.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the difference between "Signing" and "Encryption" DSC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "• Signing: Proves who signed the document (Authenticity). Used for GST, ITR, and MCA.
                 • Encryption: Scrambles the data so only the intended recipient can read it (Confidentiality). Mandatory for e-Tenders and certain Customs filings."

              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I use the same DSC for my personal ITR and my company’s GST?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, if you are the Authorized Signatory for both. A Class 3 DSC is issued to an individual (linked to their PAN), and that individual can use it across multiple roles (Director, Proprietor, Individual).
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to get a Class 3 DSC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               With CloudDesk’s Paperless eKYC, it takes approximately 30 to 60 minutes to get the certificate approved. The physical USB token is then couriered to you or can be downloaded onto an existing token you own.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the validity of a DSC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              You can choose a validity of 1, 2, or 3 years. CloudDesk recommends the 2-year option as it offers the best balance between cost and the administrative burden of renewal.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What documents are required for a DSC in 2026?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               For an Individual DSC: Just your PAN and Aadhaar (linked to your mobile). For an Organization DSC: Board Resolution, GST Cert, and the Authorised Signatory's ID proofs.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                I lost my DSC USB Token. Can I get a duplicate?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               No. For security reasons, a DSC cannot be "copied." If you lose the token, you must Revoke the old certificate and apply for a Fresh DSC.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I renew my DSC without a new video verification?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              In 2026, the CCA requires fresh video verification for every renewal to prevent identity theft. CloudDesk makes this "One-Click" via our mobile app.
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
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition">
                    DGFT DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    ICEGATE DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    e-Tender DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    DSC Renewal
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Driver Download
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Java Configuration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Signer Utility
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Troubleshooting
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

export default CloudDeskDigitalSignatures;
