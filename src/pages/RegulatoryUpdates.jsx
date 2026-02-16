// import React, { useEffect, useState } from "react";
// import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
// import { Search, FileText, Bookmark, Share2 } from "lucide-react";
// import { Footer } from "../components/CloudDeskForeignTrade/Footer";
// export default function RegulatoryUpdates() {
//   const [loading, setLoading] = useState(true);

// const [activeTab, setActiveTab] = useState("public");


//   const [notifications, setNotifications] = useState([]);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setNotifications(mockData);
//   //     setLoading(false);
//   //   }, 800);
//   // }, []);


//   useEffect(() => {
//     console.log("Fetching DGFT notices...");
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api/dgft/notices");
//         const data = await res.json();

//         if (data.success) {
//           setNotifications(data.data);
//         } else {
//           setNotifications([]);
//         }
//       } catch (err) {
//         console.error("DGFT Fetch Error:", err);
//         setNotifications([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);


//   function FilterRow({ label, count, children }) {
//     const [open, setOpen] = useState(false);

//     return (
//       <div className="border rounded text-sm">
//         <div
//           onClick={() => setOpen(!open)}
//           className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-50"
//         >
//           <span>{label}</span>
//           <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
//             {count}
//           </span>
//         </div>

//         {open && children && (
//           <div className="border-t bg-gray-50 p-2 space-y-1">
//             {children}
//           </div>
//         )}
//       </div>
//     );
//   }


//   return (
//     <>
//       <Navbar />

//       <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 mb-2">
//             Public Notices, Circulars & Notifications
//           </h2>
//           <p className="text-slate-500 mb-6">
//             Centralized database for DGFT, CBIC (Customs), and RBI Trade
//             Regulations.
//           </p>

//           <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row gap-2">
//             <div className="relative flex-grow">
//               <Search className="absolute left-4 top-3.5 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search by Notification Number, Subject, or HS Code..."
//                 className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-gray-50 text-sm"
//               />
//             </div>

//             <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2 rounded-lg font-semibold transition">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* <div className="grid lg:grid-cols-12 gap-8">

//           <aside className="lg:col-span-3 space-y-6">
//             <Filter title="Authority">
//               <FilterRow label="DGFT" count="142" />
//               <FilterRow label="Customs (CBIC)" count="89" />
//               <FilterRow label="RBI / FEMA" count="12" />
//             </Filter>

//             <Filter title="Document Type">
//               <Checkbox label="Notification" defaultChecked />
//               <Checkbox label="Public Notice" defaultChecked />
//               <Checkbox label="Policy Circular" defaultChecked />
//               <Checkbox label="Trade Notice" />
//             </Filter>

//             <Filter title="Financial Year">
//               <div className="flex gap-2 flex-wrap">
//                 <Year active>2025-26</Year>
//                 <Year>2024-25</Year>
//                 <Year>2023-24</Year>
//               </div>
//             </Filter>
//           </aside>

//           <div className="lg:col-span-9 space-y-4 min-h-[400px]">
//             {loading ? (
//               <Skeleton />
//             ) : (
//               notifications.map((item) => (
//                 <NotificationCard key={item.id} item={item} />
//               ))
//             )}
//           </div>
//         </div> */}

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* LEFT FILTERS */}
//           <aside className="lg:col-span-3 space-y-6">
//             <Filter title="Authority">
//               <FilterRow label="DGFT" count="142">
//                 <div
//                   onClick={() => setActiveTab("public")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Public Notice
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("notification")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Notification
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("circular")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Policy Circular
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("trade")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Trade Notice
//                 </div>
//               </FilterRow>

//               <FilterRow label="Customs (CBIC)" count="89" />
//               <FilterRow label="RBI / FEMA" count="12" />
//             </Filter>

//             <Filter title="Document Type">
//               <Checkbox label="Notification" defaultChecked />
//               <Checkbox label="Public Notice" defaultChecked />
//               <Checkbox label="Policy Circular" defaultChecked />
//               <Checkbox label="Trade Notice" />
//             </Filter>

//             <Filter title="Financial Year">
//               <div className="flex gap-2 flex-wrap">
//                 <Year active>2025-26</Year>
//                 <Year>2024-25</Year>
//                 <Year>2023-24</Year>
//               </div>
//             </Filter>
//           </aside>

