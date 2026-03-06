// import React from "react";
// import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
// import {
//   DollarSign,
//   Filter,
//   TrendingUp,
//   TrendingDown,
//   Minus,
//   FileText,
// } from "lucide-react";
// import { Footer } from "../components/CloudDeskForeignTrade/Footer";

// export default function ExchangeRates() {
//   return (
//     <>
//       {/* Reused Navbar */}
//       <Navbar />

//       {/* MAIN CONTENT */}
//       <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
//         {/* Page Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 mb-2">
//             Customs Exchange Rates History
//           </h2>
//           <p className="text-slate-500">
//             Official exchange rates notified by CBIC under Section 14 of the
//             Customs Act, 1962.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
//           <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
//             Filter Data (2021 – Present)
//           </h3>

//           <div className="grid md:grid-cols-4 gap-6 items-end">
//             {/* Currency */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Currency
//               </label>
//               <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none">
//                 <option>All Currencies</option>
//                 <option selected>USD – US Dollar</option>
//                 <option>EUR – Euro</option>
//                 <option>GBP – Pound Sterling</option>
//                 <option>JPY – Japanese Yen</option>
//               </select>
//             </div>

//             {/* Year */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Financial Year
//               </label>
//               <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none">
//                 <option>2025 (Current)</option>
//                 <option>2024</option>
//                 <option>2023</option>
//                 <option>2022</option>
//                 <option>2021</option>
//               </select>
//             </div>

//             {/* Date */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Date (Optional)
//               </label>
//               <input
//                 type="date"
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//             </div>

//             {/* Button */}
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow transition flex items-center justify-center gap-2">
//               <Filter className="w-4 h-4" />
//               Apply Filters
//             </button>

//             <div class="flex gap-2 mt-4 text-xs">
//               <span class="text-gray-400 font-medium mr-2 self-center">Quick Access:</span>
//               <button class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200 hover:bg-blue-100">2025</button>
//               <button class="px-3 py-1 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50">2024</button>
//               <button class="px-3 py-1 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50">2023</button>
//               <button class="px-3 py-1 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50">2022</button>
//               <button class="px-3 py-1 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50">2021</button>
//             </div>
//           </div>
//         </div>

//         {/* Trend Cards */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           {/* Current Rate */}
//           <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
//             <div className="flex justify-between mb-4">
//               <div>
//                 <p className="text-blue-200 text-xs font-bold uppercase">
//                   Current USD Rate
//                 </p>
//                 <h3 className="text-4xl font-bold mt-1">₹84.50</h3>
//                 <p className="text-sm text-blue-200 mt-1">Import</p>
//               </div>
//               <div className="bg-white/20 p-2 rounded-lg">
//                 <DollarSign className="w-6 h-6" />
//               </div>
//             </div>

//             <div className="flex items-center text-sm bg-black/20 rounded p-2">
//               <span className="text-red-300 font-bold mr-2 flex items-center">
//                 <TrendingUp className="w-4 h-4 mr-1" /> +0.45
//               </span>
//               <span className="text-blue-100">vs previous fortnight</span>
//             </div>

//             <p className="text-[10px] text-blue-300 mt-4">
//               Effective from: 06 Dec 2025
//             </p>
//           </div>

//           {/* Placeholder Chart */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
//             <h3 className="font-bold text-gray-700 mb-4">
//               USD Trend (Last 6 Months)
//             </h3>
//             <div className="h-32 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//               {[60, 65, 70, 68, 75, 85].map((h, i) => (
//                 <div
//                   key={i}
//                   className="w-1/6 bg-blue-100 rounded-t relative"
//                   style={{ height: `${h}%` }}
//                 >
//                   <div className="absolute bottom-0 w-full bg-blue-500 rounded-t h-[85%]" />
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
//               <span>Jul</span>
//               <span>Aug</span>
//               <span>Sep</span>
//               <span>Oct</span>
//               <span>Nov</span>
//               <span>Dec</span>
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
//           <div className="px-6 py-4 border-b bg-gray-50 flex justify-between">
//             <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
//             <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
//               USD (2021–2025)
//             </span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Effective Date</th>
//                   <th className="px-6 py-4 text-left">Notification</th>
//                   <th className="px-6 py-4">Currency</th>
//                   <th className="px-6 py-4 text-right">Import</th>
//                   <th className="px-6 py-4 text-right">Export</th>
//                   <th className="px-6 py-4 text-center">Trend</th>
//                   <th className="px-6 py-4 text-center">PDF</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y">
//                 {rates.map((r) => (
//                   <tr key={r.date} className="hover:bg-blue-50">
//                     <td className="px-6 py-4 font-medium">{r.date}</td>
//                     <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">
//                       {r.notification}
//                     </td>
//                     <td className="px-6 py-4 font-bold">{r.currency}</td>
//                     <td className="px-6 py-4 text-right font-mono font-bold">
//                       {r.import}
//                     </td>
//                     <td className="px-6 py-4 text-right font-mono text-gray-600">
//                       {r.export}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {r.trend === "up" && (
//                         <TrendingUp className="w-4 h-4 text-red-600 inline" />
//                       )}
//                       {r.trend === "down" && (
//                         <TrendingDown className="w-4 h-4 text-green-600 inline" />
//                       )}
//                       {r.trend === "stable" && (
//                         <Minus className="w-4 h-4 text-gray-400 inline" />
//                       )}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <FileText className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer inline" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
//             <span class="text-xs text-gray-500">Showing 6 records for USD (2021-2025)</span>
//             <div class="flex gap-2">
//               <button class="px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-50" disabled>Previous</button>
//               <button class="px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 bg-white hover:bg-gray-100">Next</button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

// /* ---------------- MOCK DATA ---------------- */

// const rates = [
//   {
//     date: "06 Dec 2025",
//     notification: "102/2025-Cus (NT)",
//     currency: "USD",
//     import: "84.50",
//     export: "83.20",
//     trend: "up",
//   },
//   {
//     date: "21 Nov 2025",
//     notification: "98/2025-Cus (NT)",
//     currency: "USD",
//     import: "84.05",
//     export: "82.80",
//     trend: "stable",
//   },
//   {
//     date: "15 Dec 2024",
//     notification: "88/2024-Cus (NT)",
//     currency: "USD",
//     import: "83.40",
//     export: "81.90",
//     trend: "down",
//   },
// ];

