export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const slideInY = {
  hidden: { y: 100 },
  show: { y: 0, transition: { type: "spring", duration: 1.2 } },
};
export const slideInX = {
  hidden: { x: 100 },
  show: { x: 0, transition: { type: "spring", duration: 1 } },
};
