import React from "react";

import { Link } from "react-router-dom";
import { mainNavLinks } from "../../utils/constant";

function SideBar({ isFulSidebar }) {
  return (
    <aside
      className={`${
        isFulSidebar ? "w-[14%]" : "w-[5%] px-4"
      } h-screen fixed left-0 bg-[#0f0f0f] top-0 pt-14 transition-shadow duration-300 ease-in-out`}
    >
      <nav className="py-3">
        <ul className="flex flex-col">
          {mainNavLinks.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.text}
                className={`w-full rounded-lg hover:bg-[#272727] transition-colors ${
                  isFulSidebar ? "flex gap-2 pl-3" : "flex justify-center"
                }`}
              >
                <Link
                  to={item.href}
                  className={`flex ${
                    isFulSidebar
                      ? "items-center gap-5 px-3 py-2 "
                      : "flex-col items-center py-4 px-1"
                  }`}
                >
                  {item.isImage ? (
                    <img
                      src={item.icon}
                      alt={item.text}
                      className={`${
                        isFulSidebar ? "w-[22px]" : "w-[20px]"
                      } object-contain`}
                    />
                  ) : (
                    <Icon
                      size={isFulSidebar ? 22 : 20}
                      className="text-white"
                    />
                  )}
                  <span
                    className={`${
                      isFulSidebar ? "text-sm" : "text-[10px] mt-1"
                    } text-white`}
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
