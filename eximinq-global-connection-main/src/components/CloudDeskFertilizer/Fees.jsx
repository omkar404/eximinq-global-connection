import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">
              Fertiliser Import License
            </h3>
            <p className="text-sm opacity-80">
              Full Consultancy
            </p>
          </div>

          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              State-specific variation
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check size={16} className="text-brand-600 mt-1" />
                Form A1 Preparation
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-brand-600 mt-1" />
                Godown Layout Assistance
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-brand-600 mt-1" />
                iFMS Portal Registration
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-brand-600 mt-1" />
                Bio-stimulant Dossier (Form G)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-brand-600 mt-1" />
                Department Liaison
              </li>
            </ul>

            <a
              href="#Home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Application
            </a>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-sm text-slate-500 mt-6">
          *Govt fees vary by State (approx ₹ 1,500 – ₹ 5,000).
        </p>

      </div>
    </section>
  );
};

export default Fees;
