import { cn } from "../utils"

export const TextWrapper = ({children, style, className}) => {
  return (
    <div className={cn("max-w-[900px] mx-auto", className)} style={style}>{children}</div>
  )
}