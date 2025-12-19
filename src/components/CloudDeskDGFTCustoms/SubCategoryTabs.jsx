import React from "react";

const SubCategoryTabs = ({
  subCategories,
  activeSubCategory,
  setActiveSubCategory
}) => {
  if (!subCategories || subCategories.length === 0) return null;

  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
      {subCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveSubCategory(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-200
            ${
              activeSubCategory === cat
                ? "bg-gray-800 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryTabs;
