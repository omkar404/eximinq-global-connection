import React, { useState, useMemo } from "react";

import NavbarCorp from "../components/CloudDeskCorpLanding/NavbarCorp";
import HeroCorp from "../components/CloudDeskCorpLanding/HeroCorp";
import ComplianceTicker from "../components/CloudDeskCorpLanding/ComplianceTicker";
import WhyCloudDesk from "../components/CloudDeskCorpLanding/WhyCloudDesk";
import ServiceCatalog from "../components/CloudDeskCorpLanding/ServiceCatalog";
import StatsBanner from "../components/CloudDeskCorpLanding/StatsBanner";
import CTACorp from "../components/CloudDeskCorpLanding/CTACorp";
import FooterCorp from "../components/CloudDeskCorpLanding/FooterCorp";

// IMPORT DATA
import { SERVICE_CATALOG, CATEGORIES } from "../components/CloudDeskCorpLanding/corpData";

const CloudDeskCorpLanding = () => {
  // ⬅️ Required states
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // ⬅️ Filter logic
  const filteredServices = useMemo(() => {
    return SERVICE_CATALOG.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

      <NavbarCorp />

      <HeroCorp />

      <ComplianceTicker />

      <WhyCloudDesk />

      {/* FIXED — PROPS PASSED CORRECTLY */}
      <ServiceCatalog
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredServices={filteredServices}
        categories={CATEGORIES}
      />

      <StatsBanner />

      <CTACorp />

      <FooterCorp />

    </div>
  );
};

export default CloudDeskCorpLanding;
