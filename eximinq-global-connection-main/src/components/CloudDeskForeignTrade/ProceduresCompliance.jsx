import React, { useState } from "react";
import {
  Send,
  Ship,
  Award,
  Check,
  FileText,
  Search,
  Hand,
  Truck,
} from "lucide-react";

export function ProceduresCompliance() {
  const [tab, setTab] = useState("export");

  return (
    <section id="services">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-1.5 h-8 bg-green-600 mr-3 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">
          Procedures & Compliance
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <TabButton
            active={tab === "export"}
            onClick={() => setTab("export")}
            icon={Send}
            label="Export Cycle"
          />
          <TabButton
            active={tab === "import"}
            onClick={() => setTab("import")}
            icon={Ship}
            label="Import Cycle"
          />
          <TabButton
            active={tab === "schemes"}
            onClick={() => setTab("schemes")}
            icon={Award}
            label="Key Schemes"
          />
        </div>

        {/* Content */}
        <div className="p-8 min-h-[300px]">
          {tab === "export" && <ExportTab />}
          {tab === "import" && <ImportTab />}
          {tab === "schemes" && <SchemesTab />}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tabs ---------------- */

function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-4 text-sm font-bold transition text-center flex items-center justify-center
        ${
          active
            ? "bg-white text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600 hover:bg-white border-b-2 border-transparent"
        }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );
}

/* ---------------- Export ---------------- */

function ExportTab() {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Step-by-Step Export Procedure
      </h3>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <TimelineStep
          number="1"
          title="Registration"
          desc="Apply for IEC online on DGFT portal (Sec 7 FTP). Register with EPC to obtain RCMC."
          link="Apply IEC →"
        />

        <TimelineStep
          number="2"
          title="Pre-Shipment & Filing (Sec 50)"
          desc="Raise Commercial Invoice. File Shipping Bill on ICEGATE and declare RoDTEP/Drawback."
        />

        <TimelineStep
          number="3"
          title="Customs Clearance & LEO (Sec 51)"
          desc="Goods assessed/examined. Proper Officer issues Let Export Order (LEO)."
        />

        <TimelineStep
          icon={Check}
          title="Post-Shipment & Incentives"
          desc="Realise payment (e-BRC). Claim RoDTEP / Drawback / GST Refund."
          success
        />
      </div>
    </>
  );
}

function TimelineStep({ number, icon: Icon, title, desc, link, success }) {
  return (
    <div className="relative pl-10 mb-6">
      <div
        className={`absolute left-0 top-1 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-md ${
          success ? "bg-green-500" : "bg-blue-600"
        }`}
      >
        {Icon ? <Icon className="w-4 h-4" /> : number}
      </div>

      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>

      {link && (
        <a
          href="#"
          className="text-xs text-blue-600 font-semibold mt-1 inline-block hover:underline"
        >
          {link}
        </a>
      )}
    </div>
  );
}

/* ---------------- Import ---------------- */

function ImportTab() {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Import Clearance Workflow
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <ImportCard
          icon={FileText}
          title="1. Bill of Entry (Sec 46)"
          desc="File self-assessed BOE on ICEGATE u/s 46(1). Interest applies if delayed."
        />
        <ImportCard
          icon={Search}
          title="2. Assessment (Sec 17)"
          desc="Faceless Assessment Group verifies classification and valuation."
        />
        <ImportCard
          icon={Hand}
          title="3. Compliance Check"
          desc="IGCR, BIS, FSSAI, PQ clearances via e-Sanchit."
          danger
        />
        <ImportCard
          icon={Truck}
          title="4. Out of Charge (Sec 47)"
          desc="Customs issues OOC. Goods cleared for home consumption."
          success
        />
      </div>
    </>
  );
}

function ImportCard({ icon: Icon, title, desc, danger, success }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <div className="flex items-center mb-2">
        <Icon
          className={`w-4 h-4 mr-2 ${
            danger
              ? "text-red-500"
              : success
              ? "text-green-600"
              : "text-blue-600"
          }`}
        />
        <h4 className="font-bold">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

/* ---------------- Schemes ---------------- */

function SchemesTab() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <SchemeCard
        title="Advance Authorization"
        desc="Allows duty-free import of inputs incorporated in export product."
        tag="Input Remission"
        tagColor="blue"
      />
      <SchemeCard
        title="EPCG Scheme"
        desc="Import Capital Goods at 0% Customs duty for production."
        tag="Capital Goods"
        tagColor="purple"
      />
      <SchemeCard
        title="RoDTEP"
        desc="Refund of embedded taxes not subsumed in GST."
        tag="Post Export"
        tagColor="green"
      />
    </div>
  );
}

function SchemeCard({ title, desc, tag, tagColor }) {
  return (
    <div className="border rounded-xl p-5 hover:border-blue-500 transition cursor-pointer group">
      <h4 className="text-blue-700 font-bold mb-2 group-hover:underline">
        {title}
      </h4>
      <p className="text-xs text-gray-600 mb-3">{desc}</p>
      <span
        className={`bg-${tagColor}-100 text-${tagColor}-800 text-[10px] font-bold px-2 py-1 rounded`}
      >
        {tag}
      </span>
    </div>
  );
}
