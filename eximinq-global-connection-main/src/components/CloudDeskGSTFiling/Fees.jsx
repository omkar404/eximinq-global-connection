import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Fees
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">Monthly Retainership</h3>
            <p className="text-sm opacity-80">Complete GST Compliance</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Based on Volume of Invoices
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                GSTR-1 &amp; GSTR-3B Filing
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Export Invoice Validation
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                GSTR-2B Reconciliation
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Refund Tracking Support
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Phone/Email Support
              </li>
            </ul>

            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Get Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;


