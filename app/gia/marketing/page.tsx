import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "./_components/Topbar";
import Projects from "./_components/Projects/Projects";
import { getAllProjects } from "@/actions";

const Dashboard = async () => {
  const projects = await getAllProjects();

  const breadcrumbs = [
    {
      text: "Projects",
      href: "/gia/marketing",
    },
  ];

  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="All Projects" />
      <Projects projects={projects} />
    </AnimationWrapper>
  );
};

export default Dashboard;
