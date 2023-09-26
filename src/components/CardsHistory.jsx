import React from 'react'
import CardHistory1 from './CardHistory1'


const CardsHistory = () => {
  return (

    <div class="bg-white py-10">
    <div class="container mx-auto px-3"> {/**px-3 */}
        <h2></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <CardHistory1/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1>1</h1>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1>1</h1>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1>1</h1>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1>1</h1>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <h1>1</h1>
            </div>

            
        </div>
    </div>
    </div>

  )
}

export default CardsHistory
