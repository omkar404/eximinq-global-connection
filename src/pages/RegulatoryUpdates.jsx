/*-------------------------------*/
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";
import {
  Search,
  FileText,
  Bookmark,
  Share2,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  History,
} from "lucide-react";

/* ─────────────────────────────────────────────
    NAV CONFIG
  ───────────────────────────────────────────── */
const DGFT_NAV = [
  { label: "Public Notices", key: "public" },
  { label: "Notifications", key: "notification" },
  { label: "Policy Circulars", key: "circular" },
  { label: "Trade Notices", key: "trade" },
];

const CBIC_NAV = [
  { label: "Acts", key: "acts" },
  { label: "Rules", key: "rules" },
  { label: "Regulations", key: "regulations" },
  {
    label: "Notifications",
    key: "notifications",
    children: [
      { label: "Tariff", key: "notifications-tariff" },
      { label: "Anti-Dumping", key: "notifications-antiDumping" },
      { label: "CVD", key: "notifications-cvd" },
      { label: "Non-Tariff", key: "notifications-nonTariff" },
      { label: "Safeguards", key: "notifications-safeguards" },
    ],
  },
  { label: "Circulars", key: "circulars" },
  { label: "Instructions / Guidelines", key: "instructions" },
  { label: "Orders", key: "orders" },
  { label: "Forms", key: "forms" },
  { label: "Allied Acts", key: "alliedActs" },
];

const FINANCIAL_YEARS = ["2025-26", "2024-25", "2023-24", "2022-23"];

/* ─────────────────────────────────────────────
    HELPERS
  ───────────────────────────────────────────── */
function parseDate(raw) {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d)) return raw;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDateDDMMYYYY(raw) {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d)) return raw;
  return d.toLocaleDateString("en-GB");
}

/* ─────────────────────────────────────────────
    CBIC STYLE TOKENS
  ───────────────────────────────────────────── */
const cbic = {
  headerBg: "#0946ecde",
  accentGold: "#0946ecde",
  btnBg: "#0946ecde",
};

const API_BASE = (
  process.env.REACT_APP_API_URL ||
  (typeof window !== "undefined" ? window.location.origin : "")
).replace(/\/$/, "");

const SNAPSHOT_EVENT = "regulatory-updates:snapshot-ready";

function getDGFTUrl(tabKey) {
  return `${API_BASE}/api/dgft/notices?type=${tabKey}`;
}

function getCustomsUrl(tabKey) {
  const notificationCategoryMap = {
    "notifications-tariff": "tariff",
    "notifications-antiDumping": "antiDumping",
    "notifications-cvd": "cvd",
    "notifications-nonTariff": "nonTariff",
    "notifications-safeguards": "safeguards",
  };

  const notificationCategory = notificationCategoryMap[tabKey];
  return notificationCategory
    ? `${API_BASE}/api/customs/notifications/category/${notificationCategory}`
    : `${API_BASE}/api/customs/${tabKey}`;
}

function getInitialRegulatorySnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  if (window.__REGULATORY_UPDATES_PRERENDER__) {
    return window.__REGULATORY_UPDATES_PRERENDER__;
  }

  const cachedCustoms = window.snapStore?.[getCustomsUrl("acts")];
  if (!cachedCustoms?.success || !Array.isArray(cachedCustoms.data)) {
    return null;
  }

  return {
    activeAuthority: "customs",
    activeTab: "acts",
    activeFY: "2025-26",
    activeLabel: "CBIC › Acts",
    notifications: cachedCustoms.data,
    search: "",
    selectedAct: "",
  };
}

/* ─────────────────────────────────────────────
    TABLE VIEW COMPONENT (Only for CBIC)
  ───────────────────────────────────────────── */
