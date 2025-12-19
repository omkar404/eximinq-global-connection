import React, { useState, useEffect } from "react";

import NavbarStartup from "../components/CloudDeskStartupLanding/NavbarStartup";
import HeroStartup from "../components/CloudDeskStartupLanding/HeroStartup";
import RoadmapTicker from "../components/CloudDeskStartupLanding/RoadmapTicker";
import ProcessSteps from "../components/CloudDeskStartupLanding/ProcessSteps";
import MakeInIndia from "../components/CloudDeskStartupLanding/MakeInIndia";
import ServiceCatalogStartup from "../components/CloudDeskStartupLanding/ServiceCatalogStartup";
import FAQStartup from "../components/CloudDeskStartupLanding/FAQStartup";
import CTAStartup from "../components/CloudDeskStartupLanding/CTAStartup";
import FooterStartup from "../components/CloudDeskStartupLanding/FooterStartup";

// export default function CloudDeskStartupLanding() {
//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

//       <NavbarStartup />

//       <HeroStartup />

//       <RoadmapTicker />

//       <ProcessSteps />

//       <MakeInIndia />

//       <ServiceCatalogStartup
//   searchTerm={searchTerm}
//   setSearchTerm={setSearchTerm}
//   activeCategory={activeCategory}
//   setActiveCategory={setActiveCategory}
//   SERVICE_CATALOG={SERVICE_CATALOG}
//   CATEGORIES={CATEGORIES}
// />


//       <FAQStartup />

//       <CTAStartup />

//       <FooterStartup />

//     </div>
//   );
// }


import { SERVICE_CATALOG, CATEGORIES } from "../components/CloudDeskStartupLanding/startupCatalog"; 
import { FAQS } from "../components/CloudDeskStartupLanding/startupFaqs";

// ⬆️ YOU MUST EXPORT THESE FROM A DATA FILE OR SAME FILE


const CloudDeskStartupLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

      <NavbarStartup scrolled={scrolled} />

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



      <CTAStartup />

      <FooterStartup />

    </div>
  );
};

export default CloudDeskStartupLanding;

