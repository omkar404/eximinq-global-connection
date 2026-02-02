import React from "react";
import { Headphones } from "lucide-react";

export function EximInqSupport() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white shadow-lg text-center">
      {/* Icon */}
      <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
        <Headphones className="w-6 h-6" />
      </div>

      {/* Title */}
      <h4 className="font-bold mb-1">EximInq Support</h4>

      {/* Phone */}
      <div className="bg-white text-blue-800 font-bold py-2 rounded-lg text-lg mb-2 mt-3">
        + 91 74000 96950
      </div>

      {/* Subtext */}
      <p className="text-xs text-blue-100">
        Talk to our trade & compliance experts
      </p>
    </div>
  );
}