const TableView = ({ items, columns }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200">
    <table className="min-w-full bg-white">
      <thead>
        <tr style={{ backgroundColor: cbic.headerBg }}>
          {columns.map((col) => (
            <th
              key={col.key}
              className={`px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded shadow-lg hover:shadow-xl ${col.center ? "text-center" : ""}`}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="px-5 py-12 text-center text-gray-400 text-sm"
            >
              No records found.
            </td>
          </tr>
        ) : (
          items.map((row, i) => (
            <tr
              key={row.id || i}
              className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-5 py-3 text-sm ${col.center ? "text-center" : ""}`}
                >
                  {col.render ? (
                    col.render(row)
                  ) : (
                    <span className="text-gray-700">{row[col.key] || "—"}</span>
                  )}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

/* ─────────────────────────────────────────────
    MAIN PAGE
  ───────────────────────────────────────────── */
export default function RegulatoryUpdates() {
  const initialSnapshot = getInitialRegulatorySnapshot();
  const skipInitialFetch = useRef(Boolean(initialSnapshot));
  const [loading, setLoading] = useState(!initialSnapshot);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState(
    initialSnapshot?.notifications || []
  );
  const [activeTab, setActiveTab] = useState(
    initialSnapshot?.activeTab || "acts"
  );
  const [search, setSearch] = useState(initialSnapshot?.search || "");
  const [activeAuthority, setActiveAuthority] = useState(
    initialSnapshot?.activeAuthority || "customs"
  );
  const [activeFY, setActiveFY] = useState(
    initialSnapshot?.activeFY || "2025-26"
  );
  const [openGroups, setOpenGroups] = useState(new Set(["acts"]));
  const [activeLabel, setActiveLabel] = useState("CBIC › Acts");
  const [selectedAct, setSelectedAct] = useState("");

  /* ── API Calls ── */
  const fetchDGFTData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(getDGFTUrl(activeTab), {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.message || "Failed to fetch DGFT data");

      const filteredData = Array.isArray(data.data)
        ? data.data.filter((item) => item.type === activeTab)
        : [];

      setNotifications(filteredData);
    } catch (err) {
      setError(err.message);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  const fetchCustomsData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(getCustomsUrl(activeTab), {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch Customs data");
      }

      setNotifications(data.data);
    } catch (err) {
      console.error("Customs fetch error:", err);
      setError(err.message);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    if (skipInitialFetch.current) {
      skipInitialFetch.current = false;
      return;
    }

    if (activeAuthority === "dgft") {
      fetchDGFTData();
    } else {
      fetchCustomsData();
    }
  }, [activeTab, activeAuthority, fetchDGFTData, fetchCustomsData]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const snapshot = {
      activeAuthority,
      activeTab,
      activeFY,
      activeLabel,
      notifications,
      search,
      selectedAct,
    };

    window.__REGULATORY_UPDATES_PRERENDER__ = snapshot;
    window.snapSaveState = () => ({
      __REGULATORY_UPDATES_PRERENDER__: snapshot,
    });

    if (!loading) {
      window.__REGULATORY_UPDATES_READY__ = true;
      document.documentElement.setAttribute(
        "data-regulatory-updates-ready",
        "true"
      );
      window.dispatchEvent(
        new CustomEvent(SNAPSHOT_EVENT, {
          detail: {
            activeAuthority,
            activeTab,
            count: notifications.length,
          },
        })
      );
    } else {
      window.__REGULATORY_UPDATES_READY__ = false;
      document.documentElement.setAttribute(
        "data-regulatory-updates-ready",
        "false"
      );
    }

    return () => {
      if (window.__REGULATORY_UPDATES_READY__ !== true) {
        document.documentElement.removeAttribute("data-regulatory-updates-ready");
      }
    };
  }, [
    activeAuthority,
    activeFY,
    activeLabel,
    activeTab,
    loading,
    notifications,
    search,
    selectedAct,
  ]);

  const displayedData = notifications.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.noticeNo?.toLowerCase().includes(q) ||
      item.number?.toLowerCase().includes(q) ||
      item.title?.toLowerCase().includes(q) ||
      item.subject?.toLowerCase().includes(q) ||
      item.formName?.toLowerCase().includes(q) ||
      item.formNumber?.toLowerCase().includes(q) ||
      item.chapter?.toLowerCase().includes(q) ||
      item.section?.toLowerCase().includes(q)
    );
  });

  const switchAuthority = (auth) => {
    setActiveAuthority(auth);
    const defaultKey = auth === "dgft" ? "public" : "acts";
    const defaultLabel =
      auth === "dgft" ? "DGFT › Public Notices" : "CBIC › Acts";
    setActiveTab(defaultKey);
    setOpenGroups(new Set([defaultKey]));
    setActiveLabel(defaultLabel);
    setSearch("");
    setSelectedAct("");
  };

  const handleNavClick = (key, label) => {
    setActiveTab(key);
    setActiveLabel(label);
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
    setSearch("");
    setSelectedAct("");
  };

  const handleChildClick = (key, label) => {
    setActiveTab(key);
    setActiveLabel(label);
    setSearch("");
    setSelectedAct("");
  };

  const nav = activeAuthority === "dgft" ? DGFT_NAV : CBIC_NAV;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Public Notices, Circulars & Notifications
          </h1>
          <p className="text-slate-500 mb-6">
            Centralized database for DGFT, CBIC (Customs), and RBI Trade
            Regulations.
          </p>
        </div>

        <div className="flex gap-6 items-start">
          <aside className="w-64 flex-shrink-0 sticky top-24">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="flex p-3 gap-2 border-b border-slate-100">
                <AuthBtn
                  active={activeAuthority === "dgft"}
                  onClick={() => switchAuthority("dgft")}
                >
                  DGFT
                </AuthBtn>
                <AuthBtn
                  active={activeAuthority === "customs"}
                  onClick={() => switchAuthority("customs")}
                >
                  CBIC
                </AuthBtn>
              </div>

              <nav className="py-1">
                {nav.map((item) => {
                  const hasChildren = item.children?.length > 0;
                  const isOpen = openGroups.has(item.key);
                  const isActive = activeTab === item.key;

                  return (
                    <div key={item.key + item.label}>
                      <button
                        onClick={() =>
                          handleNavClick(
                            item.key,
                            `${activeAuthority.toUpperCase()} › ${item.label}`
                          )
                        }
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left
                            ${
                              isActive && !hasChildren
                                ? "bg-blue-50 text-blue-700 font-medium border-l-[3px] border-blue-600"
                                : "text-slate-700 hover:bg-slate-50 border-l-[3px] border-transparent"
                            }`}
                      >
                        <span>{item.label}</span>
                        {hasChildren ? (
                          isOpen ? (
                            <ChevronDown
                              size={14}
                              className="text-slate-400 flex-shrink-0"
                            />
                          ) : (
                            <ChevronRight
                              size={14}
                              className="text-slate-400 flex-shrink-0"
                            />
                          )
                        ) : null}
                      </button>

                      {hasChildren && isOpen && (
                        <div className="bg-slate-50 border-t border-b border-slate-100">
                          {item.children.map((child) => {
                            const childActive = activeTab === child.key;
                            return (
                              <button
                                key={child.label}
                                onClick={() =>
                                  handleChildClick(
                                    child.key,
                                    `${activeAuthority.toUpperCase()} › ${item.label} › ${child.label}`
                                  )
                                }
                                className={`w-full text-left flex items-center px-6 py-2 text-xs transition-colors
                                    ${
                                      childActive
                                        ? "text-blue-700 font-medium bg-blue-50 border-l-[3px] border-blue-600"
                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-l-[3px] border-transparent"
                                    }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-60" />
                                {child.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="border-t border-slate-100 p-4">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Financial Year
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {FINANCIAL_YEARS.map((fy) => (
                    <button
                      key={fy}
                      onClick={() => setActiveFY(fy)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors
                          ${
                            activeFY === fy
                              ? "bg-blue-600 text-white"
                              : "border border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600"
                          }`}
                    >
                      {fy}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {activeAuthority === "dgft" ? (
              <DGFTView
                loading={loading}
                error={error}
                data={displayedData}
                search={search}
                setSearch={setSearch}
                activeLabel={activeLabel}
                activeFY={activeFY}
                activeTab={activeTab}
              />
            ) : (
              <CBICView
                loading={loading}
                error={error}
                data={displayedData}
                search={search}
                setSearch={setSearch}
                activeLabel={activeLabel}
                activeFY={activeFY}
                activeTab={activeTab}
                selectedAct={selectedAct}
                setSelectedAct={setSelectedAct}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
    DGFT VIEW — Card View Only
  ───────────────────────────────────────────── */
function DGFTView({
  loading,
  error,
  data,
  search,
  setSearch,
  activeLabel,
  selectedAct,
  activeFY,
  activeTab,
}) {
  return (
    <div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-4 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={14}
            />
            <input
              type="text"
              placeholder="Search by notice number, title or subject…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  placeholder:text-slate-400 text-slate-700"
            />
          </div>
          <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0">
            {loading
              ? "Loading…"
              : `${data.length} result${data.length !== 1 ? "s" : ""}`}
          </span>
        </div>
        <div className="px-4 py-2 bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-medium text-blue-700">
            {activeLabel}
          </span>
          <span className="text-xs font-medium text-blue-700">
            {selectedAct}
          </span>
          <span className="text-xs text-slate-400">{activeFY}</span>
        </div>
      </div>

      {loading && <LoadingSkeleton />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && data.length === 0 && <EmptyState />}
      {!loading && !error && data.length > 0 && (
        <div className="space-y-3">
          {data.map((item, index) => (
            <DGFTCard
              key={item.id || index}
              item={item}
              activeTab={activeTab}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
    DGFT CARD
  ───────────────────────────────────────────── */
function DGFTCard({ item, activeTab }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const noticeNumber = item.noticeNo || item.number || "—";
  const noticeTitle = item.title || item.subject || "No title available";
  const noticeDate = item.date || item.issueDate || item.publishedDate || "";
  const financialYear = item.financialYear || item.fy || "2025-2026";
  const formattedDate = formatDateDDMMYYYY(noticeDate);

  const handleDownload = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/dgft/pdf-download?noticeNo=${encodeURIComponent(noticeNumber)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${noticeNumber} — ${noticeTitle}`)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm relative hover:shadow-md transition-all duration-200">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setBookmarked((b) => !b)}
          className={`transition-colors ${bookmarked ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}`}
        >
          <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
        </button>
        <button
          onClick={handleShare}
          className={`transition-colors ${copied ? "text-emerald-600" : "text-gray-400 hover:text-blue-600"}`}
        >
          <Share2 size={16} />
        </button>
      </div>

      <div className="flex gap-4">
        <div className="bg-gray-50 p-2 rounded border text-center min-w-[100px]">
          <span className="block text-xs text-gray-500">{formattedDate}</span>
          <span className="block text-xs text-gray-400">{financialYear}</span>
        </div>

        <div className="flex-1">
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
            DGFT
          </span>
          <h3 className="text-lg font-bold mt-2">{noticeNumber}</h3>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            {noticeTitle}
          </p>
          <button
            onClick={handleDownload}
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center mt-3 transition-colors"
          >
            <FileText size={16} className="mr-1" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
    CBIC VIEW — Table View with Amendment History Modal
  ───────────────────────────────────────────── */
function CBICView({
  loading,
  error,
  data,
  search,
  setSearch,
  activeLabel,
  selectedAct,
  setSelectedAct,
  activeFY,
  activeTab,
}) {
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [entries, setEntries] = useState("10");
  const [chapter, setChapter] = useState("");
  const [section, setSection] = useState("");
  const [selectedRule, setSelectedRule] = useState("");
  const [ruleNumber, setRuleNumber] = useState("");
  const [selectedRegulation, setSelectedRegulation] = useState("");
  const [regulationNumber, setRegulationNumber] = useState("");
  const [showAmendmentModal, setShowAmendmentModal] = useState(false);
  const [amendmentHistory, setAmendmentHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [viewType, setViewType] = useState(() => {
    if (activeTab === "acts") return "chapter";
    if (activeTab === "rules") return "ruleNumber";
    if (activeTab === "regulations") return "regulationNumber";
    return "chapter";
  });

  // Reset all filters AND entries count when tab changes
  useEffect(() => {
    setYear("");
    setCategory("");
    setChapter("");
    setSection("");
    setSelectedRule("");
    setRuleNumber("");
    setSelectedRegulation("");
    setRegulationNumber("");
    
    if (activeTab === "acts") {
      setViewType("chapter");
      setEntries("10");
    } else if (activeTab === "rules") {
      setViewType("ruleNumber");
      setEntries("10");
    } else if (activeTab === "regulations") {
      setViewType("regulationNumber");
      setEntries("50");
    }
  }, [activeTab]);

  // Extract unique options from data
  const uniqueActs = [...new Set(data.map((item) => item.act).filter(Boolean))];
  const uniqueChapters = [
    ...new Set(data.map((item) => item.chapter).filter(Boolean)),
  ];
  const uniqueRules = [
    ...new Set(
      data.map((item) => item.ruleName || item.ruleSet).filter(Boolean)
    ),
  ];
  const uniqueRegulations = [
    ...new Set(
      data
        .map((item) => item.regulationName || item.regulationSet)
        .filter(Boolean)
    ),
  ];
  const uniqueCategories = [
    ...new Set(data.map((item) => item.category).filter(Boolean)),
  ];
  const availableYears = [
    ...new Set(data.map((item) => item.year).filter(Boolean)),
  ];

  const getColumns = () => {
    // FORMS
    if (activeTab === "forms") {
      return [
        {
          key: "formNumber",
          label: "Form Number",
          render: (row) => (
            <span className="font-semibold text-[#0d3b6e]">
              {row.formNumber || row.number || "—"}
            </span>
          ),
        },
        {
          key: "formName",
          label: "Form Name",
          render: (row) => row.formName || row.title || "—",
        },
        {
          key: "download",
          label: "Download",
          center: true,
          render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          ),
        },
      ];
    }

    // NOTIFICATIONS
    if (activeTab.includes("notifications")) {
      return [
        {
          key: "number",
          label: "Number",
          render: (row) => (
            <span className="font-semibold text-[#0d3b6e]">
              {row.number || "—"}
            </span>
          ),
        },
        {
          key: "date",
          label: "Date",
          render: (row) => (
            <span className="text-slate-500 whitespace-nowrap">
              {parseDate(row.date)}
            </span>
          ),
        },
        {
          key: "subject",
          label: "Subject",
          render: (row) => row.subject || row.title || "—",
        },
        {
          key: "download",
          label: "Download",
          center: true,
          render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          ),
        },
        {
          key: "history",
          label: "History",
          center: true,
          render: () => (
            <button className="inline-flex items-center gap-1 text-xs text-[#0d3b6e] hover:underline">
              <History size={11} /> History
            </button>
          ),
        },
      ];
    }

    // ACTS - NO DOWNLOAD COLUMN
    if (activeTab === "acts") {
      if (viewType === "chapter") {
        return [
          {
            key: "chapter",
            label: "Chapter",
            render: (row) => row.chapter || "—",
          },
          {
            key: "title",
            label: "Title/Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      } else {
        return [
          {
            key: "section",
            label: "Section",
            render: (row) => row.section || "—",
          },
          {
            key: "title",
            label: "Title/Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      }
    }

    // RULES - NO DOWNLOAD COLUMN
    if (activeTab === "rules") {
      if (viewType === "ruleNumber") {
        return [
          {
            key: "number",
            label: "Rule Number",
            render: (row) => (
              <span className="font-semibold text-[#0d3b6e]">
                {row.number || row.ruleNumber || "—"}
              </span>
            ),
          },
          {
            key: "title",
            label: "Rule Title / Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      } else {
        return [
          {
            key: "chapter",
            label: "Chapter",
            render: (row) => row.chapter || "—",
          },
          {
            key: "title",
            label: "Rule Title / Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      }
    }

    // REGULATIONS - NO DOWNLOAD COLUMN
    if (activeTab === "regulations") {
      if (viewType === "regulationNumber") {
        return [
          {
            key: "number",
            label: "Regulation Number",
            render: (row) => (
              <span className="font-semibold text-[#0d3b6e]">
                {row.number || row.regulationNumber || "—"}
              </span>
            ),
          },
          {
            key: "title",
            label: "Regulation Title / Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      } else {
        return [
          {
            key: "chapter",
            label: "Chapter",
            render: (row) => row.chapter || "—",
          },
          {
            key: "title",
            label: "Regulation Title / Description",
            render: (row) => row.title || row.subject || "—",
          },
        ];
      }
    }

    // Default columns for circulars, instructions, orders, alliedActs (keep download)
    return [
      {
        key: "number",
        label: "Number",
        render: (row) => (
          <span className="font-semibold text-[#0d3b6e]">
            {row.number || "—"}
          </span>
        ),
      },
      {
        key: "date",
        label: "Date",
        render: (row) => (
          <span className="text-slate-500 whitespace-nowrap">
            {parseDate(row.date)}
          </span>
        ),
      },
      {
        key: "subject",
        label: "Subject",
        render: (row) => row.subject || row.title || "—",
      },
      {
        key: "download",
        label: "Download",
        center: true,
        render: () => (
          <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
            <FileText size={11} /> PDF
          </button>
        ),
      },
    ];
  };

  // Filter logic that respects tab-specific filters
  const filteredData = data.filter((item) => {
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        item.title?.toLowerCase().includes(searchLower) ||
        item.subject?.toLowerCase().includes(searchLower) ||
        item.number?.toLowerCase().includes(searchLower) ||
        item.formName?.toLowerCase().includes(searchLower) ||
        item.formNumber?.toLowerCase().includes(searchLower) ||
        item.chapter?.toLowerCase().includes(searchLower) ||
        item.section?.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    if (year && item.year && item.year !== year) return false;
    if (category && item.category && item.category !== category) return false;

    if (activeTab === "acts") {
      if (selectedAct && item.act !== selectedAct) return false;
      if (chapter && item.chapter !== chapter) return false;
      if (section && item.section !== section) return false;
    }

    if (activeTab === "rules") {
      if (
        selectedRule &&
        item.ruleName !== selectedRule &&
        item.ruleSet !== selectedRule
      )
        return false;
      if (chapter && item.chapter !== chapter) return false;
      if (
        ruleNumber &&
        item.ruleNumber !== ruleNumber &&
        item.number !== ruleNumber
      )
        return false;
    }

    if (activeTab === "regulations") {
      if (
        selectedRegulation &&
        item.regulationName !== selectedRegulation &&
        item.regulationSet !== selectedRegulation
      )
        return false;
      if (chapter && item.chapter !== chapter) return false;
      if (
        regulationNumber &&
        item.regulationNumber !== regulationNumber &&
        item.number !== regulationNumber
      )
        return false;
    }

    return true;
  });

  const displayedItems = filteredData.slice(0, parseInt(entries));

  const isActsRulesRegs = ["acts", "rules", "regulations"].includes(activeTab);
  const isNotifications = activeTab.includes("notifications");
  const isForms = activeTab === "forms";
  const isAlliedActs = activeTab === "alliedActs";

  // ---- FIX: "View Complete" section always visible on Acts/Rules/Regulations ----
  let completeLabel = "";
  let selectedDocument = "";
  let showCompleteSection = false;

  if (activeTab === "acts") {
    completeLabel = "Act";
    selectedDocument = selectedAct || (uniqueActs.length > 0 ? uniqueActs[0] : "Customs Act, 1962");
    showCompleteSection = true;
  } else if (activeTab === "rules") {
    completeLabel = "Rule";
    selectedDocument = selectedRule || (uniqueRules.length > 0 ? uniqueRules[0] : "Customs Rules");
    showCompleteSection = true;
  } else if (activeTab === "regulations") {
    completeLabel = "Regulation";
    selectedDocument = selectedRegulation || (uniqueRegulations.length > 0 ? uniqueRegulations[0] : "Customs Regulations");
    showCompleteSection = true;
  }

  // Fetch amendment history from API (only for Acts)
  const fetchAmendmentHistory = useCallback(async (actName) => {
    setLoadingHistory(true);
    try {
      const response = await fetch(
        `${API_BASE}/api/customs/amendment-history?act=${encodeURIComponent(actName)}`
        // `http://localhost:5000/api/customs/amendment-history?act=${encodeURIComponent(actName)}`
      );
      const result = await response.json();
      if (result.success) {
        setAmendmentHistory(result.data);
      } else {
        console.error("Failed to fetch amendment history");
        setAmendmentHistory([]);
      }
    } catch (err) {
      console.error("Error fetching amendment history:", err);
      setAmendmentHistory([]);
    } finally {
      setLoadingHistory(false);
    }
  }, []);

  const handleAmendmentHistory = async () => {
    if (activeTab === "acts" && selectedDocument) {
      await fetchAmendmentHistory(selectedDocument);
      setShowAmendmentModal(true);
    } else if (activeTab === "rules" && selectedDocument) {
      alert("Amendment history for Rules is not yet implemented.");
    } else if (activeTab === "regulations" && selectedDocument) {
      alert("Amendment history for Regulations is not yet implemented.");
    } else {
      alert("Please select a document first.");
    }
  };

  return (
    <div className="bg-white border border-slate-300 rounded-xl shadow-sm overflow-hidden w-full p-6">
      <div
        className="px-5 pt-4 pb-0"
        style={{ borderBottom: `2px solid ${cbic.accentGold}` }}
      >
        <div className="mb-3">
          <p className="text-xs text-slate-500">
            <span className="text-[#3b82f6] font-medium">{activeLabel}</span>
          </p>
          {selectedDocument && (
            <h2 className="text-xl font-bold text-slate-800 mt-2">
              {selectedDocument}
            </h2>
          )}
          {/* Always visible "View Complete" section for Acts/Rules/Regulations */}
          {showCompleteSection && (
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4 flex-wrap">
              <span className="font-medium">View Complete {completeLabel}:</span>
              <button
                onClick={() => {
                  // Replace with actual PDF download logic
                  console.log(`Download PDF for ${completeLabel}: ${selectedDocument}`);
                  // window.open(`/api/pdf?doc=${encodeURIComponent(selectedDocument)}`)
                }}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                PDF
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => {
                  console.log(`Open HTML for ${completeLabel}: ${selectedDocument}`);
                  // window.open(`/api/html?doc=${encodeURIComponent(selectedDocument)}`)
                }}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                HTML
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={handleAmendmentHistory}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                Amendment History
              </button>
              {/* {activeTab === "acts" && !selectedAct && uniqueActs.length > 0 && (
                // <span className="text-xs text-amber-600 ml-2">
                //   (Showing default Act – use dropdown to change)
                // </span>
              )} */}
              {activeTab === "rules" && !selectedRule && uniqueRules.length > 0 && (
                <span className="text-xs text-amber-600 ml-2">
                  (Showing default Rule – use dropdown to change)
                </span>
              )}
              {activeTab === "regulations" && !selectedRegulation && uniqueRegulations.length > 0 && (
                <span className="text-xs text-amber-600 ml-2">
                  (Showing default Regulation – use dropdown to change)
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Acts/Rules/Regulations Filter - Dynamic based on activeTab */}
        {isActsRulesRegs && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              {activeTab === "acts" && (
                <>
                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Act
                    </span>
                    <select
                      value={selectedAct}
                      onChange={(e) => setSelectedAct(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-2 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                    >
                      <option value="">All Acts</option>
                      {uniqueActs.map((act) => (
                        <option key={act} value={act}>
                          {act}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Chapter
                    </span>
                    <select
                      value={chapter}
                      onChange={(e) => setChapter(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                    >
                      <option value="">All Chapters</option>
                      {uniqueChapters.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Enter Section..."
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      className="w-full border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </>
              )}

              {activeTab === "rules" && (
                <>
                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Category
                    </span>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                    >
                      <option value="">All</option>
                      {uniqueCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Rule
                    </span>
                    <select
                      value={selectedRule}
                      onChange={(e) => setSelectedRule(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[200px]"
                    >
                      <option value="">All Rules</option>
                      {uniqueRules.map((rule) => (
                        <option key={rule} value={rule}>
                          {rule}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Enter Rule Number..."
                      value={ruleNumber}
                      onChange={(e) => setRuleNumber(e.target.value)}
                      className="w-full border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </>
              )}

              {activeTab === "regulations" && (
                <>
                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Category
                    </span>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                    >
                      <option value="">All</option>
                      {uniqueCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-stretch">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                      Select Regulation
                    </span>
                    <select
                      value={selectedRegulation}
                      onChange={(e) => setSelectedRegulation(e.target.value)}
                      className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[200px]"
                    >
                      <option value="">All Regulations</option>
                      {uniqueRegulations.map((reg) => (
                        <option key={reg} value={reg}>
                          {reg}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Enter Regulation Number..."
                      value={regulationNumber}
                      onChange={(e) => setRegulationNumber(e.target.value)}
                      className="w-full border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </>
              )}

              {/* Keyword search - common for all */}
              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button
                  onClick={() => {}}
                  className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Search size={15} />
                </button>
              </div>
            </div>

            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all {activeLabel}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Filter */}
        {isNotifications && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Category
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                >
                  <option value="">All</option>
                  {uniqueCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[120px]"
                >
                  <option value="">Select Year</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all Notifications
              </button>
              <p className="text-[10px] text-slate-400 mt-1">
                *Amendment history is shown only for certain notifications
              </p>
            </div>
          </div>
        )}

        {/* Circulars Filter */}
        {activeTab === "circulars" && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[120px]"
                >
                  <option value="">Select Year</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all Circulars
              </button>
            </div>
          </div>
        )}

        {/* Instructions & Orders Filter */}
        {(activeTab === "instructions" || activeTab === "orders") && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Category
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                >
                  <option value="">Select Category</option>
                  {uniqueCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[120px]"
                >
                  <option value="">Select Year</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all{" "}
                {activeTab === "instructions"
                  ? "Instructions / Guidelines"
                  : "Orders"}
              </button>
            </div>
          </div>
        )}

        {/* Forms Filter */}
        {isForms && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Forms Category
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[150px]"
                >
                  <option value="">Forms -</option>
                  {uniqueCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 max-w-xs">
                <input
                  type="text"
                  placeholder="Enter Form Number"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all Forms
              </button>
            </div>
          </div>
        )}

        {/* Allied Acts Filter */}
        {isAlliedActs && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-stretch">
                <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md shadow-lg">
                  Select Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 min-w-[120px]"
                >
                  <option value="">Select Year</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-stretch flex-1 max-w-sm">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border border-r-0 border-slate-300 rounded-l-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-r-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-xs text-[#0d3b6e] hover:underline">
                <span className="underline font-semibold">Click here</span> to
                search across all Allied Acts
              </button>
            </div>
          </div>
        )}

        {/* Entries and View By row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          {/* "show entries" dropdown - always visible for Regulations tab, otherwise when data > 10 */}
          {(activeTab === "regulations" || filteredData.length > 10) && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>show</span>
              <select
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                {["10", "25", "50", "100"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
              <span>entries</span>
            </div>
          )}

          {["acts", "rules", "regulations"].includes(activeTab) && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600">View By</span>
              {activeTab === "acts" && (
                <>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="actsViewType"
                      value="chapter"
                      checked={viewType === "chapter"}
                      onChange={() => setViewType("chapter")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Chapter</span>
                  </label>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="actsViewType"
                      value="section"
                      checked={viewType === "section"}
                      onChange={() => setViewType("section")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Section</span>
                  </label>
                </>
              )}
              {activeTab === "rules" && (
                <>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="rulesViewType"
                      value="chapter"
                      checked={viewType === "chapter"}
                      onChange={() => setViewType("chapter")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Chapter</span>
                  </label>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="rulesViewType"
                      value="ruleNumber"
                      checked={viewType === "ruleNumber"}
                      onChange={() => setViewType("ruleNumber")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Rule</span>
                  </label>
                </>
              )}
              
              {activeTab === "regulations" && (
                <>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="regViewType"
                      value="chapter"
                      checked={viewType === "chapter"}
                      onChange={() => setViewType("chapter")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Chapter</span>
                  </label>
                  <label className="flex items-center gap-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="regViewType"
                      value="regulationNumber"
                      checked={viewType === "regulationNumber"}
                      onChange={() => setViewType("regulationNumber")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Regulation</span>
                  </label>
                </>
              )}
            </div>
          )}
        </div>

        {loading && <LoadingSkeleton />}
        {!loading && error && <ErrorState message={error} />}
        {!loading && !error && displayedItems.length === 0 && <CBICEmptyState />}
        {!loading && !error && displayedItems.length > 0 && (
          <TableView items={displayedItems} columns={getColumns()} />
        )}
      </div>

      {/* Amendment History Modal */}
      {showAmendmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">
                Amendment History of {selectedDocument}
              </h3>
              <button
                onClick={() => setShowAmendmentModal(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {loadingHistory ? (
                <div className="text-center py-8">Loading amendment history...</div>
              ) : amendmentHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  No amendment history found.
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-200">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">
                            Amendment Date
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">
                            PDF
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">
                            HTML
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {amendmentHistory.map((item, idx) => (
                          <tr key={idx} className="border-t border-slate-100">
                            <td className="px-4 py-2 text-sm text-slate-700">
                              {item.date}
                            </td>
                            <td className="px-4 py-2">
                              <a
                                href={item.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                              >
                                View
                              </a>
                            </td>
                            <td className="px-4 py-2">
                              <a
                                href={item.htmlUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">
                    Please note that Amendment History is available from 2021 Onwards.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
    SHARED COMPONENTS
  ───────────────────────────────────────────── */
function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-slate-200 overflow-hidden animate-pulse"
        >
          <div className="p-5">
            <div className="flex justify-between mb-3">
              <div className="h-4 w-24 bg-slate-200 rounded"></div>
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
            </div>
            <div className="mb-4">
              <div className="h-6 w-48 bg-slate-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-slate-200 rounded"></div>
            </div>
            <div className="flex justify-between items-center pt-3">
              <div className="h-8 w-28 bg-slate-200 rounded"></div>
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-slate-200 rounded"></div>
                <div className="h-8 w-8 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 py-16 text-center">
      <FileText size={36} className="text-slate-300 mx-auto mb-3" />
      <p className="text-slate-500 font-medium text-sm">No records found</p>
      <p className="text-slate-400 text-xs mt-1">
        Try adjusting your search or selecting a different category
      </p>
    </div>
  );
}

function CBICEmptyState() {
  return (
    <div className="py-14 text-center">
      <FileText size={32} className="text-slate-300 mx-auto mb-3" />
      <p className="text-slate-500 text-sm font-medium">No records found</p>
      <p className="text-slate-400 text-xs mt-1">
        Try a different search or select another category
      </p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-red-700">
          Failed to load data
        </p>
        <p className="text-xs text-red-500 mt-0.5">{message}</p>
      </div>
    </div>
  );
}

function AuthBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors
          ${active ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
    >
      {children}
    </button>
  );
}
