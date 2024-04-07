"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Logo from '../Logo';
import { sidebarLinks } from '.';
import Link from 'next/link';

const DesktopSidebar = () => {
    const pathname = usePathname();
    return (
      <div
        className={`fixed top-0 botom-0 left-0 h-screen  w-72 shadow bg-white dark:bg-black/20 z-50 overflow-y-auto scroll`}
      >
        <div className="h-14 shadow flex items-center px-4">
          <Logo /> 
        </div>
        <div className="flex flex-col gap-2 mt-6 px-4">
          {sidebarLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`flex items-center gap-2 hover:bg-primary-foreground transition duration-300 h-11 px-2 rounded ${
                pathname === link.path ? "bg-primary-foreground" : ""
              }`}
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default DesktopSidebar