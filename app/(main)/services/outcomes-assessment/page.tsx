import React from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Title from "@/components/layout/Title";
import AOS from "@/components/layout/AOS";
import { outcomesAssessments } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcomes Assessments",
}

const OutcomesAssessmentPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8 flex md:flex-row md:gap-4 gap-6 flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-semibold mb-4">
            Pioneering Outcome Assessment Solutions
          </h1>
          <p className="opacity-80 sm:text-base text-sm">
            GIA&#39;s assessment system and advanced analytics, including
            machine learning and satellite imaging enable precise, scalable, and
            efficient measurement of social and environmental outcomes.
          </p>
        </div>
        <Image
          src="/images/assessment/17.png"
          alt="globe"
          width={400}
          height={400}
          className="md:w-1/2 w-full md:h-[400px] object-contain rounded"
        />
      </section>

      <section className="py-8">
        <>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center text-blue-600">
            Enhancing Philanthropic Impact Through Data-Driven Insights
          </h1>
          <p className="text-sm mt-4 opacity-70 md:w-[70%] mx-auto w-full">
            The critical challenge for philanthropic organizations committed to
            driving social and environmental change is the ability to measure
            and identify evidence-based outcomes of the programs effectively.
            There is a clear need for scalable and robust evaluation methods to
            channel funds toward programs with the most significant impacts.
            Here are four key areas that are steering this exciting journey:
          </p>
        </>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 mt-10">
          {outcomesAssessments.map((obj, index) => {
            return (
              <AnimationWrapper
                transition={{ duration: 1, delay: index * 0.08 }}
                key={index}
              >
                <div className="p-4 rounded shadow-lg h-full">
                  <Image
                    src={obj.image}
                    alt="eia"
                    width={200}
                    height={200}
                    className="object-contain rounded-full mx-auto"
                  />
                  <div className="mt-2">
                    <h2 className="text-lg font-semibold">
                      {obj.title}
                    </h2>
                    <p className="dark:opacity-70 text-sm mt-4">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <Title title="A System For All Your Assessment Needs" />
        <AOS
          href1="/aos-outcome-assessment"
          href2="/services/impact-assessment"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default OutcomesAssessmentPage;

const Card = ({
  img,
  title,
  des,
}: {
  img: string;
  title: string;
  des: string;
}) => {
  return (
    <div className="shadow-lg p-4 rounded flex flex-col items-center justify-center gap-4">
      <Image
        src={img}
        alt="outcome-image"
        width={200}
        height={200}
        className="object-contain rounded-full"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="">{title}</h1>
        <p className="text-sm opacity-70">{des}</p>
      </div>
    </div>
  );
};
