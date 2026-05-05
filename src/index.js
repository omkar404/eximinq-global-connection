import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

const appTree = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, appTree);
} else {
  createRoot(container).render(appTree);
}
