import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <AnimationWrapper>
        <Navbar />
        <div className="flex items-center justify-center flex-col gap-4 py-8 my-20">
          <h1 className="sm:text-4xl text-3xl font-bold">Page Not Found</h1>

          <p className="opacity-85 dark:opacity-70">{" We can’t seem to find the page you’re looking for."}</p>
          <Link
            href="/"
            className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
          >
            Go To Home Page
          </Link>
        </div>

        <Footer />
      </AnimationWrapper>
    </>
  );
}
