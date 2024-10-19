import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { Spinner } from '../components/Spinner/Spinner';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const {loading, setLoading} = useAuth();
  const {setAuthUser} = useAuth();
  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      toast.error("Password doesn't match..")
      return;
    }
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      const data = await res.json()
      if (data.error) {
        toast.error(data.error)
        return;
      }
      localStorage.setItem('userInfo', JSON.stringify(data));
      setAuthUser(data);
      toast.success("Signup Successfull");
    } catch (error) {
      console.log('Error at sign up Page Client : ', error)
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <div className='flex flex-col min-w-96 mx-auto'>
      {
        loading && <Spinner />
      }
      <div className='p-6 w-full rounded-lg bg-gray-400 backdrop-filter bg-clip-padding  backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl text-center font-semibold text-gray-300'>Sign up
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" value={userData.fullName} onChange={handleChange} name="fullName" placeholder="Fullname"
                className="input input-bordered w-full max-w-xs" required />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input type="text" value={userData.username} onChange={handleChange} name="username" placeholder="Username"
                className="input input-bordered w-full max-w-xs" required />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Gender</span>
              </label>
              <select name="gender" onChange={handleChange} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" value={userData.password} onChange={handleChange}
                name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input type="password" value={userData.confirmPassword} onChange={handleChange} name="confirmPassword" placeholder="Confirm password"
                className="input input-bordered w-full max-w-xs" required />
            </div>
            <Link to='/login' className='px-2 text-sm hover:text-blue-600 mt-2 inline-block' href="www.google.com" >
              Already have an account ?
            </Link>

            <div>
              <button className='btn w-full btn-sm  max-w-xs mt-4'>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;