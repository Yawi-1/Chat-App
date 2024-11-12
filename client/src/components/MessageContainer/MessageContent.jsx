import React, { useEffect } from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import { useAuth } from '../../context/AuthContext';
import useListenMessages from '../../hooks/useListenMessage';
const MessageContent = () => {

  const  {messages,setMessages,selectedConversation} = useConversation();
  const {authUser} = useAuth();
  const token = authUser?.token;
  const getMessages = async ()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/message/:${selectedConversation?._id}`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.log('Error at getting message : ',error)
    }
  }

  useListenMessages();
  useEffect(()=>{
    getMessages();
    },[selectedConversation,setMessages])


  return (
    <div className='px-4 flex-1 overflow-auto no-scrollbar max-h-[30rem]'>
      {
        messages.length > 0 &&  messages.map((msg)=>{
          return <Message key={msg._id} message={msg} selectedConversation={selectedConversation} />
        })
      }
      {
        messages.length == 0 && <h1 className='text-center text-sm p-2 font-semibold text-white'>Send a message to start conversation.</h1>
      }
    </div>
  )
}

export default MessageContent