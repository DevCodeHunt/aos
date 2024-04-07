import { getAllProjects } from "@/actions";
import Projects from "@/components/Projects";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
}

const ProjectsPage = async () => {
  const projects = await getAllProjects();
  return (
    <AnimationWrapper>
      <section className="py-4">
        <Projects projects={projects} />
      </section>
    </AnimationWrapper>
  );
};

export default ProjectsPage;
