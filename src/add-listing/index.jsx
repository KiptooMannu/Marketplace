import React, { useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import Header from '@/components/Header';
import carDetails from './../Shared/carDetails.json';
import InputField from './component/InputField';
import Dropdownfield from './component/Dropdownfield';
import TextAreaField from './component/TextAreaField';
import { Content, Separator } from '@radix-ui/react-select';
import features from './../Shared/Features.json';
import { Button } from '@/components/ui/button';

import db from '../configs_Backend/index.js';
import IconField from './component/IconField';
import UploadImages from './component/UploadImages';
import { BiLoaderAlt } from "react-icons/bi";
import {toast} from './../components/ui/sonner'
import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment'
import { useUser } from '@clerk/clerk-react'
import { CarListing } from '@/configs_Backend/Schema';



function Addlisting() {
  const [formData, setFormData] = useState([]);
  const [featuresData,setFeaturesData]=useState([]);
  const [triggerUploadImages,setTriggerUploadImages]=useState(); 
  const [loader,setLoader]=useState(false);
   const navigate=useNavigate();
   const {user}=useUser();
   const [searchParams]=useSearchParams();
   const [carInfo,setCarInfo]=useState();



   const mode = searchParams.get('mode');
   const recordId=searchParams.get('id');


   useEffect(()=>{
    if(mode=='edit')
      {
          GetListingDetail();
      }
  },[]);

  
   const GetListingDetail=async()=>{
    const result=await db.select().from(features)
    const resp=Service.FormatResult(result)
    setFeaturesData(resp)
   }

  const handleInputChange = (name, value) => { 
    console.log('Field:', name, 'Value:', value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const testConnection = async () => {
    try {
      await db.select().from(CarListing).limit(1);
      console.log("Connection to database successful!");
    } catch (error) {
      console.error("Error testing connection:", error);
    }
  };

  useEffect(() => {
    testConnection(); // Test database connectivity on mount
  }, []);

  const handleFeatureChange=(name,value)=>{
    setFeaturesData((prevData)=>({
        ...prevData,
        [name]: value || false, // default to false if unchecked
    }))
console.log(featuresData)
}


  const onSubmit = async (e) => {
    setLoader(true);
        e.preventDefault();
        console.log(formData);
        toast('Please Wait...')
        if(mode=='edit')
          {
              const result = await db.update(CarListing).set({
                  ...formData,
                  features:featuresData,
                  createdBy:user?.primaryEmailAddress?.emailAddress,
                  userName:user?.fullName,
                  userImageUrl:user?.imageUrl,
                  postedOn:moment().format('DD/MM/yyyy')
              }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id}) ;
              console.log(result);
              navigate('/profile')
              setLoader(false);
          }
          else{
              try{
                  const result=await db.insert(CarListing).values({
                      ...formData,
                      features:featuresData,
                      createdBy:user?.primaryEmailAddress?.emailAddress,
                      userName:user?.fullName,
                      userImageUrl:user?.imageUrl,
                      postedOn:moment().format('DD/MM/yyyy')
                  },
              ).returning({id:CarListing.id});
                  if(result)
                  {
                      console.log("Data Saved")
                      setTriggerUploadImages(result[0]?.id);
                      setLoader(false);
                  }
              }catch(e){
                  setLoader(false);
                  toast('Please fill all required fields')
                  console.log("Error",e)
              }
      }
          
      }
  
     



  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl mb-6">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm gap-2 mb-2 items-center flex">
                   <IconField icon={item?.icon}/>
                   
                    {item?.label}
                    {item.required && <span className="text-red-800">*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                  ) : item.fieldType === 'dropdown' ? (
                    <Dropdownfield item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* Features list */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)}
                                    checked={featuresData?.[item.name]}/>
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <Separator className='my-6'/>
          {/* Car Images */}
          <UploadImages triggerUploadImages={triggerUploadImages}
          carInfo={carInfo}
          mode={mode}
          setLoader={(v)=>{setLoader(v);navigate('/profile')}}/>
          <div className="mt-10 flex justify-end">
          <Button type="button" 
                    disabled={loader}
                    onClick={(e)=>onSubmit(e)}>
                        {!loader?'Submit':<BiLoaderAlt className='animate-spin text-lg' />}
                        </Button>
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default Addlisting;
