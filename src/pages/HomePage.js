import React from 'react'
import Header from '../layout/Header'
import Hero from '../components/Hero'
import Vision from '../components/Vision'
import Repairers from '../components/Repairers'
import Community from '../components/Community'
import Benefits from '../components/Benefits'
import Footer from '../layout/Footer'

const HomePage = () => {
  
  let imgSrc = process.env.PUBLIC_URL;

  return (
    <div>
    <div className="bg-gray-50">
    <Header/>
        <Hero
          image={`${imgSrc}/img/Frame 1984077788.png`}
        />
    </div>
       
        <Vision
          image={`${imgSrc}/img/Frame 1984077814 (1).png`}
        />
        <Repairers/>
        <Community/>
        <Benefits/>
        <Footer/>
    </div>
  )
}

export default HomePage