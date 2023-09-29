import React from 'react'

import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import PS from '../assets/PotassiumSulphate.png';
import CounterInput from './CounterInput';
import RadioButtons from './RadioButtons';
import Payment from './Payment'
import useGeoLocation from '../hooks/useGeolocation';



const ProductCart1 = () => {
    const location = useGeoLocation();
  return (
    <div class="max-w-[1200px] mx-auto ">

      
    <div class='max-w-[1200px] mx-auto grid md:grid-cols-2'>
      <img class='md:w-[350px] lg:w-[350px] sm:w-[100px] sm:h-[auto] mx-auto my-4 overflow-hidden' src={PS} alt='/' />
    <div class="flex flex-col space-y-6">
      <div class="">Potassium Sulphate (0-0-50)</div>
      <div class="">Sulfate of Potash Granular is a 0-0-50 white granule that provides 50% potash and 17% sulfur to crops.

This potassium sulfate fertilizer is chloride-free and has a low salt index, less than half that of muriate of potash.

Potassium Sulfate is suitable for applications into fertility systems primarily for grapevines, tree crops, and vegetables.</div>
      <div class=" md:pt-3 flex justify-start space-x-4">
      <LocalOfferTwoToneIcon />

      <div class="font-semibold text-lg">LKR 3000</div>

      </div>
      <div class="my-5">
      <CounterInput/>
      </div>
      <div>
        <RadioButtons/>
      </div>
      
      
      <div class=" grid md:grid-cols-3 md:space-x-2 mx-2 sm:grid-cols-1">
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-[#00df9a] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Seller
      </a>
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-[#00df9a] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart
      </a>

      <Payment/>



      

      </div>
      <div>
      {
        location.loaded ? JSON.stringify(location) : "Location data not available yet."
      }
      </div>
      <div>Delivered on July 2nd 2023</div>
      
    </div>



      
        
    </div>
    </div>

  )
}

export default ProductCart1
