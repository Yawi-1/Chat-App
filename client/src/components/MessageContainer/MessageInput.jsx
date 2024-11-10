import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useConversation from '../../zustand/useConversation';
import {useAuth} from '../../context/AuthContext'

const MessageInput = () => {
  const {messages,setMessages,selectedConversation} = useConversation();
  const [input,setInput] = useState("");
  const {authUser} = useAuth();
  const token = authUser?.token;

  const sendMessage = async (e)=>{
    e.preventDefault();
    if(input.trim() === ""){
      return;
    }
    try {
      const res = await fetch(`http://localhost:8000/api/message/send/${selectedConversation._id}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify({message:input}),
      });
      const data = await res.json();
      setMessages([...messages,data]);
      setInput("");
    } catch (error) {
      console.log('Error at Message Input: ',error)
    }
  }

  return (
    <form className='px-4 my-3' onSubmit={sendMessage}>
      <div className='w-full flex gap-4 '>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} name="" id="" className='flex-1 px-4 py-2 rounded' placeholder='Message' />
        <button className='flex items-center justify-center hover:bg-green-400 bg-green-500 text-white rounded-full h-12 w-12'><BsSend size={24}/></button>
      </div>
    </form>
  )
}

export default MessageInput