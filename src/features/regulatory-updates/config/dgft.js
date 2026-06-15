export const DGFT_NAV = [
  { label: "Public Notices", key: "public" },
  { label: "Notifications", key: "notification" },
  { label: "Policy Circulars", key: "circular" },
  { label: "Trade Notices", key: "trade" },
  {
    label: "Foreign Trade Policy",
    key: "ftp",
    children: [
      { label: "Aayat Niryat Form & Appendices", key: "ftp-anf" },
      { label: "Foreign Trade Policy", key: "ftp-policy" },
      { label: "Foreign Trade Statement", key: "ftp-statement" },
      { label: "FT D&R Act", key: "ftp-act" },
      { label: "FT D&R Rules", key: "ftp-rules" },
      { label: "Handbook of Procedures", key: "ftp-hop" },
      {
        label: "Import Export and SCOMET Policy",
        key: "ftp-scomet",
        children: [
          { label: "Export Policy - ITC(HS) 2022", key: "ftp-scomet-export" },
          { label: "Import Policy - ITC(HS) 2022", key: "ftp-scomet-import" },
          { label: "SCOMET", key: "ftp-scomet-only" },
        ],
      },
      {
        label: "Rates under RoDTEP",
        key: "ftp-rodtep",
        children: [
          { label: "Rates under Appendix 4R-4RE", key: "ftp-rodtep-4r" },
        ],
      },
    ],
  },
];

export const DGFT_DEFAULT_TAB = "public";

export const DGFT_FTP_TABS = new Set([
  "ftp-anf",
  "ftp-policy",
  "ftp-statement",
  "ftp-act",
  "ftp-rules",
  "ftp-hop",
  "ftp-rodtep-4r",
  "ftp-scomet-export",
  "ftp-scomet-import",
  "ftp-scomet-only",
]);

