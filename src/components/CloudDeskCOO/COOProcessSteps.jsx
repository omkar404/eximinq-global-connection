import React from "react";
import { FileText, FileCheck, Plane, Stamp } from "lucide-react";

const COOProcessSteps = () => {
  const steps = [
    { title: "Submit Data", icon: <FileText />, desc: "Upload Invoice & Packing List" },
    { title: "Drafting", icon: <FileCheck />, desc: "Expert verification of HS Codes" },
    { title: "Submission", icon: <Plane />, desc: "Filing on DGFT CoO Portal" },
    { title: "Issuance", icon: <Stamp />, desc: "Digitally Signed Certificate" },
  ];

  return (
    <div className="bg-gray-100 rounded-3xl p-10 text-center mb-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">How We Simplify Issuance</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

        {/* Central connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              {step.icon}
            </div>
            <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
            <p className="text-xs text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default COOProcessSteps;
