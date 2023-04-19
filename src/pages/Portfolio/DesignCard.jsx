import classNames from 'classnames'
import React, { useState } from 'react'

function DesignCard({ way, link1, link2, link3, header, text, viewLink }) {

    const [main, setMain] = useState("1")
    console.log(main)

    const Mainimage = () => {
        if (main === "1") {
            return (
                <img class="h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart " src={link1} alt="cardMainItem" />
            )
        } else if (main === "2") {
            return (
                <img class="h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart " src={link2} alt="cardotherItem" />
            )
        } else if (main === "3") {
            return (
                <img class="h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart " src={link3} alt="" />
            )
        }
    }

    const WaySelect = () => {
        if (way === "right") {
            return (
                <div className='flex mobile:flex-wrap justify-around items-start max-w-screen-lg mx-auto py-8 gap-16'>

                    <div className="w-1/2">

                        <div>
                            <Mainimage />
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-3">

                            <div className={classNames({
                                "hidden": main === "1"
                            })} onClick={() => setMain("1")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link1} alt="cardMainItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "2"
                            })} onClick={() => setMain("2")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link2} alt="cardotherItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "3"
                            })} onClick={() => setMain("3")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link3} alt="" />

                            </div>

                        </div>

                    </div>

                    <div className='w-1/2 flex flex-col items-start justify-center gap-10'>

                        <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold'>{header}</h1>

                        <p className='text-base md:text-lg text-zinc-800'>{text}</p>

                        <a href={viewLink} target='_blank' className='px-6 py-2 border bg-transparent border-zinc-800 text-zinc-800
                        hover:bg-zinc-800 hover:text-zinc-100 transition-all'>
                            View Design
                        </a>

                    </div>

                </div>
            )
        } else if (way === "left") {
            return (
                <div className='flex mobile:flex-wrap justify-around items-start max-w-screen-lg mx-auto py-8 gap-16'>

                    <div className="w-1/2 desktop:hidden">

                        <div>
                            <Mainimage />
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-3">

                            <div className={classNames({
                                "hidden": main === "1"
                            })} onClick={() => setMain("1")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link1} alt="cardMainItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "2"
                            })} onClick={() => setMain("2")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link2} alt="cardotherItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "3"
                            })} onClick={() => setMain("3")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link3} alt="" />

                            </div>

                        </div>

                    </div>

                    <div className='w-1/2 flex flex-col items-start justify-center gap-10'>

                        <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold'>{header}</h1>

                        <p className='text-base md:text-lg text-zinc-800'>{text}</p>

                        <a href={viewLink} target='_blank' className='px-6 py-2 border bg-transparent border-zinc-800 text-zinc-800
                        hover:bg-zinc-800 hover:text-zinc-100 transition-all'>
                            View Design
                        </a>

                    </div>

                    <div className="w-1/2 mobile:hidden">

                        <div>
                            <Mainimage />
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-3">

                            <div className={classNames({
                                "hidden": main === "1"
                            })} onClick={() => setMain("1")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link1} alt="cardMainItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "2"
                            })} onClick={() => setMain("2")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link2} alt="cardotherItem" />

                            </div>

                            <div className={classNames({
                                "hidden": main === "3"
                            })} onClick={() => setMain("3")}>

                                <img className='h-auto rounded-lg border-2 border-zinc-600 shadow-xl animate-sliderStart cursor-pointer' src={link3} alt="" />

                            </div>

                        </div>

                    </div>

                </div>
            )

        }
    }


    return (
        <WaySelect />
    )
}

export default DesignCard