import React from "react";
import { Bell } from "lucide-react";

export function PublicNotices() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-white px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-bold text-gray-800 flex items-center">
          <Bell className="text-yellow-500 w-4 h-4 mr-2" />
          Public Notices
        </h3>
        <a
          href="https://eximinq.in/foreign-trade-policy/regulatory-updates/"
          target="_blank"
          className="text-xs text-blue-600 font-bold hover:underline bg-blue-50 px-2 py-1 rounded"
        >
          View All
        </a>
      </div>

      {/* List */}
      <div className="h-96 overflow-y-auto custom-scroll p-2 space-y-1">
        {NOTICES.map((notice, index) => (
          <NoticeItem key={index} {...notice} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Data ---------------- */

const NOTICES = [
  {
    type: "DGFT Policy",
    date: "15 Apr 2026",
    title: "Policy Circular No. 01/2026-27",
    desc: "Clarification on Eligibility of New ECGC Whole Turnover Policy under Component II of the Resilience & Logistics Intervention for Export Facilitation (RELIEF) under Export Promotion Mission (EPM)",
    color: "blue",
  },
  {
    type: "Customs",
    date: "07 Aug 2026",
    title: "Instruction No. 14/2026-Customs",
    desc: "Implementation of MeitY Notification S.O. 4182(E) regarding extension of implementation timeline for compliance of IS 18112:2022 for Television Sets under Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2021",
    color: "green",
  },
  // {
  //   type: "Customs",
  //   date: "Yesterday",
  //   title: "Notification No. 07/2025-Customs(CVD)",
  //   desc: "Seeks to amend notification No. 3/2021-Customs (CVD), dated the 9th March, 2021 to extend the levy of countervailing duty on 'Textured Tempered Glass' originating in or exported from Malaysia, up to and inclusive of 8th June, 2026",
  //   color: "green",
  // },
  // {
  //   type: "Customs",
  //   date: "Yesterday",
  //   title:"Notification No. 34/2025-Customs (Non-Tariff)",
  //   desc:"Courier Imports and Exports (Clearance) Amendment, Regulations, 2026",
  //   color: "green",
  // },
  // {
  //   type: "Customs",
  //   date: "Yesterday",
  //   title:"Notification No. 02/2025-Customs (Safeguards)",
  //   desc:"Seeks to impose safeguard duty on Non-alloy and alloy steel flat products",
  //   color: "green",
  // },
  // {
  //   type: "Customs",
  //   date: "Yesterday",
  //   title:"Notification No. 11/2026-Customs (Tariff)",
  //   desc:"Seeks to implement special one-time relief window for clearance of manufactured goods from Special Economic Zones (SEZs) to the Domestic Tariff Area (DTA) at concessional rates of customs duty",
  //   color: "green",
  // },
  {
    type: "Trade Notice",
    date: "11 Aug 2026",
    title: "Trade Notice 19/2026-27",
    desc: "Advisory against 2 Bhutanese firms as per para 8.07 (d) of Foreign Trade Policy- 2023– reg",
    color: "purple",
  },
  {
    type: "Public Notice",
    date: "05 Aug 2026",
    title: "Public Notice 26/2026-27",
    desc: "Extension of Last Date for Submission of TRQ Applications under the India–United Kingdom Comprehensive Economic and Trade Agreement (CETA) for FY 2026–27 – reg.",
    color: "gray",
  },
];

/* ---------------- Helpers ---------------- */

function NoticeItem({ type, date, title, desc, color }) {
  return (
    <div
      className={`p-3 rounded hover:bg-${color}-50 transition cursor-pointer border-l-4 border-transparent hover:border-${color}-500`}
    >
      <div className="flex justify-between items-start mb-1">
        <span
          className={`text-[10px] font-bold text-${color}-700 bg-${color}-100 px-2 py-0.5 rounded`}
        >
          {type}
        </span>
        <span className="text-[10px] text-gray-400">{date}</span>
      </div>

      <p className="text-sm font-semibold text-gray-800 leading-snug">
        {title}
      </p>

      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{desc}</p>
    </div>
  );
}
