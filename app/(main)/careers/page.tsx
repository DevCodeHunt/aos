import AnimationWrapper from "@/components/layout/AnimationWrapper";
import CareerForm from "@/components/layout/CareerForm";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Careers",
}

const CareersPage = () => {
  return (
    <AnimationWrapper>
      <section className="py-8">
        <Title title="Project-Based Impact Assessment Consultants" />
        <div className="flex md:flex-row flex-col md:gap-4 gap-6 mt-16">
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <div>
              <h3 className="text-lg mb-2">Responsibilities</h3>
              <ul className="list-disc pl-8">
                <li className="text-sm my-2">
                  Conduct in-depth research and analysis related to impact
                  assessment projects.
                </li>
                <li className="text-sm my-2">
                  Apply expertise in areas such as environmental science, social
                  impact, health assessments, and human rights to provide
                  valuable insights and recommendations.
                </li>
                <li className="text-sm my-2">
                  Collaborate with cross-functional teams to ensure project
                  objectives are met.
                </li>
                <li className="text-sm my-2">
                  Assist in the development and implementation of impact
                  assessment methodologies and frameworks.
                </li>
                <li className="text-sm my-2">
                  Prepare high-quality reports and presentations summarizing
                  project findings and recommendations.
                </li>
                <li className="text-sm my-2">
                  Stay updated on industry trends, regulations, and best
                  practices in impact assessment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-2">Qualifications</h3>
              <ul className="list-disc pl-8">
                <li className="text-sm my-2">
                  Advanced degree in a relevant field such as environmental
                  science, social sciences, public health, or a related
                  discipline.
                </li>
                <li className="text-sm my-2">
                  Proven experience in conducting impact assessments and
                  familiarity with relevant methodologies.
                </li>
                <li className="text-sm my-2">
                  Strong analytical and research skills with the ability to
                  synthesize complex information.
                </li>
                <li className="text-sm my-2">
                  Excellent written and verbal communication abilities.
                </li>
                <li className="text-sm my-2">
                  Proficiency in data analysis, statistical tools, and software
                  relevant to impact assessment.
                </li>
                <li className="text-sm my-2">
                  Ability to work independently and collaborate effectively in a
                  team setting.
                </li>
                <li className="text-sm my-2">
                  Strong project management skills and ability to meet deadlines
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <CareerForm />
          </div>
        </div>
      </section>
      <Footer />
    </AnimationWrapper>
  );
};

export default CareersPage;
