import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import useGeoLocation from '../hooks/useGeolocation'

const Location = () => {
    const location = useGeoLocation();
  return (
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-semi-bold text-amber-700 mb-10">Sellers in Your Area</h2>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 md:grid-cols-2 place-items-start">         
                <div class="border-solid border-2 border-gray-500 flex py-3 px-3 rounded-md sm:w-[500px]">
                    <div class=""><PlaceIcon sx={{ fontSize: 30 }}/></div>
                    <div class="pt-0.5">
                    {
                      location.loaded ? JSON.stringify(location):"Location data not available"
                    }
                    </div>
                </div>
            </div>     
      </div>
    </div>
  )
}

export default Location
