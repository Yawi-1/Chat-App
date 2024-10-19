import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

const App = () => {
  const { authUser } = useAuth()
  return (
      <div className='p-4  h-screen flex items-center justify-center'>
        <Routes>
          <Route path="/" element={ authUser ? <Homepage />:<Navigate to='/login'/>} />
          <Route path="/login" element={authUser ? <Navigate to='/'/>:<Login />} />
          <Route path="/signup" element={authUser ? <Navigate to='/'/>:<Signup />} />
        </Routes>
        <Toaster />
      </div>
  )
}

export default App