import { cn } from "@/app/utils";
import Link from "next/link";

export const BlueButton = ({ children, onClick, style, className }) => {
  const defaultStyles =
    " bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl";
  const styles = className ? className + defaultStyles : defaultStyles;
  return (
    <button onClick={onClick} className={styles} style={style}>
      {children}
    </button>
  );
};

BlueButton.Link = ({ children, href, style, className }) => {
  const defaultStyles =
    " bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl";
  const styles = className ? className + defaultStyles : defaultStyles;
  return (
    <Link href={href} className={styles} style={style}>
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
        "bg-blue text-gray-100 text-xl font-medium px-4 py-2 rounded-xl flex transition-all duration-300 items-center gap-2 link cursor-pointer",
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
