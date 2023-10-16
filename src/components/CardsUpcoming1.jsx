import React from 'react'
import PS from '../assets/PotatoSeeds.jpg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const CardsUpcoming1 = () => {
  return (
    <div class="max-w-[1200px] mx-auto ">
    <div class='max-w-[1200px] mx-5 my-5 flex justify-start space-x-4'>
      <div class="lg:text-lg sm:text-sm font-semibold">ORDER NO: 1123</div>
      <div class="lg:text-lg sm:text-sm font-semibold">Date Placed: 12/06/2023</div>
      <div class="lg:text-lg sm:text-sm font-semibold">Total Price: LKR 3000</div>
    </div>
      
    <div class='max-w-[1200px] mx-auto grid md:grid-cols-2'>
      <img class='md:w-[450px] sm:w-[200px] mx-auto  my-4 overflow-hidden' src={PS} alt='/' />
    <div class="grid md:grid-rows-4 pt-5 pb-5 space-y-2 mx-8">
      <div class="md:pt-14 font-semibold sm:text-sm md:text-lg">Premium Potato Seeds</div>
      <div class="">Potato seeds: Brown, round, yield hearty spuds when planted.</div>
      <div class=" md:pt-3 flex justify-start space-x-4"> 
      <LocalShippingIcon />

      <div class="font-semibold">To Arrive in 2 Days</div>

      </div>
      
      <div class=" grid md:grid-cols-2 md:space-x-2 sm:grid-cols-1">
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Order
      </a>
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Invoice
      </a>

      

      </div>
      
    </div>



      
        
    </div>
    </div>

  )
}

export default CardsUpcoming1
