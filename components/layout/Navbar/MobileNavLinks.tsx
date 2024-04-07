import { X } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type Props = {
  onClose: () => void;
  open: boolean;
};

export const subLinks = [
  {
    name: "AOS",
    path: "/services/aos",
  },
  {
    name: "AOS-Compass",
    path: "/services/aos-compass",
  },
  {
    name: "Outcomes Assessment",
    path: "/services/outcomes-assessment",
  },
  {
    name: "Impact Assessment",
    path: "/services/impact-assessment",
  },
  {
    name: "Public Sector",
    path: "/services/public-sector",
  },
];

const MobileNavLinks = ({ onClose, open }: Props) => {
  const pathname = usePathname();

  const [hover, setHover] = useState(false);

  const onToggle = useCallback(() => setHover((prev) => !prev), []);
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 500);
  };
  return (
    <div
      className={`fixed inset-0 ${
        open ? "translate-x-0 opacity-100" : "-translate-x-[900px] opacity-0"
      }  transition duration-300 h-screen bg-black/30 dark:bg-black/20 z-50 md:hidden block`}
    >
      <div className="bg-white dark:bg-black w-72 fixed left-0 top-0 overflow-x-auto bottom-0 h-screen rounded-r-lg">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={20} />
        </button>

        <ul className="flex flex-col list-none px-4 my-14  gap-6">
          <li>
            <Link
              onClick={handleClose}
              href="/"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li
            onClick={onToggle}
            className="relative list-none flex flex-col overflow-hidden"
          >
            <span
              className={`text-sm cursor-pointer flex gap-1 items-center hover-underline-animation`}
            >
              Services
              <span className="mt-1">
                <ChevronDown size={16} />
              </span>
            </span>
            {hover && (
              <div className=" p-4 rounded shadow-md flex flex-col gap-6 overflow-hidden">
                <div className="flex flex-col gap-4">
                  <Link
                    onClick={handleClose}
                    href="/services/aos"
                    className={`text-sm flex gap-1 items-center hover-underline-animation ${
                      pathname === "/services/aos" ? "active" : ""
                    }`}
                  >
                    Assessment Operating System
                  </Link>

                  <div className="flex flex-col gap-2">
                    <Link
                      onClick={handleClose}
                      href="/aos-info"
                      className={`text-sm  ${
                        pathname === "/aos-info"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      About AOS
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/aos-outcome-assessment"
                      className={`text-sm  ${
                        pathname === "/services/outcomes-assessment"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Outcomes
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/services/aos-compass"
                      className={`text-sm  ${
                        pathname === "/services/aos-compass"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Compass
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/aos-impact-assessment"
                      className={`text-sm  ${
                        pathname === "/aos-impact-assessment"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Impacts
                    </Link>
                  </div>
                </div>
                <div>
                  <Link
                    onClick={handleClose}
                    href="/services/aos-compass"
                    className={`text-sm flex gap-1 items-center hover-underline-animation ${
                      pathname === "/services/aos-compass" ? "active" : ""
                    }`}
                  >
                    AOS-Compass
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={handleClose}
                    href="/services/outcomes-assessment"
                    className={`text-sm flex gap-1 items-center hover-underline-animation ${
                      pathname === "/services/outcomes-assessment"
                        ? "active"
                        : ""
                    }`}
                  >
                    Outcomes Assessment
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    onClick={handleClose}
                    href="/services/impact-assessment"
                    className={`text-sm flex gap-1 items-center hover-underline-animation ${
                      pathname === "/services/impact-assessment" ? "active" : ""
                    }`}
                  >
                    Impact Assessment
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link
                      onClick={handleClose}
                      href="/eia"
                      className={`text-sm  ${
                        pathname === "/eia"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Environmental Impact Assessment
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/sia"
                      className={`text-sm  ${
                        pathname === "/sia"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Social Impact Assessment
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/hia"
                      className={`text-sm  ${
                        pathname === "/hia"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Health Impact Assessment
                    </Link>
                    <Link
                      href="/hria"
                      className={`text-sm  ${
                        pathname === "/hria"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Human Rights Impact Assessment
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/services/outcomes-assessment"
                      className={`text-sm  ${
                        pathname === "/services/outcomes-assessment"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Outcomes Assessment
                    </Link>
                    <Link
                      onClick={handleClose}
                      href="/lca"
                      className={`text-sm  ${
                        pathname === "/lca"
                          ? "opacity-100 text-white"
                          : "opacity-80"
                      }`}
                    >
                      Life Cycle Assessment
                    </Link>
                  </div>
                </div>
                <div>
                  <Link
                    onClick={handleClose}
                    href="/services/public-sector"
                    className={`text-sm flex gap-1 items-center hover-underline-animation ${
                      pathname === "/services/public-sector" ? "active" : ""
                    }`}
                  >
                    Public Sector
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/industries"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/industries" ? "active" : ""
              }`}
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/projects"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/feeds"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/feeds" ? "active" : ""
              }`}
            >
              Feeds
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/careers"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/careers" ? "active" : ""
              }`}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/contact-us"
              className={`text-sm flex gap-1 items-center hover-underline-animation ${
                pathname === "/contact-us" ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavLinks;
