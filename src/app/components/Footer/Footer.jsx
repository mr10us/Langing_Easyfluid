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
  { icon: <Facebook />, link: "#" },
  { icon: <Twitter />, link: "#" },
  { icon: <Instagram />, link: "#" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-[#182233]">
      <MainWrapper className="flex gap-6 flex-col py-8">
        <div className="flex justify-between items-center">
          <Link href="#hero">
            <Image
              src="/logo1.svg"
              width="100"
              height="100"
              alt="Easyfluid logo"
              title="Easyfluid logo"
            />
          </Link>
          <div className="flex flex-col md:flex-row md:gap-8 gap-4 items-center basis-2/5 justify-between">
            <p className="text-gray-100 text-2xl">Ready to get started?</p>
            <WhiteButton.a className="rounded-lg px-4 py-3">
              Join to Easy Fluid
            </WhiteButton.a>
          </div>
        </div>
        <hr className="border-white border-t-[0.5px] opacity-10" />
        <div className="flex justify-between gap-14">
          <div className="flex flex-col gap-4 justify-between">
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
          <div>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label} className="text-gray-100">
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <Pin />
                <p className="text-gray-300 font-light">
                  Katusepapi 4, Tallinn, 11412
                </p>
              </div>
              <div className="flex gap-4">
                <Phone />
                <p className="text-gray-300 font-light">+372 6008211</p>
              </div>
            </div>
            <div className="flex gap-10">
              {media.map((social) => (
                <a href={social.link} key={social.link}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-16 text-gray-100 pt-12">
          <p>© {currentYear} EasyFluid. All rights reserved</p>
          <span className="flex gap-6">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </MainWrapper>
    </footer>
  );
};
