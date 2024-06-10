import links from "./links.json";
import { WhiteButton } from "../UI/Buttons/WhiteButton";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <nav className="flex gap-4 items-center">
      {links.map(({ label, path }) => (
        <Link key={label} href={path} className="text-gray-100 px-4 py-2">
          {label}
        </Link>
      ))}
      <WhiteButton style={{ padding: "10px 20px", borderRadius: 30 }}>
        Contact Us
      </WhiteButton>
    </nav>
  );
};
