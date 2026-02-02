import React, { useEffect, useState } from "react";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import { Search, FileText, Bookmark, Share2 } from "lucide-react";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";
export default function RegulatoryUpdates() {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setNotifications(mockData);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      <Navbar />

      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Public Notices, Circulars & Notifications
          </h2>
          <p className="text-slate-500 mb-6">
            Centralized database for DGFT, CBIC (Customs), and RBI Trade
            Regulations.
          </p>

          <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-3.5 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Notification Number, Subject, or HS Code..."
                className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-gray-50 text-sm"
              />
            </div>

            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2 rounded-lg font-semibold transition">
              Search
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT FILTERS */}
          <aside className="lg:col-span-3 space-y-6">
            <Filter title="Authority">
              <FilterRow label="DGFT" count="142" />
              <FilterRow label="Customs (CBIC)" count="89" />
              <FilterRow label="RBI / FEMA" count="12" />
            </Filter>

            <Filter title="Document Type">
              <Checkbox label="Notification" defaultChecked />
              <Checkbox label="Public Notice" defaultChecked />
              <Checkbox label="Policy Circular" defaultChecked />
              <Checkbox label="Trade Notice" />
            </Filter>

            <Filter title="Financial Year">
              <div className="flex gap-2 flex-wrap">
                <Year active>2025-26</Year>
                <Year>2024-25</Year>
                <Year>2023-24</Year>
              </div>
            </Filter>
          </aside>

          {/* RESULTS */}
          <div className="lg:col-span-9 space-y-4 min-h-[400px]">
            {loading ? (
              <Skeleton />
            ) : (
              notifications.map((item) => (
                <NotificationCard key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Filter({ title, children }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FilterRow({ label, count }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded text-sm">
      <span>{label}</span>
      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
        {count}
      </span>
    </div>
  );
}

function Checkbox({ label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" defaultChecked={defaultChecked} />
      {label}
    </label>
  );
}

function Year({ children, active }) {
  return (
    <button
      className={`px-3 py-1 text-xs rounded-full ${
        active
          ? "bg-blue-600 text-white"
          : "border border-gray-300 text-gray-600"
      }`}
    >
      {children}
    </button>
  );
}

function NotificationCard({ item }) {
  return (
    <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <Bookmark className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
        <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
      </div>

      <div className="flex gap-4">
        <div className="bg-gray-50 p-2 rounded border text-center min-w-[80px]">
          <span className="block text-xs text-gray-400">{item.month}</span>
          <span className="block text-2xl font-bold text-blue-700">
            {item.day}
          </span>
          <span className="block text-xs text-gray-500">{item.year}</span>
        </div>

        <div>
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
            {item.authority}
          </span>
          <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.summary}</p>

          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center mt-2"
          >
            <FileText className="w-4 h-4 mr-1" />
            Download PDF ({item.fileSize})
          </a>
        </div>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <>
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl border shadow-sm animate-pulse"
        >
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </>
  );
}

/* ---------------- MOCK DATA ---------------- */

const mockData = [
  {
    id: 1,
    day: "11",
    month: "Dec",
    year: "2025",
    authority: "DGFT",
    title: "Policy Circular No. 09/2024-25",
    summary:
      "Procedure for implementation of Import Management System (IMS) for IT Hardware under HSN 8471.",
    fileSize: "2.4 MB",
  },
  {
    id: 2,
    day: "10",
    month: "Dec",
    year: "2025",
    authority: "CBIC (Customs)",
    title: "Notification No. 102/2025-Customs (N.T.)",
    summary:
      "Fixation of Tariff Value of Edible Oils, Brass Scrap, Gold and Silver.",
    fileSize: "450 KB",
  },
];
