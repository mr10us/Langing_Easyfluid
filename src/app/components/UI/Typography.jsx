export const Typography = ({ children, style, className }) => {
  const defaultStyles = " texc-base text-gray-100";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <p style={style} className={styles}>
      {children}
    </p>
  );
};

Typography.H2Bold = ({ children, style, className }) => {
  const defaultStyles = " text-[40px] leading-[46px] font-bold text-gray-100";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <h2 style={style} className={styles}>
      {children}
    </h2>
  );
};
Typography.H2Medium = ({ children, style, className }) => {
  const defaultStyles = " text-4xl font-medium text-gray-100";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <h2 style={style} className={styles}>
      {children}
    </h2>
  );
};
Typography.H3Medium = ({children, style, className}) => {
  const defaultStyles = " text-3xl font-medium text-gray-100";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <h2 style={style} className={styles}>
      {children}
    </h2>
  );
}
Typography.P18 = ({ children, style, className }) => {
  const defaultStyles = " text-lg font-normal text-gray-100";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <p style={style} className={styles}>
      {children}
    </p>
  );
};