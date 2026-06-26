const GST_FORM_TABS = [
  { label: "Advance Ruling", key: "forms-advanceRuling", filterValue: "Advance Ruling" },
  { label: "All Forms - Hindi", key: "forms-allFormsHindi", filterValue: "All Forms - Hindi" },
  { label: "Appeal", key: "forms-appeal", filterValue: "Appeal" },
  { label: "Assessment", key: "forms-assessment", filterValue: "Assessment" },
  { label: "Audit", key: "forms-audit", filterValue: "Audit" },
  { label: "Composition Levy", key: "forms-compositionLevy", filterValue: "Composition Levy" },
  { label: "Compounding of Offence", key: "forms-compoundingOfOffence", filterValue: "Compounding of Offence" },
  { label: "Demand and Recovery Forms", key: "forms-demandRecovery", filterValue: "Demand and Recovery Forms" },
  { label: "Electronic Way Bill", key: "forms-electronicWayBill", filterValue: "Electronic Way Bill" },
  { label: "Enrolment", key: "forms-enrolment", filterValue: "Enrolment" },
  { label: "GST Amnesty Scheme 2024", key: "forms-gstAmnesty", filterValue: "GST Amnesty Scheme 2024" },
  { label: "GST Practitioner", key: "forms-gstPractitioner", filterValue: "GST Practitioner" },
  { label: "Input Tax Credit", key: "forms-inputTaxCredit", filterValue: "Input Tax Credit" },
  { label: "Inspection", key: "forms-inspection", filterValue: "Inspection" },
  { label: "Invoice", key: "forms-invoice", filterValue: "Invoice" },
  { label: "Notice by Revisional Authority", key: "forms-noticeRevisional", filterValue: "Notice by Revisional Authority" },
  { label: "Payment", key: "forms-payment", filterValue: "Payment" },
  { label: "Refund", key: "forms-refund", filterValue: "Refund" },
  { label: "Registration", key: "forms-registration", filterValue: "Registration" },
  { label: "Return", key: "forms-return", filterValue: "Return" },
  { label: "Transitional ITC", key: "forms-transitionalItc", filterValue: "Transitional ITC" },
];

const GST_CIRCULAR_TABS = [
  { label: "Circulars - CGST", key: "circulars-cgst", filterValue: "Circulars - CGST" },
  { label: "Circulars - Compensation Cess", key: "circulars-compensationCess", filterValue: "Circulars - Compensation Cess" },
  { label: "Circulars - IGST", key: "circulars-igst", filterValue: "Circulars - IGST" },
];

export const GST_NAV = [
  { label: "Acts", key: "acts" },
  { label: "Rules", key: "rules" },
  {
    label: "Forms",
    key: "forms",
    children: GST_FORM_TABS.map(({ label, key }) => ({ label, key })),
  },
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
  {
    label: "Circulars",
    key: "circulars",
    children: GST_CIRCULAR_TABS.map(({ label, key }) => ({ label, key })),
  },
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

export const GST_TAB_CONFIG = {
  acts: { apiType: "acts" },
  rules: { apiType: "rules" },
  forms: { apiType: "forms" },
  circulars: { apiType: "circulars" },
  instructions: { apiType: "instructions" },
  orders: { apiType: "orders" },
  ...Object.fromEntries(
    GST_FORM_TABS.map(({ key, filterValue }) => [
      key,
      {
        apiType: "forms",
        clientFilter: { field: "folderCategory", values: [filterValue] },
      },
    ])
  ),
  ...Object.fromEntries(
    GST_CIRCULAR_TABS.map(({ key, filterValue }) => [
      key,
      {
        apiType: "circulars",
        clientFilter: { field: "folderCategory", values: [filterValue] },
      },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(GST_NOTIFICATION_CATEGORY_MAP).map(([key, notificationCategory]) => [
      key,
      { apiType: "notifications", notificationCategory },
    ])
  ),
};
