import { useEffect, useRef, useState } from "react";

export const useTour = () => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);

  const [startTour, setStartTour] = useState(false);

  const toggleTour = () => {
    setStartTour((prev) => !prev);
  };

  const steps = [
    {
      title: "How to use the calculator?",
      description:
        "Let’s create the model of your first machine that will be used in this calculator. The data you enter will be stored in our system if you want to so that you will have access to this model down the road and use it for one machine - for free. Or just calculate corrections every time you use this calculator.",
      target: () => step1.current,
      placement: "center",
    },
    {
      title: "How to use the calculator?",
      description: "So, we need some data about your machine and cutting fluid you use:",
      target: () => step2.current,
    },
    {
      title: "Calculate",
      description: "Click the \"Calculate\" button",
      target: () => step3.current,
    },
    {
      title: "How to use the calculator?",
      description: "So, if you proceed with the recommendations based on your calculations, you will end up with exactly target concentration with 100% full tank.",
      target: () => step4.current,
    }
  ];

  useEffect(() => {
    if (startTour) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [startTour])

  return {step1, step2, step3, step4, toggleTour, startTour, steps};
};
