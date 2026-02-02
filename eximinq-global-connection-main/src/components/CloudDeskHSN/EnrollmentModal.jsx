import React from "react";
import { X, Handshake, Mail, Building } from "lucide-react";

const EnrollmentModal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[80] p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">

        {/* Header */}
        <div className="bg-indigo-900 text-white p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <Handshake className="mr-2 text-teal-400" /> Enroll Now
          </h2>
          <button onClick={() => setShowModal(false)} className="text-white/70 hover:text-white">
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">

          <div>
            <label className="text-sm font-bold">Name</label>
            <input className="w-full p-3 border rounded-lg mt-1" placeholder="Your Name" />
          </div>

          <div>
            <label className="text-sm font-bold">Mobile No</label>
            <input className="w-full p-3 border rounded-lg mt-1" placeholder="+91 XXXXX XXXXX" />
          </div>

          <div>
            <label className="text-sm font-bold">Entity Name</label>
            <div className="relative">
              <Building size={16} className="absolute left-3 top-4 text-gray-400" />
              <input className="w-full p-3 pl-10 border rounded-lg mt-1" placeholder="Company / Firm Name" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">Email ID</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-4 text-gray-400" />
              <input className="w-full p-3 pl-10 border rounded-lg mt-1" placeholder="you@domain.com" />
            </div>
          </div>

          <button className="w-full py-3 mt-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl">
            Submit Enrollment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
