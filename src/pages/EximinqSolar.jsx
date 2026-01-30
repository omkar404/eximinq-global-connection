import React, { useEffect, useState } from "react";

import Topbar from "../components/solar/TopBar";
import MainNavbar from "../Common/MainNavbar";
import { Footer } from "../Common/Footer";

import HeroSolar from "../components/solar/HeroSolar";
import ComplianceWidgetSolar from "../components/solar/ComplianceWidgetSolar";
import TradeSolutionsSolar from "../components/solar/TradeSolutionsSolar";
import ServicesSolar from "../components/solar/ServicesSolar";
import CloudDeskSolar from "../components/solar/CloudDeskSolar";
import CTASolar from "../components/solar/CTASolar";
import { ModalEnroll } from "../components/solar/ModalEnroll";

const EximinqSolar = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Topbar setShowEnrollModal={setShowEnrollModal} />
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          theme="solar"
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>

      {/* Page Content */}
      <main className="pt-[96px] bg-slate-50 text-slate-800">
        <HeroSolar />

        <ComplianceWidgetSolar />

        <TradeSolutionsSolar />

        <ServicesSolar />

        <CloudDeskSolar />

        <CTASolar />

        <Footer variant="solar" />
      </main>
    </>
  );
};

export default EximinqSolar;
