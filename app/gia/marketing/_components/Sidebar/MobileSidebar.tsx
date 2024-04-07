import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { sidebarLinks } from ".";
import { X } from "lucide-react";
import useSidebarStore from "@/store/sidebar-store";

const MobileSidebar = () => {
  const pathname = usePathname();
  const { open, onClose } = useSidebarStore();
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 200);
  };
  return (
    <div
      className={`fixed top-0 botom-0 left-0 h-screen  w-72 shadow dark:bg-black bg-white z-50 overflow-y-auto scroll ${
        open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-[700px]"
      }`}
    >
      <div className="h-14 shadow flex items-center justify-between px-4">
        <Logo />
        <button>
          <X size={18} onClick={onClose} />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-6 px-4">
        {sidebarLinks.map((link, index) => (
          <Link
            onClick={handleClose}
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

export default MobileSidebar;
