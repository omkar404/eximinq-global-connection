import React, { useState, useEffect } from "react";

// SECTIONS
import NavbarSaas from "../components/CloudDeskSaasLanding/NavbarSaas";
import MobileMenuSaas from "../components/CloudDeskSaasLanding/MobileMenuSaas";
import ModalEnrollSaas from "../components/CloudDeskSaasLanding/ModalEnrollSaas";
import HeroSaas from "../components/CloudDeskSaasLanding/HeroSaas";
import FeaturesGrid from "../components/CloudDeskSaasLanding/FeaturesGrid";
import CTASaas from "../components/CloudDeskSaasLanding/CTASaas";
import TranparentrequestTracking from "../components/CloudDeskSaasLanding/TranparentrequestTracking";
import TransparentPricing from "../components/CloudDeskSaasLanding/TransparentPricing";
import FooterSaas from "../components/CloudDeskSaasLanding/FooterSaas";
import SecureSaas from "../components/CloudDeskSaasLanding/secureSaas";

const CloudDeskSaasLanding = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });

    const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative overflow-x-hidden">

      {/* ---------------- MODAL ---------------- */}
      <ModalEnrollSaas 
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          plan={showEnrollModal.plan}
          billing={showEnrollModal.billing}
          price={showEnrollModal.price}
          onClose={() => setShowEnrollModal({ open: false })}
          onSubmit={handleEnrollmentSubmit}
       />

      {/* ---------------- NAVBAR ---------------- */}
      <NavbarSaas
        scrolled={scrolled}
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        // setShowModal={setShowModal}
        setShowEnrollModal={setShowEnrollModal}
      />

      {/* ---------------- MOBILE MENU ---------------- */}
      <MobileMenuSaas
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* ---------------- HERO SECTION ---------------- */}
      <HeroSaas setShowModal={setShowModal} />

      {/* ---------------- FEATURES GRID ---------------- */}
      <FeaturesGrid />

      {/* ---------------- CTA SECTION ---------------- */}
      <CTASaas setShowModal={setShowModal} />

      {/* Transparent Request Tracking */}
      <TranparentrequestTracking />

      {/* Transparent Pricing */}
      <TransparentPricing 
      setShowEnrollModal={setShowEnrollModal}
      />

      {/* secure your lauch offer */}
      <SecureSaas 
      setShowEnrollModal={setShowEnrollModal}
      />

      {/* ---------------- FOOTER ---------------- */}
      <FooterSaas setShowModal={setShowModal} />
    </div>
  );
};

export default CloudDeskSaasLanding;
