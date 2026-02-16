import { Check } from "lucide-react";

const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">EPCG Management</h3>
            <p className="text-sm opacity-80">End-to-End Support</p>
          </div>

          {/* List */}
          <div className="p-8">
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                New License Application
              </li>

              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                Installation Certificate Coordination
              </li>

              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                Clubbing of Licenses
              </li>

              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                EO Period Extension
              </li>

              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                <strong>EODC / Redemption</strong> (Closure)
              </li>
            </ul>

            {/* CTA Button */}
            {/* <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Consult Now
            </a> */}
                          <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "EPCG_MANAGEMENT",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Consult Now
              </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fees;
