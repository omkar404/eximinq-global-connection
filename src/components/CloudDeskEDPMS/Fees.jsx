import { Check } from "lucide-react";

export default function Fees({ setShowEnrollModal }) {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1: EDPMS Support */}
          <div className="max-w-md w-full mx-auto md:mx-0 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">EDPMS Support</h3>
              <p className="text-sm opacity-80">Consultancy & Filing</p> {/* fixed typo */}
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p className="text-slate-500 text-sm mb-6">Based on License Value</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
                {[
                  "Outstanding List Analysis",
                  "Bank Letter Drafting",
                  "IRM Generation",
                  "Caution List Removal",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <Check size={16}  className="text-green-500 mt-0.5"/>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "EDPMS_Support",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Reconciliation
              </button>
            </div>
          </div>

          {/* Card 2: E-BRC Support */}
          <div className="max-w-md w-full mx-auto md:mx-0 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">e-BRC Support</h3>
              <p className="text-sm opacity-80">Per Document Basis</p>
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                ₹ 500
              </div>
              <p className="text-slate-500 text-sm mb-6">Per Shipping Bill Closure</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
                {[
                  "IRM Mapping",
                  "e-BRC Certificate Generation",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <Check size={16} className="text-green-500 mt-0.5"/>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "EBRC_Support",
                  })
                }
                className="mt-auto w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Reconciliation
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          *Volume discounts available for &gt;50 shipping bills.
        </p>
      </div>
    </section>
  );
}