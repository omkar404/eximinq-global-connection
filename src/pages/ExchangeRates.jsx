/*----------------------------*/
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import Marquee from "react-fast-marquee";
import {
  DollarSign,
  Filter,
  TrendingUp,
  TrendingDown,
  Minus,
  FileText,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  Clock3,
  Database,
  Factory,
  FileBadge,
  Globe2,
  Landmark,
  ShieldCheck,
  Ship,
  Warehouse,
} from "lucide-react";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";
import { exchangeRates } from "../data/exchangeRates";

/* ---------------- UTILITIES ---------------- */

const API_BASE_URL = process.env.REACT_APP_API_URL || "";
const CANONICAL_URL = "https://eximinq.in/foreign-trade-policy/Customsrates/";
const CBIC_EXCHANGE_RATE_URL = "https://www.cbic.gov.in/entities/cbic-content-mst/MTcyNDQ%3D";
const CBIC_TAX_INFORMATION_URL = "https://taxinformation.cbic.gov.in/";

const targetKeywords = [
  "Customs exchange rates",
  "CBIC exchange rates",
  "Customs notified exchange rates",
  "Import exchange rate",
  "Export exchange rate",
  "Customs USD rate today",
  "Section 14 Customs Act exchange rate",
  "CBIC exchange rate notification PDF",
  "Historical customs exchange rates India",
  "Customs currency rates for Bill of Entry",
];

const highIntentServiceLinks = [
  { label: "IEC Registration & Annual Update", href: "/services/import-export-code/", icon: FileBadge, tone: "blue" },
  { label: "AD Code Registration on ICEGATE", href: "/services/ad-code-registration/", icon: Landmark, tone: "indigo" },
  { label: "ICEGATE Registration for Importers & Exporters", href: "/services/icegate-registration/", icon: Database, tone: "cyan" },
  { label: "Certificate of Origin Consultant", href: "/services/certificate-of-origin/", icon: BadgeCheck, tone: "emerald" },
  { label: "Advance Authorisation Consultant", href: "/services/advance-authorisation/", icon: FileText, tone: "violet" },
  { label: "EPCG Scheme Consultant", href: "/services/epcg-scheme/", icon: Factory, tone: "amber" },
  { label: "e-RCMC Registration Consultant", href: "/services/e-rcmc-registration/", icon: Globe2, tone: "teal" },
  { label: "Duty Drawback Consultant", href: "/services/duty-drawback/", icon: Banknote, tone: "green" },
  { label: "IGST Export Refund Consultant", href: "/services/igst-refund/", icon: Banknote, tone: "rose" },
  { label: "SCOMET Licence Consultant", href: "/services/scomet-licensing/", icon: ShieldCheck, tone: "slate" },
  { label: "MOOWR Scheme Consultant", href: "/services/moowr-scheme/", icon: Building2, tone: "orange" },
  { label: "Factory Stuffing & Self-Sealing Permission", href: "/services/factory-stuffing/", icon: Ship, tone: "sky" },
  { label: "Customs Warehouse Licence Consultant", href: "/services/warehouse-license/", icon: Warehouse, tone: "yellow" },
  { label: "SVB Registration & Related-Party Valuation", href: "/services/svb-registration/", icon: Landmark, tone: "purple" },
  { label: "Export-Import Compliance Audit", href: "/services/compliance-audit/", icon: ClipboardCheck, tone: "blue" },
  { label: "Interest Equalisation Scheme Consultant", href: "/services/interest-equalisation-scheme/", icon: Banknote, tone: "emerald" },
  { label: "Import Management Registration", href: "/services/import-management-registration/", icon: Database, tone: "cyan" },
  { label: "EDPMS Closure & e-BRC Support", href: "/services/edpms-ebrc/", icon: BadgeCheck, tone: "indigo" },
  { label: "Free Sale Certificate Consultant", href: "/services/free-sale-certificate/", icon: Globe2, tone: "teal" },
  { label: "Export Obligation Period Extension", href: "/services/eop-extension/", icon: Clock3, tone: "amber" },
];

