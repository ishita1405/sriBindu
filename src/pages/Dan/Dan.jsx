import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import DanaHero from './DanaHero'
import DanaForm  from "./DanaForm"
const Dan = () => {
  return (
    <div>
        <Navbar />
        <DanaHero />
        <DanaForm />
        <Footer />
      
    </div>
  )
}

export default Dan
