import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCars from './components/MostSearchedCars'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Category/>
      <MostSearchedCars/>

    </div>
  )
}

export default Home
