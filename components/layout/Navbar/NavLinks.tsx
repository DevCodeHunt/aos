import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { subLinks } from "./MobileNavLinks";

const NavLinks = () => {
  const pathname = usePathname();

  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  return (
    <nav className="relative ">
      <ul className="hidden relative md:flex items-center gap-4">
        <NavLink name="Home" path="/" />
        <ServiceDropdownLink />
        <NavLink name="Industries" path="/industries" />
        <NavLink name="Projects" path="/projects" />
        <NavLink name="Careers" path="/careers" />
        <NavLink name="Contact Us" path="/contact-us" />
      </ul>
    </nav>
  );
};

export default NavLinks;

export const NavLink = ({
  path,
  name,
  isDropdown,
}: {
  path: string;
  name: string;
  isDropdown?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <li className="list-none">
      <Link
        href={path}
        className={`flex gap-1 items-center hover-underline-animation ${
          pathname === path ? "active" : ""
        } ${isDropdown ? "text-lg" : "text-sm "}`}
      >
        {name}
      </Link>
    </li>
  );
};

const ServiceDropdownLink = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  return (
    <li
      className="list-none relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        onClick={() => {
          router.push("/services/impact-assessment");
        }}
        className={`text-sm cursor-pointer flex gap-1 items-center hover-underline-animation`}
      >
        Services
        <span className="mt-1">
          <ChevronDown size={16} />
        </span>
      </span>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute text-base left-1/2 top-12 w-[700px] right-0 "
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute  left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white dark:bg-neutral-800" />
            <div className=" bg-white dark:bg-neutral-800 p-4 rounded shadow-md grid md:grid-cols-3 grid-cols-2 gap-y-14 gap-3 z-10">
              <div className="flex flex-col gap-4">
                <NavLink name="Assessment Operating System" path="/services/aos" />
                <div className="flex flex-col gap-2">
                  <Link
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
                <NavLink name="AOS-Compass" path="/services/aos-compass" />
              </div>
              <div>
                <NavLink
                  name="Outcomes Assessment"
                  path="/services/outcomes-assessment"
                />
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  name="Impact Assessment"
                  path="/services/impact-assessment"
                />
                <div className="flex flex-col gap-2">
                  <Link
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
                <NavLink name="Public Sector" path="/services/public-sector" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
