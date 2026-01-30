import React from "react";

export const StatsStrip = () => {
  return (
    <div className="bg-white border-b border-gray-200 relative z-20 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-lg flex flex-wrap justify-around py-6 text-center">

      {/* Live Support */}
      <div className="w-1/2 md:w-1/4 p-2">
        <div className="text-3xl font-bold text-indigo-900">24x7</div>
        <div className="text-sm text-gray-500 font-medium uppercase">Live Support</div>
      </div>

      {/* Compliance */}
      <div className="w-1/2 md:w-1/4 p-2 border-l border-gray-100">
        <div className="text-3xl font-bold text-teal-600">100%</div>
        <div className="text-sm text-gray-500 font-medium uppercase">Compliance</div>
      </div>

      {/* CHA & Logistics */}
      <div className="w-1/2 md:w-1/4 p-2 md:border-l border-gray-100 mt-4 md:mt-0">
        <div className="text-3xl font-bold text-red-700">CHA</div>
        <div className="text-sm text-gray-500 font-medium uppercase">& Logistics Aid</div>
      </div>

      {/* DGFT Experts */}
      <div className="w-1/2 md:w-1/4 p-2 border-l border-gray-100 mt-4 md:mt-0">
        <div className="text-3xl font-bold text-gray-800">DGFT</div>
        <div className="text-sm text-gray-500 font-medium uppercase">Experts</div>
      </div>

    </div>
  );
};
