"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // Add overflow:hidden to the body to prevent scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) return null;

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleBackgroundClick}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="relative bg-modal-gradient rounded-lg shadow-lg w-11/12 h-1/2 md:h-1/2 md:w-1/2 lg:w-1/3 lg:h-fit">
          <div className="absolute top-0 right-0 flex justify-end p-2">
            <button
              onClick={onClose}
              className="text-gray-200 text-4xl font-light leading-[0.5] mr-4 mt-4 hover:text-white"
            >
              &times;
            </button>
          </div>
          <div className="p-10 w-full h-full flex items-center">{children}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;