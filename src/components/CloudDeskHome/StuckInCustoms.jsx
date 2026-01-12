import React from "react";
import { Phone, Headphones } from "lucide-react";

export const StuckInCustoms = ({ setShowEnrollModal }) => {
  return (
    <div
      className="mt-10 p-8 bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl 
    text-white flex flex-col md:flex-row items-center justify-between 
    shadow-2xl relative overflow-hidden"
    >
      {/* Light glow circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20" />

      <div className="relative z-10 max-w-md">
        <h3 className="text-2xl font-bold mb-2">Stuck in Customs?</h3>

        <p className="text-indigo-200 mb-4">
          Our 24/7 experts can help resolve IGST refunds, query replies, and
          clearance delays.
        </p>

        <button
          onClick={() => setShowEnrollModal({ open: true, type: "NEED_HELP" })}
          className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition flex items-center"
        >
          <Phone size={18} className="mr-2" />
          Need Help
        </button>
      </div>

      <div className="relative z-10 mt-6 md:mt-0">
        <Headphones size={80} className="text-indigo-300 opacity-80" />
      </div>
    </div>
  );
};
