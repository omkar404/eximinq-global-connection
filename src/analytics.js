export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-G3X01SXKW1", {
      page_path: url,
    });
  }
};
