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
    title: "Policy Circular No. 09/2024-25",
    desc: "Procedure for implementation of Import Management System for IT Hardware.",
    color: "blue",
  },
  {
    type: "Customs",
    date: "Yesterday",
    title: "Notification No. 62/2024-Customs",
    desc: "Amendment in Export Policy Condition under HSN of Schedule-II.",
    color: "green",
  },
  {
    type: "Trade Notice",
    date: "2 Days ago",
    title: "Trade Notice 25/2024-25",
    desc: "Allocation of quota for import of Calcined Pet Coke.",
    color: "purple",
  },
  {
    type: "Public Notice",
    date: "10 Dec 2025",
    title: "PN 34/2024: SION Update",
    desc: "Amendment in Standard Input Output Norms (SION).",
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
