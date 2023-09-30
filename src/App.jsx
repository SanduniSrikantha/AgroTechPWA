import React from 'react'
import Signin from './views/Signin'
import Signup from './views/Signup'
import Cart from './views/Cart'
import CheckOut from './views/CheckOut'
import Upcoming from './views/Upcoming'
import ProductView from './views/ProductView'
import Home from './views/home'
import Account from './views/Account'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './views/ProtectedRoutes'
import History from './views/History'
import "@stripe/stripe-js";





function App() {
  

  return (
    <div>
 
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route 
        path='/home' 
        element={
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>} 
          />
        <Route path='/cart' element={(<Cart />)} />
        <Route path='/checkout' element={(<CheckOut />)} />
        <Route path='/productview' element={(<ProductView />)} />
        <Route path='/account' element={(<Account />)} />
        <Route path='/history' element={(<History/>)} />
        <Route path='/upcoming' element={(<Upcoming />)} />
        
          
      </Routes>
      </AuthContextProvider>
    </div>
 
  )
}

export default App

