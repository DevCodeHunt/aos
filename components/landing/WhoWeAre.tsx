import React from "react";
import { TypingText } from "../layout/CustomText";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="py-8">
      <TypingText title="WHO WE ARE" textStyles="text-center" />
        <div className="flex md:flex-row flex-col md:items-center gap-4 my-8">
          <p className="md:w-1/2 w-full md:text-base text-sm md:text-start text-center">
            Global Impact Assessment (GIA) is a global technology and consulting
            firm that provides streamlined environmental, social, human rights,
            and health impacts and outcomes assessment services. GIA&#39;s unique
            impacts and outcomes assessment approach combines a variety of data
            collection and analysis methods, including satellite technology,
            machine learning, surveys, and interviews, to provide a holistic
            assessment of the impact of projects, programs, and initiatives.
            GIA&#39;s use of technology, expertise, and global reach can save time
            and cost substantially compared to traditional impact assessment
            methods. GIA is relied on by nonprofits, governments, private
            organizations, and corporations worldwide to measure and improve the
            impact of their operations.
          </p>
          
          <Image src="/images/team.jpg" alt="who we are" width={400} height={400} className=" object-cover rounded-full sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] mx-auto md:mt-0 mt-6" />
        </div>
    </section>
  );
};

export default WhoWeAre;
