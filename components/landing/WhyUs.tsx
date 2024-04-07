import React from "react";
import { TypingText } from "../layout/CustomText";

const WhyUs = () => {
  return (
    <section className="py-8">
     <TypingText title="WHY US" textStyles="text-center" />
        <p className="mt-6 font-normal md:w-1/2 mx-auto w-full text-center sm:text-xl text-sm">
          Working with us provides the reassurance of having experienced
          professionals on your team. We guide our clients in comprehending
          their impacts, minimizing risks, maximizing values, and evaluating and
          predicting outcomes with exceptional accuracy and dependability.
        </p>
    </section>
  );
};

export default WhyUs;