const faqItems = [
  {
    question: "What are Customs exchange rates in India?",
    answer:
      "Customs exchange rates are the notified currency conversion rates used by Indian Customs to determine assessable value for imported and exported goods when invoice currency is not INR.",
  },
  {
    question: "Who notifies Customs exchange rates?",
    answer:
      "The Central Board of Indirect Taxes and Customs (CBIC) notifies Customs exchange rates for major foreign currencies under Section 14 of the Customs Act, 1962.",
  },
  {
    question: "Are import and export exchange rates different?",
    answer:
      "Yes. CBIC notifications usually provide separate import and export rates for each currency, and trade documents should use the applicable rate for the relevant import or export transaction.",
  },
  {
    question: "How often are CBIC exchange rates updated?",
    answer:
      "CBIC generally issues exchange rate notifications periodically and may revise them whenever required. Importers, exporters, CHA teams, and finance teams should verify the applicable notification for the shipment date.",
  },
  {
    question: "Can I download the official CBIC exchange rate notification PDF?",
    answer:
      "Yes. Where available, the archive table provides a PDF link for the corresponding CBIC exchange rate notification so users can keep a compliance copy with their Bill of Entry, Shipping Bill, or audit records.",
  },
];

const fallbackExchangeRates = exchangeRates.filter(
  (r) => r.effectiveDate && typeof r.effectiveDate === "string"
);

const normalizeYear = (year) => {
  const numericYear = Number(year);
  if (!Number.isInteger(numericYear)) return null;
  return numericYear < 100 ? 2000 + numericYear : numericYear;
};

const getRateKey = (rate) =>
  [rate.notification, rate.effectiveDate, rate.currency]
    .map((value) => String(value || "").trim().toUpperCase())
    .join("::");

const mergeExchangeRates = (apiRates, authoritativeRates) => {
  const mergedRates = new Map();

  apiRates.forEach((rate) => mergedRates.set(getRateKey(rate), rate));
  authoritativeRates.forEach((rate) => {
    const key = getRateKey(rate);
    mergedRates.set(key, { ...mergedRates.get(key), ...rate });
  });

  return Array.from(mergedRates.values());
};

// Get year from date string (handles DD-MM-YYYY format)
const getYear = (dateStr) => {
  if (!dateStr) return null;
  const parts = dateStr.split(/[/-]/);
  if (parts.length !== 3) return null;
  const normalizedYear = normalizeYear(parts[2]);
  return normalizedYear ? String(normalizedYear) : null;
};

// Parse DD-MM-YYYY or DD/MM/YYYY to Date object
const parseDMY = (dmy) => {
  if (!dmy || typeof dmy !== "string") return null;
  const parts = dmy.split(/[/-]/);
  if (parts.length !== 3) return null;

  const [day, month, rawYear] = parts.map(Number);
  const year = normalizeYear(rawYear);
  if (!year || !day || !month) return null;

  const parsedDate = new Date(Date.UTC(year, month - 1, day));
  if (
    parsedDate.getUTCFullYear() !== year ||
    parsedDate.getUTCMonth() !== month - 1 ||
    parsedDate.getUTCDate() !== day
  ) {
    return null;
  }

  return parsedDate;
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

  // If no tillDate, the latest rate stays valid from WEF onward.
  return targetDateObj >= effectiveDate;
};

// Get the rate valid for a specific date
const getRateValidForDate = (rates, targetDate) => {
  const validRate = [...rates]
    .sort((a, b) => {
      const dateA = parseDMY(a.effectiveDate);
      const dateB = parseDMY(b.effectiveDate);
      if (!dateA || !dateB) return 0;
      return dateB - dateA;
    })
    .find((rate) => isRateValidForDate(rate, targetDate));
  return validRate;
};

const getTrend = (current, previous) => {
  if (!previous) return "stable";
  if (current > previous) return "up";
  if (current < previous) return "down";
  return "stable";
};

/* ---------------- DATE FORMATTING UTILITIES ---------------- */

