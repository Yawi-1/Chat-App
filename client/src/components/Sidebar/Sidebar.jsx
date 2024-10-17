import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
    return (
        <div className='flex flex-col border-r  border-slate-500 '>
            <SearchInput/>
            <div className='divider px-2'></div>
            <Conversations/>
            <div className='divider px-2'></div>
            <LogoutButton/>
        </div>
    )                                                                                              
}

export default Sidebar