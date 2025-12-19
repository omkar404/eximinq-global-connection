import React from "react";
import { ArrowRight } from "lucide-react";

const CTASectionCOO = ({ setShowModal }) => {
  return (
    <section className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Need help identifying your Trade Agreement benefits?
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Our experts can analyze your product and destination to tell you exactly which COO saves you the most duty.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="px-10 py-3 bg-indigo-900 text-white font-bold rounded-full shadow-lg hover:bg-indigo-800 transition flex items-center justify-center mx-auto"
        >
          Enroll Now <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default CTASectionCOO;
