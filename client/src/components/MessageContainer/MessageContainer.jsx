import React,{useEffect} from 'react'
import MesageHeader from './MesageHeader'
import MessageContent from './MessageContent'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation'

const NoChatSelected = ()=>{
  return(
    <div className='flex flex-col h-[35rem]  items-center justify-center'>
      <p className='font-bold text-xl py-2'>Welcome to John Doe 👋 </p>
      <p className='font-semibold text-lg pb-2'>Select a chat to start messaging. </p>
      <span className='my-4'><TiMessages size={60}/></span>
    </div>
  )
}
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    return ()=> setSelectedConversation(null)
  },[])
  return (
    <div className='md:min-w-[450px] hidden md:flex flex-col'>
      {
        !selectedConversation  ? <NoChatSelected /> : (
          <>
            <MesageHeader selectedConversation={selectedConversation} />
            <MessageContent />
            <MessageInput />
          </>
        )
      }


    </div>
  )
}

export default MessageContainer