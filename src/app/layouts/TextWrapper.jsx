export const TextWrapper = ({children, style, className}) => {
  const defaultStyles = " max-w-[900px] mx-auto";
  const styles = className ? className + defaultStyles : defaultStyles;
  return (
    <div className={styles} style={style}>{children}</div>
  )
}