import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import UpcomingList from '../components/UpcomingList'

const History = () => {
  return (
    <div>
      <div>
      <NavBar />
      <SearchBar/>
      <div class="mx-5 my-10">
      <UpcomingList />
      </div>
      <Footer />
      </div>  
    </div>
  )
}

export default History

