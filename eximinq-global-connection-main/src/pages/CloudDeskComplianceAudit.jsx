import React, { useState, useEffect, useMemo } from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  BarChart3,
  FileText,
  Search,
  Bell,
  ChevronRight,
  Download,
  AlertTriangle,
  CheckCircle2,
  Ship,
  Globe,
  Landmark,
  Scale,
  Box,
  ShieldAlert,
  Cloud,
} from "lucide-react";
import BrandLogo from "../components/BrandLogo/BrandLogo";

// --- EximInq Specific Data Structure ---
// Based on services: DGFT, Customs, Allied Acts (BIS/EPR/WPC), and Banking/FEMA.

const INITIAL_AUDIT_DATA = [
  {
    category: "DGFT Licensing & Registration",
    icon: <Globe className="w-5 h-5" />,
    items: [
      {
        id: "dgft_1",
        label: "IEC & RCMC Status",
        desc: "Verify IEC annual update & RCMC validity (FIEO/EPC) to avoid suspension.",
      },
      {
        id: "dgft_2",
        label: "Advance Auth Redemption (ANF-4F)",
        desc: "Check EODC status for expired licenses; map Import BoE vs Export SB.",
      },
      {
        id: "dgft_3",
        label: "EPCG Export Obligation",
        desc: "Log average & specific EO fulfillment; file installation certificates.",
      },
      {
        id: "dgft_4",
        label: "SCOMET / Restricted License",
        desc: "Verify validity for dual-use items; ensure end-user certificate compliance.",
      },
      {
        id: "dgft_5",
        label: "RoDTEP/RoSCTL Scrips",
        desc: "Generate pending scrips from ledger before time-bar expiry.",
      },
    ],
  },
  {
    category: "Customs, Cargo & Logistics",
    icon: <Ship className="w-5 h-5" />,
    items: [
      {
        id: "cus_1",
        label: "AD Code & ICEGATE",
        desc: "Ensure AD Code is registered at all functional ports; check DSC expiry.",
      },
      {
        id: "cus_2",
        label: "Bond/LUT Management",
        desc: "Monitor MOOWR/Warehouse Bond expiry; renew GST LUT for FY.",
      },
      {
        id: "cus_3",
        label: "SVB Registration",
        desc: "Check Special Valuation Branch renewal status for related party imports.",
      },
      {
        id: "cus_4",
        label: "IGCR Quarterly Returns",
        desc: "File Form IGCR-3 by 10th of next quarter for concessional duty imports.",
      },
      {
        id: "cus_5",
        label: "AEO Tier Status",
        desc: "Maintain compliance records for AEO T1/T2/T3 certification renewal.",
      },
    ],
  },
  {
    category: "Product Compliance (Allied Acts)",
    icon: <Box className="w-5 h-5" />,
    items: [
      {
        id: "prod_1",
        label: "BIS (CRS/ISI) Certification",
        desc: "Mandatory check for Electronics/Steel/Chemicals; verify lab test validity.",
      },
      {
        id: "prod_2",
        label: "EPR Authorization",
        desc: "File annual returns for Plastic, E-Waste, Battery & Waste Tyre management.",
      },
      {
        id: "prod_3",
        label: "WPC (ETA) License",
        desc: "Equipment Type Approval for wireless (Bluetooth/Wi-Fi) modules.",
      },
      {
        id: "prod_4",
        label: "Legal Metrology (LMPC)",
        desc: "Ensure MRP labeling compliance on pre-packaged retail imports.",
      },
      {
        id: "prod_5",
        label: "SIMS / PIMS Registration",
        desc: "File Import Monitoring System data for Steel/Paper/Coal/Chips.",
      },
    ],
  },
  {
    category: "FEMA, Banking & Finance",
    icon: <Landmark className="w-5 h-5" />,
    items: [
      {
        id: "fin_1",
        label: "EDPMS Closure (Export)",
        desc: "Map e-BRC to Shipping Bills; clear entries > 9 months to avoid Caution Listing.",
      },
      {
        id: "fin_2",
        label: "IDPMS Closure (Import)",
        desc: "Submit Bill of Entry evidence (ORM) to AD Bank for payments made.",
      },
      {
        id: "fin_3",
        label: "Duty Drawback & IGST Refund",
        desc: "Reconcile scroll status; check for 'SB005' or 'SB002' errors in ICEGATE.",
      },
      {
        id: "fin_4",
        label: "FDI / FC-GPR Reporting",
        desc: "Ensure timely reporting of foreign equity infusion to RBI.",
      },
    ],
  },
];

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "CloudDesk Overview",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: "audit",
      label: "Compliance Audit",
      icon: <ClipboardCheck size={20} />,
    },
    { id: "analytics", label: "Risk Analytics", icon: <BarChart3 size={20} /> },
    { id: "services", label: "EximInq Services", icon: <Cloud size={20} /> }, // New Tab
  ];

  return (
    <div className="w-72 bg-slate-900 text-slate-300 h-screen flex flex-col fixed left-0 top-0 transition-all duration-300 z-20 hidden md:flex border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 text-white border-b border-slate-800">
        <BrandLogo color="white" size={28} />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
              activeTab === item.id
                ? "bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                : "hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span
              className={`${
                activeTab === item.id
                  ? "text-white"
                  : "text-slate-400 group-hover:text-white"
              }`}
            >
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
            {activeTab === item.id && (
              <ChevronRight className="ml-auto w-4 h-4 opacity-70" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 m-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-inner">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-emerald-400 uppercase">
            Live Support
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-3">Need help with a notice?</p>
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded transition-colors">
          Raise Ticket
        </button>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
    <div className="flex items-center text-slate-500 text-sm">
      <span className="hidden md:inline font-medium text-slate-700">
        EximInq CloudDesk
      </span>
      <ChevronRight size={14} className="mx-2 text-slate-400" />
      <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded text-xs">
        Monthly Audit
      </span>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative group">
        <Bell
          size={20}
          className="text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
        />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
          <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">
            Notifications
          </h4>
          <div className="text-sm text-slate-700 mb-2 pb-2 border-b border-slate-100">
            <span className="text-red-500 font-bold">Alert:</span> Advance
            License #9921 expiring in 10 days.
          </div>
          <div className="text-sm text-slate-700">
            <span className="text-blue-500 font-bold">Info:</span> New RoDTEP
            rates updated.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-slate-700 leading-tight">
            Admin User
          </p>
          <p className="text-xs text-slate-400">Exim Manager</p>
        </div>
        <div className="w-9 h-9 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm border border-blue-200">
          EU
        </div>
      </div>
    </div>
  </header>
);

const KPICard = ({ title, value, subtext, type, icon }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  const currentStyle = styles[type] || styles.blue;

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">
          {title}
        </h3>
        {icon && (
          <div className={`p-1.5 rounded-lg ${currentStyle} bg-opacity-20`}>
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-slate-800">{value}</span>
      </div>
      <div
        className={`mt-3 inline-flex items-center px-2 py-1 rounded text-xs font-bold border ${currentStyle}`}
      >
        {subtext}
      </div>
    </div>
  );
};

const DashboardView = ({ complianceScore, pendingCount, auditData }) => {
  const criticalIssues = [
    {
      title: "BIS Certification Expiring",
      desc: "Steel Import License (IS 2062) expires on 31st Dec. Renewal application pending.",
      severity: "high",
    },
    {
      title: "EDPMS Caution List Warning",
      desc: "5 Shipping bills > 2 years pending knock-off. Immediate bank submission required.",
      severity: "critical",
    },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Compliance Health
          </h2>
          <p className="text-slate-500 mt-1">
            Real-time status of your EximInq regulatory profile.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition shadow-sm shadow-blue-200">
          <Download size={16} /> Download Monthly Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard
          title="Compliance Score"
          value={`${complianceScore}%`}
          subtext={complianceScore > 85 ? "Good Standing" : "Needs Attention"}
          type={complianceScore > 85 ? "green" : "orange"}
          icon={<CheckCircle2 size={16} />}
        />
        <KPICard
          title="Pending Actions"
          value={pendingCount}
          subtext="Critical Items"
          type={pendingCount > 0 ? "red" : "green"}
          icon={<AlertTriangle size={16} />}
        />
        <KPICard
          title="Duty Saved (FY)"
          value="₹ 1.2 Cr"
          subtext="Via AA/EPCG"
          type="blue"
          icon={<Landmark size={16} />}
        />
        <KPICard
          title="Risk Exposure"
          value={complianceScore < 60 ? "HIGH" : "LOW"}
          subtext="Audit Readiness"
          type={complianceScore < 60 ? "red" : "green"}
          icon={<ShieldAlert size={16} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Critical Alerts - Span 2 Columns */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <AlertTriangle size={18} className="text-red-500" />
            Critical Non-Compliance Alerts
          </h3>
          <div className="space-y-4">
            {criticalIssues.map((issue, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-lg border ${
                  issue.severity === "critical"
                    ? "bg-red-50 border-red-100"
                    : "bg-orange-50 border-orange-100"
                }`}
              >
                <div
                  className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    issue.severity === "critical"
                      ? "bg-red-500 animate-pulse"
                      : "bg-orange-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-800">
                      {issue.title}
                    </h4>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white border opacity-70">
                      {issue.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {issue.desc}
                  </p>
                  <button className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                    Resolve via CloudDesk &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links / Services */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">EximInq Services</h3>
          <div className="flex-1 space-y-3">
            {[
              {
                label: "HSN Code Finder",
                color: "bg-indigo-50 text-indigo-700",
              },
              { label: "Duty Calculator", color: "bg-blue-50 text-blue-700" },
              {
                label: "DGFT Public Notices",
                color: "bg-emerald-50 text-emerald-700",
              },
              {
                label: "Book Consultant",
                color: "bg-slate-100 text-slate-700",
              },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition hover:brightness-95 ${item.color} flex justify-between items-center group`}
              >
                {item.label}
                <ChevronRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AuditView = ({
  auditState,
  toggleItem,
  updateRemark,
  searchQuery,
  setSearchQuery,
  exportToCSV,
}) => {
  const filteredData = useMemo(() => {
    if (!searchQuery) return INITIAL_AUDIT_DATA;

    return INITIAL_AUDIT_DATA.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Monthly Compliance Checklist
          </h2>
          <p className="text-slate-500 text-sm">
            Detailed audit based on FTP 2023, Customs Act & Allied Rules.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search (e.g., 'BIS', 'LUT')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 shadow-sm"
            />
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-sm transition"
          >
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                {section.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">
                {section.category}
              </h3>
              <span className="ml-auto text-xs font-semibold bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">
                {section.items.length} Checkpoints
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {section.items.map((item) => {
                const isChecked = auditState[item.id]?.checked || false;
                const remark = auditState[item.id]?.remark || "";

                return (
                  <div
                    key={item.id}
                    className={`px-6 py-5 transition-all ${
                      isChecked ? "bg-blue-50/40" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                      <div className="flex gap-4 flex-1">
                        <div className="pt-1">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleItem(item.id)}
                            className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label
                            onClick={() => toggleItem(item.id)}
                            className={`block font-bold text-base cursor-pointer ${
                              isChecked ? "text-blue-900" : "text-slate-800"
                            }`}
                          >
                            {item.label}
                          </label>
                          <p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-2xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="lg:w-96 flex-shrink-0">
                        <input
                          type="text"
                          value={remark}
                          onChange={(e) =>
                            updateRemark(item.id, e.target.value)
                          }
                          placeholder="Add Remarks (e.g., File No, Expiry Date)"
                          className={`w-full text-sm border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm ${
                            isChecked
                              ? "bg-white border-blue-200 text-blue-800 placeholder-blue-300"
                              : "bg-slate-50 border-slate-200 text-slate-600"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="h-12"></div>
    </div>
  );
};

const AnalyticsView = () => {
  return (
    <div className="p-8 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Exim Risk Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-500 uppercase mb-6">
            Compliance Score Trend (6 Months)
          </h3>
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[55, 62, 78, 80, 85, 92].map((height, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 w-full group"
              >
                <div className="relative w-full h-full flex items-end">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 hover:opacity-90 ${
                      height > 80
                        ? "bg-emerald-500"
                        : height > 60
                        ? "bg-blue-500"
                        : "bg-red-500"
                    }`}
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {["May", "Jun", "Jul", "Aug", "Sep", "Oct"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-500 uppercase mb-6">
            Risk Distribution by Category
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "DGFT (Advance Auth / EPCG)",
                val: 35,
                color: "bg-red-500",
                risk: "High Risk",
              },
              {
                label: "Customs (Duty & Bond)",
                val: 15,
                color: "bg-blue-500",
                risk: "Low Risk",
              },
              {
                label: "Product Compliance (BIS/EPR)",
                val: 40,
                color: "bg-orange-500",
                risk: "Med Risk",
              },
              {
                label: "Banking (EDPMS)",
                val: 10,
                color: "bg-emerald-500",
                risk: "Safe",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">
                    {item.label}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${item.color.replace(
                      "bg-",
                      "bg-opacity-10 text-"
                    )}`}
                  >
                    {item.risk}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-xs text-slate-500">
              <strong>Analyst Note:</strong> High risk in Product Compliance due
              to pending EPR Returns. Please prioritize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function EximInqCompliancePortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [auditState, setAuditState] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("eximinq_audit_data");
    if (saved) {
      setAuditState(JSON.parse(saved));
    }
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem("eximinq_audit_data", JSON.stringify(auditState));
  }, [auditState]);

  // Actions
  const toggleItem = (id) => {
    setAuditState((prev) => ({
      ...prev,
      [id]: { ...prev[id], checked: !prev[id]?.checked },
    }));
  };

  const updateRemark = (id, text) => {
    setAuditState((prev) => ({
      ...prev,
      [id]: { ...prev[id], remark: text },
    }));
  };

  // Calculations
  const totalItems = INITIAL_AUDIT_DATA.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const checkedItems = Object.values(auditState).filter(
    (i) => i.checked
  ).length;
  const complianceScore = Math.round((checkedItems / totalItems) * 100) || 0;
  const pendingCount = totalItems - checkedItems;

  // CSV Export
  const exportToCSV = () => {
    let csvContent =
      "data:text/csv;charset=utf-8,Category,Item,Status,Remarks\n";

    INITIAL_AUDIT_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        const status = auditState[item.id]?.checked ? "Compliant" : "Pending";
        const remark = auditState[item.id]?.remark || "";
        // Handle commas in content
        const cleanDesc = item.label.replace(/,/g, " ");
        const cleanRemark = remark.replace(/,/g, " ");
        csvContent += `"${cat.category}","${cleanDesc}","${status}","${cleanRemark}"\n`;
      });
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `EximInq_Audit_Report_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans text-slate-800">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 md:ml-72 flex flex-col min-h-screen transition-all">
        <Header />

        <div className="flex-1 overflow-auto">
          {activeTab === "dashboard" && (
            <DashboardView
              complianceScore={complianceScore}
              pendingCount={pendingCount}
              auditData={auditState}
            />
          )}

          {activeTab === "audit" && (
            <AuditView
              auditState={auditState}
              toggleItem={toggleItem}
              updateRemark={updateRemark}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              exportToCSV={exportToCSV}
            />
          )}

          {activeTab === "analytics" && <AnalyticsView />}

          {activeTab === "services" && (
            <div className="p-8 animate-in fade-in">
              <h2 className="text-2xl font-bold mb-6">
                EximInq Service Catalog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Registration & Licensing",
                  "Customs Clearance",
                  "Compliance Audit",
                  "Logistics Support",
                  "Legal & Dispute Resolution",
                  "Technology Solutions",
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md cursor-pointer transition"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <Cloud size={20} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service}</h3>
                    <p className="text-sm text-slate-500">
                      End-to-end management and consultancy.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