// import React, { useMemo, useState } from "react";
// import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
// import Marquee from "react-fast-marquee";
// import {
//   DollarSign,
//   Filter,
//   TrendingUp,
//   TrendingDown,
//   Minus,
//   FileText,
// } from "lucide-react";
// import { Footer } from "../components/CloudDeskForeignTrade/Footer";
// import { exchangeRates } from "../data/exchangeRates";

// /* ---------------- UTILITIES ---------------- */

// const getTrend = (current, previous) => {
//   if (!previous) return "stable";
//   if (current > previous) return "up";
//   if (current < previous) return "down";
//   return "stable";
// };

// const getYearFromDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("-");
//   return Number(year);
// };

// const getTodayISO = () => {
//   const today = new Date();
//   return today.toISOString().split("T")[0];
// };

// /* ---------------- COMPONENT ---------------- */

// export default function ExchangeRates() {
//   const [currency, setCurrency] = useState("USD");
//   const [year, setYear] = useState("2026");
//   const [date, setDate] = useState(getTodayISO());

//   // converts "DD-MM-YYYY" → Date object
//   // "DD-MM-YYYY" → Date
//   // "DD-MM-YYYY" → Date
//   // "DD-MM-YYYY" → Date
//   const parseDMY = (dmy) => {
//     const [d, m, y] = dmy.split("-").map(Number);
//     return new Date(y, m - 1, d);
//   };

//   // Fortnight range from selected date (yyyy-mm-dd)
//   const getFortnightRange = (selectedDate) => {
//     const d = new Date(selectedDate);
//     const y = d.getFullYear();
//     const m = d.getMonth();
//     const day = d.getDate();

//     if (day <= 15) {
//       return {
//         start: new Date(y, m, 1),
//         end: new Date(y, m, 15),
//       };
//     }

//     return {
//       start: new Date(y, m, 16),
//       end: new Date(y, m + 1, 0),
//     };
//   };

//   /* ---- FILTER DATA ---- */
//   const filteredRates = useMemo(() => {
//     // 1) currency filter
//     let list = exchangeRates.filter((r) => r.currency === currency);

//     // 2) sort by effectiveDate ASC (important)
//     list = list.sort(
//       (a, b) => parseDMY(a.effectiveDate) - parseDMY(b.effectiveDate),
//     );

//     // 3) date-based validity (rate valid until next effectiveDate)
//     if (date) {
//       const { start, end } = getFortnightRange(date);

//       list = list.filter((r, idx) => {
//         const eff = parseDMY(r.effectiveDate);
//         const nextEff = list[idx + 1]
//           ? parseDMY(list[idx + 1].effectiveDate)
//           : null;

//         const validFrom = eff;
//         const validTo = nextEff
//           ? new Date(nextEff.getTime() - 1) // until next rate
//           : new Date(2099, 11, 31); // open-ended (last known rate)

//         return validTo >= start && validFrom <= end;
//       });
//     }

//     // 4) optional year label filter (display only; does not cut validity)
//     if (year) {
//       list = list.filter(
//         (r) => parseDMY(r.effectiveDate).getFullYear() <= Number(year),
//       );
//     }

//     // 5) newest first for UI
//     return list.sort(
//       (a, b) => parseDMY(b.effectiveDate) - parseDMY(a.effectiveDate),
//     );
//   }, [currency, date, year]);

//   const getPdfUrl = (effectiveDate) => {
//     if (!effectiveDate) return null;
//     return `/pdfs/${effectiveDate}.pdf`;
//   };

//   /* ---- MAP TABLE DATA WITH TREND ---- */
//   const tableRates = filteredRates.map((r, index) => {
//     const prev = filteredRates[index + 1];
//     return {
//       date: r.effectiveDate,
//       notification: r.notification || "-",
//       currency: r.currency,
//       import: r.importRate,
//       export: r.exportRate,
//       trend: getTrend(r.importRate, prev?.importRate),
//       pdfUrl: r.pdfUrl,
//     };
//   });

//   /* ---- CURRENT RATE CARD ---- */
//   const latest = tableRates[0];

//   return (
//     <>
//       <Navbar />

//       <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 mb-2">
//             Customs Exchange Rates History
//           </h2>
//           <p className="text-slate-500">
//             Official exchange rates notified by CBIC under Section 14 of the
//             Customs Act, 1962.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
//           <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
//             Filter Data (2021 – Present)
//           </h3>

//           <div className="grid md:grid-cols-4 gap-6 items-end">
//             {/* Currency */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Currency
//               </label>
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
//               >
//                 <option value="AED">AED – UAE Dirham</option>
//                 <option value="AUD">AUD – Australian Dollar</option>
//                 <option value="BHD">BHD – Bahraini Dinar</option>
//                 <option value="CAD">CAD – Canadian Dollar</option>
//                 <option value="CHF">CHF – Swiss Franc</option>
//                 <option value="CNY">CNY – Chinese Yuan</option>
//                 <option value="DKK">DKK – Danish Kroner</option>
//                 <option value="EUR">EUR – Euro</option>
//                 <option value="GBP">GBP – Pound Sterling</option>
//                 <option value="HKD">HKD – Hongkong Dollar</option>
//                 <option value="JPY">JPY – Japanese Yen</option>
//                 <option value="KRW">KRW – Korean Won</option>
//                 <option value="KWD">KWD – Kuwaiti Dinar</option>
//                 <option value="NOK">NOK – Norwegian Kroner</option>
//                 <option value="NZD">NZD – New Zealand Dollar</option>
//                 <option value="QAR">QAR – Qatari Riyal</option>
//                 <option value="SAR">SAR – Saudi Arabian Riyal</option>
//                 <option value="SEK">SEK – Swedish Kroner</option>
//                 <option value="SGD">SGD – Singapore Dollar</option>
//                 <option value="TRY">TRY – Turkish Lira</option>
//                 <option value="USD">USD – US Dollar</option>
//                 <option value="ZAR">ZAR – South African Rand</option>
//               </select>
//             </div>

