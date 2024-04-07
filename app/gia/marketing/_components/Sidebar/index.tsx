"use client";

import {
  BookMarked,
  BriefcaseBusiness,
  Contact,
  Factory,
  Layers3,
  MessageSquareText,
} from "lucide-react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import ClientOnly from "@/components/ClientOnly";

export const sidebarLinks = [
  {
    name: "Projects",
    path: "/gia/marketing",
    icon: BriefcaseBusiness,
  },
  {
    name: "Industeries",
    path: "/gia/marketing/industries",
    icon: Factory,
  },
  {
    name: "Services",
    path: "/gia/marketing/services",
    icon: Layers3,
  },
  {
    name: "Feeds",
    path: "/gia/marketing/feeds",
    icon: MessageSquareText,
  },
  {
    name: "Contacts",
    path: "/gia/marketing/contacts",
    icon: Contact,
  },
  {
    name: "Careers",
    path: "/gia/marketing/careers",
    icon: BookMarked,
  },
];

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <ClientOnly>{isMobile ? <MobileSidebar /> : <DesktopSidebar />}</ClientOnly>
  );
};

export default Sidebar;
