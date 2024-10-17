import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='flex flex-col min-w-96 mx-auto'>
            <div className='p-6 w-full rounded-lg bg-gray-400 backdrop-filter bg-clip-padding  backdrop-blur-lg bg-opacity-0 '>
                <h1 className='text-3xl text-center font-semibold text-gray-300'>Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <div>
                    <form action="">
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <Link to='/signup' className='px-2 text-sm hover:text-blue-600 mt-2 inline-block' href="www.google.com" >
                            {"Don't"} have an account ?
                        </Link>

                        <div>
                            <button className='btn w-full btn-sm  max-w-xs mt-4'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login