import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoCards = () => {
  return (
    <div className="space-y-6">

      {/* Phone */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-teal-50 rounded-full text-teal-600 mr-4">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Call Us</h3>
            <p className="text-xs text-gray-500">24/7 Support Line</p>
          </div>
        </div>
        <p className="text-2xl font-bold font-mono">+917400096950</p>
      </div>

      {/* Email */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Email Us</h3>
            <p className="text-xs text-gray-500">For Docs & Audits</p>
          </div>
        </div>
        <p className="text-lg font-bold">clouddesk@eximinq.in</p>
      </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-500 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-full text-gray-600 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Corporate Office</h3>
                  <p className="text-xs text-gray-500">Mumbai HQ</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                EXIMINQ CLOUDDESK SERVICE,<br />
                # 2, Navketan Ind. Est., Mahakali Caves Road,<br />
                Andheri East, Mumbai - 400 093
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-48 rounded-xl w-full overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="px-4 py-2 bg-white text-gray-800 font-bold text-sm rounded shadow hover:bg-gray-50 flex items-center">
                   <MapPin size={16} className="mr-2 text-red-500" /> View on Google Maps
                 </button>
               </div>
            </div>

    </div>
  );
};

export default ContactInfoCards;
