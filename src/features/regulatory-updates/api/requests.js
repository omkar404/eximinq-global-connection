import { DGFT_FTP_TABS } from "../config/dgft";
import { CBIC_NOTIFICATION_CATEGORY_MAP } from "../config/cbic";
import { GST_NOTIFICATION_CATEGORY_MAP } from "../config/gst";
import { getRegulatoryApiBase } from "../utils/apiBase";

export const SNAPSHOT_EVENT = "regulatory-updates:snapshot-ready";

export function getRequestUrl(authority, tabKey) {
  const apiBase = getRegulatoryApiBase();

  if (authority === "dgft") {
    if (DGFT_FTP_TABS.has(tabKey)) {
      return `${apiBase}/api/ftp/data/${tabKey}`;
    }

    return `${apiBase}/api/dgft/notices?type=${tabKey}`;
  }

  if (authority === "gst") {
    const notificationCategory = GST_NOTIFICATION_CATEGORY_MAP[tabKey];
    return notificationCategory
      ? `${apiBase}/api/gst/notifications/category/${notificationCategory}`
      : `${apiBase}/api/gst/${tabKey}`;
  }

  const notificationCategory = CBIC_NOTIFICATION_CATEGORY_MAP[tabKey];
  return notificationCategory
    ? `${apiBase}/api/customs/notifications/category/${notificationCategory}`
    : `${apiBase}/api/customs/${tabKey}`;
}

export async function fetchRegulatoryData(authority, tabKey) {
  const response = await fetch(getRequestUrl(authority, tabKey), {
    headers: { "Content-Type": "application/json" },
  });
  const payload = await response.json();

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || `Failed to fetch ${authority.toUpperCase()} data`);
  }

  if (authority === "dgft" && !DGFT_FTP_TABS.has(tabKey)) {
    return Array.isArray(payload.data)
      ? payload.data.filter((item) => item.type === tabKey)
      : [];
  }

  return Array.isArray(payload.data) ? payload.data : [];
}

