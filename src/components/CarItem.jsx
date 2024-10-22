import React from 'react'

function CarItem({Car}) {
  return (
    <div>
      <img src={Car?.image} height={250} width={300}/>
    </div>
  )
}

export default CarItem
