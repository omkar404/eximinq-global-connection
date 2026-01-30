import React, { useState, useEffect } from "react";

// COMPONENTS
import NavbarCOO from "../components/CloudDeskCOO/NavbarCOO";
import MobileMenuCOO from "../components/CloudDeskCOO/MobileMenuCOO";
import ModalEnrollCOO from "../components/CloudDeskCOO/ModalEnrollCOO";
import HeroCOO from "../components/CloudDeskCOO/HeroCOO";
import COOServiceCards from "../components/CloudDeskCOO/COOServiceCards";
import COOProcessSteps from "../components/CloudDeskCOO/COOProcessSteps";
import CTACOO from "../components/CloudDeskCOO/CTASectionCOO";
import FooterCOO from "../components/CloudDeskCOO/FooterCOO";

const CloudDeskCOO = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openFromNavbar = () =>
    setShowEnrollModal({ open: true, type: "certificate_of_origin_enroll" });

  const openFromHero = () => setShowEnrollModal({ open: true, type: "HERO" });

  const openPreferential = () =>
    setShowEnrollModal({ open: true, type: "PREFERENTIAL" });

  const openNonPreferential = () =>
    setShowEnrollModal({ open: true, type: "NON_PREFERENTIAL" });

  const openCTACOO = () => setShowEnrollModal({ open: true, type: "CTA" });

  const Footer = () => {
    setShowEnrollModal({ open: true, type: "FooterCTA" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* MODAL */}
      <ModalEnrollCOO
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* NAVBAR */}
      <NavbarCOO
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onEnroll={openFromNavbar}
      />

      {/* MOBILE MENU */}
      <MobileMenuCOO
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      {/* HERO */}
      <HeroCOO onEnroll={openFromHero} />

      {/* COO SERVICE CARDS */}
      <COOServiceCards
        onPreferentialEnroll={openPreferential}
        onNonPreferentialEnroll={openNonPreferential}
      />

      {/* COO PROCESS STEPS */}
      <COOProcessSteps />

      {/* CTA SECTION */}
      <CTACOO openCTACOO={openCTACOO} />

      {/* FOOTER */}
      <FooterCOO Footer={Footer} />
    </div>
  );
};

export default CloudDeskCOO;
