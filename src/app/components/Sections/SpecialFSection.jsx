import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import Image from "next/image";

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

export const SpecialFSection = () => {
  return (
    <SectionLayout className="h-full bg-white py-20" id="specials">
      <MainWrapper>
        <div
          className="rounded-[30px] p-10 shadow-md hover:shadow-2xl transition-shadow duration-500"
          style={{
            backgroundImage: "url('/specialF.svg')",
            backgroundColor: "#fafafa",
            backgroundSize: "cover",
          }}
        >
          <TextWrapper style={{ padding: "0 60px" }}>
            <Typography.H2Bold className="text-gray-dark w-3/4 text-center mx-auto mb-10">
              Some <span className="text-blue">special features</span> that
              relate to cutting fluids
            </Typography.H2Bold>
            {blockOne.map((item, index) => (
              <Typography
                key={index}
                className={`text-${item.color} font-${item.fontWeight} text-gray mb-5`}
              >
                {item.text}
              </Typography>
            ))}
            <Image
              src="/firstSpecial.png"
              className="mx-auto mb-10"
              width="900"
              height="515"
              alt="graph"
            />
            {blockTwo.map((item, index) => (
              <Typography
                key={index}
                className={`text-${item.color} font-${item.fontWeight} text-gray mb-5`}
              >
                {item.text}
              </Typography>
            ))}
            <Image
              src="/secondSpecial.png"
              className="mx-auto mb-10"
              width="900"
              height="515"
              alt="graph"
            />
          </TextWrapper>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
