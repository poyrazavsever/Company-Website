import React from 'react'
import { Timeline } from 'flowbite-react'

import { AiFillStar } from "react-icons/ai"

function TimelineSec() {
    return (

        <div className='w-full desktop:w-2/3 desktop:mx-auto -z-20 mt-32'>

            <Timeline className='!-z-20 sm:px-24 px-6 py-36 shadow-lg relative border-t border-zinc-200'>

                <h1 className='font-mono font-semibold flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl absolute top-12'>
                    Career Summary
                </h1>

                <AiFillStar className='absolute -top-6 -right-6 text-7xl rotate-12 text-zinc-200 mobile:hidden' />

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
                            A child was born, probably in the future, who will only sleep. A kid who wants to do something but will never be able to. He will have many dreams, but he will watch them from afar.
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
                            My acquaintance with the world of software and design
                        </Timeline.Title>
                        <Timeline.Body>
                            Tired of everything on a hot summer day, this kid is tired of playing computer games. He decides to stop messing around with things in the game and cheat. Although it is difficult, he finally manages to cheat. He admires the tricks of his game and wonders how these tricks are made. While researching, they come across and get acquainted with the word software.
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
                            My introduction to "Web Development" and start designing websites
                        </Timeline.Title>
                        <Timeline.Body>
                            While dealing with software, I tried to focus on different areas. I tried programming a game, it didn't work. I tried to design a mobile application, it didn't work. I tried to design a desktop application. He didn't either. I finally started designing websites. I started learning technologies such as Html, Css, Javascript, React, Tailwind, Bootstrap, Node.js. And I decided to develop myself in the web space.
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
                            Based on the advice and experiences of the people I met, I drew a roadmap for myself. I have listened to people who are quite experts and experienced in their field. I learned more by doing a lot of research. And I made projects with what I learned. I renewed and published my old projects. But most importantly, I made new friends.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>


            </Timeline>

        </div>
    )
}

export default TimelineSec