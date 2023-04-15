import React from 'react'

// Icons 
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"

function FooterMenu() {

    const iconStyle = "text-neutral-500 text-2xl hover:rotate-[360deg] transition-all duration-500"
    return (
        <div className='pt-32 pb-12'>
            <div className="w-full flex flex-col gap-5 justify-center items-center desktop:px-32">
                <a href='/' className='text-neutral-500 hover:text-black transition-all'>© 2023 Poyraz Avsever</a>

                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                    <a href="https://www.instagram.com/p.avsever/" target="_blank" className={iconStyle} rel="noreferrer">
                        <AiOutlineInstagram/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCE5oct1IJPM4mReoYYuGFJw" target="_blank" className={iconStyle} rel="noreferrer">
                        <AiOutlineYoutube/>
                    </a>
                    <a href="https://www.linkedin.com/in/poyraz-avsever-252408233/" target="_blank" className={iconStyle} rel="noreferrer">
                        <AiOutlineLinkedin/>
                    </a>
                    <a href="https://github.com/poyrazavsever" target="_blank" className={iconStyle} rel="noreferrer">
                        <AiOutlineGithub/>
                    </a>
                    <a href="https://twitter.com/PoyrazAvsever" target="_blank" className={iconStyle} rel="noreferrer">
                        <AiOutlineTwitter/>
                    </a>

                </div>

            </div>
        </div >
    )
}

export default FooterMenu