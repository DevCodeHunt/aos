import { TFeed } from "@/types";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

type Props = {
  feed: TFeed;
};
const Feed = ({ feed }: Props) => {
  return (
    <Link href={`/feed/${feed.id}`} className="relative w-full h-full">
      <CldImage
        src={feed?.image}
        alt="feed-image"
        width="400"
        height="400"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
      <div className="absolute inset-0 flex items-end bg-black/20 rounded p-2">
        <h1 className="font-semibold line-clamp-2 text-gray-100">
          {feed?.title}
        </h1>
      </div>
    </Link>
  );
};

export default Feed;
