import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">Certification Service</h3>
            <p className="text-sm opacity-80">Liaison & Documentation</p>
          </div>

          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">Request Quote</div>
            <p className="text-slate-500 text-sm mb-6">Depends on Port & Complexity</p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Incentive Refund Calculation
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Challan Generation
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Application Filing with AC/DC
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Follow-up for Certificate
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Chartered Engineer (Optional)
              </li>

            </ul>

            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Process
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
