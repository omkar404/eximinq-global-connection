import React from "react";
import { Search, ChevronRight } from "lucide-react";

const SearchHSN = ({
  searchQuery,
  setSearchQuery,
  selectedChapter,
  setSelectedChapter,
  handleSearch,
}) => {
  const chapters = Array.from({ length: 97 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, "0");
    return { value: num, label: `Chapter ${num}` };
  });

  return (
    <div className="container mx-auto px-4 -mt-10 relative z-10">
      <div className="bg-white p-6 rounded-2xl shadow-lg border">

        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">

          {/* Chapter Select */}
          <div className="relative w-full md:w-1/4">
            <select
              className="w-full p-3 rounded-lg border bg-white"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
            >
              <option value="All">All Chapters</option>
              {chapters.map((ch) => (
                <option key={ch.value} value={ch.value}>
                  {ch.label}
                </option>
              ))}
            </select>
            <ChevronRight
              size={18}
              className="absolute right-3 top-3 opacity-50 rotate-90"
            />
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-3/4">
            <input
              type="text"
              placeholder="Enter HS Code or Product Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-4 rounded-lg border"
            />
            <Search
              size={20}
              className="absolute right-3 top-3 opacity-50"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold"
          >
            Search
          </button>
        </form>

      </div>
    </div>
  );
};

export default SearchHSN;
