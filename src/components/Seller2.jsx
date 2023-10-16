import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Seller2 = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the "View" button click and navigate to the productview page
    const handleViewButtonClick = () => {
      navigate('/sellerview'); // Use navigate to navigate to the "/productview" route
    };
  return (


	
		<><div class="md:px-5 lg:px-5 px-6 pb-5  ">
            <div class="flex items-center justify-start py-2 px-1">
                <Avatar style={{ width: '60px', height: '60px' }}/>
                <a href="#">
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white mr-5 ml-4">Sam Greenfield</h3>
                </a>

            </div>


              <div class="flex items-center mt-2.5 mb-5">

                  <span class="bg-purple-200 text-purple-800  text-xs font-semibold mr-2 lg:px-2.5 md:px-2.5 px-4 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Fertilizer</span>
                  <span class="bg-red-200 text-red-800  text-xs font-semibold mr-2 lg:px-2.5 md:px-2.5 px-4 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Pesticide</span>
                  <span class="bg-white text-white text-xs font-semibold mr-2 lg:px-2.5 md:px-2.5 px-4 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Seeds</span>
              </div>
              <div class="flex items-center justify-between">
              <button
            
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 lg:ml-0 md:ml-0 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Seller
          </button>
                  <button
            onClick={handleViewButtonClick}
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 lg:mr-0 md:mr-0 mr-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Seller
          </button>
              </div>
          </div></>







  


  )
}

export default Seller2
