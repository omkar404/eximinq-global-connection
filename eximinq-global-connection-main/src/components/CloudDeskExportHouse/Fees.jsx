import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">Status Certification</h3>
            <p className="text-sm opacity-80">Full Service</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Based on Category (1-5 Star)
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
              {[
                "Export Turnover Audit",
                "Double Weightage Optimization",
                "ANF 3C Filing",
                "CA Certificate Coordination",
                "Certificate Issuance",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
