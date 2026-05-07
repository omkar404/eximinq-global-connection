import React, { useEffect, useState } from "react";

import NavbarDGFT from "../components/CloudDeskDGFTCustoms/NavbarDGFT";
import MobileMenuDGFT from "../components/CloudDeskDGFTCustoms/MobileMenuDGFT";
import { ModalEnrollDGFT } from "../components/CloudDeskDGFTCustoms/ModalEnrollDGFT";
import NotificationTicker from "../components/CloudDeskDGFTCustoms/NotificationTicker";
import HeroDGFT from "../components/CloudDeskDGFTCustoms/HeroDGFT";
import SubCategoryTabs from "../components/CloudDeskDGFTCustoms/SubCategoryTabs";
import DGFTServicesList from "../components/CloudDeskDGFTCustoms/DGFTServicesList";
import CustomsServicesList from "../components/CloudDeskDGFTCustoms/CustomsServicesList";
import SidebarTools from "../components/CloudDeskDGFTCustoms/SidebarTools";
import DocsChecklist from "../components/CloudDeskDGFTCustoms/DocsChecklist";
import NoticeHelpBox from "../components/CloudDeskDGFTCustoms/NoticeHelpBox";
import FooterDGFT from "../components/CloudDeskDGFTCustoms/FooterDGFT";
import CustomAlert from "../Common/CustomAlert";
import { dgftServices } from "../data/dgftServicesData";
import { customsServices } from "../data/customsServicesData";

const ENROLL_TYPE = "dgft_customs_consultancy_enroll";

const CloudDeskDGFTCustoms = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: ENROLL_TYPE,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("DGFT");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openEnrollModal = () => {
    setShowEnrollModal({
      open: true,
      type: ENROLL_TYPE,
    });
  };

  const notifications = [
    "DGFT Public Notice 45/2023: Amnesty Scheme extended till Dec 31st.",
    "Customs Circular 12/2024: Mandatory IGCR monthly return deadline update.",
    "AEO T2 holders now eligible for deferred duty without BG.",
    "USD/INR import rate for this fortnight: 84.50.",
  ];

  const dgftSubCats = ["All", "Issuance", "Incentives", "Closure", "Regulatory"];
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

      <NavbarDGFT
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      <MobileMenuDGFT
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      <ModalEnrollDGFT
        show={showEnrollModal.open}
        type={showEnrollModal.type || ENROLL_TYPE}
        onClose={() => setShowEnrollModal({ open: false, type: ENROLL_TYPE })}
      />

      <NotificationTicker notifications={notifications} />

      <HeroDGFT
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveSubCategory={setActiveSubCategory}
      />

      <SubCategoryTabs
        subCategories={activeTab === "DGFT" ? dgftSubCats : customsSubCats}
        activeSubCategory={activeSubCategory}
        setActiveSubCategory={setActiveSubCategory}
      />

      <div className="container mx-auto px-4 mt-10 pb-20 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4">
          {activeTab === "DGFT" ? (
            <DGFTServicesList
              services={dgftServices}
              activeSubCategory={activeSubCategory}
              openModal={openEnrollModal}
              onStartProcess={openEnrollModal}
            />
          ) : (
            <CustomsServicesList
              services={customsServices}
              activeSubCategory={activeSubCategory}
              onStartProcess={openEnrollModal}
            />
          )}
        </div>

        <div className="lg:w-1/4 space-y-8">
          <SidebarTools />
          <DocsChecklist activeTab={activeTab} />
          <NoticeHelpBox activeTab={activeTab} openModal={openEnrollModal} />
        </div>
      </div>

      <FooterDGFT setShowEnrollModal={setShowEnrollModal} />
    </div>
  );
};

export default CloudDeskDGFTCustoms;
