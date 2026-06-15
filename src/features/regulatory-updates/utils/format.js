export function parseDisplayDate(raw) {
  if (!raw) return "-";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateDDMMYYYY(raw) {
  if (!raw) return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
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
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "";
  const year = parsed.getFullYear();
  const month = parsed.getMonth();
  const startYear = month >= 3 ? year : year - 1;
  const endYear = String(startYear + 1).slice(-2);
  return `${startYear}-${endYear}`;
}

