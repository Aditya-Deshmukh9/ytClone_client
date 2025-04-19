import { filters } from "../../utils/constant";

function FilterSection() {
  return (
    <div className="fixed top-12 max-w-full bg-black z-30 py-2 border-b border-[#272727]">
      <div className="flex gap-3 overflow-x-auto px-2  py-1 scroll-smooth no-scrollbar">
        {filters.map((item, index) => (
          <button
            key={`${item.text}-${index}`}
            className={`${
              index === 0
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
            } text-sm font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer`}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;
