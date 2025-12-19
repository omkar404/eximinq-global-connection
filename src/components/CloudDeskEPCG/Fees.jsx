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
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">
              Bond &amp; BG Management
            </h3>
            <p className="text-sm opacity-80">
              Registration &amp; Closure
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-brand-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Based on License Value
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Bond Drafting &amp; Notary
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                BG Format &amp; Bank Coordination
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Physical Filing to Bond Section
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Bond Cancellation (Post-Redemption)
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                License Debiting Endorsement
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Process
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-slate-500 mt-6">
          *Stamp paper and Bank Guarantee charges are borne by the client.
        </p>
      </div>
    </section>
  );
};

export default Fees;
