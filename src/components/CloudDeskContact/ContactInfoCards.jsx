import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoCards = () => {
  return (
    // <div className="space-y-6">

    //   {/* Phone */}
    //   <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
    //     <div className="flex items-center mb-4">
    //       <div className="p-3 bg-teal-50 rounded-full text-teal-600 mr-4">
    //         <Phone size={24} />
    //       </div>
    //       <div>
    //         <h3 className="font-bold text-gray-800">Call Us</h3>
    //         <p className="text-xs text-gray-500">24/7 Support Line</p>
    //       </div>
    //     </div>
    //     <p className="text-2xl font-bold font-mono">+917400096950</p>
    //   </div>

    //   {/* Email */}
    //   <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
    //     <div className="flex items-center mb-4">
    //       <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mr-4">
    //         <Mail size={24} />
    //       </div>
    //       <div>
    //         <h3 className="font-bold text-gray-800">Email Us</h3>
    //         <p className="text-xs text-gray-500">For Docs & Audits</p>
    //       </div>
    //     </div>
    //     <p className="text-lg font-bold">clouddesk@eximinq.in</p>
    //   </div>

    //         <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-500 hover:shadow-lg transition">
    //           <div className="flex items-center mb-4">
    //             <div className="p-3 bg-gray-100 rounded-full text-gray-600 mr-4">
    //               <MapPin size={24} />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-gray-800">Corporate Office</h3>
    //               <p className="text-xs text-gray-500">Mumbai HQ</p>
    //             </div>
    //           </div>
    //           <p className="text-sm text-gray-600 leading-relaxed">
    //             EXIMINQ CLOUDDESK SERVICE,<br />
    //             # 2, Navketan Ind. Est., Mahakali Caves Road,<br />
    //             Andheri East, Mumbai - 400 093
    //           </p>
    //         </div>

    //         {/* Map Placeholder */}
    //         <div className="bg-gray-200 h-48 rounded-xl w-full overflow-hidden relative">
    //            <img 
    //              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80" 
    //              alt="Map Location" 
    //              className="w-full h-full object-cover opacity-60"
    //            />
    //            <div className="absolute inset-0 flex items-center justify-center">
    //              <button className="px-4 py-2 bg-white text-gray-800 font-bold text-sm rounded shadow hover:bg-gray-50 flex items-center">
    //                <MapPin size={16} className="mr-2 text-red-500" /> View on Google Maps
    //              </button>
    //            </div>
    //         </div>

    // </div>

    //     <section className="py-12 bg-slate-900 -mt-20 relative z-20">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

    //       {/* CARD 1 – URGENT */}
    //       <div className="glass-panel p-8 rounded-2xl hover:border-red-500/50 transition duration-300 group relative overflow-hidden">
    //         <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition"></div>

    //         <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-slate-700">
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    //             />
    //           </svg>
    //         </div>

    //         <h3 className="text-lg font-bold text-white mb-2">
    //           Urgent Clearance
    //         </h3>

    //         <p className="text-slate-400 text-sm mb-6">
    //           Demurrage risk? Stuck shipment? Priority support line.
    //         </p>

    //         <a
    //           href="tel:+917400096950"
    //           className="text-2xl font-mono font-bold text-white hover:text-red-400 transition block mb-2"
    //         >
    //           +91 74000 96950
    //         </a>

    //         <a
    //           href="https://wa.me/917400096950"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center uppercase tracking-wide"
    //         >
    //           WhatsApp Priority
    //         </a>
    //       </div>

    //       {/* CARD 2 – EMAIL */}
    //       <div className="glass-panel p-8 rounded-2xl hover:border-teal-500/50 transition duration-300 group relative overflow-hidden">
    //         <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition"></div>

    //         <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-slate-700">
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //             />
    //           </svg>
    //         </div>

    //         <h3 className="text-lg font-bold text-white mb-2">
    //           Audit & SaaS
    //         </h3>

    //         <p className="text-slate-400 text-sm mb-6">
    //           EPCG Closure, RoDTEP audits, or CloudDesk demos.
    //         </p>

    //         <a
    //           href="mailto:clouddesk@eximinq.in"
    //           className="text-lg font-mono font-bold text-teal-400 hover:text-white transition block break-all"
    //         >
    //           clouddesk@eximinq.in
    //         </a>

    //         <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">
    //           Avg Response: &lt; 2 Hrs
    //         </p>
    //       </div>

    //       {/* CARD 3 – ADDRESS */}
    //       <div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/50 transition duration-300 group relative overflow-hidden">
    //         <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition"></div>

    //         <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-indigo-400 mb-6 border border-slate-700">
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //             />
    //           </svg>
    //         </div>

    //         <h3 className="text-lg font-bold text-white mb-2">
    //           Operations Base
    //         </h3>

    //         <p className="text-slate-400 text-sm mb-6">
    //           #2, Navketan Ind. Est., Mahakali Caves Road, Andheri East, Mumbai
    //         </p>

    //         <a
    //           href="#map"
    //           className="text-xs font-bold text-indigo-400 hover:text-white flex items-center uppercase tracking-wide"
    //         >
    //           Navigate via Maps
    //         </a>
    //       </div>

    //     </div>
    //   </div>
    // </section>


        <section id="consult-form" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* FORM */}
          <div className="lg:w-1/2 reveal">
            <h2 className="text-3xl font-bold text-white mb-2">
              Open a Compliance Ticket
            </h2>
            <p className="text-slate-400 mb-8 text-sm">
              Route your query directly to a Senior Consultant.
            </p>

            <form className="space-y-6">

              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg input-tech"
                    placeholder="John"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg input-tech"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg input-tech"
                  placeholder="name@company.com"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Issue Category
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg input-tech appearance-none cursor-pointer">
                    <option className="bg-slate-900">
                      EPCG / Advance Auth Closure
                    </option>
                    <option className="bg-slate-900">
                      RoDTEP / Refund Recovery
                    </option>
                    <option className="bg-slate-900">
                      AEO Certification Audit
                    </option>
                    <option className="bg-slate-900">
                      Retainer (Virtual Desk)
                    </option>
                    <option className="bg-slate-900">
                      Urgent Customs Clearance
                    </option>
                  </select>

                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Details
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg input-tech h-32"
                  placeholder="License No / Error Code / Description..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-4 rounded-lg transition shadow-lg shadow-teal-500/20 flex justify-center items-center gap-2 transform hover:-translate-y-1"
              >
                Create Ticket
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

            </form>
          </div>

          {/* MAP */}
          <div id="map" className="lg:w-1/2 reveal">
            <div className="h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 min-h-[500px] relative group">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.870634288077!2d72.8675!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTInMDMuMCJF!5e0!3m2!1sen!2sin!4v1635760000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
                }}
                allowFullScreen=""
                loading="lazy"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                title="Google Map"
              ></iframe>

              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                    Location Detected
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Navketan Industrial Estate, Mumbai
                  </p>
                </div>

                <a
                  href="https://goo.gl/maps/XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-brand-teal transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
