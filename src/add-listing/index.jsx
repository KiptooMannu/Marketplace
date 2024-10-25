import React, { useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import Header from '@/components/Header';
import carDetails from './../Shared/carDetails.json';
import InputField from './component/InputField';
import Dropdownfield from './component/Dropdownfield';
import TextAreaField from './component/TextAreaField';
import { Separator } from '@radix-ui/react-select';
import features from './../Shared/Features.json';
import { Button } from '@/components/ui/button';
import { CarListing } from '@/configs_Backend/Schema';
import db from './../configs_Backend/index.js';
import IconField from './component/IconField';

function Addlisting() {
  const [formData, setFormData] = useState([]);
  const [featuresData,setFeaturesData]=useState([]);
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
        [name]:value
    }))
console.log(featuresData)
}


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data on submit:", formData);

    try {
      const result = await db.insert(CarListing).values(formData);
      console.log("Data Saved:", result);
      alert("Listing added successfully!");
    } catch (error) {
      console.error("Error during submission:", error.message || error); 
      alert(`An error occurred: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl mb-6">Add New Listing</h2>
        <form className="p-10 border rounded-xl">
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
                    <InputField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === 'dropdown' ? (
                    <Dropdownfield item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange} />
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
          <div className="mt-10 flex justify-end">
            <Button onClick={(e) => onSubmit(e)}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addlisting;
