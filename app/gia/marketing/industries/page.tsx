import AnimationWrapper from '@/components/layout/AnimationWrapper'
import React from 'react'
import Topbar from '../_components/Topbar'
import AllIndusteries from '../_components/Industries/AllIndusteries'
import { getAllIndustries } from '@/actions';
import { Industry } from '@/types';

const Industries = async () => {
  const industriesData = await getAllIndustries();
  const industries: Industry[] | [] = industriesData as Industry []| [];
  const breadcrumbs = [
    {
      text: "Industries",
      href: "/gia/marketing/industries",
    },
  ];

 
  return (
    <AnimationWrapper>
    <Topbar breadcrumbs={breadcrumbs } title="All Industries" />
    <AllIndusteries industries={industries} />
  </AnimationWrapper>
  )
}

export default Industries