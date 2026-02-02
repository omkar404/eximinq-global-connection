import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">Quarantine Clearance</h3>
            <p className="text-sm opacity-80">Full Service Consultancy</p>
          </div>

          {/* Pricing + Features */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">₹ 7,500</div>
            <p className="text-slate-500 text-sm mb-6">+ GST (Per Bill of Entry)</p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              {[
                "Online Filing (PQMS/SIP)",
                "Officer Appointment",
                "Sample Coordination",
                "Lab Follow-up",
                "Final NOC Generation",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <Check className="text-green-500 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="tel:+917400096950"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Clearance
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          *Govt Fees for Inspection/Testing are payable at actuals.
        </p>

      </div>
    </section>
  );
}
