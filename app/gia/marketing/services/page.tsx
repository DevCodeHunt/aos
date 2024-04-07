import AnimationWrapper from '@/components/layout/AnimationWrapper'
import React from 'react'
import Topbar from '../_components/Topbar'
import AllServices from '../_components/Services/Services'
import { getAllServices } from '@/actions';

const Services = async () => {
    const services = await getAllServices()
    const breadcrumbs = [
      {
        text: "Services",
        href: "/gia/marketing/services",
      },
    ];
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="All Services" />
      <AllServices services={services} />
    </AnimationWrapper>
  )
}

export default Services