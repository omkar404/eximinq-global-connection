// import React from "react";
// import { createRoot, hydrateRoot } from "react-dom/client";
// import { HelmetProvider } from "react-helmet-async";
// import "./index.css";
// import App from "./App";

// const container = document.getElementById("root");

// const AppTree = (
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </React.StrictMode>
// );

// if (container.hasChildNodes()) {
//   hydrateRoot(container, AppTree);
// } else {
//   createRoot(container).render(AppTree);
// }

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
