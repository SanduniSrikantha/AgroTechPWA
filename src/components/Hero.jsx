import React from 'react';
import Typed from 'react-typed';
import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <div className='w-full bg-white py-12 px-4'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={HeroImage} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-green-600 font-bold text-xl mb-1 '>Welcome Growers.</p>
          <div class='flex justify-start items-center'>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-0'>GET YOUR</h1>
          <Typed 
                    className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-3 pl-2'
                    strings={['SEEDS', 'FERTILIZER', 'PESTICIDE']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
          />         
          </div>
          <p class="">
           Whether you're tending to acres of crops or nurturing a backyard garden, we've got you covered. 
          </p>
           { /*<button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
