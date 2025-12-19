import React, { useState, useMemo } from "react";
import { RATES_DATA } from "../data/ratesData";
import { ON_REQUEST_SERVICES } from "../data/onRequestServices";

import Navbar from "../components/CloudDeskcharates/Navbar/Navbar";
import Hero from "../components/CloudDeskcharates/Hero/Hero";
import Stats from "../components/CloudDeskcharates/Stats/Stats";
import Pricing from "../components/CloudDeskcharates/Pricing/Pricing";
import CTA from "../components/CloudDeskcharates/CTA/CTA";
import Footer from "../components/CloudDeskcharates/Footer/Footer";
import ContactSupportModal from "../components/CloudDeskcharates/ContactSupport/ContactSupport";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("fixed");

  // Modal State
  const [openSupport, setOpenSupport] = useState(false);

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
      <Navbar setOpenSupport={setOpenSupport} />

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
      <CTA setOpenSupport={setOpenSupport}/>
      <Footer />
    </div>
  );
}
