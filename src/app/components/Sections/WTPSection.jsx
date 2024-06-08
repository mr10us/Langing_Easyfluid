import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";
import ArrowsIcon from "../../../../public/arrows.svg";
import PasscodeLock from "../../../../public/passcode-lock.svg";
import HeartHandshake from "../../../../public/heart-handshake.svg";
import Image from "next/image";

export const WTPSection = () => {
  return (
    <SectionLayout
      style={{
        backgroundImage: "url(/WTP-bg.svg)",
        backgroundRepeat: "no-repeat",
      }}
      className="max-h-[470px] h-[470px]"
    >
      <MainWrapper style={{ height: "100%" }}>
        <div className="h-[152px] flex flex-col justify-center">
          <Typography.H2Bold>What’s the point?</Typography.H2Bold>
          <Typography.P18>The goal of the service is:</Typography.P18>
        </div>
        <div
          className="flex justify-between gap-5 items-center"
          style={{ height: "calc(100% - 152px)" }}
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 15,
              height: "70%",
              flexBasis: "33.333%",
            }}
          >
            <div className="bg-blue w-fit p-3 rounded-lg">
              <ArrowsIcon />
            </div>
            <Typography.H3Medium style={{ color: "#424242" }}>
              To provide
            </Typography.H3Medium>
            <Typography className="font-light" style={{ color: "#424242" }}>
              customers with complete control of what’s going on with your
              fluids
            </Typography>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 15,
              height: "70%",
              flexBasis: "33.333%",
            }}
          >
            <div className="bg-[#67D744] w-fit p-3 rounded-lg">
              <PasscodeLock />
            </div>
            <Typography.H3Medium style={{ color: "#424242" }}>
              Reduce spendings
            </Typography.H3Medium>
            <Typography className="font-light" style={{ color: "#424242" }}>
              on fluids
            </Typography>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 15,
              height: "70%",
              flexBasis: "33.333%",
            }}
          >
            <div className="bg-[#51BBF6] w-fit p-3 rounded-lg">
              <HeartHandshake />
            </div>
            <Typography.H3Medium style={{ color: "#424242" }}>
              Reduce risks
            </Typography.H3Medium>
            <Typography className="font-light" style={{ color: "#424242" }}>
              related to going outside recommended targets (read - bacterial
              growth, corrosion, skin allergy etc.){" "}
            </Typography>
          </Card>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
