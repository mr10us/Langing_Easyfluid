import { MainWrapper } from "@/app/layouts/MainWrapper";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import Link from "next/link";
import Image from "next/image";
import links from "@/app/nav.json";
import Pin from "../../../../public/location-pin.svg";
import Phone from "../../../../public/phone.svg";
import Facebook from "../../../../public/facebook.svg";
import Twitter from "../../../../public/twitter.svg";
import Instagram from "../../../../public/instagram.svg";
import React from "react";

const media = [
  { icon: <Facebook />, link: "https://www.facebook.com/" },
  { icon: <Twitter />, link: "https://twitter.com" },
  { icon: <Instagram />, link: "https://www.instagram.com" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-[#182233]">
      <MainWrapper className="flex gap-6 flex-col py-8">
        <div className="flex gap-12 md:justify-between items-center">
          <Link href="#hero" className="w-20">
            <Image
            className="h-auto"
              src="/logo1.svg"
              width="100"
              height="100"
              alt="Easyfluid logo"
              title="Easyfluid logo"
            />
          </Link>
          <div className="flex flex-col gap-4 items-center basis-full justify-between md:basis-3/5 md:flex-row md:gap-8">
            <p className="text-gray-100 text-2xl">Ready to get started?</p>
            <WhiteButton.a className="rounded-lg px-4 py-3 w-full md:w-auto">
              Join to Easy Fluid
            </WhiteButton.a>
          </div>
        </div>
        <hr className="border-white border-t-[0.5px] opacity-10" />
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-14">
          <div className="flex flex-col gap-8 justify-between items-center lg:gap-4 md:items-start">
            <p className="text-2xl text-gray-100">
              Subscribe to our newsletter
            </p>
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="outline-none bg-transparent border-b border-white border-opacity-10 text-[15px] p-4 text-gray-100"
              />
              <WhiteButton className="px-6 py-4 rounded-t-lg">
                &#10095;
              </WhiteButton>
            </div>
          </div>
          <ul className="hidden md:flex md:flex-col md:gap-3">
            {links.map((link) => (
              <li key={link.label} className="text-gray-100">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-2">
              <a className="flex gap-4 items-center" href="https://goo.gl/maps/TprgzrCYE4wpHHAd9" title="Location">
                <Pin />
                <p className="text-gray-300 font-light">
                  Katusepapi 4, Tallinn, 11412
                </p>
              </a>
              <a className="flex gap-4 items-center" href="tel:+3726008211" title="Call us">
                <Phone />
                <p className="text-gray-300 font-light">+372 6008211</p>
              </a>
            </div>
            <div className="flex items-center justify-center gap-10">
              {media.map((social) => (
                <a href={social.link} key={social.link}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-start justify-between md:gap-16 text-gray-100 pt-12">
          <p className="text-[#AAA]">© {currentYear} EasyFluid. All rights reserved</p>
          <span className="flex gap-6">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </MainWrapper>
    </footer>
  );
};