//             {/* Year */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Financial Year
//               </label>
//               <select
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
//               >
//                 <option value="2026">2026</option>
//                 <option value="2025">2025</option>
//                 <option value="2024">2024</option>
//               </select>
//             </div>

//             {/* Date */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Date (Optional)
//               </label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
//               />
//             </div>

//             <button
//               onClick={() => setDate("")}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2"
//             >
//               <Filter className="w-4 h-4" />
//               Reset Date
//             </button>
//           </div>
//         </div>

//         {/*Marquee example*/}
//         <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
//           <div className="flex justify-between items-center mb-3 px-2">
//             <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
//               Live Exchange Rates Ticker - All Currencies ({year})
//             </h3>
//             <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//               {
//                 exchangeRates.filter((r) => {
//                   const [day, month, yr] = r.effectiveDate.split("-");
//                   return yr === year;
//                 }).length
//               }{" "}
//               {/* rates in {year} */}
//             </span>
//           </div>

//           <div className="relative">
//             <Marquee
//               speed={60}
//               gradient={true}
//               gradientColor={[255, 255, 255]}
//               gradientWidth={50}
//               pauseOnHover={true}
//               className="py-2"
//             >
//               {exchangeRates
//                 .filter((r) => {
//                   const [day, month, yr] = r.effectiveDate.split("-");
//                   return yr === year;
//                 })
//                 .map((rate, index) => (
//                   <div
//                     key={`${rate.currency}-${rate.effectiveDate}-${index}`}
//                     className="mx-3 w-48 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="font-bold text-lg text-gray-800">
//                         {rate.currency}
//                       </span>
//                       <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
//                         Unit: {rate.unit}
//                       </span>
//                     </div>
//                     <div className="text-xs text-gray-500 mb-2 truncate">
//                       {rate.currencyName}
//                     </div>
//                     <div className="grid grid-cols-2 gap-2 text-center">
//                       <div className="bg-green-50 rounded p-1">
//                         <div className="text-xs text-green-600 font-medium">
//                           IMP
//                         </div>
//                         <div className="font-bold text-gray-800">
//                           ₹{rate.importRate}
//                         </div>
//                       </div>
//                       <div className="bg-orange-50 rounded p-1">
//                         <div className="text-xs text-orange-600 font-medium">
//                           EXP
//                         </div>
//                         <div className="font-bold text-gray-800">
//                           ₹{rate.exportRate}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-2 text-[10px] text-gray-400 flex justify-between">
//                       <span>{rate.effectiveDate}</span>
//                       <span className="text-blue-600">{rate.notification}</span>
//                     </div>
//                     {rate.pdfUrl && (
//                       <a
//                         href={`https://eximinq.in/pdfs/${rate.pdfUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="absolute top-2 right-2 text-gray-400 hover:text-blue-600"
//                       >
//                         <FileText className="w-3 h-3" />
//                       </a>
//                     )}
//                   </div>
//                 ))}
//             </Marquee>
//           </div>
//         </div>

//         {/* Trend Cards */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//   <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
//     <div className="flex justify-between items-start mb-4">
//       <div>
//         <p className="text-blue-200 text-xs font-bold uppercase">
//           Current {currency} Rate
//         </p>
//         <div className="grid grid-cols-2 gap-4 mt-3">
//           <div>
//             <p className="text-sm text-blue-200">Import</p>
//             <h3 className="text-3xl font-bold">₹{latest?.import}</h3>
//           </div>
//           <div>
//             <p className="text-sm text-blue-200">Export</p>
//             <h3 className="text-3xl font-bold">₹{latest?.export}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white/20 p-2 rounded-lg">
//         <DollarSign className="w-6 h-6" />
//       </div>
//     </div>
//     <div className="flex items-center text-sm bg-black/20 rounded p-2">
//               {latest?.trend === "up" && (
//                 <span className="text-red-300 font-bold mr-2 flex items-center">
//                   <TrendingUp className="w-4 h-4 mr-1" /> Rising
//                 </span>
//               )}
//               {latest?.trend === "down" && (
//                 <span className="text-green-300 font-bold mr-2 flex items-center">
//                   <TrendingDown className="w-4 h-4 mr-1" /> Falling
//                 </span>
//               )}
//               {latest?.trend === "stable" && (
//                 <span className="text-gray-200 font-bold mr-2 flex items-center">
//                   <Minus className="w-4 h-4 mr-1" /> Stable
//                 </span>
//               )}
//             </div>
//     <p className="text-[10px] text-blue-300 mt-4">
//       Effective from: {latest?.date}
//     </p>
//   </div>

//   {/* Chart section unchanged */}
// <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
//             <h3 className="font-bold text-gray-700 mb-4">
//               {currency} Trend (Last Records)
//             </h3>
//             <div className="h-32 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//               {tableRates.slice(0, 6).map((r, i) => (
//                 <div
//                   key={i}
//                   className="w-1/6 bg-blue-100 rounded-t relative"
//                   style={{ height: `${60 + i * 5}%` }}
//                 >
//                   <div className="absolute bottom-0 w-full bg-blue-500 rounded-t h-[85%]" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
//           <div className="px-6 py-4 border-b bg-gray-50 flex justify-between">
//             <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
//             <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
//               {currency} ({year})
//             </span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Effective Date</th>
//                   <th className="px-6 py-4 text-left">Notification</th>
//                   <th className="px-6 py-4">Currency</th>
//                   <th className="px-6 py-4 text-right">Import</th>
//                   <th className="px-6 py-4 text-right">Export</th>
//                   <th className="px-6 py-4 text-center">Trend</th>
//                   <th className="px-6 py-4 text-center">PDF</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y">
//                 {tableRates.map((r, i) => (
//                   <tr key={i} className="hover:bg-blue-50">
//                     <td className="px-6 py-4 font-medium">{r.date}</td>
//                     <td className="px-6 py-4 text-blue-600">
//                       {r.notification}
//                     </td>
//                     <td className="px-6 py-4 font-bold">{r.currency}</td>
//                     <td className="px-6 py-4 text-right font-mono font-bold">
//                       {r.import}
//                     </td>
//                     <td className="px-6 py-4 text-right font-mono text-gray-600">
//                       {r.export}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {r.trend === "up" && (
//                         <TrendingUp className="w-4 h-4 text-red-600 inline" />
//                       )}
//                       {r.trend === "down" && (
//                         <TrendingDown className="w-4 h-4 text-green-600 inline" />
//                       )}
//                       {r.trend === "stable" && (
//                         <Minus className="w-4 h-4 text-gray-400 inline" />
//                       )}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {r.pdfUrl ? (
//                         <a
//                           href={`https://eximinq.in/pdfs/${r.pdfUrl}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <FileText className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer inline" />
//                         </a>
//                       ) : (
//                         <FileText className="w-4 h-4 text-gray-300 inline" />
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

