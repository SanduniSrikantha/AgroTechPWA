import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='max-w-[1200px] flex justify-between items-center h-24 w-screen mx-auto px-4 text-black bg-white'>
      <h1 className='w-full text-3xl font-bold text-green-600'>GROWERS</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 uppercase font-semibold'>Products</li>
        <li className='p-4 uppercase font-semibold'>Upcoming</li>
        <li className='p-4 uppercase font-semibold'>History</li>
        <li className='p-4 uppercase font-semibold'>Cart</li>
        <li className='p-4 uppercase font-semibold'>Profile</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-green-600 m-4'>GROWERS.</h1>
          <li className='p-4 border-b border-gray-600 uppercase'>Products</li>
          <li className='p-4 border-b border-gray-600 uppercase'>Upcoming</li>
          <li className='p-4 border-b border-gray-600 uppercase'>History</li>
          <li className='p-4 border-b border-gray-600 uppercase'>Cart</li>
          <li className='p-4 uppercase'>Profile</li>
      </ul>
    </div>
  );
};

export default NavBar;

