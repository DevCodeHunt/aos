import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AOS",
}

const AosPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8 flex items-center md:flex-row flex-col gap-4">
        <div className="flex flex-col md:w-1/2 w-full">
          <h1 className="text-lg font-poppins font-medium leading-tight">
            About AOS
          </h1>
          <p className="text-2xl font-semibold leading-normal my-3">
            THE WORLD`&#39;S FIRST END-TO-END <br /> PLATFORM FOR IMPACT
            ASSESSMENT
          </p>
        </div>

        <Image
          src="/images/aos/aos-1.png"
          alt="aos1"
          loading="lazy"
          className="md:w-1/2 w-full"
          width={400}
          height={400}
        />
      </section>

      <section className="py-8">
        <div className="flex items-center md:flex-row flex-col gap-4">
          <p className="text-xl font-semibold leading-normal my-3 md:w-1/2 w-full">
            Revolutionary and secure, AOS is a versatile, cloud-agnostic
            assessment platform expertly designed to cater to your diverse needs
            in impact assessment, analytics, data solutions, and visualization.
            Embrace the future with AOS - your gateway to creating a
            sustainable, AI-enhanced organization in an era of technological
            advancement and human-centric innovation.
          </p>
          <Image
            width={800}
            height={800}
            src="/images/aos/aos-2.png"
            alt="aos2"
            loading="lazy"
            className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
          />
        </div>

        <div className="grid md:grid-cols-4 min-[500px]:grid-cols-2 grid-cols-1 max-w-[900px] w-full mx-auto place-items-center  my-6 mt-12 gap-4">
          <Link href="/aos-info">
            <Image
              width={300}
              height={300}
              src="/images/aos/5.png"
              alt="about-aos"
              className="rounded"
            />
          </Link>
          <Link href="/services/outcomes-assessment">
            <Image
              width={300}
              height={300}
              src="/images/aos/6.png"
              alt="outcomes"
              className="rounded"
            />
          </Link>
          <Link href="/services/aos-compass">
            <Image
              width={300}
              height={300}
              src="/images/aos/7.png"
              alt="compass"
              className="rounded"
            />
          </Link>
          <Link href="/aos-impact-assessment">
            <Image
              width={300}
              height={300}
              src="/images/aos/8.png"
              alt="impact"
              className="rounded"
            />
          </Link>
        </div>
      </section>

      <section className="py-8 flex items-center md:flex-row flex-col md:gap-4 gap-8">
        <Image
          width={400}
          height={400}
          src="/images/aos/aos-4.png"
          alt="aos4"
          loading="lazy"
          className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
        />
        <div className="md:w-1/2 w-full">
          <div className="font-righteous bg-gradient-to-r from-blue-400 to-blue-600 rounded h-14 text-black font-normal text-xl tracking-wide flex items-center justify-center mb-6 w-[300px]">
            OUTCOMES ASSESSMENT
          </div>
          <p className="sm:text-xl text-lg font-semibold leading-normal mb-8">
            AOS is designed to support organizations in navigating the
            complexities of outcome evaluation, harnessing the power of AI and
            machine learning (ML) for depth and accuracy. AOS offers a robust,
            integrated framework that accelerates the translation of data into
            meaningful insights.
          </p>
          <Link
            href="/aos-outcome-assessment"
            className="border-2 border-black dark:border-white p-3 rounded hover:bg-transparent hover:dark:text-black sm:inline block text-center hover:dark:bg-white transition duration-300"
          >
            LEARN MORE ABOUT OUTCOME ASSESSMENT
          </Link>
        </div>
      </section>

      <section className="py-8 flex items-center md:flex-row flex-col md:gap-4 gap-8">
        <div className="md:w-1/2 w-full">
          <div className="font-righteous bg-gradient-to-r from-indigo-500  to-indigo-300 rounded h-14 text-black font-normal text-xl tracking-wide flex items-center justify-center mb-6 w-[300px]">
            COMPASS
          </div>
          <p className="sm:text-xl text-lg font-semibold leading-normal mb-8">
            AI-driven tool designed to optimize resource allocation by
            identifying the most impactful funding opportunities. Leveraging
            advanced analytics, it assesses &#34;where,&#34; &#34;who,&#34;
            &#34;how,&#34; and &#34;how much&#34; to fund, guiding organizations
            to invest in areas of greatest need. Through predictive insights,
            expert validation, and dynamic reporting, this feature ensures that
            every dollar is directed towards initiatives that promise the
            highest return in terms of social and environmental impact.
          </p>
          <Link
            href="/services/aos-compass"
            className="border-2 border-black dark:border-white p-3 rounded hover:bg-transparent hover:dark:text-black sm:inline block text-center hover:dark:bg-white transition duration-300"
          >
            LEARN MORE ABOUT COMPASS
          </Link>
        </div>
        <Image
          width={400}
          height={400}
          src="/images/aos/aos-5.png"
          alt="aos5"
          loading="lazy"
          className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
        />
      </section>

      <section className="py-8 flex items-center md:flex-row flex-col md:gap-4 gap-8">
        <Image
          width={400}
          height={400}
          src="/images/aos/aos-6.png"
          alt="aos6"
          loading="lazy"
          className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
        />
        <div className="md:w-1/2 w-full">
          <div className="font-righteous bg-gradient-to-r from-blue-300  to-green-500 rounded h-14 text-black font-normal text-xl tracking-wide px-4 flex items-center justify-center mb-6 w-[300px]">
            IMPACT ASSESSMENT
          </div>
          <p className="sm:text-xl text-sm-lg font-semibold leading-normal mb-8">
            AOS&lsquo;s combination of AI, ML, and geospatial technologies makes
            it an incredibly powerful tool, offering a new level of
            sophistication and accuracy in impact assessment. This cutting-edge
            approach positions us to help our clients make more informed
            decisions, backed by data-driven insights and comprehensive
            analyses. meaningful insights.
          </p>
          <Link
            href="/aos-impact-assessment"
            className="border-2 border-black dark:border-white p-3 rounded hover:bg-transparent sm:inline block text-center hover:dark:text-black hover:dark:bg-white transition duration-300"
          >
            LEARN MORE ABOUT IMPACT ASSESSMENT
          </Link>
        </div>
      </section>

      <section className="flex items-center flex-col gap-8 py-8">
        <p className="text-3xl font-mono font-semibold">AOS Framework</p>
        <Image
          width={400}
          height={400}
          src="/images/aos/aos.gif"
          alt="aos6"
          loading="lazy"
          className="w-full object-contain rounded"
        />
      </section>
      <Footer />
    </AnimationWrapper>
  );
};

export default AosPage;
