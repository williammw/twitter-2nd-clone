import React, { Dispatch, SetStateAction, useRef, useState, MouseEvent } from 'react'
import HumanPlaceHolder from '../images/person-placeholder-300x300.jpg'
import Image from 'next/image'
import {CalendarIcon, EmojiHappyIcon, PhotographIcon, SearchCircleIcon, LocationMarkerIcon} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { TweetBody, Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props { 
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}

function Tweetbox({setTweets} : Props) {

  const [input,setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const {data:session} = useSession()
  const [imageUrlBoxIsOpen , setImageUrlBoxIsOPen] = useState<boolean>(false)

  const imageInputRef = useRef<HTMLInputElement>(null)

  const addImageToTweet = (e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()


    if(!imageInputRef.current?.value) return

    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ""
    setImageUrlBoxIsOPen(false)
  }

  const postTweet = async () => {
    const tweetInfo : TweetBody = {
      text:input,
      username:session?.user?.name || 'Unknow User',
      profileImg : session?.user?.image || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg',
      image: image,
    }

    const result = await fetch(`api/addTweet`, {
      body : JSON.stringify(tweetInfo),
      method : 'POST',
    })

    const json = await result.json()

    const newTweets = await fetchTweets()
    setTweets(newTweets)

    toast('Tweet posted' ,{
      icon:'Rock'
    })

    return json
  }


  const handleSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()


    postTweet()

    setInput('')
    setImage('')
    setImageUrlBoxIsOPen(false)

  }

  return (
    <div className="flex space-x-2 p-5">
      
      <div className="h-14 w-14 rounded-full object-cover">
        <Image 
          src={session?.user?.image ||HumanPlaceHolder} alt="" className="mt-4 h-14 w-14 rounded-full object-cover" width={56}
          height={56}/>
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
              <PhotographIcon onClick={() => {setImageUrlBoxIsOPen(!imageUrlBoxIsOpen)}} className='w-5 h-5 cursor-pointer
              transition-transform duration-150 ease-out hover:scale-150' />
              <SearchCircleIcon className='w-5 h-5' />
              <EmojiHappyIcon className='w-5 h-5' />
              <CalendarIcon className='w-5 h-5' />
              <LocationMarkerIcon className='w-5 h-5' />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input || !session} className='bg-twitter px-5 py-2 font-bold
            text-white rounded-full disabled:opacity-30'>Tweet</button>
          </div>

            {imageUrlBoxIsOpen && (
              <form className="mt-5 flex rounded-lf bg-twitter/80 py-2 px-4">
                <input
                  ref={imageInputRef}
                  className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                  type="text" placeholder="Enter Image URL..." />
                <button type="submit" onClick={addImageToTweet} className="font-bold text-white">Add Image</button>
              </form>
            )}
          {image && (
            <img 
            src={image} 
            className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg" 
            alt="" />
          )}
        </form>
      </div>
      
    </div>
  )
}

export default Tweetbox

