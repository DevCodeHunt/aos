import { getAllIndustries } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { Industry, Project, Service } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Industries",
};

const IndustriesPage = async () => {
  const rawData = await getAllIndustries();

  const industries: Industry[] = rawData.map((item) => ({
    ...item,
    projects: (item?.projects || []) as unknown as Project[],
    services: (item?.services || []) as unknown as Service[],
  }));

  return (
    <AnimationWrapper>
      <section className="py-8">
        <Image
          src="/gifs/industry.gif"
          alt="industry"
          width={400}
          height={400}
          className="rounded max-w-[800px] w-full  object-cover mx-auto"
        />
      </section>

      <section className=" py-8 mb-20">
        <Title title="Industries" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 gap-y-20">
          {industries &&
            industries?.map((data: Industry, i: number) => {
              return (
                <AnimationWrapper
                  key={i}
                  transition={{ duration: 1, delay: i * 0.08 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={data.thumbnail}
                      alt={`${data.title}`}
                      width={300}
                      height={300}
                      className="w-full h-full rounded mb-4"
                    />

                    <div className="flex items-center justify-center">
                      <Link
                        href={`/industries/${data.id}`}
                        className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[1px] text-center"
                      >
                        {data.title}
                      </Link>
                    </div>
                  </div>
                </AnimationWrapper>
              );
            })}
        </div>
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default IndustriesPage;
