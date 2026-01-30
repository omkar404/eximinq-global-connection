import React from "react";
import {
  RefreshCw,
  Globe,
  HandCoins,
  Building2,
} from "lucide-react";

export function FTP2023() {
  return (
    <section id="ftp2023">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-1.5 h-8 bg-blue-700 mr-3 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            Foreign Trade Policy (FTP) 2023
          </h2>
        </div>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Effective from 1st April 2023
        </span>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Feature
          icon={RefreshCw}
          title="Process Re-engineering"
          desc="Moving from an 'Incentive' to a 'Remission' based regime. Policy is now dynamic with no end date. Automated IT systems introduced for faster approvals and paperless compliance."
          color="blue"
        />
        <Feature
          icon={Globe}
          title="E-Commerce Exports"
          desc="Establishment of E-Commerce Export Hubs (ECEH). Courier export limit raised to ₹10 Lakh per consignment. Integration of Courier/Postal exports with ICEGATE."
          color="green"
        />
        {/* <Feature
          icon={HandCoins}
          title="Amnesty Scheme"
          desc="One-time settlement for default in export obligations under AA & EPCG."
          color="purple"
        />
        <Feature
          icon={Building2}
          title="Towns of Export Excellence"
          desc="New towns notified with MAI & CSP benefits."
          color="orange"
          badge="New"
        /> */}
      </div>
    </section>
  );
}

/* ---------------- Helpers ---------------- */

function Feature({ icon: Icon, title, desc, color, badge }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition relative">
      {badge && (
        <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {badge}
        </span>
      )}

      <div className="flex items-start">
        <div
          className={`bg-${color}-50 p-3 rounded-lg text-${color}-600 mr-4`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <h4 className="font-bold text-gray-800 text-lg">
            {title}
          </h4>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
