import React from "react";
import { FileText, Users } from "lucide-react";

const CTACorp = ({setShowModal}) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 
                        p-12 rounded-3xl border border-slate-700 shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Eximinq Cloud Desk
          </h2>

          <p className="text-slate-400 mb-10 text-lg">
            Stop worrying about paperwork and regulatory hurdles. Let our experts handle your trade compliance so you can focus on growing your business globally.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold flex items-center justify-center"
              onClick={() => setShowModal(true)}
            >
              <FileText size={18} className="mr-2" /> Get a Free Quote
            </button>
            <button 
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-bold flex items-center justify-center"
              onClick={() => setShowModal(true)}
            >
              <Users size={18} className="mr-2" /> Schedule Demo
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            No hidden fees. Transparent processes. Dedicated support.
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTACorp;
