import AnimationWrapper from '@/components/layout/AnimationWrapper';
import React from 'react'
import Topbar from '../_components/Topbar';
import AllContacts from '../_components/Contacts/AllContacts';
import { getAllContacts } from '@/actions';

const Contacts = async () => {
  const contacts = await getAllContacts();
  const breadcrumbs = [
    {
      text: "Contacts",
      href: "/gia/marketing/contacts",
    },
  ];

  if(!contacts) return null
  return (
    <AnimationWrapper>
      <Topbar breadcrumbs={breadcrumbs} title="All Careers" />
      <AllContacts contacts={contacts} />
    </AnimationWrapper>
  );
}

export default Contacts