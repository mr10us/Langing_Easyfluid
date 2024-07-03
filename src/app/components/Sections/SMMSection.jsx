import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";

const cards = [
  {
    title: "230L",
    subtitle: "Tank volume",
    content: "Machine tank volume is 230L",
  },
  {
    title: "7%",
    subtitle: "Concentration",
    content: "Target concentration 7%",
  },
  {
    title: "3%",
    subtitle: "Topping-up concentration",
    content: "Central mixer concentration is 3%",
  },
];

/**
 * SMMSection component displays the SMM section of the page.
 * It consists of a section layout with a main wrapper and a set of cards.
 *
 * @returns {JSX.Element} The SMMSection component
 */
export const SMMSection = () => {
  return (
    // Section layout with a background color and padding
    <SectionLayout className="bg-white py-10 pb-20">
      <MainWrapper>
        {/* Header section */}
        <div className="px-5 flex flex-col justify-center gap-5 items-center mb-10 text-center lg:text-start">
          {/* Heading */}
          <Typography.H2Medium className="text-gray-dark">
            {/* Heading text */}
            Let’s look into what it actually leads to, i.e.,
            <span className="text-blue">“Show me the money”!</span>
          </Typography.H2Medium>
          {/* Subheading */}
          <p className="text-2xl text-gray">
            {/* Subheading text */}
            Imagine we have a setup like this:
          </p>
        </div>
        {/* Cards section */}
        <div className="flex items-center justify-center">
          <div className="group flex gap-5 flex-col md:flex-row justify-between h-1/2 md:w-full">
            {/* Map over the cards array to render each card */}
            {cards.map((card) => (
              <Card
                // Card styles
                className="three_cards-width card transition-opacity duration-500 shadow-2xl grid grid-rows-[1fr, 1fr, 1fr] gap-4"
                key={card.title}
                showAnim
              >
                {/* Card title */}
                <p className="text-2xl font-bold text-blue self-start">{card.title}</p>
                {/* Card subtitle */}
                <p className="text-gray-dark text-xl font-medium self-start">
                  {card.subtitle}
                </p>
                {/* Card content */}
                <p className="text-gray font-regular text-xl self-end">{card.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
