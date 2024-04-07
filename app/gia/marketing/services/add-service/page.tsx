import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "../../_components/Topbar";
import AddServiceForm from "../../_components/Services/AddServiceForm";

const AddService = () => {
  const breadcrumbs = [
    {
      text: "Services",
      href: "/gia/marketing/services",
    },
    {
      text: "Add Service",
      href: "#",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar title="Add Service" breadcrumbs={breadcrumbs} />
      <AddServiceForm />
    </AnimationWrapper>
  );
};

export default AddService;
