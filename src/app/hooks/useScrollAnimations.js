import { useTransform, useScroll } from "framer-motion";

const useScrollAnimations = () => {
  const { scrollY } = useScroll();

  const widgetY = useTransform(scrollY, [0, 800], [0, -250]);
  const widgetX = useTransform(scrollY, [0, 800], [0, 80]);

  const phoneX = useTransform(scrollY, [0, 800], [0, 100]);

  const manOneY = useTransform(scrollY, [0, 800], [0, -400]);
  const manTwoY = useTransform(scrollY, [0, 800], [0, -320]);
  const manThreeY = useTransform(scrollY, [0, 800], [0, -100]);

  const manOneX = useTransform(scrollY, [0, 800], [0, 220]);
  const manTwoX = useTransform(scrollY, [0, 800], [0, 180]);
  const manThreeX = useTransform(scrollY, [0, 800], [0, 200]);

  return {
    widgetY,
    widgetX,
    phoneX,
    manOneY,
    manTwoY,
    manThreeY,
    manOneX,
    manTwoX,
    manThreeX,
  };
};

export default useScrollAnimations;
