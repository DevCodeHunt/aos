"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="-mt-20 relative w-full  md:min-h-[92vh] min-h-[70vh]">
        <div className="flex z-10 flex-col md:w-1/2 w-full absolute lg:left-8 top-1/2  container -translate-y-1/2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-poppins font-semibold leading-tight">
            We leverage the power of spatial  data and cutting-edge technologies
          </h1>
          <p className="md:text-base text-sm leading-normal my-3">
            Streamline impact and outcome assessments for organizations,
            enabling rapid, cost-effective reporting and regulatory approval
          </p>

          <div>
            <button
              onClick={() => router.push("/services/impact-assessment")}
              className="bg-primary text-white h-10 px-4 text-sm rounded font-poppins cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
        <video
          className="w-full h-full absolute inset-0 object-cover"
          autoPlay
          muted
          loop
          poster="/images/banner.png"
          width={400}
          height={400}
        >
          <source
            // src="/api/video"
            src="videos/iStock-1490250606.mp4"
            type="video/mp4"
            className="w-full h-full"
          />
        </video>
      </div>
      
    </>
  );
};

export default Hero;
