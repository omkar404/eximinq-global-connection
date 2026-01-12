import React, { useState, useEffect } from "react";

import TopBar from "../components/chemicals/TopBar";
import MainNavbar from "../components/chemicals/MainNavbar";
import HeroChemicals from "../components/chemicals/HeroChemicals";
import ComplianceWidgetChemicals from "../components/chemicals/ComplianceWidgetChemicals";
import TradeSolutionsChemicals from "../components/chemicals/TradeSolutionsChemicals";
import ServicesGridChemicals from "../components/chemicals/ServicesGridChemicals";
import CloudDeskChemicals from "../components/chemicals/CloudDeskChemicals";
import CTAChemicals from "../components/chemicals/CTAChemicals";
import { FooterChemicals } from "../components/chemicals/FooterChemicals";
import { ModalEnroll } from "../components/chemicals/ModalEnroll";

const EximinqChemicals = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("import");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
        <TopBar setShowEnrollModal={setShowEnrollModal} />
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>

      {/* Page Content */}
      <main className="pt-[120px] bg-slate-950 text-slate-200">
        <HeroChemicals />

        <ComplianceWidgetChemicals />

        <TradeSolutionsChemicals
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesGridChemicals />

        <CloudDeskChemicals />

        <CTAChemicals />
      </main>

      <FooterChemicals />
    </>
  );
};

export default EximinqChemicals;
