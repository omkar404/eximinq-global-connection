import { Check } from "lucide-react";

export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Token Pricing</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* PACKAGE 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">DGFT / ICEGATE</h3>
              <p className="text-sm opacity-80">Individual / Organization</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">₹ 2,000</div>
              <p className="text-slate-500 text-sm mb-6">+ GST (2 Years Validity)</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Class 3 Signing Certificate
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  FIPS Certified USB Token
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Paperless Video KYC
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Installation Support
                </li>
              </ul>

              <a
                href="tel:+917400096950"
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Buy Now
              </a>
            </div>
          </div>

          {/* PACKAGE 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-accent-500 text-brand-900 py-4">
              <h3 className="text-xl font-bold">Combo Pack</h3>
              <p className="text-sm opacity-80">Signing + Encryption</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">₹ 3,500</div>
              <p className="text-slate-500 text-sm mb-6">+ GST (2 Years Validity)</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Signing + Encryption Certs
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Works for Tenders/GST also
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  FIPS Certified USB Token
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-500" size={18} />
                  Priority Support
                </li>
              </ul>

              <a
                href="tel:+917400096950"
                className="block w-full bg-accent-600 text-white font-bold py-3 rounded-lg hover:bg-accent-700 transition"
              >
                Best Value
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
