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
    content: "on fluids, make your business more efficient",
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
    <SectionLayout className="md:max-h-[470px] md:h-[470px]" id="about">
      <div
        style={{
          backgroundImage: "url(/WTP-bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F8F8F8",
          backgroundSize: "cover",
        }}
      >
        <MainWrapper style={{ height: "100%" }}>
          <div className="h-[152px] flex flex-col justify-center">
            <Typography.H2Bold className="text-gray-100">
              What’s the point?
            </Typography.H2Bold>
            <Typography.P18 className="text-gray-100">
              The goal of the service is:
            </Typography.P18>
          </div>
        </MainWrapper>
      </div>
      <MainWrapper style={{ height: "calc(100% - 152px)" }}>
        <div className="flex items-center justify-center h-full">
          <div className="group flex gap-5 justify-between flex-col h-5/6 md:flex-row my-6 md:py-0">
            {cards.map((card) => (
              <Card
                className="card transition-opacity duration-500 grid grid-cols-[auto,1fr,1fr] md:grid-cols-1 items-center md:items-start md:grid-rows-[0.5fr,0.5fr,1fr] gap-4 md:three_cards-width w-full"
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
                <Typography className="font-light text-gray">
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
