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

// const safeExchangeRates = exchangeRates.filter(
//   (r) => r.effectiveDate && typeof r.effectiveDate === "string"
// );

// const getYear = (dateStr) => {
//   if (!dateStr) return null;
//   const parts = dateStr.split("-");
//   if (parts.length !== 3) return null;
//   return parts[2];
// };

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

//   const yearlyRates = useMemo(() => {
//   return safeExchangeRates.filter(
//     (r) => getYear(r.effectiveDate) === year
//   );
// }, [year]);

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
// const parseDMY = (dmy) => {
//   if (!dmy || typeof dmy !== "string") return null;

//   const parts = dmy.split("-");
//   if (parts.length !== 3) return null;

//   const [d, m, y] = parts.map(Number);
//   return new Date(y, m - 1, d);
// };

//   /* ---- FILTER DATA - SHOW ALL RECORDS BEFORE SELECTED DATE ---- */
// const filteredRates = useMemo(() => {

//   // 1️⃣ Currency filter
//   let list = safeExchangeRates.filter((r) => r.currency === currency);

//   // 2️⃣ Sort oldest → newest
// list.sort((a, b) => {
//   const dateA = parseDMY(a.effectiveDate);
//   const dateB = parseDMY(b.effectiveDate);

//   if (!dateA) return 1;
//   if (!dateB) return -1;

//   return dateA - dateB;
// });

//   // 3️⃣ Date filter (show rates upto selected date)
//   if (date) {

//     const selectedDate = new Date(date);

// list = list.filter((r) => {
//   const eff = parseDMY(r.effectiveDate);
//   return eff && eff <= selectedDate;
// });

//   }

//   // 4️⃣ Financial year filter
//   if (year) {
//     list = list.filter(
//       (r) => {
//   const d = parseDMY(r.effectiveDate);
//   return d && d.getFullYear() <= Number(year);
// }
//     );
//   }

//   // 5️⃣ newest first for UI
// return list.sort((a, b) => {
//   const dateA = parseDMY(a.effectiveDate);
//   const dateB = parseDMY(b.effectiveDate);

//   if (!dateA || !dateB) return 0;

//   return dateB - dateA;
// });

// }, [currency, date, year]);

//   const getPdfUrl = (effectiveDate) => {
//     if (!effectiveDate) return null;
//     return `/pdfs/${effectiveDate}.pdf`;
//   };

//   /* ---- MAP TABLE DATA WITH TREND ---- */
//   const tableRates = filteredRates.map((r, index, array) => {
//     const prev = array[index + 1];
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

//   /* ---- CURRENT RATE CARD (most recent record) ---- */
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
//         </div>

//         {/*Marquee example*/}
//         <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
//           <div className="flex justify-between items-center mb-3 px-2">
//             <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
//               Live Exchange Rates Ticker - All Currencies ({year})
//             </h3>
//             <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//               {
// safeExchangeRates.filter((r) => {
//   const parts = r.effectiveDate.split("-");
// return getYear(r.effectiveDate) === year;
// }).length
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
//               {safeExchangeRates
//   .filter((r) => {
//     const parts = r.effectiveDate.split("-");
//     const [, , yr] = parts;
//     return yr === year;
//   })
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
//                   {date ? `Rate before ${formatToDDMMYYYY(date)}` : `Current ${currency} Rate`}
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mt-3">
//                   <div>
//                     <p className="text-sm text-blue-200">Import</p>
//                     <h3 className="text-3xl font-bold">₹{latest?.import || 'N/A'}</h3>
//                   </div>
//                   <div>
//                     <p className="text-sm text-blue-200">Export</p>
//                     <h3 className="text-3xl font-bold">₹{latest?.export || 'N/A'}</h3>
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
//             {latest?.date && (
//               <p className="text-[10px] text-blue-300 mt-4">
//                 Effective from: {formatToDDMMYYYY(latest.date)}
//               </p>
//             )}
//           </div>

