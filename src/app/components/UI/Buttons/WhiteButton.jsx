import { cn } from "@/app/utils"

export const WhiteButton = ({children, onClick, style, className}) => {
  return (
    <button onClick={onClick} className={cn("bg-gray-100 text-gray-dark", className)} style={style}>{children}</button>
  )
}

WhiteButton.a = ({children, href = "#", style, className}) => {
  return (
    <button href={href} className={cn("bg-gray-100 text-gray-dark", className)} style={style}>{children}</button>
  )
}