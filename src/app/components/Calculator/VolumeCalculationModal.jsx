import { Modal } from "antd";
import Image from "next-export-optimize-images/image";
import { Typography } from "../UI/Typography";
import { VolumeModal } from "./contexts/VolumeModalContext";
import { useContext, useEffect } from "react";

export const VolumeCalculationModal = () => {
  const { isVolumeModalOpen, toggleVolumeModal } = useContext(VolumeModal);

  useEffect(() => {
    if (isVolumeModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isVolumeModalOpen]);

  return (
    <Modal
      centered
      keyboard
      maskClosable
      footer={null}
      className="md:!w-3/5"
      open={isVolumeModalOpen}
      onCancel={toggleVolumeModal}
    >
      <div className="w-full flex flex-col gap-6">
        <Typography.H2Bold className="text-blue">
          How to calculate your machine sump area?
        </Typography.H2Bold>
        <div className="flex flex-col gap-2">
          <Typography.P18>
            If you don't know some parameters of your machine, you can calculate
            them from the existing parameters.
          </Typography.P18>
          <Typography.P18>
            The picture shows an example tank with its height (H), you need to
            calculate its volume (S) by the formula:
            <code> S = A x B + C x D </code>
            <b>or</b>
            <code> S = AV/Hmax</code>.
          </Typography.P18>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-20 justify-between w-full">
          <Image
            className="h-auto md:w-1/3 mx-auto"
            src="/machine_expl1.png"
            width="300"
            height="400"
            alt="machine"
          />
          <Image
            className="h-auto md:w-1/3 mx-auto"
            src="/machine_expl2.png"
            width="300"
            height="400"
            alt="machine"
          />
        </div>
      </div>
    </Modal>
  );
};
