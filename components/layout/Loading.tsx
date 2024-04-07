"use client";

import animationData from "@/assets/loader.json";
import Lottie from "react-lottie";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="my-20 flex items-center justify-between w-full">
      <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
};

export default Loader;