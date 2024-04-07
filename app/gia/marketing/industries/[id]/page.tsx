import { getAllProjects, getAllServices, getIndustry } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "../../_components/Topbar";
import EditIndustryForm from "../../_components/Industries/EditIndustryForm";
import { Industry } from "@/types";

const IndustryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const industryData = await getIndustry(id);
  const industry: Industry | null = industryData as Industry | null;
  const services = await getAllServices();
  const projects = await getAllProjects();
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    {
      text: "Industries",
      href: "/gia/marketing/industries",
    },
    {
      text: "Edit Industry",
      href: "#",
    },
  ];

  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="Edit Industry" />
      <EditIndustryForm
        industry={industry}
        services={services}
        projects={projects}
      />
    </AnimationWrapper>
  );
};

export default IndustryPage;
