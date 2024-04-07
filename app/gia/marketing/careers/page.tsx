import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "../_components/Topbar";
import AllCareers from "../_components/Careers/AllCareers";
import { getAllCareers } from "@/actions";

const Careers = async () => {
  const careers = await getAllCareers();
  const breadcrumbs = [
    {
      text: "Careers",
      href: "/gia/marketing/careers",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="All Careers" />
      <AllCareers careers={careers} />
    </AnimationWrapper>
  );
};

export default Careers;
