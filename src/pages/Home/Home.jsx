import React from 'react'

// Components
import HeroSec from './HeroSec'
import Slider from "./Slider"
import Content from './Content'
import Team from './Team'

function Home() {
  return (
    <div className='animate-sliderStart'>

      <HeroSec />

      <Slider />

      <div className='md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-24'>
        
        <Content />
        
        <Team />

      </div>

    </div>
  )
}

export default Home