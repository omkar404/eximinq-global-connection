export const getApiBaseUrl = () => {
  const configuredUrl = (process.env.REACT_APP_API_URL || "").replace(/\/+$/, "");

  if (
    typeof window !== "undefined" &&
    ["localhost", "127.0.0.1"].includes(window.location.hostname) &&
    window.location.port === "3000"
  ) {
    return `${window.location.protocol}//${window.location.hostname}:5000`;
  }

  return configuredUrl;
};

export const getApiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
};
