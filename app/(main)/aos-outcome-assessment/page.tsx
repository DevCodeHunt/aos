import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { outcomeAssessments, outcomeData } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "AOS Outcome Assessment",
}

const AosOutcomeAssessment = () => {
  return (
    <AnimationWrapper>
      <section className="py-8 flex items-center md:flex-row flex-col-reverse md:gap-4 gap-6">
        <div className="flex flex-col md:w-1/2 w-full">
          <h1 className="text-lg font-poppins font-medium leading-tight">
            Outcomes Assessment: Measuring Success with Precision
          </h1>
          <p className="text-2xl font-semibold leading-normal my-3">
            Transform Data into Actionable Insights – Elevate Your Project&#39;s
            Impact with Precision and Clarity
          </p>
          <div className="mt-4">
            <Link
              href="https://calendly.com/hello_global_impact_assessment/impact-assessment-inquiry"
              target="_blank"
              className="mt-4 text-sm relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
            >
              CONNECT WITH AN EXPERT
            </Link>
          </div>
        </div>

        <Image
          src="/images/aos-outcome-assessment/design.png"
          alt="aos1"
          loading="lazy"
          className="md:w-1/2 w-full"
          width={400}
          height={400}
        />
      </section>

      <section className="py-8">
        <h1 className="text-center md:text-3xl text-2xl font-semibold">
          Navigating the Future of AI and ML in Outcomes Assessment
        </h1>
        <p className="opacity-70 text-sm text-center mt-4 md:w-1/2 mx-auto">
          The future of AI in the assessment industry is not just about
          technology. It&#39;s about revolutionizing how we understand impact
          and outcomes. Here are four key areas that are steering this exciting
          journey
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch my-6 mt-8">
          {outcomeData.map((data, index) => {
            return (
              <AnimationWrapper
                key={index}
                transition={{ duration: 1, delay: index * 0.08 }}
              >
                <div className="shadow-lg p-4 rounded h-full">
                  <Image
                    src={data.image}
                    alt={`aos-info-${index}`}
                    width={200}
                    height={200}
                    className="object-contain mx-auto rounded-full"
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">{data.title}</h2>
                    <p
                      className={`text-sm ${
                        index === 2 ? "xl:mt-12 mt-4" : "mt-4"
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <Title title="Key Features and Benefits of Impact Assessment" />
        <div className="flex flex-col gap-6 my-6 mt-8">
          {outcomeAssessments.map((data, index) => {
            return (
              <AnimationWrapper
                key={index}
                transition={{ duration: 1, delay: index * 0.08 }}
              >
                <div className="flex sm:flex-row flex-col items-center sm:gap-4 rounded gap-6 shadow-lg p-4">
                  <Image
                    src={data.image}
                    alt={`aos-info-${index}`}
                    width={80}
                    height={80}
                    className="object-contain rounded-full"
                  />
                  <h2 className="sm:text-lg font-semibold sm:text-start text-center">
                    {data.title}
                  </h2>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </section>

      <div className="py-8">
        <Link
          href="/services/aos"
          className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
        >
          BACK TO AOS
        </Link>
      </div>

      <Footer />
    </AnimationWrapper>
  );
};

export default AosOutcomeAssessment;
