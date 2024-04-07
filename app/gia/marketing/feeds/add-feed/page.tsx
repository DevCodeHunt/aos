import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "../../_components/Topbar";
import AddFeedForm from "../../_components/Feeds/AddFeedForm";

const AddFeed = () => {
  const breadcrumbs = [
    {
      text: "Feeds",
      href: "/gia/marketing/feeds",
    },
    {
      text: "Add Feed",
      href: "#",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="Add Feed" />
      <AddFeedForm />
    </AnimationWrapper>
  );
};

export default AddFeed;
