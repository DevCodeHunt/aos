import { getService } from "@/actions";
import AnimationWrapper from "@/components/layout/AnimationWrapper";
import EditServiceForm from "../../_components/Services/EditServiceForm";
import Topbar from "../../_components/Topbar";

const ServicePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const service = await getService(id);
  if (!service) {
    return null;
  }

  const breadcrumbs = [
    {
      text: "Services",
      href: "/gia/marketing/services",
    },
    {
      text: "Edit Service",
      href: "#",
    },
  ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="Edit Service" />
      <EditServiceForm service={service} />
    </AnimationWrapper>
  );
};

export default ServicePage;
