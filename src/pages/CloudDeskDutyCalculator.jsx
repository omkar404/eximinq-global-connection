import React, { useState } from "react";

// Sections
import Navbar from "../components/CloudDeskDutyCalculator/Navbar";
import Hero from "../components/CloudDeskDutyCalculator/Hero";
import EducationSection from "../components/CloudDeskDutyCalculator/EducationSection";
import EnrollModal from "../components/CloudDeskDutyCalculator/EnrollModal";
import Footer from "../components/CloudDeskDutyCalculator/Footer";

const CloudDeskDutyCalculator = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar */}
      <Navbar onEnrollClick={openModal} />

      {/* Hero + Calculator */}
      <Hero onEnrollClick={openModal} />

      {/* Education Section */}
      <EducationSection onEnrollClick={openModal} />

      {/* Footer */}
      <Footer onEnrollClick={openModal} />

      {/* Enroll Modal */}
      <EnrollModal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default CloudDeskDutyCalculator;
