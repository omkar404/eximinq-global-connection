import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-10">
          Professional Fees
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* AD Code Registration */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">AD Code Registration</h3>
              <p className="text-sm opacity-80">Per Port Charges</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 2,500
              </div>
              <p className="text-slate-500 text-sm mb-6">+ GST</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Draft Bank Letter Format
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Document Review
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  e-Sanchit Upload (IRN)
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Online Application Filing
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Follow-up on Queries
                </li>
              </ul>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Register Now
              </button>
            </div>
          </div>

          {/* IFSC Registration */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">IFSC Registration</h3>
              <p className="text-sm opacity-80">One-time Charges</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 1,500
              </div>
              <p className="text-slate-500 text-sm mb-6">+ GST</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  IFSC Mapping with Bank
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Document Verification
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Application Submission
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Follow-up on Queries
                </li>
              </ul>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-slate-500 mt-8">
          *Note: If ICEGATE ID is not created, additional charges apply for ID
          creation.
        </p>
      </div>
    </section>
  );
};

export default Fees;
