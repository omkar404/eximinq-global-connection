import React, { useState, useEffect } from "react";

import TopBar from "../components/textiles/TopBar";
import MainNavbar from "../components/textiles/MainNavbar";
import HeroTextiles from "../components/textiles/HeroTextiles";
import ComplianceWidgetTextiles from "../components/textiles/ComplianceWidgetTextiles";
import TradeSolutionsTextiles from "../components/textiles/TradeSolutionsTextiles";
import ServicesGridTextiles from "../components/textiles/ServicesGridTextiles";
import CloudDeskTextiles from "../components/textiles/CloudDeskTextiles";
import CTATextiles from "../components/textiles/CTATextiles";
import { FooterTextiles } from "../components/textiles/FooterTextiles";
import { ModalEnroll } from "../components/textiles/ModalEnroll";

const EximinqTextiles = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("import");

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 🔒 Fixed Header Wrapper */}
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

      {/* 🧠 Main Content */}
      <main className="pt-[120px] bg-slate-50">
        <HeroTextiles />

        <ComplianceWidgetTextiles />

        <TradeSolutionsTextiles
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesGridTextiles />
        <CloudDeskTextiles />
        <CTATextiles />
        <FooterTextiles />
      </main>
    </>
  );
};

export default EximinqTextiles;
