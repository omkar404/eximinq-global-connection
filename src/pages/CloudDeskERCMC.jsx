import React, { useState } from "react";
import TopBar from "../components/CloudDeskERCMC/TopBar";
import Navbar from "../components/CloudDeskERCMC/Navbar";
import Hero from "../components/CloudDeskERCMC/Hero";
import Fees from "../components/CloudDeskERCMC/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  FileOutput,
  HandCoins,
  RefreshCcw,
  CheckCircle,
  ChevronRight,
  Laptop,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskERCMC/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskERCMC/ModalEnroll";
const CloudDeskERCMC = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is E-RCMC?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The{" "}
              <strong>Registration Cum Membership Certificate (RCMC)</strong> is
              a membership certificate issued by Export Promotion Councils
              (EPCs) or Commodity Boards. As per the Foreign Trade Policy, an
              exporter must obtain an RCMC to avail of benefits under schemes
              like{" "}
              <strong>RoDTEP, RoSCTL, Advance Authorization, or EPCG</strong>.
            </p>
            <p className="mb-4">
              Recently, DGFT introduced the{" "}
              <strong>
                Common Digital Platform for Issuance of RCMC (E-RCMC)
              </strong>
              . Now, exporters do not need to file physical applications. The
              entire process, from application to renewal, is handled online
              through the DGFT portal.
            </p>
          </div>
        </div>
      </section>
      <section id="panels" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              All Councils & Boards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Comprehensive Panel Guide
            </h2>
            <p className="text-slate-500 mt-2">
              Categorized list of all 30+ Export Promotion Councils and
              Commodity Boards in India.
            </p>
          </div>

          {/* PANEL CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* GENERAL & SERVICES */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-slate-800 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">General & Services</h3>
                <i className="fas fa-briefcase opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <strong>FIEO</strong> (Multi-Product/Trader)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <strong>SEPC</strong> (Services EPC)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <strong>PEPC</strong> (Project Exports)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <strong>EIC</strong> (Export Inspection Council)
                  </li>
                </ul>
              </div>
            </div>

            {/* ENGINEERING */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Engineering & Tech</h3>
                <i className="fas fa-cogs opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <strong>EEPC India</strong> (Engineering)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <strong>ESC</strong> (Electronics & Software)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <strong>TEPC</strong> (Telecom Equipment)
                  </li>
                </ul>
              </div>
            </div>

            {/* AGRICULTURE */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-green-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Agriculture & Food</h3>
                <i className="fas fa-leaf opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <strong>APEDA</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Spices Board
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>Tea
                    Board
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Coffee Board
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Rubber Board
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Tobacco Board
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Coconut Board
                  </li>
                </ul>
              </div>
            </div>

            {/* TEXTILES */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-pink-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Textiles & Apparel</h3>
                <i className="fas fa-tshirt opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>AEPC</strong> (Garments)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>TEXPROCIL</strong> (Cotton)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>MATEXIL</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>HEPC</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>CEPC</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>WWEPC</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <strong>ISEPC</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>Jute
                    Board
                  </li>
                </ul>
              </div>
            </div>

            {/* CHEMICALS */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-yellow-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Chem, Pharma & Plastics</h3>
                <i className="fas fa-flask opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    CHEMEXCIL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    PHARMEXCIL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    PLEXCONCIL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    CAPEXIL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    SHEFEXIL
                  </li>
                </ul>
              </div>
            </div>

            {/* LIFESTYLE */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-slate-100">
              <div className="bg-purple-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Lifestyle & Specialized</h3>
                <i className="fas fa-gem opacity-50"></i>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    GJEPC
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    CLE
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    EPCH
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    SGEPC
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    MPEDA
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    CEPC
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    IOPEPC
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HSN TO COUNCIL TABLE */}
          <div
            id="hsn-guide"
            className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
          >
            <div className="bg-brand-900 text-white p-4">
              <h3 className="font-bold text-lg">
                Master HSN to Council Mapping (Comprehensive List)
              </h3>
            </div>

            <div className="overflow-x-auto max-h-[600px]">
              <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100 sticky top-0 z-10 shadow-sm">
                  <tr>
                    <th className="px-6 py-3">Industry / Sector</th>
                    <th className="px-6 py-3">Product Category & HSN Code</th>
                    <th className="px-6 py-3">
                      Relevant Council (EPC) / Board
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-slate-100">
                  {/* <!-- Agri & Food --> */}
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Agriculture & Food
                    </td>
                    <td class="px-6 py-4">
                      Fruits, Veg, Rice, Wheat, Meat, Dairy, Pickles, Beverages
                      (Ch 02, 04, 07, 08, 10-12, 16-23)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">APEDA</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Marine Products
                    </td>
                    <td class="px-6 py-4">
                      Fish, Crustaceans, Molluscs (Ch 03, 16)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">MPEDA</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">Spices</td>
                    <td class="px-6 py-4">
                      Spices, Curry Powders, Spice Oils (Ch 09)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">Spices Board</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Tea / Coffee
                    </td>
                    <td class="px-6 py-4">Tea (Ch 0902) / Coffee (Ch 0901)</td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        Tea Board / Coffee Board
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Specialty Agri
                    </td>
                    <td class="px-6 py-4">
                      Rubber (Ch 40), Tobacco (Ch 24), Cashew (Ch 0801),
                      Oilseeds (Ch 12)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        Rubber Board / Tobacco Board / CEPC (Cashew) / IOPEPC
                      </span>
                    </td>
                  </tr>

                  {/* <!-- Chemicals & Pharma --> */}
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Chemicals
                    </td>
                    <td class="px-6 py-4">
                      Dyes, Organic/Inorganic Chemicals, Soaps, Agro Chemicals
                      (Ch 28, 29, 32, 34, 38)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">CHEMEXCIL</span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Pharmaceuticals
                    </td>
                    <td class="px-6 py-4">
                      Drugs, APIs, Vaccines, Herbals, Surgical Dressings (Ch 30)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">PHARMEXCIL</span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">Plastics</td>
                    <td class="px-6 py-4">
                      Polymers, Plastic Goods, Packaging (Ch 39)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">PLEXCONCIL</span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Allied Products
                    </td>
                    <td class="px-6 py-4">
                      Books, Paper, Glass, Ceramics, Refractories, Tyres (Ch 48,
                      49, 69, 70)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">CAPEXIL</span>
                    </td>
                  </tr>

                  {/* <!-- Engineering & Electronics --> */}
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Engineering
                    </td>
                    <td class="px-6 py-4">
                      Steel, Machinery, Auto Parts, Tools, Med Devices (Ch
                      72-84, 90)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">EEPC India</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Electronics & Telecom
                    </td>
                    <td class="px-6 py-4">
                      Computers, Software, Telecom Equipment (Ch 85)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">ESC / TEPC</span>
                    </td>
                  </tr>

                  {/* <!-- Textiles --> */}
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Apparel / Garments
                    </td>
                    <td class="px-6 py-4">
                      Readymade Garments (Knitted or Woven) (Ch 61, 62)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        AEPC (Apparel EPC)
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Cotton Textiles
                    </td>
                    <td class="px-6 py-4">
                      Cotton Yarn, Fabrics, Made-ups (Ch 52)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">TEXPROCIL</span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Synthetic / Rayon
                    </td>
                    <td class="px-6 py-4">
                      Man-made Fibres, Polyester, Viscose (Ch 54, 55)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        MATEXIL (Formerly SRTEPC)
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">Handloom</td>
                    <td class="px-6 py-4">Handloom Fabrics and Products</td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">HEPC</span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Wool / Silk / Jute
                    </td>
                    <td class="px-6 py-4">
                      Wool (Ch 51), Silk (Ch 50), Jute (Ch 53)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        WWEPC / ISEPC / Jute Board
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">Carpets</td>
                    <td class="px-6 py-4">
                      Handmade/Machine-made Carpets, Rugs (Ch 57)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        CEPC (Carpet EPC)
                      </span>
                    </td>
                  </tr>

                  {/* <!-- Lifestyle & Others --> */}
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">Leather</td>
                    <td class="px-6 py-4">
                      Leather Footwear, Bags, Garments, Saddlery (Ch 41, 42, 64)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        CLE (Council for Leather Exports)
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Gems & Jewellery
                    </td>
                    <td class="px-6 py-4">
                      Diamonds, Gold, Silver, Imitation Jewellery (Ch 71)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">GJEPC</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Handicrafts
                    </td>
                    <td class="px-6 py-4">
                      Artware, Woodware, Decor, Shawls (Ch 44, 46, 96)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">EPCH</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Sports Goods
                    </td>
                    <td class="px-6 py-4">Sports Equipment, Toys (Ch 95)</td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">SGEPC</span>
                    </td>
                  </tr>
                  <tr class="bg-white hover:bg-slate-50">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Forest / Shellac
                    </td>
                    <td class="px-6 py-4">
                      Lac, Shellac, Vegetable Saps, Guar Gum (Ch 13, 14)
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">SHEFEXIL</span>
                    </td>
                  </tr>

                  {/* <!-- Services & General --> */}
                  <tr class="bg-slate-50 hover:bg-slate-100 border-t-2 border-slate-200">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Services Sector
                    </td>
                    <td class="px-6 py-4">
                      Consultancy, Healthcare, Education, Hotel, Logistics, IT
                      Services
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">
                        SEPC (Services EPC)
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-slate-50 hover:bg-slate-100">
                    <td class="px-6 py-4 font-bold text-slate-800">
                      Multi-Product / General
                    </td>
                    <td class="px-6 py-4">
                      Merchants exporting multiple categories or products not
                      covered above
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-brand-700 font-bold">FIEO</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE – DOCUMENT LIST */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Documents for E-RCMC
              </h2>

              <p className="text-slate-600 mb-8">
                The documentation varies slightly by council, but the core
                requirements on the DGFT portal remain consistent.
              </p>

              <ul className="space-y-4">
                {/* IEC & PAN */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">IEC & PAN</strong>
                    <span className="text-sm text-slate-500">
                      Updated Import Export Code and Business PAN.
                    </span>
                  </div>
                </li>

                {/* GST Certificate */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      GST Certificate
                    </strong>
                    <span className="text-sm text-slate-500">
                      GST Registration certificate.
                    </span>
                  </div>
                </li>

                {/* MSME */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      MSME / Udyam (Optional)
                    </strong>
                    <span className="text-sm text-slate-500">
                      Helpful for getting concessional membership fees in some
                      councils.
                    </span>
                  </div>
                </li>

                {/* Financial Data */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      Financial Data
                    </strong>
                    <span className="text-sm text-slate-500">
                      Export turnover of the preceding financial year (CA
                      Certificate may be required).
                    </span>
                  </div>
                </li>

                {/* Product List */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      Product List
                    </strong>
                    <span className="text-sm text-slate-500">
                      List of major HS Codes you intend to export.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE – ONLINE PROCESS BOX */}
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex items-center justify-center text-center">
              <div>
                <Laptop className="text-brand-300 mx-auto mb-4" size={60} />

                <h3 className="text-xl font-bold text-brand-900 mb-2">
                  100% Online Process
                </h3>

                <p className="text-slate-600 mb-6">
                  No physical file submission. Use your DGFT Digital Signature
                  to sign and submit the application.
                </p>

                <a
                  href="#contact"
                  className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
                >
                  Get Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dynamic Fees Section */}
      <Fees setShowEnrollModal={setShowEnrollModal} />
      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Cloud Desk: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
            </p>

            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  FIEO Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  APEDA Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EEPC India
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  CHEMEXCIL
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  HSN Code Finder
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Rates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Drawback
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-500" />
                +917400096950
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-500" />
                clouddesk@eximinq.in
              </li>

              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-brand-500" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
          © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
          DGFT.
        </div>
      </footer>
    </div>
  );
};

export default CloudDeskERCMC;
