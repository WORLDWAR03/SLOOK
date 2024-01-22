import React from 'react'
import MainCarousel from './MainCarousel'
import Navbar from '../global/Navbar'
import ShoppingList from './ShoppingList'
import Footer from '../global/Footer'
import Subscribe from './Subscribe'

function Home() {
  return (
    <div>
      <MainCarousel/>
      <ShoppingList/>
      <Subscribe/>
      <Footer/>

      </div>
  )
}

export default Home