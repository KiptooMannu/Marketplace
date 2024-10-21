import React from 'react';
import Search from './Search';
import teslaImage from '../assets/tesla.png'; // Adjust this path to match your file structure

function Hero() {
  return (
    <div className='bg-cyan-200 '>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc] '>
        <h2 className='text-lg'>Find cars for sale or rent near you</h2>
        <h2 className='text-[60px] font-bold items-center'>Find Your Dream Car</h2>
        <Search />
        <img src={teslaImage} alt="Tesla" className='mt-10' />
      </div>
    </div>
  );
}

export default Hero;
