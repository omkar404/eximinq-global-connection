import React from "react";
import { LifeBuoy, Briefcase, Handshake } from "lucide-react";

const PartnerInfo = ({ setShowModal }) => {
  return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full flex flex-col justify-center">
              <div className="mb-8">
                 <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                   <LifeBuoy className="mr-3 text-teal-600" /> Partner with CloudDesk
                 </h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   Join India's leading compliance helpdesk network. Whether you are an Importer, Exporter, CHA, or Logistics Provider, our platform streamlines your regulatory needs.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2 flex items-center"><Briefcase size={18} className="mr-2" /> For Businesses</h4>
                    <p className="text-sm text-gray-600">Get 24/7 access to DGFT & Customs experts, duty saving audits, and instant query resolution.</p>
                 </div>
                 <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h4 className="font-bold text-teal-900 mb-2 flex items-center"><Handshake size={18} className="mr-2" /> For Partners</h4>
                    <p className="text-sm text-gray-600">Collaborate with us to offer value-added compliance services to your existing clients.</p>
                 </div>
              </div>

              <div className="mt-auto p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-center text-white">
                <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
                <p className="text-gray-400 mb-6">Enrollment takes less than 2 minutes.</p>
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition transform flex items-center justify-center mx-auto text-lg"
                >
                  Click to Enroll Now
                </button>
              </div>
            </div>
          </div>
  );
};

export default PartnerInfo;
