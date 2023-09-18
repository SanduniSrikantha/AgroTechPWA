import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const Cards = () => {
  return (
    <div class="bg-white py-10">
    <div class="container mx-auto px-3"> {/**px-3 */}
        <h2></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card1 /> 
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card2 />
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card3 />
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card1 />
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card2 />
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Card3 />
            </div>

            
        </div>
    </div>
    </div>

    
  )
}

export default Cards
