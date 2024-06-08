export const SectionLayout = ({ children, className, style }) => {
  const defaultStyles = "";
  const styles = className ? className + defaultStyles : defaultStyles;
  const inlineStyles = style ? style : {};
  return (
    <section className={styles} style={inlineStyles}>{children}</section>
  );
};
