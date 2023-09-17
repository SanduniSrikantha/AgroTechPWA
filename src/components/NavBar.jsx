import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-screen mx-auto px-4 text-white bg-black'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>GROWERS.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Products</li>
        <li className='p-4'>Upcoming</li>
        <li className='p-4'>History</li>
        <li className='p-4'>Cart</li>
        <li className='p-4'>Profile</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>GROWERS.</h1>
          <li className='p-4 border-b border-gray-600'>Products</li>
          <li className='p-4 border-b border-gray-600'>Upcoming</li>
          <li className='p-4 border-b border-gray-600'>History</li>
          <li className='p-4 border-b border-gray-600'>Cart</li>
          <li className='p-4'>Profile</li>
      </ul>
    </div>
  );
};

export default NavBar;

