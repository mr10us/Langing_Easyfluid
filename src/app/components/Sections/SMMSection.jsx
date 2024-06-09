import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";

const cards = [
  {
    title: "230L",
    subtitle: "Concentration",
    content: "Target concentration 7%",
  },
  {
    title: "7%",
    subtitle: "Tank volume",
    content: "Machine tank volume is 230L",
  },
  {
    title: "3%",
    subtitle: "Topping-up concentration",
    content: "Central mixer concentration is 3%",
  },
];

export const SMMSection = () => {
  return (
    <SectionLayout className="bg-white py-10 pb-20">
      <MainWrapper>
        <div className="px-5 flex flex-col justify-center gap-5 items-center mb-10">
          <Typography.H2Medium className="text-gray-dark">
            Let’s look into what it actually leads to, i.e.,
            <span className="text-blue">“Show me the money”!</span>
          </Typography.H2Medium>
          <p className="text-2xl text-gray">
            Imagine we have a setup like this:
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="group flex gap-5 justify-between h-1/2 w-full">
            {cards.map((card) => (
              <Card
                className="card transition-opacity duration-500 shadow-2xl"
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gap: 15,
                  width: "calc((100% - 40px) / 3)",
                }}
                key={card.title}
                showAnim
              >
                <p className="text-2xl font-bold text-blue">{card.title}</p>

                <p className="text-gray-dark text-xl font-medium">
                  {card.subtitle}
                </p>
                <p className="text-gray font-regular text-xl">{card.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
