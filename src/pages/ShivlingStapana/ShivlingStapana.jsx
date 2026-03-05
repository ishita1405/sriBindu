import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ShivlingGallery from './ShivlingGallery'
import ShivlingVideoGallery from './ShivlingVideoGallery'
import ShivlingBanner from './ShivlingBanner'
const ShivlingStapana = () => {
  return (
    <div>
      <Navbar />
      <ShivlingBanner />
      <ShivlingGallery />
      <ShivlingVideoGallery />
      <Footer />
      
    </div>
  )
}

export default ShivlingStapana
