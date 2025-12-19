import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-brand-900 mb-8">
          Professional Services
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">RMCC Alert Resolution</h3>
            <p className="text-sm opacity-80">Urgent Intervention</p>
          </div>

          <div className="p-8">
            <div className="text-3xl font-bold text-brand-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Based on Hold Type & Value
            </p>

            {/* Features */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Upfront Diagnosis (Required)
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Documentation Preparation
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Officer Liaison
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Demurrage Waiver Strategy
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Final OOC Generation
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Call Emergency Line
            </a>
          </div>
        </div>

        {/* Govt Fees */}
        <div className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto bg-white p-4 rounded border">
          *Fees are quoted competitively to save you more than the demurrage costs.
        </div>
      </div>
    </section>
  );
};

export default Fees;
