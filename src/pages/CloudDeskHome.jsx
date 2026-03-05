import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/CloudDeskHome/Navbar";
import { MobileMenu } from "../components/CloudDeskHome/MobileMenu";
import { Hero } from "../components/CloudDeskHome/Hero";
import { StatsStrip } from "../components/CloudDeskHome/StatsStrip";
import { UpdatesTabs } from "../components/CloudDeskHome/UpdatesTabs";
import { UpdatesList } from "../components/CloudDeskHome/UpdatesList";
import { Sidebar } from "../components/CloudDeskHome/Sidebar";
import { ModalEnroll } from "../components/CloudDeskHome/ModalEnroll";
import { StuckInCustoms } from "../components/CloudDeskHome/StuckInCustoms";
import { SectionHeader } from "../components/CloudDeskHome/SectionHeader";
import { Footer } from "../components/CloudDeskHome/Footer";
import SegmentSection from "../components/CloudDeskHome/SegmentSection";
import IndustrySection from "../components/CloudDeskHome/IndustriesSection";
import BentoGrid from "../components/CloudDeskHome/BentoGrid";

const CloudDeskHome = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dgft");
  const [scrolled, setScrolled] = useState(false);

  // ─────────────────────────────────────────────────────────────
  // Scroll Handler
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─────────────────────────────────────────────────────────────
  // Dummy API-like update data per tab
  // ─────────────────────────────────────────────────────────────

  const updatesByTab = {
    dgft: [
      {
        id: 1,
        title: "DGFT Advance License Closure Assistance",
        country: "DGFT Policy",
        date: "High Priority",
      },
      {
        id: 4,
        title: "AEO T1/T2 Certification Consultancy",
        country: "Certification",
        date: "Expert Team",
      },
    ],

    customs: [
      {
        id: 2,
        title: "Customs Duty Calculation & HSN Mapping",
        country: "Customs",
        date: "24/7 Support",
      },
      {
        id: 5,
        title: "IGST Refund Delay Resolution",
        country: "Customs",
        date: "Immediate Support",
      },
    ],

    logistics: [
      {
        id: 6,
        title: "Freight Rate Optimization Support",
        country: "Logistics",
        date: "Daily Updates",
      },
      {
        id: 7,
        title: "CHA Coordination & Port Clearance",
        country: "CHA",
        date: "Live Tracking",
      },
    ],

    compliance: [
      {
        id: 3,
        title: "RoDTEP Scrip Generation Support",
        country: "Incentives",
        date: "Open Now",
      },
      {
        id: 8,
        title: "Compliance Audit Preparation",
        country: "Compliance",
        date: "New",
      },
    ],
  };

  const updates = updatesByTab[activeTab] || [];

  // ─────────────────────────────────────────────────────────────
  // Sidebar — Industries Served
  // ─────────────────────────────────────────────────────────────

  const sectors = [
    "Agriculture & Food",
    "Chemicals",
    "Engineering",
    "Pharmaceuticals",
    "Textiles",
    "Electronics",
    "Construction",
    "Oil & Gas",
    "Services",
    "Automotive",
    "Handicrafts",
    "Gems & Jewellery",
  ];

  // ─────────────────────────────────────────────────────────────
  // Handle Modal Submit (you can hook to backend later)
  // ─────────────────────────────────────────────────────────────

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };

  // ─────────────────────────────────────────────────────────────

  return (
    <>
      <Helmet>
        <title>
          Eximinq CloudDesk | DGFT, Customs & Export Compliance Experts in India
        </title>

        <meta
          name="description"
          content="Eximinq CloudDesk provides DGFT, Customs, ICEGATE, AD Code and E-RCMC registration services across India. Trusted export compliance experts."
        />

        <link rel="canonical" href="https://eximinq.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Eximinq CloudDesk | Export Compliance Experts" />
        <meta
          property="og:description"
          content="DGFT, Customs, ICEGATE and RCMC advisory services across India."
        />
        <meta property="og:url" content="https://eximinq.in/" />
        <meta property="og:type" content="website" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Eximinq Global Connections",
            "url": "https://eximinq.in",
            "logo": "https://eximinq.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7400096950",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          })}
        </script>

        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Eximinq CloudDesk",
            "url": "https://eximinq.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://eximinq.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative">
        {/* NAVIGATION */}
        <Navbar
          scrolled={scrolled}
          setShowEnrollModal={setShowEnrollModal}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <MobileMenu
          isMenuOpen={isMenuOpen}
          setShowEnrollModal={setShowEnrollModal}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* HERO */}
        <Hero setShowEnrollModal={setShowEnrollModal} />

        {/* STATS */}
        <StatsStrip />

        <BentoGrid />

        <SegmentSection />

        <IndustrySection />

        {/* <StuckInCustoms setShowEnrollModal={setShowEnrollModal} /> */}
        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              {/* <SectionHeader /> */}

              {/* <UpdatesTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}

              {/* <UpdatesList updates={updates} /> */}

              <StuckInCustoms setShowEnrollModal={setShowEnrollModal} />
            </div>

            <div className="lg:col-span-4">
              <Sidebar
                sectors={sectors}
                // onEnrollClick={() => setShowEnrollModal(true)}
                setShowEnrollModal={setShowEnrollModal}
              />
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <Footer
          setShowEnrollModal={setShowEnrollModal}
        // onEnrollClick={() => setShowEnrollModal(true)}
        />

        {/* MODAL */}
        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>
    </>
  );
};

export default CloudDeskHome;
