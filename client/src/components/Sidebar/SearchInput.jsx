import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center p-2 gap-2'>
    <input type="text" name="" placeholder='Search' className='rounded-full input input-bordered' id="" />
    <button className='btn btn-circle bg-sky-500 text-white'><IoSearchSharp size={24}/></button>
    </form>
  )
}

export default SearchInput