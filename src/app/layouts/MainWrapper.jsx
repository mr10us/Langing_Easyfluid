import { cn } from "../utils";

export const MainWrapper = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        "px-5 container sm:mx-auto w-full md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1100px]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
