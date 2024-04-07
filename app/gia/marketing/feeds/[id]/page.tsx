import { getFeed } from '@/actions'
import AnimationWrapper from '@/components/layout/AnimationWrapper'
import React from 'react'
import Topbar from '../../_components/Topbar'
import EditFeedForm from '../../_components/Feeds/EditFeedForm'

const FeedPage = async ({ params }: { params: { id: string } }) => {
    const feed = await getFeed(params.id)

    if(!feed) return null

    const breadcrumbs = [
      {
        text: "Feeds",
        href: "/gia/marketing/feeds",
      },
      {
        text: "Edit Feed",
        href: "#",
      },
    ];
  return (
    <AnimationWrapper>
    <Topbar breadcrumbs={breadcrumbs} title="Edit Feed" />
      <EditFeedForm feed={feed}  />
   </AnimationWrapper>
  )
}

export default FeedPage