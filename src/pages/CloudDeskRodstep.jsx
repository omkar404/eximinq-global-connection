import React, { useState, useEffect } from "react";

import {Navbar} from "../components/CloudDeskRodstep/Navbar";
import SecondaryNavbar from "../components/CloudDeskRodstep/SecondaryNavbar";
import Hero from "../components/CloudDeskRodstep/Hero";
import LiveRates from "../components/CloudDeskRodstep/LiveRates";
import ProcessSteps from "../components/CloudDeskRodstep/ProcessSteps";
import Features from "../components/CloudDeskRodstep/Features";
import Calculator from "../components/CloudDeskRodstep/Calculator";
import InfoSection from "../components/CloudDeskRodstep/InfoSection";
import ContactCTA from "../components/CloudDeskRodstep/ContactCTA";
import Footer from "../components/CloudDeskRodstep/Footer";

import useLiveRates from "../components/CloudDeskRodstep/useLiveRates";

const CloudDeskRodstep = () => {
  const [scrolled, setScrolled] = useState(false);

  const {
    rates,
    calcAmount,
    setCalcAmount,
    calcType,
    setCalcType,
    calcScheme,
    setCalcScheme,
    calculateTotal,
  } = useLiveRates();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar scrolled={scrolled} />
      <SecondaryNavbar scrollToSection={scrollToSection} />
      <Hero onViewRates={() => scrollToSection("rates")} />
      <LiveRates rates={rates} />
      <ProcessSteps />
      <Features />
      <Calculator
        rates={rates}
        calcAmount={calcAmount}
        setCalcAmount={setCalcAmount}
        calcType={calcType}
        setCalcType={setCalcType}
        calcScheme={calcScheme}
        setCalcScheme={setCalcScheme}
        calculateTotal={calculateTotal}
      />
      <InfoSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default CloudDeskRodstep;
