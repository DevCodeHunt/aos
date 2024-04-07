"use client";

import { Project } from "@/types";
import React from "react";
import AnimationWrapper from "./layout/AnimationWrapper";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project: Project, i: number) => {
          return (
            <AnimationWrapper
              key={i}
              transition={{ duration: 1, delay: i * 0.08 }}
              className="rounded shadow-lg h-full w-full flex flex-col relative"
            >
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.image}
                  alt="project image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded"
                />
              </Link>
              <div className="py-4">
                <h1 className="text-xl font-semibold line-clamp-5">
                  {project?.title}
                </h1>
              </div>
            </AnimationWrapper>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
