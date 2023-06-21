import React from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Team from './Components/Team/Team'
import { Routes, Route } from 'react-router-dom'
import Clients from './Components/Clients/Clients'
import Sales from './Components/Clients/Sales'


const App = () => {
  return (
    
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/recruits" element={<Team/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/sales" element={<Sales/>} />


     </Routes>
     
    
  )
}

export default App