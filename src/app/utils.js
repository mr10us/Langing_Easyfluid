/**
 * 
 * @param  {...any} classNames : ClassValue[] 
 * @returns resolved className : String
 */

export const cn = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
}