import React from 'react'

import {BiMessageSquareDetail, BiMailSend, BiUserCircle} from "react-icons/bi"

function Form() {
    return (
        <div className='w-64 sm:w-72 md:w-80 lg:w-96'>

            <div class="mb-6">
                <div class="pointer-events-none flex items-center justify-start gap-1 mb-2">
                    <BiUserCircle className='text-md text-zinc-500' />
                    <label htmlFor="input-group-1" className='text-zinc-500 text-sm font-medium pointer-events-none'>Your Name</label>
                </div>
                <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 pl-4 p-2.5  dark:bg-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-blue-500" placeholder="Your Name" />
            </div>

            <div class="mb-6">
                <div class="pointer-events-none flex items-center justify-start gap-1 mb-2">
                    <BiMailSend className='text-md text-zinc-500' />
                    <label htmlFor="input-group-1" className='text-zinc-500 text-sm font-medium pointer-events-none'>Your E-mail</label>
                </div>
                <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 pl-4 p-2.5  dark:bg-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-blue-500" placeholder="example@pavsever.com" />
            </div>

            <div class="mb-6">
                <div class="pointer-events-none flex items-center justify-start gap-1 mb-2">
                    <BiMessageSquareDetail className='text-md text-zinc-500' />
                    <label htmlFor="input-group-1" className='text-zinc-500 text-sm font-medium pointer-events-none'>Your Message</label>
                </div>

                <textarea type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 pl-4 p-2.5  dark:bg-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-800 dark:focus:border-blue-500 h-36" placeholder="Your Message..." />
            </div>

            <button className='
            rounded-lg px-8 py-1 border text-gray-500 bg-gray-50 border-gray-300
            hover:bg-gray-500 hover:text-gray-50 hover:border-gray-500 transition-all
            '>
                Send
            </button>

        </div>
    )
}

export default Form