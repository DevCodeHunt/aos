import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Title from "@/components/layout/Title";
import { services } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Assessment",
}

const ImpactAssessmentPage = () => {
  return (
    <>
      <AnimationWrapper>
        <section className="py-8 flex gap-4 md:flex-row flex-col-reverse md:items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="sm:text-3xl text-xl font-semibold">
              IMPACT ASSESSMENT SERVICES
            </h1>
            <p className="opacity-70 mt-3">
              Business and Philanthropy can be powerful agents of positive
              change. Our impact experts and cutting-edge technologies empower
              clients to revolutionize their core operations, driving lasting
              positive impact on the economy, environment, and society &ndash;
              all while ensuring long-term profitability and sustainability.
            </p>
          </div>
          <Image
            src="/images/assessment/16.png"
            alt="eia"
            width={400}
            height={400}
            className="rounded md:ml-auto md:w-1/2 w-full object-contain md:h-[450px]"
          />
        </section>

        <section className="py-8">
          <Title title="GIA’S ASSESSMENT PATHWAY" />
          <Image
            src="/gifs/Framework.gif"
            alt="EIA"
            loading="lazy"
            width={800}
            height={800}
            className="mt-10 w-full"
          />
        </section>

        <section className="py-8">
          <Title title="OUR SERVICES" />

          <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {services.map((service, i) => (
              <AnimationWrapper
                transition={{ duration: 1, delay: i * 0.08 }}
                key={i}
              >
                <div className="shadow-lg p-4 rounded">
                  <h1 className="font-semibold mb-4 text-center">
                    {service.title}
                  </h1>
                  <Link href={service.link}>
                    <Image
                      width={400}
                      height={400}
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full object-contain rounded"
                    />
                  </Link>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </section>

        <section
          style={{
            backgroundImage: "url(/images/assessment/contact.png)",
          }}
          className="w-full h-[300px] bg-cover bg-no-repeat bg-current flex items-center justify-center rounded my-12"
        >
          <a
            href="mailto:inquiry@globalimpactassessment.com"
            className="border rounded px-4 py-3 border-white text-white"
          >
            Contact Us
          </a>
        </section>
      </AnimationWrapper>

      <Footer />
    </>
  );
};

export default ImpactAssessmentPage;
