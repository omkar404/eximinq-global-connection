


import { CheckCircle } from "lucide-react";

const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Services
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">RoDTEP Management</h3>
            <p className="text-sm opacity-80">End-to-End Support</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
                ICEGATE Ledger Creation
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Scrip Generation
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Transfer / Sale of Scrips
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Correction of SB Errors
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Buying Scrips for Imports
              </li>
            </ul>

            {/* Button */}
            {/* <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Get Expert Help
            </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "RoDTEP_Management",
                  })
                }
                className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded hover:bg-brand-700 transition"
              >
                Get Expert Help
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
