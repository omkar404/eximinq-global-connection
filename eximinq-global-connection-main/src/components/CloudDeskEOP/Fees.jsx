import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal, setEnrollSource }) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Services
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">EOP Management</h3>
            <p className="text-sm opacity-80">Consultancy & Filing</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Based on License Value
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
              {[
                "Shortfall Analysis",
                "Fee Calculation",
                "Online Filing",
                "Liaison with DGFT RA",
                "PRC Appeal (if needed)",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "EOP_MANAGEMENT",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Extend Now
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fees;
