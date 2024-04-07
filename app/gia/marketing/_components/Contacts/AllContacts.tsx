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
import { Contact } from "@/types";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import { deleteContact } from "@/actions";
import { useToast } from "@/components/ui/use-toast";
import { useDebounce } from "@/hooks/useDebounce";
import ContactViewModal from "./ContactViewModal";
import useViewContactStore from "@/store/contact-view-store";
type Props = {
  contacts: Contact[];
};
const AllContacts = ({ contacts }: Props) => {
  const { onOpen, open } = useViewContactStore()
  const [filteredData, setFilteredData] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectContact, setSelectContact] = useState<Contact | null>(null);
  const debounceSearch = useDebounce(search);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    let filteredContacts = contacts;
    if (debounceSearch.trim()) {
      filteredContacts = contacts.filter(
        (contact: Contact) =>
          contact.name.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          contact.email.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          contact.organization
            .toLowerCase()
            .includes(debounceSearch.toLowerCase()) ||
          contact.title.toLowerCase().includes(debounceSearch.toLowerCase())
      );
    }

    setFilteredData(filteredContacts);
  }, [contacts, debounceSearch]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handleSelectContact = (contact: Contact) => {
    setSelectContact(contact);
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
                <TableHead>Organization</TableHead>
                <TableHead>Subscribed</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentPageData &&
                currentPageData.map((contact: Contact, i: number) => {
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
                          {contact.name}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {contact.email}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {contact.organization}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {contact.subscribed ? (
                            <span className="dark:text-green-400 text-green-600 font-semibold">
                              Subscribed
                            </span>
                          ) : (
                            <span className="text-red-600 dark:text-red-400 font-semibold">
                              Unsubscribed
                            </span>
                          )}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          {moment(contact.createdAt).format("YYYY-MM-DD")}
                        </AnimationWrapper>
                      </TableCell>
                      <TableCell>
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.08 }}
                        >
                          <div className="flex items-end justify-center gap-2">
                            <button
                              onClick={() => handleSelectContact(contact)}
                            >
                              <Eye size={20} className="text-blue-400" />
                            </button>
                            <button
                              onClick={async () => {
                                try {
                                  await deleteContact(contact.id);
                                  toast({
                                    variant: "success",
                                    description: "Contact deleted successfully",
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

      {selectContact && open && (
        <ContactViewModal
          contact={selectContact}
          setSelectContact={setSelectContact}
        />
      )}
    </>
  );
};

export default AllContacts;
