import React from "react";

const OnRequestGrid = ({ filteredRequests, searchTerm }) => {
  return (
    <div className="p-8">
      {filteredRequests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRequests.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all"
            >
              <span className="text-slate-300">{item}</span>
              <span className="text-xs font-bold px-2 py-1 bg-slate-700 rounded text-slate-400">
                Get Quote
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-500 py-8">
          No services found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default OnRequestGrid;
