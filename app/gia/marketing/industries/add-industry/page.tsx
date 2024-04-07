import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import AddIndustryForm from "../../_components/Industries/AddIndustryForm";
import { getAllProjects, getAllServices } from "@/actions";
import Topbar from "../../_components/Topbar";


const AddIndustry = async () => {
  const projects = await getAllProjects();
  const services = await  getAllServices();

  const breadcrumbs = [
    {
      text: "Industries",
      href: "/gia/marketing/industries",
    },
    {
      text: "Add Industry",
      href: "#",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="Add Industry" />
      <AddIndustryForm services={services} projects={projects} />
    </AnimationWrapper>
  );
};

export default AddIndustry;
