import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AOS Compass",
}

const AosCompassPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8">
        <Image
          width={400}
          height={400}
          src="/images/compass/17.png"
          alt="compass"
          loading="lazy"
          className="w-full object-contain rounded mb-8"
        />

        <Link
          href="https://calendly.com/hello_global_impact_assessment/outcomes-assessment-inquiry"
          target="_blank"
          className="relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
        >
          CONNECT WITH AN EXPERT
        </Link>
      </section>

      <section className="py-8">
        <h1 className="text-center md:text-3xl text-2xl font-semibold">
          Navigating the Future of AI and ML for Impacts
        </h1>
        <p className="opacity-70 text-sm text-center mt-4">
          Data-driven strategies for impactful giving and investment -
          prioritize high-need-high-impact areas with confidence.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 my-6 mt-8">
          <div className="shadow-lg rounded p-4">
            <Image
              src="/images/compass/1.png"
              alt="compass-1"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <div className="mt-4">
              <h2 className="text-lg  font-semibold">
                Precision-Powered Philanthropy and investment
              </h2>
              <p className="text-sm mt-4">
                AOS demystifies the complex landscape of needs, enabling
                philanthropists and investors to pinpoint exactly where their
                funds can catalyze transformative change. This precision ensures
                that every dollar contributes to purposeful, high-impact
                outcomes.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-4 rounded">
            <Image
              src="/images/compass/2.png"
              alt="compass-2"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">
                Foresee Impact, Forge Futures
              </h2>
              <p className="text-sm mt-4">
                Leverage AI{"'"}s predictive prowess to navigate the potential
                futures your funding could create. By forecasting the ripple
                effects of philanthropic investments, AI empowers donors to not
                just contribute but to craft the future.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-4 rounded">
            <Image
              src="/images/compass/3.png"
              alt="compass-3"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">
                Adapt Strategies, Amplify Impact
              </h2>
              <p className="text-sm mt-4">
                In the fluid realm of philanthropy, needs and opportunities
                evolve rapidly. AI’s dynamic modeling adapts to this
                ever-changing landscape, offering strategies that evolve in
                real-time, ensuring sustained relevance and maximized impact.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-4 rounded">
            <Image
              src="/images/compass/4.png"
              alt="compass-4"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">
                Decisions Powered by Data, Directed by Heart
              </h2>
              <p className="text-sm mt-4">
                At the intersection of data and compassion, AI equips
                philanthropists and investors with deep insights derived from
                vast datasets, enabling decisions that are as informed and
                impactful as they are heartfelt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h1 className="text-center md:text-3xl text-2xl font-semibold mb-8">
          Key Features and Benefits of COMPASS
        </h1>

        <Image
          width={800}
          height={800}
          src="/images/compass/18.png"
          alt="compass 18"
          className="w-full"
        />
      </section>

      <section className="py-8">
        <Image
          width={800}
          height={800}
          src="/images/compass/19.png"
          alt="compass 19"
          className="w-full"
        />
      </section>

      <section className="py-8">
        <Image
          width={800}
          height={800}
          className="w-full"
          src="/images/compass/20.png"
          alt="compass 20"
        />
      </section>

      <Link
        href="/services/aos"
        className="relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
      >
        BACK TO AOS
      </Link>

      <Footer />
    </AnimationWrapper>
  );
};

export default AosCompassPage;
