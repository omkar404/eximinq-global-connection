import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left side */}
        <div className="p-10 md:w-1/2 bg-blue-700 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Trade?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Lock in today’s rates with our CloudDesk. We manage the complete
            documentation and settlement process.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Call Us 24/7
                </p>
                <p className="text-xl font-bold">+91 74000 96950</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Email Us
                </p>
                <p className="text-xl font-bold">clouddesk@eximinq.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="p-10 md:w-1/2 bg-white">
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Request Callback
            </h3>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full px-4 py-2 rounded-lg border border-slate-300
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full px-4 py-2 rounded-lg border border-slate-300
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Scrip Type
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>RODTEP</option>
                  <option>RoSCTL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Action
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Selling</option>
                  <option>Buying</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg
              hover:bg-slate-800 transition mt-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
