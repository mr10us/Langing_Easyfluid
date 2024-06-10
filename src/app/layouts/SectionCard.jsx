import { cn } from "../utils";

export const SectionCard = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        "rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
