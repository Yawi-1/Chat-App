import React from 'react'

export const Spinner = () => {
  return (
    <div className='fixed w-full h-full flex items-center justify-center  z-30 inset-0 bg-white/10'>
        <div className='border-t-blue-600 border-gray-400 animate-spin h-16 w-16 rounded-full border-4'></div>
        
    </div>
  )
}
