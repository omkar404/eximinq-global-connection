import React, { useState, useMemo, useEffect } from "react";
import { RATES_DATA } from "../data/ratesData";
import { ON_REQUEST_SERVICES } from "../data/onRequestServices";

import Navbar from "../components/CloudDeskcharates/Navbar/Navbar";
import Hero from "../components/CloudDeskcharates/Hero/Hero";
import Stats from "../components/CloudDeskcharates/Stats/Stats";
import Pricing from "../components/CloudDeskcharates/Pricing/Pricing";
import CTA from "../components/CloudDeskcharates/CTA/CTA";
import {Footer} from "../components/CloudDeskcharates/Footer/Footer";
import ContactSupportModal from "../components/CloudDeskcharates/ContactSupport/ContactSupport";
import { ModalEnroll } from "../components/CloudDeskcharates/ModalEnroll";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("fixed");

  // Modal State
  const [openSupport, setOpenSupport] = useState(false);

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

  const filteredRates = useMemo(
    () =>
      RATES_DATA.filter((i) =>
        i.service.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const filteredRequests = useMemo(
    () =>
      ON_REQUEST_SERVICES.filter((i) =>
        i.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <div className="bg-slate-900 text-white">
      {/* Navbar now receives the modal setter */}
      <Navbar
        scrolled={scrolled}
        setShowModal={setShowModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Contact Support Modal */}
      <ContactSupportModal
        open={openSupport}
        onClose={() => setOpenSupport(false)}
      />

      <Hero />
      <Stats />
      <Pricing
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredRates={filteredRates}
        filteredRequests={filteredRequests}
      />
      <CTA setOpenSupport={setOpenSupport} />
      <Footer onEnrollClick={() => setShowModal(true)} />

      <ModalEnroll
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleEnrollmentSubmit}
      />
    </div>
  );
}