/*---------------------------------------------*/
// import React, { useMemo, useState } from "react";
// import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
// import Marquee from "react-fast-marquee";
// import {
//   DollarSign,
//   Filter,
//   TrendingUp,
//   TrendingDown,
//   Minus,
//   FileText,
// } from "lucide-react";
// import { Footer } from "../components/CloudDeskForeignTrade/Footer";
// import { exchangeRates } from "../data/exchangeRates";

// /* ---------------- UTILITIES ---------------- */

// const getTrend = (current, previous) => {
//   if (!previous) return "stable";
//   if (current > previous) return "up";
//   if (current < previous) return "down";
//   return "stable";
// };

// const getYearFromDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("-");
//   return Number(year);
// };

// const getTodayISO = () => {
//   const today = new Date();
//   return today.toISOString().split("T")[0];
// };

// /* ---------------- DATE FORMATTING UTILITIES ---------------- */

// const formatToDDMMYYYY = (input) => {
//   if (!input) return '';
  
//   try {
//     // Handle Date object
//     if (input instanceof Date) {
//       const day = String(input.getDate()).padStart(2, '0');
//       const month = String(input.getMonth() + 1).padStart(2, '0');
//       const year = input.getFullYear();
//       return `${day}/${month}/${year}`;
//     }
    
//     // Handle string input
//     if (typeof input === 'string') {
//       // YYYY-MM-DD (from date input)
//       if (input.match(/^\d{4}-\d{2}-\d{2}$/)) {
//         const [year, month, day] = input.split('-');
//         return `${day}/${month}/${year}`;
//       }
      
//       // DD-MM-YYYY (from your data)
//       if (input.match(/^\d{2}-\d{2}-\d{4}$/)) {
//         const [day, month, year] = input.split('-');
//         return `${day}/${month}/${year}`;
//       }
      
//       // DD/MM/YYYY format
//       if (input.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
//         return input;
//       }
//     }
    
//     return input;
//   } catch (error) {
//     console.error('Date formatting error:', error);
//     return input;
//   }
// };

// // Convert DD/MM/YYYY to YYYY-MM-DD for internal use
// const ddmmyyyyToYyyymmdd = (ddmmyyyy) => {
//   if (!ddmmyyyy) return '';
//   const [day, month, year] = ddmmyyyy.split('/');
//   return `${year}-${month}-${day}`;
// };

// // Validate DD/MM/YYYY format
// const isValidDate = (dateStr) => {
//   if (!dateStr) return false;
//   const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
//   if (!pattern.test(dateStr)) return false;
  
//   const [day, month, year] = dateStr.split('/').map(Number);
//   const date = new Date(year, month - 1, day);
//   return date.getDate() === day && 
//          date.getMonth() === month - 1 && 
//          date.getFullYear() === year;
// };

// /* ---------------- COMPONENT ---------------- */

// export default function ExchangeRates() {
//   const [currency, setCurrency] = useState("USD");
//   const [year, setYear] = useState("2026");
//   const [date, setDate] = useState(getTodayISO());
//   const [displayDate, setDisplayDate] = useState(formatToDDMMYYYY(getTodayISO()));
//   const [dateError, setDateError] = useState('');

//   // Handle custom date input change
//   const handleDateChange = (e) => {
//     const value = e.target.value;
//     setDisplayDate(value);
//     setDateError('');
    
//     // Auto-format as user types (add slashes)
//     let formatted = value.replace(/[^\d]/g, '');
//     if (formatted.length > 2) {
//       formatted = formatted.slice(0, 2) + '/' + formatted.slice(2);
//     }
//     if (formatted.length > 5) {
//       formatted = formatted.slice(0, 5) + '/' + formatted.slice(5, 9);
//     }
//     if (formatted.length > 10) {
//       formatted = formatted.slice(0, 10);
//     }
    
//     setDisplayDate(formatted);
    
//     // Validate when complete
//     if (formatted.length === 10) {
//       if (isValidDate(formatted)) {
//         const [day, month, year] = formatted.split('/');
//         const isoDate = `${year}-${month}-${day}`;
//         setDate(isoDate);
//         setDateError('');
//       } else {
//         setDateError('Please enter a valid date');
//       }
//     } else if (formatted.length === 0) {
//       setDate('');
//       setDateError('');
//     }
//   };

//   // Handle date input blur
//   const handleDateBlur = () => {
//     if (displayDate && displayDate.length === 10 && isValidDate(displayDate)) {
//       const [day, month, year] = displayDate.split('/');
//       const isoDate = `${year}-${month}-${day}`;
//       setDate(isoDate);
//       setDateError('');
//     } else if (displayDate && displayDate.length > 0) {
//       setDateError('Please use format: dd/mm/yyyy');
//     }
//   };

//   // Reset date
//   const resetDate = () => {
//     setDate('');
//     setDisplayDate('');
//     setDateError('');
//   };

//   // converts "DD-MM-YYYY" → Date object
//   const parseDMY = (dmy) => {
//     const [d, m, y] = dmy.split("-").map(Number);
//     return new Date(y, m - 1, d);
//   };

//   // Fortnight range from selected date (yyyy-mm-dd)
//   const getFortnightRange = (selectedDate) => {
//     const d = new Date(selectedDate);
//     const y = d.getFullYear();
//     const m = d.getMonth();
//     const day = d.getDate();

//     if (day <= 15) {
//       return {
//         start: new Date(y, m, 1),
//         end: new Date(y, m, 15),
//       };
//     }

//     return {
//       start: new Date(y, m, 16),
//       end: new Date(y, m + 1, 0),
//     };
//   };

