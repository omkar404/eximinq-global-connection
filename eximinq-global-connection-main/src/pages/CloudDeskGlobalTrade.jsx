import React, { useState } from "react";
import TopBar from "../components/CloudDeskGlobalTrade/TopBar";
import Navbar from "../components/CloudDeskGlobalTrade/Navbar";
import Hero from "../components/CloudDeskGlobalTrade/Hero";
import Fees from "../components/CloudDeskGlobalTrade/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Percent,
  FileText,
  Wallet,
  FileCheck,
  Scale,
  Banknote,
  BadgeCheck,
  PackageOpen,
  ArrowDownUp,
  ShieldCheck,
  FileBadge,
  Factory,
  PackageIcon,
  Ship,
  Boxes,
  PlaneTakeoff,
  Check,
  ArrowRight,
  Flag,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskGlobalTrade/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskGlobalTrade/ModalEnroll";

const CloudDeskGlobalTrade = () => {
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

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Logistics Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Comprehensive Cargo Services
            </h2>
          </div>

          {/* Services Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FCL */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition hover:-translate-y-1">
              <div
                className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 
                 group-hover:bg-blue-600 group-hover:text-white transition"
              >
                <Ship size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Sea Freight (FCL)
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Exclusive container booking (20ft, 40ft, HQ, Reefer) with top
                liners like Maersk, MSC, CMA CGM.
              </p>

              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> Competitive
                  Ocean Freight
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> Flexible
                  Sailing Schedules
                </li>
              </ul>
            </div>

            {/* LCL */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition hover:-translate-y-1">
              <div
                className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 
                 group-hover:bg-orange-600 group-hover:text-white transition"
              >
                <Boxes size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Sea Consolidation (LCL)
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Pay only for the space you use. We consolidate small cargo
                efficiently into shared containers.
              </p>

              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> Weekly Console
                  Sailings
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> Cost-effective
                  for small loads
                </li>
              </ul>
            </div>

            {/* Air Freight */}
            <div className="group bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition hover:-translate-y-1">
              <div
                className="w-14 h-14 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 
                 group-hover:bg-sky-600 group-hover:text-white transition"
              >
                <PlaneTakeoff size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Air Freight
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Fast delivery for time-sensitive cargo with priority booking on
                major airlines.
              </p>

              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> Express &
                  Economy Options
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-green-500" size={14} /> IATA Accredited
                  Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id = "features" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Trust EXIMINQ with Your Cargo?
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Logistics is not just about moving goods; it's about timing and
                cost. Our "Contact" model aggregates volumes to negotiate
                rates that individual shippers simply cannot get.
              </p>

              {/* FEATURES LIST */}
              <div className="space-y-6">
                {/* POINT 1 */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center
                    text-accent-400 text-xl font-bold border border-brand-700"
                  >
                    1
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Aggressive Pricing
                    </h4>
                    <p className="text-sm text-slate-400">
                      Leveraging bulk volume to get spot rates lower than market
                      average.
                    </p>
                  </div>
                </div>

                {/* POINT 2 */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center
                    text-accent-400 text-xl font-bold border border-brand-700"
                  >
                    2
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Integrated Customs
                    </h4>
                    <p className="text-sm text-slate-400">
                      Seamless handover from Freight to Customs Clearance (CHA)
                      under one roof.
                    </p>
                  </div>
                </div>

                {/* POINT 3 */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center
                    text-accent-400 text-xl font-bold border border-brand-700"
                  >
                    3
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">Global Network</h4>
                    <p className="text-sm text-slate-400">
                      Strong agency network in 150+ countries for Door-to-Door
                      delivery (DDP/DAP).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – CARD */}
            <div className="relative">
              {/* Decorative rotated background */}
              <div className="bg-white rounded-xl p-2 transform rotate-2 opacity-10 absolute inset-0"></div>

              {/* Main card */}
              <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative">
                <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                  Recent Bookings
                </h3>

                <div className="space-y-4">
                  {/* Booking 1 */}
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="block font-bold text-slate-700 flex items-center">
                        Shanghai{" "}
                        <ArrowRight size={14} className="mx-1 text-slate-400" />{" "}
                        Nhava Sheva
                      </span>
                      <span className="text-xs text-slate-500">
                        40ft HC | Auto Parts
                      </span>
                    </div>

                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                      Booked
                    </span>
                  </div>

                  {/* Booking 2 */}
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="block font-bold text-slate-700 flex items-center">
                        Delhi{" "}
                        <ArrowRight size={14} className="mx-1 text-slate-400" />{" "}
                        Dubai
                      </span>
                      <span className="text-xs text-slate-500">
                        Air Freight | 500 Kgs
                      </span>
                    </div>

                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                      In Transit
                    </span>
                  </div>

                  {/* Booking 3 */}
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="block font-bold text-slate-700 flex items-center">
                        Mundra{" "}
                        <ArrowRight size={14} className="mx-1 text-slate-400" />{" "}
                        Rotterdam
                      </span>
                      <span className="text-xs text-slate-500">
                        20ft GP | Textiles
                      </span>
                    </div>

                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                      Scheduled
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t text-center">
                  <a
                    href="#quote"
                    className="text-brand-600 font-bold text-sm hover:underline"
                  >
                    View Live Rates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="comparison" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
  
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              MOOWR vs Traditional Schemes
            </h2>
            <p className="text-slate-500 mt-2">
              Why MOOWR is superior for modern manufacturing.
            </p>
          </div>


          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600 border border-slate-200">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  <th className="px-6 py-4 border-r">Feature</th>
                  <th className="px-6 py-4 border-r text-brand-700 font-bold">
                    MOOWR Scheme
                  </th>
                  <th className="px-6 py-4 border-r">EPCG Scheme</th>
                  <th className="px-6 py-4">Advance Authorization</th>
                </tr>
              </thead>

              <tbody>
            
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <Banknote size={16} className="text-brand-600" />
                    Import Duty
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    Deferred (Zero Upfront)
                  </td>
                  <td className="px-6 py-4 border-r">Zero (Conditional)</td>
                  <td className="px-6 py-4">Zero (Inputs only)</td>
                </tr>

               
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <BadgeCheck size={16} className="text-brand-600" />
                    Export Obligation
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    NONE
                  </td>
                  <td className="px-6 py-4 border-r">6 Times Duty Saved</td>
                  <td className="px-6 py-4">Value Addition Required</td>
                </tr>

               
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <PackageOpen size={16} className="text-brand-600" />
                    Capital Goods
                  </td>
                  <td className="px-6 py-4 border-r">Allowed</td>
                  <td className="px-6 py-4 border-r">Allowed</td>
                  <td className="px-6 py-4">Not Allowed</td>
                </tr>

                
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <Scale size={16} className="text-brand-600" />
                    IGST Payment
                  </td>
                  <td className="px-6 py-4 border-r text-green-600 font-bold">
                    Deferred
                  </td>
                  <td className="px-6 py-4 border-r">Exempted (Pre-Import)</td>
                  <td className="px-6 py-4">Exempted</td>
                </tr>

                
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold border-r flex items-center gap-2">
                    <ArrowDownUp size={16} className="text-brand-600" />
                    Depreciation
                  </td>
                  <td className="px-6 py-4 border-r">
                    Allowed on Capital Goods
                  </td>
                  <td className="px-6 py-4 border-r">Not Applicable</td>
                  <td className="px-6 py-4">Not Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Workflow
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              End-to-End Booking Process
            </h2>
          </div>

          {/* STEPS */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Quote</h3>
              <p className="text-sm text-slate-500">
                Receive multiple carrier options and confirm the best rate.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Booking</h3>
              <p className="text-sm text-slate-500">
                We secure the slot with the Shipping Line/Airline and issue
                Booking Note.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Pickup</h3>
              <p className="text-sm text-slate-500">
                Container placed at your factory for stuffing or cargo picked
                up.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Customs</h3>
              <p className="text-sm text-slate-500">
                Export documents filed, LEO generated, and cargo loaded.
              </p>
            </div>

            {/* Step 5 – Lucide Icon */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
              mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <Flag size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">BL Release</h3>
              <p className="text-sm text-slate-500">
                Bill of Lading issued upon vessel sailing. Shipment tracked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
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
                  Sea Freight (FCL/LCL)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Customs Brokerage
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Project Cargo
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
                  Incoterms 2020
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Container Specifications
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Volumetric Weight Calc
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Port Holidays
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

export default CloudDeskGlobalTrade;
