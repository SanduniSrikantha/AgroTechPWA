import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Calendar1 from '../components/Calendar1'
import UpcomingList from '../components/UpcomingList'


const Upcoming = () => {
  return (
    <div>
      <NavBar />
      <Calendar1 />
      <UpcomingList/>


      <Footer />
      
    </div>
  )
}

export default Upcoming
