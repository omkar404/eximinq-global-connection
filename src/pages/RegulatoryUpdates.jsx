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

/*---------------------*/

// import React, { useEffect, useState } from "react";
// import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
// import { Search, FileText, Bookmark, Share2 } from "lucide-react";
// import { Footer } from "../components/CloudDeskForeignTrade/Footer";

// export default function RegulatoryUpdates() {
//   const [loading, setLoading] = useState(true);
//   const [notifications, setNotifications] = useState([]);
//   const [activeTab, setActiveTab] = useState("public");
//   const [search, setSearch] = useState("");

//   // ✅ API HIT ON TAB CHANGE
//   useEffect(() => {
//     const fetchDGFT = async () => {
//       try {
//         console.log("🔥 API CALLED FOR:", activeTab);

//         setLoading(true);

//         const res = await fetch(
//           `${process.env.REACT_APP_API_URL}/api/dgft/notices?type=${activeTab}`,
//           //  `http://localhost:5000/api/dgft/notices?type=${activeTab}`,
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         const data = await res.json();

//         if (!res.ok || !data.success) {
//           throw new Error(data.message || "Failed to fetch DGFT data");
//         }

//         setNotifications(data.data);
//       } catch (err) {
//         console.error("DGFT Fetch Error:", err);
//         setNotifications([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDGFT();
//   }, [activeTab]); // 🔥 Runs every time tab changes

//   // Search filter (local)
//   const displayedData = notifications.filter(
//     (item) =>
//       item.noticeNo?.toLowerCase().includes(search.toLowerCase()) ||
//       item.title?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />

//       <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 mb-2">
//             Public Notices, Circulars & Notifications
//           </h2>

//           <p className="text-slate-500 mb-6">
//             Centralized database for DGFT, CBIC (Customs), and RBI Trade Regulations.
//           </p>

//           {/* SEARCH */}
//           <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row gap-2">
//             <div className="relative flex-grow">
//               <Search className="absolute left-4 top-3.5 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search by Notice Number or Title..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-gray-50 text-sm"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* LEFT FILTERS */}
//           <aside className="lg:col-span-3 space-y-6">
//             <Filter title="Authority">
//               <FilterRow label="DGFT" count={notifications.length}>
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
//               <FilterRow label="CUSTOMS">
//                 <div
//                   onClick={() => setActiveTab("acts")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Acts
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("rules")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Rules
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("regulations")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Regulations
//                 </div>

//                 <div
//                   onClick={() => setActiveTab("forms")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Forms
//                 </div>
//                 <div
//                   onClick={() => setActiveTab("notifications")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Notifications
//                 </div>
//                 <div
//                   onClick={() => setActiveTab("circulars")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Circulars
//                 </div>
//                 <div
//                   onClick={() => setActiveTab("instructions / guidelines")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Instructions / Guidelines
//                 </div>
//                 <div
//                   onClick={() => setActiveTab("orders")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Orders
//                 </div>
//                 <div
//                   onClick={() => setActiveTab("allied acts")}
//                   className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
//                 >
//                   Allied Acts
//                 </div>
//               </FilterRow>
//             </Filter>

//             {/* <Filter title="Document Type">
//               <Checkbox label="Notification" defaultChecked />
//               <Checkbox label="Public Notice" defaultChecked />
//               <Checkbox label="Policy Circular" defaultChecked />
//               <Checkbox label="Trade Notice" />
//             </Filter> */}

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
//             ) : displayedData.length === 0 ? (
//               <div className="bg-white p-8 rounded-xl border text-center text-gray-500">
//                 No records found.
//               </div>
//             ) : (
//               displayedData.map((item) => (
//                 <NotificationCard key={item.id} item={item} />
//               ))
//             )}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

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

// function FilterRow({ label, count, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border rounded text-sm">
//       <div
//         onClick={() => setOpen(!open)}
//         className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-50"
//       >
//         <span>{label}</span>
//         <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
//           {count}
//         </span>
//       </div>

