import React, { useState, useEffect } from "react";
import {NavbarStartup} from "../components/CloudDeskStartupLanding/NavbarStartup";
import HeroStartup from "../components/CloudDeskStartupLanding/HeroStartup";
import CTAStartup from "../components/CloudDeskStartupLanding/CTAStartup";
import ServiceCatalogStartup from "../components/CloudDeskStartupLanding/ServiceCatalogStartup";
import FAQStartup from "../components/CloudDeskStartupLanding/FAQStartup";
import {FooterStartup} from "../components/CloudDeskStartupLanding/FooterStartup";
import RoadmapTicker from "../components/CloudDeskStartupLanding/RoadmapTicker";
import ProcessSteps from "../components/CloudDeskStartupLanding/ProcessSteps";
import MakeInIndia from "../components/CloudDeskStartupLanding/MakeInIndia";
import { ModalEnroll } from "../components/CloudDeskStartupLanding/ModalEnroll";
import { SERVICE_CATALOG, CATEGORIES } from "../components/CloudDeskStartupLanding/startupCatalog"; 
import { FAQS } from "../components/CloudDeskStartupLanding/startupFaqs";

// ⬆️ YOU MUST EXPORT THESE FROM A DATA FILE OR SAME FILE


const CloudDeskStartupLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

      <NavbarStartup
        scrolled={scrolled} 
        setShowModal={setShowModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroStartup />

      <RoadmapTicker />

      <ProcessSteps />

      <MakeInIndia />

      {/* SERVICE CATALOG — FIXED PROPS */}
<ServiceCatalogStartup
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
  SERVICE_CATALOG={SERVICE_CATALOG}
  CATEGORIES={CATEGORIES}
/>


<FAQStartup 
  FAQS={FAQS}
  openFaq={openFaq}
  setOpenFaq={setOpenFaq}
/>



      <CTAStartup setShowModal={setShowModal}/>

      <FooterStartup onEnrollClick={() => setShowModal(true)} />


      <ModalEnroll
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleEnrollmentSubmit}
      />
    </div>
  );
};

export default CloudDeskStartupLanding;

