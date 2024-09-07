import { MainWrapper } from "@/app/layouts/MainWrapper";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import Link from "next/link";
import Image from "next-export-optimize-images/image";
import links from "@/app/nav.json";
import React from "react";
import { NewsletterForm } from "../NewsletterForm";

const media = [
  {
    icon: (
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.11163 3.37224H9.92331V0.21689C9.61075 0.173893 8.53581 0.0771484 7.28393 0.0771484C4.67183 0.0771484 2.88248 1.72015 2.88248 4.73989V7.51901H0V11.0465H2.88248V19.9221H6.41654V11.0473H9.18243L9.6215 7.51984H6.41571V5.08965C6.41654 4.07012 6.69106 3.37224 8.11163 3.37224Z"
          fill="white"
        />
      </svg>
    ),
    link: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: (
      <svg
        width="23"
        height="18"
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9233 2.17863C22.1052 2.5375 21.2335 2.77538 20.3246 2.89088C21.2596 2.33263 21.9732 1.45537 22.3087 0.398C21.437 0.91775 20.4745 1.28488 19.4487 1.48975C18.621 0.608375 17.4412 0.0625 16.1542 0.0625C13.6572 0.0625 11.647 2.08925 11.647 4.57387C11.647 4.93138 11.6772 5.27513 11.7515 5.60238C8.00184 5.4195 4.68396 3.62238 2.45509 0.88475C2.06596 1.55988 1.83771 2.33262 1.83771 3.1645C1.83771 4.7265 2.64209 6.11112 3.84109 6.91275C3.11646 6.899 2.40559 6.68863 1.80334 6.35725C1.80334 6.371 1.80334 6.38888 1.80334 6.40675C1.80334 8.5985 3.36672 10.419 5.41684 10.8384C5.04972 10.9388 4.64959 10.9869 4.23434 10.9869C3.94559 10.9869 3.65409 10.9704 3.38046 10.9099C3.96484 12.696 5.62309 14.0091 7.59484 14.0518C6.06034 15.2521 4.11196 15.9754 2.00271 15.9754C1.63284 15.9754 1.27809 15.9589 0.92334 15.9135C2.92121 17.2019 5.28897 17.9375 7.84234 17.9375C16.1418 17.9375 20.6793 11.0625 20.6793 5.10325C20.6793 4.90387 20.6725 4.71137 20.6628 4.52025C21.558 3.885 22.3101 3.09163 22.9233 2.17863Z"
          fill="white"
        />
      </svg>
    ),
    link: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.79834 0H16.0483C19.8447 0 22.9233 3.07862 22.9233 6.875V15.125C22.9233 18.9214 19.8447 22 16.0483 22H7.79834C4.00196 22 0.92334 18.9214 0.92334 15.125V6.875C0.92334 3.07862 4.00196 0 7.79834 0ZM16.0483 19.9375C18.7021 19.9375 20.8608 17.7787 20.8608 15.125V6.875C20.8608 4.22125 18.7021 2.0625 16.0483 2.0625H7.79834C5.14459 2.0625 2.98584 4.22125 2.98584 6.875V15.125C2.98584 17.7787 5.14459 19.9375 7.79834 19.9375H16.0483Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.42334 11C6.42334 7.96263 8.88596 5.5 11.9233 5.5C14.9607 5.5 17.4233 7.96263 17.4233 11C17.4233 14.0374 14.9607 16.5 11.9233 16.5C8.88596 16.5 6.42334 14.0374 6.42334 11ZM8.48584 11C8.48584 12.8948 10.0286 14.4375 11.9233 14.4375C13.8181 14.4375 15.3608 12.8948 15.3608 11C15.3608 9.10388 13.8181 7.5625 11.9233 7.5625C10.0286 7.5625 8.48584 9.10388 8.48584 11Z"
          fill="white"
        />
        <circle cx="17.8359" cy="5.08737" r="0.732875" fill="white" />
      </svg>
    ),
    link: "https://www.instagram.com",
    label: "Instagram",
  },
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
          <Link href="/#hero" className="w-48 md:w-20">
            <Image
              className="h-auto"
              src="/logo.png"
              width="100"
              height="100"
              alt="Easyfluid logo"
              title="Easyfluid logo"
            />
          </Link>
          {/* The heading */}
          <p className="text-gray-100 text-2xl">Ready to get started?</p>
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
                <Link href={link.path} alt={link.label}>
                  {link.label}
                </Link>
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
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00008 0.666992C2.77508 0.666992 0.166748 3.27533 0.166748 6.50033C0.166748 7.95033 0.583415 9.30866 1.34175 10.5337C2.13341 11.817 3.17508 12.917 3.97508 14.2003C4.36675 14.8253 4.65008 15.4087 4.95008 16.0837C5.16675 16.542 5.34175 17.3337 6.00008 17.3337C6.65841 17.3337 6.83342 16.542 7.04175 16.0837C7.35008 15.4087 7.62508 14.8253 8.01675 14.2003C8.81675 12.9253 9.85841 11.8253 10.6501 10.5337C11.4167 9.30866 11.8334 7.95033 11.8334 6.50033C11.8334 3.27533 9.22508 0.666992 6.00008 0.666992ZM6.00008 8.79199C4.85008 8.79199 3.91675 7.85866 3.91675 6.70866C3.91675 5.55866 4.85008 4.62533 6.00008 4.62533C7.15008 4.62533 8.08342 5.55866 8.08342 6.70866C8.08342 7.85866 7.15008 8.79199 6.00008 8.79199Z"
                    fill="#116ACC"
                  />
                </svg>

                <p className="font-light">Katusepapi 4, Tallinn, 11412</p>
              </a>
              <a
                className="flex gap-4 items-center text-gray-300 hover:animate-jumper hover:text-white transition-colors"
                href="tel:+3726008211"
                title="Call us"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.51667 6.99167C4.71667 9.35 6.65 11.275 9.00833 12.4833L10.8417 10.65C11.0667 10.425 11.4 10.35 11.6917 10.45C12.625 10.7583 13.6333 10.925 14.6667 10.925C15.125 10.925 15.5 11.3 15.5 11.7583V14.6667C15.5 15.125 15.125 15.5 14.6667 15.5C6.84167 15.5 0.5 9.15833 0.5 1.33333C0.5 0.875 0.875 0.5 1.33333 0.5H4.25C4.70833 0.5 5.08333 0.875 5.08333 1.33333C5.08333 2.375 5.25 3.375 5.55833 4.30833C5.65 4.6 5.58333 4.925 5.35 5.15833L3.51667 6.99167Z"
                    fill="#116ACC"
                  />
                </svg>

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
