import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Filters from '../components/Filters'
import Location from '../components/Location'
import LocationCards from '../components/LocationCards'


const home = () => {
  
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <Filters />
        <Cards />
        <Location/>
        <LocationCards/>
        <Footer />        
      </div>
    </div>
  )
}

export default home
