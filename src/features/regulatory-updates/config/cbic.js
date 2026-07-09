const CBIC_FORM_TABS = [
  { label: "Appeals", key: "forms-appeals", filterValue: "Appeals" },
  { label: "Bill of Entry Forms", key: "forms-billOfEntryForms", filterValue: "Bill of Entry Forms" },
  { label: "Bonds", key: "forms-bonds", filterValue: "Bonds" },
  { label: "Customs Broker", key: "forms-customsBroker", filterValue: "Customs Broker" },
  { label: "Drawback", key: "forms-drawback", filterValue: "Drawback" },
  { label: "Electronic Declaration", key: "forms-electronicDeclaration", filterValue: "Electronic Declaration" },
  { label: "Furnishing of Information", key: "forms-furnishingOfInformation", filterValue: "Furnishing of Information" },
  { label: "Passenger/Baggage", key: "forms-passengerOrBaggage", filterValue: "Passenger or Baggage" },
  { label: "Refund", key: "forms-refunds", filterValue: "Refunds" },
  { label: "Settlement Commission", key: "forms-settlementCommission", filterValue: "Settlement Commission" },
  { label: "Shipping Bill Forms", key: "forms-shippingBillForms", filterValue: "Shipping Bill Forms" },
  { label: "Transshipment", key: "forms-transhipment", filterValue: "Transhipment" },
  { label: "Warehousing", key: "forms-warehousing", filterValue: "Warehousing" },
  { label: "Others", key: "forms-others", filterValue: "Others" },
];

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
  {
    label: "Orders",
    key: "orders",
    children: [{ label: "Non-Tariff", key: "orders-nonTariff" }],
  },
  {
    label: "Forms",
    key: "forms",
    children: CBIC_FORM_TABS.map(({ label, key }) => ({ label, key })),
  },
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

export const CBIC_TAB_CONFIG = {
  acts: { apiType: "acts" },
  rules: { apiType: "rules" },
  regulations: { apiType: "regulations" },
  circulars: { apiType: "circulars" },
  instructions: { apiType: "instructions" },
  orders: { apiType: "orders" },
  "orders-nonTariff": {
    apiType: "orders",
    clientFilter: { field: "category", values: ["Non-Tariff"] },
  },
  forms: { apiType: "forms" },
  alliedActs: { apiType: "alliedActs" },
  ...Object.fromEntries(
    CBIC_FORM_TABS.map(({ key, filterValue }) => [
      key,
      {
        apiType: "forms",
        clientFilter: { field: "category", values: [filterValue] },
      },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(CBIC_NOTIFICATION_CATEGORY_MAP).map(([key, notificationCategory]) => [
      key,
      { apiType: "notifications", notificationCategory },
    ])
  ),
};
