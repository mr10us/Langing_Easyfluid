import { useEffect, useRef } from "react";
import { MainWrapper } from "../layouts/MainWrapper";
import Link from "next/link";
import { WhiteButton } from "./UI/Buttons/WhiteButton";
import links from "@/app/nav.json";

/**
 * Drawer component for the navigation menu.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isDrawerOpen - Whether the drawer is open or not.
 * @param {Function} props.toggleDrawer - Function to toggle the drawer.
 * @returns {JSX.Element} The Drawer component.
 */
const Drawer = ({ isDrawerOpen, toggleDrawer, toggleModal }) => {
  // Reference to the drawer element.
  const drawerRef = useRef(null);

  /**
   * Update the drawer height based on its open state.
   */
  useEffect(() => {
    // If the drawer is open, set the height to the scroll height plus 40px.
    // Otherwise, set the height to 0.
    if (isDrawerOpen) {
      drawerRef.current.style.maxHeight = `calc(${drawerRef.current.scrollHeight}px + 40px)`;
    } else {
      drawerRef.current.style.maxHeight = 0;
    }
  }, [isDrawerOpen]);

  return (
    <div>
      {/* The drawer element. */}
      <div
        ref={drawerRef}
        className="fixed top-[86px] left-0 w-full bg-[#546177] transition-max-height duration-300 overflow-hidden z-40"
        style={{ maxHeight: 0 }}
      >
        <MainWrapper>
          <nav className="flex gap-4 flex-col py-5 pb-10">
            {/* Map over the links array to render the links. */}
            {links.map(({ label, path }) => (
              <Link
                href={path}
                className="text-gray-200 w-fit py-2"
                key={path}
                onClick={() => toggleDrawer()}
              >
                {label}
              </Link>
            ))}
            {/* The "Contact Us" button. */}
            <WhiteButton
              style={{ padding: "10px 20px", borderRadius: 30, width: "fit-content" }}
              onClick={toggleModal}
            >
              Contact Us
            </WhiteButton>
            {/* The Log In button */}
            <WhiteButton.a
              href="https://app.easyfluid.eu/login"
              style={{ padding: "10px 20px", borderRadius: 30, width: "fit-content" }}
            >
              Log In
            </WhiteButton.a>
          </nav>
        </MainWrapper>
      </div>
      {/* If the drawer is open, render a backdrop to close the drawer. */}
      {isDrawerOpen && (
        <div
          className="fixed top-[86px] left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
