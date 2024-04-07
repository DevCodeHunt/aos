import AOS from "@/components/layout/AOS";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { hiras } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "HRIA",
}

const HRIAPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8 flex md:flex-row md:gap-4 gap-6 flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-semibold mb-4">
            HEALTH IMPACT ASSESSMENT
          </h1>
          <p className="opacity-80 sm:text-base text-sm">
            GIA seamlessly blends impact assessment and public health expertise
            into comprehensive HIAs, revealing potential risks and unlocking
            healthier futures for communities and projects.
          </p>
        </div>
        <Image
          src="/images/assessment/13.png"
          alt="globe"
          width={400}
          height={400}
          className="md:w-1/2 w-full md:h-[400px] object-contain rounded"
        />
      </section>

      <section className="py-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
        {hiras.map((hria, index) => {
          return (
            <AnimationWrapper
              key={index}
              transition={{ duration: 1, delay: index * 0.08 }}
            >
              <div className="flex flex-col p-4 rounded shadow-lg gap-4 items-center">
                <Image
                  src={hria.image}
                  alt="eia"
                  width={200}
                  height={200}
                  className="object-contain rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-center">
                    {hria.title}
                  </h2>
                  <p className="opacity-70 text-sm text-center mt-4">
                    {hria.description}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </section>

      <section className="py-8">
        <Title title="A System For All Your Assessment Needs" />
        <AOS
          href1="aos-impact-assessment"
          href2="/services/impact-assessment"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default HRIAPage;
