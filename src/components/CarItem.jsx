import React from 'react'

function CarItem({car}) {
  return (
    <div>
      <img src={car?.image} height={250} width={300}/>
   <div className='p-4'>
    <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
   </div>
    </div>

  )
}

export default CarItem
