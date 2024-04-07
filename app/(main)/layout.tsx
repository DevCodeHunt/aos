import Navbar from "@/components/layout/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};

export default layout;
