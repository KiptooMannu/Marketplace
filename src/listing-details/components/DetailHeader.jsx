import React from 'react'

function DetailHeader({carDetail}) {
  return (
    <div>
      <h2 className='font-bold text-3xl'>
        {carDetail?.listingTitle}</h2>
        <p className='text-sm'>{carDetail?.tagline}</p>
    </div>
  )
}

export default DetailHeader
