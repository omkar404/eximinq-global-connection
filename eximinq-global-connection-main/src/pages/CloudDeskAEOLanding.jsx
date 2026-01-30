import React, { useState, useEffect } from "react";

import NavbarAEO from "../components/CloudDeskAEOLanding/NavbarAEO";
import HeroAEO from "../components/CloudDeskAEOLanding/HeroAEO";
import DeadlineCardAEO from "../components/CloudDeskAEOLanding/DeadlineCardAEO";
import AEOServices from "../components/CloudDeskAEOLanding/AEOServices";
import ContactAEO from "../components/CloudDeskAEOLanding/ContactAEO";
import FooterAEO from "../components/CloudDeskAEOLanding/FooterAEO";

const CloudDeskAEOLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  // Countdown logic
  useEffect(() => {
    const deadline = new Date("December 31, 2025 23:59:59").getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = deadline - now;

      if (diff <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

      <NavbarAEO isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <HeroAEO />

      <DeadlineCardAEO timeLeft={timeLeft} />

      <AEOServices />

      <ContactAEO />

      <FooterAEO />

    </div>
  );
};

export default CloudDeskAEOLanding;
