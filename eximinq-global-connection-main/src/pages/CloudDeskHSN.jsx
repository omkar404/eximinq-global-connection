import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Handshake,
  Building,
  BookOpen,
  ChevronRight,
  Search,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Globe,
  Download,
} from "lucide-react";

import HSN_DATA from "../components/CloudDeskHSN/mockHSNData";
import BrandLogo from "../components/BrandLogo/BrandLogo";

const CloudDeskHSN = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Chapter options
  const chapterOptions = Array.from({ length: 97 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, "0"),
    label: `Chapter ${(i + 1).toString().padStart(2, "0")}`,
  }));

  // Search logic
  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    let filtered = HSN_DATA;

    if (selectedChapter !== "All") {
      filtered = filtered.filter((i) => i.chapter === selectedChapter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (i) =>
          i.code.replace(/\s/g, "").includes(q.replace(/\s/g, "")) ||
          i.description.toLowerCase().includes(q)
      );
    }

    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative">
      {/* --------------------- ENROLLMENT MODAL --------------------- */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  <Handshake className="mr-2 text-teal-400" /> Enroll Now
                </h2>
                <p className="text-indigo-200 text-sm mt-1">
                  Join the CloudDesk Network
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                    Entity Name
                  </label>
                  <div className="relative">
                    <Building
                      className="absolute left-3 top-3 text-gray-400"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="Company / Firm Name"
                      className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                    Email ID
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={16}
                    />
                    <input
                      type="email"
                      placeholder="official@domain.com"
                      className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                    I am a:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Importer / Exporter",
                      "CHA",
                      "Logistics",
                      "Forwarder",
                    ].map((role) => (
                      <label
                        key={role}
                        className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition"
                      >
                        <input
                          type="radio"
                          name="role"
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          {role}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                    />
                    <span className="ml-3 text-sm text-gray-800">
                      I am interested in being a{" "}
                      <span className="font-bold text-teal-700">
                        Partner with EXIMINQ CLOUDDESK
                      </span>{" "}
                      and agree to the terms of enrollment.
                    </span>
                  </label>
                </div>
                <button
                  type="button"
                  className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition flex items-center justify-center text-lg"
                >
                  Submit Enrollment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------- NAVBAR ----------------------- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-md py-2"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                              <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>

          {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 font-medium ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/services" className="hover:text-teal-600">Services</a>
          <a href="/dgft-customs-consultancy" className="hover:text-teal-600">DGFT & Customs</a>
          <a href="/certificate-of-origin" className="hover:text-teal-600">COO</a>
          <a href="/compliance-trade-india" className="hover:text-teal-600">Compliance</a>
          <a href="/contact-us" className="hover:text-teal-600">Contact</a>  
          <a href="/clouddesk-saas" className="hover:text-teal-500 transition">SAAS</a>
          </div>
          {/* CTA */}
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Helpdesk */}
          <div
            className={`hidden lg:flex flex-col text-right mr-2 ${
              scrolled ? "bg-white py-2" : "bg-white py-2"
            }`}
          >
            <span className="text-xs font-medium opacity-80">
              24/7 Helpdesk
            </span>
            <span className="text-sm font-bold font-mono">+917400096950</span>
          </div>

          {/* Enroll Btn */}
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition"
          >
            Enroll Now
          </button>
        </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu
                size={28}
                className={scrolled ? "text-gray-800" : "text-white"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* ----------------------- HERO SEARCH SECTION ----------------------- */}
      <header className="bg-[#000000] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <BookOpen size={400} className="absolute -right-20 -bottom-20" />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

          {/* World Map Background */}
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            HS Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              Finder
            </span>
          </h1>

          <p className="text-indigo-200 text-lg mt-4">
            Accurate classification with BCD, AIDC, and RoDTEP rates.
          </p>

          {/* SEARCH BOX */}
          <div className="bg-white/10 backdrop-blur-md p-4 mt-10 rounded-2xl border border-white/20 shadow-xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-3"
            >
              {/* Chapter Select */}
              <div className="relative md:w-1/4">
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="w-full h-14 pl-4 pr-8 rounded-xl text-gray-800 bg-white focus:ring-2 focus:ring-teal-400 font-medium"
                >
                  <option value="All">All Chapters</option>
                  {chapterOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-4 text-gray-400 rotate-90" />
              </div>

              {/* Search Input */}
              <div className="relative md:w-3/4">
                <input
                  type="text"
                  placeholder="Enter product name or HS Code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-4 pr-36 rounded-xl text-gray-800 bg-white focus:ring-2 focus:ring-teal-400 text-lg"
                />

                <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-6 rounded-lg font-bold flex items-center">
                  Search <Search size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* ----------------------- RESULTS / BEFORE SEARCH ----------------------- */}
      <main className="container mx-auto px-4 py-12">
        {/* Before Search */}
        {!hasSearched && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Feature
              icon={<Globe size={24} />}
              title="Harmonized System"
              desc="Standardized 6-digit code used by 200+ countries."
            />

            <Feature
              icon={<DollarSign size={24} />}
              title="Duty & Taxes"
              desc="BCD, IGST, AIDC and export benefits."
            />

            <Feature
              icon={<AlertTriangle size={24} />}
              title="Import Policy"
              desc="Free / Restricted / Prohibited / BIS / FSSAI."
            />
          </div>
        )}

        {/* After Search */}
        {hasSearched && (
          <SearchResultsList
            searchResults={searchResults}
            setShowModal={setShowModal}
          />
        )}
      </main>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer setShowModal={setShowModal} />
    </div>
  );
};

