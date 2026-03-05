import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import TempleBanner from './TempleBanner'
import VideoGallery from './VideoGallery'

const Video = () => {
  return (
    <>
        <Navbar />
        <TempleBanner />
        <VideoGallery />
        <Footer />
      
    </>
  )
}

export default Video
