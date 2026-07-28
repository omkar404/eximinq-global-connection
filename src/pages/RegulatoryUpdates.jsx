import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Bookmark,
  ChevronDown,
  ChevronRight,
  FileText,
  Search,
  Share2,
} from "lucide-react";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";
import { fetchRegulatoryData, SNAPSHOT_EVENT } from "../features/regulatory-updates/api/requests";
import { CBIC_NAV } from "../features/regulatory-updates/config/cbic";
import { DGFT_DEFAULT_TAB, DGFT_FTP_TABS, DGFT_NAV } from "../features/regulatory-updates/config/dgft";
import { FINANCIAL_YEARS } from "../features/regulatory-updates/config/financialYears";
import { GST_NAV } from "../features/regulatory-updates/config/gst";
import GstActsExplorer from "../features/regulatory-updates/components/GstActsExplorer";
import GstRulesExplorer from "../features/regulatory-updates/components/GstRulesExplorer";
import { AUTHORITY_META, PARENT_ONLY_KEYS } from "../features/regulatory-updates/config/shared";
import { getRegulatoryApiBase } from "../features/regulatory-updates/utils/apiBase";
import {
  deriveFinancialYearFromDate,
  formatDateDDMMYYYY,
  normalizeFinancialYear,
  parseDisplayDate,
} from "../features/regulatory-updates/utils/format";

const API_BASE = getRegulatoryApiBase();

const CBIC_STYLE = {
  headerBg: "#0946ecde",
  accent: "#2563eb",
};

const PAGE_SIZE_OPTIONS = ["10", "25", "50", "100"];
const CBIC_YEAR_OPTIONS = ["2024", "2025", "2026"];

function getInitialSnapshot() {
  if (typeof window === "undefined") return null;
  return window.__REGULATORY_UPDATES_PRERENDER__ || null;
}

function getNavForAuthority(authority) {
  if (authority === "dgft") return DGFT_NAV;
  if (authority === "gst") return GST_NAV;
  return CBIC_NAV;
}

function getDefaultTab(authority) {
  return AUTHORITY_META[authority]?.defaultTab || DGFT_DEFAULT_TAB;
}

function buildLabel(authority, label) {
  return `${AUTHORITY_META[authority].label} > ${label}`;
}

function getDefaultOpenGroups(authority, activeTab) {
  const groups = new Set([activeTab]);

  if (authority === "dgft") {
    groups.add("ftp");
    groups.add("ftp-scomet");
    groups.add("ftp-rodtep");
  }

  if (authority === "customs") {
    groups.add("notifications");
    groups.add("orders");
    groups.add("forms");
  }

  if (authority === "gst") {
    groups.add("notifications");
    groups.add("forms");
  }

  return groups;
}

function getFinancialYearForItem(item) {
  const explicit = normalizeFinancialYear(item.financialYear || item.fy);
  if (explicit) return explicit;
  return deriveFinancialYearFromDate(item.date || item.issueDate || item.publishedDate);
}

function matchesFinancialYear(item, activeFY) {
  if (!activeFY) return true;
  const itemFY = getFinancialYearForItem(item);
  if (itemFY) return itemFY === activeFY;

  if (item.year) {
    const startYear = activeFY.split("-")[0];
    return String(item.year) === startYear;
  }

  return true;
}

function itemMatchesSearch(item, search) {
  if (!search) return true;
  const q = search.toLowerCase();
  return [
    item.act,
    item.noticeNo,
    item.number,
    item.circularNo,
    item.orderNumber,
    item.title,
    item.subject,
    item.description,
    item.name,
    item.srNo,
    item.category,
    item.folderCategory,
    item.formName,
    item.formNumber,
    item.chapter,
    item.section,
    item.ruleNumber,
    item.ruleName,
    item.ruleSet,
    item.regulationNo,
    item.regulationNumber,
    item.regulationName,
  ]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(q));
}

function getAvailableFinancialYears(items) {
  const present = new Set(
    items
      .map((item) => getFinancialYearForItem(item))
      .filter(Boolean)
  );

  return FINANCIAL_YEARS.filter((financialYear) => present.has(financialYear));
}

