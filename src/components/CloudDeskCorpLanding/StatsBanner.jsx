import React from "react";

const StatsBanner = () => {
  const stats = [
    { val: "500+", label: "Clients Served" },
    { val: "₹100Cr+", label: "Duty Saved" },
    { val: "100%", label: "Compliance Rate" },
    { val: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.val}</div>
            <div className="text-sky-500 font-medium">{s.label}</div>
          </div>
        ))}

</div>
      </div>
    </section>
  );
};

export default StatsBanner;
