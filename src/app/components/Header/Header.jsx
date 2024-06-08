"use client"

import Link from "next/link";
import { MainWrapper } from "../../layouts/MainWrapper";
import links from "./links.json";
import Image from "next/image";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    setIsScrolled(window.scrollY !== 0)

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full h-[86px] bg-gray-200 bg-opacity-5 transition-colors duration-300 ${isScrolled ? 'bg-gray-950 bg-opacity-50' : ''} z-[999]`}>
      <MainWrapper className="flex items-center h-full">
        <div className="flex justify-between items-center w-full">
          <Link href="#">
            <Image src="/logo.svg" width={33} height={70} alt="logo" priority style={{height: "auto"}}/>
          </Link>
          <nav className="flex gap-4 items-center">
            {links.map(({ label, path }) => (
              <Link href={path} className="text-gray-100 px-4 py-2" key={label}>
                {label}
              </Link>
            ))}
            <WhiteButton style={{padding: "10px 20px", borderRadius: 30}}>Contact Us</WhiteButton>
          </nav>
        </div>
      </MainWrapper>
    </header>
  );
};
