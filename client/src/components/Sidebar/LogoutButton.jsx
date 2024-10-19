import React from 'react'
import toast from 'react-hot-toast';
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {

  const Logout = ()=>{
    localStorage.removeItem('userInfo');
    toast('Logging Out...........')

  }
  return (
    <div
    onClick={Logout}
    className=' cursor-pointer px-2 text-gray-300 font-semibold md:mt-16'><CiLogout size={28}/></div>
  )
}

export default LogoutButton