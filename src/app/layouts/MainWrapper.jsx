export const MainWrapper = ({children, className, style}) => {
  const defaultStyles = " max-w-[1100px] mx-auto w-full";
  const styles = className ? className + defaultStyles : defaultStyles;
  return (
    <div className={styles} style={style}>{children}</div>
  )
}