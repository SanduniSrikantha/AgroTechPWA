import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SellerAccount from '../components/SellerAccount'
import SellerFilter from '../components/SellerFilter'
import MyProductCards from '../components/MyProductCards'

const SellerView = () => {
  return (
    <div>
        <NavBar/>
        
        <SellerAccount/>
        <SellerFilter/>
        
        <MyProductCards/>
        <Footer/>
      
    </div>
  )
}

export default SellerView
