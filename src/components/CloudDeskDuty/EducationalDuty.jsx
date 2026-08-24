import React from "react";
import { ArrowRight } from "lucide-react";

const CONTENT = {
  finder: {
    heading: "India HSN Classification & DGFT Compliance",
    subtext: "The Harmonized System of Nomenclature (HSN) determines your entire trade compliance landscape. An incorrect 8-digit classification affects duties and dictates mandatory BIS Registration, FSSAI Clearance, or Restricted DGFT Policies.",
    cards: [
      { title: "Import vs. Export Policies", text: "A product might be 'Free' to import but 'Restricted' to export, or vice versa. Always check both policy statuses in the directory before committing to commercial contracts." },
      { title: "Non-Tariff Barriers", text: "Our Trade Connect advisory integration flags mandatory regulatory requirements (like EPR, WPC, or Plant Quarantine) that will halt your shipment at Customs if ignored." },
    ],
    cta: { bg: "bg-indigo-50 border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-500", heading: "Struggling to Classify Your Product?", text: "Misclassification leads to heavy Customs penalties and rejected incentive claims. Let our experts secure an Advance Ruling or determine your definitive HSN code.", label: "Get Expert Classification", type: "HSN Classification" },
  },
  import: {
    heading: "Mastering Customs Valuations and Landed Costs",
    subtext: "Calculating import duties isn't just about applying the Basic Customs Duty (BCD). The integration of Social Welfare Surcharge (SWS), IGST, and specific cess levies like AIDC fundamentally changes your landed cost equation.",
    cards: [
      { title: "The AIDC Impact", text: "AIDC is applied specifically to goods like Gold, Coal, and Fertilizers. Unlike IGST, AIDC cannot be claimed as an Input Tax Credit (ITC), making it a sunk cost that directly impacts your bottom line." },
      { title: "Advance Rulings & Optimization", text: "A high Effective Duty Rate signals a need for strategic intervention. Importers must evaluate Free Trade Agreements (FTAs) or utilize schemes like Advance Authorisation (AA) and MOOWR to legally defer or eliminate tariffs." },
    ],
    cta: { bg: "bg-blue-50 border-blue-200", btn: "bg-blue-600 hover:bg-blue-500", heading: "Is your effective duty rate destroying your margins?", text: "Do not rely solely on standard assessments. Let our DGFT and Customs experts secure your Advance Authorisations, apply FTA benefits, and legally optimize your landed costs.", label: "Optimize Import Costs", type: "Import Optimization" },
  },
  export: {
    heading: "Maximizing Export Incentives: DBK & RoDTEP",
    subtext: "The Remission of Duties and Taxes on Exported Products (RoDTEP) and Duty Drawback (DBK) schemes are vital for export competitiveness. However, assessing yields manually is incredibly risky due to statutory limits imposed by the Ministry of Commerce.",
    cards: [
      { title: "Beware of Value Caps", text: "While a percentage rate (e.g., 4.3%) looks attractive, it is often restricted by a UQC value cap (e.g., ₹40 per piece). Failing to account for this cap leads to catastrophic miscalculations in export pricing." },
      { title: "Brand Rate Fixation", text: "If the All Industry Rate (AIR) for Duty Drawback does not cover the actual customs duties paid on your imported raw materials, you can apply for a specific 'Brand Rate' to recover your exact costs." },
    ],
    cta: { bg: "bg-cyan-50 border-cyan-200", btn: "bg-cyan-600 hover:bg-cyan-500", heading: "Are you leaving Export Incentives on the table?", text: "Don't let value caps erode your profits. We manage the entire lifecycle from RoDTEP scrip generation to Duty Drawback claims and Brand Rate fixations.", label: "Claim Export Incentives", type: "Export Incentives" },
  },
};

const EducationalDuty = ({ activeTab, setShowEnrollModal }) => {
  const s = CONTENT[activeTab];
  if (!s) return null;

  return (
    <section className="py-20 relative z-10 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mt-4 text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.heading}</h2>
          <p className="mb-8 leading-relaxed">{s.subtext}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {s.cards.map((col, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{col.title}</h3>
                <p className="text-sm leading-relaxed">{col.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className={`max-w-4xl mx-auto mt-16 text-center ${s.cta.bg} border rounded-2xl p-10`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.cta.heading}</h2>
          <p className="text-gray-600 mb-8">{s.cta.text}</p>
          <button
            onClick={() => setShowEnrollModal({ open: true, type: s.cta.type })}
            className={`px-8 py-4 ${s.cta.btn} text-white font-bold rounded-lg transition-colors flex items-center justify-center mx-auto`}
          >
            {s.cta.label} <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationalDuty;