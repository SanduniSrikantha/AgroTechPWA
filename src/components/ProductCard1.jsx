import React from 'react'
import SellIcon from '@mui/icons-material/Sell';
import Tomato from '../assets/Tomato.webp';
import CounterInput from './CounterInput';
import RadioButtons from './RadioButtons';
import Payment from './Payment'
import OrderDate from './OrderDate';



const ProductCard1 = () => {
    
  return (
    <div class="max-w-[1200px] mx-auto ">

      
    <div class='max-w-[1200px] mx-auto grid md:grid-cols-2'>
      <img class='md:w-[350px] lg:w-[350px] sm:w-[100px] sm:h-[auto] mx-auto my-4 overflow-hidden place-self-center ' src={Tomato} alt='/' />
    <div class="flex flex-col space-y-6 mx-3">
      <div class="mt-4 font-semibold text-xl">Ferry-Morse Tomato Seeds</div>
      <div class="">Farmers' Preferred Tomato Seeds: Our carefully selected tomato varieties are bred for high yields and exceptional flavor. Perfect for all farming conditions, these seeds ensure robust plants and plentiful harvests. Trust in our quality seeds to elevate your tomato crop, delivering both quantity and taste to your farm.</div>
      <div class=" md:pt-3 flex justify-start space-x-4">
      <SellIcon />

      <div class="font-semibold text-lg">LKR. 750</div>

      </div>


      <div class=" grid md:grid-cols-2 md:space-x-2 mx-2 sm:grid-cols-1">
      <div class="my-5">
      <CounterInput/>
      </div>
      <div><div><OrderDate/></div></div>
      </div>

      <div>
        <RadioButtons/>
      </div>

      
      
      <div class=" grid md:grid-cols-2 md:space-x-2 mx-2 sm:grid-cols-1">
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Seller
      </a>
      <a href="#"
          class="md:h-[45px] lg:h-[45px] my-1 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart
      </a>


     



      

      </div>
      <div class="mx-4 self-center">
       <Payment/>
      </div>
      <div>
      </div>    
    </div>




      
        
    </div>
    </div>

  )
}

export default ProductCard1
