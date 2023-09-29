import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Navbar from '../components/NavBar'
import { Avatar } from '@mui/material'

import Accountimg from '../assets/Account.png';
import {useState} from 'react';
import { storage } from '../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

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

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  };
  

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image).then(() =>{
      getDownloadURL(imageRef).then((url) =>{
        setUrl(url)
      }).catch(error =>{
        console.log(error.message, "error getting image url")
      });
      setImage(null);
    }).catch(error =>{
      console.log(error.message, "error getting image url")
    });
  };

  return (
    
    <div>
      
      <Navbar />
      <div class="w-full bg-white py-12 px-4">
        <div class="max-w-[1200px] mx-auto grid md:grid-cols-2">
        <img class='md:w-[450px] sm:w-[300px] mx-auto my-4 overflow-hidden' src={Accountimg} alt='/' />
            <div class="flex flex-col justify-center">
              <div class="flex justify-center">
              <p class="mb-10 text-lg font-semibold">User Profile</p>
              </div>
                <div class="h-auto lg:w-[550px] md:w-[550px] sm:w-[500px] mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={url}
                    sx={{ width: 100, height: 100 }}
                  />
                  
                  </div>
                  <div class="flex justify-center">
                  <p>{user && user.email}</p>
                  </div>
                  <div class="px-4">
                  <div class=" grid grid-cols-2 py-4">
                    <input type="file" onChange={handleImageChange} />
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                  <div class=" grid grid-cols-2 py-4">
                    <p>Edit stuff on acc</p>
                    <p class="place-self-end">arrow</p>
                  </div>
                  <div class=" grid grid-cols-2 py-4">
                    <p>Edit stuff on acc</p>
                    <p class="place-self-end">arrow</p>
                  </div>
                  <div class=" grid grid-cols-2 py-4">
                    <p>Edit stuff on acc</p>
                    <p class="place-self-end">arrow</p>
                  </div>
                  </div>                  
                </div>
            </div>
        </div>
    </div> 
      
      <h1 class='text-2xl font-bold py-4'>Account</h1>
      
      

      <button onClick={handleLogout} class='border px-6 py-2 my-4'>Logout</button>
    </div>
  )
}



export default Account
