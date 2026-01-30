import React, { useEffect, useState } from "react";

/* Common Layout */
import Topbar from "../components/ecommerce/TopBar";
import MainNavbar from "../Common/MainNavbar";
import { Footer } from "../Common/Footer";

/* Ecommerce Sections */
import HeroEcommerce from "../components/ecommerce/HeroEcommerce";

import ComplianceWidgetEcommerce from "../components/ecommerce/ComplianceWidgetEcommerce";
import TradeSolutionsEcommerce from "../components/ecommerce/TradeSolutionsEcommerce";
import ServicesEcommerce from "../components/ecommerce/ServicesEcommerce";
import CloudDeskEcommerce from "../components/ecommerce/CloudDeskEcommerce";
import CTAEcommerce from "../components/ecommerce/CTAEcommerce";
import { ModalEnroll } from "../components/ecommerce/ModalEnroll";

const EximinqEcommerce = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("import");

  /* Scroll handling for navbar */
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
      {/* ================= FIXED HEADER ================= */}
      <div className="fixed top-0 w-full z-50">
        <Topbar setShowEnrollModal={setShowEnrollModal} />
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          theme="ecommerce"
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <main className="pt-[96px] bg-slate-50 text-slate-800">
        <HeroEcommerce />

        <ComplianceWidgetEcommerce />

        <TradeSolutionsEcommerce
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ServicesEcommerce />

        <CloudDeskEcommerce />

        <CTAEcommerce />

        <Footer />
      </main>
    </>
  );
};

export default EximinqEcommerce;
