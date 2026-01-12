import React from "react";
import { Award, Globe, CheckCircle } from "lucide-react";

const COOServiceCards = ({ onPreferentialEnroll, onNonPreferentialEnroll }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

      {/* Preferential COO */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:border-teal-200 transition group">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition">
          <Award size={32} />
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Preferential COO</h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Required for claiming duty concessions under Free Trade Agreements (FTAs).
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "SAPTA / SAFTA",
            "ASEAN-India FTA (AIFTA)",
            "India-UAE CEPA",
            "GSP (Generalized System of Preferences)",
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" />
              <strong>{item}</strong>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onPreferentialEnroll({ open: true, type: "PREFERENTIAL" })}
          className="w-full py-3 border-2 border-teal-600 text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition"
        >
          Enroll Now
        </button>
      </div>

      {/* Non-Preferential COO */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:border-indigo-200 transition group">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
          <Globe size={32} />
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Non-Preferential COO</h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Used for general exports, anti-dumping, LC, and destination customs compliance.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "Chamber of Commerce Attestation",
            "Embassy Legalization",
            "European Union Exports",
            "Middle East Export Documentation",
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <CheckCircle size={16} className="text-indigo-500 mr-2 mt-0.5" />
              <strong>{item}</strong>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onNonPreferentialEnroll({open: true, type: "NON_PREFERENTIAL" })}
          className="w-full py-3 border-2 border-indigo-600 text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default COOServiceCards;
