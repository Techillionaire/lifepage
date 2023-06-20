import React from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Team from './Components/Team/Team'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/recruits" element={<Team/>} />


     </Routes>
     
    
  )
}

export default App