// Format any supported input to DD-MM-YYYY for display
const formatToDDMMYYYY = (input) => {
  if (!input) return '';

  try {
    if (input instanceof Date) {
      const day = String(input.getDate()).padStart(2, '0');
      const month = String(input.getMonth() + 1).padStart(2, '0');
      const year = input.getFullYear();
      return `${day}-${month}-${year}`;
    }

    if (typeof input === 'string') {
      // Handle YYYY-MM-DD format (e.g. from <input type="date">)
      if (input.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = input.split('-');
        return `${day}-${month}-${year}`;
      }

      // Handle DD-MM-YYYY format (already correct)
      if (input.match(/^\d{2}-\d{2}-\d{4}$/)) {
        return input;
      }

      // Handle DD-MM-YY and DD/MM/YY formats used by recent records
      if (input.match(/^\d{1,2}[/-]\d{1,2}[/-]\d{2}$/)) {
        const [day, month, rawYear] = input.split(/[/-]/);
        const year = normalizeYear(rawYear);
        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
      }

      // Handle DD/MM/YYYY format
      if (input.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        const [day, month, year] = input.split('/');
        return `${day}-${month}-${year}`;
      }

      // Handle D/M/YYYY or D-M-YYYY (single-digit day/month) format
      if (input.match(/^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/)) {
        const separator = input.includes('/') ? '/' : '-';
        const [day, month, year] = input.split(separator);
        const paddedDay = day.padStart(2, '0');
        const paddedMonth = month.padStart(2, '0');
        return `${paddedDay}-${paddedMonth}-${year}`;
      }
    }

    return input;
  } catch (error) {
    console.error('Date formatting error:', error);
    return input;
  }
};

// Get all unique years from exchange rates
const getAllYears = (rates) => {
  const years = new Set();
  rates.forEach((rate) => {
    const year = getYear(rate.effectiveDate);
    if (year) years.add(year);
  });
  return Array.from(years).sort().reverse();
};

const getDownloadHref = (rate) => {
  if (rate.downloadUrl) {
    return rate.downloadUrl.startsWith("http")
      ? rate.downloadUrl
      : `${API_BASE_URL}${rate.downloadUrl}`;
  }

  if (rate.notification) {
    return `${API_BASE_URL}/api/exchange-rates/download?notification=${encodeURIComponent(
      rate.notification
    )}`;
  }

  if (rate.pdfUrl) {
    return rate.pdfUrl.startsWith("http") ? rate.pdfUrl : `/pdfs/${rate.pdfUrl}`;
  }

  return null;
};

const dmyToIso = (dmy) => {
  if (!dmy || typeof dmy !== "string") return "";
  const separator = dmy.includes("-") ? "-" : "/";
  const parts = dmy.split(separator);
  if (parts.length !== 3) return "";
  const [day, month, year] = parts;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const isoToDmy = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return "";
  return `${day}-${month}-${year}`;
};

// The native <input type="date"> element always requires YYYY-MM-DD
// internally, regardless of what format we display to the user.
const getTodayIso = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/* ---------------- COMPONENT ---------------- */

