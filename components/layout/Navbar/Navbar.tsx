"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import AnimationWrapper from "../AnimationWrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <header
      className={`sticky right-0 left-0 top-0  shadow-sm  z-50  ${
        scrolling
          ? "bg-white dark:bg-black/40 backdrop-blur-lg  dark:border-neutral-600 border-b-[1px]"
          : "bg-white/60 dark:bg-black/30"
      }`}
    >
      <AnimationWrapper>
        <div className={`py-4 container flex items-center  justify-between`}>
          <button onClick={toggleOpen} className="md:hidden block">
            <Menu />
          </button>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={130}
              height={130}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <NavLinks />
            <ThemeSwitcher />
          </div>
        </div>
        <MobileNavLinks open={open} onClose={toggleOpen} />
      </AnimationWrapper>
    </header>
  );
};

export default Navbar;
