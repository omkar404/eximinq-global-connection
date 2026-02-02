import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">GST LUT Filing</h3>
            <p className="text-sm opacity-80">Annual Compliance</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">₹ 1,000</div>
            <p className="text-slate-500 text-sm mb-6">+ GST (Per Financial Year)</p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500 w-4 h-4" />
                Form GST RFD-11 Filing
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4 h-4" />
                ARN Generation
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4 h-4" />
                Witness Data Management
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4 h-4" />
                Download Acknowledgement
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 w-4 h-4" />
                Validity Tracking
              </li>
            </ul>

            {/* Call to action */}
            <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              File Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