//           {/* RESULTS */}
//           <div className="lg:col-span-9 space-y-4 min-h-[400px]">
//             {loading ? (
//               <Skeleton />
//             ) : (() => {
//               const filtered = notifications.filter(
//                 (item) => item.type === activeTab
//               );

//               if (filtered.length === 0) {
//                 return (
//                   <div className="bg-white p-8 rounded-xl border text-center text-gray-500">
//                     No records found for selected tab.
//                   </div>
//                 );
//               }

//               return filtered.map((item) => (
//                 <NotificationCard key={item.id} item={item} />
//               ));
//             })()}
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// /* ---------------- SMALL COMPONENTS ---------------- */

// function Filter({ title, children }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
//       <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase">
//         {title}
//       </h3>
//       <div className="space-y-2">{children}</div>
//     </div>
//   );
// }

// function Checkbox({ label, defaultChecked }) {
//   return (
//     <label className="flex items-center gap-2 text-sm">
//       <input type="checkbox" defaultChecked={defaultChecked} />
//       {label}
//     </label>
//   );
// }

// function Year({ children, active }) {
//   return (
//     <button
//       className={`px-3 py-1 text-xs rounded-full ${active
//         ? "bg-blue-600 text-white"
//         : "border border-gray-300 text-gray-600"
//         }`}
//     >
//       {children}
//     </button>
//   );
// }

// function NotificationCard({ item }) {
//   const formattedDate = item.date || "";

//   return (
//     <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm relative">
//       <div className="absolute top-4 right-4 flex gap-2">
//         <Bookmark className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
//         <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
//       </div>

//       <div className="flex gap-4">
//         {/* DATE BOX */}
//         <div className="bg-gray-50 p-2 rounded border text-center min-w-[100px]">
//           <span className="block text-xs text-gray-500">
//             {formattedDate}
//           </span>
//           <span className="block text-xs text-gray-400">
//             {item.year}
//           </span>
//         </div>

//         {/* CONTENT */}
//         <div>
//           <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
//             {item.authority}
//           </span>

//           <h3 className="text-lg font-bold mt-2">
//             {item.noticeNo}
//           </h3>

//           <p className="text-sm text-gray-600 mt-1">
//             {item.title}
//           </p>

//           <button
//             onClick={() =>
//               window.open(
//                 `/api/dgft/pdf-download?noticeNo=${encodeURIComponent(
//                   item.noticeNo
//                 )}`,
//                 "_blank"
//               )
//             }
//             className="text-blue-600 text-sm font-semibold hover:underline flex items-center mt-2"
//           >
//             <FileText className="w-4 h-4 mr-1" />
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// function Skeleton() {
//   return (
//     <>
//       {[1, 2].map((i) => (
//         <div
//           key={i}
//           className="bg-white p-5 rounded-xl border shadow-sm animate-pulse"
//         >
//           <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
//           <div className="h-4 bg-gray-200 rounded w-1/2" />
//         </div>
//       ))}
//     </>
//   );
// }

// /* ---------------- MOCK DATA ---------------- */

// const mockData = [
//   // ---------------- POLICY ----------------
//   {
//     id: 1,
//     type: "policy",
//     day: "02",
//     month: "Jan",
//     year: "2026",
//     authority: "DGFT",
//     title: "Foreign Trade Policy Amendment 2026",
//     summary: "Amendment in export incentives under FTP 2026.",
//     fileSize: "1.2 MB",
//   },
//   {
//     id: 2,
//     type: "policy",
//     day: "10",
//     month: "Jan",
//     year: "2026",
//     authority: "DGFT",
//     title: "Export Promotion Policy Update",
//     summary: "Revised guidelines for MSME export promotion.",
//     fileSize: "980 KB",
//   },
//   {
//     id: 3,
//     type: "policy",
//     day: "18",
//     month: "Jan",
//     year: "2026",
//     authority: "DGFT",
//     title: "Revised IT Hardware Import Policy",
//     summary: "New compliance requirements for IT imports.",
//     fileSize: "2.1 MB",
//   },
//   {
//     id: 4,
//     type: "policy",
//     day: "25",
//     month: "Jan",
//     year: "2026",
//     authority: "DGFT",
//     title: "Agri Export Support Scheme",
//     summary: "New benefits for agricultural exporters.",
//     fileSize: "1.8 MB",
//   },