//   /* ---- FILTER DATA ---- */
//   const filteredRates = useMemo(() => {
//     // 1) currency filter
//     let list = exchangeRates.filter((r) => r.currency === currency);

//     // 2) sort by effectiveDate ASC (important)
//     list = list.sort(
//       (a, b) => parseDMY(a.effectiveDate) - parseDMY(b.effectiveDate),
//     );

//     // 3) date-based validity (rate valid until next effectiveDate)
//     if (date) {
//       const { start, end } = getFortnightRange(date);

//       list = list.filter((r, idx) => {
//         const eff = parseDMY(r.effectiveDate);
//         const nextEff = list[idx + 1]
//           ? parseDMY(list[idx + 1].effectiveDate)
//           : null;

//         const validFrom = eff;
//         const validTo = nextEff
//           ? new Date(nextEff.getTime() - 1) // until next rate
//           : new Date(2099, 11, 31); // open-ended (last known rate)

//         return validTo >= start && validFrom <= end;
//       });
//     }

//     // 4) optional year label filter (display only; does not cut validity)
//     if (year) {
//       list = list.filter(
//         (r) => parseDMY(r.effectiveDate).getFullYear() <= Number(year),
//       );
//     }

//     // 5) newest first for UI
//     return list.sort(
//       (a, b) => parseDMY(b.effectiveDate) - parseDMY(a.effectiveDate),
//     );
//   }, [currency, date, year]);

//   const getPdfUrl = (effectiveDate) => {
//     if (!effectiveDate) return null;
//     return `/pdfs/${effectiveDate}.pdf`;
//   };

//   /* ---- MAP TABLE DATA WITH TREND ---- */
//   const tableRates = filteredRates.map((r, index) => {
//     const prev = filteredRates[index + 1];
//     return {
//       date: r.effectiveDate,
//       notification: r.notification || "-",
//       currency: r.currency,
//       import: r.importRate,
//       export: r.exportRate,
//       trend: getTrend(r.importRate, prev?.importRate),
//       pdfUrl: r.pdfUrl,
//     };
//   });

//   /* ---- CURRENT RATE CARD ---- */
//   const latest = tableRates[0];

//   return (
//     <>
//       <Navbar />

//       <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 mb-2">
//             Customs Exchange Rates History
//           </h2>
//           <p className="text-slate-500">
//             Official exchange rates notified by CBIC under Section 14 of the
//             Customs Act, 1962.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
//           <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
//             Filter Data (2021 – Present)
//           </h3>

//           <div className="grid md:grid-cols-4 gap-6 items-end">
//             {/* Currency */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Currency
//               </label>
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
//               >
//                 <option value="AED">AED – UAE Dirham</option>
//                 <option value="AUD">AUD – Australian Dollar</option>
//                 <option value="BHD">BHD – Bahraini Dinar</option>
//                 <option value="CAD">CAD – Canadian Dollar</option>
//                 <option value="CHF">CHF – Swiss Franc</option>
//                 <option value="CNY">CNY – Chinese Yuan</option>
//                 <option value="DKK">DKK – Danish Kroner</option>
//                 <option value="EUR">EUR – Euro</option>
//                 <option value="GBP">GBP – Pound Sterling</option>
//                 <option value="HKD">HKD – Hongkong Dollar</option>
//                 <option value="JPY">JPY – Japanese Yen</option>
//                 <option value="KRW">KRW – Korean Won</option>
//                 <option value="KWD">KWD – Kuwaiti Dinar</option>
//                 <option value="NOK">NOK – Norwegian Kroner</option>
//                 <option value="NZD">NZD – New Zealand Dollar</option>
//                 <option value="QAR">QAR – Qatari Riyal</option>
//                 <option value="SAR">SAR – Saudi Arabian Riyal</option>
//                 <option value="SEK">SEK – Swedish Kroner</option>
//                 <option value="SGD">SGD – Singapore Dollar</option>
//                 <option value="TRY">TRY – Turkish Lira</option>
//                 <option value="USD">USD – US Dollar</option>
//                 <option value="ZAR">ZAR – South African Rand</option>
//               </select>
//             </div>

//             {/* Year */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Financial Year
//               </label>
//               <select
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//                 className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
//               >
//                 <option value="2026">2026</option>
//                 <option value="2025">2025</option>
//                 <option value="2024">2024</option>
//               </select>
//             </div>

//             {/* Date - Custom with DD/MM/YYYY format */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-500 mb-1">
//                 Date (Optional)
//               </label>
//               <input
//                 type="text"
//                 value={displayDate}
//                 onChange={handleDateChange}
//                 onBlur={handleDateBlur}
//                 placeholder="dd/mm/yyyy"
//                 className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg text-sm ${
//                   dateError ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {dateError && (
//                 <p className="text-xs text-red-500 mt-1">{dateError}</p>
//               )}
//             </div>

//             <button
//               onClick={resetDate}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2"
//             >
//               <Filter className="w-4 h-4" />
//               Reset Date
//             </button>
//           </div>
          
//           {/* Display selected date in DD/MM/YYYY format if date exists */}
//           {/* {date && (
//             <div className="mt-3 text-sm text-gray-600">
//               Selected Date: {formatToDDMMYYYY(date)}
//             </div>
//           )} */}
//         </div>

//         {/* Rest of your component remains the same... */}
//         {/* Marquee, Trend Cards, Data Table sections exactly as before */}

//         {/*Marquee example*/}
//         <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
//           <div className="flex justify-between items-center mb-3 px-2">
//             <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
//               Live Exchange Rates Ticker - All Currencies ({year})
//             </h3>
//             <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//               {
//                 exchangeRates.filter((r) => {
//                   const [day, month, yr] = r.effectiveDate.split("-");
//                   return yr === year;
//                 }).length
//               }{" "}
//               rates in {year}
//             </span>
//           </div>

