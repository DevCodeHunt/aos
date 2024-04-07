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
import { Eye, Trash2 } from "lucide-react";
import TableSearch from "../TableSearch";
import TablePagination from "../TablePagination";
import { useRouter } from "next/navigation";
import { Career } from "@/types";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { deleteCareer, deleteProject } from "@/actions";
import { useToast } from "@/components/ui/use-toast";
import { useDebounce } from "@/hooks/useDebounce";
import useViewCareerStore from "@/store/career-view-stroe";
import CareerViewModal from "./CareerViewModal";

type Props = {
  careers: Career[];
};
const AllCareers = ({ careers }: Props) => {
  const { onOpen, open } = useViewCareerStore();
  const [filteredData, setFilteredData] = useState<Career[]>([]);
  const [search, setSearch] = useState("");
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectCareer, setSelectCareer] = useState<Career | null>(null);
  const debounceSearch = useDebounce(search);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    let filteredCareers = careers;
    if (debounceSearch.trim()) {
      filteredCareers = careers.filter(
        (project: Career) =>
          project.name.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          project.email.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          project.phone.toLowerCase().includes(debounceSearch.toLowerCase())
      );
    }

    setFilteredData(filteredCareers);
  }, [careers, debounceSearch]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handleSelectCareer = (career: Career) => {
    setSelectCareer(career);
    onOpen();
  };

  return (
    <>
      <div className="bg-white dark:bg-[#191919] shadow rounded-lg my-8">
        <div className="p-4 border-b sm:flex">
          <TableSearch value={search} onChange={handleSearchChange} />
        </div>
        <div className="relative overflow-x-auto scroll">
          <Table className="lg:w-full w-[900px]">
            <TableHeader className="uppercase  text-sm">
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentPageData &&
                currentPageData.map((career: Career, i: number) => {
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
                          {career.name}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {career.email}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {career.phone}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {moment(career.createdAt).format("YYYY-MM-DD")}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          <div className="flex items-end justify-center gap-2">
                            <button onClick={() => handleSelectCareer(career)}>
                              <Eye size={20} className="text-blue-400" />
                            </button>
                            <button
                              onClick={async () => {
                                try {
                                  await deleteCareer(career.id);
                                  toast({
                                    variant: "success",
                                    description: "Career deleted successfully",
                                  });
                                } catch (error) {
                                  toast({
                                    variant: "destructive",
                                    description:
                                      "Something went wrong deleting",
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

      {selectCareer && open && (
        <CareerViewModal
          career={selectCareer}
          setSelectCareer={setSelectCareer}
        />
      )}
    </>
  );
};

export default AllCareers;