export default CloudDeskHSN;

/* ---------------------- SMALL COMPONENTS ---------------------- */

const Feature = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">{desc}</p>
  </div>
);

const SearchResultsList = ({ searchResults, setShowModal }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold flex items-center">
        {searchResults.length > 0 ? (
          <CheckCircle className="text-teal-500 mr-2" />
        ) : (
          <AlertTriangle className="text-red-500 mr-2" />
        )}
        Search Results ({searchResults.length})
      </h2>

      {searchResults.length > 0 && (
        <button className="text-sm text-indigo-600 font-bold flex items-center hover:underline">
          <Download size={16} className="mr-1" /> Export List
        </button>
      )}
    </div>

    {searchResults.length === 0 ? (
      <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
        <Search size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-bold text-gray-600">No Codes Found</h3>
        <p className="text-gray-500 mb-6">
          Try searching for a broader term or check spelling.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Request Manual Search
        </button>
      </div>
    ) : (
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b">
            <tr>
              <th className="p-4">HS Code</th>
              <th className="p-4">Description</th>
              <th className="p-4">Duty</th>
              <th className="p-4">AIDC</th>
              <th className="p-4">RoDTEP</th>
              <th className="p-4">GST</th>
              <th className="p-4">Import</th>
              <th className="p-4">Export</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {searchResults.map((i, idx) => (
              <tr key={idx} className="hover:bg-indigo-50/30">
                <td className="p-4 font-mono font-bold text-indigo-700">
                  {i.code}
                </td>
                <td className="p-4">{i.description}</td>
                <td className="p-4 text-red-600 font-bold">{i.duty}</td>
                <td className="p-4">{i.aidc}</td>
                <td className="p-4 text-green-600 font-bold">{i.rodtep}</td>
                <td className="p-4">{i.gst}</td>
                <td className="p-4">
                  <Badge text={i.importPolicy} />
                </td>
                <td className="p-4">
                  <Badge text={i.exportPolicy} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-gray-50 p-4 border-t text-center">
          <button
            onClick={() => setShowModal(true)}
            className="text-indigo-600 font-bold hover:underline text-sm"
          >
            Enroll Now to Access 12,000+ Live HSN Codes →
          </button>
        </div>
      </div>
    )}
  </div>
);

const Badge = ({ text }) => (
  <span
    className={`px-2 py-1 rounded text-xs font-bold ${
      text.includes("Free")
        ? "bg-green-100 text-green-700"
        : text.includes("Restricted")
        ? "bg-orange-100 text-orange-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {text}
  </span>
);

const Footer = ({ setShowModal }) => (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            EXIMINQ <span className="text-teal-500">CloudDesk</span>
          </h4>

          <p className="text-sm text-gray-400 mb-4">
            Your trusted partner for DGFT, Customs, Compliance & Logistics.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Phone size={16} className="mr-2" /> +917400096950
            </div>
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Mail size={16} className="mr-2" /> clouddesk@eximinq.in
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-bold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-teal-400 transition">DGFT Consultancy</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Customs Clearance</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Compliance Audit</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Logistics Support</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-bold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://eximinq.in/tools/hs-code-finder" className="hover:text-teal-400 transition">HSN Code Search</a>
            </li>
            <li>
              <a href="https://eximinq.in/tools/duty-calculator-finder" className="hover:text-teal-400 transition">Duty Calculator</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">DGFT Public Notices</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Export Incentives</a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h5 className="text-white font-bold mb-4">Need Help?</h5>

          <p className="text-sm text-gray-400 mb-3">
            Our experts are available 24/7.
          </p>

          <button
            onClick={setShowModal}
            className="w-full px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded 
                       hover:bg-teal-500 transition shadow-md"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
      </div>
    </footer>
);
