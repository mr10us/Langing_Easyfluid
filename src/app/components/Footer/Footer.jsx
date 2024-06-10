import { MainWrapper } from "@/app/layouts/MainWrapper";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#182233]">
      <MainWrapper>
        <div className="flex justify-between">
          <Image
            src="/logo1.svg"
            width="100"
            height="100"
            alt="Easyfluid logo"
            title="Easyfluid logo"
          />
          <div className="flex flex-col md:flex-row md:gap-8 gap-4">
            <p className="text-gray-100 text-2xl">Ready to get started?</p>
            <WhiteButton.a>Join to Easy Fluid</WhiteButton.a>
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-14">
          <div>
            <p>Subscribe to our newsletter</p>
            <div>
              <input type="text" placeholder="Email address" />
              <WhiteButton>&#10095;</WhiteButton>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Special Features</Link>
              </li>
              <li>
                <Link href="#">Contacts</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>
          {/* contacts */}
          <div>

          </div>
        </div>
      </MainWrapper>
    </footer>
  );
};
