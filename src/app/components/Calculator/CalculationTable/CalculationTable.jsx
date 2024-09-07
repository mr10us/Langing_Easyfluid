import { App, Button, ConfigProvider, Table } from "antd";
import {
  getTableData,
  getColumns,
  calculateParameters,
  getInitialTableData,
} from "./_utils";
import { TourContext } from "../contexts/TourContext";
import { useContext, useState } from "react";
import { CalculationSuccessModalContext } from "../contexts/CalculationSuccessModalContext";
import { CalculationSuccessModal } from "../CalculationSuccessModal";

const initialData = getInitialTableData();
const CalculationTable = () => {
  const [data, setData] = useState(initialData);
  const [clickCount, setClickCount] = useState(0); // Состояние для счётчика кликов
  const { toggleSuccessModal } = useContext(CalculationSuccessModalContext);

  const { step3 } = useContext(TourContext);
  const { message } = App.useApp();

  const columns = getColumns();

  const handleClickButton = () => {
    let result;
    try {
      result = calculateParameters();

      setClickCount((prevCount) => prevCount + 1);

      if (clickCount === 0 || clickCount % 3 === 0) {
        toggleSuccessModal();
      }

      setData(getTableData(result));
    } catch (error) {
      console.log(error);
      message.error(error.message);
    }
  };

  return (
    <ConfigProvider theme={{ components: { Table: { headerBg: "#F0F0F0" } } }}>
      <Button
        type="primary"
        size="large"
        className="ml-auto block mb-4"
        ref={step3}
        onClick={handleClickButton}
      >
        Calculate
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
        pagination={false}
      />

      <CalculationSuccessModal />
    </ConfigProvider>
  );
};

export default CalculationTable;
