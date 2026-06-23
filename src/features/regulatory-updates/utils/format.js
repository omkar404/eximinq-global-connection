function parseKnownDate(raw) {
  if (!raw) return null;

  if (raw instanceof Date) {
    return Number.isNaN(raw.getTime()) ? null : raw;
  }

  if (typeof raw === "string") {
    const trimmed = raw.trim();

    const ddmmyyyy = trimmed.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
    if (ddmmyyyy) {
      const [, day, month, year] = ddmmyyyy;
      const parsed = new Date(Number(year), Number(month) - 1, Number(day));
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    const yyyymmdd = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (yyyymmdd) {
      const [, year, month, day] = yyyymmdd;
      const parsed = new Date(Number(year), Number(month) - 1, Number(day));
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
  }

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function parseDisplayDate(raw) {
  if (!raw) return "-";
  const parsed = parseKnownDate(raw);
  if (!parsed) return raw;
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateDDMMYYYY(raw) {
  if (!raw) return "";
  const parsed = parseKnownDate(raw);
  if (!parsed) return raw;
  return parsed.toLocaleDateString("en-GB");
}

export function normalizeFinancialYear(value) {
  if (!value) return "";
  const text = String(value).trim();
  if (/^\d{4}-\d{2}$/.test(text)) return text;
  if (/^\d{4}-\d{4}$/.test(text)) {
    const [start, end] = text.split("-");
    return `${start}-${end.slice(-2)}`;
  }
  return text;
}

export function deriveFinancialYearFromDate(raw) {
  if (!raw) return "";
  const parsed = parseKnownDate(raw);
  if (!parsed) return "";
  const year = parsed.getFullYear();
  const month = parsed.getMonth();
  const startYear = month >= 3 ? year : year - 1;
  const endYear = String(startYear + 1).slice(-2);
  return `${startYear}-${endYear}`;
}