//           <div className="relative">
//             <Marquee
//               speed={60}
//               gradient={true}
//               gradientColor={[255, 255, 255]}
//               gradientWidth={50}
//               pauseOnHover={true}
//               className="py-2"
//             >
//               {exchangeRates
//                 .filter((r) => {
//                   const [day, month, yr] = r.effectiveDate.split("-");
//                   return yr === year;
//                 })
//                 .map((rate, index) => (
//                   <div
//                     key={`${rate.currency}-${rate.effectiveDate}-${index}`}
//                     className="mx-3 w-48 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="font-bold text-lg text-gray-800">
//                         {rate.currency}
//                       </span>
//                       <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
//                         Unit: {rate.unit}
//                       </span>
//                     </div>
//                     <div className="text-xs text-gray-500 mb-2 truncate">
//                       {rate.currencyName}
//                     </div>
//                     <div className="grid grid-cols-2 gap-2 text-center">
//                       <div className="bg-green-50 rounded p-1">
//                         <div className="text-xs text-green-600 font-medium">
//                           IMP
//                         </div>
//                         <div className="font-bold text-gray-800">
//                           ₹{rate.importRate}
//                         </div>
//                       </div>
//                       <div className="bg-orange-50 rounded p-1">
//                         <div className="text-xs text-orange-600 font-medium">
//                           EXP
//                         </div>
//                         <div className="font-bold text-gray-800">
//                           ₹{rate.exportRate}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-2 text-[10px] text-gray-400 flex justify-between">
//                       <span>{formatToDDMMYYYY(rate.effectiveDate)}</span>
//                       <span className="text-blue-600">{rate.notification}</span>
//                     </div>
//                     {rate.pdfUrl && (
//                       <a
//                         href={`https://eximinq.in/pdfs/${rate.pdfUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="absolute top-2 right-2 text-gray-400 hover:text-blue-600"
//                       >
//                         <FileText className="w-3 h-3" />
//                       </a>
//                     )}
//                   </div>
//                 ))}
//             </Marquee>
//           </div>
//         </div>

//         {/* Trend Cards */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <p className="text-blue-200 text-xs font-bold uppercase">
//                   Current {currency} Rate
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mt-3">
//                   <div>
//                     <p className="text-sm text-blue-200">Import</p>
//                     <h3 className="text-3xl font-bold">₹{latest?.import}</h3>
//                   </div>
//                   <div>
//                     <p className="text-sm text-blue-200">Export</p>
//                     <h3 className="text-3xl font-bold">₹{latest?.export}</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/20 p-2 rounded-lg">
//                 <DollarSign className="w-6 h-6" />
//               </div>
//             </div>
//             <div className="flex items-center text-sm bg-black/20 rounded p-2">
//               {latest?.trend === "up" && (
//                 <span className="text-red-300 font-bold mr-2 flex items-center">
//                   <TrendingUp className="w-4 h-4 mr-1" /> Rising
//                 </span>
//               )}
//               {latest?.trend === "down" && (
//                 <span className="text-green-300 font-bold mr-2 flex items-center">
//                   <TrendingDown className="w-4 h-4 mr-1" /> Falling
//                 </span>
//               )}
//               {latest?.trend === "stable" && (
//                 <span className="text-gray-200 font-bold mr-2 flex items-center">
//                   <Minus className="w-4 h-4 mr-1" /> Stable
//                 </span>
//               )}
//             </div>
//             <p className="text-[10px] text-blue-300 mt-4">
//               Effective from: {formatToDDMMYYYY(latest?.date)}
//             </p>
//           </div>

//           {/* Chart section unchanged */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
//             <h3 className="font-bold text-gray-700 mb-4">
//               {currency} Trend (Last Records)
//             </h3>
//             <div className="h-32 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//               {tableRates.slice(0, 6).map((r, i) => (
//                 <div
//                   key={i}
//                   className="w-1/6 bg-blue-100 rounded-t relative"
//                   style={{ height: `${60 + i * 5}%` }}
//                 >
//                   <div className="absolute bottom-0 w-full bg-blue-500 rounded-t h-[85%]" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
//           <div className="px-6 py-4 border-b bg-gray-50 flex justify-between">
//             <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
//             <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
//               {currency} ({year})
//             </span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Effective Date</th>
//                   <th className="px-6 py-4 text-left">Notification</th>
//                   <th className="px-6 py-4">Currency</th>
//                   <th className="px-6 py-4 text-right">Import</th>
//                   <th className="px-6 py-4 text-right">Export</th>
//                   <th className="px-6 py-4 text-center">Trend</th>
//                   <th className="px-6 py-4 text-center">PDF</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y">
//                 {tableRates.map((r, i) => (
//                   <tr key={i} className="hover:bg-blue-50">
//                     <td className="px-6 py-4 font-medium">
//                       {formatToDDMMYYYY(r.date)}
//                     </td>
//                     <td className="px-6 py-4 text-blue-600">
//                       {r.notification}
//                     </td>
//                     <td className="px-6 py-4 font-bold">{r.currency}</td>
//                     <td className="px-6 py-4 text-right font-mono font-bold">
//                       {r.import}
//                     </td>
//                     <td className="px-6 py-4 text-right font-mono text-gray-600">
//                       {r.export}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {r.trend === "up" && (
//                         <TrendingUp className="w-4 h-4 text-red-600 inline" />
//                       )}
//                       {r.trend === "down" && (
//                         <TrendingDown className="w-4 h-4 text-green-600 inline" />
//                       )}
//                       {r.trend === "stable" && (
//                         <Minus className="w-4 h-4 text-gray-400 inline" />
//                       )}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {r.pdfUrl ? (
//                         <a
//                           href={`https://eximinq.in/pdfs/${r.pdfUrl}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <FileText className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer inline" />
//                         </a>
//                       ) : (
//                         <FileText className="w-4 h-4 text-gray-300 inline" />
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

/*---------------------------------------*/

import React, { useMemo, useState } from "react";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import Marquee from "react-fast-marquee";
import {
  DollarSign,
  Filter,
  TrendingUp,
  TrendingDown,
  Minus,
  FileText,
} from "lucide-react";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";
import { exchangeRates } from "../data/exchangeRates";

/* ---------------- UTILITIES ---------------- */

const getTrend = (current, previous) => {
  if (!previous) return "stable";
  if (current > previous) return "up";
  if (current < previous) return "down";
  return "stable";
};

const getYearFromDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return Number(year);
};

const getTodayISO = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

/* ---------------- DATE FORMATTING UTILITIES ---------------- */

