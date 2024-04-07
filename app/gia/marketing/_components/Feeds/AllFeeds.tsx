"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import TableSearch from "../TableSearch";
import { Button } from "@/components/ui/button";
import TablePagination from "../TablePagination";
import { useRouter } from "next/navigation";
import { TFeed } from "@/types";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { CldImage } from "next-cloudinary";
import { deleteFeed, deleteProject } from "@/actions";
import { useToast } from "@/components/ui/use-toast";
import { useDebounce } from "@/hooks/useDebounce";

type Props = {
  feeds: TFeed[];
};
const AllFeeds = ({ feeds }: Props) => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<TFeed[]>([]);
  const [search, setSearch] = useState("");
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const debounceSearch = useDebounce(search);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    let filteredFeeds = feeds;
    if (debounceSearch.trim()) {
      filteredFeeds = feeds.filter((feed: TFeed) =>
        feed.title.toLowerCase().includes(debounceSearch.toLowerCase())
      );
    }

    setFilteredData(filteredFeeds);
  }, [feeds, debounceSearch]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentPageData = filteredData.slice(startIndex, endIndex);
  return (
    <div className="bg-white dark:bg-[#191919] shadow rounded-lg my-8">
      <div className="flex items-center justify-between p-4 border-b">
        <TableSearch value={search} onChange={handleSearchChange} />
        <Button onClick={() => router.push("/gia/marketing/feeds/add-feed")}>
          <Plus size={18} className="mr-1" /> Add New
        </Button>
      </div>
      <div className="relative overflow-x-auto scroll">
        <Table className="lg:w-full w-[900px]">
          <TableHeader className="uppercase  text-sm">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentPageData &&
              currentPageData.map((feed: TFeed, i: number) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        {startIndex + i + 1}
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        <CldImage
                          width="60"
                          height="60"
                          className="h-[60px] w-[60px] object-cover rounded"
                          src={feed.image}
                          alt={feed.title}
                        />
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        {feed.title}
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        {moment(feed.createdAt).format("YYYY-MM-DD")}
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        <div className="flex items-end justify-center gap-2">
                          <button
                            onClick={() =>
                              router.push(`/gia/marketing/feeds/${feed.id}`)
                            }
                          >
                            <SquarePen size={20} className="text-blue-400" />
                          </button>
                          <button
                            onClick={async () => {
                              try {
                                await deleteFeed(feed.id);
                                toast({
                                  variant: "success",
                                  description: "Project deleted successfully",
                                });
                              } catch (error) {
                                toast({
                                  variant: "destructive",
                                  description: "Something went wrong deleting",
                                });
                              }
                            }}
                          >
                            <Trash2 size={20} className="text-red-400" />
                          </button>
                        </div>
                      </AnimationWrapper>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 border-t">
        <TablePagination
          totalPages={Math.ceil(filteredData.length / limit)}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default AllFeeds;
