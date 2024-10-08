import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import Image from "next-export-optimize-images/image";
import { Typography } from "../UI/Typography";

export const TediousSection = () => {
  return (
    <SectionLayout className="bg-tedious-gradient md:max-h-[215px] md:h-[215px] py-10 md:py-0 overflow-hidden">
      <MainWrapper className="flex flex-col md:flex-row justify-between gap-4 items-center h-full">
        <div className="md:w-1/2">
          <Image
            src="/tedious.png"
            width="300"
            height="280"
            alt="questioning man"
            title="questioning man"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-start">
          <Typography.H2Medium className="text-gray-dark">
            Sounds tedious, right?
          </Typography.H2Medium>
          <p className="text-gray text-base">
            It does. You really cannot do these calculations every time you are
            about to top-up machine sump, can you?
          </p>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
