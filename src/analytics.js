export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-NHDYH3L0V2", {
      page_path: url,
    });
  }
};
