import React from 'react'
import Icon from '../../components/Icon'
function Slider() {

  const slider = "w-[90%] h-[90px] m-auto relative grid place-items-center mt-16"

  const slide = "flex justify-around items-center w-[250px] h-[90px] p-[15px] opacity-40 rounded-sm ml-12"

  const slideIcon = "text-gray-700 w-full"

  const slideTest = "text-gray-700 text-xl font-medium w-full"

  return (
    <div className='bg-primary-200 w-screen'>

      <div className={slider}>

        <div className="flex w-[3500px] animate-sliderAnimation">

          {/* First 7 */}

          <div className={slide}>
            <Icon name="csharp" className={slideIcon} size={24} />
            <span className={slideTest}>ASP.Net</span>
          </div>

          <div className={slide}>
            <Icon name="react" className={slideIcon} size={36} />
            <span className={slideTest}>React</span>
          </div>

          <div className={slide}>
            <Icon name="figma" className={slideIcon} size={36} />
            <span className={slideTest}>Figma</span>
          </div>

          <div className={slide}>
            <Icon name="nodejs" className={slideIcon} size={36} />
            <span className={slideTest}>Express</span>
          </div>

          <div className={slide}>
            <Icon name="bootstrap" className={slideIcon} size={36} />
            <span className={slideTest}>Bootstrap</span>
          </div>


          <div className={slide}>
            <Icon name="tailwind" className={slideIcon} size={36} />
            <span className={slideTest}>Tailwind</span>
          </div>

          <div className={slide}>
            <Icon name="photshop" className={slideIcon} size={36} />
            <span className={slideTest}>Photoshop</span>
          </div>

          {/* Repeat */}

          <div className={slide}>
            <Icon name="csharp" className={slideIcon} size={36} />
            <span className={slideTest}>ASP.Net</span>
          </div>

          <div className={slide}>
            <Icon name="react" className={slideIcon} size={36} />
            <span className={slideTest}>React</span>
          </div>

          <div className={slide}>
            <Icon name="figma" className={slideIcon} size={36} />
            <span className={slideTest}>Figma</span>
          </div>

          <div className={slide}>
            <Icon name="nodejs" className={slideIcon} size={36} />
            <span className={slideTest}>Express</span>
          </div>

          <div className={slide}>
            <Icon name="bootstrap" className={slideIcon} size={36} />
            <span className={slideTest}>Bootstrap</span>
          </div>


          <div className={slide}>
            <Icon name="tailwind" className={slideIcon} size={36} />
            <span className={slideTest}>Tailwind</span>
          </div>

          <div className={slide}>
            <Icon name="photshop" className={slideIcon} size={36} />
            <span className={slideTest}>Photoshop</span>
          </div>



        </div>

      </div>





    </div>
  )
}

export default Slider