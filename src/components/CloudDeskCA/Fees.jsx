import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-brand-900 mb-8">
          Service Charges
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">
              CA Certificate Issuance
            </h3>
            <p className="text-sm opacity-80">
              DGFT / Customs Compliance
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-brand-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Based on Complexity &amp; Turnover
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Data Consolidation &amp; Audit
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                DGFT Appendix Formatting
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Digital Signing (UCN Generation)
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Quick Turnaround Time (TAT)
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                DGFT Query Support
              </li>
            </ul>

            {/* CTA */}
            <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Process
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto bg-white p-4 rounded border">
          *Pricing varies significantly based on whether a certificate is required for 1 FY, 3 FYs, or full EODC closure.
        </div>
      </div>
    </section>
  );
};

export default Fees;
