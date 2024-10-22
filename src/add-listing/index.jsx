import React from 'react'
import Header from '@/components/Header'
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
          </div>
          {/* Featureslist */}
          {/* Car Images */}
        </form>
      </div>
    </div>
  )
}

export default Addlisting
