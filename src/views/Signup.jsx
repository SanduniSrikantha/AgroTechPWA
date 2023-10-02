import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import SignupImage from '../assets/SignupImage.png'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{

            await createUser(email, password)
            navigate('/home')

        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }

    }

  return (

    <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div class="lg:mb-12 md:mb-0 sm:mb-0 md:w-8/12 lg:w-6/12 mt-10">
        <img src={SignupImage} alt="" class="lg:w-[600px] lg:ml-20 sm:ml:0  mt-10 sm:mt-1" />
      </div>
      
      <div class='lg:w-[500px] md:mx-auto lg:mt-16 md:mt-0 md:mb:16 sm:mt-0 p-4'>
        <div>
          <h1 class='text-2xl font-bold py-2'>Sign Up to an account!</h1>
          <p class='py-2'>Already have an Account? <Link to='/' class='underline'>Sign In.</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class='flex flex-col py-2'>
              <label class='py-2 font-medium'>Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)} class='border p-3 rounded' type="email"/>
          </div>
          <div class='flex flex-col py-2'>
              <label class='py-2 font-medium'>Enter Password</label>
              <input onChange={(e) => setPassword(e.target.value)} class='border p-3 rounded' type="password"/>
          </div>
          <button class='border-purple-500 bg-purple-500 hover:bg-purple-400 w-full p-4 mt-5 text-white rounded'>Sign Up</button>
        </form>
      </div>
    </div>

  )
}

export default Signup
