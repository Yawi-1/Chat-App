import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className='flex gap-4 justify-between'>
          <p className='font-bold  text-gray-200 px-4'>John Doe</p>
          <span className='text-xl'>❤️</span>
        </div>
      </div>

    </div>
     <hr className='px-4 border-[1px] border-gray-500' />
     </>
  )
}

export default Conversation