import { cn } from "@/app/utils";

export const Typography = ({ children, style, className }) => {
  const defaultStyles = "texc-base";

  return (
    <p style={style} className={cn(defaultStyles, className)}>
      {children}
    </p>
  );
};

Typography.H2Bold = ({ children, style, className }) => {
  const defaultStyles = "h2_bold font-bold";

  return (
    <h2 style={style} className={cn(defaultStyles, className)}>
      {children}
    </h2>
  );
};
Typography.H2Medium = ({ children, style, className }) => {
  const defaultStyles = "h2_medium font-medium";

  return (
    <h2 style={style} className={cn(defaultStyles, className)}>
      {children}
    </h2>
  );
};
Typography.H3Medium = ({children, style, className}) => {
  const defaultStyles = "font-medium h3_medium";
  return (
    <h2 style={style} className={cn(defaultStyles, className)}>
      {children}
    </h2>
  );
}
Typography.P18 = ({ children, style, className }) => {
  const defaultStyles = "p18 font-normal";

  return (
    <p style={style} className={cn(defaultStyles, className)}>
      {children}
    </p>
  );
};