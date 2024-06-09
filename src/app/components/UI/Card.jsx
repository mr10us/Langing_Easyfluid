"use client";

import { motion } from "framer-motion";

export const Card = ({ children, style, className, showAnim = false }) => {
  const defaultStyles =
    " bg-gray-100 drop-shadow-md rounded-lg px-4 py-5 cursor-default";
  const styles = className ? className + defaultStyles : defaultStyles;

  return (
    <motion.div
      className={styles}
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