//       {open && children && (
//         <div className="border-t bg-gray-50 p-2 space-y-1">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// function NotificationCard({ item }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm relative">
//       <div className="absolute top-4 right-4 flex gap-2">
//         <Bookmark className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
//         <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
//       </div>

//       <div className="flex gap-4">
//         <div className="bg-gray-50 p-2 rounded border text-center min-w-[100px]">
//           <span className="block text-xs text-gray-500">{item.date}</span>
//           <span className="block text-xs text-gray-400">{item.year}</span>
//         </div>

//         <div>
//           <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
//             {item.authority}
//           </span>

//           <h3 className="text-lg font-bold mt-2">{item.noticeNo}</h3>

//           <p className="text-sm text-gray-600 mt-1">{item.title}</p>

//           <button
//             type="button"
//             onClick={() =>
//               window.open(
//                 `${process.env.REACT_APP_API_URL}/api/dgft/pdf-download?noticeNo=${encodeURIComponent(
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

/*-------------------------------*/
import React, { useEffect, useState, useCallback } from "react";
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
  ExternalLink,
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

/* ─────────────────────────────────────────────
   TABLE VIEW COMPONENT (Only for CBIC)
───────────────────────────────────────────── */
const TableView = ({ items, columns }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200">
    <table className="min-w-full bg-white">
      <thead>
        <tr style={{ backgroundColor: cbic.headerBg }}>
          {columns.map((col) => (
            <th key={col.key} className={`px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded shadow-lg hover:shadow-xl ${col.center ? "text-center" : ""}`}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="px-5 py-12 text-center text-gray-400 text-sm">
              No records found.
            </td>
          </tr>
        ) : (
          items.map((row, i) => (
            <tr key={row.id || i} className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              {columns.map((col) => (
                <td key={col.key} className={`px-5 py-3 text-sm ${col.center ? "text-center" : ""}`}>
                  {col.render ? col.render(row) : <span className="text-gray-700">{row[col.key] || "—"}</span>}
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState("acts");
  const [search, setSearch] = useState("");
  const [activeAuthority, setActiveAuthority] = useState("customs");
  const [activeFY, setActiveFY] = useState("2025-26");
  const [openGroups, setOpenGroups] = useState(new Set(["acts"]));
  const [activeLabel, setActiveLabel] = useState("CBIC › Acts");

  /* ── API Calls ── */
  const fetchDGFTData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dgft/notices?type=${activeTab}`,
        { headers: { "Content-Type": "application/json" } }
      );
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.message || "Failed to fetch DGFT data");
      setNotifications(data.data);
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
      
      const apiTypeMap = {
        "acts": "acts",
        "rules": "rules",
        "regulations": "regulations",
        "notifications-tariff": "notifications-tariff",
        "notifications-antiDumping": "notifications-antiDumping",
        "notifications-cvd": "notifications-cvd",
        "notifications-nonTariff": "notifications-nonTariff",
        "notifications-safeguards": "notifications-safeguards",
        "circulars": "circulars",
        "instructions": "instructions",
        "orders": "orders",
        "forms": "forms",
        "alliedActs": "alliedActs"
      };
      
      const apiType = apiTypeMap[activeTab] || activeTab;
      const url = `http://localhost:5000/api/customs/${apiType}`;
      
      console.log("Fetching Customs data from:", url);
      
      const res = await fetch(url, {
        headers: { "Content-Type": "application/json" }
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
    if (activeAuthority === "dgft") {
      fetchDGFTData();
    } else {
      fetchCustomsData();
    }
  }, [activeTab, activeAuthority, fetchDGFTData, fetchCustomsData]);

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
    const defaultLabel = auth === "dgft" ? "DGFT › Public Notices" : "CBIC › Acts";
    setActiveTab(defaultKey);
    setOpenGroups(new Set([defaultKey]));
    setActiveLabel(defaultLabel);
    setSearch("");
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
  };

  const handleChildClick = (key, label) => {
    setActiveTab(key);
    setActiveLabel(label);
    setSearch("");
  };

  const nav = activeAuthority === "dgft" ? DGFT_NAV : CBIC_NAV;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Centralized database for DGFT, CBIC (Customs), and RBI Trade Regulations
          </h1>
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
                            <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
                          ) : (
                            <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
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
function DGFTView({ loading, error, data, search, setSearch, activeLabel, activeFY, activeTab }) {
  return (
    <div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-4 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
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
            {loading ? "Loading…" : `${data.length} result${data.length !== 1 ? "s" : ""}`}
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
        <div className="space-y-3">
          {data.map((item, index) => (
            <DGFTCard key={item.id || index} item={item} activeTab={activeTab} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   UPDATED DGFT CARD - Matches Image Format
───────────────────────────────────────────── */
function DGFTCard({ item, activeTab }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const noticeNumber = item.noticeNo || item.number || "—";
  const noticeTitle = item.title || item.subject || "No title available";
  const noticeDate = item.date || item.issueDate || item.publishedDate || "";
  const financialYear = item.financialYear || item.fy || "2025-2026";
  const formattedDate = formatDateDDMMYYYY(noticeDate);
  
  const typeLabel = {
    public: "PUBLIC NOTICE",
    notification: "NOTIFICATION",
    circular: "POLICY CIRCULAR",
    trade: "TRADE NOTICE"
  }[activeTab] || "NOTICE";

  const handleDownload = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/dgft/pdf-download?noticeNo=${encodeURIComponent(noticeNumber)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${noticeNumber} — ${noticeTitle}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="text-sm text-slate-600">{formattedDate}</div>
          <div className="text-sm text-slate-600">{financialYear}</div>
        </div>
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-800">{typeLabel} - {noticeNumber}</h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">{noticeTitle}</p>
        </div>
        <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
          <button onClick={handleDownload} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            <FileText size={15} /> Download PDF
          </button>
          <div className="flex-1" />
          <button onClick={() => setBookmarked((b) => !b)} className={`p-2 rounded-md transition-colors ${bookmarked ? "text-blue-600 bg-blue-50" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}>
            <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
          </button>
          <button onClick={handleShare} className={`p-2 rounded-md transition-colors ${copied ? "text-emerald-600 bg-emerald-50" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}>
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CBIC VIEW — Table View Only
   Now with separate view toggles for Acts, Rules, Regulations
───────────────────────────────────────────── */
function CBICView({ loading, error, data, search, setSearch, activeLabel, activeFY, activeTab }) {
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [entries, setEntries] = useState("10");
  const [chapter, setChapter] = useState("");
  const [section, setSection] = useState("");
  
  // View type based on activeTab
  const [viewType, setViewType] = useState(() => {
    if (activeTab === "acts") return "chapter";
    if (activeTab === "rules") return "ruleNumber";
    if (activeTab === "regulations") return "regulationNumber";
    return "chapter";
  });

  // Reset viewType when activeTab changes
  useEffect(() => {
    if (activeTab === "acts") setViewType("chapter");
    else if (activeTab === "rules") setViewType("ruleNumber");
    else if (activeTab === "regulations") setViewType("regulationNumber");
  }, [activeTab]);

  // Define columns based on activeTab and viewType
  const getColumns = () => {
    // FORMS
    if (activeTab === "forms") {
      return [
        { key: "formNumber", label: "Form Number", render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.formNumber || row.number || "—"}</span> },
        { key: "formName", label: "Form Name", render: (row) => row.formName || row.title || "—" },
        { key: "download", label: "Download", center: true, render: () => (
          <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
            <FileText size={11} /> PDF
          </button>
        )}
      ];
    }
    
    // NOTIFICATIONS
    if (activeTab.includes("notifications")) {
      return [
        { key: "number", label: "Number", render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || "—"}</span> },
        { key: "date", label: "Date", render: (row) => <span className="text-slate-500 whitespace-nowrap">{parseDate(row.date)}</span> },
        { key: "subject", label: "Subject", render: (row) => row.subject || row.title || "—" },
        { key: "download", label: "Download", center: true, render: () => (
          <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
            <FileText size={11} /> PDF
          </button>
        )},
        { key: "history", label: "History", center: true, render: () => (
          <button className="inline-flex items-center gap-1 text-xs text-[#0d3b6e] hover:underline">
            <History size={11} /> History
          </button>
        )}
      ];
    }
    
    // ACTS
    if (activeTab === "acts") {
      if (viewType === "chapter") {
        return [
          { key: "chapter", label: "Chapter", render: (row) => row.chapter || "—" },
          { key: "title", label: "Title/Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      } else {
        return [
          { key: "section", label: "Section", render: (row) => row.section || "—" },
          { key: "title", label: "Title/Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      }
    }
    
    // RULES
    if (activeTab === "rules") {
      if (viewType === "ruleNumber") {
        return [
          { key: "number", label: "Rule Number", render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || row.ruleNumber || "—"}</span> },
          { key: "title", label: "Rule Title / Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      } else {
        // View by Chapter
        return [
          { key: "chapter", label: "Chapter", render: (row) => row.chapter || "—" },
          { key: "title", label: "Rule Title / Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      }
    }
    
    // REGULATIONS
    if (activeTab === "regulations") {
      if (viewType === "regulationNumber") {
        return [
          { key: "number", label: "Regulation Number", render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || row.regulationNumber || "—"}</span> },
          { key: "title", label: "Regulation Title / Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      } else {
        // View by Chapter
        return [
          { key: "chapter", label: "Chapter", render: (row) => row.chapter || "—" },
          { key: "title", label: "Regulation Title / Description", render: (row) => row.title || row.subject || "—" },
          { key: "download", label: "Download", center: true, render: () => (
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
              <FileText size={11} /> PDF
            </button>
          )}
        ];
      }
    }
    
    // Default columns for circulars, instructions, orders, alliedActs
    return [
      { key: "number", label: "Number", render: (row) => <span className="font-semibold text-[#0d3b6e]">{row.number || "—"}</span> },
      { key: "date", label: "Date", render: (row) => <span className="text-slate-500 whitespace-nowrap">{parseDate(row.date)}</span> },
      { key: "subject", label: "Subject", render: (row) => row.subject || row.title || "—" },
      { key: "download", label: "Download", center: true, render: () => (
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 px-2 py-1 rounded transition-colors">
          <FileText size={11} /> PDF
        </button>
      )}
    ];
  };

  const filteredData = data.filter(item => {
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesSearch = 
        (item.title?.toLowerCase().includes(searchLower)) ||
        (item.subject?.toLowerCase().includes(searchLower)) ||
        (item.number?.toLowerCase().includes(searchLower)) ||
        (item.formName?.toLowerCase().includes(searchLower)) ||
        (item.formNumber?.toLowerCase().includes(searchLower)) ||
        (item.chapter?.toLowerCase().includes(searchLower)) ||
        (item.section?.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }
    if (year && item.year && item.year !== year) return false;
    if (category && item.category && item.category !== category) return false;
    if (chapter && item.chapter && item.chapter !== chapter) return false;
    if (section && item.section && item.section !== section) return false;
    return true;
  });

  const displayedItems = filteredData.slice(0, parseInt(entries));

  const categories = [...new Set(data.map(item => item.category).filter(Boolean))];
  const availableYears = [...new Set(data.map(item => item.year).filter(Boolean))];
  const chapters = [...new Set(data.map(item => item.chapter).filter(Boolean))];
  
  const isActsRulesRegs = ["acts", "rules", "regulations"].includes(activeTab);
  const isNotifications = activeTab.includes("notifications");
  const isForms = activeTab === "forms";
  const isAlliedActs = activeTab === "alliedActs";

  // Render toggle buttons based on activeTab
  const renderViewToggles = () => {
    if (activeTab === "acts") {
      return (
        <div className="flex items-center gap-4 pb-3">
          <button 
            onClick={() => setViewType("chapter")}
            className={`text-sm font-medium transition-colors ${viewType === "chapter" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Chapter
          </button>
          <button 
            onClick={() => setViewType("section")}
            className={`text-sm font-medium transition-colors ${viewType === "section" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Section
          </button>
        </div>
      );
    } else if (activeTab === "rules") {
      return (
        <div className="flex items-center gap-4 pb-3">
          <button 
            onClick={() => setViewType("chapter")}
            className={`text-sm font-medium transition-colors ${viewType === "chapter" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Chapter
          </button>
          <button 
            onClick={() => setViewType("ruleNumber")}
            className={`text-sm font-medium transition-colors ${viewType === "ruleNumber" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Rule
          </button>
        </div>
      );
    } else if (activeTab === "regulations") {
      return (
        <div className="flex items-center gap-4 pb-3">
          <button 
            onClick={() => setViewType("chapter")}
            className={`text-sm font-medium transition-colors ${viewType === "chapter" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Chapter 
          </button>
          <button 
            onClick={() => setViewType("regulationNumber")}
            className={`text-sm font-medium transition-colors ${viewType === "regulationNumber" ? "text-[#3b82f6] border-b-2 border-[#60a5fa] pb-1" : "text-slate-500 hover:text-slate-700"}`}
          >
            View By Regulation 
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="px-5 pt-4 pb-0" style={{ borderBottom: `2px solid ${cbic.accentGold}` }}>
        <div className="mb-3">
          <p className="text-xs text-slate-500">
            <span className="text-[#3b82f6] font-medium">Home</span>
            <span className="mx-1 text-slate-400">&gt;&gt;</span>
            <span className="text-[#3b82f6] font-medium">{activeLabel}</span>
          </p>
        </div>
        
        {isActsRulesRegs && renderViewToggles()}
      </div>

      <div className="p-5">
        {/* Acts/Rules/Regulations Filter */}
        {isActsRulesRegs && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
            <div className="flex flex-wrap items-center gap-3">
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
                  {chapters.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {activeTab === "acts" && (
                <div className="flex-1 max-w-xs">
                  <input
                    type="text"
                    placeholder="Enter Section..."
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full border border-slate-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 text-slate-700 placeholder:text-slate-400"
                  />
                </div>
              )}

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
                <span className="underline font-semibold">Click here</span> to search across all {activeLabel}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Filter */}
        {isNotifications && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
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
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
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
                  {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
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
                <span className="underline font-semibold">Click here</span> to search across all Notifications
              </button>
              <p className="text-[10px] text-slate-400 mt-1">*Amendment history is shown only for certain notifications</p>
            </div>
          </div>
        )}

        {/* Circulars Filter */}
        {activeTab === "circulars" && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
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
                  {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
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
                <span className="underline font-semibold">Click here</span> to search across all Circulars
              </button>
            </div>
          </div>
        )}

        {/* Instructions & Orders Filter */}
        {(activeTab === "instructions" || activeTab === "orders") && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
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
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
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
                  {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
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
                <span className="underline font-semibold">Click here</span> to search across all {activeTab === "instructions" ? "Instructions / Guidelines" : "Orders"}
              </button>
            </div>
          </div>
        )}

        {/* Forms Filter */}
        {isForms && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
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
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
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
                <span className="underline font-semibold">Click here</span> to search across all Forms
              </button>
            </div>
          </div>
        )}

        {/* Allied Acts Filter */}
        {isAlliedActs && (
          <div className="rounded-md p-4 mb-4" style={{ backgroundColor: "#f5f0e8" }}>
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
                  {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
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
                <span className="underline font-semibold">Click here</span> to search across all Allied Acts
              </button>
            </div>
          </div>
        )}

        {filteredData.length > 10 && (
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
            <span>show</span>
            <select
              value={entries}
              onChange={(e) => setEntries(e.target.value)}
              className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              {["10", "25", "50", "100"].map((n) => <option key={n}>{n}</option>)}
            </select>
            <span>entries</span>
          </div>
        )}

        {/* Table View for CBIC */}
        {loading && <LoadingSkeleton />}
        {!loading && error && <ErrorState message={error} />}
        {!loading && !error && displayedItems.length === 0 && <CBICEmptyState />}
        {!loading && !error && displayedItems.length > 0 && (
          <TableView items={displayedItems} columns={getColumns()} />
        )}
      </div>
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
        <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden animate-pulse">
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