//   // ---------------- PUBLIC NOTICE ----------------
//   {
//     id: 5,
//     type: "public",
//     day: "03",
//     month: "Feb",
//     year: "2026",
//     authority: "DGFT",
//     title: "Public Notice No. 01/2026",
//     summary: "Extension of IEC updation deadline.",
//     fileSize: "600 KB",
//   },
//   {
//     id: 6,
//     type: "public",
//     day: "09",
//     month: "Feb",
//     year: "2026",
//     authority: "DGFT",
//     title: "Online Application Advisory",
//     summary: "Clarification on digital signature requirements.",
//     fileSize: "450 KB",
//   },
//   {
//     id: 7,
//     type: "public",
//     day: "16",
//     month: "Feb",
//     year: "2026",
//     authority: "DGFT",
//     title: "Exporter Registration Notice",
//     summary: "Mandatory registration under new export system.",
//     fileSize: "720 KB",
//   },
//   {
//     id: 8,
//     type: "public",
//     day: "22",
//     month: "Feb",
//     year: "2026",
//     authority: "DGFT",
//     title: "IEC Modification Update",
//     summary: "Changes in IEC modification procedure.",
//     fileSize: "510 KB",
//   },

//   // ---------------- NOTIFICATION ----------------
//   {
//     id: 9,
//     type: "notification",
//     day: "05",
//     month: "Mar",
//     year: "2026",
//     authority: "CBIC (Customs)",
//     title: "Notification No. 12/2026-Customs",
//     summary: "Tariff revision on electronic goods.",
//     fileSize: "380 KB",
//   },
//   {
//     id: 10,
//     type: "notification",
//     day: "11",
//     month: "Mar",
//     year: "2026",
//     authority: "DGFT",
//     title: "Import Restriction Notification",
//     summary: "New import restrictions on specified goods.",
//     fileSize: "1.5 MB",
//   },
//   {
//     id: 11,
//     type: "notification",
//     day: "19",
//     month: "Mar",
//     year: "2026",
//     authority: "RBI / FEMA",
//     title: "FEMA Amendment Notification",
//     summary: "Changes in foreign remittance guidelines.",
//     fileSize: "900 KB",
//   },
//   {
//     id: 12,
//     type: "notification",
//     day: "27",
//     month: "Mar",
//     year: "2026",
//     authority: "CBIC (Customs)",
//     title: "Customs Duty Update",
//     summary: "Revision of customs duty rates.",
//     fileSize: "650 KB",
//   },

//   // ---------------- POLICY CIRCULAR ----------------
//   {
//     id: 13,
//     type: "circular",
//     day: "04",
//     month: "Apr",
//     year: "2026",
//     authority: "DGFT",
//     title: "Policy Circular No. 01/2026",
//     summary: "Procedure for export documentation compliance.",
//     fileSize: "1.1 MB",
//   },
//   {
//     id: 14,
//     type: "circular",
//     day: "12",
//     month: "Apr",
//     year: "2026",
//     authority: "DGFT",
//     title: "Clarification on EPCG Scheme",
//     summary: "Updated compliance under EPCG scheme.",
//     fileSize: "820 KB",
//   },
//   {
//     id: 15,
//     type: "circular",
//     day: "18",
//     month: "Apr",
//     year: "2026",
//     authority: "DGFT",
//     title: "Export Obligation Circular",
//     summary: "Timeline for export obligation fulfillment.",
//     fileSize: "1.4 MB",
//   },
//   {
//     id: 16,
//     type: "circular",
//     day: "25",
//     month: "Apr",
//     year: "2026",
//     authority: "DGFT",
//     title: "MEIS Scheme Circular",
//     summary: "Operational guidance for MEIS scheme.",
//     fileSize: "700 KB",
//   },

