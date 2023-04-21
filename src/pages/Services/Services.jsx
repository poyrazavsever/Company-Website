import React from 'react'
import Clients from './Clients'

// Component
import ServiceCard from './ServiceCard'

// Data
import servicePlans from "./servicePlans"



function Services() {
  return (

    <div className='max-w-screen-xl mx-auto'>

      <section class="bg-white dark:bg-gray-900">
        <div class="pt-12 pb-4 px-12 mx-auto max-w-screen-md lg:px-0 lg:pb-6">
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Work With Me!</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Let's organize and design something together with you and let your brilliant ideas come to life. You can see the comments made about me and the work I have done below.</p>
          </div>
        </div>
      </section>

      <div className='flex items-center justify-around mt-8'>

        <div className='flex flex-wrap items-start justify-center gap-12'>
          {servicePlans.map((plan) => (

            <ServiceCard planName={plan.planName} price={plan.price} contents={plan.content} sugges={plan.sugges} />

          ))}
        </div>

      </div>

      <div>
        <Clients />
      </div>


    </div>
  )
}

export default Services