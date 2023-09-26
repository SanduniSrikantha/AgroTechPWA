import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Navbar from '../components/NavBar'
import HeroAccount from '../components/HeroAccount'

const Account = () => {

  

  const {user, logout} = UserAuth()

const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }

  }

  return (
    
    <div>
      
      <Navbar /> 
      <HeroAccount />
      <h1 class='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>
      

      <button onClick={handleLogout} class='border px-6 py-2 my-4'>Logout</button>
    </div>
  )
}



export default Account
