import React from 'react'

// Components
import HeroSec from './HeroSec'
import Slider from "./Slider"
import TimelineSec from './Timeline'
import Gallery from "./Gallery"

function Home() {
  return (
    <div>

      <HeroSec />

      <Slider />

      <TimelineSec />

      <Gallery />

    </div>
  )
}

export default Home