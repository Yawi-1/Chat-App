import React from 'react'
import { MdWorkspacePremium } from "react-icons/md";
const MesageHeader = () => {
  return (
    <div className='flex gap-4 items-center bg-gray-500 text-black w-full p-2'>
      <span className='text-white'><MdWorkspacePremium size={22}/></span>
      <h3 className='font-semibold text-lg'>John Doe</h3>
    </div>
  )
}

export default MesageHeader