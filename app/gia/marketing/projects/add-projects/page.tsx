import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import AddProjectForm from "../../_components/Projects/AddProjectForm";
import Topbar from "../../_components/Topbar";

const AddProject = () => {
  const breadcrumbs = [
    {
      text: "Projects",
      href: "/gia/marketing",
    },
    {
      text: "Add Project",
      href: "/gia/marketing/add-projects",
    },
  ];
  return (
    <AnimationWrapper>
        <Topbar title="Add Project" breadcrumbs={breadcrumbs} />
      <AddProjectForm />
    </AnimationWrapper>
  );
};

export default AddProject;
