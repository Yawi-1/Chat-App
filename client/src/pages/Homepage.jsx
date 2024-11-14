import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/MessageContainer/MessageContainer'
const Homepage = () => {
  
  return (
    <div className='flex flex-col-reverse  md:flex-row sm:h-[450px]  w-full md:w-1/2 h-full  md:h-[550px] rounded-lg
     overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 backdrop-filter '>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Homepage