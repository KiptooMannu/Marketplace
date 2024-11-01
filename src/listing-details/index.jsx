import Header from '@/components/Header'
import React from 'react'
import DetailHeader from './components/DetailHeader'
import { CarImages, CarListing } from '@/configs_Backend/Schema';
import Service from '@/Shared/Service';
import { eq } from 'drizzle-orm';
import { useParams } from 'react-router-dom';
import db from '@/configs_Backend';

function ListingDetail() {
    const {id}=useParams();
    const [carDetail,setCarDetail]=useState();


    useEffect(()=>{
        GetCarDetail();
    },[])

    const GetCarDetail=async()=>{
        const result=await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.id,id));

        const resp=Service.FormatResult(result);

        setCarDetail(resp[0]);
    }


  return (
    <div>
      <Header/>

      <div className='p-10 md:p-20'>
        {/* Header detail component */}
        <DetailHeader carDetail={carDetail}/>
      </div>

<h2>

</h2>

    </div>
  )
}

export default ListingDetail
