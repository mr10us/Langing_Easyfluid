import { useEffect, useRef } from "react";
import { MainWrapper } from "../layouts/MainWrapper";
import Link from "next/link";
import { WhiteButton } from "./UI/Buttons/WhiteButton";
import links from "@/app/nav.json";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      drawerRef.current.style.maxHeight = `calc(${drawerRef.current.scrollHeight}px + 40px)`;
    } else {
      drawerRef.current.style.maxHeight = 0;
    }
  }, [isOpen]);

  return (
    <div>
      <div
        ref={drawerRef}
        className="fixed top-[86px] left-0 w-full bg-[#546177] transition-max-height duration-300 overflow-hidden z-40"
        style={{ maxHeight: 0 }}
      >
        <MainWrapper>
          <nav className="flex gap-4 flex-col py-5 pb-10">
            {links.map(({ label, path }) => (
              <Link href={path} className="text-gray-200 w-fit py-2" key={path}>
                {label}
              </Link>
            ))}
            <WhiteButton className="px-5 py-2 rounded-[30px] w-fit">
              Contact Us
            </WhiteButton>
          </nav>
        </MainWrapper>
      </div>
      {isOpen && (
        <div
          className="fixed top-[86px] left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
