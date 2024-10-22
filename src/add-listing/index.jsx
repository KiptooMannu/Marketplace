import React, { useEffect, useState } from 'react';

import Header from '@/components/Header';
import carDetails from './../Shared/carDetails.json';
import InputField from './component/InputField';
import Dropdownfield from './component/Dropdownfield';
import TextAreaField from './component/TextAreaField';
import { Separator } from '@radix-ui/react-select';
import features from './../Shared/Features.json';
import CheckBoxField from './component/CheckBoxField';
import { Button } from '@/components/ui/button';

function Addlisting() {
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    console.log('Field:', name, 'Value:', value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Log formData whenever it changes
  useEffect(() => {
    console.log('Updated formData:', formData);
  }, [formData]);

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
                  <label className="text-sm">
                    {item?.label}
                    {item.required && (
                      <span className="text-red-800">*</span>
                    )}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === 'dropdown' ? (
                    <Dropdownfield item={item}
                    handleInputChange={handleInputChange} />

                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField item={item} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* Featureslist */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <CheckBoxField />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <Button>Submit</Button>
          </div>
          {/* Car Images */}
        </form>
      </div>
    </div>
  );
}

export default Addlisting;
