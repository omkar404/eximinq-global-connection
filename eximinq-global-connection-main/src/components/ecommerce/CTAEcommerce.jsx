import React from "react";

const CTAEcommerce = () => {
  return (
    <section className="py-24 bg-violet-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Unbox Global Growth
        </h2>

        <p className="text-violet-100 text-xl mb-12">
          Stop worrying about customs. Focus on your brand — we handle the
          borders.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white text-violet-700 px-10 py-4 rounded-xl font-bold">
            Integrate API
          </button>
          <button className="border-2 border-white px-10 py-4 rounded-xl font-bold">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAEcommerce;
