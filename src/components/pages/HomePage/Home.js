import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from './Data'
import Pricing from '../../Pricing'

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home
