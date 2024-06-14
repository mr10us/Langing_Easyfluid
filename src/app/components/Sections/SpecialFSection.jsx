import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import Image from "next/image";
import { SectionCard } from "@/app/layouts/SectionCard";

const blockOne = [
  {
    text: "We all know, that when you a lathe or milling machine works, there are two processes that occur at the same time: drag out of emulsion on chips and water evaporation.",
    color: "gray-dark",
    fontWeight: "regular",
  },
  {
    text: "If there was no water evaporation, then you would need to top-up machine with exactly target (or so-called “make-up”) concentration (for example, grinding is such a process, nearly 0 evaporation).",
    color: "gray-dark",

    fontWeight: "regular",
  },
  {
    text: "If there was no drag out on chips, then you would add just water, in other words, your top-up concentration would be equal to 0%. Depending on the type work you do your emulsion concentration will be every time different.",
    color: "gray-dark",
    fontWeight: "regular",
  },
  {
    text: "This is what happens if you have more of evaporation, than drag out on chips:",
    color: "gray-dark",
    fontWeight: "medium",
  },
];
const blockTwo = [
  {
    text: "As you see, as machine sump level goes down, concentration rises pretty much in a sharp way and after filling in machine with 3% of top-up emulsion from mixer, you end up with 7,9% of concentration which is higher, than your target concentration of 7%. ",
    color: "gray-dark",
    fontWeight: "regular",
  },
  {
    text: "The opposite scenario - you have less heat but more chips produced in your work.",
    color: "gray-dark",
    fontWeight: "regular",
  },
  {
    text: "Here’s what to expect:",
    color: "gray-dark",
    fontWeight: "medium",
  },
];

/**
 * SpecialFSection component displays some special features related to cutting fluids.
 * It uses SectionLayout and MainWrapper components to create a section layout.
 * Inside the section layout, there is a div with a background image and styles.
 * Inside the div, there is a TextWrapper component with some Typography components and two Image components.
 * The Typography components display blocks of text from blockOne and blockTwo arrays.
 * The Image components display two graphs.
 */
export const SpecialFSection = () => {
  return (
    // SectionLayout component with id "specials" and className "h-full bg-white py-20"
    <SectionLayout className="h-full bg-white py-20" id="specials">
      <MainWrapper>
        {/* Div with rounded corner, padding, shadow and background image */}
        <SectionCard
          className="py-5 md:py-0 md:p-10"
          style={{
            backgroundImage: "url('/specialF.svg')",
            backgroundColor: "#fafafa",
            backgroundSize: "cover",
          }}
        >
          <TextWrapper style={{ padding: "20px 60px" }}>
            <Typography.H2Bold className="text-gray-dark w-3/4 text-center mx-auto mb-10">
              {/* Heading with blue text "special features" */}
              Some <span className="text-blue">special features</span> that
              relate to cutting fluids
            </Typography.H2Bold>
            {/* Map over blockOne array to display Typography components */}
            {blockOne.map((item, index) => (
              <Typography
                key={index}
                className={`text-${item.color} font-${item.fontWeight} text-gray mb-5`}
              >
                {/* Display text from item */}
                {item.text}
              </Typography>
            ))}
            {/* Display first graph */}
            <Image
              src="/firstSpecial.png"
              className="mx-auto mb-10"
              width="900"
              height="515"
              alt="graph"
            />
            {/* Map over blockTwo array to display Typography components */}
            {blockTwo.map((item, index) => (
              <Typography
                key={index}
                className={`text-${item.color} font-${item.fontWeight} text-gray mb-5`}
              >
                {/* Display text from item */}
                {item.text}
              </Typography>
            ))}
            {/* Display second graph */}
            <Image
              src="/secondSpecial.png"
              className="mx-auto mb-10"
              width="900"
              height="515"
              alt="graph"
            />
          </TextWrapper>
        </SectionCard>
      </MainWrapper>
    </SectionLayout>
  );
};
