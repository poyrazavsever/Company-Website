import React from 'react'
import { Timeline } from 'flowbite-react'

import { AiFillStar } from "react-icons/ai"
import {BsClockHistory} from "react-icons/bs"

function TimelineSec() {
    return (

        <div className='w-full desktop:w-2/3 mx-auto -z-20 mt-32'>

            <Timeline className='!-z-20 bg-gray-100 px-24 py-36 shadow-md relative'>

                <h1 className='font-mono font-semibold flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl absolute top-12'>
                    <span><BsClockHistory className='text-3xl'/></span>
                    Career Summary
                </h1>

                <AiFillStar className='absolute -top-6 -right-6 text-7xl rotate-12 text-gray-400' />

                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            November 2006
                        </Timeline.Time>
                        <Timeline.Title>
                            The birth of a "lazy" person
                        </Timeline.Title>
                        <Timeline.Body>
                            A child was born, who will probably do nothing in the future. He is as enthusiastic as he is lazy... He has dreams but likes to watch from afar.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>

                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            July 2019
                        </Timeline.Time>
                        <Timeline.Title>
                            Getting acquainted with the world of software & design
                        </Timeline.Title>
                        <Timeline.Body>
                            Facing the software while trying to cheat in the game on a summer's day? Long story...
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>

                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            February 2020
                        </Timeline.Time>
                        <Timeline.Title>
                            Meet "Web Development" and start designing websites!
                        </Timeline.Title>
                        <Timeline.Body>
                            I start designing websites and I realize that I am very bad at it. But even the worst can improve, right? Worst of all, I stay like this.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>

                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            December 2021
                        </Timeline.Time>
                        <Timeline.Title>
                            I meet nice people and improve myself!
                        </Timeline.Title>
                        <Timeline.Body>
                            I draw a road map for myself based on the advice and experiences of the people I meet. And I'm trying to stick to that roadmap.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>


            </Timeline>

        </div>
    )
}

export default TimelineSec