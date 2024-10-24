import React from 'react'
import toast from 'react-hot-toast';
import { CiLogout } from "react-icons/ci";
import { useAuth } from '../../context/AuthContext'
import { Spinner } from '../../components/Spinner/Spinner'

const LogoutButton = () => {

  const { loading, setLoading } = useAuth()
  const Logout = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8000/api/auth/logout')
      const data = await res.json();
      if (!data) {
        toast.error(data.error);
        return;
      }
      toast.success(data.message)
      localStorage.removeItem('userInfo');
      setTimeout(()=>{
        window.location.reload();
      },200)
      setLoading(false);
    } catch (error) {
      console.log('Error at logout page:', error);
      setLoading(false);
    }

  }
  return (
    <>
      <div
        onClick={Logout}
        className=' cursor-pointer px-2 text-gray-300 font-semibold md:mt-16'><CiLogout size={28} />
      </div>
      {loading && <Spinner />}
    </>
  )
}

export default LogoutButton