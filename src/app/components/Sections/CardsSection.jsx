import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { EFDemoCard } from "./EFDemoCard";
import { BDCard } from "./BDCard";
import { HTSCard } from "./HTSCard";
import { DemoCard } from "./DemoCard";

export const CardsSection = () => {
  return (
    <SectionLayout className="bg-white py-16">
      <MainWrapper className="flex flex-col gap-16">
        <EFDemoCard />
        <BDCard />
        <HTSCard />
        <DemoCard />
      </MainWrapper>
    </SectionLayout>
  );
};
