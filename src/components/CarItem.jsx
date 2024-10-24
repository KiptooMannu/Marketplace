import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

function CarItem({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer '>
     <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
     
     
      <img src={car?.image} height={250} width={"100%"}
      className='rounded-t-xl'
      />
   <div className='p-4'>
    <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
    <Separator/>
    <div className='grid grid-cols-3 mt-5'>
        <div className='flex flex-col items-center'>
        <BsFuelPump className='text-lg mb-2' />
            <h2>{car.fuelType}  </h2>
        </div>

        <div className='flex flex-col items-center'>
        <IoSpeedometerOutline className='text-lg mb-2' />
            <h2>{car.miles}  </h2>
        </div>


        <div className='flex flex-col items-center'>
        <GiGearStickPattern className='text-lg mb-2' />
            <h2>{car.gearType}  </h2>
        </div>
    </div>
    <Separator className='my-2'/>

    <div className='flex items-center justify-between'>
        <h2 className='font-bold text-xl'>{car.price}</h2>
        <h2 className='text-primary text-sm flex gap-2 items-center'>

            View Details     <MdOpenInNew /></h2>
    </div>
   </div>
    </div>

  )
}

export default CarItem
