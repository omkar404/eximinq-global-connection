import React from "react";

const ContactCard = ({ icon, title, description, action, href }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
        {icon}
      </div>

      <p className="font-semibold text-slate-900">{title}</p>

      <p className="text-sm text-gray-500">{description}</p>

      <a
        href={href}
        className="text-blue-600 font-medium text-sm hover:underline"
      >
        {action} →
      </a>
    </div>
  );
};

export default ContactCard;
