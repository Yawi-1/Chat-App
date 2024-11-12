import { useEffect } from "react";
import {useSocket} from '../context/SocketContext'
import useConversation from "../zustand/useConversation";


 const useListenMessages = ()=>{
    const {socket} = useSocket();
    const {messages,setMessages} = useConversation();
 

     useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage])
        })

        return ()=> socket?.off("newMessage")
     },[messages,setMessages])
}

export default useListenMessages;