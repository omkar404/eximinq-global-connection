import { Check } from "lucide-react";

const Fees = () => {
  return (
//    <!-- Pricing Section -->
   <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

          {/* Card Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">e-Sanchit Support</h3>
            <p className="text-sm opacity-80">Pay Per Job Basis</p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">₹ 500</div>
            <p className="text-slate-500 text-sm mb-6">
              Per Consignment (Up to 5 Docs)
            </p>

            {/* Features */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-center">
                <Check className="text-green-500" size={18} />
                PDF Conversion & Compression
              </li>

              <li className="flex gap-2 items-center">
                <Check className="text-green-500" size={18} />
                Digital Signature Application
              </li>

              <li className="flex gap-2 items-center">
                <Check className="text-green-500" size={18} />
                Document Type Code Mapping
              </li>

              <li className="flex gap-2 items-center">
                <Check className="text-green-500" size={18} />
                IRN Generation
              </li>

              <li className="flex gap-2 items-center">
                <Check className="text-green-500" size={18} />
                Error Resolution
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Upload
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-slate-500 mt-6">
          *For bulk uploads or annual contracts, please contact our sales team.
        </p>

      </div>
    </section>

  );
};

export default Fees;
