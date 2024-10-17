import React from 'react'
import Message from './Message'
const MessageContent = () => {
  return (
    <div className='px-4 flex-1 overflow-auto no-scrollbar max-h-[30rem]'>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    <Message chat={"end"}/>
    <Message chat={"start"}/>
    </div>
  )
}

export default MessageContent