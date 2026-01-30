import React, { useEffect, useState } from "react";

/* Shared layout components */
import TopBar from "../components/EximinqEngineering/TopBar";
import MainNavbar from "../components/EximinqEngineering/MainNavbar";

/* Engineering-specific sections */
import HeroEngineering from "../components/EximinqEngineering/HeroEngineering";
import ComplianceWidgetEngineering from "../components/EximinqEngineering/ComplianceWidgetEngineering";
import TradeSolutionsEngineering from "../components/EximinqEngineering/TradeSolutionsEngineering";
import ServicesGridEngineering from "../components/EximinqEngineering/ServicesGridEngineering";
import CloudDeskEngineering from "../components/EximinqEngineering/CloudDeskEngineering";
import CTAEngineering from "../components/EximinqEngineering/CTAEngineering";
import { FooterEngineering } from "../components/EximinqEngineering/FooterEngineering";
import { ModalEnroll } from "../components/EximinqEngineering/ModalEnroll";

const EximinqEngineering = () => {
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

  /* Scroll handling for navbar */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <main className="pt-[120px] bg-slate-50 text-slate-800">
        <HeroEngineering />

        <ComplianceWidgetEngineering />

        <TradeSolutionsEngineering
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesGridEngineering />

        <CloudDeskEngineering />

        <CTAEngineering />

        <FooterEngineering />
      </main>
    </>
  );
};

export default EximinqEngineering;
