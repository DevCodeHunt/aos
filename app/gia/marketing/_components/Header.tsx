"use client";

import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import useSidebarStore from "@/store/sidebar-store";
import { Menu } from "lucide-react";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  const { onOpen } = useSidebarStore();
  return (
    <div className="h-14 bg-white dark:bg-black/20 shadow w-full flex items-center md:justify-end justify-between px-4">
      <button onClick={onOpen} className="md:hidden block">
        <Menu />
      </button>

      <div className="md:hidden block">
        <Logo />
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
