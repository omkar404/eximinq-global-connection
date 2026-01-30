import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Fees
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">Logo Copyright</h3>
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

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                NOC Drafting for Designer
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                TM-C Application Filing
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                Form XIV Copyright Filing
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                Statement of Particulars
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                Physical Copy Submission
              </li>
            </ul>

            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Protect My Logo
            </a>
          </div>
        </div>

        {/* Government Fees */}
        <div className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto bg-white p-4 rounded border">
          <strong>*Government Fees:</strong>
          <br />
          TM-C Search: ₹ 9,000 (approx)
          <br />
          Copyright Application: ₹ 500
        </div>
      </div>
    </section>
  );
};

export default Fees;
