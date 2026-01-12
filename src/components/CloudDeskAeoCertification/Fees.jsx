import { Check } from "lucide-react";

const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">
              End-to-End AEO Consultancy
            </h3>
            <p className="text-sm opacity-80">
              From Gap Analysis to Final Audit
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-slate-500 text-sm mb-6">
              AEO certification is a rigorous process requiring
              detailed documentation and well-defined SOPs.
              Our experts guide you through every stage.
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Legal Compliance Check
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Financial Solvency Verification
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Drafting of Security Manuals
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Pre-Audit Mock Drills
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Liaison with AEO Programme Manager
              </li>
            </ul>

            {/* CTA */}
            {/* <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Call for Pricing
            </a> */}
                          <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_REGISTRATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Call for Pricing
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
