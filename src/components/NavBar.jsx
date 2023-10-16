import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='max-w-[1200px] flex justify-between items-center h-24 w-screen mx-auto px-4 text-black bg-white'>
      <h1 className='w-full text-3xl font-bold text-green-600'>GROWERS</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 uppercase font-semibold text-lg'><NavLink to="/home">Products</NavLink></li>
        <div class="wrapper">
        <li className='p-4 uppercase font-semibold text-lg'><NavLink to="/upcoming">Upcoming</NavLink></li>
        <span class="bg-green-600 rounded-full py-0.5 px-2.5 mt-1 text-white">3</span>
        </div>
        <li className='p-4 uppercase font-semibold text-lg'><NavLink to="/history">History</NavLink></li>
        <li className='p-4 uppercase font-semibold text-lg'><NavLink to="/cart">Cart</NavLink></li>
        <li className='p-4 uppercase font-semibold text-lg'><NavLink to="/account">Profile</NavLink></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-green-600 m-4'>GROWERS.</h1>
          <li className='p-4 border-b border-white uppercase'><NavLink to="/home">Products</NavLink></li>
          <div class="wrapper">
          <span class="bg-green-600 rounded-full text-white py-1 px-3 mr-20 justify-center">3</span>
          <li className='p-4 border-b border-white uppercase'><NavLink to="/upcoming">Upcoming</NavLink></li>
          
          </div>
          <li className='p-4 border-b border-white uppercase'><NavLink to="/history">History</NavLink></li>
          <li className='p-4 border-b border-white uppercase'><NavLink to="/cart">Cart</NavLink></li>
          <li className='p-4 uppercase'><NavLink to="/account">Profile</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;

