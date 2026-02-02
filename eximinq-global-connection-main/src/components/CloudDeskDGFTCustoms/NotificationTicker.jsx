import React from "react";
import { AlertCircle } from "lucide-react";

const NotificationTicker = ({ notifications }) => {
  if (!notifications || notifications.length === 0) return null;

  return (
    <div className="bg-gray-900 text-white py-2 text-sm overflow-hidden whitespace-nowrap relative border-b border-gray-800 mt-[100px]">
      <div className="flex animate-marquee">
        {notifications.map((note, index) => (
          <span
            key={index}
            className="mx-8 flex items-center text-gray-200"
          >
            <AlertCircle size={14} className="text-yellow-400 mr-2" />
            {note}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NotificationTicker;
