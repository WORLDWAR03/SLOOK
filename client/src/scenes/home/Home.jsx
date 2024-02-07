import React from 'react'
import MainCarousel from './MainCarousel'
import Navbar from '../global/Navbar'
import ShoppingList from './ShoppingList'
import Footer from '../global/Footer'
import Subscribe from './Subscribe'
import Login from '../../components/Login'

function Home() {
  return (
    <div>
      <MainCarousel/>
      <ShoppingList/>
      
      <Footer/>


      </div>
  )
}

export default Home