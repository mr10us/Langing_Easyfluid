import { useState } from "react";

export const useVolumeModalContext = () => {
  const [isVolumeModalOpen, setVolumeModalOpen] = useState(false);
  const toggleVolumeModal = () => setVolumeModalOpen((prev) => !prev);
  const volumeModalContext = { isVolumeModalOpen, toggleVolumeModal };

  return volumeModalContext;
};
