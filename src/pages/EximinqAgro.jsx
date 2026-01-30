import React, { useEffect, useState } from "react";

import TopBar from "../components/agro/TopBar.jsx";
import MainNavbar from "../Common/MainNavbar.jsx";
import { Footer } from "../Common/Footer.jsx";

import HeroAgro from "../components/agro/HeroAgro";
import ComplianceWidgetAgro from "../components/agro/ComplianceWidgetAgro";
import TradeSolutionsAgro from "../components/agro/TradeSolutionsAgro";
import ServicesGridAgro from "../components/agro/ServicesGridAgro";
import CloudDeskAgro from "../components/agro/CloudDeskAgro.jsx";
import CTAAgro from "../components/agro/CTAgro.jsx";
import { ModalEnroll } from "../components/agro/ModalEnroll.jsx";

const EximinqAgro = () => {
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

  /* ===== SCROLL HANDLER ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== NAV LINKS (CONFIG-DRIVEN) ===== */
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#clouddesk" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="fixed top-0 w-full z-50">
        <TopBar setShowEnrollModal={setShowEnrollModal} />
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          links={navLinks}
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-[96px] bg-[#fcfdfa] text-stone-800">
        <HeroAgro />

        <ComplianceWidgetAgro />

        <TradeSolutionsAgro
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          //   handleImageError={handleImageError}
        />

        <ServicesGridAgro />

        <CloudDeskAgro />

        <CTAAgro />
      </main>

      <Footer />
    </>
  );
};

export default EximinqAgro;
