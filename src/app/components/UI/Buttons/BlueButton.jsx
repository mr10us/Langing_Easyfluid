import { cn } from "@/app/utils";
import Link from "next/link";

export const BlueButton = ({ children, onClick, style, className, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      htmlType={type}
      className={cn(
        "bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl hover:bg-blue-light active:bg-blue-dark transition-colors duration-300",
        className
      )}
      style={style}
    >
      {children}
    </button>
  );
};

BlueButton.Link = ({ children, href, style, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl hover:bg-blue-light active:bg-blue-dark transition-colors duration-300",
        className
      )}
      style={style}
    >
      {children}
    </Link>
  );
};

BlueButton.a = ({
  children,
  href,
  style,
  className,
  withArrow = false,
  block = false,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl flex hover:bg-blue-light active:bg-blue-dark transition-all duration-300 items-center gap-2 link cursor-pointer",
        className,
        block ? "w-full justify-center" : "w-max"
      )}
      style={style}
    >
      {children}
      {withArrow ? (
        <span className="transition-all duration-200">&rarr;</span>
      ) : null}
    </a>
  );
};
