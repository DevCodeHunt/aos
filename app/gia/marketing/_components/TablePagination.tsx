"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const TablePagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  };

  return (
    <>
      <Pagination className="">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePreviousClick} />
          </PaginationItem>
          {getPageNumbers().map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === "..." ? (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === pageNumber}
                    onClick={() => onPageChange(Number(pageNumber))}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )}
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNextClick} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default TablePagination;
