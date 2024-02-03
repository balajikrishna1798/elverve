import React, { useEffect, useState } from 'react'
import FullSpectrum from '../../components/full-spectrum/Full_spectrum'
import HeroSection from '../../components/hero-section/HeroSection'
import UnifiedTeam from '../../components/unified-team/UnifiedTeam'
import FullTech from '../../components/full-tech/full-tech'
import Footer from '../../components/footer/Footer'
import Navigation  from '../../components/navigation/Navigation'
import Products from '../../components/products/products'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div> 
    
      <Navigation />

     
      <HeroSection   />
      <UnifiedTeam />
      <FullSpectrum  />
      <FullTech />
      <Products />
      <Footer />
     
      
      </div>
    
  )
}

export default Home