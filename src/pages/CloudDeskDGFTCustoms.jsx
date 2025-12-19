import React, { useState, useEffect } from "react";

// ---------------------- COMPONENTS ----------------------
import NavbarDGFT from "../components/CloudDeskDGFTCustoms/NavbarDGFT";
import MobileMenuDGFT from "../components/CloudDeskDGFTCustoms/MobileMenuDGFT";
import ModalEnrollDGFT from "../components/CloudDeskDGFTCustoms/ModalEnrollDGFT";

import NotificationTicker from "../components/CloudDeskDGFTCustoms/NotificationTicker";
import HeroDGFT from "../components/CloudDeskDGFTCustoms/HeroDGFT";
import SubCategoryTabs from "../components/CloudDeskDGFTCustoms/SubCategoryTabs";

import DGFTServicesList from "../components/CloudDeskDGFTCustoms/DGFTServicesList";
import { dgftServices } from "../data/dgftServicesData";

import CustomsServicesList from "../components/CloudDeskDGFTCustoms/CustomsServicesList";
import { customsServices } from "../data/customsServicesData";

import SidebarTools from "../components/CloudDeskDGFTCustoms/SidebarTools";
import DocsChecklist from "../components/CloudDeskDGFTCustoms/DocsChecklist";
import NoticeHelpBox from "../components/CloudDeskDGFTCustoms/NoticeHelpBox";

import FooterDGFT from "../components/CloudDeskDGFTCustoms/FooterDGFT";
import CustomAlert from "../Common/CustomAlert";

// ---------------------- MAIN ----------------------
const CloudDeskDGFTCustoms = () => {
  // UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("DGFT"); // DGFT | Customs
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const [alert, setAlert] = useState(null);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Notifications
  const notifications = [
    "DGFT Public Notice 45/2023: Amnesty Scheme extended till Dec 31st.",
    "Customs Circular 12/2024: Mandatory IGCR monthly return deadline update.",
    "AEO T2 holders now eligible for deferred duty without BG.",
    "USD/INR import rate for this fortnight: 84.50.",
  ];

  // Sub-categories
  const dgftSubCats = [
    "All",
    "Issuance",
    "Incentives",
    "Closure",
    "Regulatory",
  ];
  const customsSubCats = ["All", "Clearance", "Facilitation", "Refunds"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {alert && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {/* ---------------- NAVBAR ---------------- */}
      <NavbarDGFT
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* ---------------- MOBILE MENU ---------------- */}
      <MobileMenuDGFT
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* ---------------- MODAL ---------------- */}
      <ModalEnrollDGFT
        show={showModal}
        onClose={() => setShowModal(false)}
        activeTab={activeTab}
        selectedService={selectedService}
        setAlert={setAlert}
      />

      {/* ---------------- NOTIFICATION TICKER ---------------- */}
      <NotificationTicker notifications={notifications} />

      {/* ---------------- HERO ---------------- */}
      <HeroDGFT
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveSubCategory={setActiveSubCategory}
      />

      {/* ---------------- SUB-CATEGORY TABS ---------------- */}
      <SubCategoryTabs
        subCategories={activeTab === "DGFT" ? dgftSubCats : customsSubCats}
        activeSubCategory={activeSubCategory}
        setActiveSubCategory={setActiveSubCategory}
      />

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="container mx-auto px-4 mt-10 pb-20 flex flex-col lg:flex-row gap-10">
        {/* ---- SERVICES LIST (LEFT) ---- */}
        <div className="lg:w-3/4">
          {activeTab === "DGFT" ? (
            <DGFTServicesList
              services={dgftServices} // All DGFT Data Stored
              activeSubCategory={activeSubCategory}
              openModal={() => setShowModal(true)}
              onStartProcess={(service) => {
                setSelectedService(service); // <- store which card user clicked
                setShowModal(true); // <- open modal
              }}
            />
          ) : (
            <CustomsServicesList
              services={customsServices}
              activeSubCategory={activeSubCategory}
              onStartProcess={(service) => {
                setSelectedService(service);
                setShowModal(true);
              }}
            />
          )}
        </div>

        {/* ---- SIDEBAR (RIGHT) ---- */}
        <div className="lg:w-1/4 space-y-8">
          <SidebarTools />
          <DocsChecklist activeTab={activeTab} />
          <NoticeHelpBox
            activeTab={activeTab}
            openModal={() => setShowModal(true)}
          />
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <FooterDGFT openModal={() => setShowModal(true)} />
    </div>
  );
};

export default CloudDeskDGFTCustoms;
