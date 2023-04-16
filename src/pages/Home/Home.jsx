import React from 'react'

// Components
import HeroSec from './HeroSec'
import Slider from "./Slider"

function Home() {
  return (
    <div className='animate-sliderStart'>   

      <HeroSec />

      <Slider />

    </div>
  )
}

export default Home