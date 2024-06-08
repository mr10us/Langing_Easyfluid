import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";

export const FeaturesSection = () => {
  return (
    <SectionLayout
      style={{
        backgroundImage: "url(/map.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center"
      }}
      className="max-h-[615px] h-[615px]"
    >
      <MainWrapper>
        <Typography.H2Bold>
          Features
        </Typography.H2Bold>
      </MainWrapper>
    </SectionLayout>
  );
};
