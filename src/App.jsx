import React, { useState } from "react";
import SideBar from "./components/header/SideBar";
import Header from "./components/header/Header";
import VideoSection from "./components/video/VideoSection";
import FilterSection from "./components/video/FilterSection";
import { useEffect } from "react";

function App() {
  const [isFulSidebar, setIsFulSidebar] = useState(true);

  useEffect(() => {
    const handleSize = () => {
      const xWidth = window.innerWidth >= 1280;
      setIsFulSidebar(xWidth);
    };
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.addEventListener("resize", handleSize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f]">
      <Header setIsFulSidebar={setIsFulSidebar} isFulSidebar={isFulSidebar} />
      <div className="flex w-full h-full pt-10">
        <SideBar isFulSidebar={isFulSidebar} />
        <main
          className={`flex-1 ${
            isFulSidebar ? "ml-[15%]" : "ml-[5%]"
          } transition-all duration-300 overflow-y-scroll h-[90%] mt-auto scroller`}
        >
          <FilterSection />
          <VideoSection />
        </main>
      </div>
    </div>
  );
}

export default App;
