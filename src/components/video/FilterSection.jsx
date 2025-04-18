import React, { useState, useRef, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { filters } from "../../utils/constant";

function FilterSection() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll();

      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-12 w-full bg-black z-50 py-3 border-b border-[#272727]">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#0f0f0f] h-10 w-16 flex items-center justify-start  rounded-full shadow-md hover:bg-[#272727] transition-colors"
        >
          <IoChevronBackOutline size={20} className="text-white" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto px-2  py-1 scroll-smooth no-scrollbar"
      >
        {filters.map((item, index) => (
          <button
            key={`${item.text}-${index}`}
            className={`${
              index === 0
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
            } text-sm font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap min-w-max`}
          >
            {item.text}
          </button>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#0f0f0f] h-10 w-16 flex items-center justify-end px-2 rounded-full shadow-md hover:bg-[#272727] transition-colors"
        >
          <IoChevronForwardOutline size={20} className="text-white" />
        </button>
      )}
    </div>
  );
}

export default FilterSection;
