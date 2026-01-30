import React from "react";
import { Clock, TrendingUp, ShieldCheck } from "lucide-react";

const FeatureCard = ({ icon, title, description, iconBg }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
      <div
        className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Trade with Eximinq?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The most secure and transparent way to monetize your export
            incentives.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Clock size={28} className="text-blue-600" />}
            iconBg="bg-blue-100"
            title="Instant Settlements"
            description="Get paid immediately upon transfer of scrips. No waiting periods, no delays."
          />

          <FeatureCard
            icon={<TrendingUp size={28} className="text-green-600" />}
            iconBg="bg-green-100"
            title="Best Market Rates"
            description="Our high-volume trading enables us to offer the most competitive rates in the industry."
          />

          <FeatureCard
            icon={<ShieldCheck size={28} className="text-purple-600" />}
            iconBg="bg-purple-100"
            title="100% Compliant"
            description="Every scrip is verified for validity, ensuring zero compliance risk for your business."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
