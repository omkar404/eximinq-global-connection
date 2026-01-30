import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Services
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
         <div className="bg-brand-600 text-white py-4">
            <h3 className="text-xl font-bold">TM Registration</h3>
            <p className="text-sm opacity-80">Consultancy & Filing</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Govt Fees Separate*
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                Comprehensive TM Search
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                Class Identification
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                Application Drafting & Filing
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                Basic Objection Handling
              </li>
              <li className="flex gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                Renewal Reminders
              </li>
            </ul>

            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Application
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          **Government Fees:
          <br />
          <span className="font-bold">₹ 4,500 for Individual / Start-up / MSME</span>
          <br />
          <span className="font-bold">₹ 9,000 for Company / LLP / Others</span>
        </p>
      </div>
    </section>
  );
};

export default Fees;
