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
          href="https://eximinq.in/foreign-trade-policy/regulatory-updates" 
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
    date: "Today",
    title: "Policy Circular No. 10/2025-26",
    desc: "EPCG Scheme - Relief in Average EO in terms of the para 5.17(a) of Hand Book of Procedures (HBP) of FTP, 2023.",
    color: "blue",
  },
  {
    type: "Customs",
    date: "Yesterday",
    title: "Notification No. 03/2026-Customs (Anti-Dumping Duty)",
    desc: "Seeks to continue levy of anti-dumping duty on Toluene Di-Isocyanate (TDI) for 5 years pursuant to Sunset Review Final Findings issued by DGTR.",
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
    date: "2 Days ago",
    title: "Trade Notice 32/2025-26",
    desc: "Guidelines-Support for Emerging Export Opportunities under Export Promotion Mission (EPM) – NIRYAT PROTSAHAN.",
    color: "purple",
  },
  {
    type: "Public Notice",
    date: "07 Apr 2026",
    title: "Public Notice 01/2026-27",
    desc: "Amendments to Para 2.90 of Handbook of Procedures 2023",
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

      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
        {desc}
      </p>
    </div>
  );
}
