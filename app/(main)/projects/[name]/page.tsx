import { getProject } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import Description from "@/components/Description/Description";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const ProjectPage = async ({ params }: { params: { name: string } }) => {
  const name = params.name;
  const project = await getProject(name);
  if (!project) return null;

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
          src={project?.image}
          alt="project"
          className="lg:w-1/2 w-full object-contain rounded mb-8"
        />
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default ProjectPage;
