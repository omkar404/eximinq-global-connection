import React, { useEffect, useState } from "react";

/* Shared */
import TopBar from "../components/EximinqElectronics/TopBar";
import MainNavbar from "../components/EximinqElectronics/MainNavbar";

/* Electronics-specific sections */
import HeroElectronics from "../components/EximinqElectronics/HeroElectronics";
import ComplianceWidgetElectronics from "../components/EximinqElectronics/ComplianceWidgetElectronics";
import TradeSolutionsElectronics from "../components/EximinqElectronics/TradeSolutionsElectronics";
import ServicesGridElectronics from "../components/EximinqElectronics/ServicesGridElectronics";
import CloudDeskElectronics from "../components/EximinqElectronics/CloudDeskElectronics";
import CTAElectronics from "../components/EximinqElectronics/CTAElectronics";
import { FooterElectronics } from "../components/EximinqElectronics/FooterElectronics";
import { ModalEnroll } from "../components/EximinqElectronics/ModalEnroll";

const EximinqElectronics = () => {
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
      <main className="pt-[80px] bg-slate-950 text-slate-200">
        <HeroElectronics />

        <ComplianceWidgetElectronics />

        <TradeSolutionsElectronics
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesGridElectronics />

        <CloudDeskElectronics />

        <CTAElectronics />

        <FooterElectronics />
      </main>
    </>
  );
};

export default EximinqElectronics;
