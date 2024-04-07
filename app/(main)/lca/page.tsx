import { getAllProjects } from "@/actions";
import AOS from "@/components/layout/AOS";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { lcas } from "@/constants";
import { Project } from "@/types";
import { convertToSlug } from "@/utils/convertToSlug";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "LCIA",
}



const LCAPage = async () => {
  const projects = await getAllProjects();

  return (
    <AnimationWrapper>
      <section className="py-8 flex gap-4 md:flex-row flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full">
          <h1 className=" sm:text-3xl text-xl font-semibold">
            LIFE CYCLE ASSESSMENT
          </h1>
          <p className="opacity-70 mt-3">
            Unveiling the True Cost: GIA&#39;s Holistic Approach to Life Cycle
            Impact Assessment
          </p>
        </div>
        <Image
          src="/images/assessment/11.png"
          alt="eia"
          width={400}
          height={400}
          className="rounded md:ml-auto md:w-1/2 w-full object-contain md:h-[450px]"
        />
      </section>

      <section className="py-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
        {lcas.map((lca, index) => {
          return (
            <AnimationWrapper
              transition={{ duration: 1, delay: index * 0.08 }}
              key={index}
            >
              <div className="flex flex-col p-4 rounded shadow-lg gap-4 items-center">
                <Image
                  src={lca.image}
                  alt="eia"
                  width={200}
                  height={200}
                  className="object-contain rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-center">
                    {lca.title}
                  </h2>
                  <p className="opacity-70 text-sm text-center mt-4">
                    {lca.description}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </section>

      <section className="py-8">
        <Title title="Featured Projects" />
        <div className="flex md:flex-nowrap flex-wrap justify-center  gap-6 max-w-3xl w-full mx-auto">
          {projects &&
            projects?.slice(2, 3).map((project: Project, i: number) => {
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
                        className="rounded-full"
                      />
                    </Link>
                    <h3 className="text-center mt-4 dark:opacity-75">
                      {project.title === "Special Economic Zone" ? "Hydropower Dam's ELCA & SLCA" : project.title}
                    </h3>
                  </div>
                </AnimationWrapper>
              );
            })}
        </div>
      </section>

      <section className="px-4 py-8">
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

export default LCAPage;
