import React from "react";
import { Link } from "react-router";

function NavSection({ links, isFulSidebar }) {
  return (
    <ul className="flex flex-col gap-1 mb-4 border-b border-[#272727] pb-3">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.text}
            className={`w-full rounded-lg hover:bg-[#272727] transition-colors ${
              isFulSidebar ? "flex gap-2 md:pl-3" : "flex justify-center"
            }`}
          >
            <Link
              to={item.href}
              className={`flex ${
                isFulSidebar
                  ? "items-center gap-5 px-3 py-2"
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
                <Icon size={isFulSidebar ? 22 : 20} className="text-white" />
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
  );
}

export default NavSection;
