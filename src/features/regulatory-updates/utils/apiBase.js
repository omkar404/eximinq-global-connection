function isLocalhost(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export function getRegulatoryApiBase() {
  const raw = (process.env.REACT_APP_API_URL || "").trim().replace(/\/$/, "");

  if (typeof window !== "undefined") {
    const browserHost = window.location.hostname;

    if (isLocalhost(browserHost)) {
      return "http://localhost:5000";
    }

    if (raw) {
      try {
        const parsed = new URL(raw, window.location.origin);
        const envHost = parsed.hostname;

        if (!isLocalhost(browserHost) && isLocalhost(envHost)) {
          return "";
        }

        return parsed.origin.replace(/\/$/, "");
      } catch (_error) {
        return raw;
      }
    }

    return "";
  }

  return raw || "http://localhost:5000";
}
