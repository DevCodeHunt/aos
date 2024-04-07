import { getAllFeeds } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import React from "react";
import Topbar from "../_components/Topbar";
import AllFeeds from "../_components/Feeds/AllFeeds";

const Feeds = async () => {
  const feeds = await getAllFeeds();
  const breadcrumbs = [
    {
      text: "Feeds",
      href: "/gia/marketing/feeds",
    },
  ];

  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="All Feeds" />
      <AllFeeds feeds={feeds} />
    </AnimationWrapper>
  );
};

export default Feeds;
