import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center mb-10">
      <span className="text-center inline sm:text-2xl text-xl font-semibold  relative after:content-[''] after:absolute after:h-[2px] after:dark:bg-white after:bg-black after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
        {title}
      </span>
    </div>
  );
};

export default Title;
