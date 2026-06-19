import { Check } from "lucide-react";

const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="fees" className="py-20 bg-industrial-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-logistics-900 mb-8">
          Professional Services
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">Permission Liaison</h3>
            <p className="text-sm opacity-80">One-Time Registration</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-logistics-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Per Factory Location
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Application Drafting
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Liaison with AC/DC Exports
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Site Inspection Coordination
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                NOC Procurement from GST
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                EDI Registration Assistance
              </li>
            </ul>

            {/* <a
              href="#home"
               className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Get Started
            </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Permission_Liaison",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Process
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;

