import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Preferential */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500">
            <div className="bg-green-50 py-4 border-b border-green-100">
              <h3 className="text-xl font-bold text-green-900">Preferential CoO</h3>
              <p className="text-sm text-green-700">FTA / PTA / CEPA</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">₹ 1,500</div>
              <p className="text-slate-500 text-sm mb-6">+ GST (Per Certificate)</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex gap-2">
                  <Check className="text-green-500 w-4 h-4" /> Duty Benefit Analysis
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 w-4 h-4" /> Rules of Origin Check
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 w-4 h-4" /> DGFT Digital Filing
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500 w-4 h-4" /> Expert Consultation
                </li>
              </ul>

              <a
                href="tel:+917400096950"
                className="block w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
              >
                Apply Preferential
              </a>
            </div>
          </div>

          {/* Card 2: Non-Preferential */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-slate-500">
            <div className="bg-slate-50 py-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Non-Preferential CoO</h3>
              <p className="text-sm text-slate-600">General Exports</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">₹ 500</div>
              <p className="text-slate-500 text-sm mb-6">+ GST (Per Certificate)</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex gap-2">
                  <Check className="text-slate-500 w-4 h-4" /> Standard Origin Proof
                </li>
                <li className="flex gap-2">
                  <Check className="text-slate-500 w-4 h-4" /> Chamber/Agency Liaison
                </li>
                <li className="flex gap-2">
                  <Check className="text-slate-500 w-4 h-4" /> Fast Track Issuance
                </li>
                <li className="flex gap-2">
                  <Check className="text-slate-500 w-4 h-4" /> Basic Documentation
                </li>
              </ul>

              <a
                href="tel:+917400096950"
                className="block w-full bg-slate-600 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition"
              >
                Apply Non-Preferential
              </a>
            </div>
          </div>

        </div>

        <p className="text-sm text-slate-500 mt-8">
          *Government fees (approx ₹ 600 - ₹ 1000) are payable directly on the portal.
        </p>

      </div>
    </section>
  );
};

export default Fees;
