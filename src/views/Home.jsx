import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Filters from '../components/Filters'
import useGeoLocation from '../hooks/useGeolocation'


const home = () => {
  const location = useGeoLocation();
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <Filters />
        <Cards />
        <div>
          {
            location.loaded ? JSON.stringify(location):"Location data not available"
          }

        </div>
        <Footer />        
      </div>
    </div>
  )
}

export default home
