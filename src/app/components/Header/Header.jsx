"use client";

import Link from "next/link";
import { MainWrapper } from "../../layouts/MainWrapper";
import links from "@/app/nav.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import { BurgerButton } from "../BurgerButton";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[86px] bg-gray-200 bg-opacity-5 transition-colors duration-300 z-50 ${
        isScrolled ? "bg-gray-950 bg-opacity-50" : ""
      }`}
    >
      <MainWrapper className="flex items-center h-full">
        <div className="flex justify-between items-center w-full">
          <Link href="#hero">
            <Image
              src="/logo.svg"
              width={33}
              height={70}
              alt="logo"
              priority
              style={{ height: "auto" }}
            />
          </Link>
          <nav className="gap-4 items-center hidden head:flex">
            {links.map(({ label, path }) => (
              <Link href={path} className="text-gray-100 px-4 py-2" key={label}>
                {label}
              </Link>
            ))}
            <WhiteButton style={{ padding: "10px 20px", borderRadius: 30 }}>
              Contact Us
            </WhiteButton>
          </nav>
          <BurgerButton
            className="inline head:hidden"
            onClick={toggleDrawer}
          />
        </div>
      </MainWrapper>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
