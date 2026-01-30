import React, { useState, useEffect } from "react";
import { Scale, Factory, Radio, Leaf, Zap } from "lucide-react";

// ---------------- COMPONENTS ----------------
import NavbarCompliance from "../components/CloudDeskCompliance/NavbarCompliance";
import MobileMenuCompliance from "../components/CloudDeskCompliance/MobileMenuCompliance";
import ModalEnrollCompliance from "../components/CloudDeskCompliance/ModalEnrollCompliance";

import HeroCompliance from "../components/CloudDeskCompliance/HeroCompliance";
import ComplianceTabs from "../components/CloudDeskCompliance/ComplianceTabs";
import ComplianceCards from "../components/CloudDeskCompliance/ComplianceCards";
import ComplianceSidebar from "../components/CloudDeskCompliance/ComplianceSidebar";

import FooterCompliance from "../components/CloudDeskCompliance/FooterCompliance";

const CloudDeskCompliance = () => {
  // ---------------- STATE ----------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Import"); // Import | Export | Allied
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ---------------- SCROLL LISTENER ----------------
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------- UPCOMING DEADLINES ----------------
  const upcomingDeadlines = [
    { date: "10 Dec", event: "GSTR-1 Filing", type: "Tax" },
    { date: "15 Dec", event: "Advance Tax Installment", type: "Finance" },
    { date: "31 Dec", event: "AEO Periodic Return", type: "Customs" },
    { date: "31 Dec", event: "EPR Annual Return", type: "Regulatory" },
  ];

  // ---------------- COMPLIANCE DATA ----------------
  const importCompliance = [
    {
      id: "i1",
      title: "BIS Registration (CRS/ISI)",
      link: "https://eximinq.in/services/bis-registration",
      desc: "Mandatory BIS certification for Electronics, Steel, Chemicals, and Toys. We handle testing coordination and grant of license.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      risk: "High: Goods Confiscation",
      act: "BIS Act, 2016",
    },
    {
      id: "i2",
      title: "EPR Authorization",
      link: "https://eximinq.in/services/epr-authorization",
      desc: "Extended Producer Responsibility registration for E-waste, Plastic Packaging, Battery, and Tyre waste management.",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      risk: "Medium: Heavy Penalties",
      act: "E-Waste Rules, 2022",
    },
    {
      id: "i3",
      title: "WPC (ETA) License",
      link: "https://eximinq.in/services/wpc-license",
      desc: "Equipment Type Approval (ETA) from WPC Wing for importing wireless products (Bluetooth/Wi-Fi devices).",
      icon: <Radio className="w-6 h-6 text-blue-600" />,
      risk: "High: Import Ban",
      act: "Indian Wireless Telegraphy Act",
    },
    {
      id: "i4",
      title: "Legal Metrology (LMPC)",
      link: "https://eximinq.in/services/lmpc-registration",
      desc: "Registration for Pre-packaged commodities. Ensuring MRP labeling compliance on imported retail packages.",
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      risk: "Medium: Seizure at Port",
      act: "Legal Metrology Act, 2009",
    },
    {
      id: "i5",
      title: "SIMS / PIMS / CIMS",
      link: "https://eximinq.in/services/import-management-registration",
      desc: "Technical compliance and registration under Steel, Paper, Coal, and Chip Import Monitoring Systems.",
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      risk: "High: Clearance Hold",
      act: "Foreign Trade Policy",
    },
  ];

  const exportCompliance = [
    {
      id: "e1",
      title: "Banking (EDPMS / e-BRC)",
      link: "https://eximinq.in/services/edpms-ebrc",
      desc: "Closing export payments & avoiding RBI caution listing.",
      icon: "Landmark",
      risk: "Critical: IEC Suspension",
      act: "FEMA Regulations",
    },
    {
      id: "e2",
      title: "REX Registration",
      link: "https://eximinq.in/services/rex-registration",
      desc: "Self-certification for EU exports under GSP.",
      icon: "Globe",
      risk: "Medium: Duty Benefit Loss",
      act: "EU GSP Rules",
    },
  ];

  const alliedCompliance = [
    {
      id: "a1",
      title: "FSSAI License",
      link: "https://eximinq.in/services/fssai-licensing",
      desc: "FICS clearance + central licensing for food imports.",
      icon: "Utensils",
      risk: "Critical: Health Hazard",
      act: "FSS Act, 2006",
    },
    {
      id: "a2",
      title: "AQCS & PQMS",
      link:"https://eximinq.in/services/aqcs-pqms",
      desc: "Animal & Plant quarantine certifications.",
      icon: "Leaf",
      risk: "High: Bio-security Risk",
      act: "DIP Act",
    },
  ];

  const activeData =
    activeTab === "Import"
      ? importCompliance
      : activeTab === "Export"
      ? exportCompliance
      : alliedCompliance;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* -------- NAVBAR -------- */}
      <NavbarCompliance
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* -------- MOBILE MENU -------- */}
      <MobileMenuCompliance
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* -------- MODAL -------- */}
      <ModalEnrollCompliance
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* -------- HERO -------- */}
      <HeroCompliance
        setShowModal={setShowModal}
        upcomingDeadlines={upcomingDeadlines}
      />

      {/* -------- TABS -------- */}
      <ComplianceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* -------- MAIN CONTENT -------- */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
        {/* Left: Cards */}
        <div className="lg:w-3/4">
          <ComplianceCards data={activeData} setShowModal={setShowModal} />
        </div>

        {/* Right: Sidebar */}
        <div className="lg:w-1/4">
          <ComplianceSidebar setShowModal={setShowModal} />
        </div>
      </div>

      {/* -------- FOOTER -------- */}
      <FooterCompliance setShowModal={setShowModal} />
    </div>
  );
};

export default CloudDeskCompliance;
