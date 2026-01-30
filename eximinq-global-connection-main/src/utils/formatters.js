// Format currency like: ₹ 5,000
export const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return "₹ 0";

  return "₹ " + amount.toLocaleString("en-IN");
};

// Format text to Title Case
export const toTitleCase = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Format category labels (ex: "noc/license" → "NOC / License")
export const formatCategory = (category) => {
  if (!category) return "";
  return category
    .replace(/-/g, " ")
    .replace(/\//g, " / ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
