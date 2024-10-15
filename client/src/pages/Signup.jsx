import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col min-w-96 mx-auto'>
      <div className='p-6 w-full rounded-lg bg-gray-400 backdrop-filter bg-clip-padding  backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl text-center font-semibold text-gray-300'>Sign up
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <div>
          <form action="">
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder="Fullname" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Gender</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
            </div>
            <a className='px-2 text-sm hover:text-blue-600 mt-2 inline-block' href="www.google.com" >
              Already have an account ?
            </a>

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