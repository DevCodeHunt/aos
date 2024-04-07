"use client";

import React from "react";
import Feed from "./Feed";
import AnimationWrapper from "../layout/AnimationWrapper";
import { TFeed } from "@/types";

const Feeds = ({ feeds }: { feeds: TFeed[] }) => {
  return (
    <>
      {feeds && feeds?.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          {feeds.map((feed, index) => (
            <AnimationWrapper
              transition={{ duration: 1, delay: index * 0.08 }}
              key={index}
            >
              <Feed feed={feed} />
            </AnimationWrapper>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full mt-40">
          <p className="md:text-6xl sm:text-5xl text-4xl font-bold opacity-40">Comming Soon</p>
        </div>
      )}
    </>
  );
};

export default Feeds;
