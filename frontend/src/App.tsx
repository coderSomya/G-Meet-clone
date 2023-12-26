import { Button } from 'antd'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
