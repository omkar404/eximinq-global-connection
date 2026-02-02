import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Packages
        </h2>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Package 1 – Non-IAF */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">Non-IAF ISO</h3>
              <p className="text-sm opacity-80">Fast Track</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Best Price Guaranteed
              </p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  1 Certificate (e.g. ISO 9001)
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Basic Documentation
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Digital Copy
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  24–48 Hours Delivery
                </li>
              </ul>

              <a
                href="#Home"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Package 2 – IAF */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">IAF ISO</h3>
              <p className="text-sm opacity-80">Global Recognition</p>
            </div>

            <div className="p-8">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Depends on Employee Count
              </p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Internationally Valid
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Full Audit Support
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Manuals & Procedures
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-500 mt-1" />
                  Surveillance Audits
                </li>
              </ul>

              <a
                href="#Home"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Get Quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fees;

