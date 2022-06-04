import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='mt-2 px-2 hidden col-span-2 lg:inline'>
      {/* Search */}
      <div className='flex items-center space-x-2 bg-gray-100 p-3
      rounded-full'>
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input 
        className='flex-1 outline-none bg-transparent' 
        type='text' 
        placeholder="Search Twitter" />
      </div>


      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="de9bugserBeta"
        options={{height: 1000}}
      />

    </div>
  )
}

export default Widgets