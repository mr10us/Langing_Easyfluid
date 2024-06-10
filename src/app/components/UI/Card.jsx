"use client";

import { cn } from "@/app/utils";
import { motion } from "framer-motion";

export const Card = ({ children, style, className, showAnim = false }) => {
  return (
    <motion.div
      className={cn("bg-gray-100 drop-shadow-md rounded-lg px-4 py-5 cursor-default", className)}
      style={style}
      {...(showAnim && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 1.05 },
      })}
    >
      {children}
    </motion.div>
  );
};
