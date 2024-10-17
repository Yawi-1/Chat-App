import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full flex gap-4 '>
        <input type="text" name="" id="" className='flex-1 px-4 py-2 rounded' placeholder='Message' />
        <button className='flex items-center justify-center hover:bg-green-400 bg-green-500 text-white rounded-full h-12 w-12'><BsSend size={24}/></button>
      </div>
    </form>
  )
}

export default MessageInput