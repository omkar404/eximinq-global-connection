// const Fees = () => {
//   return (
// //    <!-- Pricing Section -->
//     <section id="pricing" class="py-20 bg-slate-50">
//         <div class="container mx-auto px-4 text-center">
//             <h2 class="text-3xl font-bold text-slate-900 mb-8">Professional Fees</h2>
//             <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
               
//                 <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
//                     <div class="bg-brand-800 text-white py-4">
//                         <h3 class="text-xl font-bold">ICEGATE Registration</h3>
//                         <p class="text-sm opacity-80">New ID Creation + DSC Linking</p>
//                     </div>
//                     <div class="p-8">
//                         <div class="text-4xl font-bold text-slate-900 mb-2">₹ 2,000</div>
//                         <p class="text-slate-500 text-sm mb-6">+ GST</p>
//                         <ul class="text-left space-y-3 mb-8 text-sm text-slate-600">
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> ICEGATE ID Creation</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Profile Validation</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Digital Signature Mapping</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Common Signer Utility Setup</li>
//                         </ul>
//                         <a href="#contact" class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition">Get Started</a>
//                     </div>
//                 </div>

//                 {/* <!-- Package 2 --> */}
//                 <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 relative">
//                     <div class="absolute top-0 right-0 bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
//                     <div class="bg-brand-900 text-white py-4">
//                         <h3 class="text-xl font-bold">AD Code Registration</h3>
//                         <p class="text-sm opacity-80">Per Port Registration</p>
//                     </div>
//                     <div class="p-8">
//                         <div class="text-4xl font-bold text-slate-900 mb-2">₹ 2,500</div>
//                         <p class="text-slate-500 text-sm mb-6">+ GST (Per Port)</p>
//                         <ul class="text-left space-y-3 mb-8 text-sm text-slate-600">
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Bank Letter Drafting</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> e-Sanchit Upload (IRN Generation)</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Online Submission to Customs</li>
//                             <li class="flex gap-2"><i class="fas fa-check text-green-500"></i> Query Resolution Support</li>
//                         </ul>
//                         <a href="#contact" class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition">Register Port</a>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </section>




//   );
// };

// export default Fees;


import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">
              End-to-End AEO Consultancy
            </h3>
            <p className="text-sm opacity-80">
              From Gap Analysis to Final Audit
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-slate-500 text-sm mb-6">
              AEO certification is a rigorous process requiring
              detailed documentation and well-defined SOPs.
              Our experts guide you through every stage.
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Legal Compliance Check
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Financial Solvency Verification
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Drafting of Security Manuals
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Pre-Audit Mock Drills
              </li>
              <li className="flex gap-2 items-start">
                <Check size={16} className="text-green-500 mt-0.5" />
                Liaison with AEO Programme Manager
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#home"
              className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Call for Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
