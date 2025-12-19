import { Check } from "lucide-react";

const Fees = () => {
  return (
    //    <!-- Pricing Section -->
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">MOOWR Implementation</h3>
            <p className="text-sm opacity-80">End-to-End Setup</p>
          </div>

          {/* Price Box */}
          <div className="p-8">
            {/* <div className="text-4xl font-bold text-slate-900 mb-2">₹ 500</div> */}
            <p className="text-slate-500 text-sm mb-6">
              Converting an existing factory into a Private Bonded Warehouse
              requires strict adherence to Customs regulations. We handle the
              entire licensing and compliance lifecycle.
            </p>

            {/* Features */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500" />
                Feasibility Report & Savings Analysis
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500" />
                Application Filing (Annexure A)
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500" />
                Execution of Triple Duty Bond
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500" />
                Compliance Software Setup (Annexure B)
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500" />
                Monthly Return Filing
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Process Payment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
