import React, { useState } from 'react'
import HumanPlaceHolder from '../images/person-placeholder-300x300.jpg'
import Image from 'next/image'
import {CalendarIcon, EmojiHappyIcon, PhotographIcon, SearchCircleIcon, LocationMarkerIcon} from '@heroicons/react/outline'
function Tweetbox() {

  const [input,setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      
      <div className="h-14 w-14 rounded-full object-cover">
        <Image 
          src={HumanPlaceHolder} alt=""/>
      </div>
      <div className="flex flex-1 items-center pl-2" >
        <form className="flex flex-1 flex-col">
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text' placeholder="What's happening?" 
          className="h-24 w-full text-xl outline-none placeholder:text-xl" />
          <div className='flex items-center'>
            <div className='flex flex-1 space-x-2 text-twitter'> 
              <PhotographIcon className='w-5 h-5 cursor-pointer
              transition-transform duration-150 ease-out hover:scale-150' />
              <SearchCircleIcon className='w-5 h-5' />
              <EmojiHappyIcon className='w-5 h-5' />
              <CalendarIcon className='w-5 h-5' />
              <LocationMarkerIcon className='w-5 h-5' />
            </div>
            <button disabled={!input} className='bg-twitter px-5 py-2 font-bold
            text-white rounded-full disabled:opacity-30'>Tweet</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Tweetbox