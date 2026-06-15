export const GST_NAV = [
  { label: "Acts", key: "acts" },
  { label: "Rules", key: "rules" },
  { label: "Forms", key: "forms" },
  {
    label: "Notifications",
    key: "notifications",
    children: [
      { label: "Central Tax", key: "notifications-centralTax" },
      { label: "Central Tax (Rate)", key: "notifications-centralTaxRate" },
      { label: "Integrated Tax", key: "notifications-integratedTax" },
      { label: "Integrated Tax (Rate)", key: "notifications-integratedTaxRate" },
      { label: "Union Territory Tax", key: "notifications-unionTerritoryTax" },
      { label: "Union Territory Tax (Rate)", key: "notifications-unionTerritoryTaxRate" },
      { label: "Compensation Cess", key: "notifications-compensationCess" },
      { label: "Compensation Cess (Rate)", key: "notifications-compensationCessRate" },
    ],
  },
  { label: "Circulars", key: "circulars" },
  { label: "Instructions / Guidelines", key: "instructions" },
  { label: "Orders", key: "orders" },
];

export const GST_DEFAULT_TAB = "acts";

export const GST_NOTIFICATION_CATEGORY_MAP = {
  "notifications-centralTax": "centralTax",
  "notifications-centralTaxRate": "centralTaxRate",
  "notifications-integratedTax": "integratedTax",
  "notifications-integratedTaxRate": "integratedTaxRate",
  "notifications-unionTerritoryTax": "unionTerritoryTax",
  "notifications-unionTerritoryTaxRate": "unionTerritoryTaxRate",
  "notifications-compensationCess": "compensationCess",
  "notifications-compensationCessRate": "compensationCessRate",
};

