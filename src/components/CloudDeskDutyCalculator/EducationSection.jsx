import React from "react";

const EducationSection = ({ onEnrollClick }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Understanding Import Duties</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Basic Customs Duty" symbol="B" desc="The standard tax rate applied to goods imported into India, determined by the Customs Tariff Act, 1975." />
        <Card title="AIDC" symbol="A" desc="Agriculture Infrastructure and Development Cess. Applied on specific goods like Gold, Coal, and Fertilizers." />
        <Card title="IGST" symbol="I" desc="Integrated Goods and Services Tax, collected on the total value (Assessable Value + BCD + AIDC + SWS)." />
      </div>

          <div className="mt-12 bg-teal-50 rounded-2xl p-8 text-center border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mb-4">Need Help with HS Classification?</h3>
            <p className="text-teal-700 mb-6 max-w-2xl mx-auto">
              Misclassifying goods can lead to heavy penalties or overpayment of duties. Our experts can help you find the correct 8-digit ITC-HS code.
            </p>
            <button 
              onClick={onEnrollClick}
              className="px-8 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition shadow-md"
            >
              Enroll Now
            </button>
          </div>
    </section>
  );
};

const Card = ({ title, symbol, desc }) => (
  <div className="bg-white shadow-sm border p-6 rounded-xl">
    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
      {symbol}
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default EducationSection;
