import React from 'react'
import {BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import TwitterLogo from '../images/Twitter-logo.svg'
import SideBarRow from './SideBarrow'
function Sidebar() {
  return (
    <div>
      <div className="h-10 w-10">
        <Image 
          src={TwitterLogo} alt=""/>
      </div>
      
      <SideBarRow Icon={HomeIcon} title="Home"/>
      <SideBarRow Icon={HashtagIcon} title="Home"/>
      <SideBarRow Icon={BellIcon} title="Home"/>
      <SideBarRow Icon={MailIcon} title="Home"/>
      <SideBarRow Icon={BookmarkIcon} title="Home"/>
      <SideBarRow Icon={CollectionIcon} title="Home"/>

    </div>
  )
}

export default Sidebar