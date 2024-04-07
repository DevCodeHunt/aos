import { getIndustry } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { Project, Service } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const IndustryPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const industry = await getIndustry(id);

  const services: Service[] = (industry?.services ||
    []) as unknown as Service[];
  const projects: Project[] = (industry?.projects ||
    []) as unknown as Project[];

  if (!industry) {
    return null;
  }

  
  return (
    <AnimationWrapper>
      <section className=" py-8 flex gap-4 md:flex-row flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full">
          <h1 className=" sm:text-3xl text-xl font-semibold">
            {industry.title}
          </h1>
          <p className="opacity-70 mt-3">{industry.description}</p>
        </div>
        <Image
          src={industry.banner}
          alt={industry.title}
          width={400}
          height={400}
          className="rounded md:ml-auto md:w-1/2 w-full object-contain md:h-[450px]"
        />
      </section>

      <section className=" py-8">
        <Title title="Our services" />
        <div className="flex flex-wrap justify-center">
          {services &&
            services?.map((data: Service, i: number) => {
              return (
                <AnimationWrapper
                  key={i}
                  transition={{ duration: 1, delay: i * 0.08 }}
                >
                  <div className="relative w-full h-full border border-black">
                    <Image
                      src={data.image}
                      alt={`${data.title}`}
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />

                    <div className="absolute inset-0">
                      <div className="mt-28 p-4">
                        <h3 className="text-xl font-semibold mb-4">
                          {data.title}
                        </h3>

                        <div
                          className="service-des"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>
              );
            })}
        </div>
      </section>

      {projects?.length > 0 && (
        <section className=" py-8">
          <Title title="Featured Projects" />
          <div className="flex md:flex-nowrap flex-wrap justify-center  gap-6 max-w-3xl w-full mx-auto">
            {projects?.map((project: Project, i: number) => {
              return (
                <AnimationWrapper
                  key={i}
                  transition={{ duration: 1, delay: i * 0.08 }}
                >
                  <div className="p-2 rounded shadow-lg h-full">
                    <Link href={`/projects/${project.id}`}>
                      <Image
                        src={project.image}
                        alt={`project-${i}`}
                        width={300}
                        height={300}
                        className="rounded-full object-cover w-[300px] h-[300px]"
                      />
                    </Link>
                    <h3 className="text-center mt-4 dark:opacity-75">
                      {project.title}
                    </h3>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </section>
      )}

      <div className="py-8">
        <Link
          href="/industries"
          className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
        >
          BACK TO INDUSTRIES
        </Link>
      </div>

      <Footer />
    </AnimationWrapper>
  );
};

export default IndustryPage;
