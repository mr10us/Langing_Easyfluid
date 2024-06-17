"use client";

import Link from "next/link";
import { MainWrapper } from "../../layouts/MainWrapper";
import links from "@/app/nav.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import { BurgerButton } from "../BurgerButton";

/**
 * The Header component is the top navigation bar of the website.
 * It contains the logo, navigation links, and a "Contact Us" button.
 * It also has a drawer for mobile devices.
 */
export const Header = () => {
  // State variables to track the scroll position and the drawer state.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /**
   * Toggles the drawer state when the burger button is clicked.
   */
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  /**
   * Sets the scroll state based on the current scroll position.
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    setIsScrolled(window.scrollY !== 0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Sets the body overflow based on the drawer state.
   */
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  return (
    // The header element with the appropriate class names and styles.
    <header
      className={`fixed top-0 left-0 w-full h-[86px] bg-gray-200 bg-opacity-5 transition-colors duration-300 z-50 ${
        isScrolled ? "bg-gray-950 bg-opacity-50" : ""
      }`}
      style={isDrawerOpen ? { backgroundColor: "#273040" } : {}}
    >
      {/* The main wrapper for the header content. */}
      <MainWrapper className="flex items-center h-full">
        <div className="flex justify-between items-center w-full">
          {/* The logo link. */}
          <Link href="#hero">
            <Image
              className="h-auto"
              src="/logo.svg"
              width={33}
              height={70}
              alt="logo"
              priority
            />
          </Link>
          {/* The navigation links. */}
          <nav className="gap-4 items-center hidden head:flex">
            {links.map(({ label, path }) => (
              <Link href={path} className="text-gray-100 px-4 py-2 hover:text-blue transition-all" key={label}>
                {label}
              </Link>
            ))}
            {/* The "Contact Us" button. */}
            <WhiteButton style={{ padding: "10px 20px", borderRadius: 30 }}>
              Contact Us
            </WhiteButton>
          </nav>
          {/* The burger button for mobile devices. */}
          <BurgerButton
            isActive={isDrawerOpen}
            className="inline head:hidden"
            onClick={toggleDrawer}
          />
        </div>
      </MainWrapper>
      {/* The drawer component for mobile devices. */}
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
