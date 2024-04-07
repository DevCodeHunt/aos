import { getAllProjects } from '@/actions'
import Description from '@/components/Description/Description'
import AnimationWrapper from '@/components/layout/AnimationWrapper'
import Footer from '@/components/layout/Footer'
import { Project } from '@/types'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: "Capacity Building Program",
}

const CapacityBuildingProgram = async () => {
  const projects = await getAllProjects()
  const project = projects.find((project: Project) => project?.title === "Faculty Capacity Building Program in Bangladesh")
  
  return (
    <AnimationWrapper>
       <section className="py-8 flex lg:gap-4 gap-6 items-start md:flex-row flex-col-reverse">
        <div className="lg:w-1/2 w-full">
          <h1 className="md:text-3xl text-2xl font-semibold my-4">
            {project?.title}
          </h1>

          <Description description={project?.description || ""} />
        </div>
        <Image
          width={800}
          height={800}
          src={project?.image || ""}
          alt="project"
          loading="lazy"
          className="lg:w-1/2 w-full object-contain rounded mb-8"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  )
}

export default CapacityBuildingProgram