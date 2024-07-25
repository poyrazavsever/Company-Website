import React from 'react'
import DesignCard from './DesignCard'

function Designs() {

  return (

    <div className='mt-24'>

      <div className='flex flex-col justify-center items-start gap-16'>

        <DesignCard
          way="right"
          link1="images/designs/pavs1.PNG"
          link2="images/designs/pavs1.PNG"
          link3="images/designs/pavs1.PNG"
          header="Butik Elbise Website Tasarımı"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam pariatur modi mollitia aspernatur error tempora vel quibusdam architecto? Perspiciatis possimus vero qui dolore doloribus aperiam accusamus nulla quod excepturi."
          viewLink="/"
        />

        <DesignCard
          way="left"
          link1="images/designs/pavs1.PNG"
          link2="images/designs/pavs1.PNG"
          link3="images/designs/pavs1.PNG"
          header="Butik Elbise Website Tasarımı"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam pariatur modi mollitia aspernatur error tempora vel quibusdam architecto? Perspiciatis possimus vero qui dolore doloribus aperiam accusamus nulla quod excepturi."
          viewLink="/"
        />

        <DesignCard
          way="right"
          link1="images/designs/pavs1.PNG"
          link2="images/designs/pavs1.PNG"
          link3="images/designs/pavs1.PNG"
          header="Butik Elbise Website Tasarımı"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam pariatur modi mollitia aspernatur error tempora vel quibusdam architecto? Perspiciatis possimus vero qui dolore doloribus aperiam accusamus nulla quod excepturi."
          viewLink="/"
        />

        <DesignCard
          way="left"
          link1="images/designs/pavs1.PNG"
          link2="images/designs/pavs1.PNG"
          link3="images/designs/pavs1.PNG"
          header="Butik Elbise Website Tasarımı"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam pariatur modi mollitia aspernatur error tempora vel quibusdam architecto? Perspiciatis possimus vero qui dolore doloribus aperiam accusamus nulla quod excepturi."
          viewLink="/"
        />

      </div>

    </div>

  )
}

export default Designs
