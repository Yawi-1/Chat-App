import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import {SocketContextProvider} from './context/SocketContext.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <AuthContextProvider>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
