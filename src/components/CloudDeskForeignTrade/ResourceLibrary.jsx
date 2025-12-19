import React from "react";
import { File } from "lucide-react";

export function ResourceLibrary() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
      {/* Header */}
      <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider border-b pb-2">
        Resource Library
      </h3>

      {/* Links */}
      <ul className="space-y-3 text-sm">
        <ResourceItem
          label="FTP 2023 – Full Text"
          color="red"
        />
        <ResourceItem
          label="Handbook of Procedures"
          color="red"
        />
        <ResourceItem
          label="ITC (HS) 2022 – Schedule 1"
          color="green"
        />
      </ul>
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function ResourceItem({ label, color }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center text-gray-600 hover:text-blue-600 transition group"
      >
        <File
          className={`w-4 h-4 mr-2 text-${color}-500`}
        />
        {label}
      </a>
    </li>
  );
}
