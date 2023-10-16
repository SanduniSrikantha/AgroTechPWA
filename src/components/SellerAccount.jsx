import React from 'react'
import { Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SellerImg from '../assets/SellerImg2.png';

const SellerAccount = () => {
  return (
    <div className='w-full bg-white md:pb-12 md:pt-12 lg:pb-12 lg:pt-12 pb-12 pt-5 px-4'>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
          
          <div className="flex flex-col justify-center">

            <div className="h-auto lg:w-[550px] md:w-[550px] sm:w-[500px] mx-auto bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-center">
                <Avatar
                  alt="User3"
                  src={Avatar}
                  sx={{ width: 105, height: 105 }}
                />
              </div>
              <div className="flex justify-center">
                <p class="mt-2 text-lg font-semibold">Sam GreenField</p>
              </div>
              <div className="flex justify-center md:py-5 md:px-7 lg:py-5 lg:px-7 py-5 px-4">
                <p class="text-justify">I'm Sam Greenfield, your go-to expert for all your gardening and fertilization needs. I've spent years honing my knowledge and passion for helping you achieve the greenest, healthiest gardens possible. At Greenfield Gardens, we offer premium fertilizers and personalized advice to make your gardening dreams a reality. Let's grow together!</p>
              </div>
              <div className="px-7">
                <div class="flex place-items-start my-4">
                  <h2 class="mt-2 text-base font-semibold">Provides: </h2>
                <span class="bg-purple-200 text-purple-800 text-sm font-semibold px-5 py-2 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 mt-0.5">Fertilizer</span>
                <span class="bg-red-200 text-red-800 text-sm font-semibold px-5 py-2 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 mt-0.5">Pesticide</span>
                </div>
                <div className="flex place-items-start my-4">
                  <p class="text-base font-semibold">Overall Score: </p>
                  <svg class="w-6 h-6 text-yellow-300 mx-1" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                  </svg>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <p>Email</p>
                  <p className="place-self-end md:mr-10 lg:mr-10"><ArrowForwardIosIcon /></p>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <p>Telephone</p>
                  <p className="place-self-end md:mr-10 lg:mr-10"><ArrowForwardIosIcon /></p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <img className="md:w-[250px] lg:w-[500px] sm:w-[300px] mx-auto my-4 overflow-hidden" src={SellerImg} alt="/" />

          </div>

          </div>


     

      
    </div>
  )
}

export default SellerAccount
