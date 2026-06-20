import { Check } from "lucide-react";

const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="fees" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-brand-900 mb-8">
          Professional Services
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">Bar Code Registration</h3>
            <p className="text-sm opacity-80">Full GS1 Support</p>
          </div>

          <div className="p-8">
            <div className="text-3xl font-bold text-brand-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Based on Turnover & SKU Count
            </p>

            {/* Features */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Document Verification
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Capacity Planning (100/1k/10k)
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Online Filing Support
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                DataKart Product Upload
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Barcode Image Generation
              </li>
            </ul>

            {/* CTA */}
            {/* <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Filing
            </a> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Bar_Code_Registration",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Process
          </button>
          </div>
        </div>

        {/* Govt Fees */}
        <p className="text-sm text-slate-500 mt-8">*Official GS1 fees vary (e.g., approx ₹ 50k for 100 SKUs for 10 years). Consult us for the exact slab.</p>
      </div>
    </section>
  );
};

export default Fees;
