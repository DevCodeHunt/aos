import { getAllProjects } from "@/actions";
import AOS from "@/components/layout/AOS";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { sias } from "@/constants";
import { Project } from "@/types";
import { convertToSlug } from "@/utils/convertToSlug";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "SIA",
}


const SIAPage = async () => {
  const projects = await getAllProjects();
  return (
    <AnimationWrapper>
      <section className="py-8 flex md:flex-row md:gap-4 gap-6 flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-semibold mb-4">
            SOCIAL IMPACT ASSESSMENT
          </h1>
          <p className="opacity-80 sm:text-base text-sm">
            Empower your projects to create lasting social good. Our Social
            Impact Assessments go beyond risk mitigation, helping you unlock
            opportunities for positive change. We partner with you to understand
            local needs and aspirations, build resilient communities, and create
            shared value that transcends project boundaries.
          </p>
        </div>
        <Image
          src="/images/globe/15.png"
          alt="globe"
          width={400}
          height={400}
          className="md:w-1/2 w-full md:h-[400px] object-contain rounded"
        />
      </section>

      <section className="py-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
        {sias.map((sia, index) => {
          return (
            <AnimationWrapper
              transition={{ duration: 1, delay: index * 0.08 }}
              key={index}
            >
              <div className="flex flex-col p-4 rounded shadow-lg gap-4 items-center">
                <Image
                  src={sia.image}
                  alt="eia"
                  width={200}
                  height={200}
                  className="object-contain rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-center">
                    {sia.title}
                  </h2>
                  <p className="opacity-70 text-sm text-center mt-4">
                    {sia.description}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </section>

      <section className="px-4 py-8">
        <Title title="Featured Projects" />
        <div className="grid md:grid-cols-2 grid-cols-1  gap-6 max-w-3xl w-full mx-auto place-items-center">
          {projects &&
            projects?.slice(4, 6).map((project: Project, i: number) => {
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
                      {project.title}
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
          href1="aos-impact-assessment"
          href2="/services/impact-assessment"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default SIAPage;
