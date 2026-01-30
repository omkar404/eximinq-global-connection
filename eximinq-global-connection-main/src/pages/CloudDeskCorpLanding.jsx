import React, { useState, useMemo, useEffect } from "react";

import {NavbarCorp} from "../components/CloudDeskCorpLanding/NavbarCorp";
import HeroCorp from "../components/CloudDeskCorpLanding/HeroCorp";
import ComplianceTicker from "../components/CloudDeskCorpLanding/ComplianceTicker";
import WhyCloudDesk from "../components/CloudDeskCorpLanding/WhyCloudDesk";
import ServiceCatalog from "../components/CloudDeskCorpLanding/ServiceCatalog";
import StatsBanner from "../components/CloudDeskCorpLanding/StatsBanner";
import CTACorp from "../components/CloudDeskCorpLanding/CTACorp";
import {FooterCorp} from "../components/CloudDeskCorpLanding/FooterCorp";
import {ModalEnroll} from "../components/CloudDeskCorpLanding/ModalEnroll";

// IMPORT DATA
import { SERVICE_CATALOG, CATEGORIES } from "../components/CloudDeskCorpLanding/corpData";

const CloudDeskCorpLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // ⬅️ Required states
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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


    const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };
  
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

            <NavbarCorp
        scrolled={scrolled}
        setShowModal={setShowModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

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

      <CTACorp 
      setShowModal={setShowModal}
      />

      <FooterCorp onEnrollClick={() => setShowModal(true)} />

            <ModalEnroll
              show={showModal}
              onClose={() => setShowModal(false)}
              onSubmit={handleEnrollmentSubmit}
            />

    </div>
  );
};

export default CloudDeskCorpLanding;
