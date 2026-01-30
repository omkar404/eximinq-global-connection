import { ChevronRight } from "lucide-react";

export const SectionHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-teal-500 to-indigo-600 rounded-full mr-3" />
        Latest Compliance Updates & Services
      </h2>

      <a
        href="#"
        className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center text-sm"
      >
        View All
        <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

