export const formPopup = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.5, stiffness: 150, mass: 0.5 },
  },
  hide: {
    opacity: 0,
    x: -20,
    transition: { type: "spring", duration: 0.5, },
  },
};