import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useAuth } from '../../context/AuthContext';
const SearchInput = () => {

  const {searchInput,setSearchInput,searchUser,clearInput} = useAuth();

  return (
    <form className=' relative flex items-center md:p-2 gap-2'>
    <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" name="" placeholder='Search'
     className='rounded-full w-full input input-bordered' id="" />
    <button onClick={searchUser} className='btn btn-circle bg-sky-500 text-white'><IoSearchSharp size={24}/></button>
    {
      searchInput.length > 0 &&  <span onClick={clearInput} className='absolute cursor-pointer right-20 font-bold text-xl'>X</span>
    }

    </form>
  )
}

export default SearchInput