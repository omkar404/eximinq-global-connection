import { Check } from "lucide-react";

export default function Fees({setShowEnrollModal}) {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">Liability Clearance</h3>
            <p className="text-sm opacity-80">Full Audit & Resolution</p>
          </div>

          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">Request Quote</div>
            <p className="text-slate-500 text-sm mb-6">Based on Liability Amount  </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Full Liability Audit
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Case-by-Case Closure Strategy
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                Duty/Interest Calculation
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                DEL Removal Filing
              </li>

              <li className="flex gap-2">
                <Check className="text-green-500 w-5 h-5" />
                NDC Issuance Coordination
              </li>

            </ul>

            {/* <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Process
            </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Liability_Clearance",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Audit
          </button>
          </div>
        </div>

      </div>
    </section>
  );
}
