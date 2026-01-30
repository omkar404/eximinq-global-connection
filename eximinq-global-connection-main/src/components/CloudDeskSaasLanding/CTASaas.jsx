import React from "react";
import { ArrowRight, Users } from "lucide-react";

const CTASaas = ({ setShowModal }) => {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize your EXIM operations?</h2>
          <p className="text-indigo-200 max-w-md">
            500+ businesses already use CloudDesk SaaS. Early adopters join free.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-4 bg-teal-500 font-bold rounded-xl flex items-center"
          >
            Enroll Now <ArrowRight size={20} className="ml-2" />
          </button>

          <span className="flex items-center text-xs text-indigo-300">
            <Users size={14} className="mr-1" /> Limited spots available
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASaas;
