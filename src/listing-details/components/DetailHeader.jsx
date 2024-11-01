import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { TbGasStation } from "react-icons/tb";
function DetailHeader({carDetail}) {
  return (
    <div>
      <h2 className='font-bold text-3xl'>
        {carDetail?.listingTitle}</h2>
        <p className='text-sm'>{carDetail?.tagline}</p>
   
   <div className='flex gap-2 mt-3'>
   <div className='flex gap-2 items-center p-2 px-3 bg-blue-50 rounded-full'>
   <FaCalendarAlt className='h-5 w-5 text-primary' />
   <h2 className='text-primary text-sm'>{carDetail?.year}</h2>
   </div>

   <div className='flex gap-2 items-center p-2 px-3 bg-blue-50 rounded-full'>
   <IoIosSpeedometer  className='h-5 w-5 text-primary' />
   <h2 className='text-primary text-sm'>{carDetail?.mileage}</h2>
   </div>

   <div className='flex gap-2 items-center p-2 px-3 bg-blue-50 rounded-full'>
   <GiGearStickPattern  className='h-5 w-5 text-primary' />
   <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
   </div>


   <div className='flex gap-2 items-center p-1 px-3 bg-blue-50 rounded-full'>
   <TbGasStation   className='h-5 w-5 text-primary' />
   <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
   </div>
   
   </div>

    </div>
  )
}

export default DetailHeader
