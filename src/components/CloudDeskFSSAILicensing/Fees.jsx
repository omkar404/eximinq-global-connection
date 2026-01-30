import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">Central FSSAI License</h3>
            <p className="text-sm opacity-80">Full Consultancy</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">
              ₹ 5,000
            </div>
            <p className="text-slate-500 text-sm mb-6">
              + GST (Excl. Govt Fees)
            </p>

            {/* List */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              {[
                "FoSCoS Portal Registration",
                "Category Selection Advice",
                "Document Upload",
                "Query Resolution",
                "Valid for 1-5 Years",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Application
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          *Govt Fee for Central License is ₹ 7,500/year approx.
        </p>

      </div>
    </section>
  );
}
