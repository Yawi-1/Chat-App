import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import {Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <div className='p-4  h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
      <Toaster/>
      </div>
  )
}

export default App