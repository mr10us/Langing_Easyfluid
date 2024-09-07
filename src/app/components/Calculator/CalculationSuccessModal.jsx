import { Modal } from "antd";
import { useContext, useEffect } from "react";
import { CalculationSuccessModalContext } from "./contexts/CalculationSuccessModalContext";
import { Typography } from "../UI/Typography";
import Image from "next-export-optimize-images/image";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { CloseOutlined } from "@ant-design/icons";

export const CalculationSuccessModal = () => {
  const { isSuccessModalOpen, toggleSuccessModal } = useContext(
    CalculationSuccessModalContext
  );

  useEffect(() => {
    if (isSuccessModalOpen) {
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
  }, [isSuccessModalOpen]);

  return (
    <Modal
      centered
      keyboard
      maskClosable
      footer={null}
      closeIcon={<CloseOutlined style={{ color: 'white' }} />}
      className="md:!w-3/5"
      classNames={{
        content: "bg-modal-gradient",
      }}
      open={isSuccessModalOpen}
      onCancel={toggleSuccessModal}
    >
      <div className="flex flex-col items-center w-4/5 mx-auto gap-4">
        <Typography.H2Bold className="text-gray-200">
          <span className="text-blue">Successful </span>calculation!
        </Typography.H2Bold>

        <Typography.P18 className="text-gray-200 text-center">
          Do you want to use our program for free forever, but with one machine
          and parameters that YOU have recorded here?
        </Typography.P18>
        <Image
          className="mx-auto w-2/3 h-auto"
          src="/3d_easyfluid.png"
          width="520"
          height="410"
          alt="Easyfluid App"
        />
        <Typography className="text-gray-200">
          Click here and use it!
        </Typography>
        <BlueButton>Go to EasyFluid</BlueButton>
      </div>
    </Modal>
  );
};
