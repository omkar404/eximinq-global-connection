import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-600" size={22} />,
  error: <XCircle className="text-red-600" size={22} />,
  warning: <AlertTriangle className="text-yellow-600" size={22} />,
  info: <Info className="text-blue-600" size={22} />,
};

const bgColors = {
  success: "bg-green-50 border-green-200",
  error: "bg-red-50 border-red-200",
  warning: "bg-yellow-50 border-yellow-200",
  info: "bg-blue-50 border-blue-200",
};

const CustomAlert = ({ type = "info", message, onClose }) => {
  // Auto close in 3.5s
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999]">
      <div
        className={`min-w-[300px] max-w-[380px] ${bgColors[type]} 
        border shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 
        animate-slide-down`}
      >
        {icons[type]}
        <span className="text-gray-800 text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default CustomAlert;
