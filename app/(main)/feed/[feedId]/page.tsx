import { getFeed } from "@/actions";
import Description from "@/components/Description/Description";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import React from "react";

const FeedDetailPage = async ({ params }: { params: { feedId: string } }) => {
  const { feedId } = params;
  const feed = await getFeed(feedId);
 
  if (!feed) return null
  return (
    <AnimationWrapper>
      <section className="py-8">
        <div className="w-full h-[500px]">
          <Image
            width={400}
            height={400}
            src={feed?.image || ""}
            alt="feed"
            loading="lazy"
            className="w-full object-cover h-full rounded mb-8"
          />
        </div>

        <h1 className="md:text-2xl text-xl break-all font-semibold my-4">
          {feed?.title}
        </h1>

        <Description description={feed?.description} />
      </section>
      <Footer />
    </AnimationWrapper>
  );
};

export default FeedDetailPage;
