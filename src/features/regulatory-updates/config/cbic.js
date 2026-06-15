export const CBIC_NAV = [
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

export const CBIC_DEFAULT_TAB = "acts";

export const CBIC_NOTIFICATION_CATEGORY_MAP = {
  "notifications-tariff": "tariff",
  "notifications-antiDumping": "antiDumping",
  "notifications-cvd": "cvd",
  "notifications-nonTariff": "nonTariff",
  "notifications-safeguards": "safeguards",
};