//           {/* Chart section */}
//          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
//              <h3 className="font-bold text-gray-700 mb-4">
//                {currency} Trend (Last Records)
//              </h3>
//              <div className="h-32 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//                {tableRates.slice(0, 6).map((r, i) => (
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
//           <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
//             <div className="flex items-center gap-3">
//               <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
//                 {currency} {date ? `(before ${formatToDDMMYYYY(date)})` : `(up to ${year})`}
//               </span>
//               <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                 {tableRates.length} records found
//               </span>
//             </div>
//           </div>

//           {tableRates.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//                   <tr>
//                     <th className="px-6 py-4 text-left">Effective Date</th>
//                     <th className="px-6 py-4 text-left">Notification</th>
//                     <th className="px-6 py-4">Currency</th>
//                     <th className="px-6 py-4 text-right">Import</th>
//                     <th className="px-6 py-4 text-right">Export</th>
//                     <th className="px-6 py-4 text-center">Trend</th>
//                     <th className="px-6 py-4 text-center">PDF</th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y">
//                   {tableRates.map((r, i) => (
//                     <tr key={i} className="hover:bg-blue-50">
//                       <td className="px-6 py-4 font-medium">
//                         {formatToDDMMYYYY(r.date)}
//                       </td>
//                       <td className="px-6 py-4 text-blue-600">
//                         {r.notification}
//                       </td>
//                       <td className="px-6 py-4 font-bold">{r.currency}</td>
//                       <td className="px-6 py-4 text-right font-mono font-bold">
//                         {r.import}
//                       </td>
//                       <td className="px-6 py-4 text-right font-mono text-gray-600">
//                         {r.export}
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         {r.trend === "up" && (
//                           <TrendingUp className="w-4 h-4 text-red-600 inline" />
//                         )}
//                         {r.trend === "down" && (
//                           <TrendingDown className="w-4 h-4 text-green-600 inline" />
//                         )}
//                         {r.trend === "stable" && (
//                           <Minus className="w-4 h-4 text-gray-400 inline" />
//                         )}
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         {r.pdfUrl ? (
//                           <a
//                             href={`https://eximinq.in/pdfs/${r.pdfUrl}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <FileText className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer inline" />
//                           </a>
//                         ) : (
//                           <FileText className="w-4 h-4 text-gray-300 inline" />
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="p-8 text-center text-gray-500">
//               No exchange rates found {date ? `before ${formatToDDMMYYYY(date)}` : ''}
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }



/*----------------------------*/

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

// Safe filter for exchange rates
const safeExchangeRates = exchangeRates.filter(
  (r) => r.effectiveDate && typeof r.effectiveDate === "string"
);

// Get year from date string (handles DD-MM-YYYY format)
const getYear = (dateStr) => {
  if (!dateStr) return null;
  
  // Handle DD-MM-YYYY format
  if (dateStr.includes('-')) {
    const parts = dateStr.split("-");
    if (parts.length !== 3) return null;
    return parts[2];
  }
  
  // Handle DD/MM/YYYY format
  if (dateStr.includes('/')) {
    const parts = dateStr.split("/");
    if (parts.length !== 3) return null;
    return parts[2];
  }
  
  return null;
};

// Parse DD-MM-YYYY or DD/MM/YYYY to Date object
const parseDMY = (dmy) => {
  if (!dmy || typeof dmy !== "string") return null;

  // Handle DD-MM-YYYY format
  if (dmy.includes('-')) {
    const parts = dmy.split("-");
    if (parts.length !== 3) return null;
    const [d, m, y] = parts.map(Number);
    // Use UTC to avoid timezone issues
    return new Date(Date.UTC(y, m - 1, d));
  }
  
  // Handle DD/MM/YYYY format
  if (dmy.includes('/')) {
    const parts = dmy.split("/");
    if (parts.length !== 3) return null;
    const [d, m, y] = parts.map(Number);
    return new Date(Date.UTC(y, m - 1, d));
  }
  
  return null;
};

// Check if a date is within the validity period
const isRateValidForDate = (rate, targetDate) => {
  if (!rate.effectiveDate) return false;
  
  const effectiveDate = parseDMY(rate.effectiveDate);
  if (!effectiveDate) return false;
  
  // Parse target date (stored in DD-MM-YYYY format)
  let targetDateObj;
  if (typeof targetDate === 'string') {
    if (targetDate.includes('-')) {
      const [day, month, year] = targetDate.split('-').map(Number);
      targetDateObj = new Date(Date.UTC(year, month - 1, day));
    } else if (targetDate.includes('/')) {
      const [day, month, year] = targetDate.split('/').map(Number);
      targetDateObj = new Date(Date.UTC(year, month - 1, day));
    } else {
      targetDateObj = new Date(targetDate);
    }
  } else {
    targetDateObj = new Date(targetDate);
  }
  
  targetDateObj.setUTCHours(0, 0, 0, 0);
  effectiveDate.setUTCHours(0, 0, 0, 0);
  
  // If there's a tillDate, check if target date is within range
  if (rate.tillDate && rate.tillDate !== "") {
    const tillDate = parseDMY(rate.tillDate);
    if (tillDate) {
      tillDate.setUTCHours(23, 59, 59, 999);
      return targetDateObj >= effectiveDate && targetDateObj <= tillDate;
    }
  }
  
  // If no tillDate, rate is valid only on the effective date
  return targetDateObj.getTime() === effectiveDate.getTime();
};

// Get the rate valid for a specific date
const getRateValidForDate = (rates, targetDate) => {
  const validRate = rates.find(rate => isRateValidForDate(rate, targetDate));
  return validRate;
};

const getTrend = (current, previous) => {
  if (!previous) return "stable";
  if (current > previous) return "up";
  if (current < previous) return "down";
  return "stable";
};

/* ---------------- DATE FORMATTING UTILITIES ---------------- */

// Format to DD/MM/YYYY for display
const formatToDDMMYYYY = (input) => {
  if (!input) return '';
  
  try {
    if (input instanceof Date) {
      const day = String(input.getDate()).padStart(2, '0');
      const month = String(input.getMonth() + 1).padStart(2, '0');
      const year = input.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    if (typeof input === 'string') {
      // Handle YYYY-MM-DD format
      if (input.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = input.split('-');
        return `${day}/${month}/${year}`;
      }
      
      // Handle DD-MM-YYYY format
      if (input.match(/^\d{2}-\d{2}-\d{4}$/)) {
        const [day, month, year] = input.split('-');
        return `${day}/${month}/${year}`;
      }
      
      // Handle DD/MM/YYYY format
      if (input.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return input;
      }
      
      // Handle D/M/YYYY format
      if (input.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
        const [day, month, year] = input.split('/');
        const paddedDay = day.padStart(2, '0');
        const paddedMonth = month.padStart(2, '0');
        return `${paddedDay}/${paddedMonth}/${year}`;
      }
    }
    
    return input;
  } catch (error) {
    console.error('Date formatting error:', error);
    return input;
  }
};

// Validate DD/MM/YYYY format
const isValidDate = (dateStr) => {
  if (!dateStr) return false;
  const pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!pattern.test(dateStr)) return false;
  
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  return date.getDate() === day && 
         date.getMonth() === month - 1 && 
         date.getFullYear() === year;
};

// Format user input for DD/MM/YYYY
const formatUserDate = (input) => {
  let formatted = input.replace(/[^\d]/g, '');
  
  if (formatted.length > 2) {
    formatted = formatted.slice(0, 2) + '/' + formatted.slice(2);
  }
  if (formatted.length > 5) {
    formatted = formatted.slice(0, 5) + '/' + formatted.slice(5, 9);
  }
  if (formatted.length > 10) {
    formatted = formatted.slice(0, 10);
  }
  
  return formatted;
};

// Get all unique years from exchange rates
const getAllYears = () => {
  const years = new Set();
  safeExchangeRates.forEach(rate => {
    const year = getYear(rate.effectiveDate);
    if (year) years.add(year);
  });
  return Array.from(years).sort().reverse();
};

/* ---------------- COMPONENT ---------------- */

export default function ExchangeRates() {
  const [currency, setCurrency] = useState("USD");
  const [year, setYear] = useState("2026");
  const [date, setDate] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [dateError, setDateError] = useState('');

  // Get available years from data
  const availableYears = getAllYears();

  // Handle custom date input change
  const handleDateChange = (e) => {
    const value = e.target.value;
    setDisplayDate(value);
    setDateError('');
    
    let formatted = formatUserDate(value);
    setDisplayDate(formatted);
    
    if (formatted.replace(/\//g, '').length === 8) {
      if (isValidDate(formatted)) {
        const [day, month, year] = formatted.split('/');
        const paddedDay = day.padStart(2, '0');
        const paddedMonth = month.padStart(2, '0');
        // Store in DD-MM-YYYY format to match your data
        const ddmmyyyy = `${paddedDay}-${paddedMonth}-${year}`;
        setDate(ddmmyyyy);
        setDateError('');
      } else {
        setDateError('Please enter a valid date (dd/mm/yyyy)');
      }
    } else if (formatted.length === 0) {
      setDate('');
      setDateError('');
    }
  };

  // Handle date input blur
  const handleDateBlur = () => {
    if (displayDate && isValidDate(displayDate)) {
      const [day, month, year] = displayDate.split('/');
      const paddedDay = day.padStart(2, '0');
      const paddedMonth = month.padStart(2, '0');
      // Store in DD-MM-YYYY format to match your data
      const ddmmyyyy = `${paddedDay}-${paddedMonth}-${year}`;
      setDate(ddmmyyyy);
      setDateError('');
    } else if (displayDate && displayDate.length > 0) {
      setDateError('Please use format: dd/mm/yyyy (e.g., 19/03/2026)');
    }
  };

  // Reset date
  const resetDate = () => {
    setDate('');
    setDisplayDate('');
    setDateError('');
  };

  /* ---- GET SINGLE RATE VALID ON SELECTED DATE ---- */
  const filteredRates = useMemo(() => {
    // Get all rates for selected currency
    const allCurrencyRates = safeExchangeRates.filter((r) => r.currency === currency);
    
    // If date is selected, find the single rate valid on that date
    if (date) {
      const validRate = getRateValidForDate(allCurrencyRates, date);
      return validRate ? [validRate] : [];
    } 
    // If no date selected, show all rates for the selected year
    else {
      if (year) {
        return allCurrencyRates.filter((r) => {
          const d = parseDMY(r.effectiveDate);
          return d && d.getFullYear() === Number(year);
        }).sort((a, b) => {
          const dateA = parseDMY(a.effectiveDate);
          const dateB = parseDMY(b.effectiveDate);
          if (!dateA || !dateB) return 0;
          return dateB - dateA;
        });
      }
      return [];
    }
  }, [currency, date, year]);

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
      unit: r.unit,
      currencyName: r.currencyName,
      tillDate: r.tillDate,
    };
  });

  /* ---- CURRENT RATE CARD ---- */
  const latest = tableRates[0];

  // Get unique currencies for the marquee
  const marqueeRates = useMemo(() => {
    const ratesMap = new Map();
    
    safeExchangeRates
      .filter((r) => {
        const rateYear = getYear(r.effectiveDate);
        return rateYear === year;
      })
      .sort((a, b) => parseDMY(b.effectiveDate) - parseDMY(a.effectiveDate))
      .forEach(rate => {
        if (!ratesMap.has(rate.currency)) {
          ratesMap.set(rate.currency, rate);
        }
      });
    return Array.from(ratesMap.values());
  }, [year]);

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
                {availableYears.map(yr => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
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

        {/* Marquee Ticker */}
        <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-3 px-2">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Live Exchange Rates Ticker - All Currencies ({year})
            </h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {marqueeRates.length} rates in {year}
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
              {marqueeRates.map((rate, index) => (
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
                  {date ? `Rate on ${formatToDDMMYYYY(date)}` : `Current ${currency} Rate`}
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
                {latest.tillDate && latest.tillDate !== "" && ` to ${formatToDDMMYYYY(latest.tillDate)}`}
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

        {/* Data Table - Shows SINGLE rate valid for the selected date */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Exchange Rate Archive</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
                {currency} {date ? `(valid on ${formatToDDMMYYYY(date)})` : `(${year})`}
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {tableRates.length} {tableRates.length === 1 ? 'record found' : 'records found'}
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
                            className="inline-block"
                          >
                            <FileText className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
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
              No exchange rates found {date ? `valid on ${formatToDDMMYYYY(date)}` : `for ${year}`}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}