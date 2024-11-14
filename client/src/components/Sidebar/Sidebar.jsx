import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversation from '../../zustand/useConversation'
const Sidebar = () => {
    const { selectedConversation} = useConversation();
    return (
        <div className={`flex flex-col md:border-r w-full ${selectedConversation !== null ? 'hidden md:flex' : ''}  border-slate-500 `}>
            <SearchInput/>
            <div className='divider md:px-2'></div>
            <Conversations/>
            <div className='divider md:px-2'></div>
            <LogoutButton/>
        </div>
    )                                                                                              
}

export default Sidebar