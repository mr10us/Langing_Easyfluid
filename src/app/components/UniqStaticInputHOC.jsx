import { Badge } from "antd";
import { useContext } from "react";
import { VolumeModal } from "./Calculator/contexts/VolumeModalContext";

export const UniqStaticInputHOC = ({ children }) => {
  const { toggleVolumeModal } = useContext(VolumeModal);

  return (
    <Badge
      count={"?"}
      className="w-full cursor-pointer"
      onClick={toggleVolumeModal}
    >
      {children}
    </Badge>
  );
};
