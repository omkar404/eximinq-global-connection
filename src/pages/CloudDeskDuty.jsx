import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDuty/MainNavbar";
import Navbar from "../components/CloudDeskDuty/Navbar";
import HeroDuty from "../components/CloudDeskDuty/HeroDuty";
import HSNFinderDuty from "../components/CloudDeskDuty/HSNFinderDuty";
import CalculatorDuty from "../components/CloudDeskDuty/CalculatorDuty";
import EducationalDuty from "../components/CloudDeskDuty/EducationalDuty";
import Footer from "../components/CloudDeskDuty/Footer";
import { ModalEnroll } from "../components/CloudDeskDuty/ModalEnroll";

// --- MOCK TARIFF & TRENDS DATABASE ---
const HSN_DATABASE = [
  {
    hsn: "85171300", chapter: "85", description: "Smartphones", uqc: "NOS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["BIS Registration Mandatory (CRS)", "WPC ETA Approval Required", "E-Waste EPR Applicable"],
    import: { bcd: 20, igst: 18, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 0.5, rodtepCap: null },
    trends: { import: [12, 15, 18, 22, 28], export: [2, 4, 7, 11, 15], topPartners: ["China (45%)", "Vietnam (20%)", "UAE (15%)"] }
  },
  {
    hsn: "61091000", chapter: "61", description: "T-shirts, singlets and other vests, of cotton", uqc: "PCS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["NOC from Textile Committee may be required"],
    import: { bcd: 20, igst: 5, aidc: 0 },
    export: { dbkRate: 5.4, dbkCap: 85, rodtepRate: 4.3, rodtepCap: 40 },
    trends: { import: [0.5, 0.6, 0.4, 0.7, 0.8], export: [4, 4.2, 3.8, 4.5, 5.1], topPartners: ["USA (35%)", "UK (18%)", "Germany (12%)"] }
  },
  {
    hsn: "84713010", chapter: "84", description: "Personal computers (Laptops, etc.)", uqc: "NOS",
    importPolicy: "Restricted", exportPolicy: "Free",
    advisories: ["DGFT Import Authorisation Mandatory", "BIS Registration Mandatory"],
    import: { bcd: 0, igst: 18, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 0.5, rodtepCap: null },
    trends: { import: [5, 6, 8, 7, 5], export: [0.1, 0.2, 0.3, 0.4, 0.8], topPartners: ["China (60%)", "Taiwan (15%)", "USA (10%)"] }
  },
  {
    hsn: "09011119", chapter: "09", description: "Coffee, not roasted, not decaffeinated", uqc: "KGS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["FSSAI Clearance Mandatory", "Plant Quarantine NOC Required"],
    import: { bcd: 100, igst: 5, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 1.4, rodtepCap: 2.2 },
    trends: { import: [0.2, 0.25, 0.3, 0.35, 0.4], export: [1.2, 1.3, 1.1, 1.4, 1.6], topPartners: ["Italy (20%)", "Germany (15%)", "Belgium (10%)"] }
  },
  {
    hsn: "71081200", chapter: "71", description: "Gold, non-monetary, unwrought", uqc: "KGS",
    importPolicy: "Restricted", exportPolicy: "Restricted",
    advisories: ["Import through Nominated Agencies Only", "RBI Guidelines Applicable"],
    import: { bcd: 10, igst: 3, aidc: 5 },
    export: { dbkRate: 0, dbkCap: null, rodtepRate: 0, rodtepCap: null },
    trends: { import: [30, 35, 45, 40, 38], export: [0.5, 0.6, 0.8, 1.0, 1.2], topPartners: ["Switzerland (40%)", "UAE (30%)", "South Africa (15%)"] }
  }
];

// --- TREND GRAPH ---
const TrendGraph = ({ data, title, colorClass, bgClass }) => {
  const maxVal = Math.max(...data) || 1;
  const years = ["2019", "2020", "2021", "2022", "2023"];
  return (
    <div className="flex-1 mt-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4">{title}</div>
      <div className="flex items-end gap-2 h-32 border-b border-gray-200 pb-2">
        {data.map((val, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-end group">
            <div
              className={`w-full rounded-t-sm transition-all duration-500 relative ${bgClass} hover:opacity-80`}
              style={{ height: `${(val / maxVal) * 100}%`, minHeight: '4px' }}
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity ${colorClass}`}>
                ${val}B
              </div>
            </div>
            <div className="text-[9px] text-gray-400 mt-2">{years[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CloudDeskDuty() {
  const [activeTab, setActiveTab] = useState("finder");
  const [selectedHSN, setSelectedHSN] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({ open: false, type: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLaunchCalculator = (hsnItem, type) => {
    setSelectedHSN(hsnItem);
    setActiveTab(type);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-cyan-500 selection:text-white">

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100/40 rounded-full blur-[120px]" />
      </div>

      <MainNavbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      <HeroDuty activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tool Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-6">
          {activeTab === "finder" && (
            <HSNFinderDuty
              onLaunchCalculator={handleLaunchCalculator}
              HSN_DATABASE={HSN_DATABASE}
              TrendGraph={TrendGraph}
            />
          )}
          {(activeTab === "import" || activeTab === "export") && (
            <CalculatorDuty
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedHSN={selectedHSN}
            />
          )}
        </div>
      </section>

      <EducationalDuty
        activeTab={activeTab}
        setShowEnrollModal={setShowEnrollModal}
      />

      <Footer />

      <ModalEnroll
        show={showEnrollModal.open}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        type={showEnrollModal.type}
      />
    </div>
  );
}