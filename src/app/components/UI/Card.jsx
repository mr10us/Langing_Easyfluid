"use client";

import { cn } from "@/app/utils";
import { motion } from "framer-motion";

/**
 * A reusable card component.
 *
 * @param {Object} props - The properties for the card component.
 * @param {ReactNode} props.children - The content of the card.
 * @param {Object} props.style - The inline styles for the card.
 * @param {string} props.className - The additional class name for the card.
 * @param {boolean} [props.showAnim=false] - Whether to show animation on hover.
 * @returns {ReactElement} The rendered card component.
 */
export const Card = ({ children, style, className, showAnim = false }) => {
  return (
    // The card component is a div with motion.div for animation.
    <motion.div
      // Apply the default styles and additional class name.
      className={cn("bg-gray-100 drop-shadow-md rounded-lg px-4 py-5 cursor-default", className)}
      // Apply the inline styles.
      style={style}
      // Apply animation on hover if showAnim is true.
      {...(showAnim && {
        whileHover: { scale: 1.05 },
      })}
    >
      {/* Render the content of the card. */}
      {children}
    </motion.div>
  );
};
