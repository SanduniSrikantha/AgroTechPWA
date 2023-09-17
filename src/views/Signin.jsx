import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


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
      navigate('/account') //account
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (
    <div class='max-w-[700px] mx-auto my-16 p-4'>
    <div>
      <h1 class='text-2xl font-bold py-2'>Sign In to your account!</h1>
      <p class='py-2'>Don't have an Account? <Link to='/signup' class='underline'>Sign Up.</Link></p>
    </div>
    <form onSubmit={handleSubmit} >
      <div class='flex flex-col py-2'>
          <label class='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} class='border p-3' type="email"/>
      </div>
      <div class='flex flex-col py-2'>
          <label class='py-2 font-medium'>Enter Password</label>
          <input onChange={(e) => setPassword(e.target.value)} class='border p-3' type="password"/>
      </div>
      <button class='border-blue bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign In</button>
    </form>
  </div>
  )
}

export default Signin
