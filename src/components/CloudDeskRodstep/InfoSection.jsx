import React from "react";
import { Info } from "lucide-react";

const InfoBlock = ({ title, heading, description }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-blue-700 font-bold mb-4">
        <Info size={20} />
        <span>{title}</span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">{heading}</h3>

      {description.map((text, index) => (
        <p
          key={index}
          className="text-slate-600 mb-4 leading-relaxed"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

const InfoSection = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <InfoBlock
          title="About RODTEP"
          heading="Remission of Duties or Taxes on Export Products"
          description={[
            "The RoDTEP scheme, effective from January 1, 2021, replaces the MEIS scheme. It reimburses embedded taxes and duties not refunded under other schemes.",
            "The rebate is issued as a transferable electronic scrip (e-scrip) maintained in an electronic ledger by CBIC.",
          ]}
        />

        <InfoBlock
          title="About RoSCTL"
          heading="Rebate of State and Central Taxes and Levies"
          description={[
            "RoSCTL applies to export of Apparel (Chapters 61 & 62) and Made-ups (Chapter 63). It refunds embedded State and Central taxes not covered under GST.",
            "Like RODTEP, RoSCTL benefits are issued as tradable electronic scrips that can be monetized instantly.",
          ]}
        />
      </div>
    </section>
  );
};

export default InfoSection;
