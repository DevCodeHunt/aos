import { getAllFeeds } from "@/actions";
import Feeds from "@/components/Feeds/Feeds";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Feeds",
}
const FeedsPage = async () => {
  const feeds = await getAllFeeds()
  return (
    <AnimationWrapper>
      <section className="py-8">
        <Feeds feeds={feeds} />
      </section>
      <Footer />
    </AnimationWrapper>
  );
};

export default FeedsPage;
