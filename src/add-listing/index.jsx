import React from 'react'
import Header from '@/components/Header'
import carDetails from './../Shared/carDetails.json'
import InputField from './component/InputField'
import Dropdownfield from './component/Dropdownfield'
import TextAreaField from './component/TextAreaField'
import { Separator } from '@radix-ui/react-select'

function Addlisting() {
  return (
    <div>
      <Header/>
      <div className=' px-10 md:px-20 my-10 '>
        <h2 className='font-bold text-3xl mb-6'>Add New Listing </h2>

        <form className='p-10 border rounded-xl'>
          {/* Car Details */}
          <div>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
              {carDetails.carDetails.map((item,index)=>(
                  <div key = {index}>
                    <label className='text-sm'>{item?.label}{item.required&&<span className='text-red-800'>*</span>}</label>
                    {item.fieldType==='text' || item.fieldType=== 'number'?<InputField item={item}/>
                    :item.fieldType=='dropdown'?<Dropdownfield item={item}/> 
                    :item.fieldType=='textarea'?<TextAreaField item={item}/> :null}
                    </div>

              ))}
            </div>
          </div>
          <Separator className='my-6'/>
          {/* Featureslist */}
          <div>
            <h2  className='font-medium text-xl my-6 '>Features</h2>
          </div>
          {/* Car Images */}
        </form>
      </div>
    </div>
  )
}

export default Addlisting