//   // ---------------- TRADE NOTICE ----------------
//   {
//     id: 17,
//     type: "trade",
//     day: "02",
//     month: "May",
//     year: "2026",
//     authority: "DGFT",
//     title: "Trade Notice 01/2026",
//     summary: "Launch of new export facilitation portal.",
//     fileSize: "500 KB",
//   },
//   {
//     id: 18,
//     type: "trade",
//     day: "10",
//     month: "May",
//     year: "2026",
//     authority: "DGFT",
//     title: "Trade Notice on Compliance",
//     summary: "Mandatory compliance reporting update.",
//     fileSize: "620 KB",
//   },
//   {
//     id: 19,
//     type: "trade",
//     day: "18",
//     month: "May",
//     year: "2026",
//     authority: "DGFT",
//     title: "Export Data Submission Notice",
//     summary: "Updated procedure for export data filing.",
//     fileSize: "480 KB",
//   },
//   {
//     id: 20,
//     type: "trade",
//     day: "26",
//     month: "May",
//     year: "2026",
//     authority: "DGFT",
//     title: "Trade Facilitation Announcement",
//     summary: "New trade facilitation measures introduced.",
//     fileSize: "910 KB",
//   },
// ];

import React, { useEffect, useState } from "react";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import { Search, FileText, Bookmark, Share2 } from "lucide-react";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";

export default function RegulatoryUpdates() {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState("public");
  const [search, setSearch] = useState("");

  // ✅ API HIT ON TAB CHANGE
  useEffect(() => {
    const fetchDGFT = async () => {
      try {
        console.log("🔥 API CALLED FOR:", activeTab);

        setLoading(true);

        const res = await fetch(
          // `${process.env.REACT_APP_API_URL}/api/dgft/notices?type=${activeTab}`,
          `http://localhost:5000/api/dgft/notices?type=${activeTab}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch DGFT data");
        }

        setNotifications(data.data);
      } catch (err) {
        console.error("DGFT Fetch Error:", err);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDGFT();
  }, [activeTab]); // 🔥 Runs every time tab changes

  // Search filter (local)
  const displayedData = notifications.filter(
    (item) =>
      item.noticeNo?.toLowerCase().includes(search.toLowerCase()) ||
      item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Public Notices, Circulars & Notifications
          </h2>

          <p className="text-slate-500 mb-6">
            Centralized database for DGFT, CBIC (Customs), and RBI Trade Regulations.
          </p>

          {/* SEARCH */}
          <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-3.5 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Notice Number or Title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-gray-50 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT FILTERS */}
          <aside className="lg:col-span-3 space-y-6">
            <Filter title="Authority">
              <FilterRow label="DGFT" count={notifications.length}>
                <div
                  onClick={() => setActiveTab("public")}
                  className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
                >
                  Public Notice
                </div>

                <div
                  onClick={() => setActiveTab("notification")}
                  className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
                >
                  Notification
                </div>

                <div
                  onClick={() => setActiveTab("circular")}
                  className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
                >
                  Policy Circular
                </div>

                <div
                  onClick={() => setActiveTab("trade")}
                  className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
                >
                  Trade Notice
                </div>
              </FilterRow>
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
            ) : displayedData.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border text-center text-gray-500">
                No records found.
              </div>
            ) : (
              displayedData.map((item) => (
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

/* ---------------- COMPONENTS ---------------- */

function Year({ children, active }) {
  return (
    <button
      className={`px-3 py-1 text-xs rounded-full ${active
        ? "bg-blue-600 text-white"
        : "border border-gray-300 text-gray-600"
        }`}
    >
      {children}
    </button>
  );
}

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

function Checkbox({ label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" defaultChecked={defaultChecked} />
      {label}
    </label>
  );
}

function FilterRow({ label, count, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded text-sm">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-50"
      >
        <span>{label}</span>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
          {count}
        </span>
      </div>

      {open && children && (
        <div className="border-t bg-gray-50 p-2 space-y-1">
          {children}
        </div>
      )}
    </div>
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
        <div className="bg-gray-50 p-2 rounded border text-center min-w-[100px]">
          <span className="block text-xs text-gray-500">{item.date}</span>
          <span className="block text-xs text-gray-400">{item.year}</span>
        </div>

        <div>
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
            {item.authority}
          </span>

          <h3 className="text-lg font-bold mt-2">{item.noticeNo}</h3>

          <p className="text-sm text-gray-600 mt-1">{item.title}</p>

          <button
            type="button"
            onClick={() =>
              window.open(
                `${process.env.REACT_APP_API_URL}/api/dgft/pdf-download?noticeNo=${encodeURIComponent(
                  item.noticeNo
                )}`,
                "_blank"
              )
            }
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center mt-2"
          >
            <FileText className="w-4 h-4 mr-1" />
            Download PDF
          </button>
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