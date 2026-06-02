import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Services
        </h2>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-600 text-white py-4">
            <h3 className="text-xl font-bold">
              Logo Copyright
            </h3>
            <p className="text-sm opacity-80">
              Full Package (TM-C + Copyright)
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Includes Drafting & Filing
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Check
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                NOC Drafting for Designer
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                TM-C Application Filing
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                Form XIV Copyright Filing
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                Statement of Particulars
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                Physical Copy Submission
              </li>
            </ul>

            <button
              onClick={() =>
                setShowEnrollModal({
                  open: true,
                  type: "Logo_Copyright",
                })
              }
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Protect My Logo
            </button>
          </div>
        </div>

        {/* Government Fees */}
        <div className="mt-8 max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-center text-slate-600">
            <h4 className="font-bold text-slate-700 mb-1">
              *Government Fees:
            </h4>

            <p>TM-C Search: ₹ 9,000 (approx)</p>

            <p>Copyright Application: ₹ 500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;