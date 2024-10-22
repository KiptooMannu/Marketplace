import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './CarItem';  
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function MostSearchedCars() {
    console.log(FakeData.carList);
  return (
    <div className='mx-20'>
      <h2 className='font-bold text-center text-3xl mt-16 mb-7'>Most Searched Cars</h2>




      <Carousel>
  <CarouselContent>
    {FakeData.carList.map((car, index) => (
         <CarouselItem className="basis-1/4">
        <CarItem car={car} />
         </CarouselItem>
    
        ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


   

    </div>

  )
}

export default MostSearchedCars
