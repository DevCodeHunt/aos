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

import Image from "next/image";
import TablePagination from "../TablePagination";
import { useRouter } from "next/navigation";
import { Project, Service } from "@/types";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { CldImage } from "next-cloudinary";
import { useToast } from "@/components/ui/use-toast";
import { deletService } from "@/actions";
import { useDebounce } from "@/hooks/useDebounce";

type Props = {
  services: Service[];
};
const AllServices = ({ services }: Props) => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<Project[]>([]);
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
    let filteredServices = services;
    if (debounceSearch.trim()) {
      filteredServices = services.filter(
        (service: Service) =>
          service.title.toLowerCase().includes(debounceSearch.toLowerCase())
      );
    }

 
    setFilteredData(filteredServices);
  }, [services, debounceSearch]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:bg-[#191919] shadow rounded-lg my-8">
      <div className="flex items-center justify-between p-4 border-b">
        <TableSearch value={search} onChange={handleSearchChange} />
        <Button
          onClick={() => router.push("/gia/marketing/services/add-service")}
        >
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
              currentPageData.map((service: Service, i: number) => {
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
                          src={service.image}
                          alt={service.title}
                        />
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        {service.title}
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        {moment(service.createdAt).format("YYYY-MM-DD")}
                      </AnimationWrapper>
                    </TableCell>
                    <TableCell>
                      <AnimationWrapper
                        transition={{ duration: 1, delay: i * 0.08 }}
                      >
                        <div className="flex items-end justify-center gap-2">
                          <button
                            onClick={() =>
                              router.push(
                                `/gia/marketing/services/${service.id}`
                              )
                            }
                          >
                            <SquarePen size={20} className="text-blue-400" />
                          </button>
                          <button
                            onClick={async () => {
                              try {
                                await deletService(service.id);
                                toast({
                                  variant: "success",
                                  description: "Service deleted successfully",
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

export default AllServices;
