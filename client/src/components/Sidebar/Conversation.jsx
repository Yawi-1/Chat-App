import React from 'react'
import {getRandomEmoji} from '../../assets/emojiArray'
import useConversation from '../../zustand/useConversation'


const Conversation = ({conversation}) => {

  const {_id,username,fullName,gender,profilePic} = conversation;
  const {selectedConversation,setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === _id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
       ${isSelected ? "bg-sky-400":""}
      `}
       onClick={()=>setSelectedConversation(conversation)}
      >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={profilePic} />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className='flex gap-4 justify-between'>
          <p className='capitalize font-bold  text-gray-200 px-4'>{username}</p>
          <span className='text-xl'>{getRandomEmoji()}</span>
        </div>
      </div>

    </div>
     <hr className='px-4 border-[1px] border-gray-500' />
     </>
  )
}

export default Conversation