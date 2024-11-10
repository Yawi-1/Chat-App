import React, { useEffect, useState } from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import { useAuth } from '../../context/AuthContext'
const MessageContent = () => {

  const  {messages,setMessages,selectedConversation} = useConversation();
  const [messageData,setMessageData] = useState([]);
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
      setMessageData(data);
      console.log('Mesage data:',data);
     
    } catch (error) {
      console.log('Error at getting message : ',error)
    }
  }

  useEffect(()=>{
    getMessages();
    },[selectedConversation,setMessages])

  return (
    <div className='px-4 flex-1 overflow-auto no-scrollbar max-h-[30rem]'>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    </div>
  )
}

export default MessageContent