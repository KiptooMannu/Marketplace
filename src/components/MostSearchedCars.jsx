import FakeData from '@/Shared/FakeData'
import React, { useEffect ,useState} from 'react'
import CarItem from './CarItem';  
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
 
  import {desc ,eq} from 'drizzle-orm'

import Service from '@/Shared/Service';
import { CarImages, CarListing } from '../../Configs/Schema';
import db from '../../Configs/index';




function MostSearchedCars() {
  const [carList,setCarList]=useState([]);
useEffect(()=>{
  GetPopularCarList();
 },[])

  const GetPopularCarList=async()=>{
      const result=await db.select().from(CarListing)
      .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10)

      const resp =Service.FormatResult(result);
      console.log(resp)

      
      setCarList(resp);
     
  }

    console.log(FakeData.carList);
  return (
    <div className='mx-20'>
      <h2 className='font-bold text-center text-3xl mt-16 mb-7'>Most Searched Cars</h2>




      <Carousel>
  <CarouselContent>
    {carList.map((car, index) => (
         <CarouselItem key={index}className="basis-1/4">
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
