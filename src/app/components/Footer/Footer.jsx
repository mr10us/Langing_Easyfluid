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
import { NewsletterForm } from "../NewsletterForm";

const media = [
  { icon: <Facebook />, link: "https://www.facebook.com/", label: "Facebook" },
  { icon: <Twitter />, link: "https://twitter.com", label: "Twitter" },
  { icon: <Instagram />, link: "https://www.instagram.com", label: "Instagram" },
];

const currentYear = new Date().getFullYear();

/**
 * The Footer component represents the footer section of the website.
 * It contains the necessary information and links for the user.
 */
export const Footer = () => {
  return (
    // The footer element with the appropriate class names and styles.
    <footer className="bg-[#182233]">
      <MainWrapper className="flex gap-6 flex-col py-8">
        {/* The main content of the footer */}
        <div className="flex gap-12 md:justify-between items-center">
          {/* The logo link */}
          <Link href="#hero" className="w-48 md:w-20">
            <Image
              className="h-auto"
              src="/logo.png"
              width="100"
              height="100"
              alt="Easyfluid logo"
              title="Easyfluid logo"
            />
          </Link>
          {/* The call to action section */}
          <div className="flex flex-col gap-4 items-center basis-full justify-between md:basis-3/5 md:flex-row md:gap-8">
            {/* The heading */}
            <p className="text-gray-100 text-2xl">Ready to get started?</p>
            {/* The button */}
            <WhiteButton.a
              href="https://app.easyfluid.eu/"
              className="rounded-lg px-4 py-3 w-full md:w-auto"
            >
              Join to Easy Fluid
            </WhiteButton.a>
          </div>
        </div>
        {/* The horizontal line */}
        <hr className="border-white border-t-[0.5px] opacity-10" />
        {/* The main content of the footer */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-14">
          {/* The newsletter subscription section */}
          <NewsletterForm />
          {/* The navigation links section */}
          <ul className="hidden md:flex md:flex-col md:gap-3">
            {/* The navigation links */}
            {links.map((link) => (
              <li
                key={link.label}
                className="text-gray-100 hover:text-white hover:drop-shadow-md transition-all"
              >
                <Link href={link.path} alt={link.label}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* The contact information section */}
          <div className="flex flex-col justify-between gap-10">
            {/* The location and phone number links */}
            <div className="flex flex-col gap-2">
              <a
                className="flex gap-4 items-center text-gray-300 hover:animate-jumper hover:text-white transition-colors"
                href="https://goo.gl/maps/TprgzrCYE4wpHHAd9"
                title="Location"
                target="_blank"
              >
                <Pin />
                <p className="font-light">Katusepapi 4, Tallinn, 11412</p>
              </a>
              <a
                className="flex gap-4 items-center text-gray-300 hover:animate-jumper hover:text-white transition-colors"
                href="tel:+3726008211"
                title="Call us"
                target="_blank"
              >
                <Phone />
                <p className="font-light">+372 6008211</p>
              </a>
            </div>
            {/* The social media links */}
            <div className="flex items-center justify-center gap-10">
              {media.map((social) => (
                <a
                  href={social.link}
                  key={social.link}
                  className="hover:animate-social"
                  target="_blank"
                  alt={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* The copyright and terms sections */}
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-start justify-between md:gap-16 text-gray-100 pt-12">
          {/* The copyright */}
          <p className="text-[#AAA]">
            © {currentYear} EasyFluid. All rights reserved
          </p>
          {/* The terms and conditions and privacy policy links */}
          <span className="flex gap-6">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </MainWrapper>
    </footer>
  );
};
