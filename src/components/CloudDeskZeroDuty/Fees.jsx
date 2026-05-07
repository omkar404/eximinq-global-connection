import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal }) => {
  return (
    <section id="fees" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Professional Consultancy
        </h2>

        <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="bg-brand-900 py-4 text-white">
            <h3 className="text-xl font-bold">EPCG Management</h3>
            <p className="text-sm opacity-80">End-to-End Support</p>
          </div>

          <div className="p-8">
            <ul className="mb-8 space-y-3 pl-6 text-left text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-green-500" />
                New License Application
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-green-500" />
                Installation Certificate Coordination
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-green-500" />
                Clubbing of Licenses
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-green-500" />
                EO Period Extension
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-green-500" />
                <strong>EODC / Redemption</strong> (Closure)
              </li>
            </ul>

            <button
              onClick={() =>
                setShowEnrollModal({
                  open: true,
                  actionType: "EPCG Management",
                  source: "services/epcg-scheme",
                })
              }
              className="block w-full rounded-lg bg-brand-600 py-3 font-bold text-white transition hover:bg-brand-700"
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
