import React from "react";

const CategoriesTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
  <div className="container mx-auto px-4 overflow-x-auto py-3">

        <div className="flex space-x-2 md:justify-center py-4 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesTabs;
