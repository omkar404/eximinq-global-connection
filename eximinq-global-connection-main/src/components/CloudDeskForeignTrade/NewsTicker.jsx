import React from "react";
import {
  FileText,
  Laptop,
  Ship,
  IndianRupee,
} from "lucide-react";

export function NewsTicker() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-100 py-2.5 flex items-center shadow-inner relative z-30 mt-[72px]">
      {/* Label */}
      <div className="bg-orange-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 ml-4 rounded shadow-sm shrink-0 z-10 flex items-center">
        <span className="mr-2 animate-pulse">●</span> UPDATES
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden ml-4">
        <div className="flex items-center gap-16 text-sm text-gray-800 font-medium animate-marquee whitespace-nowrap">
          <TickerItem
            icon={FileText}
            title="DGFT Public Notice 52/2024:"
            text="Amnesty Scheme for Export Obligation Default extended till 31.03.2025."
          />
          <TickerItem
            icon={Laptop}
            title="Import Alert:"
            text="Registration for Import of Laptops & Tablets (HS 8471) under IMS is now open."
          />
          <TickerItem
            icon={Ship}
            title="Customs:"
            text="Exchange rate notification 12/2025 effective from midnight."
          />
          <TickerItem
            icon={IndianRupee}
            title="RoDTEP:"
            text="Rates revised for Chemical Sector (Chapter 28 & 29)."
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function TickerItem({ icon: Icon, title, text }) {
  return (
    <span className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-blue-600" />
      <strong>{title}</strong>
      <span>{text}</span>
    </span>
  );
}
