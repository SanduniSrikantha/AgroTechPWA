import React from 'react'
import Filter1 from './Filter1'
import Filter2 from './Filter2'
import Filter3 from './Filter3'


const SellerFilter = () => {
  return (
    <div class="bg-white py-8">
        <div class="container mx-auto px-6">
        <h2 class="text-3xl font-semi-bold text-amber-700 mb-10">My Products</h2>
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-5 md:grid-cols-2 place-items-center">
            <div class="">    
                <Filter1 />   
            </div>
            <div class="">
                <Filter2/>
            </div>
            <div class="">
                <Filter3 />
            </div>
            <div class="">
            <button class="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-12 rounded-2xl">
                Filter
            </button>


            </div>


        </div>

        </div>


      
    </div>
  )
}

export default SellerFilter
