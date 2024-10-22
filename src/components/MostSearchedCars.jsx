import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './CarItem';  


function MostSearchedCars() {
    console.log(FakeData.carList);
  return (
    <div>
      <h2 className='font-bold text-center text-3xl my-16'>Most Searched Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {FakeData.carList.map((car, index) => (
          <CarItem car={car} />
        ))}
        </div>
    
    </div>
  )
}

export default MostSearchedCars
