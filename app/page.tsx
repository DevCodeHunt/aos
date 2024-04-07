import ContractInformation from "@/components/landing/ContractInformation";
import Hero from "@/components/landing/Hero";
import Team from "@/components/landing/Team";
import WhereWeServe from "@/components/landing/WhereWeServe";
import WhoWeAre from "@/components/landing/WhoWeAre";
import WhoWeServe from "@/components/landing/WhoWeServe";
import WhyUs from "@/components/landing/WhyUs";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Navbar from "@/components/layout/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <Hero />
        <div className="container mt-6">
          <WhoWeAre />
          <WhoWeServe />
          <WhereWeServe />
          <WhyUs />
          <section className="py-8">
            <Image src="/gifs/AOS.gif" alt="aos" width={800} height={800} className="mx-auto rounded" />
          </section>
          <Team />
          <ContractInformation />
        </div>
      </AnimationWrapper>
    </>
  );
}

//Need Compass Background Image from Ajay
