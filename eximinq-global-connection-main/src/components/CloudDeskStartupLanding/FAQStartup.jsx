import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQStartup = ({ FAQS, openFaq, setOpenFaq }) => {
  return (
     <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">Common Questions for New Exporters</h2>
             <p className="text-slate-400">Everything you need to know before you start.</p>
           </div>
           
           <div className="space-y-4">
             {FAQS.map((faq, idx) => (
               <div key={idx} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                 <button 
                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                   className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                 >
                   <span className="font-semibold text-white">{faq.q}</span>
                   {openFaq === idx ? <ChevronUp className="text-sky-400 w-5 h-5" /> : <ChevronDown className="text-slate-500 w-5 h-5" />}
                 </button>
                 {openFaq === idx && (
                   <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                     {faq.a}
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </section>

  );
};

export default FAQStartup;
