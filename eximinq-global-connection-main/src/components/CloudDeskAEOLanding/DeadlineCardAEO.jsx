import React from "react";
import { CheckCircle } from "lucide-react";

const DeadlineCardAEO = ({ timeLeft }) => {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const values = Object.values(timeLeft);

  return (
    <section id="deadline" className="relative -mt-16 z-20 container mx-auto px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto border-t-4 border-red-500">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-500 uppercase tracking-wide font-semibold text-sm">
              Deadline Approaching
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              December 31, 2025
            </h2>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {labels.map((label, idx) => (
                <div key={label} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-3 w-16 md:w-20">
                    <span className="text-xl md:text-2xl font-bold text-blue-900 block">
                      {values[idx]}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Special Rate</h3>

            <div className="text-5xl font-extrabold text-blue-600 mb-2">₹3999/-</div>
            <p className="text-sm text-gray-600 mb-4">Professional Filing Service</p>

            <ul className="text-left space-y-2 mb-6 text-sm text-gray-700 mx-auto max-w-xs">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Expert Review
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Compliance Check
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Timely Submission
              </li>
            </ul>

            <button
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Claim Offer
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DeadlineCardAEO;