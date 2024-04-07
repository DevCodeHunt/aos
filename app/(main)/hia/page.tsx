import { getAllProjects } from "@/actions";
import AOS from "@/components/layout/AOS";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { hias } from "@/constants";
import { Project } from "@/types";
import { convertToSlug } from "@/utils/convertToSlug";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "HIA",
}

const HIAPage = async () => {
  const projects = await getAllProjects();
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
          src="/images/assessment/14.png"
          alt="globe"
          width={400}
          height={400}
          className="md:w-1/2 w-full md:h-[400px] object-contain rounded"
        />
      </section>

      <section className="py-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
        {hias.map((hia, index) => {
          return (
            <AnimationWrapper
              key={index}
              transition={{ duration: 1, delay: index * 0.08 }}
            >
              <div
                key={index}
                className="flex flex-col p-4 rounded shadow-lg gap-4 items-center"
              >
                <Image
                  src={hia.image}
                  alt="eia"
                  width={200}
                  height={200}
                  className="object-contain rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-center">
                    {hia.title}
                  </h2>
                  <p className="opacity-70 text-sm text-center mt-4">
                    {hia.description}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </section>

      <section className="py-8">
        <Title title="Featured Projects" />
        <div className="max-w-[300px] w-full mx-auto">
          {projects &&
            projects?.slice(6, 7).map((project: Project, i: number) => {
              const path = convertToSlug(project.title);
              return (
                <AnimationWrapper
                  key={i}
                  transition={{ duration: 1, delay: i * 0.08 }}
                >
                  <div className="p-2 rounded shadow-lg h-full">
                    <Link href={`/projects/${path}`}>
                      <Image
                        src={project.image}
                        alt={`project-${i}`}
                        width={300}
                        height={300}
                        className="rounded-full h-[300px] w-[300px] object-cover"
                      />
                    </Link>
                    <h3 className="text-center mt-4 text-sm dark:opacity-75">
                      {project.title ===
                      "Health Impact Assessment of Sanitation Improvements in a Refugee Camp"
                        ? "Water Sanitation and Hygiene (WASH) Program "
                        : project.title}
                    </h3>
                  </div>
                </AnimationWrapper>
              );
            })}
        </div>
      </section>
      <section className="py-8">
        <Title title="A System For All Your Assessment Needs" />
        <AOS
          href1="/aos-impact-assessment"
          href2="/services/impact-assessment"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default HIAPage;
