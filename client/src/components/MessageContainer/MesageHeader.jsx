import React from 'react'
import { MdWorkspacePremium } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const MesageHeader = ({selectedConversation,setSelectedConversation}) => {
  const {username}=selectedConversation;

  return (
    <div className='flex gap-4 items-center justify-between bg-gray-500 text-black w-full p-2'>
      <div className='flex gap-x-4'>
      <span className='text-white'><MdWorkspacePremium size={22}/></span>
      <h3 className='font-semibold text-lg capitalize'>To : {username}</h3>
      </div>
      <span className='text-xl font-bold m-1 cursor-pointer ' onClick={()=>setSelectedConversation(null)}><RxCross2/></span>
    </div>
  )
}

export default MesageHeader