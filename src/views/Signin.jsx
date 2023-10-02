import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import LoginImage from '../assets/LoginImage.png'


// JSX code for the page



const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try{
      await signIn(email, password)
      navigate('/home') //account
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (

    <div>
      <head><meta name="theme-color" content="#171717" /></head>
      <link rel="manifest" href="/manifest.webmanifest"/><script id="vite-plugin-pwa:register-sw" src="/registerSW.js"></script>
    
    <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      
      <div class="lg:mb-12 md:mb-0 sm:mb-0 md:w-8/12 lg:w-6/12 lg:mt-10 sm:mt-1">
        <img src={LoginImage} alt="" class="lg:w-[600px] lg:ml-20 sm:ml:0 sm:mt-1 mt-10" />

      </div>
      <div class='lg:w-[500px] md:mx-auto lg:mt-16 md:mt-0 md:mb:16 sm:mt-0 p-4'>
        <div>
          <h1 class='text-2xl font-bold py-2'>Sign In to your account!</h1>
          <p class='py-2'>New here? Click here <Link to='/signup' class='underline'>Sign Up.</Link></p>
        </div>
        <form onSubmit={handleSubmit} >
          <div class='flex flex-col py-2'>
              <label class='py-2 font-medium'>Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)} class='border p-3 rounded' type="email"/>
          </div>
          <div class='flex flex-col py-2'>
              <label class='py-2 font-medium'>Enter Password</label>
              <input onChange={(e) => setPassword(e.target.value)} class='border p-3 rounded' type="password"/>
          </div>
          <button class='border-purple-500 bg-purple-500 hover:bg-purple-400 w-full p-4 mt-5 text-white rounded'>Sign In</button>
        </form>
      </div>
    </div>
    </div>
    



  )
}

export default Signin
