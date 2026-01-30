import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-horti-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-horti-900 mb-8">
          Professional Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-600 text-white py-4">
              <h3 className="text-xl font-bold">Registration Services</h3>
              <p className="text-sm opacity-80">APEDA / PQMS</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Per Registration
              </p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  APEDA RCMC Filing
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  Plant Quarantine Import Permit
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  Traceability Net Registration
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  Document Verification
                </li>
              </ul>

              <a
                href="#home"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-600 text-white py-4">
              <h3 className="text-xl font-bold">Subsidy Consultancy</h3>
              <p className="text-sm opacity-80">NHB / MOFPI</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p className="text-slate-500 text-sm mb-6">
                % of Subsidy Amount
              </p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  DPR Preparation (CA Certified)
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  Online Application (IPA)
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  Bank Loan Liaison
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  JIT Inspection Coordination
                </li>
              </ul>

              <a
                href="#home"
               className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
