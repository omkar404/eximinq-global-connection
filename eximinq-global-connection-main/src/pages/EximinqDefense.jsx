import React, { useState, useEffect } from "react";

/* ===== Common Layout ===== */
import Topbar from "../components/defense/TopBar";
import MainNavbar from "../Common/MainNavbar";
import { Footer } from "../Common/Footer";

/* ===== Defense Sections ===== */
import HeroDefense from "../components/defense/HeroDefense";
import ComplianceWidgetDefense from "../components/defense/ComplianceWidgetDefense";
import TradeSolutionsDefense from "../components/defense/TradeSolutionsDefense";
import ServicesDefense from "../components/defense/ServicesDefense";
import CloudDeskDefense from "../components/defense/CloudDeskDefense";
import CTADefense from "../components/defense/CTADefense";
import { ModalEnroll } from "../components/defense/ModalEnroll";

const EximinqDefense = () => {
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

  /* Scroll reminder (navbar shadow / style switch) */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Fixed Header ===== */}
      <div className="fixed top-0 w-full z-50">
        <Topbar setShowEnrollModal={setShowEnrollModal} />

        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          theme="defense" // optional prop if you theme navbar
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>

      {/* ===== Main Page Content ===== */}
      <main className="pt-[96px] bg-slate-950 text-slate-200 overflow-x-hidden">
        <HeroDefense />

        <ComplianceWidgetDefense />

        <TradeSolutionsDefense
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesDefense />

        <CloudDeskDefense />

        <CTADefense />

        <Footer theme="defense" />
      </main>
    </>
  );
};

export default EximinqDefense;