const formatToDDMMYYYY = (input) => {
  if (!input) return '';
  
  try {
    // Handle Date object
    if (input instanceof Date) {
      const day = String(input.getDate()).padStart(2, '0');
      const month = String(input.getMonth() + 1).padStart(2, '0');
      const year = input.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    // Handle string input
    if (typeof input === 'string') {
      // YYYY-MM-DD (from date input)
      if (input.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = input.split('-');
        return `${day}/${month}/${year}`;
      }
      
      // DD-MM-YYYY (from your data)
      if (input.match(/^\d{2}-\d{2}-\d{4}$/)) {
        const [day, month, year] = input.split('-');
        return `${day}/${month}/${year}`;
      }
      
      // DD/MM/YYYY format
      if (input.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return input;
      }
    }
    
    return input;
  } catch (error) {
    console.error('Date formatting error:', error);
    return input;
  }
};

// Convert DD/MM/YYYY to YYYY-MM-DD for internal use
const ddmmyyyyToYyyymmdd = (ddmmyyyy) => {
  if (!ddmmyyyy) return '';
  const [day, month, year] = ddmmyyyy.split('/');
  return `${year}-${month}-${day}`;
};

// Validate DD/MM/YYYY format
const isValidDate = (dateStr) => {
  if (!dateStr) return false;
  const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!pattern.test(dateStr)) return false;
  
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  return date.getDate() === day && 
         date.getMonth() === month - 1 && 
         date.getFullYear() === year;
};

/* ---------------- COMPONENT ---------------- */

