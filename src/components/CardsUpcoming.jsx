import React from 'react'
import CardsUpcoming1 from './CardsUpcoming1'
import CardsUpcoming2 from './CardsUpcoming2'
import Calendar1 from './Calendar1'


const CardsUpcoming = () => {
  return (

    <div class="bg-white py-10">
    <div class="container mx-auto px-5"> {/**px-3 */}
        <h2></h2>
        <div class="grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
            <div class="justify-self-center sm:pt-0 md:pt-20">
               <Calendar1/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <CardsUpcoming1/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <CardsUpcoming1/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <CardsUpcoming2/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1></h1>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1></h1>
            </div>

            
        </div>
    </div>
    </div>

  )
}

export default CardsUpcoming