export default function ExchangeRates() {
  const [apiRates, setApiRates] = useState([]);
  const ratesData = useMemo(
    () => mergeExchangeRates(apiRates, fallbackExchangeRates),
    [apiRates]
  );
  // Default currency filter is "All" (empty) so the Archive table shows
  // every currency out of the box, same as the original behavior.
  // The Snapshot card still defaults to USD (see `latest` below) even
  // when no currency is explicitly selected.
  const [currency, setCurrency] = useState("");
  const [year, setYear] = useState("");
  // Default Search Date is always today's actual date
  const [date, setDate] = useState(getTodayIso());
  // Which chart bar is currently hovered/tapped (index + its bounding
  // rect), used to position a page-level tooltip via a portal so it's
  // never clipped by the chart's scroll container and needs no
  // reserved empty space.
  const [activeBar, setActiveBar] = useState(null);

  const archiveRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadExchangeRates = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/exchange-rates?refresh=${Date.now()}`,
          {
            cache: "no-store",
          }
        );
        if (!response.ok) {
          return;
        }

        const payload = await response.json();
        if (isMounted && payload.success && Array.isArray(payload.data) && payload.data.length) {
          setApiRates(payload.data);
        }
      } catch (error) {
        console.error("Exchange rates API fallback in use:", error);
      }
    };

    loadExchangeRates();

    return () => {
      isMounted = false;
    };
  }, []);

  const safeExchangeRates = useMemo(
    () => ratesData.filter((r) => r.effectiveDate && typeof r.effectiveDate === "string"),
    [ratesData]
  );

  // Get available years from data
  const availableYears = useMemo(() => getAllYears(safeExchangeRates), [safeExchangeRates]);

  // Reset filters back to defaults: All currencies, no year filter, today's date
  const resetDate = () => {
    setCurrency("");
    setYear("");
    setDate(getTodayIso());
  };

  // Scroll the Exchange Rate Archive into view, keeping whatever
  // Search Date and Currency the user has already picked (does NOT
  // reset the date to today).
  const goToToday = () => {
    archiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ---- GET RATES VALID ON SELECTED DATE ---- */
  const filteredRates = useMemo(() => {
    const dmyDate = isoToDmy(date);
    if (!dmyDate) {
      return [];
    }

    // Group by currency, then pick the rate valid on the selected date
    // for each currency.
    let validRates = Array.from(
      safeExchangeRates.reduce((ratesByCurrency, rate) => {
        const currencyCode = String(rate.currency || "").trim();
        if (!currencyCode) {
          return ratesByCurrency;
        }

        if (!ratesByCurrency.has(currencyCode)) {
          ratesByCurrency.set(currencyCode, []);
        }

        ratesByCurrency.get(currencyCode).push(rate);
        return ratesByCurrency;
      }, new Map()).values()
    )
      .map((currencyRates) => getRateValidForDate(currencyRates, dmyDate))
      .filter(Boolean);

    // Currency dropdown now filters the Archive table too — if a
    // currency is selected, only that currency's row is kept.
    if (currency) {
      validRates = validRates.filter(
        (rate) => String(rate.currency || "").toUpperCase() === currency.toUpperCase()
      );
    }

    if (year) {
      validRates = validRates.filter((rate) => getYear(rate.effectiveDate) === year);
    }

    return validRates.sort((a, b) => {
      const dateA = parseDMY(a.effectiveDate);
      const dateB = parseDMY(b.effectiveDate);

      if (!dateA || !dateB) return 0;
      if (dateB.getTime() !== dateA.getTime()) {
        return dateB - dateA;
      }

      return String(a.currency || "").localeCompare(String(b.currency || ""));
    });
  }, [currency, date, safeExchangeRates, year]);

  /* ---- MAP TABLE DATA WITH TREND ---- */
  const tableRates = filteredRates.map((r, index, array) => {
    const prev = array[index + 1];
    return {
      date: r.effectiveDate,
      notification: r.notification || "-",
      notificationDate: r.notificationDate || "",
      currency: r.currency,
      import: r.importRate,
      export: r.exportRate,
      trend: getTrend(r.importRate, prev?.importRate),
      pdfUrl: r.pdfUrl,
      downloadUrl: r.downloadUrl,
      unit: r.unit,
      currencyName: r.currencyName,
      tillDate: r.tillDate,
    };
  });

  /* ---- CURRENT RATE CARD ----
     When no currency is selected (default "All" state) the Snapshot
     card still defaults to showing USD. Once the user picks a specific
     currency, tableRates is already filtered to just that currency, so
     this lookup naturally follows the selection. */
  const snapshotCurrency = currency || "USD";
  const latest =
    tableRates.find((r) => r.currency === snapshotCurrency) || tableRates[0];

  const latestNotification = useMemo(() => {
    return [...safeExchangeRates]
      .filter((rate) => rate.effectiveDate)
      .sort((a, b) => {
        const dateA = parseDMY(a.effectiveDate);
        const dateB = parseDMY(b.effectiveDate);
        if (!dateA || !dateB) return 0;
        return dateB - dateA;
      })[0];
  }, [safeExchangeRates]);

  const latestEffectiveDate = latestNotification?.effectiveDate
    ? formatToDDMMYYYY(latestNotification.effectiveDate)
    : "the latest available CBIC notification";

  const uniqueCurrenciesCount = useMemo(
    () => new Set(safeExchangeRates.map((rate) => rate.currency).filter(Boolean)).size,
    [safeExchangeRates]
  );

  const structuredData = useMemo(() => {
    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: "Customs Exchange Rates India - CBIC Notified Import Export Rates",
      description:
        "Search CBIC notified Customs exchange rates for imports and exports, download notification PDFs, and review historical currency rates for Indian customs compliance.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        name: "EXIMINQ",
        url: "https://eximinq.in/",
      },
      about: [
        "Customs exchange rates",
        "CBIC exchange rates",
        "Import export exchange rates",
        "Customs Act Section 14",
      ],
      dateModified: new Date().toISOString().split("T")[0],
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eximinq.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Foreign Trade Policy",
          item: "https://eximinq.in/foreign-trade-policy/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Customs Exchange Rates",
          item: CANONICAL_URL,
        },
      ],
    };

    const dataset = {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "CBIC Customs Exchange Rates Archive",
      description:
        "Historical CBIC Customs notified exchange rates for import and export valuation in India, including currency, effective date, notification number, and PDF references where available.",
      url: CANONICAL_URL,
      temporalCoverage: `2024/${new Date().getFullYear()}`,
      keywords: targetKeywords.join(", "),
      creator: {
        "@type": "Organization",
        name: "EXIMINQ",
        url: "https://eximinq.in/",
      },
      isAccessibleForFree: true,
    };

    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    return [webPage, breadcrumb, dataset, faq];
  }, []);

  // Marquee ticker always shows every currency's rate valid on the
  // selected Search Date (defaults to today), one row per currency —
  // this stays independent of the Currency dropdown by design.
  const marqueeRates = useMemo(() => {
    const dmyDate = isoToDmy(date);
    if (!dmyDate) return [];

    const ratesByCurrency = safeExchangeRates.reduce((map, rate) => {
      const code = String(rate.currency || "").trim();
      if (!code) return map;
      if (!map.has(code)) map.set(code, []);
      map.get(code).push(rate);
      return map;
    }, new Map());

    return Array.from(ratesByCurrency.values())
      .map((currencyRates) => getRateValidForDate(currencyRates, dmyDate))
      .filter(Boolean)
      .sort((a, b) => String(a.currency).localeCompare(String(b.currency)));
  }, [safeExchangeRates, date]);

  return (
    <>
      <Helmet>
        <title>Customs Exchange Rates India | CBIC Import Export Rates & PDFs</title>
        <meta
          name="description"
          content="Check CBIC notified Customs exchange rates for imports and exports in India. Search current and historical rates, view notification dates, and download official PDFs."
        />
        <meta
          name="keywords"
          content="Customs exchange rates, CBIC exchange rates, Customs notified exchange rates, import exchange rate, export exchange rate, customs USD rate today, Section 14 Customs Act exchange rate"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Customs Exchange Rates India | CBIC Import Export Rates" />
        <meta
          property="og:description"
          content="Search CBIC notified Customs exchange rates, historical import/export currency rates, notification PDFs, and compliance references."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Customs Exchange Rates India | CBIC Import Export Rates" />
        <meta
          name="twitter:description"
          content="Check latest and historical CBIC Customs exchange rates for import and export valuation in India."
        />
        {structuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-8 flex-grow">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.2em] mb-2">
            CBIC notified customs exchange rates
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Customs Exchange Rates India: CBIC Import &amp; Export Currency Rates
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl">
            Search the latest available CBIC Customs exchange rates for import and export
            valuation, compare historical rates, and download notification PDFs used for
            Bills of Entry, Shipping Bills, duty calculation, GST valuation, and trade
            compliance under Section 14 of the Customs Act, 1962.
          </p>
        </div>

        <section className="grid lg:grid-cols-3 gap-6 mb-8" aria-label="Customs exchange rate overview">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Latest CBIC Customs Notified Exchange Rates
            </h2>
            <p className="text-slate-600 mb-4">
              This archive is designed for importers, exporters, CHA/customs brokers,
              freight forwarders, finance teams, and compliance teams who need fast access
              to Customs notified exchange rates for foreign-currency invoices. Use the
              date, currency, and year filters below to identify the applicable import rate
              or export rate for a shipment date.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-blue-700 uppercase">Latest effective date</p>
                <p className="text-xl font-bold text-slate-900 mt-1">{latestEffectiveDate}</p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="text-xs font-bold text-emerald-700 uppercase">Currencies covered</p>
                <p className="text-xl font-bold text-slate-900 mt-1">{uniqueCurrenciesCount || "22"}+</p>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
                <p className="text-xs font-bold text-amber-700 uppercase">Documents</p>
                <p className="text-xl font-bold text-slate-900 mt-1">PDF notifications</p>
              </div>
            </div>
          </div>

          <aside className="bg-slate-900 text-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-3">High-intent searches covered</h2>
            <div className="flex flex-wrap gap-2">
              {targetKeywords.map((keyword) => (
                <span key={keyword} className="text-xs bg-white/10 border border-white/15 rounded-full px-3 py-1">
                  {keyword}
                </span>
              ))}
            </div>
          </aside>
        </section>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
            Filter Customs Exchange Rate Data (2024 - Present)
          </h2>

          <div className="grid md:grid-cols-4 gap-6 items-end">
            {/* Currency */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Currency <span className="normal-case font-normal text-gray-400">(filters Snapshot &amp; Archive)</span>
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">All currencies</option>
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
                <option value="">Select year</option>
                {availableYears.map(yr => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            {/* Date Picker + Go to Today button */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Search Date
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={goToToday}
                  title="View the Archive for the selected currency & date"
                  className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 rounded-lg transition-colors"
                >
                  Go
                </button>
              </div>
            </div>

            <button
              onClick={resetDate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Reset Filters
            </button>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-3 px-2">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Live Exchange Rates Ticker - All Currencies
              {date ? ` (as on ${formatToDDMMYYYY(date)})` : ""}
            </h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {marqueeRates.length} rates valid {date ? `on ${formatToDDMMYYYY(date)}` : ""}
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
                  {date
                    ? `${snapshotCurrency} rate on ${formatToDDMMYYYY(date)}`
                    : "Select a date"}
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
                {latest.notificationDate
                  ? `Notification Date: ${formatToDDMMYYYY(latest.notificationDate)} | `
                  : ""}
                Effective from: {formatToDDMMYYYY(latest.date)}
                {latest.tillDate && latest.tillDate !== "" && ` to ${formatToDDMMYYYY(latest.tillDate)}`}
              </p>
            )}
          </div>

          {/* Chart section — follows the Currency + Year filters (uses
              tableRates, same data as the Archive table). Selecting a
              currency/year narrows this chart down just like the
              Archive. Hover/tap a bar to see its detail card, rendered
              via a portal so the chart itself stays compact and the
              tooltip is never clipped or cut off at the edges. */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-700">
                Snapshot Rates — {currency ? currency : "All Currencies"}
                {year ? ` (${year})` : ""}
                {date ? ` (${formatToDDMMYYYY(date)})` : ""}
              </h3>
              <span className="text-xs text-gray-400">{tableRates.length} {tableRates.length === 1 ? "currency" : "currencies"}</span>
            </div>

            <div className="overflow-x-auto pb-1">
              <div className="h-20 flex items-end gap-2 px-2 border-b border-l border-gray-200 min-w-max">
                {tableRates.map((r, i) => (
                  <div
                    key={i}
                    className="relative w-7 h-full flex flex-col items-center justify-end shrink-0"
                    onMouseEnter={(e) =>
                      setActiveBar({ index: i, rect: e.currentTarget.getBoundingClientRect() })
                    }
                    onMouseLeave={() => setActiveBar(null)}
                    onClick={(e) =>
                      setActiveBar((current) =>
                        current && current.index === i
                          ? null
                          : { index: i, rect: e.currentTarget.getBoundingClientRect() }
                      )
                    }
                  >
                    <div
                      className="w-full bg-blue-100 rounded-t relative cursor-pointer"
                      style={{ height: `${45 + (i % 8) * 6}%` }}
                    >
                      <div className="absolute bottom-0 w-full bg-blue-500 rounded-t h-[85%]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Currency code labels, aligned under each bar */}
              <div className="flex gap-2 px-2 mt-1 min-w-max">
                {tableRates.map((r, i) => (
                  <span
                    key={i}
                    className="w-7 shrink-0 text-center text-[10px] font-medium text-gray-500 truncate"
                  >
                    {r.currency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bar detail tooltip — rendered at the document root via a
            portal so it always sits on top and is never clipped by
            the chart's horizontal scroll container. */}
        {activeBar &&
          tableRates[activeBar.index] &&
          createPortal(
            (() => {
              const r = tableRates[activeBar.index];
              const rect = activeBar.rect;
              const gap = 8;
              const tooltipHalfWidth = 72; // half of the 144px (w-36) tooltip
              let left = rect.left + rect.width / 2;
              let translateX = "-50%";
              if (left - tooltipHalfWidth < 8) {
                left = rect.left;
                translateX = "0%";
              } else if (left + tooltipHalfWidth > window.innerWidth - 8) {
                left = rect.right;
                translateX = "-100%";
              }

              return (
                <div
                  style={{
                    position: "fixed",
                    top: rect.top - gap,
                    left,
                    transform: `translate(${translateX}, -100%)`,
                    zIndex: 9999,
                  }}
                  className="w-36 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="flex">
                    <div className="w-1 bg-teal-400 shrink-0" />
                    <div className="py-2 pr-2 pl-1.5 flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-[11px] mb-1 truncate">
                        {r.currency} {r.currencyName ? `– ${r.currencyName}` : ""}
                      </p>
                      <div className="space-y-0.5 text-[10px] leading-tight">
                        <p className="text-cyan-500 font-medium truncate">
                          Import : ₹{r.import}
                        </p>
                        <p className="text-red-500 font-medium truncate">
                          Export : ₹{r.export}
                        </p>
                        <p className="text-emerald-500 font-medium truncate">
                          Unit : {r.unit}
                        </p>
                        <p className="text-blue-500 font-medium truncate">
                          Eff : {formatToDDMMYYYY(r.date)}
                        </p>
                        <p className="text-purple-500 font-medium truncate">
                          Notif : {r.notification || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })(),
            document.body
          )}

        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            How to Use CBIC Exchange Rates for Import and Export Valuation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
              <h3 className="font-bold text-slate-800 mb-2">For imports and Bill of Entry filing</h3>
              <p>
                Select the Bill of Entry date or shipment assessment date, choose the
                invoice currency, and use the applicable CBIC import exchange rate for
                assessable value and customs duty calculation. Always keep the matching
                notification PDF with import documentation for audit readiness.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">For exports and Shipping Bill filing</h3>
              <p>
                For export invoices raised in foreign currency, use the notified export
                exchange rate that applies to the Shipping Bill date. The archive helps
                exporters reconcile FOB value, export incentives, drawback, RoDTEP records,
                e-BRC value, and GST documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Data Table - Shows SINGLE rate valid for the selected date,
            filtered by the selected currency (and year, if chosen) */}
        <div ref={archiveRef} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Customs Exchange Rate Archive</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 bg-white border px-3 py-1 rounded-full">
                {currency ? `${currency} only` : "All currencies"} {date ? `(valid on ${formatToDDMMYYYY(date)})` : ""}
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {tableRates.length} {tableRates.length === 1 ? 'record found' : 'records found'}
              </span>
            </div>
          </div>

          {tableRates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Historical CBIC Customs exchange rates for import and export valuation,
                  with notification date, effective date, currency, import rate, export
                  rate, trend, and notification PDF download.
                </caption>
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4 text-left">Notification Date</th>
                    <th className="px-6 py-4 text-left">Effective Date</th>
                    <th className="px-6 py-4 text-left">Notification</th>
                    <th className="px-6 py-4">Currency</th>
                    <th className="px-6 py-4 text-right">Import</th>
                    <th className="px-6 py-4 text-right">Export</th>
                    <th className="px-6 py-4 text-center">Trend</th>
                    <th className="px-6 py-4 text-center">Download</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {tableRates.map((r, i) => (
                    <tr key={i} className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-medium">
                        {r.notificationDate ? formatToDDMMYYYY(r.notificationDate) : "-"}
                      </td>
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
                        {getDownloadHref(r) ? (
                          <a
                            href={getDownloadHref(r)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download CBIC exchange rate notification PDF ${r.notification} for ${r.currency}`}
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
              No exchange rates found {date ? `valid on ${formatToDDMMYYYY(date)}` : ""}
            </div>
          )}
        </div>

        <section className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Official References and Related Import Export Resources
            </h2>
            <p className="text-slate-600 mb-4">
              EXIMINQ keeps this page focused on practical trade usage while linking to
              authoritative government sources and related compliance tools. For high-value
              or time-sensitive shipments, compare the displayed rate with the latest CBIC
              notification before filing.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href={CBIC_EXCHANGE_RATE_URL} target="_blank" rel="noopener noreferrer">
                Official CBIC Exchange Rate Notifications
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href={CBIC_TAX_INFORMATION_URL} target="_blank" rel="noopener noreferrer">
                CBIC Tax Information Portal
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/foreign-trade-policy/regulatory-updates/">
                DGFT, CBIC &amp; GST Regulatory Updates
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/tools/duty-calculator-finder/">
                Customs Duty Calculator
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/services/bill-of-entry-filing">
                Bill of Entry Filing Support
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/services/shipping-bill-filing">
                Shipping Bill Filing Support
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/services/cha-services">
                CHA &amp; Customs Broker Services
              </a>
              <a className="rounded-lg border border-gray-200 p-3 hover:border-blue-300 hover:bg-blue-50 transition" href="/foreign-trade-policy/">
                Foreign Trade Policy Resources
              </a>
            </div>
          </div>

          <aside className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">E-E-A-T Compliance Notes</h2>
            <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">
              <li>Rates are mapped with notification number, notification date, and effective date.</li>
              <li>PDF links are provided wherever the source notification file is available.</li>
              <li>Content is written for customs valuation, import-export compliance, and audit use cases.</li>
              <li>Official CBIC references are linked for independent verification.</li>
            </ul>
          </aside>
        </section>

        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Customs Exchange Rates FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-bold text-slate-800 mb-1">{item.question}</h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
             
              <p className="mt-2 text-blue-100">
                Explore EXIMINQ Strategic Solutions for customs, DGFT, Import-export Compliance, Licensing, and Incentive Support.
              </p>
            </div>
            <a
              href="https://eximinq.in/strategic-solutions"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              aria-label="Explore EXIMINQ Strategic Solutions"
            >
              Explore Strategic Solutions
            </a>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Trending Searches Covered</h2>
          <p className="mt-3 max-w-5xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore EXIMINQ’s frequently searched DGFT, Customs, export-incentive, registration, and trade-compliance services. Select any service to review eligibility, documents, process, and timelines.
          </p>

          <nav className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" aria-label="Popular import export service searches">
            {highIntentServiceLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[64px] items-center rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium leading-5 text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`${label} - opens in a new tab`}
              >
                {label}
              </a>
            ))}
          </nav>
        </section>
      </main>

      <Footer />
    </>
  );
}
