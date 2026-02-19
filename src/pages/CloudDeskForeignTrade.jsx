import React, { useState, useEffect } from "react";

import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import MobileMenu from "../components/CloudDeskForeignTrade/MobileMenu";
import { Hero } from "../components/CloudDeskForeignTrade/Hero";
import { NewsTicker } from "../components/CloudDeskForeignTrade/NewsTicker";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";

import { ExchangeRates } from "../components/CloudDeskForeignTrade/ExchangeRates";
import { PublicNotices } from "../components/CloudDeskForeignTrade/PublicNotices";
import { ResourceLibrary } from "../components/CloudDeskForeignTrade/ResourceLibrary";
import { EximInqSupport } from "../components/CloudDeskForeignTrade/EximInqSupport";

import { FTP2023 } from "../components/CloudDeskForeignTrade/FTP2023";
import { ProceduresCompliance } from "../components/CloudDeskForeignTrade/ProceduresCompliance";
import { Tools } from "../components/CloudDeskForeignTrade/Tools";
import { ModalEnroll } from "../components/CloudDeskForeignTrade/ModalEnroll";

export default function CloudDeskForeignTrade() {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative">
      <Navbar 
      setShowEnrollModal={setShowEnrollModal}
      setIsMenuOpen={setIsMenuOpen} 
      />

      <div className="h-[30px]" />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />
      <NewsTicker />
      <Hero />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      <main className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT SIDE */}
        <aside className="lg:col-span-3 space-y-8">
          <ExchangeRates />
          <PublicNotices />
          <ResourceLibrary />
          <EximInqSupport />
        </aside>

        {/* RIGHT SIDE */}
        <section className="lg:col-span-9 space-y-12">
          <FTP2023 />
          <ProceduresCompliance />

          <section className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
            <Tools />
          </section>
        </section>
      </main>

      <Footer setShowEnrollModal={setShowEnrollModal} />
    </div>
  );
}
