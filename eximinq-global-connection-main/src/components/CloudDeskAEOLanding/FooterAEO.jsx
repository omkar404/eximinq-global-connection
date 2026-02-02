import React from "react";

const FooterAEO = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          © {new Date().getFullYear()} EXIMINQ Global Connections. All rights reserved.
        </p>
        <p>
          Avoid Cancellation of AEO Status | Annual Returns Deadline: Dec 31, 2025
        </p>
      </div>
    </footer>
  );
};

export default FooterAEO;