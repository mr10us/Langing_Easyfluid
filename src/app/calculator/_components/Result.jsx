import { Tooltip } from "antd";

export const Result = ({resultParams}) => {
  return (
    <>
      <p className="py-4 text-lg">
        So, if you proceed with the recommendations above, you will end up with
        exactly target concentration with 100% full tank.
      </p>
      <div className="grid grid-flow-col gap-4 my-4">
        {resultParams.map(({ key, data }) => {
          if (!data.value) return null;
          return (
            <Tooltip
              title={data.explanation || "No explanation"}
              placement="top"
              key={key}
            >
              <div
                className="flex flex-col gap-4 bg-[#f3f9ff] overflow-hidden rounded-[20px] shadow-lg"
              >
                <h3 className="bg-blue text-center p-2 font-bold text-gray-100">
                  {key}
                </h3>

                <p className="text-center pb-4">{data.value || 0}</p>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </>
  );
};
