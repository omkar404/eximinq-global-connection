import { Check } from "lucide-react";

export default function Fees({setShowEnrollModal}) {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Package 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">SCN Reply Drafting</h3>
              <p className="text-sm opacity-80">Written Submission</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">Request Quote</div>
              <p className="text-slate-500 text-sm mb-6">Based on Case Complexity</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Case History Analysis
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Case Law Research
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Drafting of Reply
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Annexure Preparation
                </li>
              </ul>

              {/* <a
                href="tel:+917400096950"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Get Estimate
              </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "SCN_Reply_Drafting",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Get Estimate
          </button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">Personal Hearing</h3>
              <p className="text-sm opacity-80">Legal Representation</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">Request Quote</div>
              <p className="text-slate-500 text-sm mb-6">Per Hearing / Appearance</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Appearance before Officer
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Verbal Arguments
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Submission of Written Synopsis
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} /> Next Date Management
                </li>
              </ul>

              {/* <a
                href="tel:+917400096950"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-legal-800 transition"
              >
                Book Consultant
              </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Personal_Hearing",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-legal-800 transition"
              >
                Book Consultant
          </button>
            </div>
          </div>

        </div>

        <p className="text-sm text-slate-500 mt-8">
          *Government Fee for PRC Appeal is ₹ 2,000.
        </p>
      </div>
    </section>
  );
}
