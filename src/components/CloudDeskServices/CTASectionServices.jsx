import React from "react";
import { Phone } from "lucide-react";

const CTASectionServices = ({ openModal }) => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between 
                      bg-gradient-to-r from-teal-50 to-white p-10 rounded-3xl border border-teal-100 shadow-sm">

        {/* Left Content */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Need a Custom Compliance Solution?
          </h2>
          <p className="text-gray-600 max-w-lg">
            Whether it's a one-time audit or a long-term retainer for all your EXIM needs,
            we tailor our services to fit your business perfectly.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* Call Back Button */}
          <button
            onClick={openModal}
            className="flex items-center px-6 py-3 bg-white border-2 border-indigo-900 text-indigo-900 
                       font-bold rounded-xl hover:bg-gray-50 transition shadow-sm"
          >
            <Phone size={20} className="mr-2" /> Request Call Back
          </button>

          {/* Quote Button */}
          <button
            onClick={openModal}
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold 
                       rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASectionServices;
