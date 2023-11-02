import React from 'react'
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import {  AuthProvider } from './context/authContext';
import Login from './components/Login';
import Sell from './components/dataAdd';
import ProtectedRoute from './context/protectRoute'

const App = () => {
  return (
  <div>
  <AuthProvider>
   <Routes>
   <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
    <Route path='/login' element={<Login />} />
    <Route path="/sell" element={<Sell />} />
  </Routes>
  </AuthProvider>
  </div>
  )
}

export default App;