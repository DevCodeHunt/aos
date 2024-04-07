import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Title from "@/components/layout/Title";
import { getAllProjects } from "@/actions";
import { convertToSlug } from "@/utils/convertToSlug";
import { Project } from "@/types";
import AOS from "@/components/layout/AOS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Sector",
}

const data = [
  {
    image: "/images/public-sector/1.png",
    title: "GIS Mapping and Analysis",
    description:
      "We use advanced geospatial technologies to provide actionable insights into various public concerns, such as land use planning, resource allocation, environmental management, and emergency response.",
  },
  {
    image: "/images/public-sector/2.png",
    title: "GIS Mapping and Analysis",
    description:
      " We provide training and capacity-building initiatives to public sector staff, strengthening their ability to manage environmental and social challenges",
  },
  {
    image: "/images/public-sector/3.png",
    title: "Capacity Building",
    description:
      "We offer comprehensive solutions to manage and reduce disaster risks. Our services include analyzing potential risks, devising proactive strategies for prevention and mitigation, and designing post-disaster response and recovery plans.",
  },
  {
    image: "/images/public-sector/4.png",
    title: "Climate Change Adaptation and Mitigation",
    description:
      "We support public entities in developing and implementing strategies to adapt to climate change and reduce greenhouse gas emissions.",
  },
  {
    image: "/images/public-sector/5.png",
    title: "Policy Development Support",
    description:
      "Leveraging our expertise in environmental, social, and health impact assessments, we provide data-driven insights to support the development of sustainable and responsible policies.",
  },
];

async function getData() {
  return await getAllProjects();
}

const PublicSectorPage = async () => {
  const projects = await getData();
  return (
    <AnimationWrapper>
      <section className="py-8 flex items-center md:flex-row flex-col-reverse md:gap-4 gap-6">
        <div className=" md:w-1/2 w-full">
          <h1 className="md:text-3xl text-2xl font-semibold">PUBLIC SECTOR</h1>
          <p className="text-sm mt-2 opacity-70 md:w-[70%]">
            Across departments and agencies, we leverage our environmental
            expertise and innovative technologies to drive efficiency,
            transparency, and positive change in the public sector.
          </p>
        </div>
        <Image
          width={400}
          height={400}
          src="/images/public-sector/globe-digitial-line.png"
          alt="outcome-assessment"
          loading="lazy"
          className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
        />
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {data.map((obj, index) => (
          <AnimationWrapper
            key={index}
            transition={{ duration: 1, delay: index * 0.08 }}
          >
            <div
              key={index}
              className="shadow-lg p-4 rounded flex flex-col items-center gap-4"
            >
              <Image
                width={200}
                height={200}
                src={obj.image}
                alt={obj.title}
                loading="lazy"
                className="mx-auto  rounded-full object-contain"
              />

              <div>
                <h1 className=" font-semibold">{obj.title}</h1>
                <p className="text-sm mt-2 opacity-70">{obj.description}</p>
              </div>
            </div>
          </AnimationWrapper>
        ))}
      </section>

      <section className="py-8">
        <Title title="Featured Projects" />
        <div className="max-w-[300px] w-full mx-auto">
          {projects &&
            projects?.slice(7, 8).map((project: Project, i: number) => {
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
                      Capacity Building Program
                    </h3>
                  </div>
                </AnimationWrapper>
              );
            })}
        </div>
      </section>

      <section className="py-8">
        <Title title="A System For All Your Assessment Needs" />
        <AOS href1="/services/aos" href2="/services/impact-assessment" />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default PublicSectorPage;
