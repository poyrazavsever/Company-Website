import React from 'react'
import Form from './Form'
import Banner from './Banner'
import Media from './Media'


function Contact() {
  return (
    <div className='animate-sliderStart max-w-2xl mx-auto flex flex-col items-start'>

      <Banner />

      <div className='flex items-start justify-around gap-12 flex-wrap sm:flex-nowrap'>
        <Form />

        <Media />
      </div>

    </div>
  )
}

export default Contact