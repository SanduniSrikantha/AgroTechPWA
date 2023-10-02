import React from 'react'
import ProductCard1 from './ProductCard1'
import ProductInformation from './ProductInformation'

const ProductCard = () => {
  return (
    <><div class="bg-white py-10">
          <div class="container mx-auto px-3">
              <div class="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-8">
                  <div class=" mx-auto bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                      <ProductCard1 />

                  </div>

              </div>


          </div>

      </div></>
      
    
  )
}

export default ProductCard
