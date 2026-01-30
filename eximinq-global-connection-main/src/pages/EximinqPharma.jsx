import { useState } from "react";
import  Navbar  from "../components/EximinqPharma/Navbar";
import InnerNavbar from "../components/EximinqPharma/InnerNavbar";
import Hero from "../components/EximinqPharma/Hero";
import ComplianceWidget from "../components/EximinqPharma/ComplianceWidget";
import TradeSolutions from "../components/EximinqPharma/TradeSolutions";
import ServicesGrid from "../components/EximinqPharma/ServicesGrid";
import CloudDesk from "../components/EximinqPharma/CloudDesk";
import CTA from "../components/EximinqPharma/CTA";
import { Footer } from "../components/EximinqPharma/Footer";
import { ModalEnroll } from "../components/EximinqPharma/ModalEnroll";

const EximinqPharma = () => {
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

  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar setShowEnrollModal={setShowEnrollModal} />
        <InnerNavbar
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
      <div className="pt-[100px]">
        <Hero />
        <ComplianceWidget />
        <TradeSolutions activeTab={activeTab} setActiveTab={setActiveTab} />
        <ServicesGrid />
        <CloudDesk />
        <CTA 
         setShowEnrollModal={setShowEnrollModal}
        />
        <Footer />
      </div>
    </div>
  );
};

export default EximinqPharma;