export default function ExchangeRates() {
  const [currency, setCurrency] = useState("USD");
  const [year, setYear] = useState("2026");
  const [date, setDate] = useState(getTodayISO());
  const [displayDate, setDisplayDate] = useState(formatToDDMMYYYY(getTodayISO()));
  const [dateError, setDateError] = useState('');

  // Handle custom date input change
  const handleDateChange = (e) => {
    const value = e.target.value;
    setDisplayDate(value);
    setDateError('');
    
    // Auto-format as user types (add slashes)
    let formatted = value.replace(/[^\d]/g, '');
    if (formatted.length > 2) {
      formatted = formatted.slice(0, 2) + '/' + formatted.slice(2);
    }
    if (formatted.length > 5) {
      formatted = formatted.slice(0, 5) + '/' + formatted.slice(5, 9);
    }
    if (formatted.length > 10) {
      formatted = formatted.slice(0, 10);
    }
    
    setDisplayDate(formatted);
    
    // Validate when complete
    if (formatted.length === 10) {
      if (isValidDate(formatted)) {
        const [day, month, year] = formatted.split('/');
        const isoDate = `${year}-${month}-${day}`;
        setDate(isoDate);
        setDateError('');
      } else {
        setDateError('Please enter a valid date');
      }
    } else if (formatted.length === 0) {
      setDate('');
      setDateError('');
    }
  };

  // Handle date input blur
  const handleDateBlur = () => {
    if (displayDate && displayDate.length === 10 && isValidDate(displayDate)) {
      const [day, month, year] = displayDate.split('/');
      const isoDate = `${year}-${month}-${day}`;
      setDate(isoDate);
      setDateError('');
    } else if (displayDate && displayDate.length > 0) {
      setDateError('Please use format: dd/mm/yyyy');
    }
  };

  // Reset date
  const resetDate = () => {
    setDate('');
    setDisplayDate('');
    setDateError('');
  };

  // converts "DD-MM-YYYY" → Date object
  const parseDMY = (dmy) => {
    const [d, m, y] = dmy.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  /* ---- FILTER DATA - SHOW ALL RECORDS BEFORE SELECTED DATE ---- */
const filteredRates = useMemo(() => {

  // 1️⃣ Currency filter
  let list = exchangeRates.filter((r) => r.currency === currency);

  // 2️⃣ Sort oldest → newest
  list = list.sort(
    (a, b) => parseDMY(a.effectiveDate) - parseDMY(b.effectiveDate)
  );

  // 3️⃣ Date filter (show rates upto selected date)
  if (date) {

    const selectedDate = new Date(date);

    list = list.filter((r) => {
      const eff = parseDMY(r.effectiveDate);
      return eff <= selectedDate; // only records before user date
    });

  }

  // 4️⃣ Financial year filter
  if (year) {
    list = list.filter(
      (r) => parseDMY(r.effectiveDate).getFullYear() <= Number(year)
    );
  }

  // 5️⃣ newest first for UI
  return list.sort(
    (a, b) => parseDMY(b.effectiveDate) - parseDMY(a.effectiveDate)
  );

}, [currency, date, year]);

  const getPdfUrl = (effectiveDate) => {
    if (!effectiveDate) return null;
    return `/pdfs/${effectiveDate}.pdf`;
  };

  /* ---- MAP TABLE DATA WITH TREND ---- */
  const tableRates = filteredRates.map((r, index, array) => {
    const prev = array[index + 1];
    return {
      date: r.effectiveDate,
      notification: r.notification || "-",
      currency: r.currency,
      import: r.importRate,
      export: r.exportRate,
      trend: getTrend(r.importRate, prev?.importRate),
      pdfUrl: r.pdfUrl,
    };
  });

  /* ---- CURRENT RATE CARD (most recent record) ---- */
  const latest = tableRates[0];

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Customs Exchange Rates History
          </h2>
          <p className="text-slate-500">
            Official exchange rates notified by CBIC under Section 14 of the
            Customs Act, 1962.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
            Filter Data (2021 – Present)
          </h3>

          <div className="grid md:grid-cols-4 gap-6 items-end">
            {/* Currency */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
              >
                <option value="AED">AED – UAE Dirham</option>
                <option value="AUD">AUD – Australian Dollar</option>
                <option value="BHD">BHD – Bahraini Dinar</option>
                <option value="CAD">CAD – Canadian Dollar</option>
                <option value="CHF">CHF – Swiss Franc</option>
                <option value="CNY">CNY – Chinese Yuan</option>
                <option value="DKK">DKK – Danish Kroner</option>
                <option value="EUR">EUR – Euro</option>
                <option value="GBP">GBP – Pound Sterling</option>
                <option value="HKD">HKD – Hongkong Dollar</option>
                <option value="JPY">JPY – Japanese Yen</option>
                <option value="KRW">KRW – Korean Won</option>
                <option value="KWD">KWD – Kuwaiti Dinar</option>
                <option value="NOK">NOK – Norwegian Kroner</option>
                <option value="NZD">NZD – New Zealand Dollar</option>
                <option value="QAR">QAR – Qatari Riyal</option>
                <option value="SAR">SAR – Saudi Arabian Riyal</option>
                <option value="SEK">SEK – Swedish Kroner</option>
                <option value="SGD">SGD – Singapore Dollar</option>
                <option value="TRY">TRY – Turkish Lira</option>
                <option value="USD">USD – US Dollar</option>
                <option value="ZAR">ZAR – South African Rand</option>
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Financial Year
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
              >
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            {/* Date - Custom with DD/MM/YYYY format */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Date (Optional)
              </label>
              <input
                type="text"
                value={displayDate}
                onChange={handleDateChange}
                onBlur={handleDateBlur}
                placeholder="dd/mm/yyyy"
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg text-sm ${
                  dateError ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {dateError && (
                <p className="text-xs text-red-500 mt-1">{dateError}</p>
              )}
            </div>

            <button
              onClick={resetDate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Reset Date
            </button>
          </div>
        </div>

        {/*Marquee example*/}
        <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-3 px-2">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Live Exchange Rates Ticker - All Currencies ({year})
            </h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {
                exchangeRates.filter((r) => {
                  const [day, month, yr] = r.effectiveDate.split("-");
                  return yr === year;
                }).length
              }{" "}
              rates in {year}
            </span>
          </div>

          <div className="relative">
            <Marquee
              speed={60}
              gradient={true}
              gradientColor={[255, 255, 255]}
              gradientWidth={50}
              pauseOnHover={true}
              className="py-2"
            >
              {exchangeRates
                .filter((r) => {
                  const [day, month, yr] = r.effectiveDate.split("-");
                  return yr === year;
                })
                .map((rate, index) => (
                  <div
                    key={`${rate.currency}-${rate.effectiveDate}-${index}`}
                    className="mx-3 w-48 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg text-gray-800">
                        {rate.currency}
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        Unit: {rate.unit}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2 truncate">
                      {rate.currencyName}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-green-50 rounded p-1">
                        <div className="text-xs text-green-600 font-medium">
                          IMP
                        </div>
                        <div className="font-bold text-gray-800">
                          ₹{rate.importRate}
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded p-1">
                        <div className="text-xs text-orange-600 font-medium">
                          EXP
                        </div>
                        <div className="font-bold text-gray-800">
                          ₹{rate.exportRate}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-[10px] text-gray-400 flex justify-between">
                      <span>{formatToDDMMYYYY(rate.effectiveDate)}</span>
                      <span className="text-blue-600">{rate.notification}</span>
                    </div>
                    {rate.pdfUrl && (
                      <a
                        href={`https://eximinq.in/pdfs/${rate.pdfUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 text-gray-400 hover:text-blue-600"
                      >
                        <FileText className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
            </Marquee>
          </div>
        </div>

        {/* Trend Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase">
                  {date ? `Rate before ${formatToDDMMYYYY(date)}` : `Current ${currency} Rate`}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-sm text-blue-200">Import</p>
                    <h3 className="text-3xl font-bold">₹{latest?.import || 'N/A'}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Export</p>
                    <h3 className="text-3xl font-bold">₹{latest?.export || 'N/A'}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-lg">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center text-sm bg-black/20 rounded p-2">
              {latest?.trend === "up" && (
                <span className="text-red-300 font-bold mr-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> Rising
                </span>
              )}
              {latest?.trend === "down" && (
                <span className="text-green-300 font-bold mr-2 flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" /> Falling
                </span>
              )}
              {latest?.trend === "stable" && (
                <span className="text-gray-200 font-bold mr-2 flex items-center">
                  <Minus className="w-4 h-4 mr-1" /> Stable
                </span>
              )}
            </div>
            {latest?.date && (
              <p className="text-[10px] text-blue-300 mt-4">
                Effective from: {formatToDDMMYYYY(latest.date)}
              </p>
            )}
          </div>

          {/* Chart section */}
         <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
             <h3 className="font-bold text-gray-700 mb-4">
               {currency} Trend (Last Records)
             </h3>
             <div className="h-32 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
               {tableRates.slice(0, 6).map((r, i) => (
                <div
                  key={i}
                  className="w-1/6 bg-blue-100 rounded-t relative"
                  style={{ height: `${60 + i * 5}%` }}
                >
                  <div className="absolute bottom-0 w-full bg-blue-500 rounded-t h-[85%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
                {currency} {date ? `(before ${formatToDDMMYYYY(date)})` : `(up to ${year})`}
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {tableRates.length} records found
              </span>
            </div>
          </div>

          {tableRates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4 text-left">Effective Date</th>
                    <th className="px-6 py-4 text-left">Notification</th>
                    <th className="px-6 py-4">Currency</th>
                    <th className="px-6 py-4 text-right">Import</th>
                    <th className="px-6 py-4 text-right">Export</th>
                    <th className="px-6 py-4 text-center">Trend</th>
                    <th className="px-6 py-4 text-center">PDF</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {tableRates.map((r, i) => (
                    <tr key={i} className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-medium">
                        {formatToDDMMYYYY(r.date)}
                      </td>
                      <td className="px-6 py-4 text-blue-600">
                        {r.notification}
                      </td>
                      <td className="px-6 py-4 font-bold">{r.currency}</td>
                      <td className="px-6 py-4 text-right font-mono font-bold">
                        {r.import}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-gray-600">
                        {r.export}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {r.trend === "up" && (
                          <TrendingUp className="w-4 h-4 text-red-600 inline" />
                        )}
                        {r.trend === "down" && (
                          <TrendingDown className="w-4 h-4 text-green-600 inline" />
                        )}
                        {r.trend === "stable" && (
                          <Minus className="w-4 h-4 text-gray-400 inline" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {r.pdfUrl ? (
                          <a
                            href={`https://eximinq.in/pdfs/${r.pdfUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer inline" />
                          </a>
                        ) : (
                          <FileText className="w-4 h-4 text-gray-300 inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No exchange rates found {date ? `before ${formatToDDMMYYYY(date)}` : ''}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
