import React from 'react'
import Account from '../assets/Account.png';
import avatar from '../assets/avatar.png';


const HeroAccount = () => {
  return (
    <div class="w-full bg-white py-12 px-4">
        <div class="max-w-[1200px] mx-auto grid md:grid-cols-2">
        <img class='md:w-[450px] sm:w-[300px] mx-auto my-4 overflow-hidden' src={Account} alt='/' />
            <div class="flex flex-col justify-center">
              <div class="flex justify-center">
              <p class="mb-10 text-lg font-semibold">User Profile</p>
              </div>
                <div class="h-auto lg:w-[550px] md:w-[550px] sm:w-[500px] mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-center">
                  <img src={avatar} class="w-40"></img>
                  </div>
                  <div class="flex justify-center">
                  <p>User3@gmail.com</p>
                  </div>
                  <div class="px-4">
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
                  <div class=" grid grid-cols-2 py-4">
                    <p>Edit stuff on acc</p>
                    <p class="place-self-end">arrow</p>
                  </div>
                  </div>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroAccount
