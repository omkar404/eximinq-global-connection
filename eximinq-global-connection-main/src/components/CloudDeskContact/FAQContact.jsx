import React from "react";
import { HelpCircle, ChevronDown, ChevronUp,  } from "lucide-react";

const FAQContact = ({ faqs, activeFaq, setActiveFaq }) => {
    const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center">
            <HelpCircle className="mr-3 text-indigo-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-gray-700">{faq.q}</span>
                  {activeFaq === index ? <ChevronUp className="text-teal-500" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  );
};

export default FAQContact;
