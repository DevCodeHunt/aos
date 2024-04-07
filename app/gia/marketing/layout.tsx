import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
  
      <div className="flex">
        <Sidebar />
        <div className="md:ml-auto md:w-[calc(100%_-_18rem)] w-full min-h-screen">
          <Header />
          <div className="p-4 h-[calc(100%_-_56px)]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MarketingLayout;
