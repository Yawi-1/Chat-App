import React,{useEffect} from 'react'
import MesageHeader from './MesageHeader'
import MessageContent from './MessageContent'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation'
import { useAuth } from '../../context/AuthContext';


const NoChatSelected = ()=>{
  const {authUser} = useAuth();
  return(
    <div className='flex flex-col h-[35rem]  items-center justify-center'>
      <p className='font-bold text-xl py-2'>Welcome 👋 {authUser?.fullName}  </p>
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
    <div
     className={`md:min-w-[450px] w-full 
       ${selectedConversation !== null ?   'h-screen md:h-[34rem]' : 'min-h-72'}  md:min-h-72  flex flex-col justify-between`}>  {
        !selectedConversation  ? <NoChatSelected /> : (
          <>
            <MesageHeader setSelectedConversation={setSelectedConversation} selectedConversation={selectedConversation} />
            <MessageContent />
            <MessageInput />
          </>
        )
      }


    </div>
  )
}

export default MessageContainer