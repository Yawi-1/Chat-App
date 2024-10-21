import React, { useEffect } from 'react'
import Conversation from './Conversation'
const Conversations = () => {
  const getAllUsers = async ()=>{
    try {
      const res = await fetch('http://localhost:8000/api/users/all',{
         method: 'GET',
        credentials: 'include' 
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      
    }
  }
  useEffect(()=>{ getAllUsers()},[])
  return (
    <div className='flex flex-col   max-h-[25rem]  no-scrollbar overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations