import { getProject } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import EditProjectForm from "../../_components/Projects/EditProjectForm";
import Topbar from "../../_components/Topbar";

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const project = await getProject(id);
  if (!project) {
    return null;
  }

  const breadcrumbs = [
    {
      text: "Projects",
      href: "/gia/marketing",
    },
    {
      text: "Edit Project",
      href: "#",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="Edit Project" />
      <EditProjectForm project={project} />
    </AnimationWrapper>
  );
};

export default ProjectPage;
