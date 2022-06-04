import React from 'react'
import {BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import TwitterLogo from '../images/Twitter-logo.svg'
import SideBarRow from './SideBarRow'
function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <div className="h-10 w-10 m-3">
        <Image 
          src={TwitterLogo} alt=""/>
      </div>
      
      <SideBarRow Icon={HomeIcon} title="Home"/>
      <SideBarRow Icon={HashtagIcon} title="Explore"/>
      <SideBarRow Icon={BellIcon} title="Notifications"/>
      <SideBarRow Icon={MailIcon} title="Messages"/>
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks"/>
      <SideBarRow Icon={CollectionIcon} title="Lists"/>
      <SideBarRow Icon={UserIcon} title="Lists"/>

      <SideBarRow Icon={DotsCircleHorizontalIcon} title="Lists"/>

    </div>
  )
}

export default Sidebar