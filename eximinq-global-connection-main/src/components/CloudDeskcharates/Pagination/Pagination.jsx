import React from "react";

const Pagination = ({ total, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">

      {/* PREVIOUS BUTTON */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-slate-600 rounded-lg text-sm disabled:opacity-30 hover:bg-slate-700/30 transition"
      >
        Previous
      </button>

      {/* PAGE STATUS */}
      <span className="text-slate-300 text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {/* NEXT BUTTON */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-slate-600 rounded-lg text-sm disabled:opacity-30 hover:bg-slate-700/30 transition"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
