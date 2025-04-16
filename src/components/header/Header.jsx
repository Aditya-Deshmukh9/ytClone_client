import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ setIsFulSidebar, isFulSidebar }) {
  return (
    <header className="fixed top-0 bg-[#0f0f0f] left-0 w-full z-50 flex justify-between items-center px-4 py-2 border-b border-[#272727]">
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setIsFulSidebar(!isFulSidebar)}
          className="cursor-pointer p-2 rounded-full hover:bg-[#272727] transition-colors"
        >
          <FiMenu size={22} className="text-white" />
        </button>
        <Link to="/" className="flex items-center gap-x-1">
          <BsYoutube size={30} className="text-red-600" />
          <span className="text-white font-semibold text-xl">YouTube</span>
        </Link>
      </div>

      <div className="flex items-center justify-center flex-1 max-w-[600px]">
        <div className="flex w-full">
          <div className="flex flex-1 border border-[#303030] rounded-l-full overflow-hidden bg-[#121212] focus-within:border-blue-500">
            <input
              type="text"
              className="w-full bg-transparent px-4 py-2 text-white outline-none placeholder:text-gray-400 text-sm"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            className="bg-[#222222] px-5 flex items-center justify-center rounded-r-full border-y border-r border-[#303030] hover:bg-[#303030] transition-colors"
          >
            <IoSearch size={20} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <Link to="/profile" className="size-9 rounded-full overflow-hidden">
          <img
            src="https://yt3.ggpht.com/iaARHy-E6Yga7FtQPh7J1XTgwhAK5v8kfcdltUsYdbDioAMyUH6gG0JnQN8nytozHgKNYmBD0w=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
