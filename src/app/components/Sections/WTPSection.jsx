import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";
import ArrowsIcon from "../../../../public/arrows.svg";
import PasscodeLock from "../../../../public/passcode-lock.svg";
import HeartHandshake from "../../../../public/heart-handshake.svg";

const cards = [
  {
    icon: <ArrowsIcon />,
    iconColor: "#116ACC",
    title: "To provide",
    content:
      "customers with complete control of what’s going on with your fluids",
  },
  {
    icon: <PasscodeLock />,
    iconColor: "#67D744",
    title: "Reduce spendings",
    content: "on fluids",
  },
  {
    icon: <HeartHandshake />,
    iconColor: "#51BBF6",
    title: "Reduce risks",
    content:
      "related to going outside recommended targets (read - bacterial growth, corrosion, skin allergy etc.)",
  },
];

export const WTPSection = () => {
  return (
    <SectionLayout
      style={{
        backgroundImage: "url(/WTP-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#F8F8F8",
      }}
      className="max-h-[470px] h-[470px]"
    >
      <MainWrapper style={{ height: "100%" }}>
        <div className="h-[152px] flex flex-col justify-center">
          <Typography.H2Bold>What’s the point?</Typography.H2Bold>
          <Typography.P18>The goal of the service is:</Typography.P18>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ height: "calc(100% - 152px)" }}
        >
          <div className="group flex gap-5 justify-between h-3/4">
            {cards.map((card) => (
              <Card
                className="card transition-opacity duration-500"
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gap: 15,
                  width: "calc((100% - 40px) / 3)",
                }}
                key={card.title}
                showAnim
              >
                <div
                  className="w-fit h-fit p-3 rounded-lg"
                  style={{ backgroundColor: card.iconColor }}
                >
                  {card.icon}
                </div>
                <Typography.H3Medium className="text-gray">
                  {card.title}
                </Typography.H3Medium>
                <Typography className="font-light text-gray" >
                  {card.content}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
