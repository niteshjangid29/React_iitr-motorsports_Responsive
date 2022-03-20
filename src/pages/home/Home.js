import React, { useState } from 'react'
import './Home.css'
import Navbars from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage-bg'></div>
      <div className='header'>
        <Navbars />
      </div>

      <Slider />

      <Footer />

    </div>
  )
}

export default Home
