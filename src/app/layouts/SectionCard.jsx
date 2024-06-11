import { cn } from "../utils";

export const SectionCard = ({ children, className, style, id }) => {
  return (
    <div
    id={id}
      className={cn(
        "rounded-[20px] shadow-md hover:shadow-2xl transition-shadow duration-500",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
