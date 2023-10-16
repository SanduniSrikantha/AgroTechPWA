import React from 'react'
import Seller1 from './Seller1'
import Seller2 from './Seller2'
import Seller3 from './Seller3'
import Seller4 from './Seller4'

const Seller = () => {
  return (
    <div class="bg-white py-10">
    <div class="container mx-auto px-3"> {/**px-3 */}
        <h2></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               < Seller1/> 
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               < Seller2/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               <Seller3/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               < Seller4/>
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              
            </div>
            <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
               
            </div>

            
        </div>
    </div>
    </div>

    
  )
}

export default Seller