function normalizeLabel(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function openExternal(url) {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}

function TableView({ items, columns, sortConfig, onSort }) {
  const getSortIndicator = (column) => {
    if (!onSort || column.sortable === false) return null;
    if (sortConfig?.key !== column.key) return <span className="ml-1 text-white/50">↕</span>;
    return <span className="ml-1">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>;
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr style={{ backgroundColor: CBIC_STYLE.headerBg }}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 ${column.center ? "text-center" : "text-left"}`}
              >
                {onSort && column.sortable !== false ? (
                  <button
                    type="button"
                    onClick={() => onSort(column.key)}
                    className={`inline-flex items-center gap-1 ${column.center ? "justify-center" : "justify-start"} w-full`}
                  >
                    <span>{column.label}</span>
                    {getSortIndicator(column)}
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-sm text-slate-400">
                No records found.
              </td>
            </tr>
          ) : (
            items.map((row, index) => (
              <tr key={row.id || index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                {columns.map((column) => (
                  <td key={column.key} className={`px-6 py-4 text-sm ${column.center ? "text-center" : ""}`}>
                    {column.render ? column.render(row) : row[column.key] || "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function getPaginationMeta(totalItems, currentPage, pageSize) {
  const safePageSize = Math.max(1, Number(pageSize) || 10);
  const totalPages = Math.max(1, Math.ceil(totalItems / safePageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = totalItems === 0 ? 0 : (safePage - 1) * safePageSize;
  const endIndex = Math.min(startIndex + safePageSize, totalItems);

  return {
    currentPage: safePage,
    totalPages,
    startIndex,
    endIndex,
    pageItemsLabel:
      totalItems === 0 ? "0-0" : `${startIndex + 1}-${endIndex}`,
  };
}

function PaginationControls({ totalItems, currentPage, pageSize, onPageChange, compact = false }) {
  const { totalPages, pageItemsLabel } = getPaginationMeta(totalItems, currentPage, pageSize);

  if (totalItems <= Number(pageSize)) return null;

  const pageNumbers = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let page = startPage; page <= endPage; page += 1) {
    pageNumbers.push(page);
  }

  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 ${compact ? "mt-4" : "mt-6"}`}>
      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-700">{pageItemsLabel}</span> of{" "}
        <span className="font-semibold text-slate-700">{totalItems}</span>
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1.5 rounded-md border border-slate-300 text-sm text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-400 hover:text-blue-600"
        >
          Prev
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`min-w-9 px-3 py-1.5 rounded-md border text-sm ${
              page === currentPage
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 rounded-md border border-slate-300 text-sm text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-400 hover:text-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function SidebarNavItem({
  item,
  activeAuthority,
  activeTab,
  openGroups,
  setOpenGroups,
  onNavigate,
}) {
  const isParent = Array.isArray(item.children) && item.children.length > 0;
  const isOpen = openGroups.has(item.key);
  const isActive = activeTab === item.key;

  const toggleGroup = () => {
    setOpenGroups((previous) => {
      const next = new Set(previous);
      if (next.has(item.key)) next.delete(item.key);
      else next.add(item.key);
      return next;
    });
  };

  const handleClick = () => {
    if (PARENT_ONLY_KEYS.has(item.key)) {
      toggleGroup();
      return;
    }

    if (isParent) toggleGroup();
    onNavigate(item.key, buildLabel(activeAuthority, item.label));
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full px-5 py-3 flex items-center justify-between text-left transition-colors ${
          isActive ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-slate-700 hover:bg-slate-50"
        }`}
      >
        <span className="font-medium">{item.label}</span>
        {isParent && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </button>

      {isParent && isOpen && (
        <div className="bg-slate-50/60">
          {item.children.map((child) => {
            const childHasChildren = Array.isArray(child.children) && child.children.length > 0;
            const isChildGroupOpen =
              childHasChildren &&
              (openGroups.has(child.key) || child.children.some((grandchild) => grandchild.key === activeTab));

            const handleChildClick = () => {
              if (!childHasChildren) {
                onNavigate(child.key, buildLabel(activeAuthority, child.label));
                return;
              }

              setOpenGroups((previous) => {
                const next = new Set(previous);
                next.add(item.key);
                next.add(child.key);
                return next;
              });
              onNavigate(child.children[0].key, buildLabel(activeAuthority, child.children[0].label));
            };

            return (
              <div key={child.key}>
                <button
                  onClick={handleChildClick}
                  className={`w-full px-8 py-3 text-left text-[15px] transition-colors flex items-center justify-between ${
                    activeTab === child.key || isChildGroupOpen
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span>{child.label}</span>
                  {childHasChildren && (isChildGroupOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />)}
                </button>
                {childHasChildren && isChildGroupOpen && (
                  <div className="bg-white/60">
                    {child.children.map((grandchild) => (
                      <button
                        key={grandchild.key}
                        onClick={() => onNavigate(grandchild.key, buildLabel(activeAuthority, grandchild.label))}
                        className={`w-full px-12 py-2.5 text-left text-sm transition-colors ${
                          activeTab === grandchild.key ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        {grandchild.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DGFTCard({ item }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const noticeNumber = item.noticeNo || item.number || "-";
  const noticeTitle = item.title || item.subject || "No title available";
  const noticeDate = item.date || item.issueDate || item.publishedDate || "";
  const financialYear = getFinancialYearForItem(item) || "Current FY";

  const handleShare = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(`${noticeNumber} - ${noticeTitle}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm relative hover:shadow-md transition-all duration-200">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setBookmarked((value) => !value)}
          className={bookmarked ? "text-blue-600" : "text-slate-400 hover:text-blue-600"}
        >
          <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
        </button>
        <button onClick={handleShare} className={copied ? "text-emerald-600" : "text-slate-400 hover:text-blue-600"}>
          <Share2 size={16} />
        </button>
      </div>

      <div className="flex gap-4">
        <div className="bg-slate-50 p-2 rounded border text-center min-w-[108px]">
          <span className="block text-xs text-slate-500">{formatDateDDMMYYYY(noticeDate)}</span>
          <span className="block text-xs text-slate-400">{financialYear}</span>
        </div>
        <div className="flex-1">
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">DGFT</span>
          <h3 className="text-lg font-bold mt-2">{noticeNumber}</h3>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{noticeTitle}</p>
          <button
            onClick={() => openExternal(`${API_BASE}/api/dgft/pdf-download?noticeNo=${encodeURIComponent(noticeNumber)}`)}
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center mt-3"
          >
            <FileText size={16} className="mr-1" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function DGFTView({ loading, error, data, search, setSearch, activeLabel, activeFY }) {
  const [pageSize, setPageSize] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const { startIndex, endIndex, totalPages } = getPaginationMeta(data.length, currentPage, pageSize);
  const paginatedData = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeLabel, activeFY]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  return (
    <div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-4 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Search size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Search by notice number, title or subject..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={pageSize}
            onChange={(event) => setPageSize(event.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-600 bg-white focus:outline-none"
          >
            {PAGE_SIZE_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value} / page
              </option>
            ))}
          </select>
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {loading ? "Loading..." : `${data.length} result${data.length !== 1 ? "s" : ""}`}
          </span>
        </div>
        <div className="px-4 py-2 bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-medium text-blue-700">{activeLabel}</span>
          <span className="text-xs text-slate-400">{activeFY}</span>
        </div>
      </div>

      {loading && <LoadingSkeleton />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && data.length === 0 && <EmptyState />}
      {!loading && !error && data.length > 0 && (
        <>
          <div className="space-y-3">
            {paginatedData.map((item, index) => (
              <DGFTCard key={item.id || `${currentPage}-${index}`} item={item} />
            ))}
          </div>
          <PaginationControls
            totalItems={data.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

function FTPView({ loading, error, data, search, setSearch, activeLabel, activeFY, activeTab }) {
  const [pageSize, setPageSize] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [anfSection, setAnfSection] = useState("anf");

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeLabel, activeFY]);

  const isAnfTab = activeTab === "ftp-anf";
  const filteredData = isAnfTab ? data.filter((row) => row.sectionKey === anfSection) : data;
  const { startIndex, endIndex, totalPages } = getPaginationMeta(filteredData.length, currentPage, pageSize);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    if (activeTab !== "ftp-anf") {
      setAnfSection("anf");
    }
  }, [activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [anfSection]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const renderPdfButtons = (row) => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {row.pdfFiles?.length ? (
        row.pdfFiles.map((pdf) => (
          <button
            key={`${row.id}-${pdf.fileName}`}
            onClick={() =>
              openExternal(
                `${API_BASE}/api/ftp/pdf-download?category=${encodeURIComponent(
                  pdf.category
                )}&file=${encodeURIComponent(pdf.fileName)}`
              )
            }
            className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded"
          >
            <FileText size={11} />
            {row.pdfFiles.length > 1 ? pdf.fileName.replace(/\.pdf$/i, "") : "PDF"}
          </button>
        ))
      ) : (
        <span className="text-xs text-slate-300">N/A</span>
      )}
    </div>
  );

  const columns = isAnfTab
    ? [
        {
          key: "category",
          label: "Type",
          render: (row) => (
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {row.sectionKey === "appendices" ? "Appendix" : "ANF"}
            </span>
          ),
        },
        {
          key: "srNo",
          label: "Sr. No.",
          render: (row) => <span className="font-semibold text-slate-600">{row.srNo || "-"}</span>,
        },
        {
          key: "name",
          label: "Form / Name",
          render: (row) =>
            row.pdfAvailable && row.pdfFiles?.length ? (
              <button
                onClick={() =>
                  openExternal(
                    `${API_BASE}/api/ftp/pdf-download?category=${encodeURIComponent(
                      row.pdfFiles[0].category
                    )}&file=${encodeURIComponent(row.pdfFiles[0].fileName)}`
                  )
                }
                className="font-medium text-[#0d3b6e] hover:text-blue-700 hover:underline text-left"
              >
                {row.name || "-"}
              </button>
            ) : (
              <span className="font-medium text-[#0d3b6e]">{row.name || "-"}</span>
            ),
        },
        {
          key: "description",
          label: "Description",
          render: (row) => row.description || row.title || "-",
        },
        {
          key: "download",
          label: "Download",
          center: true,
          render: renderPdfButtons,
        },
      ]
    : [
        {
          key: "srNo",
          label: "Sr. No.",
          render: (row) => <span className="font-semibold text-slate-600">{row.srNo || "-"}</span>,
        },
        {
          key: "description",
          label: "Description",
          render: (row) =>
            row.pdfAvailable && row.pdfFiles?.length ? (
              <button
                onClick={() =>
                  openExternal(
                    `${API_BASE}/api/ftp/pdf-download?category=${encodeURIComponent(
                      row.pdfFiles[0].category
                    )}&file=${encodeURIComponent(row.pdfFiles[0].fileName)}`
                  )
                }
                className="font-medium text-[#0d3b6e] hover:text-blue-700 hover:underline text-left"
              >
                {row.description || row.title || "-"}
              </button>
            ) : (
              row.description || row.title || "-"
            ),
        },
        {
          key: "download",
          label: "Download",
          center: true,
          render: renderPdfButtons,
        },
      ];

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-md overflow-hidden w-full">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm font-semibold text-blue-700">{activeLabel}</span>
        <span className="text-xs text-slate-400">{activeFY}</span>
      </div>

      <div className="px-6 py-4 border-b border-slate-100">
        {isAnfTab && (
          <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => setAnfSection("anf")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                anfSection === "anf" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-white"
              }`}
            >
              ANF Forms
            </button>
            <button
              onClick={() => setAnfSection("appendices")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                anfSection === "appendices"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              Appendices
            </button>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-stretch max-w-md">
            <input
              type="text"
              placeholder="Search by Sr. No., name or description..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 border border-r-0 border-slate-300 rounded-l-xl text-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="flex items-center justify-center px-4 py-3 text-white bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 rounded-r-xl shadow-sm">
              <Search size={19} strokeWidth={2.5} />
            </span>
          </div>

          <select
            value={pageSize}
            onChange={(event) => setPageSize(event.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-600 bg-white focus:outline-none"
          >
            {PAGE_SIZE_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value} / page
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          {loading ? "Loading..." : `${filteredData.length} record${filteredData.length !== 1 ? "s" : ""} found`}
        </p>
      </div>

      <div className="p-6">
        {loading && <LoadingSkeleton />}
        {!loading && error && <ErrorState message={error} />}
        {!loading && !error && filteredData.length === 0 && <CBICEmptyState />}
        {!loading && !error && filteredData.length > 0 && (
          <>
            <TableView items={paginatedData} columns={columns} />
            <PaginationControls
              totalItems={filteredData.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
              compact
            />
          </>
        )}
      </div>
    </div>
  );
}

function DocumentAction({ label, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`hover:underline ${disabled ? "text-slate-300 cursor-not-allowed" : "text-blue-600"}`}
    >
      {label}
    </button>
  );
}

function CBICView({
  authority,
  loading,
  error,
  data,
  search,
  setSearch,
  activeLabel,
  activeFY,
  activeTab,
  selectedAct,
  setSelectedAct,
}) {
  const [year, setYear] = useState("");
  const [entries, setEntries] = useState("10");
  const [chapter, setChapter] = useState("");
  const [section, setSection] = useState("");
  const [selectedRule, setSelectedRule] = useState("");
  const [ruleNumber, setRuleNumber] = useState("");
  const [showAmendmentModal, setShowAmendmentModal] = useState(false);
  const [amendmentHistory, setAmendmentHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [viewType, setViewType] = useState(activeTab === "rules" ? "ruleNumber" : "chapter");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  useEffect(() => {
    setYear("");
    setEntries(activeTab === "regulations" ? "50" : "10");
    setChapter("");
    setSection("");
    setSelectedRule("");
    setRuleNumber("");
    setViewType(activeTab === "acts" ? "chapter" : activeTab === "rules" ? "ruleNumber" : "chapter");
    setCurrentPage(1);
    setSortConfig({ key: "", direction: "asc" });
  }, [activeTab]);

  const uniqueActs = [...new Set(data.map((item) => item.act).filter(Boolean))];
  const uniqueChapters = [...new Set(data.map((item) => item.chapter).filter(Boolean))];
  const uniqueRules = Array.from(
    new Map(
      data
        .map((item) => item.ruleName || item.ruleSet)
        .filter(Boolean)
        .map((label) => [normalizeLabel(label), String(label).replace(/\s+/g, " ").trim()])
    ).values()
  );
  const availableYears = [...new Set(data.map((item) => item.year).filter(Boolean))];

  const filteredData = data.filter((item) => {
    if (!itemMatchesSearch(item, search)) return false;
    if (year && item.year && String(item.year) !== year) return false;

    if (activeTab === "acts") {
      if (selectedAct && item.act !== selectedAct) return false;
      if (chapter && item.chapter !== chapter) return false;
      if (section && !String(item.section || "").toLowerCase().includes(section.toLowerCase())) return false;
    }

    if (activeTab === "rules") {
      if (
        selectedRule &&
        normalizeLabel(item.ruleName) !== normalizeLabel(selectedRule) &&
        normalizeLabel(item.ruleSet) !== normalizeLabel(selectedRule)
      ) {
        return false;
      }
      if (ruleNumber && !String(item.ruleNumber || item.number || "").toLowerCase().includes(ruleNumber.toLowerCase())) {
        return false;
      }
    }

    return true;
  });

  const getColumnSortValue = (item, key) => {
    const fieldMap = {
      download: "pdfFileName",
      orderNumber: "orderNumber",
      orderDate: "orderDate",
      circularNo: "circularNo",
      formNumber: "formNumber",
      formName: "formName",
      ruleNumber: "ruleNumber",
      regulationNo: "regulationNo",
    };
    const mappedKey = fieldMap[key] || key;
    return item[mappedKey] || item.number || item.title || item.subject || item.description || "";
  };

  const getSortableDateValue = (value) => {
    const displayValue = parseDisplayDate(value);
    const ddmmyyyy = String(displayValue || "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (ddmmyyyy) {
      const [, day, month, yearValue] = ddmmyyyy;
      return Date.UTC(Number(yearValue), Number(month) - 1, Number(day));
    }

    const parsed = Date.parse(displayValue);
    return Number.isNaN(parsed) ? null : parsed;
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = getColumnSortValue(a, sortConfig.key);
    const bValue = getColumnSortValue(b, sortConfig.key);
    const aDate = getSortableDateValue(aValue);
    const bDate = getSortableDateValue(bValue);

    let comparison;
    if (aDate !== null && bDate !== null) {
      comparison = aDate - bDate;
    } else {
      comparison = String(aValue).localeCompare(String(bValue), undefined, {
        numeric: true,
        sensitivity: "base",
      });
    }

    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  const handleSort = (key) => {
    setSortConfig((previous) => ({
      key,
      direction: previous.key === key && previous.direction === "asc" ? "desc" : "asc",
    }));
  };

  const { startIndex, endIndex, totalPages } = getPaginationMeta(sortedData.length, currentPage, entries);
  const displayedItems = sortedData.slice(startIndex, endIndex);
  const isActs = activeTab === "acts";
  const isRules = activeTab === "rules";
  const isForms = activeTab === "forms" || activeTab.startsWith("forms-");
  const isCirculars = activeTab === "circulars" || activeTab.startsWith("circulars-");
  const isInstructions = activeTab === "instructions";
  const isOrders = activeTab === "orders" || activeTab.startsWith("orders-");
  const isRegulations = activeTab === "regulations";
  const isNotifications = activeTab.includes("notifications");
  const isSearchOnlySection = isForms || isCirculars || isInstructions || isOrders || activeTab === "alliedActs" || isRegulations;
  const showCbicYearDropdown =
    authority === "customs" && (isNotifications || isCirculars || isForms || isInstructions || isOrders);

  let selectedDocument = "";
  if (isActs) selectedDocument = selectedAct || uniqueActs[0] || "";
  else if (isRules) selectedDocument = selectedRule || uniqueRules[0] || "";

  const selectedDocumentRecord = data.find((item) => {
    if (isActs) return item.act === selectedDocument && item.pdfUrl;
    if (isRules) {
      return (
        (normalizeLabel(item.ruleName) === normalizeLabel(selectedDocument) ||
          normalizeLabel(item.ruleSet) === normalizeLabel(selectedDocument)) &&
        item.pdfUrl
      );
    }
    return false;
  }) || data.find((item) => {
    if (isActs) return item.act === selectedDocument;
    if (isRules) {
      return (
        normalizeLabel(item.ruleName) === normalizeLabel(selectedDocument) ||
        normalizeLabel(item.ruleSet) === normalizeLabel(selectedDocument)
      );
    }
    return false;
  });

  const completePdfUrl = selectedDocumentRecord?.pdfUrl || null;
  const completePdfLabel = selectedDocumentRecord?.pdfFileName || "PDF";
  const completeHtmlUrl = selectedDocumentRecord?.htmlUrl || null;

  const fetchAmendmentHistory = useCallback(async () => {
    if (!selectedDocument) return;
    setLoadingHistory(true);
    try {
      const endpoint = `${API_BASE}/api/${authority === "gst" ? "gst" : "customs"}/amendment-history?act=${encodeURIComponent(selectedDocument)}`;
      const response = await fetch(endpoint);
      const result = await response.json();
      setAmendmentHistory(result.success && Array.isArray(result.data) ? result.data : []);
    } catch (_error) {
      setAmendmentHistory([]);
    } finally {
      setLoadingHistory(false);
    }
  }, [authority, selectedDocument]);

  const openAmendmentHistory = async () => {
    await fetchAmendmentHistory();
    setShowAmendmentModal(true);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search, year, selectedAct, chapter, section, selectedRule, ruleNumber, viewType]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const columns = (() => {
    if (isForms) {
      return [
        ...(activeTab === "forms"
          ? [
              {
                key: "category",
                label: "Category",
                render: (row) => row.category || "-",
              },
            ]
          : []),
        {
          key: "formNumber",
          label: "Form Number",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.formNumber || row.number || "-"}</span>,
        },
        { key: "formName", label: "Form Name", render: (row) => row.formName || row.title || "-" },
        {
          key: "download",
          label: "Download",
          center: true,
          render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
        },
      ];
    }

    if (isNotifications) {
      return [
        {
          key: "number",
          label: "Number",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || "-"}</span>,
        },
        { key: "date", label: "Date", render: (row) => <span className="text-slate-500">{parseDisplayDate(row.date)}</span> },
        { key: "subject", label: "Subject", render: (row) => row.subject || row.title || "-" },
        {
          key: "download",
          label: "Download",
          center: true,
          render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
        },
      ];
    }

    if (isCirculars) {
      return [
        {
          key: "circularNo",
          label: "Circular No.",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.circularNo || row.number || "-"}</span>,
        },
        { key: "date", label: "Date", render: (row) => <span className="text-slate-500">{parseDisplayDate(row.date)}</span> },
        { key: "subject", label: "Subject", render: (row) => row.subject || row.title || "-" },
        {
          key: "download",
          label: "Download",
          center: true,
          render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
        },
      ];
    }

    if (isInstructions) {
      return [
        {
          key: "number",
          label: "Instruction No.",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || "-"}</span>,
        },
        { key: "date", label: "Date", render: (row) => <span className="text-slate-500">{parseDisplayDate(row.date)}</span> },
        { key: "subject", label: "Subject", render: (row) => row.subject || row.title || row.description || "-" },
        {
          key: "download",
          label: "Download",
          center: true,
          render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
        },
      ];
    }

    if (isOrders) {
      return [
        ...(activeTab === "orders"
          ? [
              {
                key: "category",
                label: "Category",
                render: (row) => row.category || "-",
              },
            ]
          : []),
        {
          key: "orderNumber",
          label: "Order No.",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.orderNumber || row.number || "-"}</span>,
        },
        { key: "orderDate", label: "Date", render: (row) => <span className="text-slate-500">{parseDisplayDate(row.orderDate || row.date)}</span> },
        { key: "subject", label: "Subject", render: (row) => row.subject || row.title || row.description || "-" },
        {
          key: "download",
          label: "Download",
          center: true,
          render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
        },
      ];
    }

    if (isRegulations) {
      return [
        {
          key: "regulationNo",
          label: "Regulation",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.regulationNo || row.number || "-"}</span>,
        },
        { key: "title", label: "Title / Description", render: (row) => row.title || row.description || "-" },
      ];
    }

    if (isActs) {
      if (viewType === "section") {
        return [
          { key: "section", label: "Section", render: (row) => row.section || "-" },
          { key: "title", label: "Title / Description", render: (row) => row.title || row.description || "-" },
        ];
      }

      return [
        { key: "chapter", label: "Chapter", render: (row) => row.chapter || "-" },
        { key: "title", label: "Title / Description", render: (row) => row.title || row.description || "-" },
      ];
    }

    if (isRules) {
      if (viewType === "chapter") {
        return [
          { key: "chapter", label: "Chapter", render: (row) => row.chapter || "-" },
          { key: "title", label: "Rule Title / Description", render: (row) => row.title || row.description || "-" },
        ];
      }

      return [
        {
          key: "ruleNumber",
          label: "Rule Number",
          render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.ruleNumber || row.number || "-"}</span>,
        },
        { key: "title", label: "Rule Title / Description", render: (row) => row.title || row.description || "-" },
      ];
    }

    return [
      {
        key: "number",
        label: "Number",
        render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || "-"}</span>,
      },
      { key: "date", label: "Date", render: (row) => <span className="text-slate-500">{parseDisplayDate(row.date)}</span> },
      { key: "subject", label: "Subject", render: (row) => row.subject || row.title || row.description || "-" },
      {
        key: "download",
        label: "Download",
        center: true,
        render: (row) => <LinkButton url={row.pdfUrl} label={row.pdfFileName || "PDF"} />,
      },
    ];
  })();

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-md overflow-hidden w-full p-8">
      <div className="px-6 pt-5 pb-0" style={{ borderBottom: `2px solid ${CBIC_STYLE.accent}` }}>
        <div className="mb-3">
          <p className="text-sm text-slate-500">
            <span className="text-blue-500 font-semibold">{activeLabel}</span>
          </p>
          {selectedDocument && <h2 className="text-2xl font-bold text-slate-800 mt-2">{selectedDocument}</h2>}
          {(isActs || isRules) && (
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4 flex-wrap">
              <span className="font-medium">View Complete {isActs ? "Act" : "Rule"}:</span>
              <DocumentAction label={completePdfLabel} onClick={() => openExternal(completePdfUrl)} disabled={!completePdfUrl} />
              <span className="text-slate-300">|</span>
              <DocumentAction label="HTML" onClick={() => openExternal(completeHtmlUrl)} disabled={!completeHtmlUrl} />
              <span className="text-slate-300">|</span>
              <DocumentAction label="Amendment History" onClick={openAmendmentHistory} />
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {(isActs || isRules) && (
          <div className="rounded-md p-8 mb-8 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              {isActs && (
                <>
                  <LabeledSelect
                    label="Select Act"
                    value={selectedAct}
                    onChange={setSelectedAct}
                    options={uniqueActs}
                    emptyLabel="All Acts"
                    minWidth="min-w-[180px]"
                  />
                  <LabeledSelect
                    label="Select Chapter"
                    value={chapter}
                    onChange={setChapter}
                    options={uniqueChapters}
                    emptyLabel="All Chapters"
                    minWidth="min-w-[170px]"
                  />
                  <input
                    type="text"
                    placeholder="Enter Section..."
                    value={section}
                    onChange={(event) => setSection(event.target.value)}
                    className="flex-1 max-w-xs border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none"
                  />
                </>
              )}

              {isRules && (
                <>
                  <LabeledSelect
                    label="Select Rule"
                    value={selectedRule}
                    onChange={setSelectedRule}
                    options={uniqueRules}
                    emptyLabel="All Rules"
                    minWidth="min-w-[230px]"
                  />
                  <LabeledSelect
                    label="Select Year"
                    value={year}
                    onChange={setYear}
                    options={availableYears.length > 0 ? availableYears : CBIC_YEAR_OPTIONS}
                    emptyLabel="All Years"
                    minWidth="min-w-[150px]"
                  />
                  <input
                    type="text"
                    placeholder="Enter Rule Number..."
                    value={ruleNumber}
                    onChange={(event) => setRuleNumber(event.target.value)}
                    className="flex-1 max-w-xs border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none"
                  />
                </>
              )}

              <SearchInput search={search} setSearch={setSearch} />
            </div>
          </div>
        )}

        {isNotifications && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-start gap-3">
              <LabeledSelect
                label="Select Year"
                value={year}
                onChange={setYear}
                options={showCbicYearDropdown ? CBIC_YEAR_OPTIONS : availableYears}
                emptyLabel={showCbicYearDropdown ? "All Years" : "Select Year"}
                minWidth="min-w-[150px]"
              />
              <SearchInput search={search} setSearch={setSearch} />
            </div>
          </div>
        )}

        {isSearchOnlySection && (
          <div className="rounded-md p-4 mb-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-start gap-3">
              {showCbicYearDropdown && !isNotifications && (
                <LabeledSelect
                  label="Select Year"
                  value={year}
                  onChange={setYear}
                  options={CBIC_YEAR_OPTIONS}
                  emptyLabel="All Years"
                  minWidth="min-w-[150px]"
                />
              )}
              <SearchInput search={search} setSearch={setSearch} />
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          {(isRegulations || filteredData.length > 10) && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>show</span>
              <select value={entries} onChange={(event) => setEntries(event.target.value)} className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none">
                {PAGE_SIZE_OPTIONS.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <span>entries</span>
            </div>
          )}

          {(isActs || isRules) && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600">View By</span>
              {isActs && (
                <>
                  <RadioToggle checked={viewType === "chapter"} label="Chapter" onChange={() => setViewType("chapter")} name="actsView" />
                  <RadioToggle checked={viewType === "section"} label="Section" onChange={() => setViewType("section")} name="actsView" />
                </>
              )}
              {isRules && (
                <>
                  <RadioToggle checked={viewType === "chapter"} label="Chapter" onChange={() => setViewType("chapter")} name="rulesView" />
                  <RadioToggle checked={viewType === "ruleNumber"} label="Rule" onChange={() => setViewType("ruleNumber")} name="rulesView" />
                </>
              )}
            </div>
          )}
        </div>

        {loading && <LoadingSkeleton />}
        {!loading && error && <ErrorState message={error} />}
        {!loading && !error && displayedItems.length === 0 && <CBICEmptyState />}
        {!loading && !error && displayedItems.length > 0 && (
          <>
            <TableView
              items={displayedItems}
              columns={columns}
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <PaginationControls
              totalItems={sortedData.length}
              currentPage={currentPage}
              pageSize={entries}
              onPageChange={setCurrentPage}
              compact
            />
          </>
        )}
      </div>

      {showAmendmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Amendment History - {selectedDocument}</h3>
              <button onClick={() => setShowAmendmentModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">
                ×
              </button>
            </div>
            <div className="p-6">
              {loadingHistory ? (
                <div className="text-center py-8">Loading...</div>
              ) : amendmentHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-500">No amendment history found.</div>
              ) : (
                <table className="min-w-full border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold">PDF</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold">HTML</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amendmentHistory.map((item, index) => (
                      <tr key={index} className="border-t border-slate-100">
                        <td className="px-4 py-2 text-sm">{item.date}</td>
                        <td className="px-4 py-2 text-sm">
                          <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            View
                          </a>
                        </td>
                        <td className="px-4 py-2 text-sm">
                          <a href={item.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LabeledSelect({ label, value, onChange, options, emptyLabel, minWidth }) {
  return (
    <div className="flex items-stretch">
      <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-l-md">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`border border-slate-300 rounded-r-md text-sm text-slate-700 px-3 py-2 bg-white focus:outline-none ${minWidth}`}
      >
        <option value="">{emptyLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function SearchInput({ search, setSearch }) {
  return (
    <div className="flex items-stretch flex-1 max-w-sm">
      <input
        type="text"
        placeholder="Enter Keyword"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="flex-1 border border-r-0 border-slate-300 rounded-l-xl text-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 rounded-r-xl shadow-sm">
        <Search size={19} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function RadioToggle({ checked, label, onChange, name }) {
  return (
    <label className="flex items-center gap-1 text-sm cursor-pointer">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="w-4 h-4" />
      <span>{label}</span>
    </label>
  );
}

function LinkButton({ url, label }) {
  if (!url) {
    return <span className="text-xs text-slate-300">N/A</span>;
  }

  return (
    <button
      onClick={() => openExternal(url)}
      title={label}
      className="inline-flex max-w-[240px] items-center gap-1 rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100"
    >
      <FileText size={11} className="shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden animate-pulse">
          <div className="p-5">
            <div className="flex justify-between mb-3">
              <div className="h-4 w-24 bg-slate-200 rounded" />
              <div className="h-4 w-20 bg-slate-200 rounded" />
            </div>
            <div className="mb-4">
              <div className="h-6 w-48 bg-slate-200 rounded mb-2" />
              <div className="h-4 w-full bg-slate-200 rounded" />
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
      <p className="text-slate-400 text-xs mt-1">Try adjusting your search or selecting a different category</p>
    </div>
  );
}

function CBICEmptyState() {
  return (
    <div className="py-14 text-center">
      <FileText size={32} className="text-slate-300 mx-auto mb-3" />
      <p className="text-slate-500 text-sm font-medium">No records found</p>
      <p className="text-slate-400 text-xs mt-1">Try a different search or select another category</p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-red-700">Failed to load data</p>
        <p className="text-xs text-red-500 mt-0.5">{message}</p>
      </div>
    </div>
  );
}

function AuthButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
        active ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}

export default function RegulatoryUpdates() {
  const initialSnapshot = getInitialSnapshot();
  const hasInitialSnapshotData =
    Array.isArray(initialSnapshot?.notifications) && initialSnapshot.notifications.length > 0;
  const skipInitialFetch = useRef(hasInitialSnapshotData);
  const [loading, setLoading] = useState(!hasInitialSnapshotData);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState(initialSnapshot?.notifications || []);
  const [activeAuthority, setActiveAuthority] = useState(initialSnapshot?.activeAuthority || "dgft");
  const [activeTab, setActiveTab] = useState(initialSnapshot?.activeTab || "public");
  const [activeFY, setActiveFY] = useState(initialSnapshot?.activeFY || FINANCIAL_YEARS[0]);
  const [activeLabel, setActiveLabel] = useState(initialSnapshot?.activeLabel || "DGFT > Public Notices");
  const [search, setSearch] = useState(initialSnapshot?.search || "");
  const [selectedAct, setSelectedAct] = useState(initialSnapshot?.selectedAct || "");
  const [openGroups, setOpenGroups] = useState(
    getDefaultOpenGroups(initialSnapshot?.activeAuthority || "dgft", initialSnapshot?.activeTab || "public")
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const list = await fetchRegulatoryData(activeAuthority, activeTab);
      setNotifications(list);
    } catch (fetchError) {
      setNotifications([]);
      setError(fetchError.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }, [activeAuthority, activeTab]);

  useEffect(() => {
    if (skipInitialFetch.current) {
      skipInitialFetch.current = false;
      return;
    }

    if (PARENT_ONLY_KEYS.has(activeTab)) return;
    loadData();
  }, [activeTab, loadData]);

  useEffect(() => {
    if (loading || error || notifications.length === 0) return;

    const availableFinancialYears = getAvailableFinancialYears(notifications);
    if (availableFinancialYears.length > 0 && !availableFinancialYears.includes(activeFY)) {
      setActiveFY(availableFinancialYears[0]);
    }
  }, [activeFY, error, loading, notifications]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

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
    window.snapSaveState = () => ({ __REGULATORY_UPDATES_PRERENDER__: snapshot });

    if (!loading) {
      window.__REGULATORY_UPDATES_READY__ = true;
      document.documentElement.setAttribute("data-regulatory-updates-ready", "true");
      window.dispatchEvent(
        new CustomEvent(SNAPSHOT_EVENT, {
          detail: { activeAuthority, activeTab, count: notifications.length },
        })
      );
    } else {
      window.__REGULATORY_UPDATES_READY__ = false;
      document.documentElement.setAttribute("data-regulatory-updates-ready", "false");
    }

    return () => {
      if (window.__REGULATORY_UPDATES_READY__ !== true) {
        document.documentElement.removeAttribute("data-regulatory-updates-ready");
      }
    };
  }, [activeAuthority, activeFY, activeLabel, activeTab, loading, notifications, search, selectedAct]);

  const displayedData =
    activeAuthority === "dgft"
      ? notifications.filter((item) => itemMatchesSearch(item, search) && matchesFinancialYear(item, activeFY))
      : notifications;

  const switchAuthority = (authority) => {
    const defaultTab = getDefaultTab(authority);
    const defaultLabel = buildLabel(
      authority,
      getNavForAuthority(authority).find((item) => item.key === defaultTab)?.label || defaultTab
    );

    setActiveAuthority(authority);
    setActiveTab(defaultTab);
    setActiveLabel(defaultLabel);
    setNotifications([]);
    setSearch("");
    setSelectedAct("");
    setOpenGroups(getDefaultOpenGroups(authority, defaultTab));
  };

  const handleNavigate = (key, label) => {
    setActiveTab(key);
    setActiveLabel(label);
    setSearch("");
    setSelectedAct("");
  };

  const nav = getNavForAuthority(activeAuthority);
  const isFTPTab = activeAuthority === "dgft" && DGFT_FTP_TABS.has(activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow w-full px-6 pt-28 pb-12 max-w-[1600px] mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Public Notices, Circulars & Notifications</h1>
          <p className="text-slate-500 mb-6">Centralized database for DGFT, CBIC (Customs), and GST trade regulations.</p>
        </div>

        <div className="flex flex-col gap-6 items-start lg:flex-row lg:gap-8">
          <aside className="w-full flex-shrink-0 lg:sticky lg:top-24 lg:w-72">
            <div className="max-h-[28rem] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm lg:max-h-none lg:overflow-hidden">
              <div className="flex p-3 gap-2 border-b border-slate-100">
                <AuthButton active={activeAuthority === "dgft"} onClick={() => switchAuthority("dgft")}>
                  DGFT
                </AuthButton>
                <AuthButton active={activeAuthority === "customs"} onClick={() => switchAuthority("customs")}>
                  CBIC
                </AuthButton>
                <AuthButton active={activeAuthority === "gst"} onClick={() => switchAuthority("gst")}>
                  GST
                </AuthButton>
              </div>

              <nav className="py-1">
                {nav.map((item) => (
                  <SidebarNavItem
                    key={item.key}
                    item={item}
                    activeAuthority={activeAuthority}
                    activeTab={activeTab}
                    openGroups={openGroups}
                    setOpenGroups={setOpenGroups}
                    onNavigate={handleNavigate}
                  />
                ))}
              </nav>

              <div className="border-t border-slate-100 p-4">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">Financial Year</p>
                <div className="flex flex-wrap gap-1.5">
                  {FINANCIAL_YEARS.map((financialYear) => (
                    <button
                      key={financialYear}
                      onClick={() => setActiveFY(financialYear)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        activeFY === financialYear
                          ? "bg-blue-600 text-white"
                          : "border border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600"
                      }`}
                    >
                      {financialYear}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {activeAuthority === "gst" && activeTab === "acts" ? (
              <GstActsExplorer activeLabel={activeLabel} />
            ) : activeAuthority === "gst" && activeTab === "rules" ? (
              <GstRulesExplorer activeLabel={activeLabel} />
            ) : activeAuthority === "dgft" ? (
              isFTPTab ? (
                <FTPView
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
                <DGFTView
                  loading={loading}
                  error={error}
                  data={displayedData}
                  search={search}
                  setSearch={setSearch}
                  activeLabel={activeLabel}
                  activeFY={activeFY}
                />
              )
            ) : (
              <CBICView
                authority={activeAuthority}
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
