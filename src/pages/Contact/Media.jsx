import React from 'react'
import classNames from 'classnames'

// Icons
import {
    AiFillYoutube,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail
} from "react-icons/ai"

function Media() {



    // Social Media Data

    const socialData = [
        { icon: AiFillYoutube, text: "Youtube | Poyraz Avsever", link: "https://www.youtube.com" },
        { icon: AiFillLinkedin, text: "LinkedIn | Poyraz Avsever ", link: "https://www.youtube.com" },
        { icon: AiFillGithub, text: "Github | Poyraz Avsever ", link: "https://www.youtube.com" },
        { icon: AiFillInstagram, text: "Instagram | Poyraz Avsever ", link: "https://www.youtube.com" },
        { icon: AiFillInstagram, text: "Instagram | Pavs Design", link: "https://www.youtube.com", 
        gap: true },
        { icon: AiFillInstagram, text: "Instagram | Kod Canlar", link: "https://www.youtube.com" },

    ]

    // Social Media Box
    const SocialBox = ({ Icon, Text, Link }) => {
        return (
            <div className='flex flex-col items-start group'>
                <a href={Link} target='_blank' className='flex items-center gap-2'>
                    <Icon className='text-md text-zinc-500 group-hover:text-zinc-900 transition-all' />
                    <p className='text-zinc-500 text-sm font-medium pointer-events-none group-hover:text-zinc-900 transition-all'>{Text}</p>
                </a>
            </div>
        )

    }

    return (
        <div className='flex flex-col items-start gap-3'>

            <div>
                <h2 className='text-lg font-semibold text-zinc-500'>- Follow Me</h2>
            </div>

            <div className='flex flex-col items-start gap-2'>
                {socialData.map((data) => (
                    <div className={classNames({
                        "mt-2" : data.gap
                    })}>
                        <div className={classNames({
                            "w-full h-[1px] rounded-full bg-zinc-500 mb-4" : true,
                            "hidden" : !data.gap,
                            "visible" : data.gap
                        })}></div>
                        <SocialBox key={data.text} Icon={data.icon} Text={data.text} Link={data.link} />
                    </div>


                ))}
            </div>

        </div>
    )
}

export default Media