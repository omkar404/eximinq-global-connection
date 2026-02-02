import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">REX Registration</h3>
            <p className="text-sm opacity-80">One-Time Registration</p>
          </div>

          {/* Pricing Body */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">₹ 7,500</div>
            <p className="text-slate-500 text-sm mb-6">+ GST (All Inclusive)</p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500 w-4" />
                Online Application Filing
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4" />
                Node Officer Selection Advice
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4" />
                Document Verification
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4" />
                REX Number Generation
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4" />
                Invoice Declaration Format
              </li>
            </ul>

            <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Get REX Number
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          *There is currently No Government Fee for REX Registration.
        </p>

      </div>
    </section>
  );
}
