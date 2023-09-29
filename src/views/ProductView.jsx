import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import ProductInformation from '../components/ProductInformation'

const ProductView = () => {
  return (
    <div>
      <NavBar/>
      
      <ProductCard/>

      <ProductInformation/>
      <Footer/>
    </div>
  )
}

export default ProductView
