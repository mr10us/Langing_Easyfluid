export const WhiteButton = ({children, onClick, style}) => {
  return (
    <button onClick={onClick} className="bg-gray-100" style={style}>{children}</button>
  )
}