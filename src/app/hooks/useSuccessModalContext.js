import { useState } from "react";

export const useSuccessModalContext = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const toggleSuccessModal = () => setSuccessModalOpen((prev) => !prev);
  const SuccessModalContext = { isSuccessModalOpen, toggleSuccessModal };

  return SuccessModalContext;
};
