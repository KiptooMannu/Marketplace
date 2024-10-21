import React from 'react'
import Data from '../Shared/Data'

function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-center text-3xl mb-6'>Browse By Type</h2>
      <div className='gap-6 p-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9'>
        {Data.Category.map((category,index)=>
        <div className='hover:shadow-md cursor-pointer border rounded-xl p-3 items-center flex flex-col  '>
            <img src={category.icon} width={35} height={35}/>
            <h2 className='mt-2'>{category.name}</h2>
            </div>
        )}
      </div>
    </div>
  )
}

export default Category
