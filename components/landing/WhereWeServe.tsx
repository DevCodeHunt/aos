import React from "react";
import { TypingText } from "../layout/CustomText";
import Earth3D from "../layout/Earth3D";

const WhereWeServe = () => {
  return (
    <section className="py-8">
      <TypingText title="WHERE WE SERVE" textStyles="text-center" />
      <Earth3D />
    </section>
  );
};

export default WhereWeServe;
