import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Filters from '../components/Filters'


const home = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <Filters />
        <Cards />
        <Footer />        
      </div>
    </div>
  )
}

export default home
