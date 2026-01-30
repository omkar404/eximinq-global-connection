import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-brand-900 mb-8">
          Professional Services
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Card Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">SVB Compliance</h3>
            <p className="text-sm opacity-80">
              Full Filing &amp; Resolution
            </p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-brand-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Based on Complexity &amp; EDD Risk
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Detailed Questionnaire Reply
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                EDD Reduction / Waiver Application
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Liaison with SVB Authorities
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Final Order Follow-up
              </li>
              <li className="flex gap-2 items-start">
                <Check className="text-green-500 mt-0.5" size={16} />
                Annual Compliance Report
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start SVB Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
