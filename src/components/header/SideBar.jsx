import { EndNavLinks, mainNavLinks, youNavLinks } from "../../utils/constant";
import NavSection from "./NavSection";

function SideBar({ isFulSidebar }) {
  return (
    <aside
      className={`h-screen fixed left-0 md:left-1 bg-[#0f0f0f] z-40 top-0 pt-14 transition-shadow duration-300 ease-in-out`}
    >
      <nav className={`py-3 ${isFulSidebar ? "" : "hidden md:block"}`}>
        <NavSection links={mainNavLinks} isFulSidebar={isFulSidebar} />
        {isFulSidebar && (
          <>
            <NavSection links={youNavLinks} isFulSidebar={isFulSidebar} />
            <NavSection links={EndNavLinks} isFulSidebar={isFulSidebar} />
          </>
        )}
      </nav>
    </aside>
  );
}

export default SideBar;
