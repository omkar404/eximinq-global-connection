// import TopBar from "../components/CloudDeskESANCHIT/TopBar";
import Navbar from "../components/CloudDeskESANCHIT/Navbar";
import Hero from "../components/CloudDeskESANCHIT/Hero";
import Fees from "../components/CloudDeskESANCHIT/Fees";
import {
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
  Check,
  FileText,
  Key,
  Laptop2,
  CheckCircle,
  XCircle,
  Lightbulb,
  ScanLine,
  SlidersHorizontal,
  Signature,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskESANCHIT/MainNavbar";

const CloudDeskESANCHIT = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" class="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is e-Sanchit?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>e-Sanchit</strong> (e-Storage and Computerized Handling of
              Indirect Tax documents) is a mandatory component of the SWIFT
              (Single Window Interface for Facilitating Trade) initiative by
              Indian Customs. It allows importers and exporters to upload
              supporting documents like Invoices, Packing Lists, and
              Certificates digitally.
            </p>
            <p className="mb-4">
              Once a document is successfully uploaded and digitally signed, the
              system generates a unique{" "}
              <strong>Image Reference Number (IRN)</strong>. This IRN must be
              quoted in the Bill of Entry or Shipping Bill for the Customs
              Officer to view the document. Physical submission of papers is no
              longer required.
            </p>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Prerequisites
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Technical Requirements
            </h2>
            <p className="text-slate-500 mt-2">
              Strict standards apply for successful upload.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Requirement 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <FileText size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                PDF Standards
              </h3>

              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Must be PDF/A format
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Max size: 1 MB per file
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Resolution: 200 DPI (B&W)
                </li>
                <li className="flex items-center">
                  <XCircle className="text-red-500 mr-2" size={16} />
                  No Color / Greyscale
                </li>
              </ul>
            </div>

            {/* Requirement 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Digital Signature
              </h3>

              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Class 3 DSC Required
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Organization Based
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Linked to ICEGATE ID
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Token Driver Installed
                </li>
              </ul>
            </div>

            {/* Requirement 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Laptop2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                System Setup
              </h3>

              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  ICEGATE Account Active
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Java Runtime (JRE)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Signing Utility v2.0
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  PKI Component
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3 max-w-3xl mx-auto">
            <Lightbulb className="text-yellow-600 mt-1" size={22} />
            <div>
              <h4 className="font-bold text-yellow-800 text-sm">Pro Tip:</h4>
              <p className="text-sm text-yellow-700">
                Most upload failures occur because the PDF is colored or the
                file size exceeds 1MB. We have specialized tools to compress and
                convert documents without losing clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              IRN Generation Workflow
            </h2>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-accent-500">
                <ScanLine className="text-brand-900" size={30} />
              </div>
              <h3 className="text-lg font-bold mb-2">Scan & Send</h3>
              <p className="text-sm text-slate-300">
                You email us the scanned copies of Invoice, PL, BL, etc.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-accent-500">
                <SlidersHorizontal className="text-brand-900" size={30} />
              </div>
              <h3 className="text-lg font-bold mb-2">Optimize</h3>
              <p className="text-sm text-slate-300">
                We convert files to B&W, resize to below 1MB, and fix format
                issues.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-accent-500">
                <Signature className="text-brand-900" size={30} />
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Sign</h3>
              <p className="text-sm text-slate-300">
                We apply your Digital Signature securely using the official
                utility.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white">
                <Check size={30} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Generate IRN</h3>
              <p className="text-sm text-slate-300">
                Upload to ICEGATE and share the generated IRNs with you
                instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees />

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">e-Sanchit is where "Technical Glitches" meet "Customs Delays." CloudDesk is the filter that ensures only perfect data reaches the officer.</h2>
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
                        <h4 className="font-bold text-slate-900 mb-2">1. The "Format-First" Auto-Optimizer</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong>ICEGATE </strong>is incredibly picky: PDFs must be under 1MB, no special characters in filenames, and specific DPI settings. 
                          <strong>CloudDesk’s</strong> Auto-Formatter takes your raw scans and <strong>instantly compresses, renames, and optimizes</strong> them to meet the exact ICEGATE 2026 specifications. 
                          No more <strong>"File Size Exceeded" or "Invalid Format" </strong>rejections.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Universal Signer Bridge</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The most common failure point is the <strong>Digital Signature (DSC) mapping.</strong> 
                          <strong>CloudDesk </strong>provides a custom-built Signer Utility that works across all browsers <strong>(Chrome, Edge, Firefox). </strong>
                          It ensures your DSC is detected and the document is "Hard-Signed" before the upload even begins.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. IRN Ledger & Auto-Population</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Manually copying 16-digit <strong>Image Reference Numbers (IRN)</strong> into your <strong>Shipping Bill or BoE</strong>
                          is an invitation for typos.<strong> CloudDesk</strong> maintains a Digital IRN Vault. 
                          Once a document is uploaded, the IRN is automatically pulled into your filing draft, eliminating the risk of "Invalid IRN" queries.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Multi-Document Batch Processing</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Instead of uploading one document at a time and waiting for the <strong>"Success" message, CloudDesk</strong> allows for Batch Uploads. 
                          Drag and drop your <strong>Invoice, Packing List, and Certificate </strong>of Origin; <strong>CloudDesk</strong> handles the sequential upload and gathers all your IRNs in one go.
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
            Common e-Sanchit Queries
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is a DRN vs IRN?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                <strong>DRN (Document Reference Number):</strong> Generated
                temporarily when a document is uploaded.
                <br />
                <strong>IRN (Image Reference Number):</strong> Generated after
                the DRN is digitally signed and submitted. Only the IRN is valid
                for customs filing.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Why am I getting "Digital Signature Not Verified" error?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This happens if the DSC used to sign the PDF is not registered
                under the same ICEGATE ID being used for upload. It may also
                occur if the Signing Utility (Signer) is outdated.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I upload documents after filing the Bill of Entry?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes — use the <strong>e-Sanchit (Post Filing)</strong> option.
                You must provide the Job Number and Date to link the additional
                documents to the existing Bill of Entry.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What are the exact file specifications for e-Sanchit in 2026?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Documents must be in PDF format, preferably in black and white (to save space). Each file must be less than 1 MB. The filename should not contain spaces or special characters (e.g., use Invoice_123.pdf instead of Invoice #123.pdf).
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is a Digital Signature mandatory for every upload?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. Every document uploaded to e-Sanchit must be digitally signed by the person registered on the ICEGATE profile (either the Importer/Exporter or the authorized CHA).
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I upload a photograph of a document?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Photographs (JPEG/PNG) are not accepted. You must scan the document and convert it to a clear, legible PDF. CloudDesk’s mobile app includes a "Customs-Grade Scanner" that does this automatically.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is an IRN, and how long does it take to generate?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                An Image Reference Number (IRN) is a unique 16-digit number generated by the system for every successful upload. Usually, it is generated instantly. If it’s "Pending," CloudDesk’s Ping-Bot monitors the status and alerts you the moment it’s ready
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Once I have an IRN, is the document permanently saved?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, the document is stored in the ICEGATE repository. However, an IRN is typically linked to a specific job. If you need to use the same document (like an Annual Insurance Policy) for multiple shipments, CloudDesk helps you re-use the IRN, saving you from redundant uploads.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What should I do if the system says "Signature Verification Failed"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This usually happens if the DSC used for signing is not the same as the one mapped to the ICEGATE ID. CloudDesk’s DSC-Verify Tool checks the mapping before you sign to prevent this error.
              </p>
            </details>

          {/* FAQ 10 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I delete a document after generating an IRN?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No, you cannot delete it from the Customs server once the IRN is generated. If you uploaded the wrong file, you must upload the correct one, generate a new IRN, and use the new one in your filing.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How many documents can I link to a single Bill of Entry?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                There is no hard limit, but you must upload all "Mandatory Documents" (Invoice, PL, BL) plus any "Supportive Documents" required for duty exemptions. CloudDesk provides a Checklist per HSN so you know exactly which documents need an IRN.
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
                    <li><a href="#" class="hover:text-white transition">e-Sanchit Upload</a></li>
                    <li><a href="#" class="hover:text-white transition">DSC Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">AD Code Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">IGST Refund</a></li>
                </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Document Code List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DSC Utility Guide
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  ICEGATE Advisory
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Java Settings
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

export default CloudDeskESANCHIT;
