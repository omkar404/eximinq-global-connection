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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">

      {/* MODAL */}
      <ModalEnrollCOO show={showModal} onClose={() => setShowModal(false)} />

      {/* NAVBAR */}
      <NavbarCOO
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* MOBILE MENU */}
      <MobileMenuCOO
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* HERO */}
      <HeroCOO setShowModal={setShowModal} />

      {/* COO SERVICE CARDS */}
      <COOServiceCards setShowModal={setShowModal} />

      {/* COO PROCESS STEPS */}
      <COOProcessSteps />

      {/* CTA SECTION */}
      <CTACOO setShowModal={setShowModal} />

      {/* FOOTER */}
      <FooterCOO setShowModal={setShowModal} />

    </div>
  );
};

export default CloudDeskCOO;
