import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SellerAccount from '../components/SellerAccount'
import Cards from '../components/Cards'
import SellerFilter from '../components/SellerFilter'

const SellerView = () => {
  return (
    <div>
        <NavBar/>
        
        <SellerAccount/>
        <SellerFilter/>
        
        <Cards/>
        <Footer/>
      
    </div>
  )
}

export default SellerView
