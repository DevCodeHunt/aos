import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { aosData } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "AOS Info",
}

const AOSInfoPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8">
        <div className="flex flex-col-reverse md:items-center md:flex-row md:gap-4 gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
              Transforming Assessment with Precision and Insight.
            </h1>
            <p className="md:text-lg mt-4">
              AI-driven Solutions for Impact and Outcomes Assessments.
            </p>
          </div>
          <Image
            src="/images/aos-info/concentric-circles.png"
            alt="concentric-circles"
            width={400}
            height={400}
            className="md:w-1/2 w-full md:h-[500px] object-contain"
          />
        </div>
      </section>

      <section className="py-8">
        <h1 className="text-center md:text-3xl text-2xl font-semibold">
          Navigating the Future of AI and ML in the Assessment Industry
        </h1>
        <p className="opacity-70 text-sm text-center mt-4 md:w-1/2 mx-auto">
          The future of AI in the assessment industry is not just about
          technology; it`&#39;s about revolutionizing how we understand impact
          and outcomes. Here are four key areas that are steering this exciting
          journey
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch my-6 mt-8">
          {aosData.map((data, index) => {
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
                    className="object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">{data.title}</h2>
                    <p
                      className={`text-sm ${
                        index === 1 ? "xl:mt-12 mt-4" : "mt-4"
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
        <Title title="Key Features and Benefits of AOS" />
        <div className="grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 gap-4 my-6">
          <div className="p-4 rounded  shadow-lg gap-4 items-center justify-center">
            <Image
              src="/images/aos-info/1.png"
              alt="aos-info-1"
              width={200}
              height={200}
              className="object-contain rounded-full py-2 mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                AI-Powered Precision Analytics
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Advanced AI algorithms for deep data analysis and pattern
                  recognition.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Uncover nuanced insights and precise outcomes from complex
                  data, leading to smarter, data-driven decisions for your
                  projects.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded  shadow-lg gap-4 items-center justify-center">
            <Image
              src="/images/aos-info/2.png"
              alt="aos-info-1"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Comprehensive Data Integration
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Seamless aggregation and synchronization of data from multiple
                  sources.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Hassle-free data management with integrated tools, providing a
                  unified view of your project&#39;s impact, saving time and
                  resources.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded  shadow-lg">
            <Image
              src="/images/aos-info/3.png"
              alt="aos-info-1"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Data and Analytic Tools Integration
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  {" "}
                  Seamlessly integrates with various data collection and
                  analytic tools.{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded p-4  shadow-lg">
            <Image
              src="/images/aos-info/4.png"
              alt="aos-info-4"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Expert-Validated Insights
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Every AI-generated insight undergoes rigorous expert
                  validation.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Gain confidence in AI conclusions, reinforced by domain
                  experts, ensuring that your decisions are grounded in both
                  technology and human expertise.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded shadow-lg">
            <Image
              src="/images/aos-info/5.png"
              alt="aos-info-5"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Scalable and Collaborative Platform
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Designed for scalability, accommodating projects of all sizes,
                  and fostering collaboration.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Whether you&#39;re assessing a local initiative or a global
                  program, AOS scales with you, promoting team collaboration and
                  streamlined project management.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded  shadow-lg">
            <Image
              src="/images/aos-info/6.png"
              alt="aos-info-6"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Geospatial Analysis Options
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Advanced geospatial analysis capabilities, integrating
                  location-based data into assessments.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Unlock spatial insights and understand geographical impacts
                  like never before, adding an essential dimension to your
                  evaluations.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded  shadow-lg">
            <Image
              src="/images/aos-info/7.png"
              alt="aos-info-7"
              width={200}
              height={200}
              className="object-contain rounded-full mx-auto"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Public Participation, Mitigation, and Monitoring
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  Integrates features for public participation, mitigation
                  strategies, monitoring, and evaluation, as well as
                  recommendation generation
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded shadow-lg">
            <Image
              src="/images/aos-info/8.png"
              alt="aos-info-8"
              width={200}
              height={200}
              className="object-contain rounded-full"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">
                Dynamic Reporting and Visualization
              </h2>
              <ul className="list-disc flex flex-col gap-2 mt-2 px-4">
                <li className="text-sm opacity-80 dark:opacity-75">
                  State-of-the-art data visualization and dynamic reporting
                  tools.
                </li>
                <li className="text-sm opacity-80 dark:opacity-75">
                  Transform data into compelling visual stories, making it
                  easier to communicate your impact and engage stakeholders
                  effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default AOSInfoPage;
