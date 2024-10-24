import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { Spinner } from '../components/Spinner/Spinner';
const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthUser, loading, setLoading } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!userName) {
            toast.error('Please enter your username');
            return;
        }
        if (!password) {
            toast.error('Please enter your password');
            return;
        }
        try {
            setLoading(true);
            const res = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: userName, password })
            })
            const data = await res.json();
            if (data.error) {
                toast.error(data.error)
                return;
            }
            toast.success('Logged In Successfully.....')
            localStorage.setItem('userInfo', JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            console.log('Login page error:', error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col min-w-96 mx-auto'>
            <div className='p-6 w-full rounded-lg bg-gray-400 backdrop-filter bg-clip-padding  backdrop-blur-lg bg-opacity-0 '>
                <h1 className='text-3xl text-center font-semibold text-gray-300'>Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <div>
                    {loading && <Spinner />}
                    <form onSubmit={handleLogin}>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
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