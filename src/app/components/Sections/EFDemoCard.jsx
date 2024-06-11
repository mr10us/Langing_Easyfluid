import { SectionCard } from "@/app/layouts/SectionCard";
import Image from "next/image";
import Done from "../../../../public/done.svg";
import { BlueButton } from "../UI/Buttons/BlueButton";

const benefits = [
  "you save on cutting fluid concentrate when you need to add water",
  "you avoid a situation when after topping-up you and up with too low concetration, thus, reducing risks of bacteria growth, corrosion etc.",
];

export const EFDemoCard = () => {
  return (
    <SectionCard
      className="flex flex-col md:flex-row gap-8 py-[90px] px-[50px] justify-center items-center"
      style={{
        backgroundColor: "#00346E",
        backgroundImage: "url(/EFDemoBG.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "right",
      }}
    >
      <div className="flex flex-col gap-6 md:w-1/2">
        <h2 className="text-[48px] font-bold text-gray-100">
          Lucky enough, <span className="text-blue">EasyFluid</span> comes to
          the rescue!
        </h2>
        <p className="font-medium text-lg text-gray-100">
          It calculates everything - all you need is to enter refractometer
          readings and fluid level in the machine sump! As a result:
        </p>
        <div>
          {benefits.map((text, index) => (
            <span
              key={index}
              className="flex items-center gap-4 font-light text-gray-100"
            >
              <div>
                <Done />
              </div>
              {text}
            </span>
          ))}
        </div>
        <BlueButton.a block withArrow>
          Go to EasyFluid
        </BlueButton.a>
      </div>
      <div className="md:w-1/2">
        <Pseudo3DImage />
      </div>
    </SectionCard>
  );
};

const Pseudo3DImage = () => {
  return (
    <Image
      src="/3d_easyfluid.png"
      width="520"
      height="410"
      alt="Easyfluid App"
      title="Easyfluid App"
    />
  );
};
