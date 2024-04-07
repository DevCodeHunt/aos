import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href1: string;
  href2: string;
};
const AOS = ({ href1, href2 }: Props) => {
  return (
    <div className="">
      <Image
        width={800}
        height={800}
        src="/images/gia.png"
        alt="outcome-assessment"
        loading="lazy"
        className="mx-auto object-contain rounded"
      />

      <div className="flex  flex-col gap-8 max-w-[700px] mx-auto w-full">
        <Link
          href={href1}
          className="border border-black dark:border-white p-3 rounded w-full hover:dark:bg-white hover:dark:text-black duration-300 hover:bg-transparent transition text-center text-sm"
        >
          ACCESS TO AOS
        </Link>

        <div>
          <Link
            href={href2}
            className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
          >
            BACK TO IMPACT ASSESSMENT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AOS;
